package com.dataart.spreadsheetanalytics.api.model;

public interface IDataModel extends IDataSet {
    
    void replaceCellValue(ICellAddress address, ICellValue value);

}
