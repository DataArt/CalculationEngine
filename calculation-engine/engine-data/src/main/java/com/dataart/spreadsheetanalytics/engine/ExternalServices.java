package com.dataart.spreadsheetanalytics.engine;

import com.dataart.spreadsheetanalytics.api.engine.IDataModelStorage;
import com.dataart.spreadsheetanalytics.api.engine.IDataSetStorage;
import com.dataart.spreadsheetanalytics.api.engine.IDefineFunctionsCache;
import com.dataart.spreadsheetanalytics.api.engine.ISqlDataSourceHub;

/**
 * This is a singlethon class-facade to all external services 
 * needed for calculation engine to calculate and build graphs.
 * External Services are: DataSetStorage, DataModelStorage, DataSourceHub, etc.
 */
public enum ExternalServices {
    INSTANCE;

    protected IDataSetStorage dataSetStorage = DataSetStorage.INSTANCE;
    protected IDataModelStorage dataModelStorage = DataModelStorage.INSTANCE;
    protected ISqlDataSourceHub sqlDataSourceHub = SqlDataSourceHub.INSTANCE;
    protected IDefineFunctionsCache defineFunctionsCache = DefineFunctionsCache.INSTANCE;

    public IDataSetStorage getDataSetStorage() { return dataSetStorage; }
    public void setDataSetStorage(IDataSetStorage dataSetStorage) { this.dataSetStorage = dataSetStorage; }

    public IDataModelStorage getDataModelStorage() { return dataModelStorage; }
    public void setDataModelStorage(IDataModelStorage dataModelStorage) { this.dataModelStorage = dataModelStorage; }

    public ISqlDataSourceHub getSqlDataSourceHub() { return sqlDataSourceHub; }
    public void setSqlDataSourceHub(ISqlDataSourceHub sqlDataSourceHub) { this.sqlDataSourceHub = sqlDataSourceHub; }

    public IDefineFunctionsCache getDefineFunctionsCache() { return defineFunctionsCache; }
    public void setDefineFunctionsCache(IDefineFunctionsCache defineFunctionsCache) { this.defineFunctionsCache = defineFunctionsCache; }
    
}