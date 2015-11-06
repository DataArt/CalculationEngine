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
package com.dataart.spreadsheetanalytics.test.util;

import static javax.cache.expiry.Duration.ONE_HOUR;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.OutputStream;
import java.io.Writer;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Scanner;

import javax.cache.CacheManager;
import javax.cache.Caching;
import javax.cache.configuration.MutableConfiguration;
import javax.cache.expiry.AccessedExpiryPolicy;

import org.jgrapht.DirectedGraph;
import org.jgrapht.ext.GraphMLExporter;

import com.dataart.spreadsheetanalytics.api.engine.AttributeFunctionStorage;
import com.dataart.spreadsheetanalytics.api.engine.DataModelStorage;
import com.dataart.spreadsheetanalytics.api.engine.DataSetStorage;
import com.dataart.spreadsheetanalytics.api.engine.DataSourceHub;
import com.dataart.spreadsheetanalytics.api.engine.ExternalServices;
import com.dataart.spreadsheetanalytics.api.engine.IAuditor;
import com.dataart.spreadsheetanalytics.api.engine.datasource.DataSource;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellFormulaExpression;
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
import com.dataart.spreadsheetanalytics.engine.SpreadsheetAuditor;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.engine.execgraph.ExecutionGraph;
import com.dataart.spreadsheetanalytics.engine.execgraph.ExecutionGraphConfig;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.CellAddress;
import com.dataart.spreadsheetanalytics.model.DataModel;
import com.dataart.spreadsheetanalytics.test.util.graphml.ExecutionGraphMLExporter;

public class GraphTestUtil {
    
    public final static String STANDARD_EXCELS_DIR = "src/test/resources/standard_excel_files/";
    public final static String STANDARD_GRAPHML_DIR = "src/test/resources/standard_graphml_files/";
    public final static String ALL_CELLS_GRAPHML_DIR = "src/test/resources/standardwithconfig_graphml_files/";
    
    static final String GRAPH_PATHS_FILE = STANDARD_EXCELS_DIR + "_graph_paths.lst";
    static final String TEST_CLASS_TEMPLATE = "src/test/resources/Excel_XXX_Test.java.template";
    static final String TEST_CLASS_TEMPLATE_ALL = "src/test/resources/Excel_XXX_All_Test.java.template";
    static final String TEST_CLASS_FILE = "src/test/java/com/dataart/spreadsheetanalytics/test/graph/standard/Excel_XXX_Test.java";
    static final String TEST_CLASS_FILE_ALL = "src/test/java/com/dataart/spreadsheetanalytics/test/graph/standartwithconfig/Excel_XXX_Test.java";

    static final Map<ExecutionGraphConfig, String> graphConfigToString = new HashMap<ExecutionGraphConfig, String>() {
        private static final long serialVersionUID = 1L;
    {
        put(ExecutionGraphConfig.DEFAULT, "_All");
        put(ExecutionGraphConfig.JOIN_ALL_DUPLICATE_VERTICES, "_JOIN_ALL");
        put(ExecutionGraphConfig.LIMIT_TO_10_DUPLICATE_VERTICES, "_JOIN_10");
        put(ExecutionGraphConfig.LIMIT_TO_2_DUPLICATE_VERTICES, "_JOIN_2");
        put(ExecutionGraphConfig.LIMIT_TO_5_DUPLICATE_VERTICES, "_JOIN_5");
    }};
    
    public static void generateGraphmlFilesetAllCellsAllConfigs(boolean all) throws Exception {
        for (ExecutionGraphConfig config : graphConfigToString.keySet()) 
            { generateGraphmlFilesetAllCells(all, config); }
    }

