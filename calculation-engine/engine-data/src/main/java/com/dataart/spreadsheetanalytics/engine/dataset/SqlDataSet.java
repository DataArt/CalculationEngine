package com.dataart.spreadsheetanalytics.engine.dataset;

import com.dataart.spreadsheetanalytics.api.engine.ExternalServices;
import com.dataart.spreadsheetanalytics.api.engine.IDataSourceHub;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.model.AbstractLazyDataSet;
import com.dataart.spreadsheetanalytics.model.DataSet;

public class SqlDataSet extends AbstractLazyDataSet {

    protected String sql;
    protected String sqlDataSource;

    protected IDataSourceHub dataSourceHub = ExternalServices.INSTANCE.getDataSourceHub();

    public SqlDataSet(String name, String sql, String sqlDataSource) {
        super(name);
        this.sql = sql;
        this.sqlDataSource = sqlDataSource;
    }

    public SqlDataSet(String name, String sql) {
        this(name, sql, null);
    }

    @Override
    public IDataSet get(Parameters parameters) throws Exception {
        synchronized (this.executed) {
            if (this.executed) { return this.dataSet; }
            this.dataSet = (DataSet) dataSourceHub.executeSqlQuery(sqlDataSource, sql, parameters.getParameters());
        }
        
        this.executed = Boolean.TRUE;
        return this.dataSet;
    }
}