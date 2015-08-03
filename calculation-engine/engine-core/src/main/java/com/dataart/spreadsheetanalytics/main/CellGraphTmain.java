package com.dataart.spreadsheetanalytics.main;

import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.dataart.spreadsheetanalytics.api.engine.IAuditor;
import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraph;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetAuditor;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.util.print.ExecutionGraphConsolePrinter;

public class CellGraphTMain {
    
    public static void main(String[] args) throws Exception {
        
        final String path = "src/main/resources/excel/1.xlsx";
        // TODO: this part  should somewhere in dataprovider and Class should be something like IWorkbook or IModel
        final XSSFWorkbook model = new XSSFWorkbook(path);
        
        
        final IEvaluator evaluator = new SpreadsheetEvaluator(model);
        final IAuditor auditor = new SpreadsheetAuditor(evaluator);
        
        IExecutionGraph graph = auditor.buildStaticExecutionGraph(model);
        
        ExecutionGraphConsolePrinter.print(graph);
    }

}
