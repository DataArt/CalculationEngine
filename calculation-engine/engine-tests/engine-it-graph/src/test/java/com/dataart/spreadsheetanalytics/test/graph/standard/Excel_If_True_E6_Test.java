package com.dataart.spreadsheetanalytics.test.graph.standard;

import static com.dataart.spreadsheetanalytics.test.util.GraphTestUtil.STANDARD_EXCELS_DIR;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.NAME;
import static org.assertj.core.api.StrictAssertions.assertThat;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;

import com.dataart.spreadsheetanalytics.test.SerializedGraphTest;

public class Excel_If_True_E6_Test extends SerializedGraphTest {

    static String address = "E6";
    static String file = "IF_TRUE";
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
    public void assert_RootVertex_NameIsAddress() {
        assertThat(rootVertex.property(NAME).get()).isEqualTo(address);
    }

    @Test
    public void assert_Graph_NumberOfNodes() {
        assertThat(dgraph.vertexSet().size()).isEqualTo(6);
    }

    @Test
    public void assert_RootFormula_FormulasFromExcel() {
        String expectedFormulaStr = "IF(D1<5,D2,C3)";
        String actualFormulaStr = rootVertex.formula().formulaStr();
        assertThat(actualFormulaStr).isEqualTo(expectedFormulaStr);

        String expectedFormulaVals = "IF(4.0 < 5.0, 65.0)";
        String actualFormulaVals = rootVertex.formula().formulaValues();
        assertThat(actualFormulaVals).isEqualTo(expectedFormulaVals);

        String expectedFormulaPtgStr = "65.0, 4.0 5.0 < IF ";
        String actualFormulaPtgStr = rootVertex.formula().formulaPtgStr();
        assertThat(actualFormulaPtgStr).isEqualTo(expectedFormulaPtgStr);

        String expectedPtgStr = "D2, D1 VALUE < IF ";
        String actualPtgStr = rootVertex.formula().ptgStr();
        assertThat(actualPtgStr).isEqualTo(expectedPtgStr);
    }

}
