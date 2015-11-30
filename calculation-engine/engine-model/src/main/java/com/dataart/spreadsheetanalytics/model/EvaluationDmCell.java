package com.dataart.spreadsheetanalytics.model;

import org.apache.poi.ss.formula.EvaluationCell;
import org.apache.poi.ss.formula.EvaluationSheet;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.FormulaError;

import com.dataart.spreadsheetanalytics.api.model.ICellValue;


class EvaluationDmCell implements EvaluationCell {
    
    protected final DmCell original;
    protected final EvaluationDataModel dataModel;
    
    public EvaluationDmCell(DmCell cell, EvaluationDataModel evalDataModel) {
        dataModel = evalDataModel;
        original = cell;
    }

    @Override
    public Object getIdentityKey() {
        return original;
    }

    @Override
    public EvaluationSheet getSheet() {
        return dataModel;
    }

    @Override
    public int getRowIndex() {
        return original.address.row();
    }

    @Override
    public int getColumnIndex() {
        return original.address.column();
    }

    @Override
    public int getCellType() {
        ICellValue value = original.value.get();
        Object valueObject = value.get();
        return getCellTypePoiInt(valueObject);
    }

    @Override
    public double getNumericCellValue() {
        if (getCellType() == Cell.CELL_TYPE_NUMERIC) {
            return (Double) original.value.get().get();
        } else {
            throw new IllegalStateException("Couldn't find Error value in cell");
        }
    }

    @Override
    public String getStringCellValue() {
        if (getCellType() == Cell.CELL_TYPE_STRING) {
            return ((String) original.value.get().get());
        } else {
            throw new IllegalStateException("Couldn't find String value in cell");
        }
    }

    @Override
    public boolean getBooleanCellValue() {
        if (getCellType() == Cell.CELL_TYPE_BOOLEAN) {
            return ((Boolean) original.value.get().get());
        } else {
            throw new IllegalStateException("Couldn't find Boolean value in cell");
        }
    }

    @Override
    public int getErrorCellValue() {
        if (getCellType() == Cell.CELL_TYPE_ERROR) {
            String errorName = (String) original.content.get();
            return FormulaError.valueOf(errorName).getLongCode();
        } else {
            throw new IllegalStateException("Couldn't find Error value in cell");
        }
    }

    @Override
    public int getCachedFormulaResultType() {
        if (getCellType() != Cell.CELL_TYPE_FORMULA) {
            throw new IllegalStateException("Only formula cells have cached results");
        }
        return Cell.CELL_TYPE_STRING; // TODO Investigate how to fetch the base
                                      // cell type
    }

    /**
     * Returns an integer value for given class
     */
    static int getCellTypePoiInt(Object valueObject) {
        if (isFormula(valueObject)) {
            return Cell.CELL_TYPE_FORMULA;
        } else if (isError(valueObject)) {
            return Cell.CELL_TYPE_ERROR;
        } else if (valueObject instanceof String) {
            return Cell.CELL_TYPE_STRING;
        } else if (valueObject instanceof Double) {
            return Cell.CELL_TYPE_NUMERIC;
        } else if (valueObject instanceof Boolean) {
            return Cell.CELL_TYPE_BOOLEAN;
        } else {
            return Cell.CELL_TYPE_FORMULA;
        }
    }

    static boolean isFormula(Object value) {
        if (value instanceof String) {
            String stringValue = (String) value;
            return stringValue.charAt(0) == '=';
        } else {
            return false;
        }
    }

    static boolean isError(Object value) {
        if (value instanceof String) {
            String stringValue = (String) value;
            return stringValue.charAt(0) == '#';
        } else {
            return false;
        }
    }
}
