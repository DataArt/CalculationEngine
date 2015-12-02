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
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;
import java.util.stream.Collectors;

import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.IDmCell;
import com.dataart.spreadsheetanalytics.api.model.IDmRow;

public class DmRow implements IDmRow {
    
    /** Row implementation: cell number to {@link IDmCell} */
    protected final Map<Integer, IDmCell> table;
    
    protected final Optional<Lock> writeLock;
    
    public DmRow() {
        this(new HashMap<>(), true);
    }
    
    public DmRow(Map<Integer, IDmCell> tableImpl, boolean doWriteLock) {
        this.table = tableImpl;
        this.writeLock = doWriteLock ? Optional.of(new ReentrantLock(true)) : Optional.<Lock>empty();
    }

    @Override public int width() { return this.table.size(); }

    @Override public Iterator<IDmCell> iterator() {
        List<IDmCell> cells = table.entrySet().stream()
                .sorted(Comparator.comparing(Map.Entry::getKey))
                .map(Map.Entry::getValue)
                .collect(Collectors.toList());
        return cells.iterator();
    }
    
    @Override
    public IDmCell getCell(int column) {
        return this.table.get(Integer.valueOf(column));
    }

    @Override
    public IDmCell getCell(ICellAddress address) {
        return address == null ? null : this.getCell(address.column());
    }
    
    @Override
    public void setCell(int column, IDmCell cell) {
        try {
            if (writeLock.isPresent()) { writeLock.get().lock(); }
            this.table.put(Integer.valueOf(column), cell);
        }
        finally { if (writeLock.isPresent()) { writeLock.get().unlock(); } }
    }
    
    @Override
    public void setCell(ICellAddress address, IDmCell cell) {
        if (address != null) { this.setCell(address.column(), cell); }        
    }

    @Override
    public int getFirstColumnIndex() {
        return this.table.keySet().stream().min(Integer::compare).orElse(Integer.valueOf(-1));
    }

    @Override
    public int getLastColumnIndex() {
        return this.table.keySet().stream().max(Integer::compare).orElse(Integer.valueOf(-1));
    }

}
