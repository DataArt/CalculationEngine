package com.dataart.spreadsheetanalytics;

import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.junit.Assert;
import org.junit.Test;

public class AppTest {

    @Test
    public void testApp() {
        XSSFWorkbook w = new XSSFWorkbook();
        Assert.assertNotNull(w);
    }
}
