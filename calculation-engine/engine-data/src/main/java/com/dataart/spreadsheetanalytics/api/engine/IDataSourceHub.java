package com.dataart.spreadsheetanalytics.api.engine;

import java.sql.SQLException;
import java.util.List;

import com.dataart.spreadsheetanalytics.api.model.IDataSet;

public interface IDataSourceHub {

    void addSqlDataSource(SqlDataSource sqlDataSource);

    IDataSet executeSqlQuery(String sqlDataSource, String sql, List<Object> params) throws SQLException;

    IDataSet executeSqlQuery(String sql, List<Object> params) throws SQLException;
}
