package com.dataart.spreadsheetanalytics.model;

import org.apache.poi.ss.formula.ptg.Ptg;

import com.dataart.spreadsheetanalytics.api.model.ICellFormulaExpression;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex.Type;

public class CellFormulaExpression implements ICellFormulaExpression, Cloneable {

    protected String formulaStr;    
    protected String formulaValues;
    protected String formulaPtgStr;
    protected String ptgStr;
    protected Ptg[] ptgs;
    protected int iptg;
    protected Type type;
    protected Object rootFormulaId;
    protected Object[] formulaPtg; //TODO: this is something to organize: [0] - OperationPtg, [1],[2]... - values 

    public CellFormulaExpression() { /* default constructor to create instance with nothing, then fill it with everything */ }
    
    public CellFormulaExpression(CellFormulaExpression formula) {
    	formulaStr = formula.formulaStr;    
        formulaValues = formula.formulaValues;
        formulaPtgStr = formula.formulaPtgStr;    
        ptgStr = formula.ptgStr;
        ptgs = formula.ptgs;
        iptg = formula.iptg;
        rootFormulaId = formula.rootFormulaId;
        formulaPtg = formula.formulaPtg;
        type = formula.type;
    }

    @Override public String formulaStr() { return this.formulaStr; }
    @Override public String formulaValues() { return this.formulaValues; }
    @Override public Ptg[] ptgs() { return this.ptgs; }
    @Override public int iptg() { return this.iptg; }
    @Override public Object rootFormulaId() { return this.rootFormulaId; }
    @Override public Object[] formulaPtg() { return this.formulaPtg; }
    @Override public String formulaPtgStr() { return this.formulaPtgStr; }
    @Override public String ptgStr() { return this.ptgStr; }
    @Override public Type type() { return this.type; }
    
    public void ptgStr(String ptgStr) { this.ptgStr = ptgStr; }
    public void formulaPtgStr(String formulaPtgStr) { this.formulaPtgStr = formulaPtgStr; }
    public void formulaStr(String formulaStr) { this.formulaStr = formulaStr; }
    public void formulaValues(String formulaValues) { this.formulaValues = formulaValues; }
    public void ptgs(Ptg[] ptgs) { this.ptgs = ptgs; }
    public void formulaPtg(Object[] formulaPtg) { this.formulaPtg = formulaPtg; }
    public void iptg(int iptg) { this.iptg = iptg; }
    public void rootFormulaId(Object rootFormulaId) { this.rootFormulaId = rootFormulaId; }
    public void type(Type type) { this.type = type; }

	@Override
    public String toString() {
        return String.format("Formula String: %s; " + 
                             "Formula Values: %s; " + 
                             "Formula Ptg: %s; " + 
                             "Ptgs: %s " + 
                             "Index in Ptgs: %s ",
                             
                              formulaStr,
                              formulaValues,
                              ( this.type == Type.OPERATOR || this.type == Type.IF || this.type == Type.FUNCTION )?"":formulaPtgStr,
                              ( this.type == Type.OPERATOR || this.type == Type.IF || this.type == Type.FUNCTION )?"":ptgStr,
                              Integer.toString(iptg));
    }

}
