package com.dataart.spreadsheetanalytics.demo;

import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.api.model.IDsCell;
import com.dataart.spreadsheetanalytics.api.model.IDsRow;
import com.dataart.spreadsheetanalytics.engine.ExternalServices;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.engine.TempSqlDataSource;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.CellAddress;
import com.dataart.spreadsheetanalytics.model.DataModel;

public class QueryFunctionDemo {

    public static void main(String[] args) throws Exception {

        final String query = args[0];
        final String cellToEvaluate = args[1];

        final IDataModel model = new DataModel(query);
        
        ExternalServices external = ExternalServices.INSTANCE;
        
        //add datamodels to storage - demo only
        external.getDataModelStorage().addDataModel(model);
        //in memoty sql data source - demo only
        external.getSqlDataSourceHub().addSqlDataSource(new TempSqlDataSource());

        final ICellAddress addr = new CellAddress(model.dataModelId(), A1Address.fromA1Address(cellToEvaluate));
        final IEvaluator evaluator = new SpreadsheetEvaluator(model);
        ((SpreadsheetEvaluator) evaluator).loadCustomFunctions();

        final ICellValue cv = evaluator.evaluate(addr);
        System.out.println("Result: " + cv);
        
        IDataSet ds = external.getDataSetStorage().getDataSet("pers");
        
        for (IDsRow row : ds) {
            System.out.println();
            for (IDsCell cell : row) {
                System.out.print(cell.value());
                System.out.print(" | ");
            }
        }
    }

}
