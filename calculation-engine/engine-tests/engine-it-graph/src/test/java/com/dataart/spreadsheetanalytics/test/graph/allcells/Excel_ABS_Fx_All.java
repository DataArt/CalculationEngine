package com.dataart.spreadsheetanalytics.test.graph.allcells;

import static com.dataart.spreadsheetanalytics.test.util.GraphTestUtil.STANDARD_EXCELS_DIR;

import org.junit.AfterClass;
import org.junit.BeforeClass;
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
import com.dataart.spreadsheetanalytics.test.util.GraphTestUtil;

public class Excel_ABS_Fx_All extends SerializedGraphTest {

    static String file = "ABS_Fx";
    static String path = STANDARD_EXCELS_DIR + file + ".xlsx";
    static String suffix = "All";
    
    @BeforeClass
    public static void before() throws Exception {
        final IDataModel model = new DataModel(path, path);
        GraphTestUtil.initExternalServices((DataModel) model);        
        final IAuditor auditor = new SpreadsheetAuditor(new SpreadsheetEvaluator((DataModel) model));                
        
        //build
        graph = auditor.buildDynamicExecutionGraph();
        dgraph = ExecutionGraph.unwrap((ExecutionGraph) graph);
        rootVertex = (ExecutionGraphVertex) graph.getRootVertex();  
    }
    
    @AfterClass
    public static void after() throws Exception {
        GraphTestUtil.destroyExternalServices();
    }
    
    @Test
    public void assert_ExcelFile_SerializedGraph() {
        super.assert_ExcelFile_SerializedGraph(file, suffix);
    }        

}
