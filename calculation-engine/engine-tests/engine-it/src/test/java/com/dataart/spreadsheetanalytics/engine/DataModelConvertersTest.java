package com.dataart.spreadsheetanalytics.engine;

import static org.assertj.core.api.StrictAssertions.assertThat;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Iterator;
import java.util.Optional;

import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.junit.Test;

import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDmCell;
import com.dataart.spreadsheetanalytics.api.model.IDmRow;

public class DataModelConvertersTest {

    static final String excel = "src/test/resources/datamodel/ExcelFileConverters_Test.xlsx";

    @Test
    public void toDataModel_ExcelFileInputStream_DataModelWithAllCellsCorrect() throws IOException {
        //given
        InputStream excelIn = new FileInputStream(excel);
                
        //when
        IDataModel dm = DataModelConverters.toDataModel(excelIn);
        
        //then
        assertThat(excelIn).isNotNull();
        toDataModel_DataModel_DataModelWithAllCellsCorrect(dm);
    }

    @Test
    public void toDataModel_ExcelFileWorkbook_DataModelWithAllCellsCorrect() throws IOException {
        //given
        Workbook excelW = new XSSFWorkbook(excel);
        
        //when
        IDataModel dm = DataModelConverters.toDataModel(excelW);
        
        //then
        assertThat(excelW).isNotNull();
        toDataModel_DataModel_DataModelWithAllCellsCorrect(dm);
    }
    
    @Test
    public void toWorkbook_DataModel_DataModelFieldsMatchWorkbookFields() throws IOException {
        // given
        IDataModel dm = DataModelConverters.toDataModel(new XSSFWorkbook(excel));

        // when
        Workbook w = DataModelConverters.toWorkbook(dm);

        // then
        assertThat(w).isNotNull();
        toDataModel_DataModel_DataModelWithAllCellsCorrect(DataModelConverters.toDataModel(w));
    }

    private static void toDataModel_DataModel_DataModelWithAllCellsCorrect(IDataModel dm) {
        //given
        String[] a = {"A", "B", "C", "D", "E", "F"};
        Object[][] v = {
            {(double) 1, Boolean.TRUE,  -0.0001, "Text 1",  "#REF!",   "=ISNUMBER(A1)"},
            {(double) 2, Boolean.FALSE, -0.0002, "Text 2",  "#VALUE!", "=SUBSTITUTE(D2,\"2\",\"00\")"},
            {(double) 3, Boolean.TRUE,  -0.0003, "Text 3",  "#N/A",    "=ISLOGICAL(B3)"},
            {(double) 4, Boolean.FALSE, -0.0004, "Text 4",  "#DIV/0!", "=IF(C4>C5,D4,D5)"},
            {(double) 5, Boolean.TRUE,  -0.0005, "Text 5",  "#NULL!",  "=SUM(A1:A7)"},
            {(double) 6, Boolean.FALSE, -0.0006, "Text 6",  "#NAME?",  "=ISERROR(E1:E6)"},
            {(double) 7, Boolean.TRUE,  -0.0007, "Text 7",  "#NUM!",   "=IF(INDEX(B1:B7,3),1+1,C7) * C1"}
        };
        
        //when
        assertThat(dm).isNotNull();
        
        //then

        //common
        assertThat(dm.getDataModelId()).isNotNull();
        assertThat(dm.getName()).isEqualTo("Sheet1");
        assertThat(dm.rowCount()).isEqualTo(v.length);
        assertThat(dm.iterator()).isNotNull();
        
        //cell values
        for (int i = 0; i < v.length; i++)
            assertThat(dm.getRow(i)).isNotNull();    
        
        for (int i = 0; i < v.length; i++)
            assertThat(dm.getRow(i).cellCount()).isEqualTo(v[i].length);
        
        for (int i = 0; i < v.length; i++)
            for (int j = 0; j < v[i].length; j++)
            assertThat(dm.getRow(i).getCell(j)).isNotNull();
        
        for (int i = 0; i < v.length; i++)
            for (int j = 0; j < v[i].length; j++) {
                assertThat(dm.getRow(i).getCell(j).getAddress().row()).isEqualTo(i);
                assertThat(dm.getRow(i).getCell(j).getAddress().column()).isEqualTo(j);
                assertThat(dm.getRow(i).getCell(j).getAddress().a1Address().address()).isEqualTo(a[j] + "" + (i + 1));
            }
        
        for (int i = 0; i < v.length; i++)
            for (int j = 0; j < v[i].length; j++)
                assertThat(dm.getRow(i).getCell(j).getValue()).isEqualTo(Optional.empty());
        
        for (int i = 0; i < v.length; i++)
            for (int j = 0; j < v[i].length; j++)
                assertThat(dm.getRow(i).getCell(j).getContent().get()).isEqualTo(v[i][j]);
        
        Iterator<IDmRow> e1 = dm.iterator();
        for (int i = 0; i < v.length; i++) {
            assertThat(e1.hasNext()).isTrue();
            assertThat(e1.next()).isNotNull();
        }

        int i = 0;
        for (IDmRow dmRow : dm) {
            Iterator<IDmCell> e2 = dmRow.iterator();
            for (int j = 0; j < v[i].length; j++) {
                assertThat(e2.hasNext()).isTrue();
                assertThat(e2.next()).isNotNull();
            }
            i++;
        }
    }

}
