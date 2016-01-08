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

import com.dataart.spreadsheetanalytics.api.model.IA1Address;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.IDataModelId;

/**
 * Basic implementation of {@link ICellAddress}.
 * Contains links (as fileds) to {@link IDataModelId} of current model
 * and {@link A1Address} as implementation of {@link IA1Address}. 
 */
public class CellAddress implements ICellAddress {

    protected IDataModelId dataModelId;
    protected A1Address a1Address; //TODO: create pool for 128 addresses

    public CellAddress(IDataModelId dataModelId, A1Address a1Address) {
        this.dataModelId = dataModelId;
        this.a1Address = a1Address;
    }

    @Override public IDataModelId getDataModelId() { return this.dataModelId; }
    @Override public int row() { return this.a1Address.row(); }
    @Override public int column() { return this.a1Address.column(); }
    @Override public A1Address a1Address() { return this.a1Address; }

    /**
     * Converts row-column for A1 format (String).
     */
    public static String toA1Address(int row, int column) {
        return A1Address.fromRowColumn(row, column).address();
    }

}