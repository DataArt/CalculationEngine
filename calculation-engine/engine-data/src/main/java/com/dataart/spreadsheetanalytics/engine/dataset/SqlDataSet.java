/*
Copyright 2015 DataArt Apps, Inc

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
package com.dataart.spreadsheetanalytics.engine.dataset;

import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

import com.dataart.spreadsheetanalytics.api.engine.DataSourceHub;
import com.dataart.spreadsheetanalytics.api.engine.ExternalServices;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.api.model.IDsRow;
import com.dataart.spreadsheetanalytics.engine.CalculationEngineException;
import com.dataart.spreadsheetanalytics.engine.datasource.TextDataSourceQuery;
import com.dataart.spreadsheetanalytics.model.AbstractLazyDataSet;
import com.dataart.spreadsheetanalytics.model.DataSet;

public class SqlDataSet extends AbstractLazyDataSet {

    protected String sql;
    protected String sqlDataSource;
    
    protected final Lock executionLock = new ReentrantLock(); 

    protected DataSourceHub dataSourceHub = ExternalServices.INSTANCE.getDataSourceHub();

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
        try {
            this.executionLock.lock();
            
            this.dataSet = (DataSet) this.dataSourceHub.executeQuery(this.sqlDataSource, new TextDataSourceQuery(this.sql), parameters.get());
            this.executed = Boolean.TRUE;
            
            return this.dataSet;
        } 
        finally { this.executionLock.unlock(); }
    }

    @Override public IDsRow addRow() { throw new CalculationEngineException("Cannot add rows to SQL DataSet."); }
    @Override public IDsRow addRow(int rowIdx) { throw new CalculationEngineException("Cannot add rows to SQL DataSet."); }
    
    @Override public IDsRow getRow(int rowIdx) { return this.dataSet.getRow(rowIdx); }

}
