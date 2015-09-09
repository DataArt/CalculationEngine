package com.dataart.spreadsheetanalytics.api.model;

import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;

/**
 * Basic interface to represent a spreadsheet.
 * Uses the same concept (spreadsheet), but can contains only values, not formulas.
 * After giving any instance of this type to {@link IEvaluator} the resuilt will be the same
 * (equal spreadsheets).
 * 
 * Known subinterface: {@link IDataModel}.
 */
public interface IDataSet {

    /**
     * Returns the id of the instance.
     */
    IDataModelId dataModelId();

}
