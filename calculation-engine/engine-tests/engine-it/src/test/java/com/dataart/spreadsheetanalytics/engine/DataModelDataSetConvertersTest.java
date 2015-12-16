package com.dataart.spreadsheetanalytics.engine;

import static org.assertj.core.api.Assertions.assertThat;
import static com.dataart.spreadsheetanalytics.engine.Converters.toDataSet;
import static com.dataart.spreadsheetanalytics.engine.Converters.toDataModel;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Iterator;
import java.util.Optional;

import org.junit.BeforeClass;
import org.junit.Test;

import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.api.model.IDmCell;
import com.dataart.spreadsheetanalytics.api.model.IDmRow;
import com.dataart.spreadsheetanalytics.api.model.IDsCell;
import com.dataart.spreadsheetanalytics.api.model.IDsRow;
import com.dataart.spreadsheetanalytics.model.DataSet;
import com.dataart.spreadsheetanalytics.model.DsRow;

public class DataModelDataSetConvertersTest {

    static final String excel = "src/test/resources/datamodel/DataSetDataModelConverters_Test.xlsx";
    static IDataModel dm;

    @BeforeClass
    public static void before() throws IOException {
        InputStream excelIn = new FileInputStream(excel);
        dm = new SpreadsheetEvaluator(DataModelConverters.toDataModel(excelIn)).evaluate().getResult();
    }

    @Test
    public void toDataSet_DataModel() throws IOException {
        IDataSet dataSet = toDataSet(dm);
        assertThat(containsEmptyRows(dataSet)).isFalse();
        assertDmDsEquality(dm, dataSet);
    }

    @Test
    public void toDataModel_DataSet() throws IOException {
        IDataModel dm2 = toDataModel(toDataSet(dm));
        assertDmDmEquality(dm, dm2);
    }

    protected static void assertDmDsEquality(IDataModel dataModel, IDataSet dataSet) {
        Iterator<IDmRow> dmRowterator = dataModel.iterator();
        Iterator<IDsRow> dsRowterator = dataSet.iterator();
        for (int i = 0; i < dataSet.rowCount(); i++) {
            IDsRow dsRow = dsRowterator.next();
            IDmRow dmRow = null;
            while (dmRowterator.hasNext() && (dmRow == null || dmRow.cellCount() == 0)) {
                dmRow = dmRowterator.next();
            }
            assertDmDsRowsAreEqual(dsRow, dmRow);
        }
    }

    protected static void assertDmDsRowsAreEqual(IDsRow dsRow, IDmRow dmRow) {
        assertThat(dsRow.cellCount()).isEqualTo(dmRow.cellCount());
        for (IDsCell dsCell : dsRow) {
            Optional<ICellValue> dmCellValue = dmRow.getCell(dsCell.index()).getValue();
            assertThat(dmCellValue.isPresent()).isTrue();
            assertThat(dsCell.getValue().get()).isEqualTo(dmCellValue.get().get());
        }
    }

    protected static void assertDmDmEquality(IDataModel dataModel, IDataModel dataModel2) {
        Iterator<IDmRow> dmRowterator = dataModel.iterator();
        Iterator<IDmRow> dsRowterator = dataModel2.iterator();
        for (int i = 0; i < dataModel2.rowCount(); i++) {
            IDmRow dmRow = dsRowterator.next();
            IDmRow dmRow2 = null;
            while (dmRowterator.hasNext() && (dmRow2 == null || dmRow2.cellCount() == 0)) {
                dmRow2 = dmRowterator.next();
            }
            assertDmDmRowsAreEqual(dmRow, dmRow2);
        }
    }

    protected static void assertDmDmRowsAreEqual(IDmRow dmRow, IDmRow dmRow2) {
        assertThat(dmRow2.cellCount()).isEqualTo(dmRow.cellCount());
        for (int index = 0; index < dmRow.cellCount(); index++) {
            Optional<ICellValue> dmCellValue = dmRow.getCell(index).getValue();
            Optional<ICellValue> dmCellValue2 = dmRow2.getCell(index).getValue();
            assertThat(dmCellValue.isPresent()).isTrue();
            assertThat(dmCellValue2.isPresent()).isTrue();
            assertThat(dmCellValue.get().get()).isEqualTo(dmCellValue2.get().get());
        }
    }

    protected static boolean containsEmptyRows(Iterable data) {
        if (data instanceof IDataSet) {
            IDataSet dataSet = (IDataSet) data;
            for (IDsRow row : dataSet) {
                if (row.cellCount() == 0) { return true; }
            }
        } else if (data instanceof IDataModel) {
            IDataModel dataModel = (IDataModel) data;
            for (IDmRow row : dataModel) {
                if (row.cellCount() == 0) { return true; }
            }
        }
        return false;
    }
}
