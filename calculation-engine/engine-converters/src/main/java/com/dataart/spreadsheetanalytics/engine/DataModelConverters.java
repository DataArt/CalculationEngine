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

import static com.dataart.spreadsheetanalytics.engine.ConverterUtils.FORMULA_PREFIX;
import static com.dataart.spreadsheetanalytics.engine.ConverterUtils.isFormula;
import static com.dataart.spreadsheetanalytics.engine.Functions.getUdfFinder;
import static org.apache.poi.common.fork.ExecutionGraphBuilderUtils.createPoiNameRef;
import static org.apache.poi.common.fork.ExecutionGraphBuilderUtils.removeSheetFromNameRef;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Optional;

import org.apache.poi.ss.formula.EvaluationWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Name;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.api.model.IDmCell;
import com.dataart.spreadsheetanalytics.api.model.IDmRow;
import com.dataart.spreadsheetanalytics.api.model.IDsCell;
import com.dataart.spreadsheetanalytics.api.model.IDsRow;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.CellValue;
import com.dataart.spreadsheetanalytics.model.DataModel;
import com.dataart.spreadsheetanalytics.model.DmCell;
import com.dataart.spreadsheetanalytics.model.DmRow;

/**
 * Util methods for conversion to\from {@link IDataModel}.
 */
final class DataModelConverters {
    
    private DataModelConverters() {}

    /**
     * Converts an {@link InputStream} to {@link IDataModel}. Uses new {@link XSSFWorkbook} as proxy.
     * @see DataModelConverters#toDataModel(Workbook)
     */
    static IDataModel toDataModel(final InputStream workbook) {
        return toDataModel(ConverterUtils.newWorkbook(workbook));
    }
    
    /**
     * For given {@link Workbook} does convert everything to new {@link DataModel} structure.
     * Does copy all supported fields (for supported fields see {@link DataModel} class.
     */
    static IDataModel toDataModel(final Workbook workbook) {
        if (workbook == null) { return null; }
        
        //add custom functions information
        workbook.addToolPack(getUdfFinder());
        
        Sheet s = workbook.getSheetAt(0); //TODO: only one sheet is supported
        if (s == null) { return null; }
        
        IDataModel dm = new DataModel(s.getSheetName());
        
        for (int i = s.getFirstRowNum(); i <= s.getLastRowNum(); i++) {
            Row r = s.getRow(i);
            if (r == null) { continue; }
            
            DmRow row = new DmRow(i);
            dm.setRow(i, row);
            
            for (int j = r.getFirstCellNum(); j < r.getLastCellNum(); j++) {
                Cell c = r.getCell(j);
                if (c == null) { continue; }
                
                DmCell cell = new DmCell();
                row.setCell(j, cell);
                
                cell.setAddress(A1Address.fromRowColumn(i, j));
                cell.setContent(ConverterUtils.resolveCellValue(c));
            }
        }

        EvaluationWorkbook evaluationWbook = ConverterUtils.newEvaluationWorkbook(workbook);

        for (int nIdx = 0; nIdx < workbook.getNumberOfNames(); nIdx++) {
            Name name = workbook.getNameAt(nIdx);
            
            String reference = name.getRefersToFormula();
            if (reference == null) { continue; }

            if (A1Address.isAddress(removeSheetFromNameRef(reference))) {
                dm.setNamedAddress(name.getNameName(), A1Address.fromA1Address(removeSheetFromNameRef(reference)));
            } else if (isFormula(reference, evaluationWbook)) {
                dm.setNamedValue(name.getNameName(), new CellValue(ConverterUtils.FORMULA_PREFIX + reference));
            } else {
                dm.setNamedValue(name.getNameName(), CellValue.from(reference));
            }
        }

        return dm;
    }
    
