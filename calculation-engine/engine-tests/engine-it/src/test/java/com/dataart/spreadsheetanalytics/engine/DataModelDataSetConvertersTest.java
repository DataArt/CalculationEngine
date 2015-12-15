package com.dataart.spreadsheetanalytics.engine;

import static org.assertj.core.api.Assertions.assertThat;
import static com.dataart.spreadsheetanalytics.engine.Converters.toDataSet;
import static com.dataart.spreadsheetanalytics.engine.Converters.toDataModel;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

import org.junit.BeforeClass;
import org.junit.Test;

import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.api.model.IDmCell;
import com.dataart.spreadsheetanalytics.api.model.IDmRow;
import com.dataart.spreadsheetanalytics.api.model.IDsCell;
import com.dataart.spreadsheetanalytics.api.model.IDsRow;

public class DataModelDataSetConvertersTest {

    static final String excel = "src/test/resources/datamodel/ExcelFileConverters_Test.xlsx";
    static IDataModel dm;

    @BeforeClass
    public static void before() throws IOException {
        InputStream excelIn = new FileInputStream(excel);
        dm = new SpreadsheetEvaluator(DataModelConverters.toDataModel(excelIn)).evaluate().getResult();
    }

    @Test
    public void toDataSet_DataModel() throws IOException {
        IDataSet dataSet = toDataSet(dm);
        assertDataModelAndDataSetAreEqual(dm, dataSet);
    }

    @Test
    public void toDataModel_DataSet() throws IOException {
        IDataModel dm2 = toDataModel(toDataSet(dm));
        assertDataModelsAreEqual(dm, dm2);
    }

    protected static void assertDataModelAndDataSetAreEqual(IDataModel dm, IDataSet ds) {
        for (IDsRow row : ds) {
            for (IDsCell cell : row) {
                ICellValue dsCellValue = cell.getValue();
                ICellValue dmCellValue = dm.getCell(row.index(), cell.index()).getValue().get();
                assertThat(dsCellValue.get()).isEqualTo(dmCellValue.get());
            }
        }
    }

    protected static void assertDataModelsAreEqual(IDataModel dm, IDataModel dm2) {
        for (IDmRow row : dm2) {
            for (IDmCell cell : row) {
                ICellValue dm2CellValue = cell.getValue().get();
                ICellValue dmCellValue = dm.getCell(cell.getAddress()).getValue().get();
                assertThat(dm2CellValue.get()).isEqualTo(dmCellValue.get());
            }
        }
    }
}
