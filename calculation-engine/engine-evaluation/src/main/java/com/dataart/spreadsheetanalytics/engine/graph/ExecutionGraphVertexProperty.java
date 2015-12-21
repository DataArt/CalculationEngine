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

import static com.dataart.spreadsheetanalytics.engine.graph.PoiExecutionGraphBuilder.ptgToVertexType;

import org.apache.poi.common.fork.ExecutionGraphBuilderUtils;
import org.apache.poi.common.fork.IExecutionGraphVertexProperty;
import org.apache.poi.ss.formula.ptg.Ptg;

import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex.Type;
import com.dataart.spreadsheetanalytics.engine.CalculationEngineException;

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
    public Object get() { return this.pvalue; }

    @Override
    public void set(Object pvalue) {
        this.pvalue = pvalue;
                
        switch (this.pname) {
            case FORMULA_STRING: {
                String flaStr = (this.pvalue == null) ? "" : ((String) this.pvalue).replace("$", "");
                this.parent.formula.formulaStr(flaStr);
                break;
            }
            case INDEX_IN_FORMULA: {
                this.parent.formula.iptg((int) this.pvalue);
                break;
            }
            case ROOT_FORMULA_ID: {
                this.parent.formula.rootFormulaId(this.pvalue);
                break;
            }
            case FORMULA_VALUES: {
                this.parent.formula.formulaValues((String) this.pvalue);
                break;
            }
            case PTGS: {
                this.parent.formula.ptgs((Ptg[]) this.pvalue);
                break;
            }
            case FORMULA_PTG: {
                this.parent.formula.formulaPtg((Object[]) this.pvalue);
                break;
            }
            case FORMULA_PTG_STRING: {
                this.parent.formula.formulaPtgStr((String) this.pvalue);
                break;                
            }
            case PTG_STRING: {
                this.parent.formula.ptgStr((String) this.pvalue);
                break;                                
            }
            case SOURCE_OBJECT_ID: {
                this.parent.sourceObjectId = this.pvalue;
                break;
            }
            case TYPE: {
                if (this.parent.type != null && Type.CELL_WITH_FORMULA == this.parent.type) { this.pvalue = this.parent.type; break; }
                this.parent.type = this.pvalue instanceof Type 
                                ? (Type) this.pvalue 
                                : this.pvalue instanceof Ptg 
                                    ? ptgToVertexType((Ptg) this.pvalue) 
                                    : Enum.valueOf(Type.class, (String) this.pvalue);
                this.pvalue = this.parent.type;
                break;
            }
            case VALUE: {
                this.parent.value = ExecutionGraphBuilderUtils.coerceValueTo(this.pvalue);
                break;
            }
            case VERTEX_ID: {
                this.parent.id = this.pvalue;
                break;
            }
            case NAME: {
                this.parent.name = (String) this.pvalue;
                break;
            }
            case ALIAS: {
                this.parent.alias = (String) this.pvalue;
                break;
            }
            default: {
                    throw new CalculationEngineException(String.format("Property %s is not supported by %s.", this.pname, this.parent.getClass().getSimpleName()));
                }
            }
    }
}