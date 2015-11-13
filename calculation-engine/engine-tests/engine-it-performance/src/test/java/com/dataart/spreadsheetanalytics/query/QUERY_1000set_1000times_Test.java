package com.dataart.spreadsheetanalytics.query;

import org.junit.After;
import org.junit.Before;

public class QUERY_1000set_1000times_Test extends ZParentTest {

    static String description;
    static int iterations = 1000;
    static int dataSetSize = 1000;
    static String excelFile = "src/test/resources/datamodel/query/QUERY_" + dataSetSize + "set_" + iterations + "times.xlsx";
    static String dataSet = "src/test/resources/dataset/ShuffledDataSet" + dataSetSize + ".xlsx";

    static {
        ZParentTest.description = description;
        ZParentTest.excelFile = excelFile;
        ZParentTest.dataSet = dataSet;
        ZParentTest.iterations = iterations;
    }
    
    @Before
    public void before() throws Exception {
        ZParentTest.beforeTests();
    }

    @After
    public void after() throws Exception {
        ZParentTest.afterTests();
    }

}
