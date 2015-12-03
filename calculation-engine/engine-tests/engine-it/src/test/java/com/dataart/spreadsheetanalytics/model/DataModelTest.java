package com.dataart.spreadsheetanalytics.model;

import static org.assertj.core.api.StrictAssertions.assertThat;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Arrays;
import java.util.Iterator;

import com.dataart.spreadsheetanalytics.engine.Converters;

import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDmCell;
import com.dataart.spreadsheetanalytics.api.model.IDmRow;

import org.junit.Test;

import com.dataart.spreadsheetanalytics.api.model.IDataModel;

public class DataModelTest {

    static final String excel = "src/test/resources/datamodel/ExcelFileConverters_Test.xlsx";

    @Test
    public void test_firstRowIndex_lastRowIndex() throws IOException {

        InputStream excelIn = new FileInputStream(excel);

        IDataModel dm = Converters.toDataModel(excelIn);

        int expectedFirstRowIndex = 0;
        int expectedLastRowIndex = 6;

        assertThat(dm.getFirstRowIndex()).isEqualTo(expectedFirstRowIndex);
        assertThat(dm.getLastRowIndex()).isEqualTo(expectedLastRowIndex);

        excelIn.close();
    }

    @Test
    public void test_Iterator() throws IOException {

        InputStream excelIn = new FileInputStream(excel);

        IDataModel dm = Converters.toDataModel(excelIn);

        String[] expectedValues = {"1.0", "true",  "-1.0E-4", "Text 1", "#REF!",   "=ISNUMBER(A1)", 
                                   "2.0", "false", "-2.0E-4", "Text 2", "#VALUE!", "=SUBSTITUTE(D2,\"2\",\"00\")", 
                                   "3.0", "true",  "-3.0E-4", "Text 3", "#N/A",    "=ISLOGICAL(B3)",
                                   "4.0", "false", "-4.0E-4", "Text 4", "#DIV/0!", "=IF(C4>C5,D4,D5)",
                                   "5.0", "true",  "-5.0E-4", "Text 5", "#NULL!",  "=SUM(A1:A7)",
                                   "6.0", "false", "-6.0E-4", "Text 6", "#NAME?",  "=ISERROR(E1:E6)",
                                   "7.0", "true",  "-7.0E-4", "Text 7", "#NUM!",   "=IF(INDEX(B1:B7,3),1+1,C7) * C1"
        };

        String[] actualValues = new String[42];

        Iterator<IDmRow> it = dm.iterator();
        int index = 0;
        while (it.hasNext()) {
            IDmRow row = it.next();
            Iterator<IDmCell> cellerator = row.iterator();
            while (cellerator.hasNext()) {
                IDmCell cell = cellerator.next();
                String value = "";

                value = cell.content().get().toString();

                actualValues[index++] = value;
            }
        }
        assertThat(actualValues).isEqualTo(expectedValues);
        excelIn.close();
    }

}
