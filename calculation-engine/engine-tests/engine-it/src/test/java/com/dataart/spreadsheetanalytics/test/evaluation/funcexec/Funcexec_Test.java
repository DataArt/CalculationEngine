package com.dataart.spreadsheetanalytics.test.evaluation.funcexec;

import static org.assertj.core.api.StrictAssertions.assertThat;

import java.util.HashMap;
import java.util.HashSet;
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
import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
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
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.DataModel;

public class Funcexec_Test {

    static String pathDataModel = "src/test/resources/datamodel/Funcexec_Test.xlsx";
    static Map<String, Object> expectedValues;
    static String toEvaluateColumn = "A";
    static String expectedColumn = "B";
    static int expectedRowStart = 2;
    static int expectedRowEnd = 29;

    static IEvaluator evaluator;
    static DataModel dataModel;

    @BeforeClass
    public static void before() throws Exception {
        dataModel = new DataModel("Funcexec_Test", pathDataModel);

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
        cacheManager.createCache(CacheBasedDataSetStorage.DATA_SET_TO_LAZY_PARAMETERS, config.setTypes(ILazyDataSet.Parameters.class, IDataSet.class));
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

        dataModelStorage.addDataModel(dataModel);

        //update all define functions based on data models in cache
        attributeFunctionStorage.updateDefineFunctions(new HashSet<>(dataModelStorage.getDataModels().values()));

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
        cacheManager.destroyCache(CacheBasedDataSetStorage.DATA_SET_TO_LAZY_PARAMETERS);
        cacheManager.destroyCache(DataSetOptimisationsCache.DATA_SET_DS_LOOKUP_PARAMETERS);
    }

    @Test
    public void compare_FuncexecFormula_ExpectedValueFromMap() {
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
}