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

import java.util.Comparator;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Optional;
import java.util.UUID;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;
import java.util.stream.Collectors;

import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataModelId;
import com.dataart.spreadsheetanalytics.api.model.IDmCell;
import com.dataart.spreadsheetanalytics.api.model.IDmRow;

public class DataModel implements IDataModel {

    protected IDataModelId dataModelId;
    protected String name;

    /** Workbook (table) representation: Row index, Column index, Data {@link IDmCell} */
    protected final Map<Integer, IDmRow> table;
    
    /** Lock on all row write operations */
    protected final Optional<Lock> writeLock;
    protected final Optional<Lock> cellWriteLock;

    public DataModel(String name) {
        this(name, new HashMap<>(), true);
    }
    
    public DataModel(String name, Map<Integer, IDmRow> tableImpl, boolean doWriteLock) {
        this.dataModelId = new DataModelId(UUID.randomUUID().toString());
        this.name = name;
        this.table = tableImpl;
        this.writeLock = doWriteLock ? Optional.of(new ReentrantLock(true)) : Optional.<Lock>empty();
        this.cellWriteLock = doWriteLock ? Optional.of(new ReentrantLock(true)) : Optional.<Lock>empty();
    }

    @Override public IDataModelId dataModelId() { return this.dataModelId; }
    @Override public String name() { return this.name; }
    @Override public void name(String name) { this.name = name; }

    @Override public Iterator<IDmRow> iterator() {
        return this.table.entrySet()
                         .stream()
                         .sorted(Comparator.comparing(Entry::getKey))
                         .map(Entry::getValue)
                         .collect(Collectors.<IDmRow>toList())
                         .listIterator();
    }

    @Override
    public IDmRow getRow(int rowIdx) {
        return this.table.get(Integer.valueOf(rowIdx));
    }

    @Override
    public IDmRow getRow(ICellAddress address) {
        return address == null ? null : this.getRow(address.row());
    }

    @Override
    public void setRow(int rowIdx, IDmRow row) {
        if (rowIdx < 0) { return; }
        
        try {
            if (writeLock.isPresent()) { writeLock.get().lock(); }
            this.table.put(Integer.valueOf(rowIdx), row);
        }
        finally { if (writeLock.isPresent()) { writeLock.get().unlock(); } }
    }
    
    @Override
    public void setRow(ICellAddress address, IDmRow row) {
        if (address != null ) { this.setRow(address.row(), row); }
    }

    @Override
    public IDmCell getCell(int rowIdx, int cellIdx) {
        IDmRow r = this.getRow(rowIdx);
        return r == null ? null : r.getCell(cellIdx);
    }
    
    @Override
    public IDmCell getCell(ICellAddress address) {
        return address == null ? null : this.getCell(address.row(), address.column());
    }

    @Override
    public void setCell(int rowIdx, int cellIdx, IDmCell cell) {
        if (rowIdx < 0 || cellIdx < 0) { return; }
        
        try {
            if (cellWriteLock.isPresent()) { cellWriteLock.get().lock(); }
            
            IDmRow r = this.getRow(rowIdx);
            if (r == null) { 
                r = new DmRow(); 
                this.setRow(rowIdx, r); 
            }
            
            r.setCell(cellIdx, cell);
        }
        finally { if (cellWriteLock.isPresent()) { cellWriteLock.get().unlock(); } }
    }
    
    @Override
    public void setCell(ICellAddress address, IDmCell cell) {
        if (address != null ) { this.setCell(address.row(), address.column(), cell); }
    }
    
    @Override public int length() { return this.table.size(); }

    @Override
    public int getFirstRowIndex() {
        return this.table.keySet().stream().min(Integer::compare).orElse(Integer.valueOf(-1));
    }

    @Override
    public int getLastRowIndex() {
        return this.table.keySet().stream().max(Integer::compare).orElse(Integer.valueOf(-1));
    }

    @Override
    public String toString() { return name(); }

}
