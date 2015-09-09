package com.dataart.spreadsheetanalytics.api.model;

import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.CellAddress;

/**
 * Type represents Cell's address in a workbook.
 * Using this object it should be possible to find the original cell, get it's value, workbook, etc.
 * 
 * Basic implementations: {@link CellAddress}, {@link A1Address}
 */
public interface ICellAddress {

    /**
     * Row in a spreadsheet.
     */
    int row();

    /**
     * Column in a spreadsheet. 
     */
    int column();

    /**
     * Link to {@link A1Address} address format.
     */
    IA1Address a1Address();

    /**
     * Link to {@link IDataModelId}.
     */
    IDataModelId dataModelId();

}
