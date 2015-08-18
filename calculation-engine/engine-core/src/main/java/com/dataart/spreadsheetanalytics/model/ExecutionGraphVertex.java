package com.dataart.spreadsheetanalytics.model;

import java.util.EnumMap;
import java.util.Map;
import java.util.UUID;

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

    protected String id;
    protected String name;
    protected ICellValue value;
    protected ICellFormulaExpression formula;
    protected Type type;
    protected Object sourceObjectId;

    protected Map<PropertyName, IExecutionGraphVertexProperty> properties = new EnumMap<>(PropertyName.class);
    
    public ExecutionGraphVertex(String name) {
        this.id = UUID.randomUUID().toString();
        this.name = name;
    }

    @Override
    public IExecutionGraphVertexProperty property(PropertyName name) {
        IExecutionGraphVertexProperty property = properties.get(name);
        if (property == null) {
            property = new ExecutionGraphVertexProperty(this, name);
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

    @Override public Object id() { return id; }
    @Override public String name() { return name; }
    @Override public ICellFormulaExpression formula() { return formula; }
    @Override public ICellValue value() { return value; }
    @Override public Type type() { return type; }
    @Override public Object sourceObjectId() { return sourceObjectId; }

    @Override
    public String toString() {
        return String.format("name: %s,\n value: %s,\n formula: %s,\n type: %s", 
                                    name,        value,         formula,    type);
    }
}
