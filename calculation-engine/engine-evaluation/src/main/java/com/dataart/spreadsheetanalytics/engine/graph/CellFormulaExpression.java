/*
Copyright 2015 DataArt Apps, Inc

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
package com.dataart.spreadsheetanalytics.engine.graph;

import java.util.Arrays;

import org.apache.poi.ss.formula.ptg.Ptg;

/**
 * Container for formula related information.
 * Contains everything from original string formula to formula with evaluated values.
 * 
 * Also provides a copy-method to clone the major information. 
 */
public class CellFormulaExpression {
    
    protected String formulaStr;    
    protected String formulaValues;
    protected String formulaPtgStr;
    protected String ptgStr;
    protected Ptg[] ptgs;
    protected int iptg;    
    protected int rootFormulaId;
    protected Object[] formulaPtg; //[0] - OperationPtg, [1] - array of values 
    
    /** Represents the original formula from a cell. e.g. A1 + B3 * SUM (A1,A2,A3) */
    public String formulaStr() { return this.formulaStr; }
    public void formulaStr(String formulaStr) { this.formulaStr = formulaStr; }
    
    /** Represents formula in parsed PTG format as String, e.g A1, B3, +, A1, A2, A3, SUM */
    public String formulaPtgStr() { return this.formulaPtgStr; }
    public void formulaPtgStr(String formulaPtgStr) { this.formulaPtgStr = formulaPtgStr; }
    
    /** String of formula where each part is replaced by its value, e.g. 1 + 3 * SUM(1,2,3) */
    public String formulaValues() { return this.formulaValues; }
    public void formulaValues(String formulaValues) { this.formulaValues = formulaValues; }
    
    /** Current PTG for vertex, this is only one operation, e.g. A1, B3, + */
    public String ptgStr() { return this.ptgStr; }    
    public void ptgStr(String ptgStr) { this.ptgStr = ptgStr; }
    
    /** Current PTGS, e.g. A1, B3, + */
    public Ptg[] ptgs() { return this.ptgs == null ? null : Arrays.copyOf(this.ptgs, this.ptgs.length); }
    public void ptgs(Ptg[] ptgs) { this.ptgs = ptgs == null ? null : Arrays.copyOf(ptgs, ptgs.length); }
    
    /** Index of PTGS in original {@link #rootFormulaId()} */
    public int iptg() { return this.iptg; }
    public void iptg(int iptg) { this.iptg = iptg; }
    
    /** PTGs with values and operand, e.g. 1, 3, + */
    public int rootFormulaId() { return this.rootFormulaId; }
    public void rootFormulaId(int rootFormulaId) { this.rootFormulaId = rootFormulaId; }
    
    /** Link to root formula */
    public Object[] formulaPtg() { return this.formulaPtg == null ? null : Arrays.copyOf(this.formulaPtg, this.formulaPtg.length); }
    public void formulaPtg(Object[] formulaPtg) { this.formulaPtg = formulaPtg == null ? null : Arrays.copyOf(formulaPtg, formulaPtg.length); }
    
    /**
     * Does copy of provided instance.
     */
    public static CellFormulaExpression copyOf(CellFormulaExpression formula) {
        if (formula == null) { return null; }
        CellFormulaExpression copy = new CellFormulaExpression();

        copy.formulaStr = formula.formulaStr().intern();
        copy.formulaValues = formula.formulaValues().intern();
        copy.formulaPtgStr = formula.formulaPtgStr().intern();
        copy.ptgStr = formula.ptgStr().intern();
        copy.iptg = formula.iptg();
        copy.rootFormulaId = formula.rootFormulaId;    
        copy.ptgs(formula.ptgs);    
        copy.formulaPtg(formula.formulaPtg());

        return copy;
    }

    @Override
    public String toString() {
        return String.format("Formula String: %s; " + 
                             "Formula Values: %s; " + 
                             "Formula Ptg: %s; " + 
                             "Ptgs: %s " + 
                             "Index in Ptgs: %s ",
                             
                             this.formulaStr,
                             this.formulaValues,
                             this.formulaPtgStr,
                             this.ptgStr,
                             Integer.toString(this.iptg));
    }

}
