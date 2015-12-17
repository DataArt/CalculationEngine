package com.dataart.spreadsheetanalytics.model;

import static org.assertj.core.api.Assertions.assertThat;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
import java.util.stream.Stream;

import org.junit.Test;

import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDmCell;
import com.dataart.spreadsheetanalytics.api.model.IDmRow;
import com.dataart.spreadsheetanalytics.engine.Converters;

public class DataModelTest {

    static final String excel = "src/test/resources/datamodel/ExcelFileConverters_Test.xlsx";

    @Test
    public void getFirstRow_DataModelFromExcel_FirstRowIs0() throws IOException {
        //given
        int expectedFirstRowIndex = 0;
        //when
        int actualFirstRowIndex = Converters.toDataModel(new FileInputStream(excel)).getFirstRowIndex();
        //then
        assertThat(actualFirstRowIndex).isEqualTo(expectedFirstRowIndex);
    }
    
    @Test
    public void getLastRow_DataModelFromExcel_LastRowIs6() throws IOException {
        //given
        int expectedLastRowIndex = 6;
        //when
        int actualLastRowIndex = Converters.toDataModel(new FileInputStream(excel)).getLastRowIndex();
        //then
        assertThat(actualLastRowIndex).isEqualTo(expectedLastRowIndex);
    }


    @Test
    public void iterator_DataModelFromExcel_RowAndCellOrderIsOk() throws IOException {
        //given
        IDataModel dm = Converters.toDataModel(new FileInputStream(excel));

        String[] expectedValues = {"1.0", "true",  "-1.0E-4", "Text 1", "#REF!",   "=ISNUMBER(A1)", 
                                   "2.0", "false", "-2.0E-4", "Text 2", "#VALUE!", "=SUBSTITUTE(D2,\"2\",\"00\")", 
                                   "3.0", "true",  "-3.0E-4", "Text 3", "#N/A",    "=ISLOGICAL(B3)",
                                   "4.0", "false", "-4.0E-4", "Text 4", "#DIV/0!", "=IF(C4>C5,D4,D5)",
                                   "5.0", "true",  "-5.0E-4", "Text 5", "#NULL!",  "=SUM(A1:A7)",
                                   "6.0", "false", "-6.0E-4", "Text 6", "#NAME?",  "=ISERROR(E1:E6)",
                                   "7.0", "true",  "-7.0E-4", "Text 7", "#NUM!",   "=IF(INDEX(B1:B7,3),1+1,C7) * C1"
        };

        String[] actualValues = new String[42];

        //when
        Iterator<IDmRow> rit = dm.iterator();
        int index = 0;
        while (rit.hasNext()) {
            IDmRow row = rit.next();
            Iterator<IDmCell> cit = row.iterator();
            while (cit.hasNext()) {
                IDmCell cell = cit.next();
                actualValues[index++] = cell.getContent().get().toString();
            }
        }
        
        //then
        assertThat(actualValues).isEqualTo(expectedValues);
    }
    
    @Test
    public void stream_DataModelFromExcel_RowAndCellOrderIsOk() throws IOException {
        //given
        IDataModel dm = Converters.toDataModel(new FileInputStream(excel));

        String[] expectedValues = {"1.0", "true",  "-1.0E-4", "Text 1", "#REF!",   "=ISNUMBER(A1)", 
                                   "2.0", "false", "-2.0E-4", "Text 2", "#VALUE!", "=SUBSTITUTE(D2,\"2\",\"00\")", 
                                   "3.0", "true",  "-3.0E-4", "Text 3", "#N/A",    "=ISLOGICAL(B3)",
                                   "4.0", "false", "-4.0E-4", "Text 4", "#DIV/0!", "=IF(C4>C5,D4,D5)",
                                   "5.0", "true",  "-5.0E-4", "Text 5", "#NULL!",  "=SUM(A1:A7)",
                                   "6.0", "false", "-6.0E-4", "Text 6", "#NAME?",  "=ISERROR(E1:E6)",
                                   "7.0", "true",  "-7.0E-4", "Text 7", "#NUM!",   "=IF(INDEX(B1:B7,3),1+1,C7) * C1"
        };

        List<String> actualValues = new ArrayList<>();
        
        //when
        Stream<IDmRow> st = dm.stream();
                
        //then
        assertThat(st.count()).isEqualTo(7);
        
        dm.stream().findFirst().orElseThrow(() -> new AssertionError("No first value in Stream"));
        
        dm.stream().forEach(r -> {
            r.stream().forEach(c -> {
                actualValues.add(c.getContent().get().toString());
            });
        });
        
        assertThat(actualValues).isEqualTo(Arrays.asList(expectedValues));
    }

}
