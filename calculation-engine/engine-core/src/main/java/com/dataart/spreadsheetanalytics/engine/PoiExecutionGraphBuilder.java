package com.dataart.spreadsheetanalytics.engine;

import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.FORMULA_PTG;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.FORMULA_VALUES;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.VALUE;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

import org.apache.poi.common.execgraph.IExecutionGraphBuilder;
import org.apache.poi.common.execgraph.IExecutionGraphVertex;
import org.apache.poi.ss.formula.eval.RefEvalBase;
import org.apache.poi.ss.formula.eval.ValueEval;
import org.apache.poi.ss.formula.ptg.AbstractFunctionPtg;
import org.apache.poi.ss.formula.ptg.AddPtg;
import org.apache.poi.ss.formula.ptg.AreaPtg;
import org.apache.poi.ss.formula.ptg.DividePtg;
import org.apache.poi.ss.formula.ptg.EqualPtg;
import org.apache.poi.ss.formula.ptg.MultiplyPtg;
import org.apache.poi.ss.formula.ptg.OperationPtg;
import org.apache.poi.ss.formula.ptg.Ptg;
import org.apache.poi.ss.formula.ptg.RefPtg;
import org.apache.poi.ss.formula.ptg.SubtractPtg;
import org.apache.poi.ss.formula.ptg.ValueOperatorPtg;
import org.apache.poi.ss.util.CellReference;
import org.jgrapht.DirectedGraph;
import org.jgrapht.graph.DefaultDirectedGraph;
import org.jgrapht.graph.DefaultEdge;

import com.dataart.spreadsheetanalytics.api.model.IExecutionGraph;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex.Type;
import com.dataart.spreadsheetanalytics.model.ExecutionGraph;
import com.dataart.spreadsheetanalytics.model.ExecutionGraphVertex;

/**
 * TODO: write about internal representation, not thread safe, one instance per calculation, etc.
 * @author rroschin
 *
 */
public class PoiExecutionGraphBuilder implements IExecutionGraphBuilder {

    protected final DirectedGraph<IExecutionGraphVertex, DefaultEdge> dgraph;
    
    protected Map<ValueEval, IExecutionGraphVertex> valueToVertex;
    protected Map<Ptg, IExecutionGraphVertex> ptgToVertex;
    protected Map<String, IExecutionGraphVertex> addressToVertex;
    protected Map<Integer, Map<Integer, IExecutionGraphVertex>> rowcolToVertex;

    public PoiExecutionGraphBuilder() {
        this.dgraph = new DefaultDirectedGraph<>(DefaultEdge.class);
        this.valueToVertex = new HashMap<>();
        this.ptgToVertex = new HashMap<>();
        this.addressToVertex = new HashMap<>();
        this.rowcolToVertex = new HashMap<>();
    }

    public ExecutionGraph get() {
        return ExecutionGraph.wrap(dgraph);
    }

    @Override
    public IExecutionGraphVertex getOrCreateVertex(String address) {
        if (addressToVertex.containsKey(address)) { return addressToVertex.get(address); } 
        ExecutionGraphVertex v = new ExecutionGraphVertex(address);
        dgraph.addVertex(v);
        addressToVertex.put(address, v);
        return v;
    }
    
    @Override
    public IExecutionGraphVertex getOrCreateVertex(Ptg ptg) {
        ExecutionGraphVertex v;
        
        String address = ptgToAddress(ptg);
        if (address != null && addressToVertex.containsKey(address)) {
            return addressToVertex.get(address);
        }

        if (ptg instanceof OperationPtg) {
            v = new ExecutionGraphVertex(ptgToOperatorString(ptg));
        } else {
            
            if (ptgToVertex.containsKey(ptg)) {
                return ptgToVertex.get(ptg);
            }

            v = new ExecutionGraphVertex(ptgToOperatorString(ptg));
            ptgToVertex.put(ptg, v);
            addressToVertex.put(address, v);
        }
        
        dgraph.addVertex(v);
        return v;
    }
    
    @Override
    public IExecutionGraphVertex putVertex(ValueEval value, IExecutionGraphVertex vertex) {
        if (value == null) { throw new IllegalArgumentException("ValueEval to assosiate vertex with cannot be null."); }
        
        valueToVertex.put(value, vertex);
        return vertex;
    }

