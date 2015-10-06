package com.dataart.spreadsheetanalytics.api.model;

import java.util.Set;

public interface IExecutionGraph {

    /**
     * Returns the root vertex of ExecutionGraph
     *
     * @throws IllegalStateException if there is no root vertex
     */
    IExecutionGraphVertex getRootVertex() throws IllegalStateException;

    /**
     * Returns the set of the graph edges 
     */
    Set<IExecutionGraphEdge> getEdges();

    /**
     * Returns the set of the graph vertices
     */
    Set<IExecutionGraphVertex> getVertices();

    /**
     * Returns the source vertex of specified edge
     */
    IExecutionGraphVertex getEdgeSource(IExecutionGraphEdge edge);

    /**
     * Returns the target vertex of specified edge
     */
    IExecutionGraphVertex getEdgeTarget(IExecutionGraphEdge edge);

}
