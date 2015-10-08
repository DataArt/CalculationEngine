package com.dataart.spreadsheetanalytics.engine.datasource;

import com.dataart.spreadsheetanalytics.api.engine.datasource.DataSourceQuery;

public class TextDataSourceQuery implements DataSourceQuery {
    
    protected String query;
    public TextDataSourceQuery(String query) { this.query = query; }
    public String query() { return query; }
    public void query(String query) { this.query = query; }

}
