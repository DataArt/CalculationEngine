package com.dataart.spreadsheetanalytics.engine;

import static com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex.Type.CELL_WITH_FORMULA;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.FORMULA_PTG_STRING;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.FORMULA_STRING;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.FORMULA_VALUES;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.SOURCE_OBJECT_ID;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.PTG_STRING;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.TYPE;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.VALUE;

import java.util.HashSet;
import java.util.Set;

import org.apache.poi.common.execgraph.IExecutionGraphVertex;
import org.apache.poi.ss.formula.FormulaParseException;
import org.apache.poi.ss.formula.eval.ErrorEval;
import org.jgrapht.DirectedGraph;
import org.jgrapht.graph.DefaultDirectedGraph;
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

    private static final String WORKBOOK_NAME = "workbook name";
    private static final String FORMULA_STRING_PREFIX = "Cell with formula:";

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
			return getSingleNodeGraphForParseException(cell, ErrorEval.NAME_INVALID, null);
		} catch (IllegalStateException e) {
		    if (e.getMessage().contains(ErrorEval.VALUE_INVALID.getErrorString())) {
		        return getSingleNodeGraphForParseException(cell, ErrorEval.VALUE_INVALID, null);
		    }
		} catch (RuntimeException e) {
		    if (e.getMessage().contains(WORKBOOK_NAME)) {
	            int index = e.getMessage().indexOf(FORMULA_STRING_PREFIX);
	            String formulaStr = e.getMessage().substring(index+FORMULA_STRING_PREFIX.length()+3);
		        ExecutionGraph result = getSingleNodeGraphForParseException(cell, ErrorEval.REF_INVALID, formulaStr);
		        return result;
		    }
		}

		IExecutionGraph nonFormulaResult = buildGraphForEdgeCases(cv, cell);
		if (nonFormulaResult != null) { return nonFormulaResult; }

		graphBuilder.runPostProcessing();
		return graphBuilder.get();
	}

    protected ExecutionGraph getSingleNodeGraphForParseException(ICellAddress address, ErrorEval error, String formulaString) {
        DirectedGraph<IExecutionGraphVertex, DefaultEdge> emptyGraph = new DefaultDirectedGraph<>(DefaultEdge.class);
        ExecutionGraphVertex vertex = new ExecutionGraphVertex(address.a1Address().address());
        vertex.property(TYPE).set(CELL_WITH_FORMULA);
        vertex.property(VALUE).set(error);
        if (formulaString != null) {
            vertex.property(FORMULA_STRING).set(formulaString);
        } else {
            vertex.property(FORMULA_STRING).set(error.getErrorString());
        }
        vertex.property(FORMULA_VALUES).set(error.getErrorString());
        vertex.property(FORMULA_PTG_STRING).set(error.getErrorString());
        vertex.property(PTG_STRING).set(error.getErrorString());
        vertex.property(SOURCE_OBJECT_ID).set("");
        Set<ExecutionGraphVertex> vertices = new HashSet<>();
        emptyGraph.addVertex(vertex);
        vertices.add(vertex);
        ExecutionGraph graph = ExecutionGraph.wrap(emptyGraph);
        graph.setVertices(vertices);
        return graph;
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
