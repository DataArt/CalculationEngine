package com.dataart.spreadsheetanalytics.api.engine.datasource;

import java.util.List;

import com.dataart.spreadsheetanalytics.api.model.IDataSet;

public interface DataSource {
    
    IDataSet executeQuery(DataSourceQuery query, List<Object> params) throws Exception;

    String name();

}