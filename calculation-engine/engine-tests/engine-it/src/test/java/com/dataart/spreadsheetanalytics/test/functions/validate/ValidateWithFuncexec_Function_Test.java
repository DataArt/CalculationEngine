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
package com.dataart.spreadsheetanalytics.test.functions.validate;

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
import com.dataart.spreadsheetanalytics.api.engine.ExternalServices;
import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.engine.MetaFunctionAccessor;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataModelId;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.api.model.IDmRow;
import com.dataart.spreadsheetanalytics.api.model.IDsRow;
import com.dataart.spreadsheetanalytics.api.model.IEvaluationResult;
import com.dataart.spreadsheetanalytics.engine.CacheBasedDataModelAccessor;
import com.dataart.spreadsheetanalytics.engine.CacheBasedDataSetAccessor;
import com.dataart.spreadsheetanalytics.engine.CacheBasedMetaFunctionAccessor;
import com.dataart.spreadsheetanalytics.engine.Converters;
import com.dataart.spreadsheetanalytics.engine.DefineFunctionMeta;
import com.dataart.spreadsheetanalytics.engine.FunctionMeta;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.functions.poi.data.ValidateFunction;

public class ValidateWithFuncexec_Function_Test {

    static String pathFuncexecLevel1 = "src/test/resources/datamodel/DefineLevel1_Test.xlsx";
    static String pathFuncexecLevel2 = "src/test/resources/datamodel/DefineLevel2_Test.xlsx";
    
    static String pathDataModel = "src/test/resources/datamodel/ValidateWithFuncexec_Function_Test.xlsx";
    static String toEvaluateColumn = "A";
    static int expectedRowStart = 2;
    static int expectedRowEnd = 10;
    
    static IDataModel dataModel;
    
    @BeforeClass
    public static void before() throws Exception {
        dataModel = Converters.toDataModel(new XSSFWorkbook(pathDataModel));
        
        CacheManager cacheManager = Caching.getCachingProvider().getCacheManager();

        MutableConfiguration config = new MutableConfiguration();
        config.setStoreByValue(false)
              .setExpiryPolicyFactory(AccessedExpiryPolicy.factoryOf(Duration.ETERNAL))
              .setStatisticsEnabled(false);

        cacheManager.createCache(CacheBasedDataSetAccessor.DATA_SET_TO_ID_CACHE_NAME, config.setTypes(IDataModelId.class, IDataSet.class));
        cacheManager.createCache(CacheBasedDataSetAccessor.DATA_SET_TO_NAME_CACHE_NAME, config.setTypes(String.class, IDataSet.class));
        cacheManager.createCache(CacheBasedDataModelAccessor.DATA_MODEL_TO_ID_CACHE_NAME, config.setTypes(IDataModelId.class, IDataModel.class));
        cacheManager.createCache(CacheBasedDataModelAccessor.DATA_MODEL_TO_NAME_CACHE_NAME, config.setTypes(String.class, IDataModel.class));
        cacheManager.createCache(CacheBasedMetaFunctionAccessor.META_FUNCTIONS_CACHE_NAME, config.setTypes(String.class, FunctionMeta.class));

        DataModelAccessor dataModelAccessor = new CacheBasedDataModelAccessor();
        MetaFunctionAccessor metaFunctionAccessor = new CacheBasedMetaFunctionAccessor();

        dataModelAccessor.add(dataModel); //execution model

        Map<DefineFunctionMeta, IDataModel> defineModels = new HashMap<>(); 
        defineModels.putAll(Converters.toMetaFunctions(new XSSFWorkbook(pathDataModel), DefineFunctionMeta.class));
        defineModels.putAll(Converters.toMetaFunctions(new XSSFWorkbook(pathFuncexecLevel1), DefineFunctionMeta.class));
        defineModels.putAll(Converters.toMetaFunctions(new XSSFWorkbook(pathFuncexecLevel2), DefineFunctionMeta.class));
        
        defineModels.forEach((k, v) -> {
            metaFunctionAccessor.add(k); //defein meta info with link to DataModel
            dataModelAccessor.add(v); //define model
        });
        
        ExternalServices.INSTANCE.setDataSetAccessor(new CacheBasedDataSetAccessor());
        ExternalServices.INSTANCE.setDataModelAccessor(dataModelAccessor);
        ExternalServices.INSTANCE.setMetaFunctionAccessor(metaFunctionAccessor);
    }

