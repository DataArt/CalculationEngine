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
package com.dataart.spreadsheetanalytics.engine; //NOPMD

import static org.apache.poi.ss.usermodel.Cell.CELL_TYPE_BOOLEAN;
import static org.apache.poi.ss.usermodel.Cell.CELL_TYPE_ERROR;
import static org.apache.poi.ss.usermodel.Cell.CELL_TYPE_FORMULA;
import static org.apache.poi.ss.usermodel.Cell.CELL_TYPE_NUMERIC;
import static org.apache.poi.ss.usermodel.Cell.CELL_TYPE_STRING;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import org.apache.poi.ss.formula.EvaluationCell;
import org.apache.poi.ss.formula.EvaluationName;
import org.apache.poi.ss.formula.EvaluationSheet;
import org.apache.poi.ss.formula.EvaluationWorkbook;
import org.apache.poi.ss.formula.FormulaParser;
import org.apache.poi.ss.formula.FormulaParsingWorkbook;
import org.apache.poi.ss.formula.FormulaType;
import org.apache.poi.ss.formula.ptg.NamePtg;
import org.apache.poi.ss.formula.ptg.NameXPtg;
import org.apache.poi.ss.formula.ptg.Ptg;
import org.apache.poi.ss.formula.udf.AggregatingUDFFinder;
import org.apache.poi.ss.formula.udf.UDFFinder;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DateUtil;
import org.apache.poi.ss.usermodel.FormulaError;
import org.apache.poi.ss.usermodel.Name;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.google.common.base.Predicates;
import com.google.common.collect.Iterators;

/**
 * Util methods and classes for convertion from {@link Workbook} to {@link EvaluationWorkbook}.
 * Since {@link Workbook} is just a container for data, but for evaluation instance of {@link EvaluationWorkbook} is needed,
 * this converter methods should do this step.
 */
final class PoiWorkbookConverters {

    private PoiWorkbookConverters() {}

    /**
     * Converter {@link Workbook} to {@link EvaluationWorkbook}.
     * The final classes are hidden from external use.
     */
    public static EvaluationWorkbook toEvaluationWorkbook(Workbook workbook) {
        return new PoiProxyWorkbook(workbook);
    }

    /**
     * Returns {@link EvaluationCell} of given {@link EvaluationWorkbook}.
     * {@link EvaluationWorkbook} should be created with {@link #toEvaluationWorkbook(Workbook)} method.
     */
    public static EvaluationCell getEvaluationCell(EvaluationWorkbook evaluationWorkbook, ICellAddress addr) {
        return ((PoiProxyWorkbook) evaluationWorkbook).getSheet(0).getCell(addr.row(), addr.column());
    }
}

class PoiProxyWorkbook implements EvaluationWorkbook, Iterable<PoiProxySheet> {

    private PoiProxySheet sheet; //NOPMD
    private Map<Integer, PoiProxyName> names; //NOPMD
    EvaluationWorkbook ewb;

    public PoiProxyWorkbook(final Workbook wb) {
        ewb = XSSFEvaluationWorkbook.create(XSSFWorkbook.class.cast(wb));
        this.sheet = makeSheet(wb, (FormulaParsingWorkbook) ewb);
        this.names = makeNames(wb, ewb);
    }

    @Override public Iterator<PoiProxySheet> iterator() { return Collections.<PoiProxySheet>singletonList(this.sheet).listIterator(); }

    private Map<Integer, PoiProxyName> makeNames(Workbook wb, EvaluationWorkbook ewb) {
        Map<Integer, PoiProxyName> names = new HashMap<>();

        for (int nIdx = 0; nIdx < wb.getNumberOfNames(); nIdx++) {
            Name wbName = wb.getNameAt(nIdx);

            Ptg[] ptgs;
            String refersToFormula;
            if (!wbName.isFunctionName() && wbName.getRefersToFormula() != null) { //NOPMD
                refersToFormula = wbName.getRefersToFormula();
                ptgs = FormulaParser.parse(refersToFormula, (FormulaParsingWorkbook) ewb, FormulaType.NAMEDRANGE, 0 /*TODO: sheet index*/);
            } else {
                ptgs = null;
                refersToFormula = null;
            }

            names.put(nIdx, new PoiProxyName(wbName.getNameName(), wbName.isFunctionName(), refersToFormula != null, ptgs, wbName.isFunctionName(), nIdx));
        }

        return names;
    }

