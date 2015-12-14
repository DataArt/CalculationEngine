/*
Copyright 2015 DataArt Apps, Inc

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
package com.dataart.spreadsheetanalytics.engine;

import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

import javax.cache.Cache;
import javax.cache.Cache.Entry;
import javax.cache.Caching;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.dataart.spreadsheetanalytics.api.engine.DataModelAccessor;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataModelId;

public class CacheBasedDataModelAccessor implements DataModelAccessor {
    private static final Logger log = LoggerFactory.getLogger(CacheBasedDataModelAccessor.class);
    
    public static final String DATA_MODEL_TO_ID_CACHE_NAME = "dataModelToIdCache";
    public static final String DATA_MODEL_TO_NAME_CACHE_NAME = "dataModelToNameCache";
    public static final String DATA_MODELS_FOR_EXECUTION_CACHE_NAME = "dataModelsForExecutionCache";

    protected Cache<IDataModelId, IDataModel> dataModelToIdCache = Caching.getCache(DATA_MODEL_TO_ID_CACHE_NAME, IDataModelId.class, IDataModel.class);
    protected Cache<String, IDataModel> dataModelToNameCache = Caching.getCache(DATA_MODEL_TO_NAME_CACHE_NAME, String.class, IDataModel.class);

    @Override
    public void add(IDataModel dataModel) {
        this.dataModelToIdCache.put(dataModel.getDataModelId(), dataModel);
        this.dataModelToNameCache.put(dataModel.getName(), dataModel);
        
        log.debug("DataModel {} is added to DataModelStorage.", dataModel.getName());
    }
    
    @Override
    public void addAll(Collection<IDataModel> dataModels) {
        dataModels.forEach(dm -> {
            if (dm == null) { return; }
            this.dataModelToIdCache.put(dm.getDataModelId(), dm);
            this.dataModelToNameCache.put(dm.getName(), dm);
        });
        
        log.debug("DataModels {} are added to DataModelStorage.", dataModels.stream().map(IDataModel::toString).collect(Collectors.<String>toList()));
    }

    @Override
    public IDataModel get(IDataModelId dataModelId) {
        return this.dataModelToIdCache.get(dataModelId);
    }
    
    @Override
    public IDataModel get(String dataModelName) {
        return this.dataModelToNameCache.get(dataModelName);
    }

    @Override
    public Map<IDataModelId, IDataModel> getAll() {
        Map<IDataModelId, IDataModel> dms = new HashMap<>();
        for (Entry<IDataModelId, IDataModel> entry : this.dataModelToIdCache) {
            dms.put(entry.getKey(), entry.getValue());
        }
        return Collections.<IDataModelId, IDataModel>unmodifiableMap(dms);
    }
    
    public void setDataModelToIdCache(Cache<IDataModelId, IDataModel> dataModelToIdCache) { this.dataModelToIdCache = dataModelToIdCache; }
    public void setDataModelToNameCache(Cache<String, IDataModel> dataModelToNameCache) { this.dataModelToNameCache = dataModelToNameCache; }
}
