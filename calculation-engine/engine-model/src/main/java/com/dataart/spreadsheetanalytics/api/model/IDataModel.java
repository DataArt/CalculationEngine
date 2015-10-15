package com.dataart.spreadsheetanalytics.api.model;

import com.dataart.spreadsheetanalytics.model.DataModel;

/**
 * Representation of typical spreadsheet.
 * Can contain formulas and values.
 * Can be evaluated using Evaluator.
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

}
