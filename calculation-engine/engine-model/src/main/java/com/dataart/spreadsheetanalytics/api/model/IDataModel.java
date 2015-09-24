package com.dataart.spreadsheetanalytics.api.model;

import org.apache.poi.ss.usermodel.Sheet;

import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.model.DataModel;

/**
 * Representation of typical spreadsheet.
 * Can contain formulas and values.
 * Can be evaluated using {@link IEvaluator}.
 * 
 * Basic implementation: {@link DataModel}.
 */
public interface IDataModel extends IDataSet {
    
    /**
     * Does replacement of cell with particular address with provided value.
     * 
     * @param address Address to replace value at
     * @param value New value to replace the old one 
     */
    void replaceCellValue(ICellAddress address, ICellValue value);

    /**
     * Returns sheet from the data model
     * 
     * @param sheetName
     * @return
     */
    Sheet getDataModelSheet(String sheetName);
    
}
