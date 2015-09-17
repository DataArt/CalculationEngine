package com.dataart.spreadsheetanalytics.demo;

import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.CellAddress;
import com.dataart.spreadsheetanalytics.model.CellValue;
import com.dataart.spreadsheetanalytics.model.DataModel;

public class CellEvaluatorDemo {
    
    public static void main(String[] args) throws Exception {
        
        if (args.length != 2) {
            System.err.println("Excel file path and Cell Address, please!");
            return;
        }

        final String path = args[0];
        final String address = args[1];

        final IDataModel model = new DataModel(path);
        
        final IEvaluator evaluator = new SpreadsheetEvaluator(model);
        ((SpreadsheetEvaluator) evaluator).loadCustomFunctions(null);
        
        final ICellAddress addr = new CellAddress(model.dataModelId(), A1Address.fromA1Address(address));
        
        final ICellValue value = evaluator.evaluate(addr);
        
        System.out.println("Evaluation result:" + CellValue.fromCellValueToString(value));
        
    }
        
}