    private PoiProxySheet makeSheet(Workbook wb, FormulaParsingWorkbook ewb) {
        Sheet wbSheet = wb.getSheetAt(0);
        PoiProxySheet sheet = new PoiProxySheet(wbSheet.getSheetName());

        for (int r = 0; r <= wbSheet.getLastRowNum(); r++) {
            Row wbSheetRow = wbSheet.getRow(r);
            if (wbSheetRow == null) { continue; }
                
            for (int c = 0; c <= wbSheetRow.getLastCellNum(); c++) {
                Cell wbSheetRowCell = wbSheetRow.getCell(c);
                if (wbSheetRowCell == null) { continue; }
                
                final Ptg[] tokens = CELL_TYPE_FORMULA == wbSheetRowCell.getCellType()
                        ? FormulaParser.parse(wbSheetRowCell.getCellFormula(), ewb, FormulaType.CELL, 0)
                        : null;
                sheet.setCell(PoiProxyCell.makeCell(sheet, wbSheetRowCell, tokens));
            }
        }
        
        return sheet;
    }

    @Override public String getSheetName(int i) { return this.sheet.getName(); }
    @Override public int getSheetIndex(EvaluationSheet evaluationSheet) {
        return 0;
    }
    @Override public int getSheetIndex(String s) {
        if (sheet.getName().equals(s)) { return 0; }
        else { return -1; }
    }
    @Override public EvaluationSheet getSheet(int i) {
        return this.sheet;
    }
    @Override public ExternalSheet getExternalSheet(int i) {
        return ewb.getExternalSheet(i);
    }

    @Override public ExternalSheet getExternalSheet(String firstSheetName, String lastSheetName, int externalWorkbookNumber) {
        return ewb.getExternalSheet(firstSheetName, lastSheetName, externalWorkbookNumber);
    }

    @Override public int convertFromExternSheetIndex(int i) { return 0; }
    @Override public ExternalName getExternalName(int i, int i1) { throw new CalculationEngineException("external names are not supported"); }
    @Override public ExternalName getExternalName(String s, String s1, int i) { throw new CalculationEngineException("external names are not supported"); }

    @Override
    public EvaluationName getName(NamePtg namePtg) { return this.names.get(namePtg.getIndex()); }

    @Override
    public EvaluationName getName(String name, int sheetIndex) {
        return this.names.values()
                         .stream()
                         .filter(n -> n.getNameText().equalsIgnoreCase(name))
                         .findAny().orElse(null);
    }

    @Override public String resolveNameXText(NameXPtg nameXPtg) { throw new CalculationEngineException(); }

    public Ptg[] getFormulaTokens(EvaluationCell evaluationCell) {
        if (evaluationCell instanceof PoiProxyCell) {
            return ((PoiProxyCell) evaluationCell).getPtgs();
        }
        throw new CalculationEngineException(evaluationCell.toString());
    }

    @Override public UDFFinder getUDFFinder() {
        AggregatingUDFFinder result = new AggregatingUDFFinder(UDFFinder.DEFAULT);
        result.add(Functions.getUdfFinder());
        return result;
    }

    @Override public String getFormulaString(EvaluationCell cell) { return ((PoiProxyCell) cell).getCellFormula(); }

    public void updateCell(Cell cell) {
        if (this.sheet == null || cell == null) { return; }

        this.sheet.setCell(PoiProxyCell.makeCell(this.sheet, cell, null));
    }
    
}

class PoiProxyCell implements EvaluationCell {
    private PoiProxySheet sheet;
    private int row;
    private int col;
    private Ptg[] ptgs;
    private ICellValue value; //NOPMD

    private final Object identity;

    private PoiProxyCell(PoiProxySheet sheet, int row, int col, ICellValue value, Ptg[] ptgs) { //NOPMD
        this.sheet = sheet;
        this.row = row;
        this.col = col;
        this.value = value;
        this.ptgs = ptgs;
        this.identity = new PoiProxyCellKey(sheet.getSheetIndex(), sheet.getName(), row, col);
    }

