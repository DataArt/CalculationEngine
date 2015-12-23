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

import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.api.model.IDmCell;
import com.dataart.spreadsheetanalytics.api.model.IDmRow;
import com.dataart.spreadsheetanalytics.api.model.IDsCell;
import com.dataart.spreadsheetanalytics.api.model.IDsRow;
import com.dataart.spreadsheetanalytics.model.DataSet;

/**
 * Util methods for conversion to\from {@link IDataSet}.
 */
final class DataSetConverters {
    
    private DataSetConverters() {}
    
    /** Invokes {@link #toDataSet(Workbook)} with new {@link Workbook}. */
    static IDataSet toDataSet(final InputStream workbook) {
        return toDataSet(ConverterUtils.newWorkbook(workbook));
    }
    
    /**
     * Converts a {@link Workbook} to new {@link IDataSet}.
     * Ignores empty rows.
     * 
     * @throws {@link CalculationEngineException} if {@link Workbook} contains formulas or Cell references.
     */
    static IDataSet toDataSet(final Workbook workbook) {
        Sheet sheet = workbook.getSheetAt(0); //TODO: this works only for single sheet documents
        DataSet dataSet = new DataSet(sheet.getSheetName());
        
        for (int i = sheet.getFirstRowNum(); i <= sheet.getLastRowNum(); i++) {
            IDsRow dsRow = dataSet.addRow();
            Row row = sheet.getRow(i);
            for (int j = row.getFirstCellNum(); j < row.getLastCellNum(); j++) {
                Cell wbCell = row.getCell(j);
                if (wbCell != null && wbCell.getCellType() == Cell.CELL_TYPE_FORMULA) {
                    throw new CalculationEngineException("DataSet should not contain formulas");
                }
                IDsCell cell = dsRow.addCell();
                cell.setValue(ConverterUtils.resolveCellValue(wbCell));
            }
        }
        return dataSet;
    }

    /**
     * Converts an {@link IDataModel} to a new {@link IDataSet}.
     * Ignores empty rows.
     * Uses {@link IDmCell#getValue()} for {@link IDsCell} values.
     */
    static IDataSet toDataSet(final IDataModel dataModel) {
        if (dataModel == null) { return null; }
        
        IDataSet dataSet = new DataSet(dataModel.getName());
        if (dataModel.rowCount() == 0) { return dataSet; }

        for (IDmRow dmRow : dataModel) {            
            IDsRow dsRow = dataSet.addRow();
            for (IDmCell dmCell : dmRow) {
                IDsCell dsCell = dsRow.addCell(dmCell.getAddress().column());
                if (dmCell.getValue().isPresent()) {
                    dsCell.setValue(dmCell.getValue().get());
                }
            }
        }
        
        return dataSet;
    }
    
    /**
     * Converts {@link IDataSet} to new {@link Workbook}, 
     * then writes this Workbook to new {@link ByteArrayOutputStream}.
     */
    static OutputStream toXlsxFile(final IDataSet dataSet) {
        ByteArrayOutputStream xlsx = new ByteArrayOutputStream();
        
        try { toWorkbook(dataSet, (Workbook) null).write(xlsx); }
        catch (IOException e) { throw new CalculationEngineException(e); }
        
        return xlsx;
    }
    
    /**
     * Converts {@link IDataSet} to {@link Workbook},
     * then writes this Workbook to new {@link ByteArrayOutputStream}.
     * Middle-state {@link Workbook} is created from @param formatting.
     */
    static OutputStream toXlsxFile(final IDataSet dataSet, final InputStream formatting) {
        ByteArrayOutputStream xlsx = new ByteArrayOutputStream();
        
        try { toWorkbook(dataSet, ConverterUtils.newWorkbook(formatting)).write(xlsx); }
        catch (IOException e) { throw new CalculationEngineException(e); }
        
        return xlsx;
    }

    /** Converts {@link IDataSet} to new {@link Workbook}. */
    static Workbook toWorkbook(final IDataSet dataSet) {
        return toWorkbook(dataSet, (Workbook) null);
    }
    
    /**
     * Converts {@link IDataSet} to {@link Workbook}.
     * The result {@link Workbook} is created from @param formatting.
     */
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
