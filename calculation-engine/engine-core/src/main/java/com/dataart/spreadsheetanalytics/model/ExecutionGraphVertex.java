package com.dataart.spreadsheetanalytics.model;

import java.util.EnumMap;
import java.util.Map;

import org.apache.poi.common.execgraph.IExecutionGraphVertexProperty;
import org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName;
import org.apache.poi.ss.formula.ptg.Ptg;

import com.dataart.spreadsheetanalytics.api.model.ICellFormulaExpression;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex;
import com.dataart.spreadsheetanalytics.engine.PoiExecutionGraphBuilder;

public class ExecutionGraphVertex implements 
                                    /* POI Vertex interface (internal) */ 
                                    org.apache.poi.common.execgraph.IExecutionGraphVertex,
                                    /* Public API interface */
                                    IExecutionGraphVertex {

    protected String name;
    protected ICellValue value;
    protected ICellFormulaExpression formula;
    protected Type type;
    protected Object sourceObjectId;
    protected int iptg;
    protected Ptg[] ptgs;

    protected Map<PropertyName, IExecutionGraphVertexProperty> properties = new EnumMap<>(PropertyName.class);
    
    public ExecutionGraphVertex(String name) {
        this.name = name;
    }

    @Override
    public IExecutionGraphVertexProperty property(PropertyName name) {
        IExecutionGraphVertexProperty property = properties.get(name);
        if (property == null) {
            property = this.new ExecutionGraphVertexProperty(name);
            properties.put(name, property);
        }
        return property;
    }

    public void value(Object value) {
        this.value = new CellValue(value);
    }
    
    public void type(Ptg ptg) {
        this.type = PoiExecutionGraphBuilder.ptgToVertexType(ptg);
    }
    
    
    public void sourceObjectId(Object id) {
        this.sourceObjectId = id;
    }

    @Override
    public String name() {
        return name;
    }

    @Override
    public ICellFormulaExpression formula() {
        return formula;
    }

    @Override
    public ICellValue value() {
        return value;
    }

    @Override
    public Type type() {
        return type;
    }

    @Override
    public Object sourceObjectId() {
        return sourceObjectId;
    }

    @Override
    public String toString() {
        return String.format("name: %s,\n value: %s,\n formula: %s,\n type: %s", 
                name, value != null ? value.toString().replace("org.apache.poi.ss.formula.", "") : value, formula, type);
    }

    protected class ExecutionGraphVertexProperty implements IExecutionGraphVertexProperty {
        public final PropertyName pname;
        protected Object pvalue;

        public ExecutionGraphVertexProperty(PropertyName pname) {
            this.pname = pname;
        }

        @Override
        public void set(Object pvalue) {
            this.pvalue = pvalue;
            
            switch (pname) {
                case FORMULA_STRING: {
                    formula = new CellFormulaExpression((String) pvalue);
                    break;
                }
                case INDEX_IN_FORMULA: {
                    iptg = (int) pvalue;
                    break;
                }
                case PTGS: {
                    ptgs = (Ptg[]) pvalue;
                    break;
                }
                case SOURCE_OBJECT_ID: {
                    sourceObjectId = pvalue;
                    break;
                }
                case TYPE: {
                    type = pvalue instanceof Ptg ? PoiExecutionGraphBuilder.ptgToVertexType((Ptg) pvalue) : Enum.valueOf(Type.class, (String) pvalue);
                    break;
                }
                case VALUE: {
                    value = new CellValue(pvalue);
                    break;
                }
                default:{
                        throw new IllegalArgumentException(String.format("Property %s is not supported by %s.", name, getClass().getSimpleName()));
                    }
                }
        }
    }
}
