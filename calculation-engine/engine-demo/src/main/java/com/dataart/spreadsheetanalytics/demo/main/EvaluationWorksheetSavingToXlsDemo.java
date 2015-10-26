package com.dataart.spreadsheetanalytics.demo.main;

import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Paths;

import org.apache.poi.ss.usermodel.Workbook;

import com.dataart.spreadsheetanalytics.api.engine.IAuditor;
import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraph;
import com.dataart.spreadsheetanalytics.demo.util.DemoUtil;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetAuditor;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.engine.execgraph.ExecutionGraphConfig;
import com.dataart.spreadsheetanalytics.engine.util.PoiFileConverter;
import com.dataart.spreadsheetanalytics.model.DataModel;

public class EvaluationWorksheetSavingToXlsDemo {

    public static void main(String[] args) throws Exception {
        if (args.length < 2) {
            System.err.println("Input Excel file path, output Excel file path, please!");
            return;
        }
        
        final String excel = args[0];
        final String outputFile = args[1];
        final DataModel model = new DataModel(Paths.get(excel).getFileName().toString(), excel);

        DemoUtil.initCaches(model);
        
        //create Evaluator
        final IEvaluator evaluator = new SpreadsheetEvaluator(model);

        try (
             FileOutputStream fileOut = new FileOutputStream(outputFile);
             Workbook output = PoiFileConverter.toWorkbook(evaluator.evaluate());
        )
        {
            output.write(fileOut);
            fileOut.flush();            
        } catch (IOException e) {
            System.err.println("Error saving output xlsx file");
        }
        
        //create Auditor
        final IAuditor auditor = new SpreadsheetAuditor((SpreadsheetEvaluator) evaluator);
        //build graph
        final IExecutionGraph graph = auditor.buildDynamicExecutionGraph(ExecutionGraphConfig.JOIN_ALL_DUPLICATE_VERTICES);

        //print graph
        DemoUtil.generateVisJsData(graph);
        DemoUtil.plainprint(graph);
        
    }

    
}
