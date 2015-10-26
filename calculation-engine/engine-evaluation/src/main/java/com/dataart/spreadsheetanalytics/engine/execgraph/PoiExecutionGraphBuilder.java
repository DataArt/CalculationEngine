/*
Copyright 2015 DataArt Apps, Inc

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
package com.dataart.spreadsheetanalytics.engine.execgraph;

import static com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex.Type.CELL_WITH_FORMULA;
import static com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex.Type.CELL_WITH_VALUE;
import static com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex.Type.CONSTANT_VALUE;
import static com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex.Type.EMPTY_CELL;
import static com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex.Type.FUNCTION;
import static com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex.Type.IF;
import static com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex.Type.OPERATOR;
import static com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex.Type.RANGE;
import static com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex.Type.isCell;
import static java.lang.String.format;
import static java.lang.String.join;
import static java.util.Arrays.asList;
import static java.util.stream.Collectors.toList;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.FORMULA_PTG;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.FORMULA_PTG_STRING;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.FORMULA_STRING;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.FORMULA_VALUES;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.NAME;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.PTG_STRING;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.SOURCE_OBJECT_ID;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.TYPE;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.VALUE;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Deque;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;
import java.util.concurrent.atomic.AtomicInteger;

import org.apache.poi.common.execgraph.IExecutionGraphBuilder;
import org.apache.poi.common.execgraph.IExecutionGraphVertex;
import org.apache.poi.common.execgraph.IExecutionGraphVertexProperty;
import org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName;
import org.apache.poi.ss.formula.eval.BlankEval;
import org.apache.poi.ss.formula.eval.ErrorEval;
import org.apache.poi.ss.formula.eval.ValueEval;
import org.apache.poi.ss.formula.functions.Area2DValues;
import org.apache.poi.ss.formula.ptg.AbstractFunctionPtg;
import org.apache.poi.ss.formula.ptg.AddPtg;
import org.apache.poi.ss.formula.ptg.AreaPtg;
import org.apache.poi.ss.formula.ptg.ConcatPtg;
import org.apache.poi.ss.formula.ptg.DividePtg;
import org.apache.poi.ss.formula.ptg.EqualPtg;
import org.apache.poi.ss.formula.ptg.GreaterThanPtg;
import org.apache.poi.ss.formula.ptg.LessThanPtg;
import org.apache.poi.ss.formula.ptg.MultiplyPtg;
import org.apache.poi.ss.formula.ptg.NamePtg;
import org.apache.poi.ss.formula.ptg.NameXPxg;
import org.apache.poi.ss.formula.ptg.NotEqualPtg;
import org.apache.poi.ss.formula.ptg.ParenthesisPtg;
import org.apache.poi.ss.formula.ptg.Ptg;
import org.apache.poi.ss.formula.ptg.Ref3DPxg;
import org.apache.poi.ss.formula.ptg.RefPtg;
import org.apache.poi.ss.formula.ptg.ScalarConstantPtg;
import org.apache.poi.ss.formula.ptg.SubtractPtg;
import org.apache.poi.ss.formula.ptg.UnaryPlusPtg;
import org.apache.poi.ss.formula.ptg.ValueOperatorPtg;
import org.jgrapht.DirectedGraph;
import org.jgrapht.graph.DefaultDirectedGraph;

import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraph;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex.Type;
import com.dataart.spreadsheetanalytics.model.CellAddress;
import com.dataart.spreadsheetanalytics.model.CellFormulaExpression;
import com.dataart.spreadsheetanalytics.model.CellValue;

/**
 * TODO: write about internal representation, not thread safe, one instance per
 * calculation, etc.
 *
 */
public class PoiExecutionGraphBuilder implements IExecutionGraphBuilder {

    protected static final String CONSTANT_VALUE_NAME = "VALUE";
    protected static final String UNDEFINED_EXTERNAL_FUNCTION = "#external#";

    static final Set<String> POI_VALUE_REDUNDANT_SYMBOLS = new HashSet<>(asList("[", "]"));
    
