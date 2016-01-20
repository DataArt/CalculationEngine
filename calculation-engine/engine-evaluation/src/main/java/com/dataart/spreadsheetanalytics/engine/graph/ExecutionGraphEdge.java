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
package com.dataart.spreadsheetanalytics.engine.graph;

import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphEdge;
import com.dataart.spreadsheetanalytics.engine.graph.ExecutionGraph.EdgeKey;

/**
 * {@link IExecutionGraphEdge} implementation.
 */
public class ExecutionGraphEdge implements IExecutionGraphEdge {

    protected final EdgeKey key;
    
    protected final ExecutionGraphVertex source;
    protected final ExecutionGraphVertex target;

    protected ExecutionGraphEdge(ExecutionGraphVertex source, ExecutionGraphVertex target) {
        this.source = source;
        this.target = target;
        
        this.key = new EdgeKey(source.id, target.id);
    }

    @Override public ExecutionGraphVertex getSource() { return this.source; }
    @Override public ExecutionGraphVertex getTarget() { return this.target; }
}
