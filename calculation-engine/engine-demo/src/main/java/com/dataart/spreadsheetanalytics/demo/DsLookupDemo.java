package com.dataart.spreadsheetanalytics.demo;

import java.nio.file.Paths;

import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.dataart.spreadsheetanalytics.api.engine.ExternalServices;
import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.engine.DataSetScope;
import com.dataart.spreadsheetanalytics.engine.PoiFileConverter;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.CellAddress;
import com.dataart.spreadsheetanalytics.model.DataModel;

public class DsLookupDemo {

    public static void main(String[] args) throws Exception {
        
        if (args.length < 2) {
            System.err.println("Excel file path and Cell Address, please!");
            return;
        }
        
        final String dslookup = args[0]; //"src/main/resources/excel/DsLookup/DsLookup.xlsx";
        final String cellToEvaluate = args[1]; //"F7";

        //Application startup -> read from DB
        final XSSFWorkbook excel = new XSSFWorkbook(dslookup);
        final IDataSet dataSet = PoiFileConverter.toDataSet(excel, "ExcelDataSet");
                
        //Application action -> Button click
        final IDataModel dataModel = new DataModel(Paths.get(dslookup).getFileName().toString(), dslookup);

        ExternalServices external = ExternalServices.INSTANCE;
        
        external.getDataSetStorage().saveDataSet(dataSet, DataSetScope.LOCAL);
        final ICellAddress addr = new CellAddress(dataSet.dataModelId(), A1Address.fromA1Address(cellToEvaluate));
        final IEvaluator evaluator = new SpreadsheetEvaluator(dataModel);        
        ((SpreadsheetEvaluator) evaluator).loadCustomFunctions();
        
        final ICellValue cv = evaluator.evaluate(addr);
        System.out.println(cv);

    }

}