    protected static void generateGraphmlFilesetAllCells(boolean all, ExecutionGraphConfig config) throws Exception {
        System.out.println("Begin. Fileset.");

        String testTemplate = null;
        try (FileInputStream fis = new FileInputStream(TEST_CLASS_TEMPLATE_ALL)) {
            byte[] b = new byte[fis.available()];
            fis.read(b);
            testTemplate = new String(b);
        }

        try (Scanner sc = new Scanner(Paths.get(GRAPH_PATHS_FILE))) {

            System.out.println("For each line in file [" + GRAPH_PATHS_FILE + "]\n");
            while (sc.hasNext()) {
                String[] line = sc.next().split("\\$");

                String path = STANDARD_EXCELS_DIR + line[0] + ".xlsx";
                String filename = ALL_CELLS_GRAPHML_DIR + line[0] + "/" + graphConfigToString.get(config) + ".graphml";

                if (!all && Files.exists(Paths.get(filename))) {
                    continue;
                }

                System.out.println("Excel file [" + path + "], address [" + "All" + "]");

                final IDataModel model = new DataModel(filename, path);

                GraphTestUtil.initExternalServices((DataModel) model);

                final IAuditor auditor = new SpreadsheetAuditor(new SpreadsheetEvaluator((DataModel) model));

                final DirectedGraph dgraph = ExecutionGraph.unwrap((ExecutionGraph) auditor.buildDynamicExecutionGraph(config));

                File file = new File(ALL_CELLS_GRAPHML_DIR + line[0] + "/");
                file.mkdirs();
                Writer fw = new FileWriter(filename);

                GraphMLExporter exporter = new ExecutionGraphMLExporter(graphConfigToString.get(config).substring(1));
                exporter.export(fw, dgraph);

                System.out.println("GraphML file is written to [" + filename + "]");
                System.out.println("Number of Vertices : " + dgraph.vertexSet().size() );

                String testFile = testTemplate.replace("[FILENAME]", line[0]).replace("XXX", line[0] + "_" + "All");
                try (OutputStream fos = new FileOutputStream(TEST_CLASS_FILE_ALL.replace("XXX", line[0] + "_" + "All"))) {
                    fos.write(testFile.getBytes());
                }
                
                System.out.println("Java Test file is written to [" + TEST_CLASS_FILE_ALL.replace("XXX", line[0] + "_" + "All") + "]");
                System.out.println();
                
                GraphTestUtil.destroyExternalServices();
            }
        }
        System.out.println("\nEnd. Fileset.");
    }

    public static void generateGraphmlFileset(boolean all) throws Exception {
        System.out.println("Begin. Fileset.");

        String testTemplate = null;
        try (FileInputStream fis = new FileInputStream(TEST_CLASS_TEMPLATE)) {
            byte[] b = new byte[fis.available()];
            fis.read(b);
            testTemplate = new String(b);
        }
        
        try (Scanner sc = new Scanner(Paths.get(GRAPH_PATHS_FILE))) {

            System.out.println("For each line in file [" + GRAPH_PATHS_FILE + "]\n");
            while (sc.hasNext()) {
                String[] line = sc.next().split("\\$");

                String path = STANDARD_EXCELS_DIR + line[0] + ".xlsx";
                String address = line[1];
                String filename = STANDARD_GRAPHML_DIR + line[0] + "_" + address + ".graphml";
                
                if (!all && Files.exists(Paths.get(filename))) { continue; }

                System.out.println("Excel file [" + path + "], address [" + address + "]");

                final IDataModel model = new DataModel(filename, path);
                
                GraphTestUtil.initExternalServices((DataModel) model);
                
                final IAuditor auditor = new SpreadsheetAuditor(new SpreadsheetEvaluator((DataModel) model));
                final ICellAddress addr = new CellAddress(model.dataModelId(), A1Address.fromA1Address(address));
                
                final DirectedGraph dgraph = ExecutionGraph.unwrap((ExecutionGraph) auditor.buildDynamicExecutionGraph(addr));

                Writer fw = new FileWriter(filename);

                GraphMLExporter exporter = new ExecutionGraphMLExporter(address);
                exporter.export(fw, dgraph);

                System.out.println("GraphML file is written to [" + filename + "]");
                System.out.println("Number of Vertices : " + dgraph.vertexSet().size() );
                
                String testFile = testTemplate.replace("[CELL_ADDRESS]", address).replace("[FILENAME]", line[0]).replace("XXX", line[0] + "_" + address);
                try (FileOutputStream fos = new FileOutputStream(TEST_CLASS_FILE.replace("XXX", line[0] + "_" + address))) {
                    fos.write(testFile.getBytes());
                }
                System.out.println("Java Test file is written to [" + TEST_CLASS_FILE.replace("XXX", line[0] + "_" + address) + "]");
                System.out.println();
                GraphTestUtil.destroyExternalServices();
            }
        }
        System.out.println("\nEnd. Fileset.");
    }
    
