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

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

import com.dataart.spreadsheetanalytics.api.model.IDmCell;
import com.dataart.spreadsheetanalytics.api.model.IDmRow;

public class DmRow implements IDmRow {
    
    /** Row implementation: cell number to {@link IDmCell} */
    protected final Map<Integer, IDmCell> table;
    
    protected final Lock writeLock = new ReentrantLock(true);
    
    public DmRow() {
        this(new HashMap<>());
    }
    
    public DmRow(Map<Integer, IDmCell> tableImpl) {
        this.table = tableImpl;
    }

    @Override public int width() { return this.table.size(); }
    @Override public Iterator<IDmCell> iterator() { return this.table.values().iterator(); }
    @Override public IDmCell getCell(int column) { return this.table.get(Integer.valueOf(column)); }

    @Override
    public void setCell(int column, IDmCell cell) {
        try {
            writeLock.lock();
            this.table.put(Integer.valueOf(column), cell);
        } finally { writeLock.unlock(); }
    }
}
