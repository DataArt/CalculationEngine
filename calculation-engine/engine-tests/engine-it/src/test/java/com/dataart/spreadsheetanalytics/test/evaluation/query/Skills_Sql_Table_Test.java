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
package com.dataart.spreadsheetanalytics.test.evaluation.query;

import static org.assertj.core.api.StrictAssertions.assertThat;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.Statement;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

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
import com.dataart.spreadsheetanalytics.api.engine.datasource.DataSourceQuery;
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
import com.dataart.spreadsheetanalytics.engine.dataset.SqlDataSet;
import com.dataart.spreadsheetanalytics.engine.datasource.TextDataSourceQuery;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.DataModel;
import com.dataart.spreadsheetanalytics.model.DataSet;
import com.dataart.spreadsheetanalytics.model.DsRow;

public class Skills_Sql_Table_Test {

    static String pathDataModel = "src/test/resources/datamodel/Skills_Sql_Table_Test.xlsx";
    static Map<String, Object> expectedValues;
    static String toEvaluateColumn = "A";
    static String expectedColumn = "B";
    static int expectedRowStart = 2;
    static int expectedRowEnd = 13;
    
    static SpreadsheetEvaluator evaluator;
    static DataModel dataModel;
    
    @BeforeClass
    public static void before() throws Exception {
        dataModel = new DataModel("Skills_Sql_Table_Test", pathDataModel);
        
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
        
        dataSourceHub.addDataSource(new TempSqlDataSource());

        dataSetStorage.saveDataSet(new SqlDataSet("AllSkills", "SELECT * FROM skills"));
        dataSetStorage.saveDataSet(new SqlDataSet("SkillsInCity", "SELECT * FROM skills WHERE CITY = '?' OR CITY = '?'"));
        dataSetStorage.saveDataSet(new SqlDataSet("SkillsForQualification", "SELECT FirstName, LastName FROM skills WHERE Qualification = '?'"));
        dataSetStorage.saveDataSet(new SqlDataSet("SkillsForNotLevelOfEnglish", "SELECT * FROM skills WHERE LevelOfEnglish is not ?"));
        dataSetStorage.saveDataSet(new SqlDataSet("SkillsForLevelOfEnglish", "SELECT FirstName, LastName, Level FROM skills WHERE LevelOfEnglish in (?, ?, ?)"));

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
    public void compare_QueryFormula_ExpectedValueFromMap() throws Exception {
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
    
        //And check that local DataSets are saved to storage (when they need to be removed?)
        final DataSetStorage dsStorage = ExternalServices.INSTANCE.getDataSetStorage();
        
        IDataSet dsA2 = dsStorage.getDataSet("A2");
        assertThat(dsA2).isNotNull();
        assertThat(dsA2.length()).isEqualTo(16);
        IDataSet dsA3 = dsStorage.getDataSet("A3");
        assertThat(dsA3).isNotNull();
        assertThat(dsA3.length()).isEqualTo(16);
        IDataSet dsA5 = dsStorage.getDataSet("A5");
        assertThat(dsA5).isNotNull();
        assertThat(dsA5.length()).isEqualTo(7);
        IDataSet dsA7 = dsStorage.getDataSet("A7");
        assertThat(dsA7).isNotNull();
        assertThat(dsA7.length()).isEqualTo(9);
        IDataSet dsA9 = dsStorage.getDataSet("A9");
        assertThat(dsA9).isNotNull();
        assertThat(dsA9.length()).isEqualTo(9);
        IDataSet dsA11 = dsStorage.getDataSet("A11");
        assertThat(dsA11).isNotNull();
        assertThat(dsA11.length()).isEqualTo(4);
    }
    
    @Test
    public void compare_OneLazyDataSetCall3Times_2dAnd3dTimesAreFaster() throws Exception {
        //given
        A1Address A14 = A1Address.fromA1Address("A14");
        
        A1Address A15 = A1Address.fromA1Address("A15");
        A1Address A16 = A1Address.fromA1Address("A16");

        long timeS = System.nanoTime(); evaluator.evaluate(A14); long timeE = System.nanoTime();
        long timeA14 = timeE - timeS;

        //when
        timeS = System.nanoTime(); evaluator.evaluate(A15); timeE = System.nanoTime();
        long timeA15 = timeE - timeS;
        timeS = System.nanoTime(); evaluator.evaluate(A16); timeE = System.nanoTime();
        long timeA16 = timeE - timeS;
        
        //then
        assertThat(timeA15).isLessThan(timeA14);
        assertThat(timeA16).isLessThan(timeA14);
    }
    
    @Test
    public void compare_OneLazyDataSetCall3Times_2dAnd3dDataSetObjectIsTheSame() throws Exception {
        //given
        A1Address A14 = A1Address.fromA1Address("A14");
        
        A1Address A15 = A1Address.fromA1Address("A15");
        A1Address A16 = A1Address.fromA1Address("A16");

        evaluator.evaluate(A14);
        
        evaluator.evaluate(A15);
        evaluator.evaluate(A16);
        
        //when
        IDataSet AllSkills_DS = ExternalServices.INSTANCE.getDataSetStorage().getDataSet("AllSkills");
        IDataSet A14_DS = ExternalServices.INSTANCE.getDataSetStorage().getDataSet("A14");
        IDataSet A15_DS = ExternalServices.INSTANCE.getDataSetStorage().getDataSet("A15");
        IDataSet A16_DS = ExternalServices.INSTANCE.getDataSetStorage().getDataSet("A16");
        
        //then
        assertThat(AllSkills_DS).isInstanceOf(DataSet.class);
        
        assertThat(A14_DS).isInstanceOf(DataSet.class);
        assertThat(A15_DS).isSameAs(A16_DS).isSameAs(A14_DS);
    }
    
}
class TempSqlDataSource implements DataSource {

