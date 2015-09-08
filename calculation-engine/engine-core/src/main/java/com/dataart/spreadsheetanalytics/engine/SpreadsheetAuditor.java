package com.dataart.spreadsheetanalytics.engine;

import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.TYPE;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.VALUE;

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
import org.apache.poi.common.execgraph.IExecutionGraphVertex;

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
		ICellValue evaluatedCell = evaluator.evaluate(cell);
		IExecutionGraph nonFormulaResult = buildGraphForEdgeCases(evaluatedCell, cell);
		if (nonFormulaResult != null) { return nonFormulaResult; }
		graphBuilder.runPostProcessing();
		return graphBuilder.get();
	}

	private IExecutionGraph buildGraphForNonFormulaCell(PoiExecutionGraphBuilder gBuilder, ICellValue icell) {
		ExecutionGraph result = gBuilder.get();
		ExecutionGraphVertex vertex = new ExecutionGraphVertex("VALUE");
		vertex.property(VALUE).set(icell.get());
		vertex.property(TYPE).set(Type.CELL_WITH_VALUE);
		DirectedGraph<IExecutionGraphVertex, DefaultEdge> dgraph = ExecutionGraph.unwrap(result);
		dgraph.addVertex(vertex);
		result = ExecutionGraph.wrap(dgraph);
		return result;
	}

	protected IExecutionGraph buildGraphForEdgeCases(ICellValue evalCell, ICellAddress cell) {
		if (evalCell == null) {
			return graphBuilder.getSingleNodeGraph(cell);
		}
		if (!evaluator.isFormulaCell(cell)) {
			return buildGraphForNonFormulaCell(graphBuilder, evalCell);
		}
		return null;
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
