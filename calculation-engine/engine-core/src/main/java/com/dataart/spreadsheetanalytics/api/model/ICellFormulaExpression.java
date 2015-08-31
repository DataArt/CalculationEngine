package com.dataart.spreadsheetanalytics.api.model;

import org.apache.poi.ss.formula.ptg.Ptg;

import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex.Type;

public interface ICellFormulaExpression {

    String formulaStr();
    
    Type type();
    
    String formulaPtgStr();

    String formulaValues();
    
    String ptgStr();

    Ptg[] ptgs();

    int iptg();

    Object[] formulaPtg();

    Object rootFormulaId();

}
