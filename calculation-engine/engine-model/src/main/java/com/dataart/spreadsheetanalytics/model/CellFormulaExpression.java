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
package com.dataart.spreadsheetanalytics.model;

import java.util.Arrays;

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
    
    @Override public String formulaStr() { return this.formulaStr; }
    public void formulaStr(String formulaStr) { this.formulaStr = formulaStr; }
    
    @Override public String formulaValues() { return this.formulaValues; }
    public void formulaValues(String formulaValues) { this.formulaValues = formulaValues; }
    
    @Override public Ptg[] ptgs() { return this.ptgs == null ? null : Arrays.copyOf(this.ptgs, this.ptgs.length); }
    public void ptgs(Ptg[] ptgs) { this.ptgs = ptgs == null ? null : Arrays.copyOf(ptgs, ptgs.length); }
    
    @Override public int iptg() { return this.iptg; }
    public void iptg(int iptg) { this.iptg = iptg; }
    
    @Override public Object rootFormulaId() { return this.rootFormulaId; }
    public void rootFormulaId(Object rootFormulaId) { this.rootFormulaId = rootFormulaId; }
    
    @Override public Object[] formulaPtg() { return this.formulaPtg == null ? null : Arrays.copyOf(this.formulaPtg, this.formulaPtg.length); }
    public void formulaPtg(Object[] formulaPtg) { this.formulaPtg = formulaPtg == null ? null : Arrays.copyOf(formulaPtg, formulaPtg.length); }
    
    @Override public String formulaPtgStr() { return this.formulaPtgStr; }
    public void formulaPtgStr(String formulaPtgStr) { this.formulaPtgStr = formulaPtgStr; }
    
    @Override public String ptgStr() { return this.ptgStr; }    
    public void ptgStr(String ptgStr) { this.ptgStr = ptgStr; }
    
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
                             
                              formulaStr,
                              formulaValues,
                              formulaPtgStr,
                              ptgStr,
                              Integer.toString(iptg));
    }

}
