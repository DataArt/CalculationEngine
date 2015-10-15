package com.dataart.spreadsheetanalytics.engine.util;

import static org.apache.poi.common.execgraph.ExecutionGraphBuilderUtils.cellValueToObject;

import java.io.IOException;

import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.model.DataSet;
import com.dataart.spreadsheetanalytics.model.DsCell;
import com.dataart.spreadsheetanalytics.model.DsRow;

public class PoiFileConverter {

    public static IDataSet toDataSet(XSSFWorkbook workbook) throws IOException {
        XSSFSheet sheet = workbook.getSheetAt(0); //TODO: this works only for single sheet documents
        
        DataSet result = new DataSet(sheet.getSheetName());
        
        for (int i = sheet.getFirstRowNum(); i <= sheet.getLastRowNum(); i++) {
            DsRow dsRow = result.createRow(); 
            XSSFRow row = sheet.getRow(i);
            for (short j = row.getFirstCellNum(); j <= row.getLastCellNum(); j++) {
                DsCell cell = dsRow.createCell();
                cell.value(cellValueToObject(row.getCell(j)));
            }
        }
        
        return result;
    }

}
