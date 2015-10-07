package com.dataart.spreadsheetanalytics.demo.main;

import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.dataart.spreadsheetanalytics.api.engine.ExternalServices;
import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.api.model.IDsCell;
import com.dataart.spreadsheetanalytics.api.model.IDsRow;
import com.dataart.spreadsheetanalytics.api.model.ILazyDataSet;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.engine.dataset.SqlDataSet;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.CellAddress;
import com.dataart.spreadsheetanalytics.model.DataModel;

public class QueryFunctionDemo {

    public static void main(String[] args) throws Exception {

        final String query = args[0];
        final List<String> cellsToEvaluate = new ArrayList<>(Arrays.asList(args));
        cellsToEvaluate.remove(0);
        final String dslookupAddress = cellsToEvaluate.remove(cellsToEvaluate.size() - 1);

        final IDataModel model = new DataModel(Paths.get(query).getFileName().toString(), query);
        
        ExternalServices external = ExternalServices.INSTANCE;
        
        //in memoty sql data source - demo only
        external.getDataSourceHub().addSqlDataSource(new TempSqlDataSource());
        //add define functions to storage - demo only
        final String sql = "SELECT * FROM PERSONS WHERE AGE = ? OR AGE = ? OR FIRSTNAME = '?'";
        final ILazyDataSet sqlDataSet = new SqlDataSet("P", sql);
        external.getDataSetStorage().saveDataSet(sqlDataSet);

        final IEvaluator evaluator = new SpreadsheetEvaluator((DataModel) model);
        
        System.out.println("QUERY function with INDEX function:");
        for (String cellToEvaluate : cellsToEvaluate) {
            final ICellAddress addr = new CellAddress(model.dataModelId(), A1Address.fromA1Address(cellToEvaluate));

            final ICellValue cv = evaluator.evaluate(addr);
            System.out.println("Result: " + cv);            
        }

        IDataSet ds = external.getDataSetStorage().getDataSet("pers");

        System.out.println();
        System.out.println("Result DataSet of QUERY function with parameters:");
        for (IDsRow row : ds) {
            for (IDsCell cell : row) {
                System.out.print(cell.value());
                System.out.print(" | ");
            }
            System.out.println();
        }
        
        System.out.println();
        System.out.println("DSLOOKUP with DataSet from QUERY function:");
        final ICellAddress addr = new CellAddress(model.dataModelId(), A1Address.fromA1Address(dslookupAddress));
        final ICellValue cv = evaluator.evaluate(addr);
        System.out.println("Result: " + cv);
    }

}

