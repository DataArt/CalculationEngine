package com.dataart.spreadsheetanalytics.model;

import org.apache.poi.ss.formula.EvaluationCell;
import org.apache.poi.ss.formula.EvaluationSheet;

class EvaluationDmCell implements EvaluationCell {
    
    protected final DmCell original;
    
    public EvaluationDmCell(DmCell cell) {
        this.original = cell;
    }

    @Override
    public Object getIdentityKey() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public EvaluationSheet getSheet() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public int getRowIndex() {
        // TODO Auto-generated method stub
        return 0;
    }

    @Override
    public int getColumnIndex() {
        // TODO Auto-generated method stub
        return 0;
    }

    @Override
    public int getCellType() {
        // TODO Auto-generated method stub
        return 0;
    }

    @Override
    public double getNumericCellValue() {
        // TODO Auto-generated method stub
        return 0;
    }

    @Override
    public String getStringCellValue() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public boolean getBooleanCellValue() {
        // TODO Auto-generated method stub
        return false;
    }

    @Override
    public int getErrorCellValue() {
        // TODO Auto-generated method stub
        return 0;
    }

    @Override
    public int getCachedFormulaResultType() {
        // TODO Auto-generated method stub
        return 0;
    }

}
