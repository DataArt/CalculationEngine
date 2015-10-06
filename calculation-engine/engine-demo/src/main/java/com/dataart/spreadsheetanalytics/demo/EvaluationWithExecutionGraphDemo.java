package com.dataart.spreadsheetanalytics.demo;

import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.dataart.spreadsheetanalytics.api.engine.ExternalServices;
import com.dataart.spreadsheetanalytics.api.engine.IAuditor;
import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraph;
import com.dataart.spreadsheetanalytics.api.model.ILazyDataSet;
import com.dataart.spreadsheetanalytics.engine.PoiFileConverter;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetAuditor;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.engine.dataset.SqlDataSet;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.CellAddress;
import com.dataart.spreadsheetanalytics.model.DataModel;

public class EvaluationWithExecutionGraphDemo {

    public static void main(String[] args) throws Exception {

        if (args.length < 2) {
            System.err.println("Excel file path and Cell Address, please!");
            return;
        }
        
        final String excel = args[0]; // "src/main/resources/excel/define-funcexec/funcexec.xlsx";
        final List<String> cellsToEvaluate = new ArrayList<>(Arrays.asList(args));
        cellsToEvaluate.remove(0);

        final IDataModel model = new DataModel(Paths.get(excel).getFileName().toString(), excel);
        
        final ExternalServices external = ExternalServices.INSTANCE;

        try {
            final XSSFWorkbook xssf = new XSSFWorkbook(excel);
            final IDataSet dataSet = PoiFileConverter.toDataSet(xssf, "ExcelDataSet");
            external.getDataSetStorage().saveDataSet(dataSet);
        } catch (Exception e) { }
        
        //add datamodels to storage
        external.getDataModelStorage().addDataModel(model);
        //add define functions to storage
        external.getAttributeFunctionsCache().updateDefineFunctions(external.getDataModelStorage().getDataModels());
        //copy data models to cache
        external.getDataModelStorage().warmUpDataModelsForExecutionCache(external.getAttributeFunctionsCache().getDefineFunctions());
        
        //in memoty sql data source
        external.getDataSourceHub().addSqlDataSource(new TempSqlDataSource());
        //add sql dataset to storage
        final String sql = "SELECT * FROM PERSONS WHERE AGE = ? OR AGE = ? OR FIRSTNAME = '?'";
        final ILazyDataSet sqlDataSet = new SqlDataSet("P", sql);
        external.getDataSetStorage().saveDataSet(sqlDataSet);

        //create Evaluator
        final IEvaluator evaluator = new SpreadsheetEvaluator(model);
        //register custon functions in model
        ((SpreadsheetEvaluator) evaluator).loadCustomFunctions();
        
        Map<String, Object> values = new LinkedHashMap<>();
        for (String cell : cellsToEvaluate) {
            values.put(cell, evaluator.evaluate(new CellAddress(model.dataModelId(), A1Address.fromA1Address(cell))));
        }
        
        final ICellAddress addr = new CellAddress(model.dataModelId(), A1Address.fromA1Address(cellsToEvaluate.get(cellsToEvaluate.size() - 1)));

        final IAuditor auditor = new SpreadsheetAuditor((SpreadsheetEvaluator) evaluator);
        final IExecutionGraph graph = auditor.buildDynamicExecutionGraph(addr);
        
        ExecutionGraphDemo.generateVisJsData(graph);
        ExecutionGraphDemo.plainprint(graph);

        System.out.println("\n\n***********");
        for (String cell : values.keySet()) {
            System.out.println("Result of " + cell + " is: " + values.get(cell));
        }
        
    }
}
