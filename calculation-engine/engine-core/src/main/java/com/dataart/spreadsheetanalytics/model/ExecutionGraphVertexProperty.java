package com.dataart.spreadsheetanalytics.model;

import org.apache.poi.common.execgraph.IExecutionGraphVertexProperty;
import org.apache.poi.ss.formula.ptg.Ptg;

import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex.Type;
import com.dataart.spreadsheetanalytics.engine.PoiExecutionGraphBuilder;

class ExecutionGraphVertexProperty implements IExecutionGraphVertexProperty {
    public final PropertyName pname;
    protected Object pvalue;
    
    private ExecutionGraphVertex parent;

    public ExecutionGraphVertexProperty(ExecutionGraphVertex vertex, PropertyName pname) {
        this.parent = vertex;
        this.pname = pname;
    }
    
    @Override
    public Object get() { return pvalue; }

    @Override
    public void set(Object pvalue) {
        this.pvalue = pvalue;
                
        switch (pname) {
            case FORMULA_STRING: {
                if (parent.formula == null) { parent.formula = new CellFormulaExpression(); }
                ((CellFormulaExpression) parent.formula).formulaStr((String) pvalue);
                break;
            }
            case INDEX_IN_FORMULA: {
                if (parent.formula == null) { parent.formula = new CellFormulaExpression(); }
                ((CellFormulaExpression) parent.formula).iptg((int) pvalue);
                break;
            }
            case FORMULA_VALUES: {
                if (parent.formula == null) { parent.formula = new CellFormulaExpression(); }
                ((CellFormulaExpression) parent.formula).formulaValues((String) pvalue);
                break;
            }
            case PTGS: {
                if (parent.formula == null) { parent.formula = new CellFormulaExpression(); }
                ((CellFormulaExpression) parent.formula).ptgs((Ptg[]) pvalue);
                break;
            }
            case FORMULA_PTG: {
                if (parent.formula == null) { parent.formula = new CellFormulaExpression(); }
                ((CellFormulaExpression) parent.formula).formulaPtg((Object[]) pvalue);
                break;
            }
            case SOURCE_OBJECT_ID: {
                parent.sourceObjectId = pvalue;
                break;
            }
            case TYPE: {
                if (parent.type != null && (parent.type == Type.CELL_WITH_FORMULA || parent.type == Type.CELL_WITH_VALUE)) { break; }
                parent.type = pvalue instanceof Ptg ? PoiExecutionGraphBuilder.ptgToVertexType((Ptg) pvalue) : Enum.valueOf(Type.class, (String) pvalue);
                break;
            }
            case VALUE: {
                parent.value = new CellValue(pvalue);
                break;
            }
            default:{
                    throw new IllegalArgumentException(String.format("Property %s is not supported by %s.", pname, parent.getClass().getSimpleName()));
                }
            }
    }
}