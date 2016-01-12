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
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import javax.cache.CacheManager;
import javax.cache.Caching;
import javax.cache.configuration.MutableConfiguration;
import javax.cache.expiry.AccessedExpiryPolicy;

import org.apache.poi.common.fork.IExecutionGraphVertex.Type;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.jgrapht.DirectedGraph;
import org.jgrapht.ext.GraphMLExporter;

import com.dataart.spreadsheetanalytics.api.engine.DataModelAccessor;
import com.dataart.spreadsheetanalytics.api.engine.DataSetAccessor;
import com.dataart.spreadsheetanalytics.api.engine.DataSourceHub;
import com.dataart.spreadsheetanalytics.api.engine.ExternalServices;
import com.dataart.spreadsheetanalytics.api.engine.IAuditor;
import com.dataart.spreadsheetanalytics.api.engine.MetaFunctionAccessor;
import com.dataart.spreadsheetanalytics.api.engine.datasource.DataSource;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataModelId;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraph;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphEdge;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex;
import com.dataart.spreadsheetanalytics.api.model.ILazyDataSet;
import com.dataart.spreadsheetanalytics.engine.CacheBasedDataModelAccessor;
import com.dataart.spreadsheetanalytics.engine.CacheBasedDataSetAccessor;
import com.dataart.spreadsheetanalytics.engine.CacheBasedDataSourceHub;
import com.dataart.spreadsheetanalytics.engine.CacheBasedMetaFunctionAccessor;
import com.dataart.spreadsheetanalytics.engine.Converters;
import com.dataart.spreadsheetanalytics.engine.DataSetOptimisationsCache;
import com.dataart.spreadsheetanalytics.engine.DefineFunctionMeta;
import com.dataart.spreadsheetanalytics.engine.FunctionMeta;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetAuditor;
import com.dataart.spreadsheetanalytics.engine.graph.CellFormulaExpression;
import com.dataart.spreadsheetanalytics.engine.graph.ExecutionGraph;
import com.dataart.spreadsheetanalytics.engine.graph.ExecutionGraphConfig;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.CellAddress;
import com.dataart.spreadsheetanalytics.test.util.graphml.ExecutionGraphMLExporter;

public class GraphTestUtil {

    public final static String STANDARD_EXCELS_DIR = "src/test/resources/standard_excel_files/";
    public final static String STANDARD_GRAPHML_DIR = "src/test/resources/standard_graphml_files/";
    public final static String ALL_CELLS_GRAPHML_DIR = "src/test/resources/standardwithconfig_graphml_files/";
    public final static String ADVANCED_CONF_TESTS_DIR = "src/test/resources/standardwithconfig_advanced_graphml_files/";
    public final static String ADVANCED_CONF_TESTS_EXCEL_DIR = "src/test/resources/standardwithconfig_excel_files/";

    static final String GRAPH_PATHS_FILE = STANDARD_EXCELS_DIR + "_graph_paths.lst";
    static final String GRAPH_PATHS_FILE_ALL = STANDARD_EXCELS_DIR + "_config_graph_paths.lst";
    static final String ADV_GRAPH_PATHS_FILE_ALL = STANDARD_EXCELS_DIR + "_advanced_config_files.lst";
    static final String TEST_CLASS_TEMPLATE = "src/test/resources/Excel_XXX_Test.java.template";
    static final String TEST_CLASS_TEMPLATE_ALL = "src/test/resources/Excel_XXX_All_Test.java.template";
    static final String TEST_CLASS_FILE = "src/test/java/com/dataart/spreadsheetanalytics/test/graph/standard/Excel_XXX_Test.java";
    static final String TEST_CLASS_FILE_ALL = "src/test/java/com/dataart/spreadsheetanalytics/test/graph/standardwithconfig/Excel_XXX_Test.java";

    static final String VISUALIZER_DIR = "src/test/resources/graph_visualizer/";
    static final String VISUALIZER_DATA_TEMPLATE_JS_FILE = "data_XXX.js";
    static final String VISUALIZER_GRAPH_TEMPLATE_HTML_FILE = "graph_XXX.html";
    static final String VISUALIZER_STANDARDWITHCONFIG_DATA_JS_FILES = "src/test/resources/standardwithconfig_data_js_files/";
    static final String VISUALIZER_STANDARD_DATA_JS_FILES = "src/test/resources/standard_data_js_files/";

