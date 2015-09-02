package com.dataart.spreadsheetanalytics.model;

import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.IDataModelId;

public class CellAddress implements ICellAddress {

    protected IDataModelId dataModelId;
    protected A1Address a1Address;

    public CellAddress(IDataModelId dataModelId, A1Address a1Address) {
        this.dataModelId = dataModelId;
        this.a1Address = a1Address;
    }

    @Override
    public IDataModelId dataModelId() {
        return dataModelId;
    }

    @Override
    public int row() {
        return a1Address.row();
    }

    @Override
    public int column() {
        return a1Address.column();
    }

    @Override
    public A1Address a1Address() {
        return a1Address;
    }

    public static String toA1Address(int row, int column) {
        return A1Address.fromRowColumn(row, column).address();
    }

}