    protected ExecutionGraphConfig config = ExecutionGraphConfig.DEFAULT;
    protected DirectedGraph<IExecutionGraphVertex, ExecutionGraphEdge> dgraph = new DefaultDirectedGraph<>(ExecutionGraphEdge.class);
    /*
     * The map is used to store vertices using value field as a key
     * One value may correspond to several vertices. That's why we use Deques instead of single values.
     */
    protected Map<ValueEval, Deque<IExecutionGraphVertex>> valueToVertex = new HashMap<>();
    protected Map<String, Set<IExecutionGraphVertex>> addressToVertices = new HashMap<>();

    public ExecutionGraph get() {
        return ExecutionGraph.wrap(dgraph);
    }

    /**
     * This method should be used when creating a new vertex from a cell, so
     * vertex name is a cell's address. New Vertex will be created any time this
     * method is invoked. New vertex will be stored in
     * address-to-set-of-vertices map.
     */
    @Override
    public IExecutionGraphVertex createVertex(String address) {
        // create new vertex object
        ExecutionGraphVertex v = new ExecutionGraphVertex(address);

        // add vertex to actual graph
        dgraph.addVertex(v);

        // put new vertex to set of vertices with the same address, since they
        // all must have the same set of properties and values
        Set<IExecutionGraphVertex> vs = addressToVertices.containsKey(address) ? addressToVertices.get(address) : new HashSet<>();
        vs.add(v);
        addressToVertices.put(address, vs);

        return v;
    }

    @Override
    public IExecutionGraphVertex createVertex(Ptg ptg) {
        if (isSkipVertex(ptg)) { return null; }
        
        boolean isCell = ptg instanceof RefPtg;
        String name = ptgToString(ptg);

        if (isCell) { // cell
            return createVertex(name);
        } else { // operation
            ExecutionGraphVertex v = new ExecutionGraphVertex(name);
            dgraph.addVertex(v);
            return v;
        }
    }

    @Override
    public void connect(IExecutionGraphVertex from, IExecutionGraphVertex to) {
        dgraph.addEdge(from, to);
    }

    @Override
    public void removeVertex(IExecutionGraphVertex vertex) {
        if (vertex == null) { return; }
        dgraph.removeVertex(vertex);
    }

    @Override
    public void putVertexToStack(ValueEval value, IExecutionGraphVertex vertex) {
        if (value == null) { throw new IllegalArgumentException("ValueEval to assosiate vertex with cannot be null."); }
        if (!valueToVertex.containsKey(value)) { valueToVertex.put(value, new LinkedList<IExecutionGraphVertex>()); }
        valueToVertex.get(value).push(vertex);
    }

    @Override
    public IExecutionGraphVertex getVertexFromStack(ValueEval value) {
        if (value == null) { throw new IllegalArgumentException("ValueEval to assosiate vertex with cannot be null."); }
        /* the value is taken from the Deque while it is taken from the stack in poi WorkbookEvaluator class */
        return valueToVertex.get(value).pop();
    }

    @Override
    public void putVertexToCache(String address, IExecutionGraphVertex vertex) {
        if (!addressToVertices.containsKey(address)) { addressToVertices.put(address, new HashSet<>()); }
        addressToVertices.get(address).add(vertex);
    }
    
    @Override
    public void putVertexToCache(int row, int column, IExecutionGraphVertex vertex) {
        putVertexToCache(CellAddress.toA1Address(row, column), vertex);
    }
    
    @Override
    public Set<IExecutionGraphVertex> getVerticesFromCache(String address) {
        return addressToVertices.get(address);
    }

    @Override
    public Set<IExecutionGraphVertex> getVerticesFromCache(int row, int column) {
        return getVerticesFromCache(CellAddress.toA1Address(row, column));
    }

    @Override
    public IExecutionGraphVertexProperty getVertexProperty(IExecutionGraphVertex vertex, PropertyName property) {
        return ((ExecutionGraphVertex) vertex).property(property);
    }

