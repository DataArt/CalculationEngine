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

import static org.apache.poi.ss.usermodel.Cell.CELL_TYPE_BLANK;
import static org.apache.poi.ss.usermodel.Cell.CELL_TYPE_BOOLEAN;
import static org.apache.poi.ss.usermodel.Cell.CELL_TYPE_ERROR;
import static org.apache.poi.ss.usermodel.Cell.CELL_TYPE_FORMULA;
import static org.apache.poi.ss.usermodel.Cell.CELL_TYPE_NUMERIC;
import static org.apache.poi.ss.usermodel.Cell.CELL_TYPE_STRING;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Arrays;

import org.apache.poi.ss.formula.eval.ErrorEval;
import org.apache.poi.ss.formula.eval.NotImplementedException;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.FormulaError;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.api.model.IDsCell;
import com.dataart.spreadsheetanalytics.api.model.IDsRow;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.CellValue;
import com.dataart.spreadsheetanalytics.model.DataModel;
import com.dataart.spreadsheetanalytics.model.DataSet;
import com.dataart.spreadsheetanalytics.model.DmCell;
import com.dataart.spreadsheetanalytics.model.DmRow;
import com.dataart.spreadsheetanalytics.model.DsCell;
import com.dataart.spreadsheetanalytics.model.DsRow;

public final class ExcelFileConverters {
    
    public static final String FORMULA_PREFIX = "=";
    
    private ExcelFileConverters() {}

    public static IDataModel toDataModel(final InputStream workbook) throws IOException {
        return toDataModel(new XSSFWorkbook(workbook));
    }
    
