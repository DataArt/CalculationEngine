package com.dataart.spreadsheetanalytics.api.engine;

import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraph;

public interface IAuditor {

    IExecutionGraph buildStaticExecutionGraph();

    IExecutionGraph buildStaticExecutionGraph(ICellAddress cell);

    IExecutionGraph buildDynamicExecutionGraph();

    IExecutionGraph buildDynamicExecutionGraph(ICellAddress cell);

}
