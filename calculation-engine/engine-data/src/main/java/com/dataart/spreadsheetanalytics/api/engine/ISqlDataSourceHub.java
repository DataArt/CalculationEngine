package com.dataart.spreadsheetanalytics.api.engine;

import java.sql.SQLException;
import java.util.List;

import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.engine.QueryDefineFunctionMeta;
import com.dataart.spreadsheetanalytics.engine.SqlDataSource;

public interface ISqlDataSourceHub {

    IDataSet executeQuery(QueryDefineFunctionMeta meta, List<Object> params) throws SQLException;

    void addSqlDataSource(SqlDataSource sqlDataSource);
}
