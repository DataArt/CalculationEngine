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

import org.apache.poi.ss.util.CellReference;

import com.dataart.spreadsheetanalytics.api.model.IA1Address;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.IDataModelId;

/**
 * Implementation of {@link ICellAddress} which uses A1 format to navigate between cells.
 * Contains: row, column, address in a1 format.
 * 
 * Preferable way to use it is to aggregate it in {@link CellAddress} which is more common.
 */
public class A1Address implements ICellAddress, IA1Address {

    protected String address;
    protected int row;
    protected int column;

    @Override public A1Address a1Address() { return this; }
    @Override public IDataModelId getDataModelId() { return null; }
    @Override public String address() { return this.address; }
    @Override public int row() { return this.row; }
    @Override public int column() { return this.column; }

    public static A1Address fromA1Address(String a1address) {
        if (isRange(a1address)) { return new A1RangeAddress(a1address); }
        
        A1Address a = new A1Address();
        a.address = a1address;

        CellReference cr = new CellReference(a.address);
        a.row = cr.getRow();
        a.column = cr.getCol();

        return a;
    }

    public static A1Address fromRowColumn(int row, int column) {
        A1Address a = new A1Address();

        a.row = row;
        a.column = column;

        a.address = new CellReference(row, column).formatAsString();

        return a;
    }

    public static boolean isRange(String a1address) {
        return a1address.contains(":");
    }
    
    public static boolean isAddress(Object value) {
        //TODO: Maxim check for validatetions...
        
        try {
            A1Address address = A1Address.fromA1Address((String) value);
            return address.row() > -1 && address.column() > -1; }
        catch (Exception e) { return false; }
    }
    
    @Override
    public String toString() {
        return String.format("%s[%s,%s]", this.address, this.row, this.column);
    }
    
    @Override
    public int hashCode() {
        int prime = 31;
        int result = 1;
        result = prime * result + this.column;
        result = prime * result + this.row;
        return result;
    }
    
    @Override
    public boolean equals(Object obj) {
        if (this == obj) { return true; }
        if (obj == null) { return false; }
        if (getClass() != obj.getClass()) { return false; }
        A1Address other = (A1Address) obj;
        if (this.column != other.column) { return false; }
        if (this.row != other.row) { return false; }
        return true;
    }
    
}
