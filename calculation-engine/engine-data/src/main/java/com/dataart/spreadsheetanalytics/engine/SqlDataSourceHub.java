package com.dataart.spreadsheetanalytics.engine;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.dataart.spreadsheetanalytics.api.engine.ISqlDataSourceHub;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;

public enum SqlDataSourceHub implements ISqlDataSourceHub {
    INSTANCE;
    private final static Logger log = LoggerFactory.getLogger(SqlDataSourceHub.class);

    protected Map<String, SqlDataSource> sqlDataSources;
 
    @Override
    public IDataSet executeQuery(String queryDataModel, List<Object> params) throws SQLException {
        
        return null;
        /*SqlDataSource ds = sqlDataSources.get(sqlDataSources);
        if (ds == null) { throw new IllegalStateException(String.format("SqlDataSource with name %s is not found.", dataSourceName)); }
        
        return ds.executeQuery(queryDataModel, params);*/
    }
    
    @Override
    public void addSqlDataSource(SqlDataSource sqlDataSource) {
        this.sqlDataSources.put(sqlDataSource.name(), sqlDataSource);
    }
}
