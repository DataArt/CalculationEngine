package com.dataart.spreadsheetanalytics.api.engine;

/**
 * This is a singlethon class-facade to all external services 
 * needed for calculation engine to calculate and build graphs.
 * External Services are: DataSetStorage, DataModelStorage, DataSourceHub, etc.
 */
public enum ExternalServices {
    INSTANCE;

    protected DataSetStorage dataSetStorage = DataSetStorage.INSTANCE;
    protected DataModelStorage dataModelStorage = DataModelStorage.INSTANCE;
    protected SqlDataSourceHub sqlDataSourceHub = SqlDataSourceHub.INSTANCE;
    protected DefineFunctionsCache defineFunctionsCache = DefineFunctionsCache.INSTANCE;

    public DataSetStorage getDataSetStorage() { return dataSetStorage; }
    public void setDataSetStorage(DataSetStorage dataSetStorage) { this.dataSetStorage = dataSetStorage; }

    public DataModelStorage getDataModelStorage() { return dataModelStorage; }
    public void setDataModelStorage(DataModelStorage dataModelStorage) { this.dataModelStorage = dataModelStorage; }

    public SqlDataSourceHub getSqlDataSourceHub() { return sqlDataSourceHub; }
    public void setSqlDataSourceHub(SqlDataSourceHub sqlDataSourceHub) { this.sqlDataSourceHub = sqlDataSourceHub; }

    public DefineFunctionsCache getDefineFunctionsCache() { return defineFunctionsCache; }
    public void setDefineFunctionsCache(DefineFunctionsCache defineFunctionsCache) { this.defineFunctionsCache = defineFunctionsCache; }
    
}