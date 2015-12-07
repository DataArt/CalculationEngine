/*
Copyright 2015 DataArt Apps, Inc

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
package com.dataart.spreadsheetanalytics.test.evaluation.validate;

import static org.assertj.core.api.StrictAssertions.assertThat;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.cache.CacheManager;
import javax.cache.Caching;
import javax.cache.configuration.MutableConfiguration;
import javax.cache.expiry.AccessedExpiryPolicy;
import javax.cache.expiry.Duration;

import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;

import com.dataart.spreadsheetanalytics.api.engine.DataSetStorage;
import com.dataart.spreadsheetanalytics.api.engine.ExternalServices;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataModelId;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.api.model.IDsRow;
import com.dataart.spreadsheetanalytics.engine.CacheBasedDataSetStorage;
import com.dataart.spreadsheetanalytics.engine.Converters;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.CellValue;
import com.dataart.spreadsheetanalytics.model.DataSet;
import com.dataart.spreadsheetanalytics.model.DsRow;

public class Validate_Function_Test {

    static String pathDataModel = "src/test/resources/datamodel/Validate_Function_Test.xlsx";
    static Map<String, Object> expectedValues;
    static String toEvaluateColumn = "A";
    static String expectedColumn = "G";
    static int expectedRowStart = 2;
    static int expectedRowEnd = 10;
    
    static SpreadsheetEvaluator evaluator;
    static IDataModel dataModel;
    
    @BeforeClass
    public static void before() throws Exception {
        dataModel = Converters.toDataModel(new XSSFWorkbook(pathDataModel));
        
        CacheManager cacheManager = Caching.getCachingProvider().getCacheManager();

        MutableConfiguration config = new MutableConfiguration();
        config.setStoreByValue(false)
              .setExpiryPolicyFactory(AccessedExpiryPolicy.factoryOf(Duration.ETERNAL))
              .setStatisticsEnabled(false);

        cacheManager.createCache(CacheBasedDataSetStorage.DATA_SET_TO_ID_CACHE_NAME, config.setTypes(IDataModelId.class, IDataSet.class));
        cacheManager.createCache(CacheBasedDataSetStorage.DATA_SET_TO_NAME_CACHE_NAME, config.setTypes(String.class, IDataSet.class));
        
        final ExternalServices external = ExternalServices.INSTANCE;

        DataSetStorage dataSetStorage = new CacheBasedDataSetStorage();
        
        external.setDataSetStorage(dataSetStorage);

        DataSet validationDS = new DataSet("Validation");
        DsRow valRow = validationDS.createRow();
        valRow.createCell().value(CellValue.from("Message"));
        valRow.createCell().value(CellValue.from("Severity"));
        valRow.createCell().value(CellValue.from("Cell"));
        valRow.createCell().value(CellValue.from("CellContent"));
        valRow.createCell().value(CellValue.from("CellValue"));
        
        dataSetStorage.saveDataSet(validationDS);

        expectedValues = new HashMap<>();
        
        evaluator = new SpreadsheetEvaluator(dataModel);
        for (int i = expectedRowStart; i <= expectedRowEnd; i++) {
            ICellValue value = evaluator.evaluate(A1Address.fromA1Address(expectedColumn + i));
            expectedValues.put(expectedColumn + i, value.get());
        }
    }

    @AfterClass
    public static void after() throws Exception {
        CacheManager cacheManager = Caching.getCachingProvider().getCacheManager();

        cacheManager.destroyCache(CacheBasedDataSetStorage.DATA_SET_TO_ID_CACHE_NAME);
        cacheManager.destroyCache(CacheBasedDataSetStorage.DATA_SET_TO_NAME_CACHE_NAME);
    }

    @Test
    public void compare_QueryFormula_ExpectedValueFromMap() throws Exception {
        //given
        // Map with expected values: expectedValues
        DataSetStorage dsStorage = ExternalServices.INSTANCE.getDataSetStorage();

        //when
        List<ICellValue> vals = new ArrayList<>(expectedRowEnd);
        for (int i = expectedRowStart; i <= expectedRowEnd; i++) {
            ICellValue value = evaluator.evaluate(A1Address.fromA1Address(toEvaluateColumn + i));
            vals.add(value);
        }

        IDataSet validationDS = dsStorage.getDataSet("Validation");

        IDsRow valRow1 = validationDS.rows().get(1);
        IDsRow valRow4 = validationDS.rows().get(2);
        IDsRow valRow5 = validationDS.rows().get(3);
        IDsRow valRow9 = validationDS.rows().get(4);

        //then
        for (ICellValue value : vals) {
            assertThat(value).isNotNull();
            //add assert for return value
        }

        assertThat(validationDS.length()).isEqualTo(4 + 1);

        String valRowText1 = valRow1.cellAt(0).value().get() + ", " +
                             valRow1.cellAt(1).value().get() + ", " +
                             valRow1.cellAt(2).value().get() + ", " +
                             valRow1.cellAt(3).value().get() + ", " +
                             valRow1.cellAt(4).value().get();
        String valRowText4 = valRow4.cellAt(0).value().get() + ", " +
                             valRow4.cellAt(1).value().get() + ", " +
                             valRow4.cellAt(2).value().get() + ", " +
                             valRow4.cellAt(3).value().get() + ", " +
                             valRow4.cellAt(4).value().get();
        String valRowText5 = valRow5.cellAt(0).value().get() + ", " +
                             valRow5.cellAt(1).value().get() + ", " +
                             valRow5.cellAt(2).value().get() + ", " +
                             valRow5.cellAt(3).value().get() + ", " +
                             valRow5.cellAt(4).value().get();
        String valRowText9 = valRow9.cellAt(0).value().get() + ", " +
                             valRow9.cellAt(1).value().get() + ", " +
                             valRow9.cellAt(2).value().get() + ", " +
                             valRow9.cellAt(3).value().get() + ", " +
                             valRow9.cellAt(4).value().get();

        assertThat(valRowText1).isEqualTo(expectedValues.get(expectedColumn + 2));
        assertThat(valRowText4).isEqualTo(expectedValues.get(expectedColumn + 5));
        assertThat(valRowText5).isEqualTo(expectedValues.get(expectedColumn + 6));
        assertThat(valRowText9).isEqualTo(expectedValues.get(expectedColumn + 10));
    }

}