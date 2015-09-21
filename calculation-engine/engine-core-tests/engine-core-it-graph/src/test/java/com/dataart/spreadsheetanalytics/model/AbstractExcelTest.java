package com.dataart.spreadsheetanalytics.model;

import java.io.IOException;

import org.jgrapht.DirectedGraph;
import org.junit.BeforeClass;

import com.dataart.spreadsheetanalytics.api.engine.IAuditor;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraph;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetAuditor;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.engine.execgraph.ExecutionGraph;
import com.dataart.spreadsheetanalytics.engine.execgraph.ExecutionGraphVertex;

public abstract class AbstractExcelTest {
    
    static IExecutionGraph graph;
    static ExecutionGraphVertex rootVertex;
    static DirectedGraph dgraph;
    static String path;
    static String address;
    
    @BeforeClass
    public static void before() throws IOException {
        final IDataModel model = new DataModel(path);        
        final IAuditor auditor = new SpreadsheetAuditor(new SpreadsheetEvaluator(model));        
        ICellAddress addr = new CellAddress(model.dataModelId(), A1Address.fromA1Address(address));        
        graph = auditor.buildDynamicExecutionGraph(addr);
        dgraph = ExecutionGraph.unwrap((ExecutionGraph) graph);
        rootVertex = (ExecutionGraphVertex)graph.getRootVertex();        
    }    

}