    static final Map<ExecutionGraphConfig, String> graphConfigToString = new HashMap<ExecutionGraphConfig, String>() {
        private static final long serialVersionUID = 1L;
    {
        put(ExecutionGraphConfig.DEFAULT, "_All");
        put(ExecutionGraphConfig.JOIN_ALL_DUPLICATE_VERTICES, "_JOIN_ALL");
        put(ExecutionGraphConfig.LIMIT_TO_10_DUPLICATE_VERTICES, "_JOIN_10");
        put(ExecutionGraphConfig.LIMIT_TO_2_DUPLICATE_VERTICES, "_JOIN_2");
        put(ExecutionGraphConfig.LIMIT_TO_5_DUPLICATE_VERTICES, "_JOIN_5");
    }};

    public static void main(String[] args) throws Exception {
        //for 'advanced' files
        if (args.length == 1 && "advanced".equals(args[0])) {
            generateGraphmlFilesAdvJoin();
        }
        //for one file
        if (args.length > 0 && !args[0].equals("all")) {
            if (args.length > 1) {
                if (args[1].equals("alljoins")) {
                    generateGraphmlFileAllJoinModes(args[0]);
                } else {
                    generateGraphmlFile(args[0], args[1]);
                }
            } else if (!"advanced".equals(args[0])) {
                generateGraphmlFile(args[0]);
            }
        } 
        //for all files
        else {
            boolean all = args.length > 0 && args[0].equals("all");
            if (args.length > 1 && "alljoins".equals(args[1])) {
                generateGraphmlFilesetAllCellsAllConfigs(all);
            } else {
                generateGraphmlFileset(all);
            }
        }
    }

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

