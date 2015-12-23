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
package com.dataart.spreadsheetanalytics.test.functions.funcexec;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.HashMap;
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

import com.dataart.spreadsheetanalytics.api.engine.DataModelAccessor;
import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.engine.MetaFunctionAccessor;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataModelId;
import com.dataart.spreadsheetanalytics.engine.CacheBasedDataModelAccessor;
import com.dataart.spreadsheetanalytics.engine.CacheBasedMetaFunctionAccessor;
import com.dataart.spreadsheetanalytics.engine.Converters;
import com.dataart.spreadsheetanalytics.engine.DefineFunctionMeta;
import com.dataart.spreadsheetanalytics.engine.FunctionMeta;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.EvaluationContext;

public class FuncexecNoSingleton_Test {

    static String pathDataModel = "src/test/resources/datamodel/Funcexec_Test.xlsx";
    
    static String toEvaluateColumn = "A";
    static String expectedColumn = "B";
    static int expectedRowStart = 2;
    static int expectedRowEnd = 29;
    
    static IDataModel dataModel;
    static EvaluationContext globalContext;

    @BeforeClass
    public static void before() throws Exception {
        dataModel = Converters.toDataModel(new XSSFWorkbook(pathDataModel));

        CacheManager cacheManager = Caching.getCachingProvider().getCacheManager();

        MutableConfiguration config = new MutableConfiguration();
        config.setStoreByValue(false)
              .setExpiryPolicyFactory(AccessedExpiryPolicy.factoryOf(Duration.ETERNAL))
              .setStatisticsEnabled(false);

        cacheManager.createCache(CacheBasedDataModelAccessor.DATA_MODEL_TO_ID_CACHE_NAME, config.setTypes(IDataModelId.class, IDataModel.class));
        cacheManager.createCache(CacheBasedDataModelAccessor.DATA_MODEL_TO_NAME_CACHE_NAME, config.setTypes(String.class, IDataModel.class));
        cacheManager.createCache(CacheBasedMetaFunctionAccessor.META_FUNCTIONS_CACHE_NAME, config.setTypes(String.class, FunctionMeta.class));

        DataModelAccessor dataModelAccessor = new CacheBasedDataModelAccessor();
        MetaFunctionAccessor metaFunctionAccessor = new CacheBasedMetaFunctionAccessor();

        globalContext = new EvaluationContext();
        globalContext.set(DataModelAccessor.class, dataModelAccessor);
        globalContext.set(MetaFunctionAccessor.class, metaFunctionAccessor);

        dataModelAccessor.add(dataModel); //execution model

        Map<DefineFunctionMeta, IDataModel> defineModels = Converters.toMetaFunctions(new XSSFWorkbook(pathDataModel), DefineFunctionMeta.class);
        defineModels.forEach((k, v) -> {
            metaFunctionAccessor.add(k); //defein meta info with link to DataModel
            dataModelAccessor.add(v); //define model
        });
    }

    @AfterClass
    public static void after() throws Exception {
        CacheManager cacheManager = Caching.getCachingProvider().getCacheManager();

        cacheManager.destroyCache(CacheBasedDataModelAccessor.DATA_MODEL_TO_ID_CACHE_NAME);
        cacheManager.destroyCache(CacheBasedDataModelAccessor.DATA_MODEL_TO_NAME_CACHE_NAME);
        cacheManager.destroyCache(CacheBasedMetaFunctionAccessor.META_FUNCTIONS_CACHE_NAME);
    }

    @Test
    public void compare_FuncexecFormula_ExpectedValueFromMap() {
        //given
        Map<String, Object> expectedValues = new HashMap<>();;
        IEvaluator evaluator = new SpreadsheetEvaluator(dataModel, globalContext);
        
        for (int i = expectedRowStart; i <= expectedRowEnd; i++) {
            ICellValue value = evaluator.evaluate(A1Address.fromA1Address(expectedColumn + i)).getResult();
            expectedValues.put(expectedColumn + i, value.get());
        }
        
        //when
        for (int i = expectedRowStart; i <= expectedRowEnd; i++) {

            ICellValue value = evaluator.evaluate(A1Address.fromA1Address(toEvaluateColumn + i)).getResult();

        //then
            assertThat(value).isNotNull();
            assertThat(value.get()).overridingErrorMessage("expected:<[%s]> but was:<[%s] at %s]>", expectedValues.get(expectedColumn + i), value.get(), toEvaluateColumn + i)
                                   .isEqualTo(expectedValues.get(expectedColumn + i));
        }
    }    
}