    public static IDataModel toDataModel(final Workbook workbook) throws IOException {
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
                cell.content(resolveCellValue(c));
            }
        }
        
        return dm;
    }
    
    /* TODO: throw exception of formula is found or add flag 'ignore formulas' */
    public static IDataSet toDataSet(final Workbook workbook) throws IOException {
        Sheet sheet = workbook.getSheetAt(0); //TODO: this works only for single sheet documents
        
        DataSet result = new DataSet(sheet.getSheetName());
        
        for (int i = sheet.getFirstRowNum(); i <= sheet.getLastRowNum(); i++) {
            DsRow dsRow = result.createRow(); 
            Row row = sheet.getRow(i);
            for (int j = row.getFirstCellNum(); j < row.getLastCellNum(); j++) {
                DsCell cell = dsRow.createCell();
                cell.value(resolveCellValue(row.getCell(j)));
            }
        }
        return result;
    }

    public static OutputStream toXlsxFile(final IDataModel dataModel) throws IOException {
        ByteArrayOutputStream xlsx = new ByteArrayOutputStream();
        toWorkbook(dataModel, (Workbook) null).write(xlsx);
        return xlsx;
    }
    
    public static OutputStream toXlsxFile(final IDataModel dataModel, final InputStream formatting) throws IOException {
        ByteArrayOutputStream xlsx = new ByteArrayOutputStream();
        toWorkbook(dataModel, formatting).write(xlsx);
        return xlsx;
    }
    
    public static OutputStream toXlsxFile(final IDataSet dataSet) throws IOException {
        ByteArrayOutputStream xlsx = new ByteArrayOutputStream();
        toWorkbook(dataSet, (Workbook) null).write(xlsx);
        return xlsx;
    }
    
    public static OutputStream toXlsxFile(final IDataSet dataSet, final InputStream formatting) throws IOException {
        ByteArrayOutputStream xlsx = new ByteArrayOutputStream();
        toWorkbook(dataSet, formatting).write(xlsx);
        return xlsx;
    }
    
    public static Workbook toWorkbook(final IDataModel dataModel) throws IOException {
        /*TODO*/
        throw new NotImplementedException("You cannot convert from IDataModel to Workbook yet.");
    }
    
    public static Workbook toWorkbook(final IDataModel dataModel, final Workbook formatting) throws IOException {
        /*TODO*/
        throw new NotImplementedException("You cannot convert from IDataModel to Workbook yet.");
    }
    
    public static Workbook toWorkbook(final IDataModel dataModel, final InputStream formatting) throws IOException {
        /*TODO*/
        throw new NotImplementedException("You cannot convert from IDataModel to Workbook yet.");
    }
        
    public static Workbook toWorkbook(final IDataSet dataSet) throws IOException {
        return toWorkbook(dataSet, (Workbook) null);
    }
    
    public static Workbook toWorkbook(final IDataSet dataSet, final InputStream formatting) throws IOException {
        return toWorkbook(dataSet, new XSSFWorkbook(formatting));
    }
    
    public static Workbook toWorkbook(final IDataSet dataSet, final Workbook formatting) throws IOException {
        Workbook result = formatting == null ? new XSSFWorkbook() : clearContent(formatting);
        
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
    
    /**
     * Gets an instance of a Workbook ({@link XSSFWorkbook}. 
     * Then creates copy of original file.
     * Then clears all the cell values, but preserves formatting.
     */
    public static Workbook clearContent(final Workbook book) throws IOException {
        ByteArrayOutputStream originalOut = new ByteArrayOutputStream();
        book.write(originalOut);
        InputStream originalIn = new ByteArrayInputStream(Arrays.copyOf(originalOut.toByteArray(), originalOut.size()));

        Workbook w = new XSSFWorkbook(originalIn);
        Sheet s = w.getSheetAt(0); //TODO: only one sheet is supported
        
        for (int i = s.getFirstRowNum(); i <= s.getLastRowNum(); i++) {
            Row r = s.getRow(i);
            if (r == null) { continue; }
            
            for (int j = r.getFirstCellNum(); j <= r.getLastCellNum(); j++) {
                Cell c = r.getCell(j);
                if (c == null) { continue; }
                
                c.setCellType(CELL_TYPE_BLANK);
            }
        }
        
        return w;
    }

    public static void populateCellValue(final Cell cell, final Object value) {
        if (value instanceof String) { cell.setCellValue((String) value); }
        else if (value instanceof Boolean) { cell.setCellValue(((Boolean) value).booleanValue()); }
        else if (value instanceof Double) { cell.setCellValue(((Double) value).doubleValue()); } 
        else if (value instanceof ErrorEval) { cell.setCellValue(((ErrorEval) value).getErrorString()); }
    }

    public static ICellValue resolveCellValue(Cell c) {
        if (c == null) { return CellValue.BLANK; }
        
        switch (c.getCellType()) {
            case CELL_TYPE_NUMERIC: { return new CellValue(c.getNumericCellValue()); }
            case CELL_TYPE_STRING: { return new CellValue(c.getStringCellValue()); }
            case CELL_TYPE_BOOLEAN: { return new CellValue(c.getBooleanCellValue()); }
            case CELL_TYPE_ERROR: { return new CellValue(FormulaError.forInt(c.getErrorCellValue()).getString()); }
            case CELL_TYPE_BLANK: { return CellValue.BLANK; }
            case CELL_TYPE_FORMULA: { return new CellValue(String.format("%s%s", FORMULA_PREFIX, c.getCellFormula())); }
            default: { throw new IllegalArgumentException(String.format("Type %s is not supported.", c.getCellType())); }
        }
    }
    
    public static Class<? extends Object> resolveCellType(Cell c) {
        switch (c.getCellType()) {
            case CELL_TYPE_BLANK: { return Object.class; }
            case CELL_TYPE_FORMULA: case CELL_TYPE_STRING: case CELL_TYPE_ERROR: { return String.class; }
            case CELL_TYPE_BOOLEAN: { return Boolean.class; }
            case CELL_TYPE_NUMERIC: { return Double.class; }
            default: { throw new IllegalArgumentException(String.format("Type %s is not supported.", c.getCellType())); }
        }
    }
}