    public static PoiProxyCell makeCell(PoiProxySheet sheet, Cell cell, Ptg[] ptgs) {
        final int row = cell.getRowIndex();
        final int col = cell.getColumnIndex();
        return new PoiProxyCell(sheet, row, col, ConverterUtils.resolveCellValue(cell), ptgs);
    }

    public Ptg[] getPtgs() { return ptgs; } //NOPMD
    
    @Override public Object getIdentityKey() { return identity; }
    @Override public EvaluationSheet getSheet() { return sheet; }
    @Override public int getRowIndex() { return row; }
    @Override public int getColumnIndex() { return col; }
    @Override public int getCellType() { return ConverterUtils.resolveCellType(this.value); }

    public String getCellFormula() {
        if (CELL_TYPE_FORMULA != ConverterUtils.resolveCellType(this.value)) { return null; }
        return ((String) this.value.get()).replaceFirst("=", "");
    }

    public double getNumericCellValue() {
        if (CELL_TYPE_NUMERIC != ConverterUtils.resolveCellType(this.value)) { throw new CalculationEngineException("Trying to get numeric value from non-numeric cell."); }
        return (Double) this.value.get();
    }

    public String getStringCellValue() {
        if (CELL_TYPE_STRING != ConverterUtils.resolveCellType(this.value)) { throw new CalculationEngineException("Trying to get string value from non-string cell."); }
        return (String) this.value.get();
    }

    public boolean getBooleanCellValue() {
        if (CELL_TYPE_BOOLEAN != ConverterUtils.resolveCellType(this.value)) { throw new CalculationEngineException("Trying to get boolean value from non-boolean cell."); }
        return (Boolean) this.value.get();
    }

    public int getErrorCellValue() {
        if (CELL_TYPE_ERROR != ConverterUtils.resolveCellType(this.value)) { throw new CalculationEngineException("Trying to get error value from non-error cell."); }
        return FormulaError.forString((String) this.value.get()).getCode();
    }

    public int getCachedFormulaResultType() {
        throw new CalculationEngineException("Does not support Cached Formula Results.");
    }

    public Date getDateCellValue() {
        return DateUtil.getJavaDate(getNumericCellValue());
    }

    private static class PoiProxyCellKey {

        private final int sheetIndex;
        private final String name;
        private final int row;
        private final int col;
        private final int hashCode;

        public PoiProxyCellKey(int sheetIndex, String name, int row, int col) {
            this.sheetIndex = sheetIndex;
            this.name = name;
            this.row = row;
            this.col = col;
            hashCode = hashCode(sheetIndex, name, row, col);
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) { return true; }
            if (o == null || getClass() != o.getClass()) { return false; }
            PoiProxyCellKey that = (PoiProxyCellKey) o;
            return Objects.equals(sheetIndex, that.sheetIndex) &&
                    Objects.equals(row, that.row) &&
                    Objects.equals(col, that.col) &&
                    Objects.equals(hashCode, that.hashCode) &&
                    Objects.equals(name, that.name);
        }

        @Override public int hashCode() { return hashCode; }
        
        private static int hashCode(int sheetIndex, String name, int row, int col) {
            return String.format("%s_%s_%s_%s", sheetIndex, name, row, col).hashCode();
        }
    }
}

class PoiProxySheet implements EvaluationSheet, Iterable<PoiProxyCell> {

    private final String name;

    public PoiProxySheet(String name) {
        this.name = name;
    }

    private static final int
            LOGW = 4, W = 1 << LOGW, MW = W - 1, SIZEW = 1 << (4 * LOGW), // cols
            LOGH = 5, H = 1 << LOGH, MH = H - 1, SIZEH = 1 << (4 * LOGH); // rows

    PoiProxyCell[][][][] tile0 = new PoiProxyCell[W * H][][][];

    public String getName() { return name; }
    public int getSheetIndex() { return 0; }
    
