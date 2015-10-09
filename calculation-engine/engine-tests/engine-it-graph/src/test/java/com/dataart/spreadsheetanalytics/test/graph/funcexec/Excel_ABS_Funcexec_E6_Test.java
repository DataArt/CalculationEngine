package com.dataart.spreadsheetanalytics.test.graph.funcexec;

import static com.dataart.spreadsheetanalytics.test.util.GraphTestUtil.STANDARD_EXCELS_DIR;

import org.junit.BeforeClass;
import org.junit.Test;

import com.dataart.spreadsheetanalytics.test.SerializedGraphTest;

public class Excel_ABS_Funcexec_E6_Test extends SerializedGraphTest {
    
    static String address = "E6";
    static String file = "ABS_Funcexec";
    static String path = STANDARD_EXCELS_DIR + file + ".xlsx";
    
    @BeforeClass
    public static void before() throws Exception {
        before(path, address);        
    }

    @Test
    public void assert_ExcelFile_SerializedGraph() {
        super.assert_ExcelFile_SerializedGraph(file, address);
    }
}