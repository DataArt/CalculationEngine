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
package com.dataart.spreadsheetanalytics.test.functions.query;

import static org.assertj.core.api.Assertions.assertThat;

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

import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;

import com.dataart.spreadsheetanalytics.api.engine.DataModelAccessor;
import com.dataart.spreadsheetanalytics.api.engine.DataSetAccessor;
import com.dataart.spreadsheetanalytics.api.engine.DataSourceHub;
import com.dataart.spreadsheetanalytics.api.engine.ExternalServices;
import com.dataart.spreadsheetanalytics.api.engine.MetaFunctionAccessor;
import com.dataart.spreadsheetanalytics.api.engine.datasource.DataSource;
import com.dataart.spreadsheetanalytics.api.engine.datasource.DataSourceQuery;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataModelId;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.api.model.IDsCell;
import com.dataart.spreadsheetanalytics.api.model.IDsRow;
import com.dataart.spreadsheetanalytics.api.model.ILazyDataSet;
import com.dataart.spreadsheetanalytics.engine.CacheBasedDataModelAccessor;
import com.dataart.spreadsheetanalytics.engine.CacheBasedDataSetAccessor;
import com.dataart.spreadsheetanalytics.engine.CacheBasedDataSourceHub;
import com.dataart.spreadsheetanalytics.engine.CacheBasedMetaFunctionAccessor;
import com.dataart.spreadsheetanalytics.engine.Converters;
import com.dataart.spreadsheetanalytics.engine.DataSetOptimisationsCache;
import com.dataart.spreadsheetanalytics.engine.DataSetOptimisationsCache.DsLookupParameters;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.engine.dataset.SqlDataSet;
import com.dataart.spreadsheetanalytics.engine.datasource.TextDataSourceQuery;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.CellValue;
import com.dataart.spreadsheetanalytics.model.DataSet;

public class Skills_Sql_Table_Test {

    static String pathDataModel = "src/test/resources/datamodel/Skills_Sql_Table_Test.xlsx";
    static Map<String, Object> expectedValues;
    static String toEvaluateColumn = "A";
    static String expectedColumn = "B";
    static int expectedRowStart = 2;
    static int expectedRowEnd = 13;
    
    static SpreadsheetEvaluator evaluator;
    static IDataModel dataModel;
    
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
        cacheManager.createCache(CacheBasedDataSetAccessor.DATA_SET_TO_ID_CACHE_NAME, config.setTypes(IDataModelId.class, IDataSet.class));
        cacheManager.createCache(CacheBasedDataSetAccessor.DATA_SET_TO_NAME_CACHE_NAME, config.setTypes(String.class, IDataSet.class));
        cacheManager.createCache(CacheBasedDataSourceHub.DATA_SOURCE_CACHE_NAME, config.setTypes(Object.class, DataSource.class));
        cacheManager.createCache(DataSetOptimisationsCache.DATA_SET_TO_LAZY_PARAMETERS, config.setTypes(ILazyDataSet.Parameters.class, IDataSet.class));
        cacheManager.createCache(DataSetOptimisationsCache.DATA_SET_DS_LOOKUP_PARAMETERS, config.setTypes(DsLookupParameters.class, List.class));
        
        final ExternalServices external = ExternalServices.INSTANCE;

        DataModelAccessor dataModelStorage = new CacheBasedDataModelAccessor();
        DataSetAccessor dataSetStorage = new CacheBasedDataSetAccessor();
        DataSourceHub dataSourceHub = new CacheBasedDataSourceHub();
        MetaFunctionAccessor attributeFunctionStorage = new CacheBasedMetaFunctionAccessor(); 
        
        external.setDataModelAccessor(dataModelStorage);
        external.setDataSetAccessor(dataSetStorage);
        external.setDataSourceHub(dataSourceHub);
        external.setMetaFunctionAccessor(attributeFunctionStorage);
        external.setDataSetOptimisationsCache(new DataSetOptimisationsCache());
        
        dataSourceHub.add(new TempSqlDataSource());

        dataSetStorage.add(new SqlDataSet("AllSkills", "SELECT * FROM skills"));
        dataSetStorage.add(new SqlDataSet("SkillsInCity", "SELECT * FROM skills WHERE CITY = '?' OR CITY = '?'"));
        dataSetStorage.add(new SqlDataSet("SkillsForQualification", "SELECT FirstName, LastName FROM skills WHERE Qualification = '?'"));
        dataSetStorage.add(new SqlDataSet("SkillsForNotLevelOfEnglish", "SELECT * FROM skills WHERE LevelOfEnglish is not ?"));
        dataSetStorage.add(new SqlDataSet("SkillsForLevelOfEnglish", "SELECT FirstName, LastName, Level FROM skills WHERE LevelOfEnglish in (?, ?, ?)"));

        expectedValues = new HashMap<>();
        
