package com.dataart.spreadsheetanalytics.api.model;

import java.util.Set;

import org.jgrapht.graph.DefaultEdge;

import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex;
import com.dataart.spreadsheetanalytics.engine.execgraph.ExecutionGraphVertex;

public interface IExecutionGraph {

    /**
     * Returns the root vertex of ExecutionGraph
     *
     * @throws IllegalStateException
     */
    IExecutionGraphVertex getRootVertex() throws IllegalStateException;

    /**
     * Returns the set of the graph edges
     */
    Set<DefaultEdge> getEdges();

    /**
     * Returns the set of the graph vertices
     */
    Set<ExecutionGraphVertex> getVertices();

    /**
     * Returns the source vertex of specified edge
     */
    ExecutionGraphVertex getEdgeSource(DefaultEdge edge);

    /**
     * Returns the target vertex of specified edge
     */
    ExecutionGraphVertex getEdgeTarget(DefaultEdge edge);

}
