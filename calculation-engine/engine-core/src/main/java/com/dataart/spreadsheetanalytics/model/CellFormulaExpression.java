package com.dataart.spreadsheetanalytics.model;

import java.util.Arrays;

import org.apache.poi.ss.formula.ptg.Ptg;

import com.dataart.spreadsheetanalytics.api.model.ICellFormulaExpression;

public class CellFormulaExpression implements ICellFormulaExpression {

    protected String formulaStr;
    protected Ptg[] ptgs;
    protected int iptg;
    protected Object[] formulaPtg; //TODO: this is something to organize: [0] - OperationPtg, [1],[2]... - values 

    public CellFormulaExpression() { /* default constructor to create instance with nothing, then fill it with everything */ }

    @Override public String formulaStr() { return this.formulaStr; }
    @Override public Ptg[] ptgs() { return this.ptgs; }
    @Override public int iptg() { return this.iptg; }
    @Override public Object[] formulaPtg() { return this.formulaPtg; }
    
    public void formulaStr(String formulaStr) { this.formulaStr = formulaStr; }
    public void ptgs(Ptg[] ptgs) { this.ptgs = ptgs; }
    public void formulaPtg(Object[] formulaPtg) { this.formulaPtg = formulaPtg; }
    public void iptg(int iptg) { this.iptg = iptg; }
    
    @Override
    public String toString() {
        return String.format("%s;\n %s;\n %s;", formulaStr, Arrays.toString(ptgs), Arrays.toString(formulaPtg));
    }

}
