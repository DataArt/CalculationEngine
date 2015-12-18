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
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;
import java.util.Spliterator;
import java.util.Spliterators;
import java.util.UUID;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;
import java.util.stream.Stream;
import java.util.stream.StreamSupport;

import com.dataart.spreadsheetanalytics.api.model.IDataModelId;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.api.model.IDsRow;

/**
 * Inplementation of {@link IDataSet}.
 * This class represents a table collection.
 * Uses java Map to store Rows and their indexes.
 * 
 * Current version support two variants: 
 * Default - when {@link HashMap} is used for rows storing and write-lock is true. 
 * WriteLock means all write (set) operations will be locked using {@link Lock} class.
 * Customisable - when constructor allows to specify Map to be used and boolean for write lock.
 */
public class DataSet implements IDataSet {

    protected IDataModelId dataModelId;
    protected String name;
    
    protected final List<IDsRow> rows;
    protected final Optional<Lock> writeLock;

    public DataSet(String name) {
        this(name, new ArrayList<>(), true);
    }
    
    public DataSet(String name, List<IDsRow> rowsImpl, boolean doWriteLock) {
        this.name = name;
        this.dataModelId = new DataModelId(UUID.randomUUID().toString());
        this.rows = rowsImpl;
        this.writeLock = doWriteLock ? Optional.of(new ReentrantLock(true)) : Optional.<Lock>empty();
    }

    @Override public IDataModelId getDataModelId() { return this.dataModelId; }
    @Override public void setDataModelId(IDataModelId dataModelId) { this.dataModelId = dataModelId; }
    
    @Override public String getName() { return this.name; }
    @Override public void setName(String name) { this.name = name; }

    @Override public int rowCount() { return this.rows.size(); }

    @Override
    public IDsRow addRow() {
        try {
            if (this.writeLock.isPresent()) { this.writeLock.get().lock(); }

            int rowIdx = this.rows.size();
            this.rows.add(rowIdx, new DsRow(rowIdx));
            return this.rows.get(rowIdx);
        }
        finally { if (this.writeLock.isPresent()) { this.writeLock.get().unlock(); } }
    }

    @Override
    public IDsRow addRow(int rowIdx) {
        if (rowIdx < 0 || rowIdx > this.rows.size()) { return null; }
        
        try {
            if (this.writeLock.isPresent()) { this.writeLock.get().lock(); }
            
            this.rows.add(rowIdx, new DsRow(rowIdx));
            return this.rows.get(rowIdx);
        }
        finally { if (this.writeLock.isPresent()) { this.writeLock.get().unlock(); } }
    }

    @Override
    public IDsRow getRow(int rowIdx) {
        return rowIdx < 0 || rowIdx >= this.rows.size() ? null : this.rows.get(rowIdx);
    }

    @Override 
    public Iterator<IDsRow> iterator() {
        return Collections.<IDsRow>unmodifiableList(this.rows).iterator();
    }

    @Override
    public Spliterator<IDsRow> spliterator() {
        return Spliterators.<IDsRow>spliterator(this.iterator(), this.rows.size(), 0);
    }

    @Override
    public Stream<IDsRow> stream() {
        return StreamSupport.<IDsRow>stream(this.spliterator(), false);
    }

    @Override
    public String toString() {
        StringBuilder toString = new StringBuilder();
        this.rows.forEach(r -> toString.append(r).append("\n"));
        return toString.toString();
    }

}
