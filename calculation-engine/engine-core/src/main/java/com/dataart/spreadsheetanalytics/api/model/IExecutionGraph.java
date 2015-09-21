package com.dataart.spreadsheetanalytics.api.model;

import java.util.Set;

import org.jgrapht.graph.DefaultEdge;

public interface IExecutionGraph {

    /**
     * Returns the root vertex of ExecutionGraph
     *
     * @throws IllegalStateException if there is no root vertex or several vertices that can be treated as 'root'
     */
    IExecutionGraphVertex getRootVertex() throws IllegalStateException;

    /**
     * Returns the set of the graph edges
     * TODO: think twice about giving 3pty interface to outworld 
     */
    Set<DefaultEdge> getEdges();

    /**
     * Returns the set of the graph vertices
     */
    Set<IExecutionGraphVertex> getVertices();

    /**
     * Returns the source vertex of specified edge
     */
    IExecutionGraphVertex getEdgeSource(DefaultEdge edge);

    /**
     * Returns the target vertex of specified edge
     */
    IExecutionGraphVertex getEdgeTarget(DefaultEdge edge);

}
