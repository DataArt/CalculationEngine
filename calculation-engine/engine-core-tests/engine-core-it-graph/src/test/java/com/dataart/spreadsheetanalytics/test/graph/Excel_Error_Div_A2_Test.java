package com.dataart.spreadsheetanalytics.test.graph;

import org.junit.BeforeClass;
import org.junit.Test;

import com.dataart.spreadsheetanalytics.api.model.IExecutionGraph;
import com.dataart.spreadsheetanalytics.test.SerializedGraphTest;

public class Excel_Error_Div_A2_Test extends SerializedGraphTest {

    static String address = "A2";  
    
    static IExecutionGraph actual;
    static String actualStr;
    
    @BeforeClass
    public static void b() {
        
//        actual = auditor.buildDynamicExecutionGraph(addr);
        
//        actualStr = serialize();
        
    }
    
    @Test
    public void assert_ActualGraph_NumberOfNodes5() {
        
    }
    
    @Test
    public void assert_ActualGraph_NumberOfEdges4() {
        
    }
    
    @Test
    public void assert_ActualGraph_HasEdgeFromA2ToPlusFunction() {
        
    }
    
    @Test
    public void assert_ActualGraph_PropertiesOfA2() {
        //value
        //formula string
    }

    @Test
    public void assert_ActualGraph_ExpectedGraph() {
//        Xml1 //actual
//        Xml2 //expected
//        XmlDiff.compare(StrictComparator.ignore(id));
    }
}
