package com.dataart.spreadsheetanalytics.test.graph;

import static com.dataart.spreadsheetanalytics.test.util.GraphTestUtil.STANDARD_EXCELS_DIR;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.NAME;
import static org.assertj.core.api.StrictAssertions.assertThat;

import java.io.IOException;

import org.junit.BeforeClass;
import org.junit.Test;

import com.dataart.spreadsheetanalytics.engine.execgraph.ExecutionGraph;
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
    public void assert_root_vertex_not_null() {
        assertThat(rootVertex).isNotEqualTo(null);
    }
    
    @Test
    public void assert_root_vertex_fields() {
        assertThat(rootVertex.property(NAME).get()).isEqualTo(address);
//        assertThat(rootVertex.property(VALUE).get()).isEqualTo(null);        
    }
    
    @Test
    public void assert_number_of_nodes() {
        assertThat(ExecutionGraph.unwrap((ExecutionGraph)graph).vertexSet().size()).isEqualTo(6);
    }
    
    @Test
    public void assert_root_formula_fields() {
        assertThat(rootVertex.formula().formulaStr()).isEqualTo("IF(D1<5,D2,C3)");
        assertThat(rootVertex.formula().formulaValues()).isEqualTo("IF(4.0 < 5, 65.0)");
        assertThat(rootVertex.formula().formulaPtgStr()).isEqualTo("65.0, 4.0 5 < IF ");
        assertThat(rootVertex.formula().ptgStr()).isEqualTo("D2, D1 VALUE < IF ");
    }        

}
