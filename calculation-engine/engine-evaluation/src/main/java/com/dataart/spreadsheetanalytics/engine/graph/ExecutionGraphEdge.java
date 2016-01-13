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

import org.jgrapht.graph.DefaultEdge;

import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphEdge;

/**
 * {@link IExecutionGraphEdge} implementation.
 */
public class ExecutionGraphEdge extends DefaultEdge implements IExecutionGraphEdge {
    private static final long serialVersionUID = -1921539278513666672L;

    protected ExecutionGraphVertex source;
    protected ExecutionGraphVertex target;

    public ExecutionGraphEdge(ExecutionGraphVertex source, ExecutionGraphVertex target) {
        this.source = source;
        this.target = target;
    }

    @Override protected Object getSource() { return this.source; }
    @Override protected Object getTarget() { return this.target; }
}
