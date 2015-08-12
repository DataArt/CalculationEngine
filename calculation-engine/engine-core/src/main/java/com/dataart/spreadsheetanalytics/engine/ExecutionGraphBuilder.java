package com.dataart.spreadsheetanalytics.engine;

import java.util.HashMap;
import java.util.Map;

import org.apache.poi.common.execgraph.IExecutionGraphBuilder;
import org.apache.poi.common.execgraph.IExecutionGraphVertex;
import org.apache.poi.ss.formula.eval.ValueEval;
import org.apache.poi.ss.formula.ptg.AddPtg;
import org.apache.poi.ss.formula.ptg.DividePtg;
import org.apache.poi.ss.formula.ptg.EqualPtg;
import org.apache.poi.ss.formula.ptg.MultiplyPtg;
import org.apache.poi.ss.formula.ptg.OperationPtg;
import org.apache.poi.ss.formula.ptg.Ptg;
import org.apache.poi.ss.formula.ptg.SubtractPtg;
import org.jgrapht.DirectedGraph;
import org.jgrapht.graph.DefaultDirectedGraph;
import org.jgrapht.graph.DefaultEdge;

import com.dataart.spreadsheetanalytics.model.ExecutionGraph;

/**
 * TODO: write about internal representation, not thread safe, one instance per calculation, etc.
 * @author rroschin
 *
 */
public class ExecutionGraphBuilder implements IExecutionGraphBuilder {

    protected final DirectedGraph<IExecutionGraphVertex, DefaultEdge> dgraph;
    
    protected Map<ValueEval, IExecutionGraphVertex> valueToVertex;
    protected Map<Ptg, IExecutionGraphVertex> ptgToVertex;
    protected Map<Integer, Map<Integer, IExecutionGraphVertex>> rowcolToVertex;

    public ExecutionGraphBuilder() {
        this.dgraph = new DefaultDirectedGraph<>(DefaultEdge.class);
        this.valueToVertex = new HashMap<>();
        this.ptgToVertex = new HashMap<>();
        this.rowcolToVertex = new HashMap<>();
    }

    public ExecutionGraph get() {
        return ExecutionGraph.wrap(dgraph);
    }

    @Override
    public IExecutionGraphVertex getOrCreateVertex(Ptg ptg) {
        ExecutionGraphVertex v;
        if (ptg instanceof OperationPtg) {
            v = new ExecutionGraphVertex(ptgToOperatorString(ptg));
            dgraph.addVertex(v);
        } else {
            
            if (ptgToVertex.containsKey(ptg)) {
                return ptgToVertex.get(ptg);
            }

            v = new ExecutionGraphVertex(ptgToOperatorString(ptg));
            dgraph.addVertex(v);
            ptgToVertex.put(ptg, v);
        }
        
        return v;
    }
    
    @Override
    public IExecutionGraphVertex putVertex(ValueEval value, IExecutionGraphVertex vertex) {
        if (value == null) {
            throw new IllegalArgumentException("ValueEval to assosiate vertex with cannot be null.");
        }
        valueToVertex.put(value, vertex);
        return vertex;
    }

    @Override
    public IExecutionGraphVertex getVertex(ValueEval value) {
        if (value == null) {
            throw new IllegalArgumentException("ValueEval to assosiate vertex with cannot be null.");
        }

        return valueToVertex.get(value);
    }
    
    @Override
    public void removeVertex(IExecutionGraphVertex vertex) {
        if (vertex == null) { return; }
        dgraph.removeVertex(vertex);
    }
    
    @Override
    public IExecutionGraphVertex putVertex(int rowIndex, int columnIndex, IExecutionGraphVertex vertex) {
        if (rowcolToVertex.get(Integer.valueOf(rowIndex)) == null) {
            rowcolToVertex.put(Integer.valueOf(rowIndex), new HashMap<>());
        }
        rowcolToVertex.get(Integer.valueOf(rowIndex)).put(Integer.valueOf(columnIndex), vertex);
        return vertex;
    }

    @Override
    public IExecutionGraphVertex getVertex(int rowIndex, int columnIndex) {
        Map<Integer, IExecutionGraphVertex> rowMap = rowcolToVertex.get(Integer.valueOf(rowIndex));
        if (rowMap == null) { return null; }
        return rowMap.get(Integer.valueOf(columnIndex));
    }

    @Override
    public void connect(IExecutionGraphVertex from, IExecutionGraphVertex to) {
        dgraph.addEdge(from, to);
    }

    private static String ptgToOperatorString(Ptg ptg) {
        if (ptg.getClass().isAssignableFrom(AddPtg.class)) {
            return "+";
        } else if (ptg.getClass().isAssignableFrom(SubtractPtg.class)) {
            return "-";
        } else if (ptg.getClass().isAssignableFrom(DividePtg.class)) {
            return "/";
        } else if (ptg.getClass().isAssignableFrom(MultiplyPtg.class)) {
            return "*";
        } else if (ptg.getClass().isAssignableFrom(EqualPtg.class)) {
            return "=";
        }

        try {
            return ptg.toFormulaString();
        } catch (Exception e) {
            return ptg.getClass().getSimpleName();
        }
    }

}
