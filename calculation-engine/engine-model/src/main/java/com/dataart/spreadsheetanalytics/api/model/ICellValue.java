package com.dataart.spreadsheetanalytics.api.model;

import com.dataart.spreadsheetanalytics.model.CellValue;

/**
 * Container for Cell's value. 
 * Since value can be of any type (Integer, Double, String, Error, etc.) this interface provides 
 * a wrapper to original value, so it can be send to any recipients.
 * The value is of {@link Object} class.
 * 
 * Basic implementation: {@link CellValue}.
 */
public interface ICellValue {
    
    /**
     * Returns the underlying value.
     */
    Object get();

}
