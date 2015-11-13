package com.dataart.spreadsheetanalytics.query;

import static org.assertj.core.api.StrictAssertions.assertThat;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import javax.cache.CacheManager;
import javax.cache.Caching;
import javax.cache.configuration.MutableConfiguration;
import javax.cache.expiry.AccessedExpiryPolicy;
import javax.cache.expiry.Duration;

import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.junit.Test;
import org.openjdk.jmh.annotations.Benchmark;
import org.openjdk.jmh.annotations.Level;
import org.openjdk.jmh.annotations.Scope;
import org.openjdk.jmh.annotations.Setup;
import org.openjdk.jmh.annotations.State;
import org.openjdk.jmh.annotations.TearDown;
import org.openjdk.jmh.infra.Blackhole;
import org.openjdk.jmh.results.RunResult;

import com.dataart.spreadsheetanalytics.BenchmarkTestParent;
import com.dataart.spreadsheetanalytics.api.engine.DataSetStorage;
import com.dataart.spreadsheetanalytics.api.engine.ExternalServices;
import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModelId;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.api.model.ILazyDataSet;
import com.dataart.spreadsheetanalytics.engine.CacheBasedDataSetStorage;
import com.dataart.spreadsheetanalytics.engine.DataSetOptimisationsCache;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.engine.util.PoiFileConverter;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.DataModel;

public abstract class ZParentTest extends BenchmarkTestParent {

    static String description;
    static String excelFile;
    static String dataSet;
    static String column = "A";
    static int from = 1;
    static int iterations = -1;
    static Object expectedValue = "Column 1";
  
    static DataModel dataModel;
    static IEvaluator evaluator;

    public static void before() throws Exception {
        dataModel = new DataModel(excelFile, excelFile);
        evaluator = new SpreadsheetEvaluator(dataModel);
        
        CacheManager cacheManager = Caching.getCachingProvider().getCacheManager();

        MutableConfiguration config = new MutableConfiguration();
        config.setStoreByValue(false)
              .setExpiryPolicyFactory(AccessedExpiryPolicy.factoryOf(Duration.ETERNAL))
              .setStatisticsEnabled(false);

        cacheManager.createCache(CacheBasedDataSetStorage.DATA_SET_TO_ID_CACHE_NAME, config.setTypes(IDataModelId.class, IDataSet.class));
        cacheManager.createCache(CacheBasedDataSetStorage.DATA_SET_TO_NAME_CACHE_NAME, config.setTypes(String.class, IDataSet.class));
        cacheManager.createCache(DataSetOptimisationsCache.DATA_SET_TO_LAZY_PARAMETERS, config.setTypes(ILazyDataSet.Parameters.class, IDataSet.class));
        
        DataSetStorage dataSetStorage = new CacheBasedDataSetStorage(); 
        
        ExternalServices.INSTANCE.setDataSetStorage(dataSetStorage);
        ExternalServices.INSTANCE.setDataSetOptimisationsCache(new DataSetOptimisationsCache());
        
        dataSetStorage.saveDataSet(PoiFileConverter.toDataSet(new XSSFWorkbook(dataSet)));
    }
    
    public static void after() throws Exception {
        CacheManager cacheManager = Caching.getCachingProvider().getCacheManager();

        cacheManager.destroyCache(CacheBasedDataSetStorage.DATA_SET_TO_ID_CACHE_NAME);
        cacheManager.destroyCache(CacheBasedDataSetStorage.DATA_SET_TO_NAME_CACHE_NAME);
        cacheManager.destroyCache(DataSetOptimisationsCache.DATA_SET_TO_LAZY_PARAMETERS);
    }

    @Test
    public void startAllBenchmarks() throws Exception {
        Collection<RunResult> rrs = launchBenchmark(getClass().getSimpleName());
        addBenchmarkResultsToReport(getClass().getSimpleName(), description, excelFile, rrs);
    }

    @Benchmark
    public void evaluate_ExcelDataModel_ExecutionTimeIsOk(BenchmarkStateEvaluator state, Blackhole bh) {
        for (int i = from; i < from + iterations; i++) { 
            ICellValue value = state.evaluator.evaluate(state.addressAt(i));
            assertThat(value.get()).isEqualTo(expectedValue); /* comment for better performance */
            bh.consume(value);
        }
    }
    
    @Test
    public void evaluate_ExcelDataModel_ValuesAreOk() {

        for (int i = from; i < from + iterations; i++) {
            //given
            ICellAddress cell = A1Address.fromA1Address(column + i);
            
            //when
            ICellValue value = evaluator.evaluate(cell);

            //then
            assertThat(value).isNotNull();
            assertThat(value.get()).overridingErrorMessage("expected:<[%s]> but was:<[%s] at %s]>", expectedValue, value.get(), cell.a1Address().address())
                                   .isEqualTo(expectedValue);
        }
    }
    
    @State(Scope.Benchmark)
    public static class BenchmarkStateEvaluator {
        DataModel dataModel;
        IEvaluator evaluator;
        Map<Integer, ICellAddress> addressMap;

        @Setup(Level.Trial)
        public void initialize() throws Exception {
            before();
            
            this.dataModel = new DataModel(excelFile + "_Benchmark", excelFile);
            this.evaluator = new SpreadsheetEvaluator(dataModel);
            
            this.addressMap = new HashMap<>();
            for (int i = from; i < from + iterations; i++)
                this.addressMap.put(i, A1Address.fromA1Address(column + i));
        }
        
        @TearDown
        public void destroy() throws Exception { after(); }
        
        ICellAddress addressAt(int i) {
            return addressMap.get(i);
        }
    }
    
}