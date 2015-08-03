package com.dataart.spreadsheetanalytics.engine;

import org.jgrapht.DirectedGraph;
import org.jgrapht.graph.DefaultDirectedGraph;
import org.jgrapht.graph.DefaultEdge;

import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphNode;
import com.dataart.spreadsheetanalytics.model.ExecutionGraph;

public class ExecutionGraphBuilder /*implements IExecutionGrapBuilder */{

    public static final ExecutionGraphBuilder EMPTY_EXECUTION_GRAPH_BUILDER = new ExecutionGraphBuilder() {
        
    };

    protected final DirectedGraph<IExecutionGraphNode, DefaultEdge> dgraph;

    public ExecutionGraphBuilder() {
        this.dgraph = new DefaultDirectedGraph<>(DefaultEdge.class);
    }

    public ExecutionGraph get() {
        return ExecutionGraph.wrap(dgraph);
    }

    public static ExecutionGraphBuilder emptyExecutionGraphBuilder() {
        return EMPTY_EXECUTION_GRAPH_BUILDER;
    }
}
