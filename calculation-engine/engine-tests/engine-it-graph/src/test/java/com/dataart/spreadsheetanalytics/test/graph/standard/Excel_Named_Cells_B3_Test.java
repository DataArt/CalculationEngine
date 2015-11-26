package com.dataart.spreadsheetanalytics.test.graph.standard;

import static com.dataart.spreadsheetanalytics.test.util.GraphTestUtil.STANDARD_EXCELS_DIR;
import static com.dataart.spreadsheetanalytics.test.util.GraphTestUtil.STANDARD_GRAPHML_DIR;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import com.dataart.spreadsheetanalytics.test.SerializedGraphTest;

public class Excel_Named_Cells_B3_Test extends SerializedGraphTest  {

    static String address = "B3";
    static String file = "Named_Cells";
    static String path = STANDARD_EXCELS_DIR + file + ".xlsx";

    @Before
    public void beforeTest() throws Exception {
        super.before(path, address);
    }

    @After
    public void afterTest() throws Exception {
        super.after();
    }

    @Test
    public void assert_ExcelFile_SerializedGraph() throws Exception {
        super.compare_ExcelFile_SerializedGraph(STANDARD_GRAPHML_DIR, file, address);
    }
}
