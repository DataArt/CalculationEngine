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
package com.dataart.spreadsheetanalytics.api.model;

import java.util.Collection;

import com.dataart.spreadsheetanalytics.api.engine.IAuditor;
import com.dataart.spreadsheetanalytics.engine.CalculationEngineException;

/**
 * Represents execution graph. Can be got from {@link IAuditor} methods.
 * Contains {@link IExecutionGraphVertex} and {@link IExecutionGraphEdge}.
 */
public interface IExecutionGraph<V extends IExecutionGraphVertex, E extends IExecutionGraphEdge> {

    /**
     * Returns the root vertex of ExecutionGraph
     *
     * @throws CalculationEngineException if there is no root vertex
     */
    V getRootVertex() throws CalculationEngineException;

    /**
     * Returns the set of the graph edges 
     */
    Collection<E> getEdges();

    /**
     * Returns the set of the graph vertices
     */
    Collection<V> getVertices();

    /**
     * Returns the source vertex of specified edge
     */
    V getEdgeSource(E edge);

    /**
     * Returns the target vertex of specified edge
     */
    V getEdgeTarget(E edge);

    void addVertex(V vertex);
    
    void addEdge(V from, V to);
    
    void removeVertex(V vertex);
    
    Collection<E> getIncomingEdgesOf(V vertex);
    
    Collection<E> getOutgoingEdgesOf(V vertex);
    
    boolean containsVertex(V vertex);
}
