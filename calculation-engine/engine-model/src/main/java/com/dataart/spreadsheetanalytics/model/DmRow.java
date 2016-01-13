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
import java.util.Spliterator;
import java.util.Spliterators;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import java.util.stream.StreamSupport;

import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.IDmCell;
import com.dataart.spreadsheetanalytics.api.model.IDmRow;

/**
 * Implementation of {@link IDmRow}.
 * 
 * Uses Map to store Cells with their indexes.
 */
public class DmRow implements IDmRow {

    protected final int index;
    
    /** Row implementation: cell number to {@link IDmCell} */
    protected final Map<Integer, IDmCell> table;
    protected final Optional<Lock> writeLock;
    
    public DmRow(int index) {
        this(index, new HashMap<>(), true);
    }
    
    public DmRow(int index, Map<Integer, IDmCell> tableImpl, boolean doWriteLock) {
        this.index = index;
        this.table = tableImpl;
        this.writeLock = doWriteLock ? Optional.of(new ReentrantLock(true)) : Optional.<Lock>empty();
    }
    
    @Override public int index() { return this.index; }
    
    @Override
    public IDmCell getCell(int column) {
        return this.table.get(Integer.valueOf(column));
    }

    @Override
    public IDmCell getCell(ICellAddress address) {
        return address == null ? null : this.getCell(address.a1Address().column());
    }
    
    @Override
    public void setCell(int column, IDmCell cell) {
        try {
            if (this.writeLock.isPresent()) { this.writeLock.get().lock(); }
            this.table.put(Integer.valueOf(column), cell);
        }
        finally { if (this.writeLock.isPresent()) { this.writeLock.get().unlock(); } }
    }
    
    @Override
    public void setCell(ICellAddress address, IDmCell cell) {
        if (address != null) { this.setCell(address.a1Address().column(), cell); }        
    }

    @Override public int cellCount() { return this.table.size(); }
    
    @Override
    public int getFirstColumnIndex() {
        return this.table.keySet().stream().min(Integer::compare).orElse(Integer.valueOf(-1));
    }

    @Override
    public int getLastColumnIndex() {
        return this.table.keySet().stream().max(Integer::compare).orElse(Integer.valueOf(-1));
    }
    
    @Override 
    public Iterator<IDmCell> iterator() {
        return this.table.entrySet()
                         .stream()
                         .sorted(Comparator.comparing(Entry::getKey))
                         .map(Entry::getValue)
                         .collect(Collectors.<IDmCell>toList())
                         .listIterator();
    }
    
    @Override
    public Spliterator<IDmCell> spliterator() {
        return Spliterators.<IDmCell>spliterator(this.iterator(), this.table.size(), 0);
    }
    
    @Override
    public Stream<IDmCell> stream() {
        return StreamSupport.<IDmCell>stream(this.spliterator(), false);
    }
    
    @Override
    public String toString() {
        return String.join(" | ", this.table.entrySet()
                                            .stream()
                                            .sorted(Comparator.comparing(Entry::getKey))
                                            .map(e -> e.getValue() == null ? "null" : e.getValue().toString())
                                            .collect(Collectors.<String>toList()));
    }

}
