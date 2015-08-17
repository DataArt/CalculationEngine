package com.dataart.spreadsheetanalytics.model;

import org.apache.poi.ss.formula.ptg.Ptg;

import com.dataart.spreadsheetanalytics.api.model.ICellFormulaExpression;

public class CellFormulaExpression implements ICellFormulaExpression {

    protected final String formulaStr;
    protected Ptg[] ptgs;

    public CellFormulaExpression(String formulaStr) {
        this(formulaStr, null);
    }

    public CellFormulaExpression(String formulaStr, Ptg[] ptgs) {
        this.formulaStr = formulaStr;
        this.ptgs = ptgs;
    }

    @Override
    public String toString() {
        return formulaStr;
    }

}
