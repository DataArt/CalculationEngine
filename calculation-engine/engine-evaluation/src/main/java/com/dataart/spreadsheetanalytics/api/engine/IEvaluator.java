package com.dataart.spreadsheetanalytics.api.engine;

import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;

/**
 * One of two basic interfaces to use the library. 
 * It's purpose is to do the evaluation of Cell or whole DataModel.
 * Two methods: {@link #evaluate(ICellAddress)} and {@link #evaluate(IDataModel)} are designed to do it.
 * 
 * Usually new instance of Evaluator should be created for every {@link IDataModel} to evaluate.
 * 
 * Basic implementation: {@link SpreadsheetEvaluator}.
 */
public interface IEvaluator {

    /**
     * Does evaluation of one provided cell.
     * Result cannot be null, but since it is a wrapper the underlying value can be of any type.
     */
    ICellValue evaluate(ICellAddress addr);

    /**
     * Does evaluation for every not-empty cell in {@link IDataModel}.
     * Simple realisation is done {@link #evaluate(ICellAddress)} for every cell in for loop.
     * Some other implementation can use complex logic to evaluate in parallel, etc.
     * 
     * Returns {@link IDataSet} where no formulas, but values in the cells.
     */
    IDataSet evaluate(IDataModel dataModel);

    /**
     * Replaces old {@link IDataModel} in this Evaluator with new one.
     */
    void setDataModel(IDataModel execModel);

}
