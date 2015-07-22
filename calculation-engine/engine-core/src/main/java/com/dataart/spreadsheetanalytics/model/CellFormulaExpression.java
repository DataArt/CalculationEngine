package com.dataart.spreadsheetanalytics.model;

import com.dataart.spreadsheetanalytics.api.model.ICellFormulaExpression;

public class CellFormulaExpression implements ICellFormulaExpression {

    String fullExpression;
    String singleOperator;

    public String singleOperator() {
        return singleOperator;
    }

    public void singleOperator(String singleOperator) {
        this.singleOperator = singleOperator;
    }

    public static ICellFormulaExpression fromString(String expression) {
        CellFormulaExpression cfe = new CellFormulaExpression();
        cfe.fullExpression = expression;
        return cfe;
    }

    @Override
    public String toString() {
        return fullExpression;
    }

}
