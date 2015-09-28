package com.dataart.spreadsheetanalytics.demo;

import com.dataart.spreadsheetanalytics.api.engine.IDataProvider;
import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.engine.DataModelScope;
import com.dataart.spreadsheetanalytics.engine.DataProvider;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.CellAddress;
import com.dataart.spreadsheetanalytics.model.DataModel;
import com.dataart.spreadsheetanalytics.engine.ExcelDataFileUtil;

public class DsLookupDemo {

    public static void main(String[] args) throws Exception {
        
        if (args.length < 2) {
            System.err.println("Excel file path and Cell Address, please!");
            return;
        }
        
        final String dslookup = args[0]; //"src/main/resources/excel/DsLookup/DsLookup.xlsx";
        final String cellToEvaluate = args[1]; //"F7";

        final IDataSet dataSet = ExcelDataFileUtil.createDataSetFromExcelDocumentSheet(dslookup);
        final IDataModel dataModel = new DataModel(dslookup);
        final IDataProvider dataProvider = DataProvider.createEmptyDataProvider();        
        dataProvider.saveDataSet(dataSet, DataModelScope.LOCAL);
        // TODO In this class we instantiate Workbook twice 
        // 1) in createDataSetFromExcelDocumentSheet 
        // 2) in DataModel
        // Think about creating DataSet instance in the DataEngine object
        // For example change getDataModelSheet to getDataSet
        final ICellAddress addr = new CellAddress(dataSet.dataModelId(), A1Address.fromA1Address(cellToEvaluate));
        final IEvaluator evaluator = new SpreadsheetEvaluator(dataModel);        
        ((SpreadsheetEvaluator) evaluator).loadCustomFunctions(dataProvider);
        
        final ICellValue cv = evaluator.evaluate(addr);
        System.out.println(cv);

    }

}
