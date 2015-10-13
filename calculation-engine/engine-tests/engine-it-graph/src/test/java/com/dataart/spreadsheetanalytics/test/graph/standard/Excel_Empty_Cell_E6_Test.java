package com.dataart.spreadsheetanalytics.test.graph.standard;

import static com.dataart.spreadsheetanalytics.test.util.GraphTestUtil.STANDARD_EXCELS_DIR;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.NAME;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.VALUE;
import static org.assertj.core.api.StrictAssertions.assertThat;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;

import com.dataart.spreadsheetanalytics.engine.execgraph.ExecutionGraph;
import com.dataart.spreadsheetanalytics.test.SerializedGraphTest;

public class Excel_Empty_Cell_E6_Test extends SerializedGraphTest {

    static String address = "E6";
    static String file = "Empty_cell";
    static String path = STANDARD_EXCELS_DIR + file + ".xlsx";

    @BeforeClass
    public static void before() throws Exception {
        SerializedGraphTest.before(path, address);
    }

    @AfterClass
    public static void after() throws Exception {
        SerializedGraphTest.after();
    }

    @Test
    public void assert_ExcelFile_SerializedGraph() {
        super.assert_ExcelFile_SerializedGraph(file, address);
    }

    @Test
    public void assert_RootVertex_NotNull() {
        assertThat(rootVertex).isNotEqualTo(null);
    }

    @Test
    public void assert_RootVertex_Fields() {
        assertThat(rootVertex.property(NAME).get()).isEqualTo(address);
        assertThat(rootVertex.property(VALUE).get()).isEqualTo(null);
    }

    @Test
    public void assert_NumberOfNodes_1() {
        assertThat(ExecutionGraph.unwrap((ExecutionGraph) graph).vertexSet().size()).isEqualTo(1);
    }

    @Test
    public void assert_RootFormula_Null() {
        assertThat(rootVertex.formula()).isEqualTo(null);
    }

}
