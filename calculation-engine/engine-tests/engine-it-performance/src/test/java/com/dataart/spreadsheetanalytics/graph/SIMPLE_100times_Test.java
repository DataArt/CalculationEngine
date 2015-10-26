package com.dataart.spreadsheetanalytics.graph;

import org.junit.BeforeClass;

public class SIMPLE_100times_Test extends ParentTest {

    static String description;
    static int iterations = 100;
    static String excelFile = "src/test/resources/datamodel/graph/SIMPLE_" + iterations + "times.xlsx";
    static Object expectedValue = new Double(2.0);

    static {
        ParentTest.description = description;
        ParentTest.excelFile = excelFile;
        ParentTest.iterations = iterations;
        ParentTest.expectedValue = expectedValue;
    }
    
    @BeforeClass
    public static void before() throws Exception {
        ParentTest.before();
    }
}