    @AfterClass
    public static void after() throws Exception {
        CacheManager cacheManager = Caching.getCachingProvider().getCacheManager();

        cacheManager.destroyCache(CacheBasedDataSetAccessor.DATA_SET_TO_ID_CACHE_NAME);
        cacheManager.destroyCache(CacheBasedDataSetAccessor.DATA_SET_TO_NAME_CACHE_NAME);
        cacheManager.destroyCache(CacheBasedDataModelAccessor.DATA_MODEL_TO_ID_CACHE_NAME);
        cacheManager.destroyCache(CacheBasedDataModelAccessor.DATA_MODEL_TO_NAME_CACHE_NAME);
        cacheManager.destroyCache(CacheBasedMetaFunctionAccessor.META_FUNCTIONS_CACHE_NAME);
    }
    
    @Test
    public void evaluate_ValidateWith2FuncexecFunctions_AllValidateGoesToSharedContext() throws Exception {
        //given
        IEvaluator evaluator = new SpreadsheetEvaluator(dataModel);
        Object[][] expected_set = {
                        {"Message", "Severity", "Cell", "CellContent", "CellValue"},
                        {"Message A2", "E", "C2", 1.0, 1.0},
                        {"Message A5", "W", "C5", true, true},
                        {"Message A6", "E", "C6", "IF(0=10,TRUE,FALSE)", false},
                        {"Message Level 0", "E", "C10", false, false},
                        {"Level 2", "W", "A1", "Level 2", "Level 2"},
                        {"Message Level 2", "E", "A1", "Level 2", "Level 2"},
                        {"Level 2", "W", "A3", "", ""},
                        {"Message Level 1", "W", "A1", 1.0, 1.0},
                        {"Level 2", "W", "A1", "Level 2", "Level 2"},
                        {"Message Level 2", "E", "A1", "Level 2", "Level 2"},
                        {"Level 2", "W", "A3", "", ""},
                        {"Message Level 1", "W", "A1", 1.0, 1.0},
                        {"Message Level 0", "E", "C10", false, false}
        };
        Object[] expected_val = {
                    "Validate",
                    "Message A2",
                    "",
                    "",
                    "Message A5",
                    "Message A6",
                    "Message Level 0",
                    "DEFINE",
                    "Level 2",
                    "Message Level 0"
        };
        
        //when
        IEvaluationResult<IDataModel> result = evaluator.evaluate();

        IDataSet validationDS = (IDataSet) result.getContext().get(ValidateFunction.DATASET_NAME);

        //then
        assertThat(validationDS).isNotNull();
        assertThat(validationDS.rowCount()).isEqualTo(13 + 1);
        
        //check validation set
        for (int i = 0; i < expected_set.length; i++) {
            IDsRow row = validationDS.getRow(i);
            assertThat(row.getCell(0).getValue().get()).overridingErrorMessage("expected:<[%s]> but was:<[%s]> at row [%s] and cell [%s]", expected_set[i][0], row.getCell(0).getValue().get(), i, 0)
                                                    .isEqualTo(expected_set[i][0]);
            assertThat(row.getCell(1).getValue().get()).overridingErrorMessage("expected:<[%s]> but was:<[%s]> at row [%s] and cell [%s]", expected_set[i][1], row.getCell(1).getValue().get(), i, 1)
                                                    .isEqualTo(expected_set[i][1]);
            assertThat(row.getCell(2).getValue().get()).overridingErrorMessage("expected:<[%s]> but was:<[%s]> at row [%s] and cell [%s]", expected_set[i][2], row.getCell(2).getValue().get(), i, 2)
                                                    .isEqualTo(expected_set[i][2]);
            assertThat(row.getCell(3).getValue().get()).overridingErrorMessage("expected:<[%s]> but was:<[%s]> at row [%s] and cell [%s]", expected_set[i][3], row.getCell(3).getValue().get(), i, 3)
                                                    .isEqualTo(expected_set[i][3]);
            assertThat(row.getCell(4).getValue().get()).overridingErrorMessage("expected:<[%s]> but was:<[%s]> at row [%s] and cell [%s]", expected_set[i][4], row.getCell(4).getValue().get(), i, 4)
                                                    .isEqualTo(expected_set[i][4]);
        }
        
        //check results
        for (IDmRow row : result.getResult()) {
            assertThat(row.getCell(0).getValue().get().get()).overridingErrorMessage("expected:<[%s]> but was:<[%s]> at row [%s]", expected_val[row.index()], row.getCell(0).getValue().get().get(), row.index())
                                                          .isEqualTo(expected_val[row.index()]);
        }
    }

}