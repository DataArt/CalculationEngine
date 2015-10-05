package com.dataart.spreadsheetanalytics.engine;

import java.sql.SQLException;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.dataart.spreadsheetanalytics.api.engine.IDataSourceHub;
import com.dataart.spreadsheetanalytics.api.engine.SqlDataSource;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;

public enum DataSourceHub implements IDataSourceHub {
    INSTANCE;
    private final static Logger log = LoggerFactory.getLogger(DataSourceHub.class);

    protected ConcurrentMap<String, SqlDataSource> sqlDataSources = new ConcurrentHashMap<>();
    
    @Override
    public void addSqlDataSource(SqlDataSource sqlDataSource) {
        this.sqlDataSources.put(sqlDataSource.name() == null ? "" : sqlDataSource.name(), sqlDataSource);
        log.debug("Added SqlDataSource with name {}", sqlDataSource.name());
    }

    @Override
    public IDataSet executeSqlQuery(String sql, List<Object> params) throws SQLException {
        return this.executeSqlQuery("", sql, params);
    }
    
    @Override
    public IDataSet executeSqlQuery(String sqlDataSource, String sql, List<Object> params) throws SQLException {
        log.debug("Trying to execute SQL query for in SqlDataSource {}, SQL: {}", sqlDataSource, sql);
        
        SqlDataSource ds = this.sqlDataSources.get(sqlDataSource == null ? "" : sqlDataSource);
        
        if (ds == null) {
            IllegalStateException e = new IllegalStateException(String.format("SqlDataSource with name %s is not found.", sqlDataSource));
            log.error("SqlDataSource not found error.", e);
            throw e;
        }
        
        return ds.executeQuery(sql, params);
    }
}
