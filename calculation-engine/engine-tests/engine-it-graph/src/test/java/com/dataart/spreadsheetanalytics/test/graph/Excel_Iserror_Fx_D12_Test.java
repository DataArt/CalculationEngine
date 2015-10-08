package com.dataart.spreadsheetanalytics.test.graph;

import static com.dataart.spreadsheetanalytics.test.util.GraphTestUtil.STANDARD_EXCELS_DIR;

import org.junit.BeforeClass;
import org.junit.Ignore;
import org.junit.Test;

import com.dataart.spreadsheetanalytics.test.SerializedGraphTest;

public class Excel_Iserror_Fx_D12_Test extends SerializedGraphTest {
    
    static String address = "D12";
    static String file = "Iserror_Fx";
    static String path = STANDARD_EXCELS_DIR + file + ".xlsx";
    
    @BeforeClass
    public static void before() throws Exception {
        before(path, address);        
    }
    
    @Test
    @Ignore
    public void assert_ExcelFile_SerializedGraph() {
        super.assert_ExcelFile_SerializedGraph(file, address);
    }
}
