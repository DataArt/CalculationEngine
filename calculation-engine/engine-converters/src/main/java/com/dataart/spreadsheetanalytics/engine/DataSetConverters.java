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
import com.dataart.spreadsheetanalytics.model.DsCell;
import com.dataart.spreadsheetanalytics.model.DsRow;

final class DataSetConverters {
    
    private DataSetConverters() {}
    
    static IDataSet toDataSet(final InputStream workbook) throws IOException {
        return toDataSet(ConverterUtils.newWorkbook(workbook));
    }
    
    /* TODO: throw exception of formula is found or add flag 'ignore formulas' */
    static IDataSet toDataSet(final Workbook workbook) throws IOException {
        Sheet sheet = workbook.getSheetAt(0); //TODO: this works only for single sheet documents
        DataSet dataSet = new DataSet(sheet.getSheetName());
        
        for (int i = sheet.getFirstRowNum(); i <= sheet.getLastRowNum(); i++) {
            DsRow dsRow = dataSet.createRow(); 
            Row row = sheet.getRow(i);
            for (int j = row.getFirstCellNum(); j < row.getLastCellNum(); j++) {
                DsCell cell = dsRow.createCell();
                cell.value(ConverterUtils.resolveCellValue(row.getCell(j)));
            }
        }
        return dataSet;
    }
    
    static OutputStream toXlsxFile(final IDataSet dataSet) throws IOException {
        ByteArrayOutputStream xlsx = new ByteArrayOutputStream();
        toWorkbook(dataSet, (Workbook) null).write(xlsx);
        return xlsx;
    }
    
    static OutputStream toXlsxFile(final IDataSet dataSet, final InputStream formatting) throws IOException {
        ByteArrayOutputStream xlsx = new ByteArrayOutputStream();
        toWorkbook(dataSet, ConverterUtils.newWorkbook(formatting)).write(xlsx);
        return xlsx;
    }
        
    static Workbook toWorkbook(final IDataSet dataSet) throws IOException {
        return toWorkbook(dataSet, (Workbook) null);
    }
    
    static Workbook toWorkbook(final IDataSet dataSet, final Workbook formatting) throws IOException {
        Workbook result = formatting == null ? ConverterUtils.newWorkbook() : ConverterUtils.clearContent(formatting);
        
        Sheet sheet = result.createSheet(dataSet.name());
        for (IDsRow row : dataSet) {
            Row wbRow = sheet.createRow(row.index() - 1);
            for (IDsCell cell : row) {
                Cell wbCell = wbRow.createCell(cell.index() - 1);
                ConverterUtils.populateCellValue(wbCell, cell.value());
            }
        }
        
        return result;        
    }

}
