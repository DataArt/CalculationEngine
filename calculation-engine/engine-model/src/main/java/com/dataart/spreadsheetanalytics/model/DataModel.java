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

import java.io.IOException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

import org.apache.poi.ss.formula.EvaluationWorkbook;

import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataModelId;
import com.dataart.spreadsheetanalytics.api.model.IDmCell;
import com.dataart.spreadsheetanalytics.api.model.IDmRow;

public class DataModel implements IDataModel {

    protected IDataModelId dataModelId;
    protected String name;

    /** Workbook (table) representation: Row index, Column index, Data {@link IDmCell} */
    protected final Map<Integer, IDmRow> table;
    
    /** Lock on all write operations */
    protected final Lock writeLock = new ReentrantLock(true); 

    public DataModel(String name) throws IOException {
        this(name, new HashMap<>());
    }
    
    public DataModel(String name, Map<Integer, IDmRow> tableImpl) throws IOException {
        this.name = name;
        this.dataModelId = new DataModelId(UUID.randomUUID().toString());
        this.table = tableImpl;
    }

    @Override public IDataModelId dataModelId() { return this.dataModelId; }
    @Override public String name() { return this.name; }
    @Override public void name(String name) { this.name = name; }
    @Override public int length() { return this.table.size(); }

    @Override public IDmRow getRow(int row) { return this.table.get(Integer.valueOf(row)); }
    @Override public Iterator<IDmRow> iterator() { return this.table.values().iterator(); }
    
    @Override
    public void replaceCellValue(ICellAddress address, ICellValue value) {
        if (address == null ) { throw new IllegalArgumentException("ICellAddress cannot be null."); }

        try {
            writeLock.lock();
            IDmRow row = this.table.get(Integer.valueOf(address.row()));
            if (row == null) { throw new IllegalArgumentException(String.format("Row %s does not exist. Please create a row first.", address.row())); }
            
            IDmCell cell = row.getCell(Integer.valueOf(address.column()));
            if (cell == null) { throw new IllegalArgumentException(String.format("Cell %s does not exist. Please create a cell first.", address.column())); }
            
            ((DmCell) cell).content(value);
        }
        finally { writeLock.unlock(); }
    }

    @Override
    public void setRow(int row, IDmRow r) {
        try {
            writeLock.lock();
            this.table.put(Integer.valueOf(row), r);
        }
        finally { writeLock.unlock(); }
    }

    public EvaluationWorkbook toWorkbook() {
        return new WorkbookDataModel(this);
    }

    @Override
    public String toString() { return name(); }

}
