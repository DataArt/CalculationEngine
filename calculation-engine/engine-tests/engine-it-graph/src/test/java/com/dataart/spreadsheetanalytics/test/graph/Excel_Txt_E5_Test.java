package com.dataart.spreadsheetanalytics.test.graph;

import static com.dataart.spreadsheetanalytics.test.util.GraphTestUtil.STANDARD_EXCELS_DIR;

import org.junit.BeforeClass;
import org.junit.Ignore;
import org.junit.Test;

import com.dataart.spreadsheetanalytics.test.SerializedGraphTest;

public class Excel_Txt_E5_Test extends SerializedGraphTest {
    
    static String address = "E5";
    static String file = "Txt";
    static String path = STANDARD_EXCELS_DIR + file + ".xlsx";
    
    @BeforeClass
    public static void before() throws Exception {
        before(path, address);        
    }
    
    @Test
    @Ignore //TODO: text values in xml probably with \n and &
    public void assert_ExcelFile_SerializedGraph() {
        super.assert_ExcelFile_SerializedGraph(file, address);
    }
}
