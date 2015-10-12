package com.dataart.spreadsheetanalytics.model;

import com.dataart.spreadsheetanalytics.api.model.IDsCell;

public class DsCell implements IDsCell {

    protected final int index;
    protected Object value;

    public DsCell(int cellIndex) {
        this.index = cellIndex;
    }

    public void value(Object value) { this.value = value; }

    @Override public int index() { return this.index; }
    @Override public Object value() { return this.value; }

    @Override
    public String toString() {
        return value == null ? null : value.toString();
    }
    
    

}
