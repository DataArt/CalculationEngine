package com.dataart.spreadsheetanalytics.model;

import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.IModelId;
import com.dataart.spreadsheetanalytics.api.model.ISheetId;

public class CellAddress implements ICellAddress {

    protected IModelId modelId;
    protected ISheetId sheetId;
    protected Long row;
    protected Long column;
    protected A1Address a1Address;
    protected R1C1Address r1c1Address;

    @Override
    public IModelId modelId() {
        return modelId;
    }

    @Override
    public ISheetId sheetId() {
        return sheetId;
    }

    @Override
    public Long row() {
        return row;
    }

    @Override
    public Long column() {
        return column;
    }

    @Override
    public A1Address a1Address() {
        return a1Address;
    }

    @Override
    public R1C1Address r1c1Address() {
        return r1c1Address;
    }

    public CellAddress a1Address(A1Address a1Address) {
        this.a1Address = a1Address;
        return this;
    }

    public CellAddress row(long row) {
        this.row = Long.valueOf(row);
        return this;
    }

    public ICellAddress column(long column) {
        this.column = Long.valueOf(column);
        return this;
    }

}