    /**
     * Do anything you want here. After graph is completed and we are out of POI
     * context you can add\remove\etc any information you want.
     */
    public void runPostProcessing(boolean multiRoot) {
        DirectedGraph<IExecutionGraphVertex, ExecutionGraphEdge> graph = dgraph;

        // make identical vertices have the same set of properties
        // two vertices are identical if they have the same address value.
        // Id for every vertex is unique, so this is not a flag here
        for (Entry<String, Set<IExecutionGraphVertex>> en : addressToVertices.entrySet()) {
            Set<IExecutionGraphVertex> vs = addressToVertices.get(en.getKey());

            // the logic below is very fragile and based on some empirical model
            // and may not work for other type of graphs
            if (vs != null && vs.size() > 1) {
                IExecutionGraphVertex standard = null;

                for (IExecutionGraphVertex ivertex : vs) {
                    ExecutionGraphVertex vertex = (ExecutionGraphVertex) ivertex;
                    if (CELL_WITH_FORMULA == (Type) vertex.property(TYPE).get()) { standard = vertex; break; }
                }

                if (standard != null) {
                    copyProperties(standard, vs);
                }
            }
        }

        // copy or link subgraphs to identical vertices
        // and
        // modify Formula field with additional values
        Map<String, AtomicInteger> adressToCount = new HashMap<>();

        for (IExecutionGraphVertex ivertex : graph.vertexSet()) {

            ExecutionGraphVertex vertex = (ExecutionGraphVertex) ivertex;

            // restore/add subgraphs to identical vertices
            Type type = (Type) vertex.property(TYPE).get();
            if (isCell(type)) {
                String address = (String) vertex.property(NAME).get();

                adressToCount.putIfAbsent(address, new AtomicInteger(0));

                if (adressToCount.get(address).incrementAndGet() > 1) { //count > 1
                    // need to link
                    Set<IExecutionGraphVertex> subgraphTops = new HashSet<>();

                    // TODO: point to optimize!
                    for (IExecutionGraphVertex itmpVertex : graph.vertexSet()) {

                        ExecutionGraphVertex tmpVertex = (ExecutionGraphVertex) itmpVertex;

                        String tmpAddress = (String) tmpVertex.property(NAME).get();
                        if (address.equals(tmpAddress)) { // check for subgraph
                            for (ExecutionGraphEdge tmpEdge : graph.incomingEdgesOf(tmpVertex)) {
                                subgraphTops.add(graph.getEdgeSource(tmpEdge));
                            }
                        }
                    }

                    for (IExecutionGraphVertex subVertex : subgraphTops) {
                        if (!addressToVertices.containsKey(address)) { continue; }
                        for (IExecutionGraphVertex vertexOfAddress : addressToVertices.get(address)) {
                            graph.addEdge(subVertex, vertexOfAddress);
                        }
                    }
                }
            }

            /* Adding IF Value */
            if (IF == type) {
                Set<ExecutionGraphEdge> two = graph.incomingEdgesOf(vertex);
                if (two.size() != 2) { throw new IllegalStateException("IF must have only two incoming edges."); }

                Object ifBranchValue = null;
                for (ExecutionGraphEdge e : two) {
                    ExecutionGraphVertex oneOfTwo = (ExecutionGraphVertex) graph.getEdgeSource(e);
                    if (!isCompareOperand(oneOfTwo.name())) {
                        ifBranchValue = oneOfTwo.property(VALUE).get();
                        break;
                    }
                }
                vertex.property(VALUE).set(ifBranchValue);
            }

        }

        for (IExecutionGraphVertex vert : graph.vertexSet()) {
            if (graph.outgoingEdgesOf(vert).isEmpty()) {
                ExecutionGraphVertex root = (ExecutionGraphVertex) vert;
                root.formula = buildFormula(root, graph);
                if (!multiRoot) { break; }
            }
        }

        if (config.getThresholdNumber() != -1) {
            removeAllDuplicates();
        }
    }

