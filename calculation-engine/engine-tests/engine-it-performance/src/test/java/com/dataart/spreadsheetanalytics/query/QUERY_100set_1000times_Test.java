package com.dataart.spreadsheetanalytics.query;

import org.junit.AfterClass;
import org.junit.BeforeClass;

public class QUERY_100set_1000times_Test extends ZParentTest {

    static String description;
    static int iterations = 1000;
    static int dataSetSize = 100;
    static String excelFile = "src/test/resources/datamodel/query/QUERY_" + dataSetSize + "set_" + iterations + "times.xlsx";
    static String dataSet = "src/test/resources/dataset/ShuffledDataSet" + dataSetSize + ".xlsx";
    static Object expectedValue = "Column 1";

    static {
        ZParentTest.description = description;
        ZParentTest.excelFile = excelFile;
        ZParentTest.dataSet = dataSet;
        ZParentTest.iterations = iterations;
        ZParentTest.expectedValue = expectedValue;
    }
    
    @BeforeClass
    public static void before() throws Exception {
        ZParentTest.before();
    }

    @AfterClass
    public static void after() throws Exception {
        ZParentTest.after();
    }

}
