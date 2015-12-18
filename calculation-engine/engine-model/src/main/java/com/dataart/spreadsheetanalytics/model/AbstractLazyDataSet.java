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
package com.dataart.spreadsheetanalytics.model;

import java.util.Iterator;
import java.util.Spliterator;
import java.util.Spliterators;
import java.util.stream.Stream;
import java.util.stream.StreamSupport;

import com.dataart.spreadsheetanalytics.api.model.IDataModelId;
import com.dataart.spreadsheetanalytics.api.model.IDsRow;
import com.dataart.spreadsheetanalytics.api.model.ILazyDataSet;
import com.dataart.spreadsheetanalytics.engine.CalculationEngineException;

/**
 * Common code for {@link ILazyDataSet} classes.
 */
public abstract class AbstractLazyDataSet implements ILazyDataSet {

    protected static final CalculationEngineException NOT_EXECUTED = new CalculationEngineException("DataSet not executed.");
    
    protected DataSet dataSet;
    protected boolean executed;
        
    public AbstractLazyDataSet(String name) {
        this.dataSet = new DataSet(name);
    }

    @Override public IDataModelId getDataModelId() { return this.dataSet.getDataModelId(); }
    @Override public void setDataModelId(IDataModelId dataModelId) { this.dataSet.setDataModelId(dataModelId); }
    
    @Override public String getName() { return this.dataSet.getName(); }
    @Override public void setName(String name) { this.dataSet.setName(name); }

    @Override public int rowCount() {
        if (!this.executed) { throw NOT_EXECUTED; }
        return this.dataSet.rowCount();
    }
    
    @Override public Iterator<IDsRow> iterator() {
        if (!this.executed) { throw NOT_EXECUTED; }
        return this.dataSet.iterator();
    }
    
    @Override
    public Spliterator<IDsRow> spliterator() {
        if (!this.executed) { throw NOT_EXECUTED; }
        return Spliterators.<IDsRow>spliterator(this.iterator(), this.dataSet.rowCount(), 0);
    }

    @Override
    public Stream<IDsRow> stream() {
        if (!this.executed) { throw NOT_EXECUTED; }
        return StreamSupport.<IDsRow>stream(this.spliterator(), false);
    }
}
