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
package com.dataart.spreadsheetanalytics.test.evaluation.dslookup;

import static org.assertj.core.api.StrictAssertions.assertThat;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.cache.CacheManager;
import javax.cache.Caching;
import javax.cache.configuration.MutableConfiguration;
import javax.cache.expiry.AccessedExpiryPolicy;
import javax.cache.expiry.Duration;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;

import com.dataart.spreadsheetanalytics.api.engine.AttributeFunctionStorage;
import com.dataart.spreadsheetanalytics.api.engine.DataModelStorage;
import com.dataart.spreadsheetanalytics.api.engine.DataSetStorage;
import com.dataart.spreadsheetanalytics.api.engine.DataSourceHub;
import com.dataart.spreadsheetanalytics.api.engine.ExternalServices;
import com.dataart.spreadsheetanalytics.api.engine.datasource.DataSource;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataModelId;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.api.model.ILazyDataSet;
import com.dataart.spreadsheetanalytics.engine.CacheBasedAttributeFunctionStorage;
import com.dataart.spreadsheetanalytics.engine.CacheBasedDataModelStorage;
import com.dataart.spreadsheetanalytics.engine.CacheBasedDataSetStorage;
import com.dataart.spreadsheetanalytics.engine.CacheBasedDataSourceHub;
import com.dataart.spreadsheetanalytics.engine.DataSetOptimisationsCache;
import com.dataart.spreadsheetanalytics.engine.DataSetOptimisationsCache.DsLookupParameters;
import com.dataart.spreadsheetanalytics.engine.DefineFunctionMeta;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.engine.util.PoiFileConverter;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.DataModel;

public class Monthly_Data_Query_Test {

    static String pathDataModel = "src/test/resources/datamodel/Monthly_Data_Query_Test.xlsx";
    static String pathDataSet = "src/test/resources/dataset/Monthly_Data_Query.xlsx";
    static Map<String, Object> expectedValues;
    static String toEvaluateColumn = "A";
    static String expectedColumn = "B";
    static int expectedRowStart = 2;
    static int expectedRowEnd = 16;
    
    static SpreadsheetEvaluator evaluator;
    static DataModel dataModel;
    
    @BeforeClass
    public static void before() throws Exception {
        dataModel = new DataModel("Monthly_Data_Query_Test", pathDataModel);
        
        CacheManager cacheManager = Caching.getCachingProvider().getCacheManager();

        MutableConfiguration config = new MutableConfiguration();
        config.setStoreByValue(false)
              .setExpiryPolicyFactory(AccessedExpiryPolicy.factoryOf(Duration.ETERNAL))
              .setStatisticsEnabled(false);

        cacheManager.createCache(CacheBasedDataModelStorage.DATA_MODEL_TO_ID_CACHE_NAME, config.setTypes(IDataModelId.class, IDataModel.class));
        cacheManager.createCache(CacheBasedDataModelStorage.DATA_MODEL_TO_NAME_CACHE_NAME, config.setTypes(String.class, IDataModel.class));
        cacheManager.createCache(CacheBasedDataSetStorage.DATA_SET_TO_ID_CACHE_NAME, config.setTypes(IDataModelId.class, IDataSet.class));
        cacheManager.createCache(CacheBasedDataSetStorage.DATA_SET_TO_NAME_CACHE_NAME, config.setTypes(String.class, IDataSet.class));
        cacheManager.createCache(CacheBasedDataSourceHub.DATA_SOURCE_CACHE_NAME, config.setTypes(Object.class, DataSource.class));
        cacheManager.createCache(CacheBasedAttributeFunctionStorage.DEFINE_FUNCTIONS_CACHE_NAME, config.setTypes(String.class, DefineFunctionMeta.class));
        cacheManager.createCache(DataSetOptimisationsCache.DATA_SET_TO_LAZY_PARAMETERS, config.setTypes(ILazyDataSet.Parameters.class, IDataSet.class));
        cacheManager.createCache(DataSetOptimisationsCache.DATA_SET_DS_LOOKUP_PARAMETERS, config.setTypes(DsLookupParameters.class, List.class));
        
        final ExternalServices external = ExternalServices.INSTANCE;

        DataModelStorage dataModelStorage = new CacheBasedDataModelStorage();
        DataSetStorage dataSetStorage = new CacheBasedDataSetStorage();
        DataSourceHub dataSourceHub = new CacheBasedDataSourceHub();
        AttributeFunctionStorage attributeFunctionStorage = new CacheBasedAttributeFunctionStorage(); 
        
        external.setDataModelStorage(dataModelStorage);
        external.setDataSetStorage(dataSetStorage);
        external.setDataSourceHub(dataSourceHub);
        external.setAttributeFunctionStorage(attributeFunctionStorage);
        external.setDataSetOptimisationsCache(new DataSetOptimisationsCache());

        final IDataSet dataSet = PoiFileConverter.toDataSet(new DataModel("Monthly_Data_Query", pathDataSet).poiModel);
        dataSetStorage.saveDataSet(dataSet);

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

        cacheManager.destroyCache(CacheBasedDataModelStorage.DATA_MODEL_TO_ID_CACHE_NAME);
        cacheManager.destroyCache(CacheBasedDataModelStorage.DATA_MODEL_TO_NAME_CACHE_NAME);
        cacheManager.destroyCache(CacheBasedDataSetStorage.DATA_SET_TO_ID_CACHE_NAME);
        cacheManager.destroyCache(CacheBasedDataSetStorage.DATA_SET_TO_NAME_CACHE_NAME);
        cacheManager.destroyCache(CacheBasedDataSourceHub.DATA_SOURCE_CACHE_NAME);
        cacheManager.destroyCache(CacheBasedAttributeFunctionStorage.DEFINE_FUNCTIONS_CACHE_NAME);
        cacheManager.destroyCache(DataSetOptimisationsCache.DATA_SET_TO_LAZY_PARAMETERS);
        cacheManager.destroyCache(DataSetOptimisationsCache.DATA_SET_DS_LOOKUP_PARAMETERS);
    }

    @Test
    public void compare_DsLookupFormula_ExpectedValueFromMap() {
        //given
        // Map with expected values: expectedValues

        for (int i = expectedRowStart; i <= expectedRowEnd; i++) {
            //when
            ICellValue value = evaluator.evaluate(A1Address.fromA1Address(toEvaluateColumn + i));

            //then
            assertThat(value).isNotNull();
            assertThat(value.get())
                .overridingErrorMessage("expected:<[%s]> but was:<[%s] at %s]>", expectedValues.get(expectedColumn + i), value.get(), toEvaluateColumn + i)
                .isEqualTo(expectedValues.get(expectedColumn + i));
        }
    }
    
    @Test
    public void compare_DsLookupParametersCache_SecondCallIsFasterThanFirst() {
        //given
        A1Address A9 = A1Address.fromA1Address("A9");
        A1Address A10 = A1Address.fromA1Address("A10");

        long timeS = System.nanoTime(); evaluator.evaluate(A9); long timeE = System.nanoTime();
        long timeA9 = timeE - timeS;

        //when
        timeS = System.nanoTime(); evaluator.evaluate(A10); timeE = System.nanoTime();
        long timeA10 = timeE - timeS;
        
        //then
        assertThat(timeA10).isLessThan(timeA9);
    }
}
