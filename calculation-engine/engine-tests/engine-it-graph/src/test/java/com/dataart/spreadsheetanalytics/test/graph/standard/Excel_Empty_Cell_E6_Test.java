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
        assertThat(rootVertex.formula()).isNotEqualTo(null);
        assertThat(rootVertex.formula().formulaPtg()).isEqualTo(null);
        assertThat(rootVertex.formula().formulaPtgStr()).isEqualTo(null);
        assertThat(rootVertex.formula().formulaStr()).isEqualTo(null);
        assertThat(rootVertex.formula().formulaValues()).isEqualTo(null);
    }

}
