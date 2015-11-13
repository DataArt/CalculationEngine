package com.dataart.spreadsheetanalytics.funcexec;

import org.junit.AfterClass;
import org.junit.BeforeClass;

public class FUNCEXEC_vs_PLAIN_1times_Test extends ZParentTest {

    static String description;
    static int iterations = 1;
    static String excelFile = "src/test/resources/datamodel/funcexec/FUNCEXEC_vs_PLAIN_" + iterations + "times.xlsx";

    static {
        ZParentTest.description = description;
        ZParentTest.excelFile = excelFile;
        ZParentTest.iterations = iterations;
    }

    @BeforeClass
    public static void before() throws Exception {
        ZParentTest.beforeTests();
    }

    @AfterClass
    public static void after() throws Exception {
        ZParentTest.afterTests();
    }

}