    public static void generateGraphmlFile(String excelFile, String excelAddress) throws Exception {
        System.out.println("Begin. One file.");

        System.out.println("For file [" + excelFile + "] and address [" + excelAddress + "]\n");

        String path = STANDARD_EXCELS_DIR + excelFile + ".xlsx";
        String address = excelAddress;
        String filename = STANDARD_GRAPHML_DIR + excelFile + "_" + address + ".graphml";

        System.out.println("Excel file [" + path + "], address [" + address + "]");

        
        final IDataModel model = new DataModel(filename, path);
        
        GraphTestUtil.initExternalServices((DataModel) model);
        
        final IAuditor auditor = new SpreadsheetAuditor(new SpreadsheetEvaluator((DataModel) model));
        final ICellAddress addr = new CellAddress(model.dataModelId(), A1Address.fromA1Address(address));
        
        final DirectedGraph dgraph = ExecutionGraph.unwrap((ExecutionGraph) auditor.buildDynamicExecutionGraph(addr));

        Writer fw = new FileWriter(filename);

        GraphMLExporter exporter = new ExecutionGraphMLExporter(address);
        exporter.export(fw, dgraph);

        System.out.println("GraphML file is written to [" + filename + "]");
        System.out.println("Number of Vertices : " + dgraph.vertexSet().size() );
        System.out.println("\nEnd. One file.");
    }

    public static void generateGraphmlFile(String excelFile, ExecutionGraphConfig config) throws Exception {
        System.out.println("Begin. One file. All cells");

        System.out.println("For file [" + excelFile + "] \n");

        String suffix = graphConfigToString.get(config);

        String path = STANDARD_EXCELS_DIR + excelFile + ".xlsx";
        String filename = ALL_CELLS_GRAPHML_DIR + excelFile + "/" + graphConfigToString.get(config) + ".graphml";

        System.out.println("Excel file [" + path + "], All cells");

        final IDataModel model = new DataModel(filename, path);

        GraphTestUtil.initExternalServices((DataModel) model);

        final IAuditor auditor = new SpreadsheetAuditor(new SpreadsheetEvaluator((DataModel) model));

        final DirectedGraph dgraph = ExecutionGraph.unwrap((ExecutionGraph) auditor.buildDynamicExecutionGraph(config));

        Writer fw = new FileWriter(filename);

        GraphMLExporter exporter = new ExecutionGraphMLExporter(suffix.substring(1)+"_");
        exporter.export(fw, dgraph);

        System.out.println("GraphML file is written to [" + filename + "]");
        System.out.println("Number of Vertices : " + dgraph.vertexSet().size() );
        System.out.println("\nEnd. One file.");

        destroyExternalServices();
    }

    public static void generateGraphmlFile(String excelFile) throws Exception {
        generateGraphmlFile(excelFile, ExecutionGraphConfig.DEFAULT);
    }

    public static void generateGraphmlFileAllJoinModes(String excelFile) throws Exception {
        generateGraphmlFile(excelFile, ExecutionGraphConfig.JOIN_ALL_DUPLICATE_VERTICES);
        generateGraphmlFile(excelFile, ExecutionGraphConfig.DEFAULT);
        generateGraphmlFile(excelFile, ExecutionGraphConfig.LIMIT_TO_10_DUPLICATE_VERTICES);
        generateGraphmlFile(excelFile, ExecutionGraphConfig.LIMIT_TO_2_DUPLICATE_VERTICES);
        generateGraphmlFile(excelFile, ExecutionGraphConfig.LIMIT_TO_5_DUPLICATE_VERTICES);
    }

