package com.dataart.spreadsheetanalytics.test.graph.standard;

import static com.dataart.spreadsheetanalytics.test.util.GraphTestUtil.STANDARD_EXCELS_DIR;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;

import com.dataart.spreadsheetanalytics.test.SerializedGraphTest;

public class Excel_DAYS360_Fx_B8_Test extends SerializedGraphTest {
    
    static String address = "B8";
    static String file = "DAYS360_Fx";
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
}
