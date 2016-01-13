package com.dataart.spreadsheetanalytics.test.util.graphml;

import com.dataart.spreadsheetanalytics.engine.graph.ExecutionGraphVertex;

public class ExecutionGraphVertexML extends ExecutionGraphVertex {

    /** */
    private static final long serialVersionUID = 1L;
    
    public String formulaToString;

    public ExecutionGraphVertexML(String name) {
        super(name);
    }
    

}
