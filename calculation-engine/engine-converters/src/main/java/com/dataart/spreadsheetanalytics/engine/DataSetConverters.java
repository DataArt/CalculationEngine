/*
Copyright 2015 DataArt Apps, Inc

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
package com.dataart.spreadsheetanalytics.engine;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;

import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.api.model.IDsCell;
import com.dataart.spreadsheetanalytics.api.model.IDsRow;
import com.dataart.spreadsheetanalytics.model.DataSet;

final class DataSetConverters {
    
    private DataSetConverters() {}
    
    static IDataSet toDataSet(final InputStream workbook) {
        return toDataSet(ConverterUtils.newWorkbook(workbook));
    }
    
    /* TODO: throw exception of formula is found or add flag 'ignore formulas' */
    static IDataSet toDataSet(final Workbook workbook) {
        Sheet sheet = workbook.getSheetAt(0); //TODO: this works only for single sheet documents
        DataSet dataSet = new DataSet(sheet.getSheetName());
        
        for (int i = sheet.getFirstRowNum(); i <= sheet.getLastRowNum(); i++) {
            IDsRow dsRow = dataSet.addRow(); 
            Row row = sheet.getRow(i);
            for (int j = row.getFirstCellNum(); j < row.getLastCellNum(); j++) {
                IDsCell cell = dsRow.addCell();
                cell.setValue(ConverterUtils.resolveCellValue(row.getCell(j)));
            }
        }
        return dataSet;
    }
    
    static OutputStream toXlsxFile(final IDataSet dataSet) {
        ByteArrayOutputStream xlsx = new ByteArrayOutputStream();
        
        try { toWorkbook(dataSet, (Workbook) null).write(xlsx); }
        catch (IOException e) { throw new CalculationEngineException(e); }
        
        return xlsx;
    }
    
    static OutputStream toXlsxFile(final IDataSet dataSet, final InputStream formatting) {
        ByteArrayOutputStream xlsx = new ByteArrayOutputStream();
        
        try { toWorkbook(dataSet, ConverterUtils.newWorkbook(formatting)).write(xlsx); }
        catch (IOException e) { throw new CalculationEngineException(e); }
        
        return xlsx;
    }
        
    static Workbook toWorkbook(final IDataSet dataSet) {
        return toWorkbook(dataSet, (Workbook) null);
    }
    
    //TODO: rewrite to use common code with IDataModel
    static Workbook toWorkbook(final IDataSet dataSet, final Workbook formatting) {
        Workbook result = formatting == null ? ConverterUtils.newWorkbook() : ConverterUtils.clearContent(formatting);
        
        Sheet sheet = result.createSheet(dataSet.getName());
        for (IDsRow row : dataSet) {
            Row wbRow = sheet.createRow(row.index() - 1);
            for (IDsCell cell : row) {
                Cell wbCell = wbRow.createCell(cell.index() - 1);
                ConverterUtils.populateCellValue(wbCell, cell.getValue());
            }
        }
        
        return result;        
    }

}
