package com.dataart.spreadsheetanalytics;

import java.util.List;
import java.util.concurrent.TimeUnit;

import javax.cache.CacheManager;
import javax.cache.Caching;
import javax.cache.configuration.MutableConfiguration;
import javax.cache.expiry.AccessedExpiryPolicy;
import javax.cache.expiry.Duration;

import org.junit.Test;
import org.openjdk.jmh.annotations.Mode;
import org.openjdk.jmh.runner.Runner;
import org.openjdk.jmh.runner.options.ChainedOptionsBuilder;
import org.openjdk.jmh.runner.options.OptionsBuilder;
import org.openjdk.jmh.runner.options.TimeValue;

import com.dataart.spreadsheetanalytics.api.engine.ExternalServices;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataModelId;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.api.model.ILazyDataSet;
import com.dataart.spreadsheetanalytics.engine.CacheBasedAttributeFunctionStorage;
import com.dataart.spreadsheetanalytics.engine.CacheBasedDataModelAccessor;
import com.dataart.spreadsheetanalytics.engine.CacheBasedDataSetAccessor;
import com.dataart.spreadsheetanalytics.engine.CacheBasedDataSourceHub;
import com.dataart.spreadsheetanalytics.engine.DataSetOptimisationsCache;
import com.dataart.spreadsheetanalytics.engine.DataSetOptimisationsCache.DsLookupParameters;
import com.dataart.spreadsheetanalytics.engine.DefineFunctionMeta;

public class BenchmarkTestParent {
    
    protected static ExternalServices external = ExternalServices.INSTANCE;
    
    static {
        CacheManager cacheManager = Caching.getCachingProvider().getCacheManager();

        MutableConfiguration config = new MutableConfiguration();
        config.setStoreByValue(false)
              .setExpiryPolicyFactory(AccessedExpiryPolicy.factoryOf(Duration.ETERNAL))
              .setStatisticsEnabled(false);

        cacheManager.createCache(CacheBasedDataSetAccessor.DATA_SET_TO_ID_CACHE_NAME, config.setTypes(IDataModelId.class, IDataSet.class));
        cacheManager.createCache(CacheBasedDataSetAccessor.DATA_SET_TO_NAME_CACHE_NAME, config.setTypes(String.class, IDataSet.class));
        cacheManager.createCache(DataSetOptimisationsCache.DATA_SET_TO_LAZY_PARAMETERS, config.setTypes(ILazyDataSet.Parameters.class, IDataSet.class));
        cacheManager.createCache(CacheBasedDataModelAccessor.DATA_MODEL_TO_ID_CACHE_NAME, config.setTypes(IDataModelId.class, IDataModel.class));
        cacheManager.createCache(CacheBasedDataModelAccessor.DATA_MODEL_TO_NAME_CACHE_NAME, config.setTypes(String.class, IDataModel.class));
        cacheManager.createCache(CacheBasedAttributeFunctionStorage.DEFINE_FUNCTIONS_CACHE_NAME, config.setTypes(String.class, DefineFunctionMeta.class));
        cacheManager.createCache(DataSetOptimisationsCache.DATA_SET_DS_LOOKUP_PARAMETERS, config.setTypes(DsLookupParameters.class, List.class));
        
        ExternalServices.INSTANCE.setDataSetStorage(new CacheBasedDataSetAccessor());
        ExternalServices.INSTANCE.setDataModelStorage(new CacheBasedDataModelAccessor());
        ExternalServices.INSTANCE.setAttributeFunctionStorage(new CacheBasedAttributeFunctionStorage());
        ExternalServices.INSTANCE.setDataSourceHub(new CacheBasedDataSourceHub());
        ExternalServices.INSTANCE.setDataSetOptimisationsCache(new DataSetOptimisationsCache());
    }

    @Test
    public void startAllBenchmarks() throws Exception {
        ChainedOptionsBuilder opts = new OptionsBuilder()
                                            .mode(Mode.SampleTime)
                                            .timeUnit(TimeUnit.MILLISECONDS)
                                            .warmupTime(TimeValue.seconds(1))
                                            .warmupIterations(8)
                                            .measurementTime(TimeValue.seconds(1))
                                            .measurementIterations(5)
                                            .timeout(TimeValue.seconds(30))
                                            .threads(2)
                                            .forks(1) //0 for debug, 1 for run
                                            .shouldFailOnError(true)
                                            .shouldDoGC(true) //because of graph
                                            .addProfiler(profilers.FlightRecordingProfiler.class);

        new Runner(opts.include(getClass().getSimpleName() + ".*").build()).run();
    }
    
}