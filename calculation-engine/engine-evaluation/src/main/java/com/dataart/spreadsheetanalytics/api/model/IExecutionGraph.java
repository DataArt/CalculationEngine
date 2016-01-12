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

import java.util.Set;

import com.dataart.spreadsheetanalytics.api.engine.IAuditor;
import com.dataart.spreadsheetanalytics.engine.CalculationEngineException;

/**
 * Represents execution graph. Can be got from {@link IAuditor} methods.
 * Contains {@link IExecutionGraphVertex} and {@link IExecutionGraphEdge}.
 */
public interface IExecutionGraph {

    /**
     * Returns the root vertex of ExecutionGraph
     *
     * @throws CalculationEngineException if there is no root vertex
     */
    IExecutionGraphVertex getRootVertex() throws CalculationEngineException;

    /**
     * Returns the set of the graph edges 
     */
    Set<? extends IExecutionGraphEdge> getEdges();

    /**
     * Returns the set of the graph vertices
     */
    Set<? extends IExecutionGraphVertex> getVertices();

    /**
     * Returns the source vertex of specified edge
     */
    IExecutionGraphVertex getEdgeSource(IExecutionGraphEdge edge);

    /**
     * Returns the target vertex of specified edge
     */
    IExecutionGraphVertex getEdgeTarget(IExecutionGraphEdge edge);

}
