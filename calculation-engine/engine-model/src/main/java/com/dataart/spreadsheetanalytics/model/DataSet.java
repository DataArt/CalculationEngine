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

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.UUID;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

import com.dataart.spreadsheetanalytics.api.model.IDataModelId;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.api.model.IDsRow;

public class DataSet implements IDataSet {

    protected IDataModelId dataModelId;
    protected String name;
    
    protected List<IDsRow> rows;
    
    protected final Lock atomicOperation = new ReentrantLock();

    public DataSet(String name) {
        this.name = name;
        this.dataModelId = new DataModelId(UUID.randomUUID().toString()); /*TODO: generate ID*/
        this.rows = new ArrayList<>();
    }

    @Override public IDataModelId dataModelId() { return this.dataModelId; }
    
    @Override public String name() { return name; }
    @Override public void name(String name) { this.name = name; }

    @Override public int length() { return this.rows.size(); }
    @Override public int width() { return rows.isEmpty() ? 0 : rows.get(0).width(); }

    @Override public List<IDsRow> rows() { return Collections.<IDsRow>unmodifiableList(this.rows); }
    
    public DsRow createRow() {
        try {
            atomicOperation.lock();
            
            DsRow row = new DsRow(rows.size() + 1);
            rows.add(row);
            return row;
        } finally {
            atomicOperation.unlock();
        }
    }

    @Override public Iterator<IDsRow> iterator() {
        return Collections.<IDsRow>unmodifiableList(rows).iterator();
    }

    @Override
    public String toString() {
        StringBuilder toString = new StringBuilder();
        rows.forEach(r -> toString.append(r).append("\n"));
        return toString.toString();
    }

}
