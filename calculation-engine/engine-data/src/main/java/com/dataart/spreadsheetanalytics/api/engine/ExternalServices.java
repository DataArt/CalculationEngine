/*
Copyright 2015 DataArt, Inc.

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

    protected DataSetStorage dataSetStorage;
    protected DataModelStorage dataModelStorage;
    protected DataSourceHub dataSourceHub;
    protected AttributeFunctionStorage attributeFunctionStorage;
    
    protected DataSetOptimisationsCache dataSetOptimisationsCache;

    public DataSetStorage getDataSetStorage() { return dataSetStorage; }
    public void setDataSetStorage(DataSetStorage dataSetStorage) { this.dataSetStorage = dataSetStorage; }

    public DataModelStorage getDataModelStorage() { return dataModelStorage; }
    public void setDataModelStorage(DataModelStorage dataModelStorage) { this.dataModelStorage = dataModelStorage; }

    public DataSourceHub getDataSourceHub() { return dataSourceHub; }
    public void setDataSourceHub(DataSourceHub dataSourceHub) { this.dataSourceHub = dataSourceHub; }

    public AttributeFunctionStorage getAttributeFunctionStorage() { return attributeFunctionStorage; }
    public void setAttributeFunctionStorage(AttributeFunctionStorage attributeFunctionStorage) { this.attributeFunctionStorage = attributeFunctionStorage; }
    
    public DataSetOptimisationsCache getDataSetOptimisationsCache() { return dataSetOptimisationsCache; }
    public void setDataSetOptimisationsCache(DataSetOptimisationsCache dataSetOptimisationsCache) { this.dataSetOptimisationsCache = dataSetOptimisationsCache; }
    
}