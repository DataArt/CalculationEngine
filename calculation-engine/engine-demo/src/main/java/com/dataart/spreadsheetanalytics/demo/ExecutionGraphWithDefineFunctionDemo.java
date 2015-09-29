package com.dataart.spreadsheetanalytics.demo;

import java.nio.file.Paths;

import com.dataart.spreadsheetanalytics.api.engine.ExternalServices;
import com.dataart.spreadsheetanalytics.api.engine.IAuditor;
import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraph;
import com.dataart.spreadsheetanalytics.engine.FileSystemDataModelLocation;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetAuditor;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.CellAddress;
import com.dataart.spreadsheetanalytics.model.DataModel;

public class ExecutionGraphWithDefineFunctionDemo {

    public static void main(String[] args) throws Exception {

        final String storage = args[0]; //"src/main/resources/excel/define-funcexec/";
        final String funcexec = args[1]; // "src/main/resources/excel/define-funcexec/funcexec.xlsx";
        final String cellToEvaluate = args[2]; //"C2";

        final IDataModel modelFuncexec = new DataModel(funcexec);
        
        final FileSystemDataModelLocation location = new FileSystemDataModelLocation();
        location.setPath(Paths.get(storage));
        
        ExternalServices external = ExternalServices.INSTANCE;
        
        //add datamodels to storage - demo only
        external.getDataModelStorage().addDataModels(location);
        //add define functions to storage - demo only
        external.getDefineFunctionsCache().updateDefineFunctions(external.getDataModelStorage().getDataModels());

        final ICellAddress addr = new CellAddress(modelFuncexec.dataModelId(), A1Address.fromA1Address(cellToEvaluate));
        final IEvaluator evaluator = new SpreadsheetEvaluator(modelFuncexec);
        ((SpreadsheetEvaluator) evaluator).loadCustomFunctions();

        final IAuditor auditor = new SpreadsheetAuditor((SpreadsheetEvaluator) evaluator);
        final IExecutionGraph graph = auditor.buildDynamicExecutionGraph(addr);
        
        ExecutionGraphDemo.generateVisJsData(graph);
        ExecutionGraphDemo.plainprint(graph);

    }

}
