package com.dataart.spreadsheetanalytics.engine;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.DirectoryStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
import java.util.concurrent.TimeUnit;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.dataart.spreadsheetanalytics.api.engine.IDataModelLocation;
import com.dataart.spreadsheetanalytics.api.engine.IDataModelStorage;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataModelId;
import com.dataart.spreadsheetanalytics.model.DataModel;

public enum DataModelStorage implements IDataModelStorage {
    INSTANCE;
    private final static Logger log = LoggerFactory.getLogger(DataModelStorage.class);

    protected Map<IDataModelId, IDataModel> dataModelsToId = new HashMap<>();
    protected Map<String, IDataModel> dataModelsToName = new HashMap<>();;
    
    protected ConcurrentMap<IDataModelId, BlockingQueue<IDataModel>> dataModelsForExecution;

    @Override
    public void addDataModels(IDataModelLocation location) {
        if (!(location instanceof FileSystemDataModelLocation)) {
            throw new IllegalArgumentException(getClass().getSimpleName() + " does not support " + location.getClass().getSimpleName() + ". Only " + FileSystemDataModelLocation.class.getSimpleName() + " is supported.");
        }

        FileSystemDataModelLocation l = (FileSystemDataModelLocation) location;
        try (DirectoryStream<Path> stream = Files.newDirectoryStream(l.getPath())) {
            for (Path file : stream) {
                DataModel dm = new DataModel(file.toAbsolutePath().toString());
                dataModelsToId.put(dm.dataModelId(), dm);
                dataModelsToName.put(dm.name(), dm);
            }
        } catch (IOException e) {
            //TODO
        }
    }

    @Override
    public void addDataModel(IDataModel dataModel) {
        dataModelsToId.put(dataModel.dataModelId(), dataModel);
        dataModelsToName.put(dataModel.name(), dataModel);
    }

    @Override
    public IDataModel getDataModel(IDataModelId dataModelId) {
        return dataModelsToId.get(dataModelId);
    }
    
    @Override
    public IDataModel getDataModel(String dataModelName) {
        return dataModelsToName.get(dataModelName);
    }
    
    @Override
    public IDataModel prepareDataModelForExecution(IDataModelId dataModelId, List<ICellAddress> inputAddresses, List<ICellValue> inputValues) throws Exception {
        log.debug(String.format("Preparing DataModel instance for execution..."));
        
        IDataModel execModel = dataModelsForExecution.get(dataModelId).poll(5, TimeUnit.MINUTES);
        
        log.debug(String.format("Original DataModel: Id=%s; Executional DataModel: Id=%s.", dataModelId, execModel.dataModelId()));
        
        for (int i = 0; i < inputAddresses.size(); i++) {
            execModel.replaceCellValue(inputAddresses.get(i), inputValues.get(i));
            log.debug(String.format("Replaced %s with %s in executional model.", inputAddresses.get(i), inputValues.get(i)));
        }

        try { dataModelsForExecution.get(dataModelId).put(execModel); }
        catch (InterruptedException e) { log.warn("Cannot return Executional DataModel to cache", e); }
        
        return execModel;
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
    
    @Override
    public ConcurrentMap<IDataModelId, BlockingQueue<IDataModel>> warmUpDataModelsForExecutionCache(Map<String, DefineFunctionMeta> defs) {
        ConcurrentMap<IDataModelId, BlockingQueue<IDataModel>> map = new ConcurrentHashMap<>();
        /*TODO: cache size*/ int cacheSize = 10;
        for (DefineFunctionMeta dmeta : defs.values()) {
            IDataModelId id = dmeta.dataModelId();
            try {
                BlockingQueue q = new ArrayBlockingQueue(cacheSize);
                for (int i = 0; i < cacheSize; i++) {
                    DataModel dm = copyModelInMemory((DataModel) getDataModel(id));
                    q.put(dm);
                }
                map.put(id, q);
            } catch (IOException | InterruptedException e) { /* TODO smth */ }
        }
        
        this.dataModelsForExecution = map;
        
        return map;
    }

    @Override
    public Set<IDataModel> getDataModels() {
        return Collections.unmodifiableSet(new HashSet<>(this.dataModelsToId.values()));
    }
}
