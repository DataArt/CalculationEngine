package com.dataart.spreadsheetanalytics.engine;

import static com.dataart.spreadsheetanalytics.engine.DefineFunctionMeta.IN_OUT_SEPARATOR;
import static com.dataart.spreadsheetanalytics.engine.DefineFunctionMeta.KEYWORD;
import static java.lang.Runtime.getRuntime;
import static java.util.concurrent.TimeUnit.MINUTES;
import static org.apache.poi.ss.usermodel.Cell.CELL_TYPE_FORMULA;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.DirectoryStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import org.apache.poi.ss.formula.FormulaParseException;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;

import com.dataart.spreadsheetanalytics.api.engine.IDataModelLocation;
import com.dataart.spreadsheetanalytics.api.engine.IDataProvider;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataModelId;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.engine.temp.TempSqlDataSource;
import com.dataart.spreadsheetanalytics.model.DataModel;
import com.dataart.spreadsheetanalytics.model.DataSet;
import com.dataart.spreadsheetanalytics.model.DsRow;

/**
 * Simple {@link IDataProvider} implementations based on HashMaps.
 */
public class DataProvider implements IDataProvider {

    //this is a cache
    protected Map<String, DefineFunctionMeta> defines;

    //TODO: this should be a persistent storage
    protected Map<IDataModelId, IDataModel> dataModels;
    
    //TODO: this should be manageble with Scope.LOCAL and should be deleted at some action or period of time
    protected Map<String, IDataSet> localDataSets = new HashMap<>();
    
    protected ConcurrentMap<IDataModelId, BlockingQueue<IDataModel>> dataModelsForExecution;

    private TempSqlDataSource tempSqlDataSource;

    protected DataProvider() {}

    /**
     * Creates new instance of {@link IDataProvider} with nothing inside.
     * Since data provider can be filled up with data later. 
     */
    public static IDataProvider createEmptyDataProvider() {
        DataProvider dp = new DataProvider();
        dp.defines = new HashMap<>();
        dp.dataModels = new HashMap<>();
        dp.dataModelsForExecution = new ConcurrentHashMap<>();

        return dp;
    }

    @Override
    public Map<String, DefineFunctionMeta> getDefineFunctions() {
        return Collections.<String, DefineFunctionMeta> unmodifiableMap(defines);
    }

    @Override
    public void updateDefineFunctions() {
        ConcurrentHashMap<String, DefineFunctionMeta> map = new ConcurrentHashMap<>(defines.size());
        defines.clear();
        
        ExecutorService scanner = Executors.newFixedThreadPool(getRuntime().availableProcessors() > dataModels.size()
                                                                    ? dataModels.size()
                                                                    : getRuntime().availableProcessors());
        List<Runnable> targets = new ArrayList<>(dataModels.size());
        dataModels.forEach((k, v) -> { targets.add(() -> map.putAll(scanDataModelForDefines(v))); });

        try {
            targets.forEach(r -> scanner.execute(r));
            scanner.shutdown();
            scanner.awaitTermination(/* TODO */5, MINUTES);
        } catch (InterruptedException e) {
            // TODO
        }
        
        defines.putAll(map);
        
        dataModelsForExecution = warmUpDataModelsForExecutionCache(defines);
    }

    protected ConcurrentMap<IDataModelId, BlockingQueue<IDataModel>> warmUpDataModelsForExecutionCache(Map<String, DefineFunctionMeta> defs) {
        ConcurrentMap<IDataModelId, BlockingQueue<IDataModel>> map = new ConcurrentHashMap<>();
        /*TODO: cache size*/ int cacheSize = 10;
        for (DefineFunctionMeta dmeta : defs.values()) {
            IDataModelId id = dmeta.dataModelId();
            try {
                DataModel dm = copyModelInMemory((DataModel) getDataModel(id));
                BlockingQueue q = new ArrayBlockingQueue(cacheSize);
                for (int i = 0; i < cacheSize; i++) {
                    q.put(dm.clone());
                }
                map.put(id, q);
            } catch (IOException | CloneNotSupportedException | InterruptedException e) { /* TODO smth */ }
        }
        return map;
    }

    @Override
    public void addDefineFunction(DefineFunctionMeta meta) {
        this.defines.put(meta.name(), meta);
    }

    @Override
    public void updateDataModels(IDataModelLocation location) {
        if (!(location instanceof FileSystemDataModelLocation)) {
            throw new IllegalArgumentException(getClass().getSimpleName() + " does not support " + location.getClass().getSimpleName());
        }
        
        dataModels.clear();
        addDataModel(location);
    }

    @Override
    public void addDataModel(IDataModelLocation location) {
        if (!(location instanceof FileSystemDataModelLocation)) {
            throw new IllegalArgumentException(getClass().getSimpleName() + " does not support " + location.getClass().getSimpleName());
        }

        FileSystemDataModelLocation l = (FileSystemDataModelLocation) location;
        try (DirectoryStream<Path> stream = Files.newDirectoryStream(l.getPath())) {
            for (Path file : stream) {
                DataModel dm = new DataModel(file.toAbsolutePath().toString());
                dataModels.put(dm.dataModelId(), dm);
            }
        } catch (IOException e) {
            //TODO
        }
    }

