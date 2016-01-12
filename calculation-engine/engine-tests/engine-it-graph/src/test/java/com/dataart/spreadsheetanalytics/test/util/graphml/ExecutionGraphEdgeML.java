package com.dataart.spreadsheetanalytics.test.util.graphml;

import com.dataart.spreadsheetanalytics.engine.graph.ExecutionGraphEdge;
import com.dataart.spreadsheetanalytics.engine.graph.ExecutionGraphVertex;

public class ExecutionGraphEdgeML extends ExecutionGraphEdge {
    
    private static final long serialVersionUID = 1L;
    
    public ExecutionGraphEdgeML() {
        this(null, null);
    }

    public ExecutionGraphEdgeML(ExecutionGraphVertex source, ExecutionGraphVertex target) {
        super(source, target);
    }
    
    public int sourceId;
    public int targetId;
    

}
