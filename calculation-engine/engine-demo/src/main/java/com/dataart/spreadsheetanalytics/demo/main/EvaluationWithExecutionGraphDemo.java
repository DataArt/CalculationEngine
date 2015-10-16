package com.dataart.spreadsheetanalytics.demo.main;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.cache.CacheManager;
import javax.cache.Caching;
import javax.cache.configuration.MutableConfiguration;
import javax.cache.expiry.AccessedExpiryPolicy;
import javax.cache.expiry.Duration;

import com.dataart.spreadsheetanalytics.api.engine.AttributeFunctionStorage;
import com.dataart.spreadsheetanalytics.api.engine.DataModelStorage;
import com.dataart.spreadsheetanalytics.api.engine.DataSetStorage;
import com.dataart.spreadsheetanalytics.api.engine.DataSourceHub;
import com.dataart.spreadsheetanalytics.api.engine.ExternalServices;
import com.dataart.spreadsheetanalytics.api.engine.IAuditor;
import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.engine.datasource.DataSource;
import com.dataart.spreadsheetanalytics.api.engine.datasource.DataSourceQuery;
import com.dataart.spreadsheetanalytics.api.engine.datasource.SqlDataSource;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataModelId;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraph;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphEdge;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex.Type;
import com.dataart.spreadsheetanalytics.api.model.ILazyDataSet;
import com.dataart.spreadsheetanalytics.engine.CacheBasedAttributeFunctionStorage;
import com.dataart.spreadsheetanalytics.engine.CacheBasedDataModelStorage;
import com.dataart.spreadsheetanalytics.engine.CacheBasedDataSetStorage;
import com.dataart.spreadsheetanalytics.engine.CacheBasedDataSourceHub;
import com.dataart.spreadsheetanalytics.engine.DataSetOptimisationsCache;
import com.dataart.spreadsheetanalytics.engine.DataSetOptimisationsCache.DsLookupParameters;
import com.dataart.spreadsheetanalytics.engine.DefineFunctionMeta;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetAuditor;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.engine.dataset.SqlDataSet;
import com.dataart.spreadsheetanalytics.engine.datasource.TextDataSourceQuery;
import com.dataart.spreadsheetanalytics.engine.util.PoiFileConverter;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.CellAddress;
import com.dataart.spreadsheetanalytics.model.CellValue;
import com.dataart.spreadsheetanalytics.model.DataModel;
import com.dataart.spreadsheetanalytics.model.DataSet;
import com.dataart.spreadsheetanalytics.model.DsRow;

public class EvaluationWithExecutionGraphDemo {
    