    protected CellFormulaExpression buildFormula(ExecutionGraphVertex vertex, DirectedGraph<IExecutionGraphVertex, ExecutionGraphEdge> graph) {

        switch (vertex.type) {

            case CELL_WITH_VALUE: {
                CellFormulaExpression formula = (CellFormulaExpression) vertex.formula;
                formula.formulaStr(vertex.property(NAME).get().toString());
                formula.formulaValues(vertex.value().toString());
                formula.formulaPtgStr(vertex.value().toString());
                formula.ptgStr(vertex.property(NAME).get().toString());
                checkForEmptyValues(vertex);
                return formula;
            }
            case CELL_WITH_REFERENCE:
            case CELL_WITH_FORMULA: {
                ExecutionGraphVertex ivertex = null;
                CellFormulaExpression formula = null;
                for (ExecutionGraphEdge edge : graph.incomingEdgesOf(vertex)) {
                    ivertex = (ExecutionGraphVertex) graph.getEdgeSource(edge);
                    formula = buildFormula(ivertex, graph);
                }
                vertex.formula = CellFormulaExpression.copyOf(formula);
                vertex.value = ivertex.value;
                return CellFormulaExpression.copyOf(formula);
            }
            case OPERATOR:
            case FUNCTION: {
                Set<ExecutionGraphEdge> edges = graph.incomingEdgesOf(vertex);
                List<String> formulaStringNodes = new LinkedList<>();
                List<String> formulaValuesNodes = new LinkedList<>();
                List<String> formulaPtgNodes = new LinkedList<>();
                List<String> ptgNodes = new LinkedList<>();
                Object[] formulaPtg = (Object[]) vertex.property(FORMULA_PTG).get();
                for (ExecutionGraphEdge edge : edges) {
                    ExecutionGraphVertex ivertex = (ExecutionGraphVertex) graph.getEdgeSource(edge);
                    CellFormulaExpression formula = buildFormula(ivertex, graph);
                    formulaStringNodes.add(formula.formulaStr());
                    formulaValuesNodes.add(formula.formulaValues());
                    formulaPtgNodes.add(formula.formulaPtgStr());
                    ptgNodes.add(formula.ptgStr());
                    // if the parent node has error value we leave it as it is
                    // otherwise it will represent the child's node error value
                    if (isErrorValue(ivertex.value()) && inheritsErrorValue(vertex)) {
                        vertex.value = ivertex.value();
                    }
                }
                CellFormulaExpression iformula = (CellFormulaExpression) vertex.formula();
                iformula.formulaStr(createFormulaString(formulaPtg[0], formulaStringNodes, vertex));
                iformula.formulaValues(createFormulaString(formulaPtg[0], formulaValuesNodes, vertex));
                iformula.formulaPtgStr(createPtgString(formulaPtg[0], formulaPtgNodes, vertex));
                iformula.ptgStr(createPtgString(formulaPtg[0], ptgNodes, vertex));
                CellFormulaExpression result = CellFormulaExpression.copyOf(iformula);
                iformula.formulaPtgStr("");
                iformula.ptgStr("");
                return result;
            }
            case IF: {
                Set<ExecutionGraphEdge> edges = graph.incomingEdgesOf(vertex);
                List<String> formulaValuesNodes = new LinkedList<>();
                List<String> formulaPtgNodes = new LinkedList<>();
                List<String> ptgNodes = new LinkedList<>();
                for (ExecutionGraphEdge edge : edges) {
                    ExecutionGraphVertex ivertex = (ExecutionGraphVertex) graph.getEdgeSource(edge);
                    CellFormulaExpression formula = buildFormula(ivertex, graph);
                    formulaValuesNodes.add(formula.formulaValues());
                    formulaPtgNodes.add(formula.formulaPtgStr());
                    ptgNodes.add(formula.ptgStr());
                    if (OPERATOR != ivertex.type) { vertex.value = ivertex.value; }
                }
                // TODO: are you sure you need only '=' ?
                Collections.sort(formulaValuesNodes, (n1, n2) -> isCompareOperand(n1) ? -1 : 0);
                CellFormulaExpression iformula = (CellFormulaExpression) vertex.formula;
                iformula.formulaValues(createFormulaString(null, formulaValuesNodes, vertex));
                iformula.formulaPtgStr(createPtgString(null, formulaPtgNodes, vertex));
                iformula.ptgStr(createPtgString(null, ptgNodes, vertex));
                CellFormulaExpression result = CellFormulaExpression.copyOf(iformula);
                iformula.formulaPtgStr("");
                iformula.ptgStr("");
                return result;
            }
            case RANGE: {
                CellFormulaExpression iformula = (CellFormulaExpression) vertex.formula();
                iformula.formulaStr(vertex.property(NAME).get().toString());
                iformula.formulaValues(vertex.property(VALUE).get().toString());
                iformula.formulaPtgStr(vertex.property(VALUE).get().toString());
                iformula.ptgStr(vertex.property(NAME).get().toString());
                connectValuesToRange(vertex);
                Set<ExecutionGraphEdge> edges = graph.incomingEdgesOf(vertex);
                for (ExecutionGraphEdge edge : edges) {
                    ExecutionGraphVertex ivertex = (ExecutionGraphVertex) graph.getEdgeSource(edge);
                    buildFormula(ivertex, graph);
                }
                return iformula;
            }
            case CONSTANT_VALUE: {
                vertex.property(NAME).set(CONSTANT_VALUE_NAME);
                CellFormulaExpression formula = (CellFormulaExpression) vertex.formula;
                formula.formulaStr(vertex.property(NAME).get().toString());
                formula.formulaValues(vertex.value().toString());
                formula.formulaPtgStr(vertex.value().toString());
                formula.ptgStr(vertex.property(NAME).get().toString());
                return CellFormulaExpression.copyOf(formula);
            }
            default: {
                return (CellFormulaExpression) vertex.formula;
            }
        }

    }

