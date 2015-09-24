package com.dataart.spreadsheetanalytics.engine.execgraph;

import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.NAME;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.VERTEX_ID;

import java.util.EnumMap;
import java.util.Map;
import java.util.UUID;

import org.apache.poi.common.execgraph.IExecutionGraphVertexProperty;
import org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName;

import com.dataart.spreadsheetanalytics.api.model.ICellFormulaExpression;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraph;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex;

/**
 * Representation of {@link IExecutionGraphVertex} (Vertex, Node) in {@link IExecutionGraph}.
 * Simple class with list of properties inside.
 */
public class ExecutionGraphVertex /* POI Vertex interface (internal) */ 
                                  extends org.apache.poi.common.execgraph.IExecutionGraphVertex
                                  /* Public API interface */
                                  implements IExecutionGraphVertex {

    protected Object id;
    protected String name;
    protected ICellValue value;
    protected ICellFormulaExpression formula;
    protected Type type;
    protected Object sourceObjectId;

    protected Map<PropertyName, IExecutionGraphVertexProperty> properties = new EnumMap<>(PropertyName.class);
    
    public ExecutionGraphVertex(String name) {
        this.id = UUID.randomUUID().toString();
        this.name = name;
        
        property(VERTEX_ID).set(this.id);
        property(NAME).set(this.name);
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
