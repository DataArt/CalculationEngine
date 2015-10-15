package com.dataart.spreadsheetanalytics.engine;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import javax.cache.Cache;
import javax.cache.Cache.Entry;
import javax.cache.Caching;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.dataart.spreadsheetanalytics.api.engine.DataModelStorage;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataModelId;

public class CacheBasedDataModelStorage implements DataModelStorage {
    private static final Logger log = LoggerFactory.getLogger(CacheBasedDataModelStorage.class);
    
    public static final String DATA_MODEL_TO_ID_CACHE_NAME = "dataModelToIdCache";
    public static final String DATA_MODEL_TO_NAME_CACHE_NAME = "dataModelToNameCache";
    public static final String DATA_MODELS_FOR_EXECUTION_CACHE_NAME = "dataModelsForExecutionCache";

    protected Cache<IDataModelId, IDataModel> dataModelToIdCache = Caching.getCache(DATA_MODEL_TO_ID_CACHE_NAME, IDataModelId.class, IDataModel.class);
    protected Cache<String, IDataModel> dataModelToNameCache = Caching.getCache(DATA_MODEL_TO_NAME_CACHE_NAME, String.class, IDataModel.class);

    @Override
    public void addDataModel(IDataModel dataModel) {
        this.dataModelToIdCache.put(dataModel.dataModelId(), dataModel);
        this.dataModelToNameCache.put(dataModel.name(), dataModel);
        
        log.debug("DataModel {} is added to DataModelStorage.", dataModel.name());
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
        return Collections.<IDataModelId, IDataModel>unmodifiableMap(dms);
    }
    
    public void setDataModelToIdCache(Cache<IDataModelId, IDataModel> dataModelToIdCache) { this.dataModelToIdCache = dataModelToIdCache; }
    public void setDataModelToNameCache(Cache<String, IDataModel> dataModelToNameCache) { this.dataModelToNameCache = dataModelToNameCache; }
}
