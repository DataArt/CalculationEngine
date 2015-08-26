package com.dataart.spreadsheetanalytics.model;

import org.apache.poi.ss.util.CellReference;

import com.dataart.spreadsheetanalytics.api.model.IA1Address;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.IDataModelId;

/**
 * A1 format
 */
public class A1Address implements ICellAddress, IA1Address {

    protected String address;
    protected int row;
    protected int column;
    
    //TODO: address cache

    @Override
    public A1Address a1Address() {
        return this;
    }

    @Override
    public IDataModelId dataModelId() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public String address() {
        return address;
    }

    @Override
    public int row() {
        return row;
    }

    @Override
    public int column() {
        return column;
    }

    @Override
    public String toString() {
        return address;
    }
    
    public static A1Address fromA1Address(String a1address) {
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
}
