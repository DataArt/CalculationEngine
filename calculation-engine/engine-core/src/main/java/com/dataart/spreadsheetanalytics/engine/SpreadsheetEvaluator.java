package com.dataart.spreadsheetanalytics.engine;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.xssf.usermodel.XSSFFormulaEvaluator;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.model.CellValue;

public class SpreadsheetEvaluator implements IEvaluator {

    protected ExecutionGraphBuilder graphBuilder = ExecutionGraphBuilder.emptyExecutionGraphBuilder();

    protected XSSFWorkbook model;
    protected XSSFFormulaEvaluator poiEvaluator; 

    public SpreadsheetEvaluator(XSSFWorkbook model) {
        this.model = model;
        this.poiEvaluator = model.getCreationHelper().createFormulaEvaluator(/*graphBuilder*/);
    }

    @Override
    public ICellValue evaluate(ICellAddress addr) {

        Sheet s = model.getSheetAt(addr.sheetIndex());
        Cell c = s.getRow(addr.row().intValue()).getCell(addr.column().intValue());
        
        return CellValue.fromString(poiEvaluator.evaluate(c).formatAsString());
    }

    public void setExecutionGraphBuilder(ExecutionGraphBuilder graphBuilder) {
        // TODO Auto-generated method stub

    }

    public void finish() {
        graphBuilder = ExecutionGraphBuilder.emptyExecutionGraphBuilder();
    }

}
