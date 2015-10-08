package com.dataart.spreadsheetanalytics.api.engine;

import java.util.List;

import com.dataart.spreadsheetanalytics.api.engine.datasource.DataSource;
import com.dataart.spreadsheetanalytics.api.engine.datasource.DataSourceQuery;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;

public interface DataSourceHub {

    void addDataSource(DataSource dataSource);
    
    void removeDataSource(DataSource dataSource);
    
    void removeDataSource(String dataSourceName);
    
    DataSource getDataSource(String dataSourceName);

    IDataSet executeQuery(String dataSourceName, DataSourceQuery query, List<Object> params) throws Exception;
}