    protected void checkForEmptyValues(ExecutionGraphVertex vertex) {
        Object value = vertex.property(VALUE).get();
        if (value.toString().isEmpty() || value instanceof BlankEval) {
            vertex.property(TYPE).set(EMPTY_CELL);
        }
    }

    protected void connectValuesToRange(ExecutionGraphVertex rangeVertex) {
        Object cellValue = ((CellValue) rangeVertex.value()).get();
        if (cellValue instanceof Area2DValues) {
            
            for (String adress : ((Area2DValues) cellValue).getRangeCellAddresses()) {
                if (addressToVertices.get(adress) == null) { continue; }
                
                for (IExecutionGraphVertex cellVertex : addressToVertices.get(adress)) {
                    connect(cellVertex, rangeVertex);
                }
            }
        }
    }

    protected boolean isSkipVertex(Ptg ptg) {
        return ptg instanceof ParenthesisPtg;
    }

    protected String createFormulaString(Object optg, List<String> ops, ExecutionGraphVertex vertex) {
        String opname = "";
        if (optg == null) { // IF
            opname = "IF";
        } else if (optg instanceof Ptg) {
            opname = ptgToString((Ptg) optg);
            /* if the function was not recognized as internal function we use the node name as the function name */
            if (UNDEFINED_EXTERNAL_FUNCTION.equals(opname)) { opname = vertex.name(); }
        } else {
            opname = optg.toString();
        }
        
        if (optg == null || optg instanceof AbstractFunctionPtg) {
            return stripRedundantSymbols(format("%s(%s)", 
                                                 opname,
                                                 join(",", asList(ops)
                                                               .stream()
                                                               .map(v -> v.toString())
                                                               .collect(toList()))));
        } else if (optg instanceof ValueOperatorPtg) {
            return stripRedundantSymbols(format("%s %s %s", ops.size() > 1 ? ops.get(1) : "", opname, ops.size() > 0 ? ops.get(0) : ""));
        }
        return "";
    }

    protected String createPtgString(Object optg, List<String> ops, ExecutionGraphVertex vertex) {
        String opname = "";
        
        if (optg == null) {
            opname = "IF";
            return stripRedundantSymbols(format("%s %s ",
                                                join(",", asList(ops)
                                                            .stream()
                                                            .map(v -> v.toString())
                                                            .collect(toList())), 
                                                opname));
        } else {
            opname = optg instanceof Ptg ? ptgToString((Ptg) optg) : optg.toString();
            /* if the function was not recognized as internal function we use the node name as the function name */
            if (UNDEFINED_EXTERNAL_FUNCTION.equals(opname)) { opname = vertex.name(); }
        }
        if (optg instanceof AbstractFunctionPtg) {
            return stripRedundantSymbols(format("%s %s ",
                                                join(",", asList(ops)
                                                            .stream()
                                                            .map(v -> v.toString())
                                                            .collect(toList())),
                                                opname));
        } else if (optg instanceof ValueOperatorPtg) {
            return stripRedundantSymbols(String.format("%s %s %s", ops.size() > 1 ? ops.get(1) : "", ops.size() > 0 ? ops.get(0) : "", opname));
        }

        return "";
    }

    protected static String stripRedundantSymbols(String inline) {
        for (String token : POI_VALUE_REDUNDANT_SYMBOLS) 
            { inline = inline.replace(token, ""); }
        return inline;
    }

    protected static boolean isErrorValue(ICellValue val) {
        if (val == null) { return false; }
        if (val.get() instanceof ErrorEval) { return true; }
        else { return false; }
    }

    protected static boolean inheritsErrorValue(IExecutionGraphVertex ivertex) {
        ExecutionGraphVertex vertex = (ExecutionGraphVertex) ivertex;
        boolean isNotInherFunction = "ISERROR".equals(vertex.name());
        boolean isError = isErrorValue(vertex.value());
        return !(isError || isNotInherFunction);
    }

