package com.dataart.spreadsheetanalytics.engine;

import static org.assertj.core.api.Assertions.assertThat;

import java.io.FileInputStream;

import org.junit.BeforeClass;
import org.junit.Test;

import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.model.A1Address;

public class DataModelNamedItemsTest {

    static String dataModelPath = "src/test/resources/datamodel/DataModelNamedItems_Test.xlsx";
    static IDataModel dataModel;

    @BeforeClass
    public static void before() throws Exception {
        dataModel = Converters.toDataModel(new FileInputStream(dataModelPath));
    }

    @Test
    public void evaluate_ExcelFileWorkbook_DataModelWithNames() {
        // given
        Double expected_c2_value = 30.0;
        Double expected_c3_value = 7.325;
        Double expected_c4_value = 15.8;
        Double expected_c5_value = 17.1;
        Double expected_e5_value = 6.875;

        // when
        SpreadsheetEvaluator evaluator = new SpreadsheetEvaluator(dataModel);
        
        Object actual_c2_value = evaluator.evaluate(A1Address.fromA1Address("C2")).getResult().get();
        Object actual_c3_value = evaluator.evaluate(A1Address.fromA1Address("C3")).getResult().get();
        Object actual_c4_value = evaluator.evaluate(A1Address.fromA1Address("C4")).getResult().get();
        Object actual_c5_value = evaluator.evaluate(A1Address.fromA1Address("C5")).getResult().get();
        Object actual_e5_value = evaluator.evaluate(A1Address.fromA1Address("E5")).getResult().get();

        // then

        assertThat(actual_c2_value).isEqualTo(expected_c2_value);
        assertThat(actual_c3_value).isEqualTo(expected_c3_value);
        assertThat(actual_c4_value).isEqualTo(expected_c4_value);
        assertThat(actual_c5_value).isEqualTo(expected_c5_value);
        assertThat(actual_e5_value).isEqualTo(expected_e5_value);
    }

}
