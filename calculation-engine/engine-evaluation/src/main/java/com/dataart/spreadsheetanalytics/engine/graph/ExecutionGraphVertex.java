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

import static org.apache.poi.common.fork.IExecutionGraphVertexProperty.PropertyName.NAME;
import static org.apache.poi.common.fork.IExecutionGraphVertexProperty.PropertyName.VERTEX_ID;

import java.util.EnumMap;
import java.util.Map;
import java.util.UUID;

import org.apache.poi.common.fork.IExecutionGraphVertexProperty;
import org.apache.poi.common.fork.IExecutionGraphVertexProperty.PropertyName;

import com.dataart.spreadsheetanalytics.api.model.ICellFormulaExpression;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraph;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex;

/**
 * Representation of {@link IExecutionGraphVertex} (Vertex, Node) in {@link IExecutionGraph}.
 * Simple class with list of properties inside.
 */
public class ExecutionGraphVertex /* POI Vertex interface (internal) */ 
                                  extends org.apache.poi.common.fork.IExecutionGraphVertex
                                  /* Public API interface */
                                  implements IExecutionGraphVertex {
    
    protected Object id;
    protected String name;
    protected Object value;
    protected String alias;
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
        IExecutionGraphVertexProperty property = this.properties.get(name);
        if (property == null) {
            property = new ExecutionGraphVertexProperty(this, name);
            this.properties.put(name, property);
        }
        return property;
    }

    @Override public Object id() { return this.id; }
    @Override public String name() { return this.name; }
    @Override public String alias() { return this.alias; }
    @Override public ICellFormulaExpression formula() { return this.formula; }
    @Override public Object value() { return this.value; }
    @Override public Type type() { return this.type; }
    @Override public Object sourceObjectId() { return this.sourceObjectId; }

    @Override
    public String toString() {
        return String.format("name: %s,%nvalue: %s,%nformula: %s,%ntype: %s", 
                         this.name, this.value, this.formula, this.type);
    }

    @Override
    public int compareTo(IExecutionGraphVertex v) {
        if (v instanceof ExecutionGraphVertex) {
            ExecutionGraphVertex vertex = (ExecutionGraphVertex) v;
            if (!vertex.name().equals(this.name())) { return -1; }
            if (!vertex.value().equals(this.value())) { return -1; }
            if (vertex.formula().formulaStr() == null && this.formula().formulaStr() != null) { return -1; }
            else if (!vertex.formula().formulaStr().equals(this.formula().formulaStr())) { return -1; }
            
            return 1;
        }
        return -1;
    }

}
