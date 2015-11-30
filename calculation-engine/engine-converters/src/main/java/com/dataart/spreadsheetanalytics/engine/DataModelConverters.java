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
import java.util.Calendar;
import java.util.Date;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDmCell;
import com.dataart.spreadsheetanalytics.api.model.IDmRow;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.DataModel;
import com.dataart.spreadsheetanalytics.model.DmCell;
import com.dataart.spreadsheetanalytics.model.DmRow;

final class DataModelConverters {
    
    private DataModelConverters() {}

    /**
     * Converts an {@link InputStream} to {@link IDataModel}. Uses new {@link XSSFWorkbook} as proxy.
     * @see DataModelConverters#toDataModel(Workbook)
     */
    static IDataModel toDataModel(final InputStream workbook) throws IOException {
        return toDataModel(new XSSFWorkbook(workbook));
    }
    
    /**
     * For given {@link Workbook} does convert everything to new {@link DataModel} structure.
     * Does copy all supported fields (for supported fields see {@link DataModel} class.
     */
    static IDataModel toDataModel(final Workbook workbook) throws IOException {
        if (workbook == null) { return null; }
        Sheet s = workbook.getSheetAt(0); //TODO: only one sheet is supported
        if (s == null) { return null; }
        
        DataModel dm = new DataModel(s.getSheetName());
        
        for (int i = s.getFirstRowNum(); i <= s.getLastRowNum(); i++) {
            Row r = s.getRow(i);
            DmRow row = r == null ? null : new DmRow();
            dm.setRow(i, row);
            if (r == null) { continue; }
            
            for (int j = r.getFirstCellNum(); j < r.getLastCellNum(); j++) {
                Cell c = r.getCell(j);
                DmCell cell = c == null ? null : new DmCell();
                row.setCell(j, cell);
                if (c == null) { continue; }
                
                cell.address(A1Address.fromRowColumn(i, j));
                cell.alias("TODO"/*TODO*/);
                cell.content(ConverterUtils.resolveCellValue(c));
            }
        }
        
        return dm;
    }
    
    /**
     * Uses {@link DataModelConverters#toXlsxFile(IDataModel, InputStream)} with null formatting (no formatting).
     */
    static OutputStream toXlsxFile(final IDataModel dataModel) throws IOException {
        ByteArrayOutputStream xlsx = new ByteArrayOutputStream();
        toWorkbook(dataModel, (Workbook) null).write(xlsx);
        return xlsx;
    }
    
    /**
     * Uses {@link DataModelConverters#toWorkbook(IDataModel, InputStream)} with {@link ByteArrayOutputStream} as out stream
     * and new {@link XSSFWorkbook} as {@link InputStream} wrapper.
     */
    static OutputStream toXlsxFile(final IDataModel dataModel, final InputStream formatting) throws IOException {
        ByteArrayOutputStream xlsx = new ByteArrayOutputStream();
        toWorkbook(dataModel, new XSSFWorkbook(formatting)).write(xlsx);
        return xlsx;
    }
    
    /**
     * Convertes plain {@link IDataModel} to plain new {@link XSSFWorkbook}.
     */
    static Workbook toWorkbook(final IDataModel dataModel) throws IOException {
        /*TODO*/
        return toWorkbook(dataModel, null);
    }
    
    /**
     * Convertes plain {@link IDataModel} to new {@link XSSFWorkbook} with formatting provided.
     */
    static Workbook toWorkbook(final IDataModel dataModel, final Workbook formatting) throws IOException {
        Workbook result = new XSSFWorkbook();
        Sheet sheet = result.createSheet(dataModel.name());
        for (int rowId = 0 ; rowId < dataModel.length(); rowId++) {
            IDmRow dmRow = dataModel.getRow(rowId);
            Row row = sheet.createRow(rowId);
            for (int cellId = 0 ; cellId < dmRow.width(); cellId++) {
                IDmCell dmCell = dmRow.getCell(cellId);
                Cell cell = row.createCell(cellId);
                populateCellWithCellValue(cell, dmCell.content().get());
            }
        }
        return result;
    }

    static void populateCellWithCellValue(Cell cell, Object value) {
        if (value instanceof Boolean) { cell.setCellValue((Boolean) value); }
        else if (value instanceof Double) { cell.setCellValue((Double) value); }
        else if (value instanceof String) { cell.setCellValue((String) value); }
        else if (value instanceof Calendar) { cell.setCellValue((Calendar) value); }
        else if (value instanceof Date) { cell.setCellValue((Date) value); }
    }
    
}
