package com.dataart.spreadsheetanalytics.engine;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.TimeUnit;

import javax.cache.Cache;
import javax.cache.Cache.Entry;
import javax.cache.Caching;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.dataart.spreadsheetanalytics.api.engine.DataModelStorage;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataModelId;

public class CacheBasedDataModelStorage implements DataModelStorage {
    private final static Logger log = LoggerFactory.getLogger(CacheBasedDataModelStorage.class);
    
    public final static String DATA_MODEL_TO_ID_CACHE_NAME = "dataModelToIdCache";
    public final static String DATA_MODEL_TO_NAME_CACHE_NAME = "dataModelToNameCache";
    public final static String DATA_MODELS_FOR_EXECUTION_CACHE_NAME = "dataModelsForExecutionCache";

    protected Cache<IDataModelId, IDataModel> dataModelToIdCache = Caching.getCache(DATA_MODEL_TO_ID_CACHE_NAME, IDataModelId.class, IDataModel.class);
    protected Cache<String, IDataModel> dataModelToNameCache = Caching.getCache(DATA_MODEL_TO_NAME_CACHE_NAME, String.class, IDataModel.class);

    /* BlockingQueue<IDataModel> */
    protected Cache<IDataModelId, BlockingQueue> dataModelsForExecutionCache = Caching.getCache(DATA_MODELS_FOR_EXECUTION_CACHE_NAME, IDataModelId.class, BlockingQueue.class);

    @Override
    public void addDataModel(IDataModel dataModel) {
        this.dataModelToIdCache.put(dataModel.dataModelId(), dataModel);
        this.dataModelToNameCache.put(dataModel.name(), dataModel);
    }

    @Override
    public IDataModel getDataModel(IDataModelId dataModelId) {
        return this.dataModelToIdCache.get(dataModelId);
    }
    
    @Override
    public IDataModel getDataModel(String name) {
        return this.dataModelToNameCache.get(name);
    }

    @Override
    public Map<IDataModelId, IDataModel> getDataModels() {
        Map<IDataModelId, IDataModel> dms = new HashMap<>();
        for (Entry<IDataModelId, IDataModel> entry : dataModelToIdCache) {
            dms.put(entry.getKey(), entry.getValue());
        }
        return Collections.<IDataModelId, IDataModel> unmodifiableMap(dms);
    }
    
    @Override
    public IDataModel prepareDataModelForExecution(IDataModelId dataModelId, List<ICellAddress> inputAddresses, List<ICellValue> inputValues) throws Exception {
        log.debug("Preparing DataModel instance for execution...");
        
        IDataModel execModel = (IDataModel) this.dataModelsForExecutionCache.get(dataModelId).poll(5, TimeUnit.MINUTES);
        
        log.debug("Original DataModel: Id={}; Executional DataModel: Id={}.", dataModelId, execModel.dataModelId());
        
        for (int i = 0; i < inputAddresses.size(); i++) {
            execModel.replaceCellValue(inputAddresses.get(i), inputValues.get(i));
            log.debug("Replaced {} with {} in executional model.", inputAddresses.get(i), inputValues.get(i));
        }

        try { this.dataModelsForExecutionCache.get(dataModelId).put(execModel); }
        catch (InterruptedException e) { log.warn("Cannot return Executional DataModel to cache", e); }
        
        log.debug("DataModel instance for execution is prepared.");
        return execModel;
    }

    public void setDataModelToIdCache(Cache<IDataModelId, IDataModel> dataModelToIdCache) { this.dataModelToIdCache = dataModelToIdCache; }
    public void setDataModelToNameCache(Cache<String, IDataModel> dataModelToNameCache) { this.dataModelToNameCache = dataModelToNameCache; }
    public void setDataModelsForExecutionCache(Cache<IDataModelId, BlockingQueue> dataModelsForExecutionCache) { this.dataModelsForExecutionCache = dataModelsForExecutionCache; }
}