    public static void initExternalServices(DataModel model) throws Exception {
        final ExternalServices external = ExternalServices.INSTANCE;
        
        //prepare caches to be used as storages
        CacheManager cacheManager = Caching.getCachingProvider().getCacheManager();

        MutableConfiguration config = new MutableConfiguration();
        //some cache configurations
        config.setStoreByValue(false)
              .setExpiryPolicyFactory(AccessedExpiryPolicy.factoryOf(ONE_HOUR))
              .setStatisticsEnabled(true);

        //create the caches for application
        cacheManager.createCache(CacheBasedDataModelStorage.DATA_MODEL_TO_ID_CACHE_NAME, config.setTypes(IDataModelId.class, IDataModel.class));
        cacheManager.createCache(CacheBasedDataModelStorage.DATA_MODEL_TO_NAME_CACHE_NAME, config.setTypes(String.class, IDataModel.class));
        cacheManager.createCache(CacheBasedDataSetStorage.DATA_SET_TO_ID_CACHE_NAME, config.setTypes(IDataModelId.class, IDataSet.class));
        cacheManager.createCache(CacheBasedDataSetStorage.DATA_SET_TO_NAME_CACHE_NAME, config.setTypes(String.class, IDataSet.class));
        cacheManager.createCache(CacheBasedDataSourceHub.DATA_SOURCE_CACHE_NAME, config.setTypes(Object.class, DataSource.class));
        cacheManager.createCache(CacheBasedAttributeFunctionStorage.DEFINE_FUNCTIONS_CACHE_NAME, config.setTypes(String.class, DefineFunctionMeta.class));
        cacheManager.createCache(DataSetOptimisationsCache.DATA_SET_TO_LAZY_PARAMETERS, config.setTypes(ILazyDataSet.Parameters.class, IDataSet.class));
        
        DataModelStorage dataModelStorage = new CacheBasedDataModelStorage();
        DataSetStorage dataSetStorage = new CacheBasedDataSetStorage();
        DataSourceHub dataSourceHub = new CacheBasedDataSourceHub();
        AttributeFunctionStorage attributeFunctionStorage = new CacheBasedAttributeFunctionStorage(); 
        
        external.setDataModelStorage(dataModelStorage);
        external.setDataSetStorage(dataSetStorage);
        external.setDataSourceHub(dataSourceHub);
        external.setAttributeFunctionStorage(attributeFunctionStorage);
        
        //add data model to storage
        dataModelStorage.addDataModel(model);
        
        //update all define functions based on data models in cache
        attributeFunctionStorage.updateDefineFunctions(new HashSet<>(dataModelStorage.getDataModels().values()));
    }
    
    public static void destroyExternalServices() throws Exception {
        CacheManager cacheManager = Caching.getCachingProvider().getCacheManager();

        cacheManager.destroyCache(CacheBasedDataModelStorage.DATA_MODEL_TO_ID_CACHE_NAME);
        cacheManager.destroyCache(CacheBasedDataModelStorage.DATA_MODEL_TO_NAME_CACHE_NAME);
        cacheManager.destroyCache(CacheBasedDataSetStorage.DATA_SET_TO_ID_CACHE_NAME);
        cacheManager.destroyCache(CacheBasedDataSetStorage.DATA_SET_TO_NAME_CACHE_NAME);
        cacheManager.destroyCache(CacheBasedDataSourceHub.DATA_SOURCE_CACHE_NAME);
        cacheManager.destroyCache(CacheBasedAttributeFunctionStorage.DEFINE_FUNCTIONS_CACHE_NAME);
        cacheManager.destroyCache(DataSetOptimisationsCache.DATA_SET_TO_LAZY_PARAMETERS);
    }
    
    public static String formulaToString(ICellFormulaExpression formula) {
        if (formula == null) { return "null"; }
        
        return String.format("Formula string: %s; Formula values: %s;", 
                              formula.formulaStr(),
                              formula.formulaValues());
    }
    
    public static void main(String[] args) throws Exception {
        boolean oneFile = args.length > 0 && !args[0].equals("all");
        if (oneFile) {
            if (args.length > 1) {
                if (args[1].equals("alljoins")) {
                    generateGraphmlFileAllJoinModes(args[0]);
                } else {
                    generateGraphmlFile(args[0], args[1]);
                }
            } else {
                generateGraphmlFile(args[0]);
            }
        } else {
            boolean all = args.length > 0 && args[0].equals("all");
            if (args.length > 1 && "alljoins".equals(args[1])) {
                generateGraphmlFilesetAllCellsAllConfigs(all);
            } else {
                generateGraphmlFileset(all);
            }
        }
    }
}
