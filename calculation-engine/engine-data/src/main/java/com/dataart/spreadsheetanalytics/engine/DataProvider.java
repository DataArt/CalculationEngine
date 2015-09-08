package com.dataart.spreadsheetanalytics.engine;

import static com.dataart.spreadsheetanalytics.engine.DefineFunctionMeta.IN_OUT_SEPARATOR;
import static com.dataart.spreadsheetanalytics.engine.DefineFunctionMeta.KEYWORD;
import static java.lang.Runtime.getRuntime;
import static java.util.concurrent.TimeUnit.MINUTES;
import static org.apache.poi.ss.usermodel.Cell.CELL_TYPE_FORMULA;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.PipedInputStream;
import java.io.PipedOutputStream;
import java.nio.file.DirectoryStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;

import com.dataart.spreadsheetanalytics.api.engine.IDataModelLocation;
import com.dataart.spreadsheetanalytics.api.engine.IDataProvider;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataModelId;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.DataModel;

/**
 * Simple {@link IDataProvider} realisation based on HashMaps.
 */
public class DataProvider implements IDataProvider {

    //this is a cache
    protected Map<String, DefineFunctionMeta> defines;

    //TODO: this should be a persistent storage
    protected Map<IDataModelId, IDataModel> dataModels;

    protected DataProvider() {}

    public static IDataProvider createEmptyDataProvider() {
        DataProvider dp = new DataProvider();
        dp.defines = new HashMap<>();
        dp.dataModels = new HashMap<>();

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
    public IDataModel createModelForExecution(IDataModelId dataModelId, List<ICellAddress> inputAddresses, List<ICellValue> inputValues) throws IOException {
        IDataModel model = getDataModel(dataModelId);
        IDataModel execModel = copyModelInMemory((DataModel) model);

        for (int i = 0; i < inputAddresses.size(); i++) {
            execModel.replaceCellValue(inputAddresses.get(i), inputValues.get(i));
        }

        return execModel;
    }

    protected IDataModel copyModelInMemory(DataModel model) throws IOException {
        ByteArrayOutputStream os = new ByteArrayOutputStream();
        model.model.write(os);

        PipedInputStream in = new PipedInputStream();
        PipedOutputStream out = new PipedOutputStream(in);

        //this strange (from first view) code does copy from one stream to another.
        //It uses 2 threads - new and current one. So do not worry about it.
        new Thread(() -> {
            try {
                os.writeTo(out);
            } catch (IOException e) {}
        }).start();

        return new DataModel(in);
    }

    protected Map<String, DefineFunctionMeta> scanDataModelForDefines(IDataModel dataModel) {
        DataModel dm = (DataModel) dataModel;
        
        Map<String, DefineFunctionMeta> map = new HashMap<>();

        for (Iterator sheeterator = dm.model.iterator(); sheeterator.hasNext();) {
            Sheet sh = (Sheet) sheeterator.next();
            for (Iterator rowterator = sh.iterator(); rowterator.hasNext();) {
                Row ro = (Row) rowterator.next();
                for (Iterator celterator = ro.iterator(); celterator.hasNext();) {
                    Cell ce = (Cell) celterator.next();
                    if (ce == null) continue;
                        
                    //for each cell we should scan for =DEFINE key word
                    //then get it and parse to DefineFunctionMeta
                    if (CELL_TYPE_FORMULA != ce.getCellType()) continue;
                    
                    String formula = ce.getCellFormula();
                    if (!formula.startsWith(KEYWORD)) continue;
                    
                    if (!formula.contains(IN_OUT_SEPARATOR)) {
                        //TODO log or throw?? if throw create exception?
                        throw new RuntimeException(KEYWORD + " function must contain a " + IN_OUT_SEPARATOR);
                    }
                    
                    //TODO: parsing mechanism might be better, use POI's parser or think about it again
                    //DEFINE("name", A1, A2, "#", B1, B2, B3)
                    String[] ptgs = formula
                                        .replace(KEYWORD, "")
                                        .replace("(", "")
                                        .replace(")", "")
                                        .replace("\"", "")
                                        .replace(" ", "")
                                        .split(",");
                    if (ptgs.length < 2) {
                        //TODO log or throw?? if throw create exception?                        
                        throw new RuntimeException("Number of Ptgs in " + KEYWORD + " function must be more than 2");
                    }

                    DefineFunctionMeta meta = new DefineFunctionMeta();
                    meta.name(ptgs[0]);
                    meta.dataModelId(dataModel.dataModelId());

                    List<ICellAddress> in = new LinkedList<>();
                    List<ICellAddress> out = new LinkedList<>();
                    
                    boolean passedSeparator = false;

                    for (int i = 1; i < ptgs.length; i++) {

                        if (IN_OUT_SEPARATOR.equals(ptgs[i])) { passedSeparator = true; continue; }

                        if (passedSeparator) {
                            out.add(A1Address.fromA1Address(ptgs[i]));
                        } else {
                            in.add(A1Address.fromA1Address(ptgs[i]));
                        }
                    }
                    
                    meta.inputs(in);
                    meta.outputs(out);
                    
                    map.put(meta.name(), meta);
                }
            }
        }
        
        return map;
    }

}
