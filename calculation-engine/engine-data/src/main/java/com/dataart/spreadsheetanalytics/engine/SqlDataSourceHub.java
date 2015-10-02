package com.dataart.spreadsheetanalytics.engine;

import java.sql.SQLException;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.dataart.spreadsheetanalytics.api.engine.ISqlDataSourceHub;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;

public enum SqlDataSourceHub implements ISqlDataSourceHub {
    INSTANCE;
    private final static Logger log = LoggerFactory.getLogger(SqlDataSourceHub.class);

    protected ConcurrentMap<String, SqlDataSource> sqlDataSources = new ConcurrentHashMap<>();
    
    @Override
    public void addSqlDataSource(SqlDataSource sqlDataSource) {
        this.sqlDataSources.put(sqlDataSource == null ? null : sqlDataSource.name(), sqlDataSource);
        log.debug("Added SqlDataSource with name {}", sqlDataSource == null ? null : sqlDataSource.name());
    }

    @Override
    public IDataSet executeQuery(QueryDefineFunctionMeta meta, List<Object> params) throws SQLException {
        log.debug("Trying to execute SQL query for in SqlDataSource {}, SQL: {}", meta.dataSource(), meta.sqlQuery());
        
        SqlDataSource ds = this.sqlDataSources.get(meta.dataSource());
        
        if (ds == null) {
            IllegalStateException e = new IllegalStateException(String.format("SqlDataSource with name %s is not found.", meta.dataSource()));
            log.error("SqlDataSource not found error.", e);
            throw e;
        }
        
        return ds.executeQuery(meta.sqlQuery(), params);
    }
}
