package com.dataart.spreadsheetanalytics.model;

import org.apache.poi.ss.formula.EvaluationCell;
import org.apache.poi.ss.formula.EvaluationName;
import org.apache.poi.ss.formula.EvaluationSheet;
import org.apache.poi.ss.formula.EvaluationWorkbook;
import org.apache.poi.ss.formula.ptg.NamePtg;
import org.apache.poi.ss.formula.ptg.NameXPtg;
import org.apache.poi.ss.formula.ptg.Ptg;
import org.apache.poi.ss.formula.udf.UDFFinder;

class EvaluationDataModel implements EvaluationWorkbook, EvaluationSheet {

    protected final DataModel dataModel;

    public EvaluationDataModel(final DataModel dataModel) {
        this.dataModel = dataModel;
    }

    @Override
    public EvaluationCell getCell(int rowIndex, int columnIndex) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public String getSheetName(int sheetIndex) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public int getSheetIndex(EvaluationSheet sheet) {
        // TODO Auto-generated method stub
        return 0;
    }

    @Override
    public int getSheetIndex(String sheetName) {
        // TODO Auto-generated method stub
        return 0;
    }

    @Override
    public EvaluationSheet getSheet(int sheetIndex) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public ExternalSheet getExternalSheet(int externSheetIndex) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public ExternalSheet getExternalSheet(String firstSheetName, String lastSheetName, int externalWorkbookNumber) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public int convertFromExternSheetIndex(int externSheetIndex) {
        // TODO Auto-generated method stub
        return 0;
    }

    @Override
    public ExternalName getExternalName(int externSheetIndex, int externNameIndex) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public ExternalName getExternalName(String nameName, String sheetName, int externalWorkbookNumber) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public EvaluationName getName(NamePtg namePtg) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public EvaluationName getName(String name, int sheetIndex) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public String resolveNameXText(NameXPtg ptg) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Ptg[] getFormulaTokens(EvaluationCell cell) {
        // TODO Auto-generated method stub
        return new Ptg[1];
    }

    @Override
    public String getFormulaString(EvaluationCell cell) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public UDFFinder getUDFFinder() {
        // TODO Auto-generated method stub
        return null;
    }

}
