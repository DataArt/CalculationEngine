package com.dataart.spreadsheetanalytics.dslookup.shuffled;

import org.junit.AfterClass;
import org.junit.BeforeClass;

import com.dataart.spreadsheetanalytics.dslookup.ZParentTest;

public class DSLOOKUP_10set_100times_Test extends ZParentTest {

    static String description;
    static int dslookups = 10;
    static int iterations = dslookups * 10;
    static int dataSetSize = 10;
    static String excelFile = "src/test/resources/datamodel/dslookup/shuffled/DSLOOKUP_" + dataSetSize + "set_" + iterations + "times.xlsx";
    static String dataSet = "src/test/resources/dataset/ShuffledDataSet" + dataSetSize + ".xlsx";

    static {
        ZParentTest.description = description;
        ZParentTest.excelFile = excelFile;
        ZParentTest.dataSet = dataSet;
        ZParentTest.iterations = iterations;
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
