package com.dataart.spreadsheetanalytics.engine;

import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.TYPE;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.VALUE;

import org.apache.poi.common.execgraph.IExecutionGraphVertex;
import org.apache.poi.ss.formula.FormulaParseException;
import org.jgrapht.DirectedGraph;
import org.jgrapht.graph.DefaultEdge;

import com.dataart.spreadsheetanalytics.api.engine.IAuditor;
import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraph;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex.Type;
import com.dataart.spreadsheetanalytics.engine.execgraph.ExecutionGraph;
import com.dataart.spreadsheetanalytics.engine.execgraph.ExecutionGraphVertex;
import com.dataart.spreadsheetanalytics.engine.execgraph.PoiExecutionGraphBuilder;

/**
 * TODO
 */
public class SpreadsheetAuditor implements IAuditor {

    protected final SpreadsheetEvaluator evaluator;
    protected final PoiExecutionGraphBuilder graphBuilder;

    public SpreadsheetAuditor(SpreadsheetEvaluator evaluator) {
        this.evaluator = evaluator;
        
        this.graphBuilder = new PoiExecutionGraphBuilder();
        this.evaluator.setExecutionGraphBuilder(this.graphBuilder);
    }

    @Override
    public IExecutionGraph buildStaticExecutionGraph(ICellAddress cell) {
        //TODO: implement
        return null;
    }

    @Override
    public IExecutionGraph buildStaticExecutionGraph() {
        //TODO: implement
        return null;
    }

    @Override
	public IExecutionGraph buildDynamicExecutionGraph(ICellAddress cell) {
		ICellValue cv = null;
		try {
			cv = evaluator.evaluate(cell);
		} catch (FormulaParseException e) {
			return graphBuilder.getSingleNodeGraphForParseException(cell);
		}

		IExecutionGraph nonFormulaResult = buildGraphForEdgeCases(cv, cell);
		if (nonFormulaResult != null) { return nonFormulaResult; }

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

	protected IExecutionGraph buildGraphForEdgeCases(ICellValue evalCell, ICellAddress cell) {
		if (evalCell == null) {	return graphBuilder.getSingleNodeGraph(cell); }
        
        if (!evaluator.isFormulaCell(cell)) { return buildGraphForNonFormulaCell(graphBuilder, evalCell); }
        
        return null;
    }

    private IExecutionGraph buildGraphForNonFormulaCell(PoiExecutionGraphBuilder gBuilder, ICellValue cell) {
        DirectedGraph<IExecutionGraphVertex, DefaultEdge> dgraph = ExecutionGraph.unwrap(gBuilder.get());
        
        ExecutionGraphVertex vertex = new ExecutionGraphVertex("VALUE");
        vertex.property(VALUE).set(cell.get());
        vertex.property(TYPE).set(Type.CELL_WITH_VALUE);
         
        dgraph.addVertex(vertex);

        return ExecutionGraph.wrap(dgraph);
    }
    
    @Override
    public IEvaluator getEvaluator() { return evaluator; }
}
