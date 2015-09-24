package com.dataart.spreadsheetanalytics.engine.execgraph;

import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

import org.apache.poi.common.execgraph.IExecutionGraphVertex;
import org.jgrapht.DirectedGraph;
import org.jgrapht.graph.DefaultEdge;
import com.dataart.spreadsheetanalytics.engine.execgraph.ExecutionGraphVertex;

import com.dataart.spreadsheetanalytics.api.model.IExecutionGraph;

public class ExecutionGraph implements IExecutionGraph {

    protected final DirectedGraph<IExecutionGraphVertex, DefaultEdge> dgraph;

    protected ExecutionGraph(DirectedGraph<IExecutionGraphVertex, DefaultEdge> dgraph) {
        this.dgraph = dgraph;
    }

    public static ExecutionGraph wrap(DirectedGraph<IExecutionGraphVertex, DefaultEdge> dgraph) {
        return new ExecutionGraph(dgraph);
    }

    public static DirectedGraph unwrap(ExecutionGraph egraph) {
        return egraph.dgraph;
    }

    @Override
    public com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex getRootVertex() {
        for (IExecutionGraphVertex ivertex : dgraph.vertexSet()) {
            if (dgraph.outgoingEdgesOf(ivertex).isEmpty()) { return (ExecutionGraphVertex) ivertex; }
        }
        throw new IllegalStateException("No graph root found");
    }

    @Override
    public Set<com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex> getVertices() {
        Set<com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex> vertices = dgraph.vertexSet()
                                                                                               .stream()
                                                                                               .map(s -> (ExecutionGraphVertex) s)
                                                                                               .collect(Collectors.toSet());
        return vertices;
    }

    @Override
    public Set<DefaultEdge> getEdges() {
        return dgraph.edgeSet();
    }

    @Override
    public ExecutionGraphVertex getEdgeSource(DefaultEdge edge) {
        return (ExecutionGraphVertex) dgraph.getEdgeSource(edge);
    }

    @Override
    public ExecutionGraphVertex getEdgeTarget(DefaultEdge edge) {
        return (ExecutionGraphVertex) dgraph.getEdgeTarget(edge);
    }

}