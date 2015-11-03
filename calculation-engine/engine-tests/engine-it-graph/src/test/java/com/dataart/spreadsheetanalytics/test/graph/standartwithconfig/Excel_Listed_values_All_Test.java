/*
Copyright 2015 DataArt Apps, Inc

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
package com.dataart.spreadsheetanalytics.test.graph.standartwithconfig;

import static com.dataart.spreadsheetanalytics.test.util.GraphTestUtil.ALL_CELLS_GRAPHML_DIR;
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

public class Excel_Listed_values_All_Test extends SerializedGraphTest {
    
    static String file = "Listed_values";
    static String path = STANDARD_EXCELS_DIR + file + ".xlsx";
    static String graphml = file + "\\";
    static String suffix = "All";
    static String suffix1 = "JOIN_ALL";
    static String suffix2 = "JOIN_2";
    static String suffix3 = "JOIN_5";
    static String suffix4 = "JOIN_10";
    static IAuditor auditor = null;
    
    
    @BeforeClass
    public static void before() throws Exception {
        final IDataModel model = new DataModel(path, path);
        GraphTestUtil.initExternalServices((DataModel) model);
        auditor = new SpreadsheetAuditor(new SpreadsheetEvaluator((DataModel) model));        
    }

    @AfterClass
    public static void after() throws Exception {
        SerializedGraphTest.after();
    }
    
    @Test
    public void assert_ExcelFile_SerializedGraph_No_Join() {
        graph = auditor.buildDynamicExecutionGraph();
        dgraph = ExecutionGraph.unwrap((ExecutionGraph) graph);
        rootVertex = (ExecutionGraphVertex) graph.getRootVertex();
        super.compare_ExcelFile_SerializedGraph(ALL_CELLS_GRAPHML_DIR, graphml, suffix);
    }

    @Test
    public void assert_ExcelFile_SerializedGraph_Join_All() {
        graph = auditor.buildDynamicExecutionGraph(ExecutionGraphConfig.JOIN_ALL_DUPLICATE_VERTICES);
        dgraph = ExecutionGraph.unwrap((ExecutionGraph) graph);
        rootVertex = (ExecutionGraphVertex) graph.getRootVertex();
        super.compare_ExcelFile_SerializedGraph(ALL_CELLS_GRAPHML_DIR, graphml, suffix1);
    }

    @Test
    public void assert_ExcelFile_SerializedGraph_Join_2() {
        graph = auditor.buildDynamicExecutionGraph(ExecutionGraphConfig.LIMIT_TO_2_DUPLICATE_VERTICES);
        dgraph = ExecutionGraph.unwrap((ExecutionGraph) graph);
        rootVertex = (ExecutionGraphVertex) graph.getRootVertex();
        super.compare_ExcelFile_SerializedGraph(ALL_CELLS_GRAPHML_DIR, graphml, suffix2);
    }

    @Test
    public void assert_ExcelFile_SerializedGraph_Join_5() {
        graph = auditor.buildDynamicExecutionGraph(ExecutionGraphConfig.LIMIT_TO_5_DUPLICATES_VERTICES);
        dgraph = ExecutionGraph.unwrap((ExecutionGraph) graph);
        rootVertex = (ExecutionGraphVertex) graph.getRootVertex();
        super.compare_ExcelFile_SerializedGraph(ALL_CELLS_GRAPHML_DIR, graphml, suffix3);
    }

    @Test
    public void assert_ExcelFile_SerializedGraph_Join_10() {
        graph = auditor.buildDynamicExecutionGraph(ExecutionGraphConfig.LIMIT_TO_10_DUPLICATES_VERTICES);
        dgraph = ExecutionGraph.unwrap((ExecutionGraph) graph);
        rootVertex = (ExecutionGraphVertex) graph.getRootVertex();
        super.compare_ExcelFile_SerializedGraph(ALL_CELLS_GRAPHML_DIR, graphml, suffix4);
    }
}
