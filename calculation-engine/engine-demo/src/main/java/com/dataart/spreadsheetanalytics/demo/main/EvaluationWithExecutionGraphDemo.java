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
package com.dataart.spreadsheetanalytics.demo.main;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

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
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataModelId;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraph;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphEdge;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex.Type;
import com.dataart.spreadsheetanalytics.api.model.ILazyDataSet;
import com.dataart.spreadsheetanalytics.demo.util.DemoUtil;
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
import com.dataart.spreadsheetanalytics.engine.util.PoiFileConverter;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.CellAddress;
import com.dataart.spreadsheetanalytics.model.CellValue;
import com.dataart.spreadsheetanalytics.model.DataModel;

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
        dataSourceHub.addDataSource(new DemoUtil.TempSqlDataSource());
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