    public static String ptgToString(Ptg ptg) {
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
        } else if (ptgCls.isAssignableFrom(GreaterThanPtg.class)) {
            return ">";
        } else if (ptgCls.isAssignableFrom(LessThanPtg.class)) {
            return "<";
        } else if (ptgCls.isAssignableFrom(NotEqualPtg.class)) {
            return "<>";
        } else if (ptgCls.isAssignableFrom(UnaryPlusPtg.class)) {
            return "+";
        } else if (ptgCls.isAssignableFrom(ConcatPtg.class)) {
            return "&";
        }

        try {
            return ptg.toFormulaString();
        } catch (Exception e) {
            return ptg.getClass().getSimpleName();
        }
    }

    public static Type ptgToVertexType(Ptg ptg) {

        if (ptg instanceof AbstractFunctionPtg) { // functions: SUM, COUNT, COS, etc.
            return FUNCTION;
        } else if (ptg instanceof ValueOperatorPtg) { // single operators: +, -, /, *, =
            return OPERATOR;
        } else if (ptg instanceof RefPtg || ptg instanceof Ref3DPxg || ptg instanceof NameXPxg || ptg instanceof NamePtg) {
            return CELL_WITH_VALUE;
        } else if (ptg instanceof ScalarConstantPtg) {
            return CONSTANT_VALUE;
        } else if (ptg instanceof AreaPtg) {
            return RANGE;
        }

        // TODO: add more for our cases
        throw new IllegalArgumentException("Unsupported Ptg class: " + ptg.getClass());
    }

    /**
     * Does copy of all properties for every Vertex from @param vertices. the
     * first @param istandard is used as object to copy from.
     */
    protected static void copyProperties(IExecutionGraphVertex istandard, Set<IExecutionGraphVertex> vertices) {
        ExecutionGraphVertex standard = (ExecutionGraphVertex) istandard;
        
        for (IExecutionGraphVertex ivertex : vertices) {
            if (istandard.equals(ivertex)) { continue; }

            ExecutionGraphVertex vertex = (ExecutionGraphVertex) ivertex;
            
            // copy properties
            for (PropertyName pname : PropertyName.values()) {
                if (pname == PropertyName.VERTEX_ID) { continue; }
                if (pname == PropertyName.INDEX_IN_FORMULA) { continue; }

                vertex.property(pname).set(standard.property(pname).get());
            }
        }
    }

    protected Set<IExecutionGraphVertex> getParents(IExecutionGraphVertex vertex) {
        Set<IExecutionGraphVertex> retvals = new HashSet<>();
        for (ExecutionGraphEdge edge : dgraph.outgoingEdgesOf(vertex)) {
            retvals.add(dgraph.getEdgeTarget(edge));
        }
        return retvals;
    }

    protected void removeAllDuplicates() {
        Set<IExecutionGraphVertex> leaves = new HashSet<>();
        for (String address : addressToVertices.keySet()) {
            leaves.addAll(removeLeafDublicates(address, config.getThresholdNumber()));
        }
        processLeaves(leaves, config.getThresholdNumber());
    }

    protected void processLeaves(Set<IExecutionGraphVertex> leaves, int allowedNum) {
        for (IExecutionGraphVertex leaf : leaves) {
            Set<IExecutionGraphVertex> parents = getParents(leaf);
            Map<IExecutionGraphVertex, Integer> chosen = new HashMap<>();
            for (IExecutionGraphVertex parent : parents) {
                IExecutionGraphVertex found = returnVertexDuplicate(chosen.keySet(), parent);
                if (found == null) {
                    chosen.put(parent, allowedNum);
                } else {
                    int cellAllowedNum = chosen.get(found).intValue();
                    if (cellAllowedNum == 0) {
                        reassignOutgoingEdges(found, parent);
                        dgraph.removeVertex(parent);
                    } else {
                        cellAllowedNum--;
                        chosen.put(found, cellAllowedNum);
                        chosen.put(parent, cellAllowedNum);
                    }
                }
            }
            processLeaves(chosen.keySet(), allowedNum);
        }
    }

    protected static IExecutionGraphVertex returnVertexDuplicate(Collection<IExecutionGraphVertex> set, IExecutionGraphVertex ivalue) {
        for (IExecutionGraphVertex iitem : set) {
            ExecutionGraphVertex item = (ExecutionGraphVertex) iitem;
            ExecutionGraphVertex value = (ExecutionGraphVertex) ivalue;
            if (item.compareTo(value) == 1) { return item; }
        }
        return null;
    }

    protected void reassignOutgoingEdges(IExecutionGraphVertex ivertex1, IExecutionGraphVertex ivertex2) {
        Set<ExecutionGraphEdge> set = dgraph.outgoingEdgesOf(ivertex2);
        for (ExecutionGraphEdge item : set) {
            dgraph.addEdge(ivertex1, dgraph.getEdgeTarget(item));
        }
    }

    protected List<IExecutionGraphVertex> removeLeafDublicates(String address, int num) {
        Set<IExecutionGraphVertex> vertices = getVerticesFromCache(address);
        List<IExecutionGraphVertex> result = new ArrayList<>(num);
        if (!vertices.isEmpty()) {
            Iterator<IExecutionGraphVertex> it = vertices.iterator();
            IExecutionGraphVertex champion = it.next();
            result.add(champion);
            while (it.hasNext()) {
                IExecutionGraphVertex value = it.next();
                if (num == 0) {
                    reassignOutgoingEdges(champion, value);
                    dgraph.removeVertex(value);
                } else {
                    num--;
                    result.add(value);
                }
            }
        }
        return result;
    }

    // TODO: not the best solution, but works as for now
    protected static boolean isCompareOperand(String name) {
        return name.contains("=") || name.contains("<") || name.contains(">") || name.contains("<>") || name.contains("=>") || name.contains("<=");
    }
    
    public static ExecutionGraph buildSingleNodeGraphForParseException(ICellAddress address, ErrorEval error, String formulaString) {
        
        ExecutionGraphVertex vertex = new ExecutionGraphVertex(address.a1Address().address());
        vertex.property(TYPE).set(CELL_WITH_FORMULA);
        vertex.property(VALUE).set(error);
        
        if (formulaString == null) { vertex.property(FORMULA_STRING).set(error.getErrorString()); }
        else { vertex.property(FORMULA_STRING).set(formulaString); }
        
        vertex.property(FORMULA_VALUES).set(error.getErrorString());
        vertex.property(FORMULA_PTG_STRING).set(error.getErrorString());
        vertex.property(PTG_STRING).set(error.getErrorString());
        vertex.property(SOURCE_OBJECT_ID).set("");
        
        DirectedGraph<IExecutionGraphVertex, ExecutionGraphEdge> emptyGraph = new DefaultDirectedGraph<>(ExecutionGraphEdge.class);
        emptyGraph.addVertex(vertex);
        return ExecutionGraph.wrap(emptyGraph);
    }
    
    public static IExecutionGraph buildGraphForNonFormulaCell(ExecutionGraph executionGraph, ICellValue cell, ICellAddress address) {
        
        ExecutionGraphVertex vertex = new ExecutionGraphVertex("VALUE");
        vertex.property(VALUE).set(cell.get());
        vertex.property(TYPE).set(CELL_WITH_VALUE);
        vertex.property(FORMULA_STRING).set(address.a1Address().address());
        vertex.property(FORMULA_VALUES).set(cell.toString());
        vertex.property(FORMULA_PTG_STRING).set("");
        vertex.property(PTG_STRING).set("");
        vertex.property(SOURCE_OBJECT_ID).set(address.dataModelId());

        DirectedGraph<IExecutionGraphVertex, ExecutionGraphEdge> dgraph = ExecutionGraph.unwrap(executionGraph);
        dgraph.addVertex(vertex);
        return ExecutionGraph.wrap(dgraph);
    }
    
    public static ExecutionGraph getSingleNodeGraph(ICellAddress address) {
        DirectedGraph<IExecutionGraphVertex, ExecutionGraphEdge> emptyGraph = new DefaultDirectedGraph<>(ExecutionGraphEdge.class);
        ExecutionGraphVertex vertex = new ExecutionGraphVertex(address.a1Address().address());
        vertex.property(TYPE).set(EMPTY_CELL);
        emptyGraph.addVertex(vertex);

        return ExecutionGraph.wrap(emptyGraph);
    }

    public void setConfig(ExecutionGraphConfig config) {
        this.config = config;
    }
}
