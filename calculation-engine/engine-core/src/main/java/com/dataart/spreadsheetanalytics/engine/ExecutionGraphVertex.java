package com.dataart.spreadsheetanalytics.engine;

import org.apache.poi.common.execgraph.IExecutionGraphVertex;

public class ExecutionGraphVertex implements IExecutionGraphVertex {

    String name;
    String value;

    public ExecutionGraphVertex(String name) {
        this.name = name;
    }

    @Override
    public void value(String value) {
        this.value = value;
    }

    @Override
    public String toString() {
        return name + " => " + value;
    }

}
