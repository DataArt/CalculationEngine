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
package com.dataart.spreadsheetanalytics.api.engine;

import com.dataart.spreadsheetanalytics.api.model.IA1Address;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraph;
import com.dataart.spreadsheetanalytics.engine.graph.ExecutionGraphConfig;

/**
 * In addition to {@link IEvaluator} this entity allows to collect execution and dependency information from 
 * {@link IDataModel}s. The result of such information collection is an {@link IExecutionGraph} - graph structure of 
 * dependencies or execution steps.
 */
public interface IAuditor {
    
    /** Returns instance of Evaluator connected to this Auditor. */
    IEvaluator getEvaluator();

    /** Builds static dependency graph for {@link IDataModel}. */
    IExecutionGraph buildDependencyGraph();

    /** Builds static dependency graph for one cell from {@link IDataModel}. */
    IExecutionGraph buildDependencyGraph(IA1Address cell);

    /** Builds runtime execution graph (execution trace) for {@link IDataModel}. */
    IExecutionGraph buildExecutionGraph();

    /**
     * Builds runtime execution graph (execution trace) for {@link IDataModel}.
     * Allows to specify some configuration parameters that will be used to build graph.
     * @see ExecutionGraphConfig for details.
     */
    IExecutionGraph buildExecutionGraph(ExecutionGraphConfig config);

    /** Builds runtime execution graph (execution trace) for one cell from {@link IDataModel}. */
    IExecutionGraph buildExecutionGraph(IA1Address cell);

    /**
     * Builds runtime execution graph (execution trace) for one cell from {@link IDataModel}.
     * Allows to specify some configuration parameters that will be used to build graph.
     * @see ExecutionGraphConfig for details.
     */
    IExecutionGraph buildExecutionGraph(IA1Address cell, ExecutionGraphConfig config);

}