    @Override
    public void addDataModel(IDataModel dataModel) {
        dataModels.put(dataModel.dataModelId(), dataModel);
    }

    @Override
    public IDataModel getDataModel(IDataModelId dataModelId) {
        return dataModels.get(dataModelId);
    }

    @Override
    public IDataModel loadDataModelForExecution(IDataModelId dataModelId, List<ICellAddress> inputAddresses, List<ICellValue> inputValues) throws IOException {
        /*
        IDataModel model = getDataModel(dataModelId);
        IDataModel execModel = copyModelInMemory((DataModel) model);
         */
        IDataModel execModel = dataModelsForExecution.get(dataModelId).poll();
        
        for (int i = 0; i < inputAddresses.size(); i++) {
            execModel.replaceCellValue(inputAddresses.get(i), inputValues.get(i));
        }

        try {
            dataModelsForExecution.get(dataModelId).put(execModel);
        } catch (InterruptedException e) {}
        
        return execModel;
    }
    
    @Override
    public IDataSet executeQuery(String query, List<Object> params) throws SQLException {
        //TODO: no validation!!
        
        if (tempSqlDataSource == null) { throw new IllegalStateException("TempSqlDataSource must be initialized to execute queries from QUERY function!"); }
        
        
        DataSet ds = new DataSet();
        
        ResultSet rs = tempSqlDataSource.executeQuery(query, params);
        
        ResultSetMetaData rsmd = rs.getMetaData();
        int cols = rsmd.getColumnCount();
        while (rs.next()) {
            
            DsRow dsrow = ds.createRow();
            
            for (int i = 1; i <= cols; i++) {
                dsrow.createCell().value(rs.getObject(i));
            }
        }
        
        return ds;
    }

    @Override
    public void saveDataSet(IDataSet dset, DataModelScope scope) {
        //TODO: it is a temporary solution
        switch (scope) {
            case LOCAL:
                this.localDataSets.put(dset.name(), dset);
                break;
            case GLOBAL:
                break;
        }
    }

    /**
     * Does exact copy of {@link DataModel} to memory.
     * There some cases when original model should contains different (replaced) values and
     * only then executed.
     * To avoid copying model to files this method can store it in memory.
     * 
     *  Implementation is based on {@link ByteArrayInputStream} and {@link ByteArrayOutputStream}
     *  and {@link Arrays#copyOf(boolean[], int)} to do the actual copy command.
     *  
     *  Returned {@link IDataModel} will not be equal to original one. But may contain the same Id.
     */
    protected DataModel copyModelInMemory(DataModel model) throws IOException {
        ByteArrayOutputStream os = new ByteArrayOutputStream();
        model.model.write(os);
        
        byte[] b = os.toByteArray();
        InputStream in = new ByteArrayInputStream(Arrays.copyOf(b, b.length));

        return new DataModel(in);
    }

    /**
     * Does full scan given {@link IDataModel} for DEFINE functions ({@link DefineFunctionMeta}).
     * 3 iterators are used inside to go through all the cells and find 'DEFINE' keyword.
     */
    protected Map<String, DefineFunctionMeta> scanDataModelForDefines(IDataModel dataModel) {
        DataModel dm = (DataModel) dataModel;
        
        Map<String, DefineFunctionMeta> map = new HashMap<>();

        for (Iterator sheeterator = dm.model.iterator(); sheeterator.hasNext();) {
            Sheet sh = (Sheet) sheeterator.next();
            for (Iterator rowterator = sh.iterator(); rowterator.hasNext();) {
                Row ro = (Row) rowterator.next();
                
                for (Iterator celterator = ro.iterator(); celterator.hasNext();) {
                    Cell ce = (Cell) celterator.next();
                    if (ce == null) { continue; }
                        
                    //for each cell we should scan for =DEFINE key word
                    //then get it and parse to DefineFunctionMeta
                    if (CELL_TYPE_FORMULA != ce.getCellType()) { continue; }
                    
                    try {
                        String formula = ce.getCellFormula();

                        if (!formula.startsWith(KEYWORD)) continue;

                        if (!formula.contains(IN_OUT_SEPARATOR)) {
                            //TODO log or throw?? if throw create exception?
                            throw new RuntimeException(KEYWORD + " function must contain a " + IN_OUT_SEPARATOR);
                        }

                        DefineFunctionMeta meta = DefineFunctionMeta.parse(formula);
                        meta.dataModelId(dataModel.dataModelId());

                        map.put(meta.name(), meta);
                    } catch (FormulaParseException e) {
                        //silent, we do not interested in custom formulas on this step
                    }
                }
            }
        }
        
        return map;
    }

    //TODO: this a temp solution, should be removed after QUERY clarification
    public void initTempSqlDataSource() {
        this.tempSqlDataSource = new TempSqlDataSource();
    }

    @Override
    public IDataSet getDataSet(IDataModelId dataModelId) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public IDataSet getDataSet(String name) {
        //TODO
        return localDataSets.get(name);
    }
    
}
