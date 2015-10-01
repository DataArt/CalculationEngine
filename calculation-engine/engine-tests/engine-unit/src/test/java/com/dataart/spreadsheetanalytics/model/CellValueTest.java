package com.dataart.spreadsheetanalytics.model;

import static org.assertj.core.api.StrictAssertions.assertThat;

import org.junit.Test;

import com.dataart.spreadsheetanalytics.model.CellValue;

public class CellValueTest {

    @Test
    public void get_AnyObject_TheSameIsReturned() {
        //given
        Object expected = new Object();

        //when
        CellValue cv = new CellValue(expected);

        //then
        assertThat(cv.get()).isEqualTo(expected);
    }

    @Test
    public void get_AnyString_StringIsReturned() {
        //given
        String expected = "expected";

        //when
        CellValue cv = new CellValue(expected);

        //then
        assertThat(cv.get()).isEqualTo(expected);
    }

    @Test
    public void get_Null_NullIsReturned() {

        //when
        CellValue cv = new CellValue(null);

        //then
        assertThat(cv.get()).isEqualTo(null);
    }
}
