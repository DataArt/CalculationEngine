package com.dataart.spreadsheetanalytics.graph;

import org.junit.BeforeClass;

public class COMPLEX_1000times_Test extends ParentTest {

    static String description;
    static int iterations = 1000;
    static String excelFile = "src/test/resources/datamodel/graph/COMPLEX_" + iterations + "times.xlsx";
    static Object expectedValue = new Double(528.0);

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
