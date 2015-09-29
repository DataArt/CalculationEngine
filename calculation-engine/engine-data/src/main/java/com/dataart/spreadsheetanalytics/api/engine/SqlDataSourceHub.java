package com.dataart.spreadsheetanalytics.api.engine;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.engine.SqlDataSource;

public enum SqlDataSourceHub {
    INSTANCE;
    private final static Logger log = LoggerFactory.getLogger(SqlDataSourceHub.class);

    protected Map<String, SqlDataSource> sqlDataSources;
 
    public IDataSet executeQuery(String dataSourceName, String query, List<Object> params) throws SQLException {
        
        SqlDataSource ds = sqlDataSources.get(sqlDataSources);
        if (ds == null) { throw new IllegalStateException(String.format("SqlDataSource with name %s is not found.", dataSourceName)); }
        
        return ds.executeQuery(query, params);
    }

    public void addSqlDataSource(SqlDataSource sqlDataSource) {
        this.sqlDataSources.put(sqlDataSource.name(), sqlDataSource);
    }
}
