package com.dataart.spreadsheetanalytics.graph;

import org.junit.BeforeClass;

public class COMPLEX_100times_Test extends ZParentTest {

    static String description;
    static int iterations = 100;
    static String excelFile = "src/test/resources/datamodel/graph/COMPLEX_" + iterations + "times.xlsx";
    static Object expectedValue = new Double(528.0);

    static {
        ZParentTest.description = description;
        ZParentTest.excelFile = excelFile;
        ZParentTest.iterations = iterations;
        ZParentTest.expectedValue = expectedValue;
    }

    @BeforeClass
    public static void before() throws Exception {
        ZParentTest.before();
    }
}
