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

import static com.dataart.spreadsheetanalytics.engine.graph.PoiExecutionGraphBuilder.ID_RANDOMIZER;

import java.io.Serializable;

import org.apache.poi.common.fork.IExecutionGraphVertexProperties;

import com.dataart.spreadsheetanalytics.api.model.IExecutionGraph;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex;

/**
 * Representation of {@link IExecutionGraphVertex} (Vertex, Node) in {@link IExecutionGraph}.
 * Simple class with list of properties inside.
 */
public class ExecutionGraphVertex /* POI Vertex interface (internal) */ 
                                  extends org.apache.poi.common.fork.IExecutionGraphVertex
                                  /* Public API interface */
                                  implements IExecutionGraphVertex, Serializable {
    /** */
    private static final long serialVersionUID = 577095204336470699L;
    
    protected int id;
    protected String name;
    protected Object value;
    protected String alias;
    protected CellFormulaExpression formula;
    protected Type type;
    protected Object sourceObjectId;

    protected ExecutionGraphVertexProperties properties = new ExecutionGraphVertexProperties(this);
    
    public ExecutionGraphVertex(String name) {
        this.id = ID_RANDOMIZER.get().getAndIncrement();
        this.name = name;
        
        this.properties.setVertexId(this.id);
        this.properties.setName(this.name);
    }

    @Override
    public IExecutionGraphVertexProperties properties() {
        return this.properties;
    }

    @Override public int id() { return this.id; }
    @Override public String name() { return this.name; }
    @Override public String alias() { return this.alias; }
    @Override public CellFormulaExpression formula() { return this.formula; }
    @Override public Object value() { return this.value; }
    @Override public Type type() { return this.type; }
    @Override public Object sourceObjectId() { return this.sourceObjectId; }

    @Override
    public String toString() {
        return String.format("name: %s,%nalias: %s,%nvalue: %s,%nformula: %s,%ntype: %s", 
                         this.name, this.alias, this.value, this.formula, this.type);
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
