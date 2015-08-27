package com.dataart.spreadsheetanalytics.api.model;

/**
 * TODO
 */
public interface ICellAddress {

    int row();

    int column();

    IA1Address a1Address();

    IDataModelId dataModelId();

}
