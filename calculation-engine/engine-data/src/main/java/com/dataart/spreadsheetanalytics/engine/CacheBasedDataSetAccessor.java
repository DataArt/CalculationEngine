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

import javax.cache.Cache;
import javax.cache.Caching;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.dataart.spreadsheetanalytics.api.engine.DataSetAccessor;
import com.dataart.spreadsheetanalytics.api.engine.ExternalServices;
import com.dataart.spreadsheetanalytics.api.model.IDataModelId;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.api.model.ILazyDataSet;
import com.dataart.spreadsheetanalytics.api.model.ILazyDataSet.Parameters;

public class CacheBasedDataSetAccessor implements DataSetAccessor {
    private static final Logger log = LoggerFactory.getLogger(CacheBasedDataSetAccessor.class);
    
    public static final String DATA_SET_TO_ID_CACHE_NAME = "dataSetToIdCache";
    public static final String DATA_SET_TO_NAME_CACHE_NAME = "dataSetToNameCache";
    
    protected Cache<IDataModelId, IDataSet> dataSetToIdCache = Caching.getCache(DATA_SET_TO_ID_CACHE_NAME, IDataModelId.class, IDataSet.class);
    protected Cache<String, IDataSet> dataSetToNameCache = Caching.getCache(DATA_SET_TO_NAME_CACHE_NAME, String.class, IDataSet.class);
    
    @Override
    public void add(IDataSet dataSet) {
        this.add(dataSet, DataSetScope.GLOBAL);
    }
    
    @Override
    public void add(IDataSet dataSet, DataSetScope scope) {
        if (dataSet == null) { return; }
        if (dataSet.getName() == null) { throw new CalculationEngineException("DataSet must have a name."); }
        
        switch (scope) {
            case LOCAL: {
                this.dataSetToNameCache.put(dataSet.getName(), dataSet);
                this.dataSetToIdCache.put(dataSet.getDataModelId(), dataSet);
                break;
            }
            case GLOBAL: default: {
                this.dataSetToNameCache.put(dataSet.getName(), dataSet);
                this.dataSetToIdCache.put(dataSet.getDataModelId(), dataSet);
                break;
            }
        }
        
        log.debug("Saved new DataSet {} with scope {} to DataSetStorage", dataSet.getName(), scope);
    }

    @Override
    public IDataSet get(IDataModelId dataModelId) {
        IDataSet dset = this.dataSetToIdCache.get(dataModelId);
        if (dset == null) { throw new CalculationEngineException(String.format("No DataSet with id = %s is found in DataSet storage.", dataModelId)); }
        
        try { return this.isLazy(dset) ? ((ILazyDataSet) dset).get(Parameters.EMPTY) : dset; }
        catch (Exception e) { throw new CalculationEngineException(e); }
    }

    @Override
    public IDataSet get(String dataSetName) {
        return this.get(dataSetName, Parameters.EMPTY);
    }
    
    @Override
    public IDataSet get(String dataSetName, Parameters parameters) {
        DataSetOptimisationsCache optimisationsCaches = ExternalServices.INSTANCE.getDataSetOptimisationsCache();
        
        if (Parameters.EMPTY != parameters && optimisationsCaches.dataSetToLazyParameters.containsKey(parameters)) {
            return optimisationsCaches.dataSetToLazyParameters.get(parameters);
        }
        
        IDataSet dset = this.dataSetToNameCache.get(dataSetName);
        if (dset == null) { throw new CalculationEngineException(String.format("No DataSet with name = %s is found in DataSet storage.", dataSetName)); }

        try { dset = isLazy(dset) ? ((ILazyDataSet) dset).get(parameters) : dset; }
        catch (Exception e) { throw new CalculationEngineException(e); }
        
        if (Parameters.EMPTY != parameters) { optimisationsCaches.dataSetToLazyParameters.put(parameters, dset); }
        return dset;
    }

    @Override
    public boolean isLazy(String dataSetName) {
        return this.dataSetToNameCache.containsKey(dataSetName) && this.dataSetToNameCache.get(dataSetName) instanceof ILazyDataSet;
    }

    @Override
    public boolean isLazy(IDataSet dataSet) {    
        return dataSet instanceof ILazyDataSet;
    }

    public void setDataSetToIdCache(Cache<IDataModelId, IDataSet> dataSetToIdCache) { this.dataSetToIdCache = dataSetToIdCache; }
    public void setDataSetToNameCache(Cache<String, IDataSet> dataSetToNameCache) { this.dataSetToNameCache = dataSetToNameCache; }

}
