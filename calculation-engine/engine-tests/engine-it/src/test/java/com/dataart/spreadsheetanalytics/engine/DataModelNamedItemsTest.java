package com.dataart.spreadsheetanalytics.engine;

import static org.assertj.core.api.Assertions.assertThat;

import java.io.FileInputStream;
import java.util.UUID;

import org.junit.BeforeClass;
import org.junit.Test;

import com.dataart.spreadsheetanalytics.api.model.IDataModelId;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.DataModel;
import com.dataart.spreadsheetanalytics.model.DataModelId;

public class DataModelNamedItemsTest {

    static String dataModelPath = "src/test/resources/datamodel/DataModelNamedItems_Test.xlsx";
    static DataModel dataModel;
    static IDataModelId sharedId = new DataModelId(UUID.randomUUID().toString());

    @BeforeClass
    public static void before() throws Exception {
        dataModel = (DataModel) Converters.toDataModel(new FileInputStream(dataModelPath));
        dataModel.setDataModelId(sharedId);
        dataModel.setName("Sheet1");
    }

    @Test
    public void evaluate_ExcelFileWorkbook_DataModelWithNames() {
        // given
        Double expected_c2_value = 30.0;
        Double expected_c3_value = 7.325;
        Double expected_c4_value = 15.8;
        Double expected_c5_value = 6.875;

        // when
        SpreadsheetEvaluator evaluator = new SpreadsheetEvaluator(dataModel);

        // then
        assertThat(evaluator.evaluate(A1Address.fromA1Address("C2")).getResult().get()).isEqualTo(expected_c2_value);
        assertThat(evaluator.evaluate(A1Address.fromA1Address("C3")).getResult().get()).isEqualTo(expected_c3_value);
        assertThat(evaluator.evaluate(A1Address.fromA1Address("C4")).getResult().get()).isEqualTo(expected_c4_value);
        assertThat(evaluator.evaluate(A1Address.fromA1Address("E5")).getResult().get()).isEqualTo(expected_c5_value);
    }
}
