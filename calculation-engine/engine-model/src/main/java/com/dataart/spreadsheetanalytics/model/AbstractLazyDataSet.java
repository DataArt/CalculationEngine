/*
Copyright 2015 DataArt, Inc.

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
import java.util.List;

import com.dataart.spreadsheetanalytics.api.model.IDataModelId;
import com.dataart.spreadsheetanalytics.api.model.IDsRow;
import com.dataart.spreadsheetanalytics.api.model.ILazyDataSet;

public abstract class AbstractLazyDataSet implements ILazyDataSet {

    private static final RuntimeException NOT_EXECUTED = new IllegalStateException("DataSet not executed.");
    
    protected DataSet dataSet;
    protected Boolean executed = Boolean.FALSE;
        
    public AbstractLazyDataSet(String name) {
        this.dataSet = new DataSet(name);
    }

    @Override public IDataModelId dataModelId() { return this.dataSet.dataModelId(); }
    @Override public String name() { return this.dataSet.name(); }
    @Override public void name(String name) { this.dataSet.name(name); }

    @Override public int length() {
        if (!executed) { throw NOT_EXECUTED; }
        return this.dataSet.length();
    }
    @Override public int width() {
        if (!executed) { throw NOT_EXECUTED; }
        return this.dataSet.width();
    }
    @Override public List<IDsRow> rows() {
        if (!executed) { throw NOT_EXECUTED; }
        return this.dataSet.rows();
    }
    @Override public Iterator<IDsRow> iterator() {
        if (!executed) { throw NOT_EXECUTED; }
        return this.dataSet.iterator();
    }
    @Override public boolean hasNext() {
        if (!executed) { throw NOT_EXECUTED; }
        return this.dataSet.hasNext();
    }
    @Override public IDsRow next() {
        if (!executed) { throw NOT_EXECUTED; }
        return this.dataSet.next();
    }

}
