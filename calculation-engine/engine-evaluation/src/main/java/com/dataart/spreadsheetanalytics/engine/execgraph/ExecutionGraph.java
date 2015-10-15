package com.dataart.spreadsheetanalytics.engine.execgraph;

import java.util.Set;
import java.util.stream.Collectors;

import org.jgrapht.DirectedGraph;

import com.dataart.spreadsheetanalytics.api.model.IExecutionGraph;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphEdge;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex;

public class ExecutionGraph implements IExecutionGraph {

    protected final DirectedGraph<org.apache.poi.common.execgraph.IExecutionGraphVertex, ExecutionGraphEdge> dgraph;

    protected ExecutionGraph(DirectedGraph<org.apache.poi.common.execgraph.IExecutionGraphVertex, ExecutionGraphEdge> dgraph) {
        this.dgraph = dgraph;
    }

    public static ExecutionGraph wrap(DirectedGraph<org.apache.poi.common.execgraph.IExecutionGraphVertex, ExecutionGraphEdge> dgraph) {
        return new ExecutionGraph(dgraph);
    }

    public static DirectedGraph unwrap(ExecutionGraph egraph) {
        return egraph.dgraph;
    }

    @Override
    public IExecutionGraphVertex getRootVertex() {
        for (org.apache.poi.common.execgraph.IExecutionGraphVertex ivertex : dgraph.vertexSet()) {
            if (dgraph.outgoingEdgesOf(ivertex).isEmpty()) { return (ExecutionGraphVertex) ivertex; }
        }
        throw new IllegalStateException("No graph root found");
    }

    @Override
    public Set<IExecutionGraphVertex> getVertices() {
        return dgraph.vertexSet().stream()
                                 .map(s -> (ExecutionGraphVertex) s)
                                 .collect(Collectors.<IExecutionGraphVertex>toSet());
    }

    @Override
    public Set<IExecutionGraphEdge> getEdges() {
        return dgraph.edgeSet().stream()
                               .collect(Collectors.<IExecutionGraphEdge>toSet());
    }

    @Override
    public IExecutionGraphVertex getEdgeSource(IExecutionGraphEdge edge) {
        return (ExecutionGraphVertex) dgraph.getEdgeSource((ExecutionGraphEdge) edge);
    }

    @Override
    public IExecutionGraphVertex getEdgeTarget(IExecutionGraphEdge edge) {
        return (ExecutionGraphVertex) dgraph.getEdgeTarget((ExecutionGraphEdge) edge);
    }

}
