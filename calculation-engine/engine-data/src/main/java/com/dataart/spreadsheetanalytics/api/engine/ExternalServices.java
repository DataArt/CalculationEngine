package com.dataart.spreadsheetanalytics.api.engine;

import com.dataart.spreadsheetanalytics.engine.AttributeFunctionsCache;
import com.dataart.spreadsheetanalytics.engine.DataModelStorage;
import com.dataart.spreadsheetanalytics.engine.DataSetStorage;
import com.dataart.spreadsheetanalytics.engine.DataSourceHub;

/**
 * This is a singlethon class-facade to all external services 
 * needed for calculation engine to calculate and build graphs.
 */
public enum ExternalServices {
    INSTANCE;

    protected IDataSetStorage dataSetStorage = DataSetStorage.INSTANCE;
    protected IDataModelStorage dataModelStorage = DataModelStorage.INSTANCE;
    protected IDataSourceHub dataSourceHub = DataSourceHub.INSTANCE;
    protected IAttributeFunctionsCache attributeFunctionsCache = AttributeFunctionsCache.INSTANCE;

    public IDataSetStorage getDataSetStorage() { return dataSetStorage; }
    public void setDataSetStorage(IDataSetStorage dataSetStorage) { this.dataSetStorage = dataSetStorage; }

    public IDataModelStorage getDataModelStorage() { return dataModelStorage; }
    public void setDataModelStorage(IDataModelStorage dataModelStorage) { this.dataModelStorage = dataModelStorage; }

    public IDataSourceHub getDataSourceHub() { return dataSourceHub; }
    public void setDataSourceHub(IDataSourceHub dataSourceHub) { this.dataSourceHub = dataSourceHub; }

    public IAttributeFunctionsCache getAttributeFunctionsCache() { return attributeFunctionsCache; }
    public void setAttributeFunctionsCache(IAttributeFunctionsCache attributeFunctionsCache) { this.attributeFunctionsCache = attributeFunctionsCache; }
    
}