    public void setCellAt(int r, int c, PoiProxyCell value) {

        if (c < 0 || SIZEW <= c || r < 0 || SIZEH <= r) { return; }

        int index0 = (((c >> (3 * LOGW)) & MW) << LOGH) | ((r >> (3 * LOGH)) & MH);
        PoiProxyCell[][][] tile1 = tile0[index0];
        if (tile1 == null) {
            if (value == null) { return; }
            else { tile1 = tile0[index0] = new PoiProxyCell[W * H][][]; }
        }
        
        int index1 = (((c >> (2 * LOGW)) & MW) << LOGH) | ((r >> (2 * LOGH)) & MH);
        PoiProxyCell[][] tile2 = tile1[index1];
        if (tile2 == null) {
            if (value == null) { return; }
            else { tile2 = tile1[index1] = new PoiProxyCell[W * H][]; }
        }
        
        int index2 = (((c >> (1 * LOGW)) & MW) << LOGH) | ((r >> (1 * LOGH)) & MH);
        PoiProxyCell[] tile3 = tile2[index2];
        if (tile3 == null) {
            if (value == null) { return; }
            else { tile3 = tile2[index2] = new PoiProxyCell[W * H]; }
        }
        
        int index3 = ((c & MW) << LOGH) | (r & MH);
        tile3[index3] = value;
    }

    public PoiProxyCell getCellAt(int r, int c) {
        if (c < 0 || SIZEW <= c || r < 0 || SIZEH <= r) { return null; }
        
        PoiProxyCell[][][] tile1 = tile0[(((c >> (3 * LOGW)) & MW) << LOGH) | ((r >> (3 * LOGH)) & MH)];
        if (tile1 == null) { return null; }
        
        PoiProxyCell[][] tile2 = tile1[(((c >> (2 * LOGW)) & MW) << LOGH) | ((r >> (2 * LOGH)) & MH)];
        if (tile2 == null) { return null; }
        
        PoiProxyCell[] tile3 = tile2[(((c >> (1 * LOGW)) & MW) << LOGH) | ((r >> (1 * LOGH)) & MH)];
        if (tile3 == null) { return null; }
        
        return tile3[((c & MW) << LOGH) | (r & MH)];
    }

    public void setCell(PoiProxyCell cell) {
        this.setCellAt(cell.getRowIndex(), cell.getColumnIndex(), cell);
    }

    public EvaluationCell getCell(int rowIndex, int columnIndex) {
        return this.getCellAt(rowIndex, columnIndex);
    }

    @Override public Iterator<PoiProxyCell> iterator() { return new PoiProxyCellIterator(this.tile0); }

}

class PoiProxyCellIterator implements Iterator<PoiProxyCell> {
    private final Iterator<PoiProxyCell> iterator;

    public PoiProxyCellIterator(PoiProxyCell[][][][] tile0) {
        final List<Iterator<PoiProxyCell>> iterators = new ArrayList<>(10);
        for (PoiProxyCell[][][] tile1 : tile0) {
            if (tile1 == null) { continue; }

            for (PoiProxyCell[][] tile2 : tile1) {
                if (tile2 == null) { continue; }
                
                for (PoiProxyCell[] tile3 : tile2) {
                    if (tile3 == null) { continue; }
                    
                    iterators.add(Iterators.filter(Iterators.forArray(tile3), Predicates.notNull()));
                }
            }
        }

        this.iterator = Iterators.concat(iterators.iterator());
    }

    @Override public boolean hasNext() { return iterator.hasNext(); }
    @Override public PoiProxyCell next() { return iterator.next(); }
}

class PoiProxyName implements EvaluationName {
    private final String nameText;
    private final boolean isFunctionName;
    private final boolean hasFormula;
    private final Ptg[] nameDefinition;
    private final boolean isRange;
    private final NamePtg namePtg;

    public PoiProxyName(String nameText, boolean isFunctionName, boolean hasFormula, Ptg[] nameDefinition, boolean isRange, int nameIndex) { //NOPMD
        this.nameText = nameText;
        this.isFunctionName = isFunctionName;
        this.hasFormula = hasFormula;
        this.nameDefinition = nameDefinition;
        this.isRange = isRange;
        this.namePtg = new NamePtg(nameIndex);
    }

    @Override public String getNameText() { return nameText; }
    @Override public boolean isFunctionName() { return isFunctionName; }
    @Override public boolean hasFormula() { return hasFormula; }
    @Override public Ptg[] getNameDefinition() { return nameDefinition; } //NOPMD
    @Override public boolean isRange() { return isRange; }
    @Override public NamePtg createPtg() { return namePtg; }
}