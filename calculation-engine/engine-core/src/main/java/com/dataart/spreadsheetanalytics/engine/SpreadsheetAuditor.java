package com.dataart.spreadsheetanalytics.engine;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.util.CellReference;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.dataart.spreadsheetanalytics.api.engine.IAuditor;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress.A1Address;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraph;
import com.dataart.spreadsheetanalytics.model.CellAddress;

public class SpreadsheetAuditor implements IAuditor {

    protected final SpreadsheetEvaluator evaluator;
    protected final PoiExecutionGraphBuilder graphBuilder;

    public SpreadsheetAuditor(SpreadsheetEvaluator evaluator) {
        this.evaluator = evaluator;
        
        this.graphBuilder = new PoiExecutionGraphBuilder();
        this.evaluator.setExecutionGraphBuilder(graphBuilder);
    }

    @Override
    public IExecutionGraph buildStaticExecutionGraph(XSSFWorkbook model, ICellAddress cell) {
        return null;
    }

    @Override
    public IExecutionGraph buildStaticExecutionGraph(XSSFWorkbook model) {
        return null;
    }

    @Override
    public IExecutionGraph buildDynamicExecutionGraph(XSSFWorkbook model, ICellAddress cell) {
        evaluator.evaluate(cell);
        return PoiExecutionGraphBuilder.runPostProcessing(graphBuilder.get());
    }

    @Override
    public IExecutionGraph buildDynamicExecutionGraph(XSSFWorkbook model) {

        //Model Iterator
        for (XSSFSheet xssfSheet : model) {
            for (Row row : xssfSheet) {
                for (Cell cell : row) {

                    ICellAddress addr = new CellAddress()
                            .a1Address(new A1Address(new CellReference(cell).formatAsString()))
                            .row(cell.getRowIndex())
                            .column(cell.getColumnIndex());

                    evaluator.evaluate(addr);
                }
            }
        }

        return PoiExecutionGraphBuilder.runPostProcessing(graphBuilder.get());
    }
}
