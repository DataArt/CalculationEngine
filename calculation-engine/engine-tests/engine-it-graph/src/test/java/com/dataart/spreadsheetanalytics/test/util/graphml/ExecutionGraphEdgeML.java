package com.dataart.spreadsheetanalytics.test.util.graphml;

import com.dataart.spreadsheetanalytics.engine.graph.ExecutionGraphEdge;
import com.dataart.spreadsheetanalytics.engine.graph.ExecutionGraphVertex;

public class ExecutionGraphEdgeML extends ExecutionGraphEdge {
    
    public ExecutionGraphEdgeML(ExecutionGraphVertex source, ExecutionGraphVertex target) {
        super(source, target);
        this.sourceId = source.getId();
        this.targetId = target.getId();
    }
    
    public int sourceId;
    public int targetId;

}
