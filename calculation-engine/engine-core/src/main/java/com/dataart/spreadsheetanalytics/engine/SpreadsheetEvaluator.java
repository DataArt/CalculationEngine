package com.dataart.spreadsheetanalytics.engine;

import org.apache.poi.common.execgraph.EmptyExecutionGraph;
import org.apache.poi.common.execgraph.IExecutionGraphBuilder;
import org.apache.poi.ss.formula.WorkbookEvaluator;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.xssf.usermodel.XSSFFormulaEvaluator;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.functions.poi.Functions;
import com.dataart.spreadsheetanalytics.model.CellValue;
import com.dataart.spreadsheetanalytics.model.TmpDataModel;

public class SpreadsheetEvaluator implements IEvaluator {

    protected IExecutionGraphBuilder graphBuilder = EmptyExecutionGraph.DoNothingExecutionGraphBuilder.get();

    protected XSSFWorkbook model;
    protected XSSFFormulaEvaluator poiEvaluator;
    
    static {
        for (String fname: Functions.get().keySet()) {
            WorkbookEvaluator.registerFunction(fname, Functions.get().get(fname));
        }
    }

    public SpreadsheetEvaluator(IDataModel model) {
        this.model = ((TmpDataModel) model).model;
        this.poiEvaluator = this.model.getCreationHelper().createFormulaEvaluator();
    }

    @Override
    public ICellValue evaluate(ICellAddress addr) {

        Sheet s = model.getSheetAt(0 /*sheet number 1*/ );
        Cell c = s.getRow(addr.row()).getCell(addr.column());

        ICellValue cv = new CellValue(poiEvaluator.evaluate(c).formatAsString());
        
        finish();
        
        return cv;
    }

    @Override
    public IDataSet evaluate(IDataModel model) {
        // TODO Auto-generated method stub
        return null;
    }

    public void setExecutionGraphBuilder(IExecutionGraphBuilder graphBuilder) {
        this.graphBuilder = graphBuilder;
        this.poiEvaluator = model.getCreationHelper().createFormulaEvaluator(graphBuilder);
    }

    public void finish() {
        graphBuilder = EmptyExecutionGraph.DoNothingExecutionGraphBuilder.get();
    }

}
