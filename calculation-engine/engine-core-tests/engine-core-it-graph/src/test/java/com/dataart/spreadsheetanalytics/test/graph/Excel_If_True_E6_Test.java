package com.dataart.spreadsheetanalytics.test.graph;

import static com.dataart.spreadsheetanalytics.test.util.GraphTestUtil.STANDARD_EXCELS_DIR;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.NAME;
import static org.assertj.core.api.StrictAssertions.assertThat;

import java.io.IOException;

import org.junit.BeforeClass;
import org.junit.Test;

import com.dataart.spreadsheetanalytics.test.SerializedGraphTest;

public class Excel_If_True_E6_Test extends SerializedGraphTest {
    
    static String address = "E6";
    static String file = "IF_TRUE";
    static String path = STANDARD_EXCELS_DIR + file + ".xlsx";
    
    @BeforeClass
    public static void before() throws IOException {
        before(path, address);        
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
        assertThat(rootVertex.formula().formulaStr()).isEqualTo("IF(D1<5,D2,C3)");
        assertThat(rootVertex.formula().formulaValues()).isEqualTo("IF(4.0 < 5, 65.0)");
        assertThat(rootVertex.formula().formulaPtgStr()).isEqualTo("65.0, 4.0 5 < IF ");
        assertThat(rootVertex.formula().ptgStr()).isEqualTo("D2, D1 VALUE < IF ");
    }        

}
