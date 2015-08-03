package com.dataart.spreadsheetanalytics.model;

import org.jgrapht.DirectedGraph;
import org.jgrapht.graph.DefaultEdge;

import com.dataart.spreadsheetanalytics.api.model.IExecutionGraph;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphNode;

public class ExecutionGraph implements IExecutionGraph {

    protected ExecutionGraph(DirectedGraph<IExecutionGraphNode, DefaultEdge> dgraph) {
        // TODO Auto-generated constructor stub
    }

    public static ExecutionGraph wrap(DirectedGraph<IExecutionGraphNode, DefaultEdge> dgraph) {
        // TODO Auto-generated method stub
        return new ExecutionGraph(dgraph);
    }

}
