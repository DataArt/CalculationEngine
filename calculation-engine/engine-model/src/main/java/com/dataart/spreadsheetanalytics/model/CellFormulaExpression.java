package com.dataart.spreadsheetanalytics.model;

import org.apache.poi.ss.formula.ptg.Ptg;

import com.dataart.spreadsheetanalytics.api.model.ICellFormulaExpression;

/**
 * Basic implementation of {@link ICellFormulaExpression}.
 * Contains appropriate fields for interfaces's getters.
 * Also provides a copy-method to clone the major information. 
 */
public class CellFormulaExpression implements ICellFormulaExpression {

    protected String formulaStr;    
    protected String formulaValues;
    protected String formulaPtgStr;
    protected String ptgStr;
    protected Ptg[] ptgs;
    protected int iptg;    
    protected Object rootFormulaId;
    protected Object[] formulaPtg; //[0] - OperationPtg, [1] - array of values 

    /** Default constructor to create instance with nothing, then fill it with everything. */
    public CellFormulaExpression() {}
    
    @Override public String formulaStr() { return this.formulaStr; }
    @Override public String formulaValues() { return this.formulaValues; }
    @Override public Ptg[] ptgs() { return this.ptgs; }
    @Override public int iptg() { return this.iptg; }
    @Override public Object rootFormulaId() { return this.rootFormulaId; }
    @Override public Object[] formulaPtg() { return this.formulaPtg; }
    @Override public String formulaPtgStr() { return this.formulaPtgStr; }
    @Override public String ptgStr() { return this.ptgStr; }    
    
    public void ptgStr(String ptgStr) { this.ptgStr = ptgStr; }
    public void formulaPtgStr(String formulaPtgStr) { this.formulaPtgStr = formulaPtgStr; }
    public void formulaStr(String formulaStr) { this.formulaStr = formulaStr; }
    public void formulaValues(String formulaValues) { this.formulaValues = formulaValues; }
    public void ptgs(Ptg[] ptgs) { this.ptgs = ptgs; }
    public void formulaPtg(Object[] formulaPtg) { this.formulaPtg = formulaPtg; }
    public void iptg(int iptg) { this.iptg = iptg; }
    public void rootFormulaId(Object rootFormulaId) { this.rootFormulaId = rootFormulaId; }    

    /**
     * Does copy of provided instance.
     * Fileds to be copied: 
     * {@link #formulaPtg()}
     * {@link #formulaValues()}
     * {@link #formulaPtgStr()}
     * {@link #ptgStr()}
     * {@link #iptg()}
     */
    public static CellFormulaExpression copyOf(CellFormulaExpression formula) {
        CellFormulaExpression copy = new CellFormulaExpression();

        copy.formulaStr = formula.formulaStr().intern();
        copy.formulaValues = formula.formulaValues().intern();
        copy.formulaPtgStr = formula.formulaPtgStr().intern();
        copy.ptgStr = formula.ptgStr().intern();
        copy.iptg = formula.iptg();

        return copy;
    }

	@Override
    public String toString() {
        return String.format("Formula String: %s; " + 
                             "Formula Values: %s; " + 
                             "Formula Ptg: %s; " + 
                             "Ptgs: %s " + 
                             "Index in Ptgs: %s ",
                             
                              formulaStr,
                              formulaValues,
                              formulaPtgStr,
                              ptgStr,
                              Integer.toString(iptg));
    }

}
