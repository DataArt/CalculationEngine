package com.dataart.spreadsheetanalytics.model;

import com.dataart.spreadsheetanalytics.api.model.ICellValue;

public class CellValue implements ICellValue {

    protected final Object value;

    public CellValue(Object value) {
        this.value = value;
    }

    public Object get() {
        return value;
    }

    @Override
    public String toString() {
        return value.toString();
    }

}
