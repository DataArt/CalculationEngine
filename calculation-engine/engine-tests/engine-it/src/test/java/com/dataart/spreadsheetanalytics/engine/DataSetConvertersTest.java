package com.dataart.spreadsheetanalytics.engine;

import static org.assertj.core.api.Assertions.assertThat;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

import org.junit.Test;

import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.api.model.IDsCell;
import com.dataart.spreadsheetanalytics.api.model.IDsRow;

public class DataSetConvertersTest {

    static final String excel = "src/test/resources/datamodel/ExcelFileConverters_Test.xlsx";

    Object[] expected = {
        new Double(1.0), Boolean.TRUE,  new Double(-1.0E-4), new String("Text 1"), new String("#REF!"),   Boolean.TRUE,
        new Double(2.0), Boolean.FALSE, new Double(-2.0E-4), new String("Text 2"), new String("#VALUE!"), new String("Text 00"),
        new Double(3.0), Boolean.TRUE,  new Double(-3.0E-4), new String("Text 3"), new String("#N/A"),    Boolean.TRUE,
        new Double(4.0), Boolean.FALSE, new Double(-4.0E-4), new String("Text 4"), new String("#DIV/0!"), new String("Text 4"),
        new Double(5.0), Boolean.TRUE,  new Double(-5.0E-4), new String("Text 5"), new String("#NULL!"),  new Double(28.0),
        new Double(6.0), Boolean.FALSE, new Double(-6.0E-4), new String("Text 6"), new String("#NAME?"),  Boolean.TRUE,
        new Double(7.0), Boolean.TRUE,  new Double(-7.0E-4), new String("Text 7"), new String("#NUM!"),   new Double(-2.0E-4)
    };

    @Test(expected = CalculationEngineException.class)
    public void toDataSet_ExcelFileInputStream_DataSetWithFormulaCellsIncorrect() throws IOException {
        InputStream excelIn = new FileInputStream(excel);
        DataSetConverters.toDataSet(excelIn);
    }

    @Test
    public void toDataSet_DataModel_DataModelWithFormulaCellsCorrect() throws IOException {
        InputStream excelIn = new FileInputStream(excel);

        IDataModel dataModel = new SpreadsheetEvaluator(DataModelConverters.toDataModel(excelIn)).evaluate().getResult();

        IDataSet dataSet = DataSetConverters.toDataSet(dataModel);

        int index = 0;
        for (IDsRow row : dataSet) {
            for (IDsCell cell : row) {
                assertThat(cell.getValue().get()).isEqualTo(expected[index++]);
            }
        }
    }

}
