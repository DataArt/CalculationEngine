package com.dataart.spreadsheetanalytics.model;

import com.dataart.spreadsheetanalytics.api.model.ICellValue;

public class CellValue implements ICellValue {

    protected Object value;

    public Object get() {
        return value;
    }

    public static CellValue fromString(String value) {
        CellValue cv = new CellValue();
        cv.value = value;
        return cv;
    }

    @Override
    public String toString() {
        return value.toString();
    }

}
