package com.dataart.spreadsheetanalytics.api.model;

import org.apache.poi.ss.formula.ptg.Ptg;

public interface ICellFormulaExpression {

    /**
     * Represents the original formula from a cell. e.g. A1 + B3 * SUM (A1,A2,A3)
     */
    String formulaStr();    
    
    /**
     * Represents formula in parsed PTG format as String, e.g A1, B3, +, A1, A2, A3, SUM
     */
    String formulaPtgStr();

    /**
     * String of formula where each part is replaced by its value, e.g. 1 + 3 * SUM(1,2,3)
     */
    String formulaValues();
    
    /**
     * Current PTG for vertex, this is only one operation, e.g. A1, B3, +
     */
    String ptgStr();

    /**
     * Current PTGS, e.g. A1, B3, +
     */
    Ptg[] ptgs();

    /**
     * Index of PTGS in original {@link #rootFormulaId()}
     */
    int iptg();

    /**
     * PTGs with values and operand, e.g. 1, 3, +
     */
    Object[] formulaPtg();

    /**
     * Link to root formula
     */
    Object rootFormulaId();

}
