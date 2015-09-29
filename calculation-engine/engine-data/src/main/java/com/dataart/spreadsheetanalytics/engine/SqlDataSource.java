package com.dataart.spreadsheetanalytics.engine;

import java.sql.SQLException;
import java.util.List;

import com.dataart.spreadsheetanalytics.api.model.IDataSet;

public interface SqlDataSource {
    
    IDataSet executeQuery(String query, List<Object> params) throws SQLException;

    String name();

}