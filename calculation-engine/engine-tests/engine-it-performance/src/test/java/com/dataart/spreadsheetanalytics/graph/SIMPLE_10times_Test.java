package com.dataart.spreadsheetanalytics.graph;

import org.junit.BeforeClass;

public class SIMPLE_10times_Test extends ZParentTest {

    static String description;
    static int iterations = 10;
    static String excelFile = "src/test/resources/datamodel/graph/SIMPLE_" + iterations + "times.xlsx";
    static Object expectedValue = new Double(2.0);

    static {
        ZParentTest.description = description;
        ZParentTest.excelFile = excelFile;
        ZParentTest.iterations = iterations;
        ZParentTest.expectedValue = expectedValue;
    }
    
    @BeforeClass
    public static void before() throws Exception {
        ZParentTest.beforeTests();
    }
}
