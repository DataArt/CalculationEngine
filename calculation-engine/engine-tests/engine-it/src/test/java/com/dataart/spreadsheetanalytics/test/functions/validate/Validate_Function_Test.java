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

import com.dataart.spreadsheetanalytics.api.engine.ExternalServices;
import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataModelId;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.api.model.IDsRow;
import com.dataart.spreadsheetanalytics.api.model.IEvaluationContext;
import com.dataart.spreadsheetanalytics.api.model.IEvaluationResult;
import com.dataart.spreadsheetanalytics.engine.CacheBasedDataSetAccessor;
import com.dataart.spreadsheetanalytics.engine.Converters;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.functions.poi.data.ValidateFunction;
import com.dataart.spreadsheetanalytics.model.A1Address;

public class Validate_Function_Test {

    static String pathDataModel = "src/test/resources/datamodel/Validate_Function_Test.xlsx";
    static Map<String, Object> expectedValues;
    static String toEvaluateColumn = "A";
    static String expectedColumn = "G";
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
        
        ExternalServices.INSTANCE.setDataSetAccessor(new CacheBasedDataSetAccessor());

        expectedValues = new HashMap<>();
        
        SpreadsheetEvaluator evaluator = new SpreadsheetEvaluator(dataModel);
        for (int i = expectedRowStart; i <= expectedRowEnd; i++) {
            ICellValue value = evaluator.evaluate(A1Address.fromA1Address(expectedColumn + i)).getResult();
            expectedValues.put(expectedColumn + i, value.get());
        }
    }

    @AfterClass
    public static void after() throws Exception {
        CacheManager cacheManager = Caching.getCachingProvider().getCacheManager();

        cacheManager.destroyCache(CacheBasedDataSetAccessor.DATA_SET_TO_ID_CACHE_NAME);
        cacheManager.destroyCache(CacheBasedDataSetAccessor.DATA_SET_TO_NAME_CACHE_NAME);
    }

    @Test
    public void evaluate_ValidateFunction_SeparateContexts() throws Exception {
        //given
        IEvaluator evaluator = new SpreadsheetEvaluator(dataModel);
        int[] rows = {2, 5, 6, 10};

        //when
        List<IEvaluationResult<ICellValue>> vals = new ArrayList<>(expectedRowEnd);
        for (int i = expectedRowStart; i <= expectedRowEnd; i++) {
            vals.add(evaluator.evaluate(A1Address.fromA1Address(toEvaluateColumn + i)));
        }
        
        //then
        int i = 0;
        for (IEvaluationResult<ICellValue> res : vals) {
            
            IEvaluationContext ctx = res.getContext();
            IDataSet validationDS = (IDataSet) ctx.get(ValidateFunction.DATASET_NAME);
            
            if (validationDS == null) { continue; }

            ICellValue val = res.getResult();
            assertThat(val).isNotNull();
            assertThat((String) expectedValues.get(expectedColumn + rows[i])).startsWith((String) val.get());
            
            assertThat(validationDS.rowCount()).isEqualTo(1 + 1);
            
            IDsRow valRow = validationDS.getRow(1);
            
            String valRowText = valRow.getCell(0).getValue().get() + ", " +  
                                valRow.getCell(1).getValue().get() + ", " + 
                                valRow.getCell(2).getValue().get() + ", " +
                                valRow.getCell(3).getValue().get() + ", " +
                                valRow.getCell(4).getValue().get();
            
            assertThat(valRowText).isEqualTo(expectedValues.get(expectedColumn + rows[i]));
            
            i++;
        }
    }
    
    @Test
    public void evaluate_ValidateFunction_SharedContext() throws Exception {
        //given
        IEvaluator evaluator = new SpreadsheetEvaluator(dataModel);
        
        //when
        IEvaluationResult<IDataModel> result = evaluator.evaluate();

        IDataSet validationDS = (IDataSet) result.getContext().get(ValidateFunction.DATASET_NAME);

        IDsRow valRow1 = validationDS.getRow(1);
        IDsRow valRow4 = validationDS.getRow(2);
        IDsRow valRow5 = validationDS.getRow(3);
        IDsRow valRow9 = validationDS.getRow(4);

        assertThat(validationDS.rowCount()).isEqualTo(4 + 1);
        
        String valRowText1 = valRow1.getCell(0).getValue().get() + ", " +  
                             valRow1.getCell(1).getValue().get() + ", " + 
                             valRow1.getCell(2).getValue().get() + ", " +
                             valRow1.getCell(3).getValue().get() + ", " +
                             valRow1.getCell(4).getValue().get();
        String valRowText4 = valRow4.getCell(0).getValue().get() + ", " +  
                             valRow4.getCell(1).getValue().get() + ", " + 
                             valRow4.getCell(2).getValue().get() + ", " +
                             valRow4.getCell(3).getValue().get() + ", " +
                             valRow4.getCell(4).getValue().get();
        String valRowText5 = valRow5.getCell(0).getValue().get() + ", " +  
                             valRow5.getCell(1).getValue().get() + ", " + 
                             valRow5.getCell(2).getValue().get() + ", " +
                             valRow5.getCell(3).getValue().get() + ", " +
                             valRow5.getCell(4).getValue().get();
        String valRowText9 = valRow9.getCell(0).getValue().get() + ", " +  
                             valRow9.getCell(1).getValue().get() + ", " + 
                             valRow9.getCell(2).getValue().get() + ", " +
                             valRow9.getCell(3).getValue().get() + ", " +
                             valRow9.getCell(4).getValue().get();
        
        assertThat(valRowText1).isEqualTo(expectedValues.get(expectedColumn + 2));
        assertThat(valRowText4).isEqualTo(expectedValues.get(expectedColumn + 5));
        assertThat(valRowText5).isEqualTo(expectedValues.get(expectedColumn + 6));
        assertThat(valRowText9).isEqualTo(expectedValues.get(expectedColumn + 10));
    }

}