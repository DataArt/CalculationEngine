package com.dataart.spreadsheetanalytics;

import org.apache.poi.ss.util.WorkbookUtil;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.junit.Assert;
import org.junit.Test;

public class AppTest {

    @Test
    public void testApp() {
        String str = WorkbookUtil.fakeMethod("bla test");
        Assert.assertNotNull(str);
        
        XSSFWorkbook w = new XSSFWorkbook();
        Assert.assertNotNull(w);
    }
}
