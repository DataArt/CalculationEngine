package com.dataart.spreadsheetanalytics.demo.main;

import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Paths;
import java.util.HashSet;
import java.util.List;

import javax.cache.CacheManager;
import javax.cache.Caching;
import javax.cache.configuration.MutableConfiguration;
import javax.cache.expiry.AccessedExpiryPolicy;
import javax.cache.expiry.Duration;

import org.apache.poi.ss.usermodel.Workbook;

import com.dataart.spreadsheetanalytics.api.engine.AttributeFunctionStorage;
import com.dataart.spreadsheetanalytics.api.engine.DataModelStorage;
import com.dataart.spreadsheetanalytics.api.engine.DataSetStorage;
import com.dataart.spreadsheetanalytics.api.engine.DataSourceHub;
import com.dataart.spreadsheetanalytics.api.engine.ExternalServices;
import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.engine.datasource.DataSource;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataModelId;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.api.model.ILazyDataSet;
import com.dataart.spreadsheetanalytics.engine.CacheBasedAttributeFunctionStorage;
import com.dataart.spreadsheetanalytics.engine.CacheBasedDataModelStorage;
import com.dataart.spreadsheetanalytics.engine.CacheBasedDataSetStorage;
import com.dataart.spreadsheetanalytics.engine.CacheBasedDataSourceHub;
import com.dataart.spreadsheetanalytics.engine.DataSetOptimisationsCache;
import com.dataart.spreadsheetanalytics.engine.DefineFunctionMeta;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.engine.DataSetOptimisationsCache.DsLookupParameters;
import com.dataart.spreadsheetanalytics.engine.dataset.SqlDataSet;
import com.dataart.spreadsheetanalytics.engine.util.PoiFileConverter;
import com.dataart.spreadsheetanalytics.model.DataModel;

public class EvaluationWorksheetSavingToXls {

    public static void main(String[] args) throws Exception {
        if (args.length < 2) {
            System.err.println("Excel file path, Cell Address and output file name, please!");
            return;
        }
        
        final String excel = args[0];
        final String outputFile = args[1];
        final DataModel model = new DataModel(Paths.get(excel).getFileName().toString(), excel);

        initCaches(model);
        
        //create Evaluator
        final IEvaluator evaluator = new SpreadsheetEvaluator(model);
        FileOutputStream fileOut = new FileOutputStream(outputFile);
        
        try {            
            Workbook output = PoiFileConverter.toWorkbook(evaluator.evaluate());
            output.write(fileOut);
            fileOut.flush();            
        } catch (IOException e) {
            System.err.println("Error saving output xlsx file");
        } finally {
            fileOut.close();
        }
        
    }
    
    protected static void initCaches(DataModel model) throws IOException, InterruptedException {
        
        //prepare caches to be used as storages
        CacheManager cacheManager = Caching.getCachingProvider().getCacheManager();

        MutableConfiguration config = new MutableConfiguration();
        //some cache configurations
        config.setStoreByValue(false)
              .setExpiryPolicyFactory(AccessedExpiryPolicy.factoryOf(Duration.ETERNAL))
              .setStatisticsEnabled(false);

        //create the caches for application
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
        
        //if this model is a dataset also - put it to cache
        try {
            final IDataSet dataSet = PoiFileConverter.toDataSet(model.poiModel);
            dataSetStorage.saveDataSet(dataSet);                       
        } catch (Exception e) {
            System.out.println("This workbook is not a dataset itself.");
        }        
        
        //add data model to storage
        dataModelStorage.addDataModel(model);
        
        //update all define functions based on data models in cache
        attributeFunctionStorage.updateDefineFunctions(new HashSet<>(dataModelStorage.getDataModels().values()));
        
        //add in memory sql data source
        dataSourceHub.addDataSource(new TempSqlDataSource());
        //add lazy sql dataset to storage
        String sql = "SELECT * FROM creaditcards WHERE AGE = ? OR AGE = ? OR FIRSTNAME = '?'";
        final ILazyDataSet sqlDataSet = new SqlDataSet("PersonsWithCreaditCard", sql);
        dataSetStorage.saveDataSet(sqlDataSet);
        
        dataSetStorage.saveDataSet(new SqlDataSet("AllSkills", "SELECT * FROM skills"));
        dataSetStorage.saveDataSet(new SqlDataSet("SkillsInCity", "SELECT * FROM skills WHERE CITY = '?'"));
        dataSetStorage.saveDataSet(new SqlDataSet("SkillsForQualification", "SELECT FirstName, LastName FROM skills WHERE Qualification = '?'"));
        dataSetStorage.saveDataSet(new SqlDataSet("LevelFromSkillsInCity", "SELECT Level FROM skills WHERE City = '?'"));
        dataSetStorage.saveDataSet(new SqlDataSet("SkillsForNotLevelOfEnglish", "SELECT * FROM skills WHERE LevelOfEnglish is not '?'"));
        dataSetStorage.saveDataSet(new SqlDataSet("SkillsForLevelOfEnglish", "SELECT * FROM skills WHERE LevelOfEnglish = '?'"));
        dataSetStorage.saveDataSet(new SqlDataSet("SkillsForLevel", "SELECT FirstName, LastName FROM skills WHERE Level = '?'"));

    }
    
}
