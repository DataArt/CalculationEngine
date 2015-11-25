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
package com.dataart.spreadsheetanalytics.engine.execgraph;

import static com.dataart.spreadsheetanalytics.engine.execgraph.PoiExecutionGraphBuilder.ptgToVertexType;

import org.apache.poi.common.execgraph.ExecutionGraphBuilderUtils;
import org.apache.poi.common.execgraph.IExecutionGraphVertexProperty;
import org.apache.poi.ss.formula.ptg.Ptg;

import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex.Type;
import com.dataart.spreadsheetanalytics.model.CellFormulaExpression;

/**
 * Class represent ony property of {@link IExecutionGraphVertex}.
 * Internal use only.
 */
class ExecutionGraphVertexProperty implements IExecutionGraphVertexProperty {
    
    public final PropertyName pname;
    protected Object pvalue;
    
    private final ExecutionGraphVertex parent;

    public ExecutionGraphVertexProperty(ExecutionGraphVertex vertex, PropertyName pname) {
        this.parent = vertex;
        this.pname = pname;
        
        if (this.parent.formula == null) { this.parent.formula = new CellFormulaExpression(); }
    }
    
    @Override
    public Object get() { return pvalue; }

    @Override
    public void set(Object pvalue) {
        this.pvalue = pvalue;
                
        switch (pname) {
            case FORMULA_STRING: {
                String flaStr = ((String) pvalue).replace("$", "");
                ((CellFormulaExpression) parent.formula).formulaStr(flaStr);
                break;
            }
            case INDEX_IN_FORMULA: {
                ((CellFormulaExpression) parent.formula).iptg((int) pvalue);
                break;
            }
            case ROOT_FORMULA_ID: {
                ((CellFormulaExpression) parent.formula).rootFormulaId(pvalue);
                break;
            }
            case FORMULA_VALUES: {
                ((CellFormulaExpression) parent.formula).formulaValues((String) pvalue);
                break;
            }
            case PTGS: {
                ((CellFormulaExpression) parent.formula).ptgs((Ptg[]) pvalue);
                break;
            }
            case FORMULA_PTG: {
                ((CellFormulaExpression) parent.formula).formulaPtg((Object[]) pvalue);
                break;
            }
            case FORMULA_PTG_STRING: {
                ((CellFormulaExpression) parent.formula).formulaPtgStr((String) pvalue);
                break;                
            }
            case PTG_STRING: {
                ((CellFormulaExpression) parent.formula).ptgStr((String) pvalue);
                break;                                
            }
            case SOURCE_OBJECT_ID: {
                parent.sourceObjectId = pvalue;
                break;
            }
            case TYPE: {
                if (parent.type != null && Type.CELL_WITH_FORMULA == parent.type) { this.pvalue = parent.type; break; }
                parent.type = pvalue instanceof Type 
                                ? (Type) pvalue 
                                : pvalue instanceof Ptg 
                                    ? ptgToVertexType((Ptg) pvalue) 
                                    : Enum.valueOf(Type.class, (String) pvalue);
                this.pvalue = parent.type;
                break;
            }
            case VALUE: {
                parent.value = ExecutionGraphBuilderUtils.coerceValueTo(pvalue);
                break;
            }
            case VERTEX_ID: {
                parent.id = pvalue;
                break;
            }
            case NAME: {
                parent.name = (String) pvalue;
                break;
            }
            default: {
                    throw new IllegalArgumentException(String.format("Property %s is not supported by %s.", pname, parent.getClass().getSimpleName()));
                }
            }
    }
}