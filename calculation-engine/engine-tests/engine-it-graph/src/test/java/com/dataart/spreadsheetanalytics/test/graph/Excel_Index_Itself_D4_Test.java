package com.dataart.spreadsheetanalytics.test.graph;

import static com.dataart.spreadsheetanalytics.test.util.GraphTestUtil.STANDARD_EXCELS_DIR;

import java.io.IOException;

import org.junit.Test;

import com.dataart.spreadsheetanalytics.api.engine.IAuditor;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetAuditor;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.engine.execgraph.ExecutionGraph;
import com.dataart.spreadsheetanalytics.engine.execgraph.ExecutionGraphVertex;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.CellAddress;
import com.dataart.spreadsheetanalytics.model.DataModel;
import com.dataart.spreadsheetanalytics.test.SerializedGraphTest;

public class Excel_Index_Itself_D4_Test extends SerializedGraphTest {
    
    static String address = "D4";
    static String file = "Index_Itself";
    static String path = STANDARD_EXCELS_DIR + file + ".xlsx";
        
    @Test(expected = IllegalStateException.class)
    public void assert_ExcelFile_SerializedGraph() throws IOException {
        //given
        final IDataModel model = new DataModel(file, path);        
        final IAuditor auditor = new SpreadsheetAuditor(new SpreadsheetEvaluator(model));        
        final ICellAddress addr = new CellAddress(model.dataModelId(), A1Address.fromA1Address(address));        
        graph = auditor.buildDynamicExecutionGraph(addr);
        dgraph = ExecutionGraph.unwrap((ExecutionGraph) graph);

        //when
        rootVertex = (ExecutionGraphVertex) graph.getRootVertex();
        
        //then
        //Exception
    }
}
