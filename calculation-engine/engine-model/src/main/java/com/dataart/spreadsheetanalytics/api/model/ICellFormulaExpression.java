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
package com.dataart.spreadsheetanalytics.api.model;

import org.apache.poi.ss.formula.ptg.Ptg;

import com.dataart.spreadsheetanalytics.model.CellFormulaExpression;

/**
 * Container for formula related information.
 * Contains everything from original string formula to formula with evaluated values.
 * 
 * Basic implementation: {@link CellFormulaExpression}.
 */
public interface ICellFormulaExpression {

    /**
     * Represents the original formula from a cell. e.g. A1 + B3 * SUM (A1,A2,A3)
     */
    String formulaStr();    
    
    /**
     * Represents formula in parsed PTG format as String, e.g A1, B3, +, A1, A2, A3, SUM
     */
    String formulaPtgStr();

    /**
     * String of formula where each part is replaced by its value, e.g. 1 + 3 * SUM(1,2,3)
     */
    String formulaValues();
    
    /**
     * Current PTG for vertex, this is only one operation, e.g. A1, B3, +
     */
    String ptgStr();

    /**
     * Current PTGS, e.g. A1, B3, +
     */
    Ptg[] ptgs();

    /**
     * Index of PTGS in original {@link #rootFormulaId()}
     */
    int iptg();

    /**
     * PTGs with values and operand, e.g. 1, 3, +
     */
    Object[] formulaPtg();

    /**
     * Link to root formula
     */
    Object rootFormulaId();

}
