package com.dataart.spreadsheetanalytics.dslookup.vlookup;

import org.junit.AfterClass;
import org.junit.BeforeClass;

public class DSLOOKUP_vs_VLOOKUP_1000set_4times_Test extends ZParentTest {

    static String description;
    static int iterations = 4;
    static int dataSetSize = 1000;
    static String excelFile = "src/test/resources/datamodel/dslookup/vlookup/DSLOOKUP_vs_VLOOKUP_" + dataSetSize + "set_" + iterations + "times.xlsx";
    static String dataSet = "src/test/resources/dataset/SortedDataSet" + dataSetSize + ".xlsx";

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
