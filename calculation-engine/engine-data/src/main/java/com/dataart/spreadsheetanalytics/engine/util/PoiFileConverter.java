package com.dataart.spreadsheetanalytics.engine.util;

import static org.apache.poi.common.execgraph.ExecutionGraphBuilderUtils.cellValueToObject;

import java.io.IOException;

import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;

import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.model.DataSet;
import com.dataart.spreadsheetanalytics.model.DsCell;
import com.dataart.spreadsheetanalytics.model.DsRow;

public class PoiFileConverter {

    public static IDataSet toDataSet(Workbook workbook) throws IOException {
        Sheet sheet = workbook.getSheetAt(0); //TODO: this works only for single sheet documents
        
        DataSet result = new DataSet(sheet.getSheetName());
        
        for (int i = sheet.getFirstRowNum(); i <= sheet.getLastRowNum(); i++) {
            DsRow dsRow = result.createRow(); 
            Row row = sheet.getRow(i);
            for (int j = row.getFirstCellNum(); j <= row.getLastCellNum(); j++) {
                DsCell cell = dsRow.createCell();
                cell.value(cellValueToObject(row.getCell(j)));
            }
        }
        
        return result;
    }

}
