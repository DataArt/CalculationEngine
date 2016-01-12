package com.dataart.spreadsheetanalytics.demo.main;

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
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraph;
import com.dataart.spreadsheetanalytics.demo.util.DemoUtil;
import com.dataart.spreadsheetanalytics.engine.Converters;
import com.dataart.spreadsheetanalytics.engine.DefineFunctionMeta;
import com.dataart.spreadsheetanalytics.engine.Functions;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetAuditor;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.engine.graph.ExecutionGraphConfig;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.CellAddress;

public class ExtendFunctionsDemo {

    public static void main(String[] args) throws Exception {

        final String excel = "src/main/resources/excel/define-funcexec/Modelexec_Test.xlsx";
        final List<String> cellsToEvaluate = new ArrayList<>(Arrays.asList("A2"));

        //prepare DataModel to work with
        final IDataModel model = Converters.toDataModel(new XSSFWorkbook(excel));

        DemoUtil.initCaches(model, excel);
        
        OtherFunctions.init();

        //create Evaluator
        final IEvaluator evaluator = new SpreadsheetEvaluator(model);

        //evaluate and save to map to print later
        Map<String, Object> values = new LinkedHashMap<>();
        for (String cell : cellsToEvaluate) {
            values.put(cell, evaluator.evaluate(new CellAddress(model.getDataModelId(), A1Address.fromA1Address(cell))));
        }

        //last cell
        final ICellAddress addr = new CellAddress(model.getDataModelId(), A1Address.fromA1Address(cellsToEvaluate.get(cellsToEvaluate.size() - 1)));

        //create Auditor
        final IAuditor auditor = new SpreadsheetAuditor(model);
        //build graph
        final IExecutionGraph graph = auditor.buildExecutionGraph(addr.a1Address(), ExecutionGraphConfig.DEFAULT);

        //print graph
        DemoUtil.generateVisJsData(graph);
        DemoUtil.plainprint(graph);

        //pring values\
        System.out.println("\n\n***********");
        for (String cell : values.keySet()) {
            System.out.println("Result of " + cell + " is: " + values.get(cell));
        }
    }
}

class OtherFunctions extends Functions {
    public static final String OTHER_PACKAGE_FUNCTIONS = "com.other.project.functions";

    public static void init() { //or non static init()
        Functions.add(Functions.loadCustomFunctions(OTHER_PACKAGE_FUNCTIONS));
        
        ExternalServices external = ExternalServices.INSTANCE;
        external.getDataModelAccessor().getAll().values().forEach(dm -> {
            try {
                Map<DefineFunctionMeta, IDataModel> defineModels = Converters.toMetaFunctions(dm, DefineFunctionMeta.class);
                defineModels.forEach((k, v) -> {
                    external.getMetaFunctionAccessor().add(k); //define meta info with link to DataModel
                    external.getDataModelAccessor().add(v); //define model
                });
            } catch (Exception e) { e.printStackTrace(); }
        });
    }
}