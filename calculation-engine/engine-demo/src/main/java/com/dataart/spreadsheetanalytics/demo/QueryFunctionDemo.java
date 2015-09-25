package com.dataart.spreadsheetanalytics.demo;

import com.dataart.spreadsheetanalytics.api.engine.IDataProvider;
import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.api.model.IDsCell;
import com.dataart.spreadsheetanalytics.api.model.IDsRow;
import com.dataart.spreadsheetanalytics.engine.DataProvider;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.CellAddress;
import com.dataart.spreadsheetanalytics.model.DataModel;

public class QueryFunctionDemo {

    public static void main(String[] args) throws Exception {

        final String query = args[0];
        final String cellToEvaluate = args[1];

        final IDataModel model = new DataModel(query);
        
        final IDataProvider dataProvider = DataProvider.createEmptyDataProvider();
        ((DataProvider) dataProvider).initTempSqlDataSource();
        dataProvider.addDataModel(model);

        final ICellAddress addr = new CellAddress(model.dataModelId(), A1Address.fromA1Address(cellToEvaluate));
        final IEvaluator evaluator = new SpreadsheetEvaluator(model);
        ((SpreadsheetEvaluator) evaluator).loadCustomFunctions(dataProvider);

        final ICellValue cv = evaluator.evaluate(addr);
        System.out.println("Result: " + cv);
        
        IDataSet ds = dataProvider.getDataSet("pers");
        
        for (IDsRow row : ds) {
            System.out.println();
            for (IDsCell cell : row) {
                System.out.print(cell.value());
                System.out.print(" | ");
            }
        }
    }

}
