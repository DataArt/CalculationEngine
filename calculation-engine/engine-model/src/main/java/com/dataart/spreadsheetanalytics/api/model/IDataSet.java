package com.dataart.spreadsheetanalytics.api.model;

import java.util.Iterator;
import java.util.List;

import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;

/**
 * Basic interface to represent a spreadsheet.
 * Uses the same concept (spreadsheet), but can contains only values, not formulas.
 * After giving any instance of this type to {@link IEvaluator} the resuilt will be the same
 * (equal spreadsheets).
 * 
 * Known subinterface: {@link IDataModel}.
 */
public interface IDataSet extends Iterable<IDsRow>, Iterator<IDsRow> {

    IDataModelId dataModelId();
    
    String name();
    
    void name(String name);

    int length();
    
    int width();

    List<IDsRow> rows();

}
