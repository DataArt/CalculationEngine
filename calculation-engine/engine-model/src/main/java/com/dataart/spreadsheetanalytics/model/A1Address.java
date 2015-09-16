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
    @Override public IDataModelId dataModelId() { return null; }
    @Override public String address() { return address; }
    @Override public int row() { return row; }
    @Override public int column() { return column; }

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

    protected static boolean isRange(String a1address) {
        return a1address.contains(":");
    }
    
    @Override
    public String toString() {
        return String.format("%s[%s,%s]", address, row, column);
    }
}
