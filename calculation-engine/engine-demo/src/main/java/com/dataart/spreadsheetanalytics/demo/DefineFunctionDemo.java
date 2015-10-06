package com.dataart.spreadsheetanalytics.demo;

import java.nio.file.Paths;

import com.dataart.spreadsheetanalytics.api.engine.ExternalServices;
import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.CellAddress;
import com.dataart.spreadsheetanalytics.model.DataModel;

public class DefineFunctionDemo {

    public static void main(String[] args) throws Exception {

        final String funcexec = args[1]; // "src/main/resources/excel/define-funcexec/funcexec.xlsx";
        final String cellToEvaluate = args[2]; //"C2";

        final IDataModel modelFuncexec = new DataModel(Paths.get(funcexec).getFileName().toString(), funcexec);
        
        ExternalServices external = ExternalServices.INSTANCE;
        
        //add define functions to storage - demo only
        external.getAttributeFunctionsCache().updateDefineFunctions(external.getDataModelStorage().getDataModels());
        //copy data models to cache - demo only
        external.getDataModelStorage().warmUpDataModelsForExecutionCache(external.getAttributeFunctionsCache().getDefineFunctions());

        final ICellAddress addr = new CellAddress(modelFuncexec.dataModelId(), A1Address.fromA1Address(cellToEvaluate));
        final IEvaluator evaluator = new SpreadsheetEvaluator(modelFuncexec);
        ((SpreadsheetEvaluator) evaluator).loadCustomFunctions();

        final ICellValue cv = evaluator.evaluate(addr);
        System.out.println(cv);

    }

}