        try (Scanner sc = new Scanner(Paths.get(GRAPH_PATHS_FILE_ALL))) {

            System.out.println("For each line in file [" + GRAPH_PATHS_FILE_ALL + "]\n");
            while (sc.hasNext()) {
                String line = sc.next();

                String path = STANDARD_EXCELS_DIR + line + ".xlsx";
                String filename = ALL_CELLS_GRAPHML_DIR + line + "/" + graphConfigToString.get(config) + ".graphml";

                if (!all && Files.exists(Paths.get(filename))) {
                    continue;
                }

                System.out.println("Excel file [" + path + "], address [" + "All" + "]");

                final IDataModel model = Converters.toDataModel(new XSSFWorkbook(path));

                initExternalServices(model);

                final IAuditor auditor = new SpreadsheetAuditor(model);

                final IExecutionGraph graph = auditor.buildExecutionGraph(config);
                final DirectedGraph dgraph = ExecutionGraph.unwrap((ExecutionGraph) graph);

                File file = new File(ALL_CELLS_GRAPHML_DIR + line + "/");
                file.mkdirs();
                Writer fw = new FileWriter(filename);

                GraphMLExporter exporter = new ExecutionGraphMLExporter(graphConfigToString.get(config).substring(1));
                exporter.export(fw, dgraph);

                System.out.println("GraphML file is written to [" + filename + "]");
                System.out.println("Number of Vertices : " + dgraph.vertexSet().size() );
                
                generateVisualizer(graph, VISUALIZER_STANDARDWITHCONFIG_DATA_JS_FILES, line, graphConfigToString.get(config));
                System.out.println("Visualizer files as written to [" + VISUALIZER_STANDARDWITHCONFIG_DATA_JS_FILES + line + "_" + graphConfigToString.get(config) + "].");

                String testFile = testTemplate.replace("[FILENAME]", line).replace("XXX", line + "_" + "All");
                
                try (OutputStream fos = new FileOutputStream(TEST_CLASS_FILE_ALL.replace("XXX", line + "_" + "All"))) {
                    fos.write(testFile.getBytes());
                }
                
                System.out.println("Java Test file is written to [" + TEST_CLASS_FILE_ALL.replace("XXX", line + "_" + "All") + "]");
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

                final IDataModel model = Converters.toDataModel(new XSSFWorkbook(path));
                
                initExternalServices(model);
                
                final IAuditor auditor = new SpreadsheetAuditor(model);
                final ICellAddress addr = new CellAddress(model.getDataModelId(), A1Address.fromA1Address(address));

                final IExecutionGraph graph = auditor.buildExecutionGraph(addr.a1Address());
                final DirectedGraph dgraph = ExecutionGraph.unwrap((ExecutionGraph) graph);

                Writer fw = new FileWriter(filename);

                GraphMLExporter exporter = new ExecutionGraphMLExporter(address);
                exporter.export(fw, dgraph);

                System.out.println("GraphML file is written to [" + filename + "]");
                System.out.println("Number of Vertices : " + dgraph.vertexSet().size() );
                
                generateVisualizer(graph, VISUALIZER_STANDARD_DATA_JS_FILES, line[0], address);
                System.out.println("Visualizer files as written to [" + VISUALIZER_STANDARD_DATA_JS_FILES + line[0] + address + "].");
                
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
        System.out.println("Begin. One file.\nFor file [" + excelFile + "] and address [" + excelAddress + "]\n");

        String path = STANDARD_EXCELS_DIR + excelFile + ".xlsx";
        String address = excelAddress;
        String filename = STANDARD_GRAPHML_DIR + excelFile + "_" + address + ".graphml";

        System.out.println("Excel file [" + path + "], address [" + address + "]");

        
        final IDataModel model = Converters.toDataModel(new XSSFWorkbook(path));
        
        initExternalServices(model);
        
        final IAuditor auditor = new SpreadsheetAuditor(model);
        final ICellAddress addr = new CellAddress(model.getDataModelId(), A1Address.fromA1Address(address));
        
        final IExecutionGraph graph = auditor.buildExecutionGraph(addr.a1Address());
        final DirectedGraph dgraph = ExecutionGraph.unwrap((ExecutionGraph) graph);

        Writer fw = new FileWriter(filename);

        GraphMLExporter exporter = new ExecutionGraphMLExporter(address);
        exporter.export(fw, dgraph);

        System.out.println("GraphML file is written to [" + filename + "]\n\nEnd. One file.");
        System.out.println("Number of Vertices : " + dgraph.vertexSet().size() );
        
        generateVisualizer(graph, VISUALIZER_STANDARD_DATA_JS_FILES, excelFile, address);
        System.out.println("Visualizer files as written to [" + VISUALIZER_STANDARD_DATA_JS_FILES + excelFile + address + "]\n\nEnd. One file.");

        destroyExternalServices();
    }

    public static void generateGraphmlFile(String excelFile, ExecutionGraphConfig config) throws Exception {
        System.out.println("Begin. One file. All cells.\nFor file [" + excelFile + "] \n");

        String suffix = graphConfigToString.get(config);

        String path = STANDARD_EXCELS_DIR + excelFile + ".xlsx";
        String filename = ALL_CELLS_GRAPHML_DIR + excelFile + "/" + graphConfigToString.get(config) + ".graphml";

        System.out.println("Excel file [" + path + "], All cells");

        final IDataModel model = Converters.toDataModel(new XSSFWorkbook(path));

        initExternalServices(model);

        final IAuditor auditor = new SpreadsheetAuditor(model);

        final IExecutionGraph graph = auditor.buildExecutionGraph(config);
        final DirectedGraph dgraph = ExecutionGraph.unwrap((ExecutionGraph) graph);

        Writer fw = new FileWriter(filename);

        GraphMLExporter exporter = new ExecutionGraphMLExporter(suffix.substring(1)+"_");
        exporter.export(fw, dgraph);

        System.out.println("GraphML file is written to [" + filename + "]");
        System.out.println("Number of Vertices : " + dgraph.vertexSet().size() );
        
        generateVisualizer(graph, VISUALIZER_STANDARDWITHCONFIG_DATA_JS_FILES, excelFile, suffix);
        System.out.println("Visualizer files as written to [" + VISUALIZER_STANDARDWITHCONFIG_DATA_JS_FILES + excelFile + suffix + "]\n\nEnd. One file.");

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

    public static void generateGraphmlFilesAdvJoin() throws Exception {
        System.out.println("Begin. Fileset.");
        for (ExecutionGraphConfig config : graphConfigToString.keySet()) {
            try (Scanner sc = new Scanner(Paths.get(ADV_GRAPH_PATHS_FILE_ALL))) {

                System.out.println("For each line in file [" + ADV_GRAPH_PATHS_FILE_ALL + "]\n");
                while (sc.hasNext()) {
                    String line = sc.next();

                    String path = ADVANCED_CONF_TESTS_EXCEL_DIR + line + ".xlsx";
                    String filename = ADVANCED_CONF_TESTS_DIR + line + "/" + graphConfigToString.get(config) + ".graphml";

                    System.out.println("Excel file [" + path + "], address [" + "All" + "]");

                    final IDataModel model = Converters.toDataModel(new XSSFWorkbook(path));

                    initExternalServices(model);

                    final IAuditor auditor = new SpreadsheetAuditor(model);

                    final IExecutionGraph graph = auditor.buildExecutionGraph(config);
                    final DirectedGraph dgraph = ExecutionGraph.unwrap((ExecutionGraph) graph);

                    File file = new File(ADVANCED_CONF_TESTS_DIR + line + "/");
                    file.mkdirs();
                    Writer fw = new FileWriter(filename);

                    GraphMLExporter exporter = new ExecutionGraphMLExporter(graphConfigToString.get(config).substring(1));
                    exporter.export(fw, dgraph);

                    System.out.println("GraphML file is written to [" + filename + "]");
                    System.out.println("Number of Vertices : " + dgraph.vertexSet().size());

                    // generateVisualizer(graph,
                    // VISUALIZER_STANDARDWITHCONFIG_DATA_JS_FILES, line,
                    // graphConfigToString.get(config));
                    System.out.println("Visualizer files as written to [" + VISUALIZER_STANDARDWITHCONFIG_DATA_JS_FILES + line + "_"
                            + graphConfigToString.get(config) + "].");

                    System.out.println("Java Test file is written to [" + TEST_CLASS_FILE_ALL.replace("XXX", line + "_" + "All") + "]");
                    System.out.println();

                    GraphTestUtil.destroyExternalServices();
                }
            }
        }
        System.out.println("\nEnd. Fileset.");
    }

    public static void initExternalServices(IDataModel model) throws Exception {
        final ExternalServices external = ExternalServices.INSTANCE;
        
        //prepare caches to be used as storages
        CacheManager cacheManager = Caching.getCachingProvider().getCacheManager();

        MutableConfiguration config = new MutableConfiguration();
        //some cache configurations
        config.setStoreByValue(false)
              .setExpiryPolicyFactory(AccessedExpiryPolicy.factoryOf(ONE_HOUR))
              .setStatisticsEnabled(true);

        //create the caches for application
        cacheManager.createCache(CacheBasedDataModelAccessor.DATA_MODEL_TO_ID_CACHE_NAME, config.setTypes(IDataModelId.class, IDataModel.class));
        cacheManager.createCache(CacheBasedDataModelAccessor.DATA_MODEL_TO_NAME_CACHE_NAME, config.setTypes(String.class, IDataModel.class));
        cacheManager.createCache(CacheBasedDataSetAccessor.DATA_SET_TO_ID_CACHE_NAME, config.setTypes(IDataModelId.class, IDataSet.class));
        cacheManager.createCache(CacheBasedDataSetAccessor.DATA_SET_TO_NAME_CACHE_NAME, config.setTypes(String.class, IDataSet.class));
        cacheManager.createCache(CacheBasedDataSourceHub.DATA_SOURCE_CACHE_NAME, config.setTypes(Object.class, DataSource.class));
        cacheManager.createCache(CacheBasedMetaFunctionAccessor.META_FUNCTIONS_CACHE_NAME, config.setTypes(String.class, FunctionMeta.class));
        cacheManager.createCache(DataSetOptimisationsCache.DATA_SET_TO_LAZY_PARAMETERS, config.setTypes(ILazyDataSet.Parameters.class, IDataSet.class));
        
        DataModelAccessor dataModelStorage = new CacheBasedDataModelAccessor();
        DataSetAccessor dataSetStorage = new CacheBasedDataSetAccessor();
        DataSourceHub dataSourceHub = new CacheBasedDataSourceHub();
        MetaFunctionAccessor attributeFunctionStorage = new CacheBasedMetaFunctionAccessor(); 
        
        external.setDataModelAccessor(dataModelStorage);
        external.setDataSetAccessor(dataSetStorage);
        external.setDataSourceHub(dataSourceHub);
        external.setMetaFunctionAccessor(attributeFunctionStorage);
        
        //add data model to storage
        dataModelStorage.add(model);
        
        //update all define functions based on data models in cache
        Map<DefineFunctionMeta, IDataModel> defineModels = Converters.toMetaFunctions(model, DefineFunctionMeta.class);
        defineModels.forEach((k, v) -> {
            attributeFunctionStorage.add(k); //defein meta info with link to DataModel
            dataModelStorage.add(v); //define model
        });
    }
    
    public static void destroyExternalServices() throws Exception {
        CacheManager cacheManager = Caching.getCachingProvider().getCacheManager();

        cacheManager.destroyCache(CacheBasedDataModelAccessor.DATA_MODEL_TO_ID_CACHE_NAME);
        cacheManager.destroyCache(CacheBasedDataModelAccessor.DATA_MODEL_TO_NAME_CACHE_NAME);
        cacheManager.destroyCache(CacheBasedDataSetAccessor.DATA_SET_TO_ID_CACHE_NAME);
        cacheManager.destroyCache(CacheBasedDataSetAccessor.DATA_SET_TO_NAME_CACHE_NAME);
        cacheManager.destroyCache(CacheBasedDataSourceHub.DATA_SOURCE_CACHE_NAME);
        cacheManager.destroyCache(CacheBasedMetaFunctionAccessor.META_FUNCTIONS_CACHE_NAME);
        cacheManager.destroyCache(DataSetOptimisationsCache.DATA_SET_TO_LAZY_PARAMETERS);
    }
    
    public static String formulaToString(CellFormulaExpression formula) {
        if (formula == null) { return "null"; }
        
        return String.format("Formula string: %s; Formula values: %s;", 
                              formula.formulaStr(),
                              formula.formulaValues());
    }
    
    public static void generateVisualizer(IExecutionGraph graph, String dir, String file, String address) {
        try {
            final String fileSuffix = file + "_" + address;
            final String dataGraphJs = dir + VISUALIZER_DATA_TEMPLATE_JS_FILE.replace("XXX", fileSuffix);
            final String dataGraphHtml = dir + VISUALIZER_GRAPH_TEMPLATE_HTML_FILE.replace("XXX", fileSuffix);

            final String VERTICES_PLACEHOLDER = "<%vertices_placeholder%>";
            final String EDGES_PLACEHOLDER = "<%edges_placeholder%>";
            
            StringBuilder verticesJson = new StringBuilder();
            StringBuilder edgesJson = new StringBuilder();
            
            for (IExecutionGraphVertex vertex : graph.getVertices()) {
                /* {id: a, label: b, ...}, */

                verticesJson.append("{id: '")
                            .append(vertex.getId())
                            .append("', label: '")
                            .append(vertex.getName())
                            .append("\\n")
                            .append(vertex.getValue() == null || vertex.getValue().toString().length() > 55 ? "..." : vertex.getValue().toString())
                            .append("', color: '")
                            .append(vertex.getType() == Type.OPERATOR || vertex.getType() == Type.FUNCTION || vertex.getType() == Type.IF ? "#f0ad4e" : "#31b0d5")
                            .append("', title: '")
                                .append("Name: ")
                                .append(vertex.getName())
                                .append("<br>")
                                .append("Alias: ")
                                .append(vertex.getAlias())
                                .append("<br>")                                
                                .append("Value: ")
                                .append(vertex.getValue())
                                .append("<br>")
                                .append("Type: ")
                                .append(vertex.getType())
                                .append("<br>")
                                .append("Id: ")
                                .append(vertex.getId())
                                .append("<br>")
                                .append("Formula Expression: ")
                                .append(vertex.getFormula())
                                .append("<br>")
                                .append("Source Object Id: ")
                                .append(vertex.getSourceObjectId())
                            .append("'},\n");
            }
            verticesJson.setLength(verticesJson.length() > 0 ? verticesJson.length() - 2 : 0);

            for (IExecutionGraphEdge edge : graph.getEdges()) {
                /* {from: id_a, to: id_b}, */
                
                IExecutionGraphVertex from = graph.getEdgeSource(edge);
                IExecutionGraphVertex to = graph.getEdgeTarget(edge);
                
                edgesJson.append("{from: '")
                         .append(from.getId())
                         .append("', to: '")
                         .append(to.getId())
                         .append("'},\n");
            }

            edgesJson.setLength(edgesJson.length() > 0 ? edgesJson.length() - 2 : 0);

            String contentJs = new String(Files.readAllBytes(Paths.get(VISUALIZER_DIR + VISUALIZER_DATA_TEMPLATE_JS_FILE)), StandardCharsets.UTF_8);
            contentJs = contentJs.replace(VERTICES_PLACEHOLDER, verticesJson.toString())
                             .replace(EDGES_PLACEHOLDER, edgesJson.toString());
            
            String contentHtml = new String(Files.readAllBytes(Paths.get(VISUALIZER_DIR + VISUALIZER_GRAPH_TEMPLATE_HTML_FILE)), StandardCharsets.UTF_8);
            contentHtml = contentHtml.replace("XXX", VISUALIZER_DATA_TEMPLATE_JS_FILE.replace("XXX", fileSuffix));
            
            Files.write(Paths.get(dataGraphJs), contentJs.getBytes(StandardCharsets.UTF_8));
            Files.write(Paths.get(dataGraphHtml), contentHtml.getBytes(StandardCharsets.UTF_8));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    
}