    public static void main(String[] args) throws Exception {

        //input arguments: filename and list of cells to evaluate
        if (args.length < 2) {
            System.err.println("Excel file path and Cell Address, please!");
            return;
        }
        
        final String excel = args[0];
        final List<String> cellsToEvaluate = new ArrayList<>(Arrays.asList(args));
        cellsToEvaluate.remove(0);

        //prepare DataModel to work with
        final DataModel model = new DataModel(Paths.get(excel).getFileName().toString(), excel);
        
        initCaches(model);
        
        //create Evaluator
        final IEvaluator evaluator = new SpreadsheetEvaluator(model);
        
        //evaluate and save to map to print later
        Map<String, Object> values = new LinkedHashMap<>();
        for (String cell : cellsToEvaluate) {
            values.put(cell, evaluator.evaluate(new CellAddress(model.dataModelId(), A1Address.fromA1Address(cell))));
        }
        
        //last cell
        final ICellAddress addr = new CellAddress(model.dataModelId(), A1Address.fromA1Address(cellsToEvaluate.get(cellsToEvaluate.size() - 1)));

        //create Auditor
        final IAuditor auditor = new SpreadsheetAuditor((SpreadsheetEvaluator) evaluator);
        //build graph
        final IExecutionGraph graph = auditor.buildDynamicExecutionGraph(addr);
        
        //print graph
        generateVisJsData(graph);
        plainprint(graph);

        //pring values\
        System.out.println("\n\n***********");
        for (String cell : values.keySet()) {
            System.out.println("Result of " + cell + " is: " + values.get(cell));
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

    protected static void plainprint(IExecutionGraph graph) {
        for (IExecutionGraphVertex vertex : graph.getVertices()) {
            System.out.println("---------------------------------");
            System.out.println("Vertex Id: " + vertex.id());
            System.out.println("Name: " + vertex.name());
            System.out.println("Type: " + vertex.type());
            System.out.println("Formula Expression: " + vertex.formula());
            System.out.println("Value: " + CellValue.fromCellValueToString(vertex.value()));
            System.out.println("Source Object Id: " + vertex.sourceObjectId());
        }
    }

    protected static void generateVisJsData(IExecutionGraph graph) {
        try {
            final String dataTemplateFileStr = "src/main/resources/ui/data_template.js";
            final String dataFileStr = "src/main/resources/ui/data.js";

            final String VERTICES_PLACEHOLDER = "<%vertices_placeholder%>";
            final String EDGES_PLACEHOLDER = "<%edges_placeholder%>";
            
            StringBuilder verticesJson = new StringBuilder();
            StringBuilder edgesJson = new StringBuilder();
            
            for (IExecutionGraphVertex vertex : graph.getVertices()) {
                /* {id: a, label: b, ...}, */

                verticesJson.append("{id: '")
                            .append(vertex.id())
                            .append("', label: '")
                            .append(vertex.name())
                            .append("\\n")
                            .append(vertex.value() == null || CellValue.fromCellValueToString(vertex.value()).length() > 25 ? "..." : CellValue.fromCellValueToString(vertex.value()))
                            .append("', color: '")
                            .append(vertex.type() == Type.OPERATOR || vertex.type() == Type.FUNCTION || vertex.type() == Type.IF ? "#f0ad4e" : "#31b0d5")
                            .append("', title: '")
                                .append("Name: ")
                                .append(vertex.name())
                                .append("<br>")
                                .append("Value: ")
                                .append(CellValue.fromCellValueToString(vertex.value()))
                                .append("<br>")
                                .append("Type: ")
                                .append(vertex.type())
                                .append("<br>")
                                .append("Id: ")
                                .append(vertex.id())
                                .append("<br>")
                                .append("Formula Expression: ")
                                .append(vertex.formula())
                                .append("<br>")
                                .append("Source Object Id: ")
                                .append(vertex.sourceObjectId())
                            .append("'},\n");
            }
            verticesJson.setLength(verticesJson.length() > 0 ? verticesJson.length() - 2 : 0);

            for (IExecutionGraphEdge edge : graph.getEdges()) {
                /* {from: id_a, to: id_b}, */
                
                IExecutionGraphVertex from = graph.getEdgeSource(edge);
                IExecutionGraphVertex to = graph.getEdgeTarget(edge);
                
                edgesJson.append("{from: '")
                         .append(from.id())
                         .append("', to: '")
                         .append(to.id())
                         .append("'},\n");
            }

            edgesJson.setLength(edgesJson.length() > 0 ? edgesJson.length() - 2 : 0);

            String content = new String(Files.readAllBytes(Paths.get(dataTemplateFileStr)), StandardCharsets.UTF_8);
            content = content.replace(VERTICES_PLACEHOLDER, verticesJson.toString())
                             .replace(EDGES_PLACEHOLDER, edgesJson.toString());
            
            Files.write(Paths.get(dataFileStr), content.getBytes(StandardCharsets.UTF_8));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
class TempSqlDataSource implements SqlDataSource {

    private Connection co;
    
    private String initSql_1 = "CREATE TABLE creaditcards "
                                + "("
                                    + "PersonId int,"
                                    + "LastName varchar(255),"
                                    + "FirstName varchar(255),"
                                    + "Address varchar(255),"
                                    + "City varchar(255),"
                                    + "Age int,"
                                    + "CreditCardNumber bigint,"
                                + ");";
    
    private String initSql_2 = 
            "INSERT INTO creaditcards (PersonId, LastName, FirstName, Address, City, Age, CreditCardNumber) VALUES (1,'Erichsen','Tom B.','Abc St.','Lublin',36, 0001000100010001);" +
            "INSERT INTO creaditcards (PersonId, LastName, FirstName, Address, City, Age, CreditCardNumber) VALUES (2,'Tomasson','John B.','Abc St.','Lublin',25, 0002000200020002);" +
            "INSERT INTO creaditcards (PersonId, LastName, FirstName, Address, City, Age, CreditCardNumber) VALUES (3,'Bedersson','Richard B.','Abc St.','Lublin',48, 0003000300030003);" +
            "INSERT INTO creaditcards (PersonId, LastName, FirstName, Address, City, Age, CreditCardNumber) VALUES (4,'Chrenesson','Michael B.','Abc St.','Lublin',77, 0004000400040004);" +
            "INSERT INTO creaditcards (PersonId, LastName, FirstName, Address, City, Age, CreditCardNumber) VALUES (5,'Nefasson','Hank B.','Abc St.','Lublin',19, 0005000500050005);";
    
    private String initSql_3 = "CREATE TABLE skills "
                                + "("
                                    + "FirstName varchar(255),"
                                    + "LastName varchar(255),"
                                    + "Qualification varchar(255),"
                                    + "City varchar(255),"
                                    + "Level varchar(255),"
                                    + "LevelOfEnglish varchar(255)"
                                + ");";
    private String initSql_4 = 
            "INSERT INTO skills (FirstName, LastName, Qualification, City, Level, LevelOfEnglish) VALUES ('Urik','Koroshev','Java','NY','Senior','n/a');" +
            "INSERT INTO skills (FirstName, LastName, Qualification, City, Level, LevelOfEnglish) VALUES ('Sasha','Gust','Java','Voronezh','Senior','n/a');" +
            "INSERT INTO skills (FirstName, LastName, Qualification, City, Level, LevelOfEnglish) VALUES ('Nikolay','Frix','.Net','Dnipropetrovsk','Middle','n/a');" +
            "INSERT INTO skills (FirstName, LastName, Qualification, City, Level, LevelOfEnglish) VALUES ('Lucasz','Gnap','C++','Lublin','Middle','3.8');" +
            "INSERT INTO skills (FirstName, LastName, Qualification, City, Level, LevelOfEnglish) VALUES ('Andrey','Ivanovich','Android','Dnipropetrovsk','Middle','2.4');" +
            "INSERT INTO skills (FirstName, LastName, Qualification, City, Level, LevelOfEnglish) VALUES ('Oleg','Krutoy','Android','Lviv','Senior','4.0');" +
            "INSERT INTO skills (FirstName, LastName, Qualification, City, Level, LevelOfEnglish) VALUES ('Alexander','Global','iPhone','Dnipropetrovsk','Middle','4.4');" +
            "INSERT INTO skills (FirstName, LastName, Qualification, City, Level, LevelOfEnglish) VALUES ('Aliester','Douglas','Cameron','iPhone','NY','Senior  5.0');" +
            "INSERT INTO skills (FirstName, LastName, Qualification, City, Level, LevelOfEnglish) VALUES ('Oles','Lopster','PHP','Odessa','Middle','n/a');" +
            "INSERT INTO skills (FirstName, LastName, Qualification, City, Level, LevelOfEnglish) VALUES ('Pavel','Haliver','Python','Kyiv','Junior','n/a');" +
            "INSERT INTO skills (FirstName, LastName, Qualification, City, Level, LevelOfEnglish) VALUES ('Kostya','Holiver','Python','Lublin','Middle','n/a');" +
            "INSERT INTO skills (FirstName, LastName, Qualification, City, Level, LevelOfEnglish) VALUES ('Ekaterina','Skakunova','QA','Odessa','Middle','2.8');" +
            "INSERT INTO skills (FirstName, LastName, Qualification, City, Level, LevelOfEnglish) VALUES ('Ksenia','Brigida','QA','Odessa','Middle','3.2');" +
            "INSERT INTO skills (FirstName, LastName, Qualification, City, Level, LevelOfEnglish) VALUES ('Roman','Romanov','QA','Odessa','Junior','n/a');" +
            "INSERT INTO skills (FirstName, LastName, Qualification, City, Level, LevelOfEnglish) VALUES ('Tatiana','Smeshko','QA','Odessa','Middle','3.6');";

    
    public TempSqlDataSource() {
        
        try {
            Class.forName("org.hsqldb.jdbcDriver" );
            co = DriverManager.getConnection("jdbc:hsqldb:mem:aname", "sa", "");
            Statement st = co.createStatement();
            
            st.execute(initSql_1);
            st.execute(initSql_2);
            
            st.execute(initSql_3);
            st.execute(initSql_4);
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
