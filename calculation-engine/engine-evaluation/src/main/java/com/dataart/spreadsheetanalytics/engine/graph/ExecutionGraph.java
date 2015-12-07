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

import java.util.LinkedList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.jgrapht.DirectedGraph;

import com.dataart.spreadsheetanalytics.api.model.IExecutionGraph;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphEdge;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex;

public class ExecutionGraph implements IExecutionGraph {

    protected DirectedGraph<ExecutionGraphVertex, ExecutionGraphEdge> dgraph;

    public static ExecutionGraph wrap(DirectedGraph<ExecutionGraphVertex, ExecutionGraphEdge> dgraph) {
        ExecutionGraph egraph = new ExecutionGraph();
        egraph.dgraph = dgraph;
        return egraph;
    }

    public static DirectedGraph<ExecutionGraphVertex, ExecutionGraphEdge> unwrap(ExecutionGraph egraph) { return egraph.dgraph; }

    @Override
    public IExecutionGraphVertex getRootVertex() {
        List<IExecutionGraphVertex> possible = new LinkedList<>();
        for (ExecutionGraphVertex ivertex : this.dgraph.vertexSet()) {
            if (this.dgraph.outgoingEdgesOf(ivertex).isEmpty()) { possible.add(ivertex); }
        }
        if (possible.isEmpty()) { throw new IllegalStateException("No graph root found"); }
        if (possible.size() > 1) { throw new IllegalStateException(String.format("Many graph roots found (%s)", possible.size())); }
        
        return possible.get(0);
    }

    @Override
    public Set<IExecutionGraphVertex> getVertices() {
        return this.dgraph.vertexSet()
                          .stream()
                          .map(s -> s)
                          .collect(Collectors.<IExecutionGraphVertex>toSet());
    }

    @Override
    public Set<IExecutionGraphEdge> getEdges() {
        return this.dgraph.edgeSet()
                          .stream()
                          .collect(Collectors.<IExecutionGraphEdge>toSet());
    }

    @Override
    public IExecutionGraphVertex getEdgeSource(IExecutionGraphEdge edge) {
        return this.dgraph.getEdgeSource((ExecutionGraphEdge) edge);
    }

    @Override
    public IExecutionGraphVertex getEdgeTarget(IExecutionGraphEdge edge) {
        return this.dgraph.getEdgeTarget((ExecutionGraphEdge) edge);
    }

}
