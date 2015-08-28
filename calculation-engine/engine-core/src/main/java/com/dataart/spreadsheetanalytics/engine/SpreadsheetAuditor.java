package com.dataart.spreadsheetanalytics.engine;

import com.dataart.spreadsheetanalytics.api.engine.IAuditor;
import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraph;
import com.dataart.spreadsheetanalytics.engine.execgraph.PoiExecutionGraphBuilder;

public class SpreadsheetAuditor implements IAuditor {

    protected final SpreadsheetEvaluator evaluator;
    protected final PoiExecutionGraphBuilder graphBuilder;

    public SpreadsheetAuditor(SpreadsheetEvaluator evaluator) {
        this.evaluator = evaluator;
        
        this.graphBuilder = new PoiExecutionGraphBuilder();
        this.evaluator.setExecutionGraphBuilder(graphBuilder);
    }

    @Override
    public IExecutionGraph buildStaticExecutionGraph(ICellAddress cell) {
        return null;
    }

    @Override
    public IExecutionGraph buildStaticExecutionGraph() {
        return null;
    }

    @Override
    public IExecutionGraph buildDynamicExecutionGraph(ICellAddress cell) {
        evaluator.evaluate(cell);
        graphBuilder.runPostProcessing();
        return graphBuilder.get();
    }

    @Override
    public IExecutionGraph buildDynamicExecutionGraph() {
        /*
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

        graphBuilder.runPostProcessing();
        return graphBuilder.get();
        */
        return null;
    }

    @Override
    public IEvaluator getEvaluator() { return evaluator; }
}
