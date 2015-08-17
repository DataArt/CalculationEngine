package com.dataart.spreadsheetanalytics.model;

import org.apache.poi.common.execgraph.IExecutionGraphVertex;
import org.jgrapht.DirectedGraph;
import org.jgrapht.graph.DefaultEdge;

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

}
