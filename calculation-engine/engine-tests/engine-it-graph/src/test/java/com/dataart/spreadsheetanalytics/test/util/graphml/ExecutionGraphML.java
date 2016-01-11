package com.dataart.spreadsheetanalytics.test.util.graphml;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import com.dataart.spreadsheetanalytics.engine.graph.ExecutionGraph;

public class ExecutionGraphML extends ExecutionGraph {

    List<ExecutionGraphVertexML> verticesML;
    List<ExecutionGraphEdgeML> edgesML;
    public Map<String, List<ExecutionGraphVertexML>> verticesIndexName;
    public Map<Integer, ExecutionGraphVertexML> verticesIndexId;
    
    public ExecutionGraphML() {
        this.verticesML = new LinkedList<>();
        this.edgesML = new LinkedList<>();
        this.verticesIndexName = new HashMap<>();
        this.verticesIndexId = new HashMap<>();
    }

    public List<ExecutionGraphVertexML> getVerticesML() { return verticesML; }
    public List<ExecutionGraphEdgeML> getEdgesML() { return edgesML; }

}
