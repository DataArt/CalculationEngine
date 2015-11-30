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

import static java.util.Arrays.copyOf;
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

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.FormulaError;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.model.CellValue;
import com.dataart.spreadsheetanalytics.model.DmCell;

    public final class ConverterUtils {
    
    public static final String FORMULA_PREFIX = "=";
    private static final String POI_FUNCTION_PREFIX = "_xlfn.";
    
    private ConverterUtils() {}

    /**
     * {@link #clearContent(Workbook)} with new {@link XSSFWorkbook}.
     */
    static OutputStream clearContent(InputStream workbook) throws IOException {
        ByteArrayOutputStream xlsx = new ByteArrayOutputStream();
        clearContent(new XSSFWorkbook(workbook)).write(xlsx);
        return xlsx;
    }
    
    /**
     * Gets an instance of a Workbook ({@link XSSFWorkbook}, creates copy of original file, 
     * clears all the cell values, but preserves formatting.
     */
    static Workbook clearContent(final Workbook book) throws IOException {
        ByteArrayOutputStream originalOut = new ByteArrayOutputStream();
        book.write(originalOut);
        InputStream originalIn = new ByteArrayInputStream(copyOf(originalOut.toByteArray(), originalOut.size()));

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

    /**
     * Inserts a value to a Cell based on a value type (class).
     */
    static void populateCellValue(final Cell cell, final ICellValue value) {
        if (cell == null) { return; }
        
        if (String.class == value.type()) { cell.setCellValue((String) value.get()); }
        else if (Boolean.class == value.type()) { cell.setCellValue(((Boolean) value.get())); }
        else if (Double.class == value.type()) { cell.setCellValue(((Double) value.get())); } 
        else { throw new IllegalArgumentException(String.format("Type of value %s is not supported: %s", value, value.getClass().getSimpleName())); }
    }

    /**
     * Returns the new {@link CellValue} from provided {@link Cell}.
     */
    static ICellValue resolveCellValue(Cell c) {
        if (c == null) { return CellValue.BLANK; }
        
        switch (c.getCellType()) {
            case CELL_TYPE_NUMERIC: { return CellValue.from(c.getNumericCellValue()); }
            case CELL_TYPE_STRING: { return CellValue.from(c.getStringCellValue()); }
            case CELL_TYPE_BOOLEAN: { return CellValue.from(c.getBooleanCellValue()); }
            case CELL_TYPE_ERROR: { return CellValue.from(FormulaError.forInt(c.getErrorCellValue()).getString()); }
            case CELL_TYPE_BLANK: { return CellValue.BLANK; }
            case CELL_TYPE_FORMULA: { return CellValue.from(String.format("%s%s", FORMULA_PREFIX, c.getCellFormula())); }
            default: { throw new IllegalArgumentException(String.format("Type %s is not supported.", c.getCellType())); }
        }
    }
    
    /**
     * Returns a type of given {@link Cell} value.
     */
    static Class<? extends Object> resolveCellType(Cell c) {
        switch (c.getCellType()) {
            case CELL_TYPE_BLANK: { return Object.class; }
            case CELL_TYPE_FORMULA: case CELL_TYPE_STRING: case CELL_TYPE_ERROR: { return String.class; }
            case CELL_TYPE_BOOLEAN: { return Boolean.class; }
            case CELL_TYPE_NUMERIC: { return Double.class; }
            default: { throw new IllegalArgumentException(String.format("Type %s is not supported.", c.getCellType())); }
        }
    }
    
    /**
     * Does cell of a given address copy from {@link Sheet} to {@link IDataModel}. 
     */
    static void copyCell(ICellAddress address, Sheet from, IDataModel to) {
        if (from == null) { return; }
        Row fromRow = from.getRow(address.row());
        if (fromRow == null) { return; }
        Cell fromCell = fromRow.getCell(address.column());
        if (fromCell == null) { return; }
        
        DmCell toCell = new DmCell();
        toCell.address(address);
        toCell.alias("TODO"); /*TODO*/
        toCell.content(resolveCellValue(fromCell));
        
        to.setCell(address, toCell);
    }

    static boolean isFunctionInFormula(String formula, String function) {
        String filteredFormula = formula.replace(POI_FUNCTION_PREFIX, "");
        return filteredFormula.startsWith(function) && filteredFormula.replace(function, "").startsWith("(");
    }
 
}
