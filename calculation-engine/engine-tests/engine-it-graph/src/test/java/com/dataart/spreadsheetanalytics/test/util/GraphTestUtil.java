package com.dataart.spreadsheetanalytics.test.util;

import static org.assertj.core.api.StrictAssertions.assertThat;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.LineNumberReader;
import java.io.Writer;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Scanner;

import org.jgrapht.DirectedGraph;
import org.jgrapht.ext.GraphMLExporter;
import org.junit.Test;
import org.reflections.Reflections;

import com.dataart.spreadsheetanalytics.api.engine.IAuditor;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetAuditor;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.engine.execgraph.ExecutionGraph;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.CellAddress;
import com.dataart.spreadsheetanalytics.model.DataModel;
import com.dataart.spreadsheetanalytics.test.SerializedGraphTest;

public class GraphTestUtil {
    
    public final static String STANDARD_EXCELS_DIR = "src/test/resources/standard_excel_files/";
    public final static String STANDARD_GRAPHML_DIR = "src/test/resources/standard_graphml_files/";
    
    final static String TEST_FILES = "com.dataart.spreadsheetanalytics.test.graph";
    
    final static String GRAPH_PATHS_FILE = STANDARD_EXCELS_DIR + "_graph_paths.lst";
    final static String TEST_CLASS_TEMPLATE = "src/test/resources/Excel_XXX_Test.java.template";
    final static String TEST_CLASS_FILE = "src/test/java/com/dataart/spreadsheetanalytics/test/graph/Excel_XXX_Test.java";
    
    @Test
    public void it_GraphPaths_NumbrOfTestFilesGreaterThenExcels() throws IOException {
        //given
        int lines = -1;        
        try (LineNumberReader lnr = new LineNumberReader(new FileReader(new File(GRAPH_PATHS_FILE)))){ lines = lnr.getLineNumber() + 1; }
        
        //when
        int tests = new Reflections(TEST_FILES).getSubTypesOf(SerializedGraphTest.class).size();
        
        //then
        assertThat(lines).isGreaterThan(0);
        assertThat(tests).isGreaterThan(lines);
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
                final IAuditor auditor = new SpreadsheetAuditor(new SpreadsheetEvaluator(model));
                final ICellAddress addr = new CellAddress(model.dataModelId(), A1Address.fromA1Address(address));
                final DirectedGraph dgraph = ExecutionGraph.unwrap((ExecutionGraph) auditor.buildDynamicExecutionGraph(addr));

                Writer fw = new FileWriter(filename);

                GraphMLExporter exporter = new GraphWithProperertiesMLExporter(address);
                exporter.export(fw, dgraph);

                System.out.println("GraphML file is written to [" + filename + "]");
                
                String testFile = testTemplate.replace("[CELL_ADDRESS]", address).replace("[FILENAME]", line[0]).replace("XXX", line[0] + "_" + address);
                try (FileOutputStream fos = new FileOutputStream(TEST_CLASS_FILE.replace("XXX", line[0] + "_" + address))) {
                    fos.write(testFile.getBytes());
                }
                System.out.println("Java Test file is written to [" + TEST_CLASS_FILE.replace("XXX", line[0] + "_" + address) + "]");
                System.out.println();
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
        final IAuditor auditor = new SpreadsheetAuditor(new SpreadsheetEvaluator(model));
        final ICellAddress addr = new CellAddress(model.dataModelId(), A1Address.fromA1Address(address));
        final DirectedGraph dgraph = ExecutionGraph.unwrap((ExecutionGraph) auditor.buildDynamicExecutionGraph(addr));

        Writer fw = new FileWriter(filename);

        GraphMLExporter exporter = new GraphWithProperertiesMLExporter(address);
        exporter.export(fw, dgraph);

        System.out.println("GraphML file is written to [" + filename + "]");

        System.out.println("\nEnd. One file.");
    }
    
    public static void main(String[] args) throws Exception {
        boolean oneFile = args.length > 0 && !args[0].equals("all");
        if (oneFile) {
            generateGraphmlFile(args[0], args[1]);
        } else {
            boolean all = args.length > 0 && args[0].equals("all");
            generateGraphmlFileset(all);
        }
    }
}