    /** Converts {@link IDataSet} to the new {@link IDataModel}. */
    static IDataModel toDataModel(final IDataSet dataSet) {
        DataModel dataModel = new DataModel(dataSet.getName());
        
        for (IDsRow dsRow : dataSet) {
            DmRow dmRow = new DmRow(dsRow.index());
            
            for (IDsCell dsCell : dsRow) {
                DmCell dmCell = new DmCell();
                dmCell.setValue(Optional.of(dsCell.getValue()));
                dmCell.setAddress(A1Address.fromRowColumn(dsRow.index(), dsCell.index()));
                dmCell.setContent(dsCell.getValue());
                dmRow.setCell(dsCell.index(), dmCell);
            }
            dataModel.setRow(dsRow.index(), dmRow);
        }
        
        return dataModel;
    }

    /** Uses {@link DataModelConverters#toXlsxFile(IDataModel, InputStream)} with null formatting (no formatting). */
    static OutputStream toXlsxFile(final IDataModel dataModel) {
        ByteArrayOutputStream xlsx = new ByteArrayOutputStream();
        
        try { toWorkbook(dataModel, (Workbook) null).write(xlsx); }
        catch (IOException e) { throw new CalculationEngineException(e); }
        
        return xlsx;
    }
    
    /**
     * Uses {@link DataModelConverters#toWorkbook(IDataModel, InputStream)} with {@link ByteArrayOutputStream} as out stream
     * and new {@link XSSFWorkbook} as {@link InputStream} wrapper.
     */
    static OutputStream toXlsxFile(final IDataModel dataModel, final InputStream formatting) {
        ByteArrayOutputStream xlsx = new ByteArrayOutputStream();
        
        try { toWorkbook(dataModel, ConverterUtils.newWorkbook(formatting)).write(xlsx); }
        catch (IOException e) { throw new CalculationEngineException(e); }
        
        return xlsx;
    }
    
    /** Convertes plain {@link IDataModel} to plain new {@link XSSFWorkbook}. */
    static Workbook toWorkbook(final IDataModel dataModel) {
        return toWorkbook(dataModel, (Workbook) null);
    }
    
    /** Convertes plain {@link IDataModel} to new {@link XSSFWorkbook} with formatting provided. */
    static Workbook toWorkbook(final IDataModel dataModel, final Workbook formatting) {
        Workbook result = formatting == null ? ConverterUtils.newWorkbook() : ConverterUtils.clearContent(formatting);

        Sheet wbSheet = result.getSheet(dataModel.getName());
        if (wbSheet == null) { wbSheet = result.createSheet(dataModel.getName()); }

        dataModel.getNamedAddresses().forEach((k, v) -> {
            Name name = result.createName();
            name.setNameName(k);
            
            name.setRefersToFormula(createPoiNameRef(v.a1Address().address(), dataModel.getName()));
        });

        dataModel.getNamedValues().forEach((k, v) -> {
            Name name = result.createName();
            name.setNameName(k);
            
            String refString = v.get() == null ? "" : v.get().toString();
            if (refString.startsWith(FORMULA_PREFIX)) { refString = refString.substring(1); }
            
            name.setRefersToFormula(refString);
        });

        for (int rowIdx = dataModel.getFirstRowIndex(); rowIdx <= dataModel.getLastRowIndex(); rowIdx++) {
            IDmRow dmRow = dataModel.getRow(rowIdx);
            if (dmRow == null) { continue; }
            Row wbRow = wbSheet.getRow(rowIdx);
            if (wbRow == null) { wbRow = wbSheet.createRow(rowIdx); }
            
            for (int cellIdx = dmRow.getFirstColumnIndex(); cellIdx <= dmRow.getLastColumnIndex(); cellIdx++) {
                IDmCell dmCell = dmRow.getCell(cellIdx);
                if (dmCell == null) { continue; }
                
                Cell wbCell = wbRow.getCell(cellIdx);
                if (wbCell == null) { wbCell = wbRow.createCell(cellIdx); }
                
                ConverterUtils.populateCellValue(wbCell, dmCell.getContent());
            }
        }

        return result;
    }

}