    @Override
    public IExecutionGraphVertex getVertex(ValueEval value) {
        if (value == null) { throw new IllegalArgumentException("ValueEval to assosiate vertex with cannot be null."); }

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

    /**
     * Do anything you want here. After graph is completed and we are out of POI context
     * you can add\remove\etc any information you want.
     */
    public static IExecutionGraph runPostProcessing(ExecutionGraph executionGraph) {
        DirectedGraph<IExecutionGraphVertex, DefaultEdge> graph = ExecutionGraph.unwrap(executionGraph);
        
        //Convert POI's cell values (NumberEval, StringEval, LazyRefEval to real values of type Object (e.g. Integer, String, etc.)
        for (IExecutionGraphVertex vertex : graph.vertexSet()) {
            
            /* Modifications for: VALUE */
            Object value = vertex.property(VALUE).get();
            if (value instanceof String) {
                //this is really nice case, value can be a string which looks like:
                //org.apache.poi.ss.formula.eval.NumberEval [2], that is, full class name and actual value in brakets
                String svalue = (String) value;
                if (svalue.startsWith("org.apache")) {
                    svalue = svalue.substring(svalue.indexOf("[") + 1, svalue.indexOf("]"));
                }
                vertex.property(VALUE).set(svalue);
            } else if (value instanceof RefEvalBase) {
                //TODO: get from some cache
            }
            
            /* Modifications for: FORMULA */
            Object[] formulaPtg= (Object[]) vertex.property(FORMULA_PTG).get();
            if (formulaPtg != null) {
                Ptg optg = (Ptg) formulaPtg[0];
                ValueEval[] vals = (ValueEval[]) formulaPtg[1];
                
                String formulaValues = null;
                if (optg instanceof AbstractFunctionPtg) {
                    //FUNC(arg,arg,...)
                    formulaValues = String.format("%s(%s)", 
                                                    ptgToOperatorString(optg), 
                                                    String.join(",", Arrays.asList(vals)
                                                                           .stream()
                                                                           .map( v -> v.toString() )
                                                                           .collect(Collectors.toList())));
                } else if(optg instanceof ValueOperatorPtg) {
                    //arg optr arg
                    //TODO: what if unary?
                    formulaValues = String.format("%s %s %s", vals[0], ptgToOperatorString(optg), vals[1]); 
                }
                
                if (formulaValues != null) {
                    vertex.property(FORMULA_VALUES).set(formulaValues);
                }
            }
        }
        
        return ExecutionGraph.wrap(graph);
    }
    
    public static String ptgToOperatorString(Ptg ptg) {
        Class<? extends Ptg> ptgCls = ptg.getClass();
        
        if (ptgCls.isAssignableFrom(AddPtg.class)) {
            return "+";
        } else if (ptgCls.isAssignableFrom(SubtractPtg.class)) {
            return "-";
        } else if (ptgCls.isAssignableFrom(DividePtg.class)) {
            return "/";
        } else if (ptgCls.isAssignableFrom(MultiplyPtg.class)) {
            return "*";
        } else if (ptgCls.isAssignableFrom(EqualPtg.class)) {
            return "=";
        }

        try {
            return ptg.toFormulaString();
        } catch (Exception e) {
            return ptg.getClass().getSimpleName();
        }
    }

    public static Type ptgToVertexType(Ptg ptg) {

        if (ptg instanceof AbstractFunctionPtg) { //functions: SUM, COUNT, COS, etc.
            return Type.FUNCTION;
        }else if (ptg instanceof ValueOperatorPtg) { //single operators: +, -, /, *, =
            return Type.OPERATOR;
        } else if (ptg instanceof RefPtg) { //
            return Type.CELL_WITH_VALUE;
        } else if (ptg instanceof AreaPtg) {
            return Type.RANGE;
        }
        //TODO: add more for our cases
        throw new IllegalArgumentException("Unsupported Ptg class: " + ptg.getClass());
    }
    
    private String ptgToAddress(Ptg ptg) {
        if (!(ptg instanceof RefPtg)) { return null; }
        
        RefPtg refPtg = (RefPtg) ptg;
        return new CellReference(refPtg.getRow(), refPtg.getColumn()).formatAsString();
    }
    
}
