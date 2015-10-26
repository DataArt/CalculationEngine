package com.dataart.spreadsheetanalytics.test.graph.standartwithconfig;

import static com.dataart.spreadsheetanalytics.test.util.GraphTestUtil.STANDARD_EXCELS_DIR;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;

import com.dataart.spreadsheetanalytics.api.engine.IAuditor;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetAuditor;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.engine.execgraph.ExecutionGraph;
import com.dataart.spreadsheetanalytics.engine.execgraph.ExecutionGraphConfig;
import com.dataart.spreadsheetanalytics.engine.execgraph.ExecutionGraphVertex;
import com.dataart.spreadsheetanalytics.model.DataModel;
import com.dataart.spreadsheetanalytics.test.SerializedGraphTest;
import com.dataart.spreadsheetanalytics.test.util.GraphTestUtil;

public class Excel_ACOS_Fx_All extends SerializedGraphTest {

    static String file = "ACOS_Fx";
    static String path = STANDARD_EXCELS_DIR + file + ".xlsx";
    static String suffix = "All_";
    static String suffix1 = "JOIN_ALL_";
    static String suffix2 = "JOIN_2_";
    static String suffix3 = "JOIN_5_";
    static String suffix4 = "JOIN_10_";
    static IAuditor auditor = null;

    @BeforeClass
    public static void before() throws Exception {
        final IDataModel model = new DataModel(path, path);
        GraphTestUtil.initExternalServices((DataModel) model);
        auditor = new SpreadsheetAuditor(new SpreadsheetEvaluator((DataModel) model));
    }

    @AfterClass
    public static void after() throws Exception {
        GraphTestUtil.destroyExternalServices();
    }

    @Test
    public void assert_ExcelFile_SerializedGraph_No_Join() {
        graph = auditor.buildDynamicExecutionGraph();
        dgraph = ExecutionGraph.unwrap((ExecutionGraph) graph);
        rootVertex = (ExecutionGraphVertex) graph.getRootVertex();
        super.assert_ExcelFile_SerializedGraph(file, suffix);
    }

    @Test
    public void assert_ExcelFile_SerializedGraph_Join_All() {
        graph = auditor.buildDynamicExecutionGraph(ExecutionGraphConfig.JOIN_ALL_DUPLICATE_VERTICES);
        dgraph = ExecutionGraph.unwrap((ExecutionGraph) graph);
        rootVertex = (ExecutionGraphVertex) graph.getRootVertex();
        super.assert_ExcelFile_SerializedGraph(file, suffix1);
    }

    @Test
    public void assert_ExcelFile_SerializedGraph_Join_2() {
        graph = auditor.buildDynamicExecutionGraph(ExecutionGraphConfig.LIMIT_TO_2_DUPLICATE_VERTICES);
        dgraph = ExecutionGraph.unwrap((ExecutionGraph) graph);
        rootVertex = (ExecutionGraphVertex) graph.getRootVertex();
        super.assert_ExcelFile_SerializedGraph(file, suffix2);
    }

    @Test
    public void assert_ExcelFile_SerializedGraph_Join_5() {
        graph = auditor.buildDynamicExecutionGraph(ExecutionGraphConfig.LIMIT_TO_5_DUPLICATES_VERTICES);
        dgraph = ExecutionGraph.unwrap((ExecutionGraph) graph);
        rootVertex = (ExecutionGraphVertex) graph.getRootVertex();
        super.assert_ExcelFile_SerializedGraph(file, suffix3);
    }

    @Test
    public void assert_ExcelFile_SerializedGraph_Join_10() {
        graph = auditor.buildDynamicExecutionGraph(ExecutionGraphConfig.LIMIT_TO_10_DUPLICATES_VERTICES);
        dgraph = ExecutionGraph.unwrap((ExecutionGraph) graph);
        rootVertex = (ExecutionGraphVertex) graph.getRootVertex();
        super.assert_ExcelFile_SerializedGraph(file, suffix4);
    }

}
