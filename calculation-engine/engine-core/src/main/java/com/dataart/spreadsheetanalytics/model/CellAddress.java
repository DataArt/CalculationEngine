package com.dataart.spreadsheetanalytics.model;

import org.apache.poi.ss.util.CellReference;

import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.IModelId;

public class CellAddress implements ICellAddress {

    protected IModelId modelId;
    protected Integer row;
    protected Integer column;
    protected A1Address a1Address;

    @Override
    public IModelId modelId() {
        return modelId;
    }

    @Override
    public Integer row() {
        return row;
    }

    @Override
    public Integer column() {
        return column;
    }

    @Override
    public A1Address a1Address() {
        return a1Address;
    }

    public CellAddress a1Address(A1Address a1Address) {
        this.a1Address = a1Address;
        return this;
    }

    public CellAddress row(int row) {
        this.row = Integer.valueOf(row);
        return this;
    }

    public ICellAddress column(int column) {
        this.column = Integer.valueOf(column);
        return this;
    }

    public static String toA1Address(int row, int column) {
        return new CellReference(row, column).formatAsString();
    }

}