        evaluator = new SpreadsheetEvaluator(dataModel);
        for (int i = expectedRowStart; i <= expectedRowEnd; i++) {
            ICellValue value = evaluator.evaluate(A1Address.fromA1Address(expectedColumn + i)).getResult();
            expectedValues.put(expectedColumn + i, value.get());
        }
    }

    @AfterClass
    public static void after() throws Exception {
        CacheManager cacheManager = Caching.getCachingProvider().getCacheManager();

        cacheManager.destroyCache(CacheBasedDataModelAccessor.DATA_MODEL_TO_ID_CACHE_NAME);
        cacheManager.destroyCache(CacheBasedDataModelAccessor.DATA_MODEL_TO_NAME_CACHE_NAME);
        cacheManager.destroyCache(CacheBasedDataSetAccessor.DATA_SET_TO_ID_CACHE_NAME);
        cacheManager.destroyCache(CacheBasedDataSetAccessor.DATA_SET_TO_NAME_CACHE_NAME);
        cacheManager.destroyCache(CacheBasedDataSourceHub.DATA_SOURCE_CACHE_NAME);
        cacheManager.destroyCache(DataSetOptimisationsCache.DATA_SET_TO_LAZY_PARAMETERS);
        cacheManager.destroyCache(DataSetOptimisationsCache.DATA_SET_DS_LOOKUP_PARAMETERS);
    }

    @Test
    public void compare_QueryFormula_ExpectedValueFromMap() throws Exception {
        //given
        // Map with expected values: expectedValues

        for (int i = expectedRowStart; i <= expectedRowEnd; i++) {
            //when
            ICellValue value = evaluator.evaluate(A1Address.fromA1Address(toEvaluateColumn + i)).getResult();

            //then
            assertThat(value).isNotNull();
            assertThat(value.get())
                .overridingErrorMessage("expected:<[%s]> but was:<[%s] at %s]>", expectedValues.get(expectedColumn + i), value.get(), toEvaluateColumn + i)
                .isEqualTo(expectedValues.get(expectedColumn + i));
        }
    
        //And check that local DataSets are saved to storage (when they need to be removed?)
        final DataSetAccessor dsStorage = ExternalServices.INSTANCE.getDataSetAccessor();
        
        IDataSet dsA2 = dsStorage.get("A2");
        assertThat(dsA2).isNotNull();
        assertThat(dsA2.rowCount()).isEqualTo(16);
        IDataSet dsA3 = dsStorage.get("A3");
        assertThat(dsA3).isNotNull();
        assertThat(dsA3.rowCount()).isEqualTo(16);
        IDataSet dsA5 = dsStorage.get("A5");
        assertThat(dsA5).isNotNull();
        assertThat(dsA5.rowCount()).isEqualTo(7);
        IDataSet dsA7 = dsStorage.get("A7");
        assertThat(dsA7).isNotNull();
        assertThat(dsA7.rowCount()).isEqualTo(9);
        IDataSet dsA9 = dsStorage.get("A9");
        assertThat(dsA9).isNotNull();
        assertThat(dsA9.rowCount()).isEqualTo(9);
        IDataSet dsA11 = dsStorage.get("A11");
        assertThat(dsA11).isNotNull();
        assertThat(dsA11.rowCount()).isEqualTo(4);
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
        IDataSet AllSkills_DS = ExternalServices.INSTANCE.getDataSetAccessor().get("AllSkills");
        IDataSet A14_DS = ExternalServices.INSTANCE.getDataSetAccessor().get("A14");
        IDataSet A15_DS = ExternalServices.INSTANCE.getDataSetAccessor().get("A15");
        IDataSet A16_DS = ExternalServices.INSTANCE.getDataSetAccessor().get("A16");
        
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
    
        String queryToExecute = textQuery.getText();
        for (int i = 0; i < params.size(); i++) queryToExecute = queryToExecute.replaceFirst("\\?", params.get(i).toString());        
    
        PreparedStatement st = co.prepareStatement(queryToExecute);
        st.execute();
    
        ResultSet rs = st.getResultSet();
        ResultSetMetaData rsmd = rs.getMetaData();
        
        IDsRow row = ds.addRow();
        for (int i = 1; i <= rsmd.getColumnCount(); i++)
            row.addCell().setValue(new CellValue(rsmd.getColumnLabel(i)));
        
        while (rs.next()) {
            row = ds.addRow();
            for (int i = 1; i <= rsmd.getColumnCount(); i++) {
                Object o = rs.getObject(i);
                IDsCell cell = row.addCell();
                if (o == null || o instanceof String) { cell.setValue(new CellValue((String) o)); } 
                else if (o instanceof Double) { cell.setValue(new CellValue((Double) o)); } 
                else if (o instanceof Boolean) { cell.setValue(new CellValue((Boolean) o)); }
                else { throw new IllegalArgumentException(String.format("Type %s is not supported by CellValue class.", o.getClass())); }
                
            }
        }
        
        return ds;
    }

    @Override
    public String getName() {
        return null;
    }
}