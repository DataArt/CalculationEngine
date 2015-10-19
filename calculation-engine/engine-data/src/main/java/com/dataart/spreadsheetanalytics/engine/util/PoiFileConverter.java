package com.dataart.spreadsheetanalytics.engine.util;

import static org.apache.poi.common.execgraph.ExecutionGraphBuilderUtils.cellValueToObject;

import java.io.IOException;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.api.model.IDsCell;
import com.dataart.spreadsheetanalytics.api.model.IDsRow;
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
    
    public static Workbook toWorkbook(IDataSet dataSet) throws IOException {
        Workbook result = new XSSFWorkbook();
        Sheet sheet = result.createSheet(dataSet.name());
        for (IDsRow row : dataSet) {
            Row wbRow = sheet.createRow(row.index() - 1);
            for (IDsCell cell : row) {
                Cell wbCell = wbRow.createCell(cell.index() - 1);
                populateCellValue(wbCell, cell.value());
            }
        }
        return result;
    }

    private static void populateCellValue(Cell cell, Object value) {
        if (value instanceof String) {
            cell.setCellValue((String) value);
        } else if (value instanceof Boolean) {
            cell.setCellValue(((Boolean) value).booleanValue());
        } else if (value instanceof Double) {
            cell.setCellValue(((Double) value).doubleValue());
        }
    }
}
