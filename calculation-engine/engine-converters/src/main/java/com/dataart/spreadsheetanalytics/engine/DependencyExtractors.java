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

import static com.dataart.spreadsheetanalytics.model.A1Address.fromRowColumn;
import static java.util.Collections.emptyList;
import static java.util.Collections.singletonList;
import static java.util.UUID.randomUUID;
import static org.apache.poi.ss.formula.FormulaParser.parse;
import static org.apache.poi.ss.formula.FormulaType.CELL;
import static org.apache.poi.ss.usermodel.Cell.CELL_TYPE_FORMULA;
import static org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook.create;

import java.io.InputStream;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import org.apache.poi.ss.formula.FormulaParseException;
import org.apache.poi.ss.formula.FormulaParsingWorkbook;
import org.apache.poi.ss.formula.ptg.AreaPtg;
import org.apache.poi.ss.formula.ptg.Ptg;
import org.apache.poi.ss.formula.ptg.RefPtg;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.model.A1RangeAddress;
import com.dataart.spreadsheetanalytics.model.DataModel;

/**
 * Util methods for Meta Information extraction or Excel minimization.
 */
final class DependencyExtractors {
    private static final Logger log = LoggerFactory.getLogger(DependencyExtractors.class);
    
    private DependencyExtractors() {}

    /** Invokes {@link #toDataModel(Workbook, ICellAddress)} with {@link IDataModel} converted to {@link Workbook}. */
    static IDataModel toDataModel(final IDataModel book, final ICellAddress address) {
        return toDataModel(DataModelConverters.toWorkbook(book), address);
    }
    
    /** Invokes {@link #toDataModel(Workbook, ICellAddress)} with {@link InputStream} converted to {@link Workbook}. */
    static IDataModel toDataModel(final InputStream book, final ICellAddress address) {
        return toDataModel(ConverterUtils.newWorkbook(book), address);
    }
    
    /**
     * Extracts {@link IDataModel} from {@link Workbook} at given {@link ICellAddress}.
     * Useful for formula. If given {@link ICellAddress} contains formula it can be parsed.
     * Based on this parsed information a new {@link IDataModel} might be created.
     */
    static IDataModel toDataModel(final Workbook book, final ICellAddress address) {
        if (book == null || address == null) { return null; }
        if (address instanceof A1RangeAddress) { throw new CalculationEngineException("A1RangeAddress is not supported, only one cell can be converted to DataModel."); }
        
        Sheet s = book.getSheetAt(0); /* TODO: only one sheet is supported */
        Row r = s.getRow(address.row());
        if (r == null) { return null; }
        Cell c = r.getCell(address.column());
        if (c == null || CELL_TYPE_FORMULA != c.getCellType()) { return null; }

        return createDataModelFromCell(s, create((XSSFWorkbook) book), fromRowColumn(c.getRowIndex(), c.getColumnIndex()));
    }
    
    /** Invokes {@link #toDataModels(Workbook, String)} with {@link IDataModel} converted to {@link Workbook}. */
    static List<IDataModel> toDataModels(final IDataModel book, final String function) {
        return toDataModels(DataModelConverters.toWorkbook(book), function);
    }
    
    /** Invokes {@link #toDataModels(Workbook, String)} with {@link InputStream} converted to {@link Workbook}. */
    static List<IDataModel> toDataModels(final InputStream book, final String function) {
        return toDataModels(ConverterUtils.newWorkbook(book), function);
    }
    
    /**
     * Extracts {@link IDataModel} from {@link Workbook} for given function name.
     * Useful for formula with particular functions. Does scan IDataModel for exact formula use and create new 
     * {@link IDataModel} for every formula found.
     */
    static List<IDataModel> toDataModels(final Workbook book, final String function) {
        if (book == null || function == null) { return emptyList(); }
        List<IDataModel> list = new LinkedList<>();

        final FormulaParsingWorkbook parsingBook = create((XSSFWorkbook) book);
        
        Sheet s = book.getSheetAt(0); /* TODO: only one sheet is supported */
        for (Row r : s) {
            for (Cell c : r) {
                if (c == null || CELL_TYPE_FORMULA != c.getCellType()) { continue; }

                try {
                    if (ConverterUtils.isFunctionInFormula(c.getCellFormula(), function))
                        { list.add(createDataModelFromCell(s, parsingBook, fromRowColumn(c.getRowIndex(), c.getColumnIndex()))); } }
                catch (FormulaParseException e) { log.warn("Warning while parsing excel formula. Probably this is OK.", e); }
            }
        }
        
        return list;
    }
    
