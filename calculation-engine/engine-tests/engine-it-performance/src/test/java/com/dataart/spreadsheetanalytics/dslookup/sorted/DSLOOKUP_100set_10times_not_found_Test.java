package com.dataart.spreadsheetanalytics.dslookup.sorted;

import org.junit.AfterClass;
import org.junit.BeforeClass;

import com.dataart.spreadsheetanalytics.dslookup.ZParentTest;

public class DSLOOKUP_100set_10times_not_found_Test extends ZParentTest {
    
    static String description;
    static int dslookups = 10;
    static int iterations = dslookups * 4;
    static int dataSetSize = 100;
    static String excelFile = "src/test/resources/datamodel/dslookup/sorted/DSLOOKUP_" + dataSetSize + "set_" + dslookups + "times_not_found.xlsx";
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
