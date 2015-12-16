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
import java.util.Optional;
import java.util.Spliterator;
import java.util.Spliterators;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;
import java.util.stream.Stream;
import java.util.stream.StreamSupport;

import com.dataart.spreadsheetanalytics.api.model.IDsCell;
import com.dataart.spreadsheetanalytics.api.model.IDsRow;

public class DsRow implements IDsRow {

    protected final int index;
    
    protected final List<IDsCell> cells;
    protected final Optional<Lock> writeLock;
    
    public DsRow(int rowIdx) {
        this(rowIdx, new ArrayList<>(), true);
    }
    
    public DsRow(int rowIdx, List<IDsCell> cellsImpl, boolean doWriteLock) {
        this.index = rowIdx;
        this.cells = cellsImpl;
        this.writeLock = doWriteLock ? Optional.of(new ReentrantLock(true)) : Optional.<Lock>empty();
    }

    @Override public int index() { return this.index; }
    @Override public int cellCount() { return this.cells.size(); }

    @Override 
    public IDsCell addCell() {
        try {
            if (this.writeLock.isPresent()) { this.writeLock.get().lock(); }
            
            int cellIdx = this.cells.size();
            this.cells.add(cellIdx, new DsCell(cellIdx));
            return this.cells.get(cellIdx);
        }
        finally { if (this.writeLock.isPresent()) { this.writeLock.get().unlock(); } }
    }

    @Override 
    public IDsCell addCell(int cellIdx) {
        try {
            if (this.writeLock.isPresent()) { this.writeLock.get().lock(); }
            
            this.cells.add(cellIdx, new DsCell(cellIdx));
            return this.cells.get(cellIdx);
        }
        finally { if (this.writeLock.isPresent()) { this.writeLock.get().unlock(); } }
    }
    
    @Override 
    public IDsCell getCell(int cellIdx) {
        return cellIdx < 0 || cellIdx >= this.cells.size() ? null : this.cells.get(cellIdx);
    }
    

    @Override 
    public Iterator<IDsCell> iterator() {
        return Collections.<IDsCell>unmodifiableList(this.cells).iterator();
    }
    
    @Override
    public Spliterator<IDsCell> spliterator() {
        return Spliterators.<IDsCell>spliterator(this.iterator(), this.cells.size(), 0);
    }
    
    @Override
    public Stream<IDsCell> stream() {
        return StreamSupport.<IDsCell>stream(this.spliterator(), false);
    }
    
    @Override 
    public String toString() {
        return this.cells.toString();
    }

}