    /** Invokes {@link #toMetaFunctions(Workbook, Class)} with {@link IDataModel} converted to {@link Workbook}. */
    static <T extends FunctionMeta> Map<T, IDataModel> toMetaFunctions(IDataModel book, Class<T> metaClass) {
        return toMetaFunctions(DataModelConverters.toWorkbook(book), metaClass);
    }
    
    /** Invokes {@link #toMetaFunctions(Workbook, Class)} with {@link InputStream} converted to {@link Workbook}. */
    static <T extends FunctionMeta> Map<T, IDataModel> toMetaFunctions(InputStream book, Class<T> metaClass) {
        return toMetaFunctions(ConverterUtils.newWorkbook(book), metaClass);    
    }

    /**
     * Does the same logic as {@link #toDataModels(Workbook, String)}, but for each new {@link IDataModel} created
     * also created an instance of given {@link FunctionMeta}.
     */
    static <T extends FunctionMeta> Map<T, IDataModel> toMetaFunctions(Workbook book, Class<T> metaClass) {
        Map<T, IDataModel> map = new HashMap<>();

        book.addToolPack(Functions.getUdfFinder());
        final FormulaParsingWorkbook parsingBook = create((XSSFWorkbook) book);
        
        Sheet s = book.getSheetAt(0); /* TODO: only one sheet is supported */
        for (Row r : s) {
            for (Cell c : r) {
                if (c == null || CELL_TYPE_FORMULA != c.getCellType()) { continue; }
                
                try {
                    String formula = c.getCellFormula();
                    String keyword = metaClass.getAnnotation(FunctionMeta.MetaFunctionKeyword.class).value();

                    if (!formula.startsWith(keyword)) { continue; }

                    IDataModel dataModel = createDataModelFromCell(s, parsingBook, fromRowColumn(c.getRowIndex(), c.getColumnIndex()));
                    T meta = createAttributeFunctionMeta(metaClass, formula, dataModel);
                    
                    map.put(meta, dataModel);
                }
                catch (Exception e) { log.debug("Warning while parsing custom excel formula. It is OK.", e); }
            }
        }
        
        return map;
    }

    /** Based on given cell address creates new {@link IDataModel} with all parsed cell dependencies. */
    static IDataModel createDataModelFromCell(Sheet sheet, FormulaParsingWorkbook workbook, ICellAddress address) {
        IDataModel dm = new DataModel(randomUUID().toString());
        resolveCellDependencies(address, sheet, workbook).forEach(cell -> ConverterUtils.copyCell(cell, sheet, dm));
        return dm;
    }

    /** For given cell address gives a list of this cell's dependencies. */
    static List<ICellAddress> resolveCellDependencies(ICellAddress cellAddress, Sheet sheet, FormulaParsingWorkbook workbook) {
        Row row = sheet.getRow(cellAddress.row());
        if (row == null) { return emptyList(); }
        Cell cell = row.getCell(cellAddress.column());
        if (cell == null) { return emptyList(); }
        
        if (CELL_TYPE_FORMULA != cell.getCellType()) { return singletonList(cellAddress); }
        
        List<ICellAddress> dependencies = new LinkedList<>();
        
        for (Ptg ptg : parse(cell.getCellFormula(), workbook, CELL, 0)) { /* TODO: only one sheet is supported */
            
            if (ptg instanceof RefPtg) {
                RefPtg ref = (RefPtg) ptg;
                
                dependencies.addAll(resolveCellDependencies(fromRowColumn(ref.getRow(), ref.getColumn()), sheet, workbook));
            
            } else if (ptg instanceof AreaPtg) {
                AreaPtg area = (AreaPtg) ptg;
                
                for (int r = area.getFirstRow(); r <= area.getLastRow(); r++) {
                    for (int c = area.getFirstColumn(); c <= area.getLastColumn(); c++) {
                        dependencies.addAll(resolveCellDependencies(fromRowColumn(r, c), sheet, workbook));
                    }
                }
            }
            
            dependencies.add(cellAddress);
        }
        
        return dependencies;
    }
    
    /** Create an instance of new {@link FunctionMeta} and fills it with minimum information. */
    static <T extends FunctionMeta> T createAttributeFunctionMeta(Class<T> metaClass, String formula, IDataModel model) throws Exception {
        T meta = (T) metaClass.newInstance().parse(formula);
        meta.setDataModelId(model.getDataModelId());
        if (meta.getName() == null) { meta.setName(model.getName()); }

        return meta;
    }

}
