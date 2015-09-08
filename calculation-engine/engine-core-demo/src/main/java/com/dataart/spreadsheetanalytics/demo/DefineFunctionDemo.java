package com.dataart.spreadsheetanalytics.demo;

import com.dataart.spreadsheetanalytics.api.engine.IDataProvider;
import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.engine.DataProvider;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.CellAddress;
import com.dataart.spreadsheetanalytics.model.DataModel;

public class DefineFunctionDemo {

    public static void main(String[] args) throws Exception {

        final String funcexec = "src/main/resources/excel/define-funcexec/funcexec.xlsx";
        final String cellToEvaluate = "C2";

        final IDataModel modelFuncexec = new DataModel(funcexec);
        
        IDataProvider dataProvider = DataProvider.getDummyDataProvider();

        final ICellAddress addr = new CellAddress(modelFuncexec.dataModelId(), A1Address.fromA1Address(cellToEvaluate));
        final IEvaluator evaluator = new SpreadsheetEvaluator(modelFuncexec);
        ((SpreadsheetEvaluator) evaluator).loadCustomFunctions(dataProvider);

        final ICellValue cv = evaluator.evaluate(addr);
        System.out.println(cv.toString());

    }

}