    private Connection co;
    
    private String initSql_1 = "CREATE TABLE skills "
                                + "("
                                    + "FirstName varchar(255),"
                                    + "LastName varchar(255),"
                                    + "Qualification varchar(255),"
                                    + "City varchar(255),"
                                    + "Level varchar(255),"
                                    + "LevelOfEnglish real"
                                + ");";
    private String initSql_2 = 
            "INSERT INTO skills (FirstName, LastName, Qualification, City, Level, LevelOfEnglish) VALUES ('Urik',      'Koroshev',  'Java',    'NY',             'Senior', null);" +
            "INSERT INTO skills (FirstName, LastName, Qualification, City, Level, LevelOfEnglish) VALUES ('Sasha',     'Gust',      'Java',    'Voronezh',       'Senior', null);" +
            "INSERT INTO skills (FirstName, LastName, Qualification, City, Level, LevelOfEnglish) VALUES ('Nikolay',   'Frix',      '.Net',    'Dnipropetrovsk', 'Middle', null);" +
            "INSERT INTO skills (FirstName, LastName, Qualification, City, Level, LevelOfEnglish) VALUES ('Lucasz',    'Gnap',      'C++',     'Lublin',         'Middle', 3.8);" +
            "INSERT INTO skills (FirstName, LastName, Qualification, City, Level, LevelOfEnglish) VALUES ('Andrey',    'Ivanovich', 'Android', 'Dnipropetrovsk', 'Middle', 2.4);" +
            "INSERT INTO skills (FirstName, LastName, Qualification, City, Level, LevelOfEnglish) VALUES ('Oleg',      'Krutoy',    'Android', 'Lviv',           'Senior', 4.0);" +
            "INSERT INTO skills (FirstName, LastName, Qualification, City, Level, LevelOfEnglish) VALUES ('Alexander', 'Global',    'iPhone',  'Dnipropetrovsk', 'Middle', 4.4);" +
            "INSERT INTO skills (FirstName, LastName, Qualification, City, Level, LevelOfEnglish) VALUES ('Aliester',  'Douglas',   'iPhone',  'NY',             'Senior', 5.0);" +
            "INSERT INTO skills (FirstName, LastName, Qualification, City, Level, LevelOfEnglish) VALUES ('Oles',      'Lopster',   'PHP',     'Odessa',         'Middle', null);" +
            "INSERT INTO skills (FirstName, LastName, Qualification, City, Level, LevelOfEnglish) VALUES ('Pavel',     'Haliver',   'Python',  'Kyiv',           'Junior', null);" +
            "INSERT INTO skills (FirstName, LastName, Qualification, City, Level, LevelOfEnglish) VALUES ('Kostya',    'Holiver',   'Python',  'Lublin',         'Middle', null);" +
            "INSERT INTO skills (FirstName, LastName, Qualification, City, Level, LevelOfEnglish) VALUES ('Ekaterina', 'Skakunova', 'QA',      'Odessa',         'Middle', 2.8);" +
            "INSERT INTO skills (FirstName, LastName, Qualification, City, Level, LevelOfEnglish) VALUES ('Ksenia',    'Brigida',   'QA',      'Odessa',         'Middle', 3.2);" +
            "INSERT INTO skills (FirstName, LastName, Qualification, City, Level, LevelOfEnglish) VALUES ('Roman',     'Romanov',   'QA',      'Odessa',         'Junior', null);" +
            "INSERT INTO skills (FirstName, LastName, Qualification, City, Level, LevelOfEnglish) VALUES ('Tatiana',   'Smeshko',   'QA',      'Odessa',         'Middle', 3.6);";

        
    public TempSqlDataSource() {
        
        try {
            Class.forName("org.hsqldb.jdbcDriver" );
            co = DriverManager.getConnection("jdbc:hsqldb:mem:aname", "sa", "");
            Statement st = co.createStatement();
            
            st.execute(initSql_1);
            st.execute(initSql_2);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
        
    @Override
    public IDataSet executeQuery(DataSourceQuery query, List<Object> params) throws Exception {
    
        TextDataSourceQuery textQuery = (TextDataSourceQuery) query;
        final DataSet ds = new DataSet(UUID.randomUUID().toString());
    
        String queryToExecute = textQuery.query();
        for (int i = 0; i < params.size(); i++) queryToExecute = queryToExecute.replaceFirst("\\?", params.get(i).toString());        
    
        PreparedStatement st = co.prepareStatement(queryToExecute);
        st.execute();
    
        ResultSet rs = st.getResultSet();
        ResultSetMetaData rsmd = rs.getMetaData();
        
        DsRow row = ds.createRow();
        for (int i = 1; i <= rsmd.getColumnCount(); i++)
            row.createCell().value(rsmd.getColumnLabel(i));
        
        while (rs.next()) {
            row = ds.createRow();
            for (int i = 1; i <= rsmd.getColumnCount(); i++)
                row.createCell().value(rs.getObject(i));
        }
        
        return ds;
    }

    @Override
    public String name() {
        return null;
    }
}