package com.dataart.spreadsheetanalytics.funcexec;

import static org.assertj.core.api.StrictAssertions.assertThat;

import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;

import javax.cache.CacheManager;
import javax.cache.Caching;
import javax.cache.configuration.MutableConfiguration;
import javax.cache.expiry.AccessedExpiryPolicy;
import javax.cache.expiry.Duration;

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
import com.dataart.spreadsheetanalytics.api.engine.AttributeFunctionStorage;
import com.dataart.spreadsheetanalytics.api.engine.DataModelStorage;
import com.dataart.spreadsheetanalytics.api.engine.ExternalServices;
import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataModelId;
import com.dataart.spreadsheetanalytics.engine.CacheBasedAttributeFunctionStorage;
import com.dataart.spreadsheetanalytics.engine.CacheBasedDataModelStorage;
import com.dataart.spreadsheetanalytics.engine.DefineFunctionMeta;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.DataModel;

public abstract class ZParentTest extends BenchmarkTestParent {

    static String description;
    static String excelFile;
    static String columnA = "A";
    static String columnB = "B";
    static int from = 2;
    static int iterations = -1;
    static Map<ICellAddress, Double> expectedValues;
  
    static DataModel dataModel;
    static IEvaluator evaluator;
    
    static volatile boolean inited = false;

    public static void beforeTests() throws Exception {
        if (inited) { return; }
        
        dataModel = new DataModel(excelFile, excelFile);
        evaluator = new SpreadsheetEvaluator(dataModel);
        
        CacheManager cacheManager = Caching.getCachingProvider().getCacheManager();

        MutableConfiguration config = new MutableConfiguration();
        config.setStoreByValue(false)
              .setExpiryPolicyFactory(AccessedExpiryPolicy.factoryOf(Duration.ETERNAL))
              .setStatisticsEnabled(false);

        cacheManager.createCache(CacheBasedDataModelStorage.DATA_MODEL_TO_ID_CACHE_NAME, config.setTypes(IDataModelId.class, IDataModel.class));
        cacheManager.createCache(CacheBasedDataModelStorage.DATA_MODEL_TO_NAME_CACHE_NAME, config.setTypes(String.class, IDataModel.class));
        cacheManager.createCache(CacheBasedAttributeFunctionStorage.DEFINE_FUNCTIONS_CACHE_NAME, config.setTypes(String.class, DefineFunctionMeta.class));
        
        DataModelStorage dataModelStorage = new CacheBasedDataModelStorage();
        AttributeFunctionStorage attributeFunctionStorage = new CacheBasedAttributeFunctionStorage();
        
        ExternalServices.INSTANCE.setAttributeFunctionStorage(attributeFunctionStorage);
        ExternalServices.INSTANCE.setDataModelStorage(dataModelStorage);
        
        dataModelStorage.addDataModel(dataModel);
        attributeFunctionStorage.updateDefineFunctions(new HashSet<>(dataModelStorage.getDataModels().values()));

        expectedValues = new HashMap<>();

        for (int i = from; i < from + iterations; i++) {
            ICellAddress address = A1Address.fromA1Address(columnB + i);
            Double value = (Double) evaluator.evaluate(address).get();
            expectedValues.put(address, value);
            expectedValues.put(A1Address.fromA1Address(columnA + i), value);
        }
        
        inited = true;
    }
    
    public static void afterTests() throws Exception {
        if (!inited) { return; }
        
        CacheManager cacheManager = Caching.getCachingProvider().getCacheManager();

        cacheManager.destroyCache(CacheBasedDataModelStorage.DATA_MODEL_TO_ID_CACHE_NAME);
        cacheManager.destroyCache(CacheBasedDataModelStorage.DATA_MODEL_TO_NAME_CACHE_NAME);
        cacheManager.destroyCache(CacheBasedAttributeFunctionStorage.DEFINE_FUNCTIONS_CACHE_NAME);
        
        inited = false;
    }

    @Test
    public void startAllBenchmarks() throws Exception {
        Collection<RunResult> rrs = launchBenchmark(getClass().getSimpleName());
        addBenchmarkResultsToReport(getClass().getSimpleName(), description, excelFile, rrs);
    }

    @Benchmark
    public void evaluate_ExcelDataModelFuncexec_ExecutionTimeIsOk(BenchmarkStateEvaluator state, Blackhole bh) {
        for (int i = from; i < from + iterations; i++) { 
            ICellValue value = state.evaluator.evaluate(state.addressAtColumnA(i));
            assertThat(value.get()).isEqualTo(expectedValues.get(state.addressAtColumnA(i))); /* comment for better performance */
            bh.consume(value);
        }
    }
    
    @Benchmark
    public void evaluate_ExcelDataModelPlainFormula_ExecutionTimeIsOk(BenchmarkStateEvaluator state, Blackhole bh) {
        for (int i = from; i < from + iterations; i++) { 
            ICellValue value = state.evaluator.evaluate(state.addressAtColumnB(i));
            assertThat(value.get()).isEqualTo(expectedValues.get(state.addressAtColumnB(i))); /* comment for better performance */
            bh.consume(value);
        }
    }
    
    @Test
    public void evaluate_ExcelDataModelFuncexec_ValuesAreOk() {

        for (int i = from; i < from + iterations; i++) {
            //given
            ICellAddress cell = A1Address.fromA1Address(columnA + i);
            
            //when
            ICellValue value = evaluator.evaluate(cell);

            //then
            assertThat(value).isNotNull();
            assertThat(value.get()).overridingErrorMessage("expected:<[%s]> but was:<[%s] at %s]>", expectedValues.get(cell), value.get(), cell.a1Address().address())
                                   .isEqualTo(expectedValues.get(cell));
        }
    }
    
    @Test
    public void evaluate_ExcelDataModelPlainFormula_ValuesAreOk() {

        for (int i = from; i < from + iterations; i++) {
            //given
            ICellAddress cell = A1Address.fromA1Address(columnB + i);
            
            //when
            ICellValue value = evaluator.evaluate(cell);

            //then
            assertThat(value).isNotNull();
            assertThat(value.get()).overridingErrorMessage("expected:<[%s]> but was:<[%s] at %s]>", expectedValues.get(cell), value.get(), cell.a1Address().address())
                                   .isEqualTo(expectedValues.get(cell));
        }
    }
    
    @State(Scope.Benchmark)
    public static class BenchmarkStateEvaluator {
        DataModel dataModel;
        IEvaluator evaluator;
        Map<Integer, ICellAddress> addressMapA;
        Map<Integer, ICellAddress> addressMapB;

        @Setup(Level.Trial)
        public void initialize() throws Exception {
            beforeTests();
            
            this.dataModel = new DataModel(excelFile + "_Benchmark", excelFile);
            this.evaluator = new SpreadsheetEvaluator(dataModel);
            
            this.addressMapA = new HashMap<>();
            this.addressMapB = new HashMap<>();
            for (int i = from; i < from + iterations; i++) {
                this.addressMapA.put(i, A1Address.fromA1Address(columnA + i));
                this.addressMapB.put(i, A1Address.fromA1Address(columnB + i));
            }
        }
        
        @TearDown
        public void destroy() throws Exception { afterTests(); }
        
        ICellAddress addressAtColumnA(int i) { return addressMapA.get(i); }
        ICellAddress addressAtColumnB(int i) { return addressMapB.get(i); }
    }
    
}