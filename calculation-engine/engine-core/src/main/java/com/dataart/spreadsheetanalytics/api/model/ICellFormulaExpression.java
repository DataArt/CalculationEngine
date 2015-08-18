package com.dataart.spreadsheetanalytics.api.model;

import org.apache.poi.ss.formula.ptg.Ptg;

public interface ICellFormulaExpression {

    String formulaStr();

    Ptg[] ptgs();

    int iptg();

    Object[] formulaPtg();

}
