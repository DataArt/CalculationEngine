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
package com.dataart.spreadsheetanalytics.api.engine;

import com.dataart.spreadsheetanalytics.engine.DataSetOptimisationsCache;

/**
 * This is a singlethon class-facade to all external services 
 * needed for calculation engine to calculate and build graphs.
 */
public enum ExternalServices {
    INSTANCE;

    protected DataSetAccessor dataSetAccessor;
    protected DataModelAccessor dataModelAccessor;
    protected DataSourceHub dataSourceHub;
    protected MetaFunctionAccessor attributeFunctionStorage;
    protected DataSetOptimisationsCache dataSetOptimisationsCache;

    public DataSetAccessor getDataSetAccessor() { return this.dataSetAccessor; }
    public void setDataSetAccessor(DataSetAccessor dataSetAccessor) { this.dataSetAccessor = dataSetAccessor; }

    public DataModelAccessor getDataModelAccessor() { return this.dataModelAccessor; }
    public void setDataModelAccessor(DataModelAccessor dataModelAccessor) { this.dataModelAccessor = dataModelAccessor; }

    public DataSourceHub getDataSourceHub() { return this.dataSourceHub; }
    public void setDataSourceHub(DataSourceHub dataSourceHub) { this.dataSourceHub = dataSourceHub; }

    public MetaFunctionAccessor getAttributeFunctionStorage() { return this.attributeFunctionStorage; }
    public void setAttributeFunctionStorage(MetaFunctionAccessor attributeFunctionStorage) { this.attributeFunctionStorage = attributeFunctionStorage; }
    
    public DataSetOptimisationsCache getDataSetOptimisationsCache() { return this.dataSetOptimisationsCache; }
    public void setDataSetOptimisationsCache(DataSetOptimisationsCache dataSetOptimisationsCache) { this.dataSetOptimisationsCache = dataSetOptimisationsCache; }
    
}