package com.dataart.spreadsheetanalytics.api.model;

import org.apache.poi.ss.formula.ptg.Ptg;

public interface ICellFormulaExpression {

    String formulaStr();    
    
    String formulaPtgStr();

    String formulaValues();
    
    String ptgStr();

    Ptg[] ptgs();

    int iptg();

    Object[] formulaPtg();

    Object rootFormulaId();

}
