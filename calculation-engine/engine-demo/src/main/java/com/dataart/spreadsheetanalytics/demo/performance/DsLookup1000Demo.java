package com.dataart.spreadsheetanalytics.demo.performance;

import java.nio.file.Paths;

import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.dataart.spreadsheetanalytics.api.engine.ExternalServices;
import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.engine.DataSetScope;
import com.dataart.spreadsheetanalytics.engine.PoiFileConverter;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.CellAddress;
import com.dataart.spreadsheetanalytics.model.DataModel;

public class DsLookup1000Demo {

    public static void main(String[] args) throws Exception {

        if (args.length < 3) {
            System.err.println("Excel file path, Start and Finish Cell Addresses, please!");
            return;
        }

        final String dslookup = args[0]; // "src/main/resources/excel/DsLookup/DsLookup.xlsx";
        final Integer startCell = Integer.valueOf(args[1]); // "1";
        final Integer endCell = Integer.valueOf(args[2]); // "1000"

        // Application startup -> read from DB
        final XSSFWorkbook excel = new XSSFWorkbook(dslookup);
        final IDataSet dataSet = PoiFileConverter.toDataSet(excel);

        // Application action -> Button click
        final IDataModel dataModel = new DataModel(Paths.get(dslookup).getFileName().toString(), dslookup);

        ExternalServices external = ExternalServices.INSTANCE;

        external.getDataSetStorage().saveDataSet(dataSet, DataSetScope.LOCAL);
        final IEvaluator evaluator = new SpreadsheetEvaluator((DataModel) dataModel);

        long dslookupTime = evaluateColumn("F", startCell, endCell, evaluator, dataSet);
        long vlookupTime = evaluateColumn("H", startCell, endCell, evaluator, dataSet);

        System.out.println("1000 DsLookup took " + dslookupTime + " nanoseconds");
        System.out.println("1000 VLookup took " + vlookupTime + " nanoseconds");
    }

    static long evaluateColumn(String prefix, int start, int finish, IEvaluator evaluator, IDataSet dataSet) throws Exception {
        long result = 0l;
        for (int i = start; i < finish; i++) {
            String cellToEvaluate = prefix + i;
            final ICellAddress addr = new CellAddress(dataSet.dataModelId(), A1Address.fromA1Address(cellToEvaluate));
            long time1 = System.nanoTime();
            evaluator.evaluate(addr);
            long time2 = System.nanoTime();
            result += time2 - time1;
        }
        return result;
    }

}
