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
package com.dataart.spreadsheetanalytics.engine.graph;

import static com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex.isCell;
import static com.dataart.spreadsheetanalytics.engine.graph.GraphBuilderUtils.ptgToString;
import static java.lang.String.join;
import static java.util.Arrays.asList;
import static java.util.stream.Collectors.toList;
import static org.apache.poi.common.fork.IExecutionGraphVertex.Type.CELL_WITH_FORMULA;
import static org.apache.poi.common.fork.IExecutionGraphVertex.Type.CELL_WITH_REFERENCE;
import static org.apache.poi.common.fork.IExecutionGraphVertex.Type.CELL_WITH_VALUE;
import static org.apache.poi.common.fork.IExecutionGraphVertex.Type.EMPTY_CELL;
import static org.apache.poi.common.fork.IExecutionGraphVertex.Type.IF;
import static org.apache.poi.common.fork.IExecutionGraphVertex.Type.OPERATOR;

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

import org.apache.poi.common.fork.IExecutionGraphBuilder;
import org.apache.poi.common.fork.IExecutionGraphVertex;
import org.apache.poi.common.fork.IExecutionGraphVertex.Type;
import org.apache.poi.common.fork.IExecutionGraphVertexProperties;
import org.apache.poi.ss.formula.WorkbookEvaluator;
import org.apache.poi.ss.formula.eval.ErrorEval;
import org.apache.poi.ss.formula.eval.ValueEval;
import org.apache.poi.ss.formula.functions.Area2DValues;
import org.apache.poi.ss.formula.ptg.AbstractFunctionPtg;
import org.apache.poi.ss.formula.ptg.ParenthesisPtg;
import org.apache.poi.ss.formula.ptg.Ptg;
import org.apache.poi.ss.formula.ptg.RefPtg;
import org.apache.poi.ss.formula.ptg.UnionPtg;
import org.apache.poi.ss.formula.ptg.ValueOperatorPtg;
import org.jgrapht.DirectedGraph;
import org.jgrapht.graph.DefaultDirectedGraph;

import com.dataart.spreadsheetanalytics.api.model.IA1Address;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.engine.CalculationEngineException;
import com.dataart.spreadsheetanalytics.model.CellAddress;

/**
 * This class is a direct implementation of {@link IExecutionGraphBuilder} interface from forked POI library.
 * It's purpose is to provide actual storage for Graph object while {@link WorkbookEvaluator} does evaluation.
 * From the beginning of evaluation till the end it fills graph with nodes and edges.
 * Temporary state is saved in internal Maps and Sets.
 * When evaluation is done it's {@link #runPostProcessing(boolean)} method does 'clean' graph's structure.
 * 
 * New instance of this class should be created for each evaluation (with graph building).
 */
public class PoiExecutionGraphBuilder implements IExecutionGraphBuilder {

    protected static final String CONSTANT_VALUE_NAME = "VALUE";
    protected static final String UNDEFINED_EXTERNAL_FUNCTION = "#external#";
    
    protected static final char B_LEFT = '[';
    protected static final char B_RIGHT = ']';
    
    protected static final ThreadLocal<AtomicInteger> ID_RANDOMIZER = new ThreadLocal<>();
    
    protected IExecutionGraphVertex namedVertexRoot;
    
    protected DirectedGraph<ExecutionGraphVertex, ExecutionGraphEdge> dgraph = new DefaultDirectedGraph<>((s, t) -> new ExecutionGraphEdge(s, t));
    protected Deque<Boolean> processName = new LinkedList<>();
    protected final ExecutionGraphConfig config;
    /*
     * The map is used to store vertices using value field as a key
     * One value may correspond to several vertices. That's why we use Deques instead of single values.
     */
    protected Map<ValueEval, Deque<IExecutionGraphVertex>> valueToVertex = new HashMap<>();
    protected Map<String, Set<IExecutionGraphVertex>> addressToVertices = new HashMap<>();

    public PoiExecutionGraphBuilder() {
        this(ExecutionGraphConfig.DEFAULT);
    }

    public PoiExecutionGraphBuilder(ExecutionGraphConfig config) {
        this.config = config;
        ID_RANDOMIZER.set(new AtomicInteger(0));
    }
    
    public ExecutionGraph get() {
        return ExecutionGraph.wrap(this.dgraph);
    }

    /**
     * This method should be used when creating a new vertex from a cell, so
     * vertex name is a cell's address. New Vertex will be created any time this
     * method is invoked. New vertex will be stored in address-to-set-of-vertices map.
     */
    @Override
    public IExecutionGraphVertex createVertex(String address) {
        // create new vertex object
        ExecutionGraphVertex v = new ExecutionGraphVertex(removeSymbol(address, '$'));

        // add vertex to actual graph
        this.dgraph.addVertex(v);

        // put new vertex to set of vertices with the same address, since they
        // all must have the same set of properties and values
        Set<IExecutionGraphVertex> vs = this.addressToVertices.containsKey(address) ? this.addressToVertices.get(address) : new HashSet<>();
        vs.add(v);
        this.addressToVertices.put(address, vs);

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
            this.dgraph.addVertex(v);
            return v;
        }
    }

    @Override
    public void connect(IExecutionGraphVertex from, IExecutionGraphVertex to) {
        this.dgraph.addEdge((ExecutionGraphVertex) from, (ExecutionGraphVertex) to);
    }

    @Override
    public void removeVertex(IExecutionGraphVertex vertex) {
        if (vertex == null) { return; }
        this.dgraph.removeVertex((ExecutionGraphVertex) vertex);
        String address = null;
        for (Entry<String, Set<IExecutionGraphVertex>> entry : this.addressToVertices.entrySet()) {
            if (entry.getValue().contains(vertex)) {
                address = entry.getKey();
                entry.getValue().remove(vertex);
            }
        }
        if (null != address && this.addressToVertices.get(address).isEmpty()) { this.addressToVertices.remove(address); }
    }

    @Override
    public void putVertexToStack(ValueEval value, IExecutionGraphVertex vertex) {
        if (value == null) { throw new CalculationEngineException("ValueEval to assosiate vertex with cannot be null."); }
        if (!this.valueToVertex.containsKey(value)) { this.valueToVertex.put(value, new LinkedList<IExecutionGraphVertex>()); }
        this.valueToVertex.get(value).push(vertex);
    }

    @Override
    public IExecutionGraphVertex getVertexFromStack(ValueEval value) {
        if (value == null) { throw new CalculationEngineException("ValueEval to assosiate vertex with cannot be null."); }
        /* the value is taken from the Deque while it is taken from the stack in poi WorkbookEvaluator class */
        return this.valueToVertex.get(value).pop();
    }

    @Override
    public void putVertexToCache(String address, IExecutionGraphVertex vertex) {
        if (!this.addressToVertices.containsKey(address)) { this.addressToVertices.put(address, new HashSet<>()); }
        this.addressToVertices.get(address).add(vertex);
    }
    
    @Override
    public void putVertexToCache(int row, int column, IExecutionGraphVertex vertex) {
        putVertexToCache(CellAddress.toA1Address(row, column), vertex);
    }
    
    @Override
    public Set<IExecutionGraphVertex> getVerticesFromCache(String address) {
        return this.addressToVertices.get(address) == null ?
                new HashSet<IExecutionGraphVertex>() : this.addressToVertices.get(address);
    }

    @Override
    public Set<IExecutionGraphVertex> getVerticesFromCache(int row, int column) {
        return getVerticesFromCache(CellAddress.toA1Address(row, column));
    }

    @Override
    public IExecutionGraphVertexProperties getVertexProperties(IExecutionGraphVertex vertex) {
        return ((ExecutionGraphVertex) vertex).properties();
    }

    /**
     * Do anything you want here. After graph is completed and we are out of POI
     * context you can add\remove\etc any information you want.
     */
    public void runPostProcessing(boolean multiRoot) {
        DirectedGraph<ExecutionGraphVertex, ExecutionGraphEdge> graph = this.dgraph;

        // make identical vertices have the same set of properties
        // two vertices are identical if they have the same address value.
        // Id for every vertex is unique, so this is not a flag here
        for (Entry<String, Set<IExecutionGraphVertex>> en : this.addressToVertices.entrySet()) {
            Set<IExecutionGraphVertex> vs = this.addressToVertices.get(en.getKey());

            // the logic below is very fragile and based on some empirical model
            // and may not work for other type of graphs
            if (vs != null && vs.size() > 1) {
                ExecutionGraphVertex standard = null;

                for (IExecutionGraphVertex ivertex : vs) {
                    ExecutionGraphVertex vertex = (ExecutionGraphVertex) ivertex;
                    if (CELL_WITH_FORMULA == vertex.properties().getType() || null != vertex.properties().getAlias())
                    { standard = vertex; break; }
                }

                if (standard != null) {
                    copyProperties(standard, vs);
                }
            }
        }

        // copy or link subgraphs to identical vertices and modify Formula field with additional values
        Map<String, AtomicInteger> adressToCount = new HashMap<>();

        for (ExecutionGraphVertex vertex : graph.vertexSet()) {

            // restore/add subgraphs to identical vertices
            Type type = vertex.properties().getType();

            if (isCell(type)) {
                String address = vertex.properties().getName();

                adressToCount.putIfAbsent(address, new AtomicInteger(0));

                if (adressToCount.get(address).incrementAndGet() > 1) { // count > 1
                    // need to link
                    Set<ExecutionGraphVertex> subgraphTops = new HashSet<>();

                    for (IExecutionGraphVertex itmpVertex : graph.vertexSet()) {

                        ExecutionGraphVertex tmpVertex = (ExecutionGraphVertex) itmpVertex;

                        String tmpAddress = tmpVertex.properties().getName();
                        if (address.equals(tmpAddress)) { // check for subgraph
                            for (ExecutionGraphEdge tmpEdge : graph.incomingEdgesOf(tmpVertex)) {
                                subgraphTops.add(graph.getEdgeSource(tmpEdge));
                            }
                        }
                    }

                    for (IExecutionGraphVertex subVertex : subgraphTops) {
                        if (!this.addressToVertices.containsKey(address)) { continue; }
                        for (IExecutionGraphVertex vertexOfAddress : this.addressToVertices.get(address)) {
                            graph.addEdge((ExecutionGraphVertex) subVertex, (ExecutionGraphVertex) vertexOfAddress);
                        }
                    }
                }
            }

            /* Adding IF Value */
            if (IF == type) {
                Set<ExecutionGraphEdge> two = graph.incomingEdgesOf(vertex);
                if (two.size() != 2) { throw new CalculationEngineException("IF must have only two incoming edges."); }

                Object ifBranchValue = null;
                for (ExecutionGraphEdge e : two) {
                    ExecutionGraphVertex oneOfTwo = graph.getEdgeSource(e);
                    if (!isCompareOperand(oneOfTwo.getName())) {
                        ifBranchValue = oneOfTwo.properties().getValue();
                        break;
                    }
                }
                vertex.properties().setValue(ifBranchValue);
            }

        }

        for (ExecutionGraphVertex vert : graph.vertexSet()) {
            if (graph.outgoingEdgesOf(vert).isEmpty()) {
                ExecutionGraphVertex root = vert;
                root.formula = buildFormula(root, this);
                if (!multiRoot) { break; }
            }
        }

        if (this.config.getDuplicatesNumberThreshold() != -1) { removeAllDuplicates(); }
    }

    //TODO: this recursive method call costs about 10-15% of all graph building time, need to fix it.
    protected static CellFormulaExpression buildFormula(ExecutionGraphVertex vertex, PoiExecutionGraphBuilder state) {
        updateVertexType(vertex, state.dgraph);

        switch (vertex.type) {
            case CELL_WITH_VALUE: {
                return CellFormulaExpression.copyOf(vertex.formula);
            }
            case CELL_WITH_REFERENCE:
            case CELL_WITH_FORMULA: {
                ExecutionGraphEdge edge = state.dgraph.incomingEdgesOf(vertex).iterator().next();
                ExecutionGraphVertex source = state.dgraph.getEdgeSource(edge);
                vertex.formula = buildFormula(source, state);
                vertex.value = source.value;
                return CellFormulaExpression.copyOf(vertex.formula);
            }
            case OPERATOR:
            case FUNCTION: {
                List<String> formulaStringNodes = new LinkedList<>();
                List<String> formulaValuesNodes = new LinkedList<>();
                List<String> formulaPtgNodes = new LinkedList<>();
                List<String> ptgNodes = new LinkedList<>();
                Object[] formulaPtg = vertex.properties().getFormulaPtg();
                for (ExecutionGraphEdge edge : state.dgraph.incomingEdgesOf(vertex)) {
                    ExecutionGraphVertex ivertex = state.dgraph.getEdgeSource(edge);
                    CellFormulaExpression formula = buildFormula(ivertex, state);
                    formulaStringNodes.add(formula.formulaStr());
                    formulaValuesNodes.add(formula.formulaValues());
                    formulaPtgNodes.add(formula.formulaPtgStr());
                    ptgNodes.add(formula.ptgStr());
                    // if the parent node has error value we leave it as it is
                    // otherwise it will represent the child's node error value
                    if (isErrorValue(ivertex.getValue()) && inheritsErrorValue(vertex)) {
                        vertex.value = ivertex.getValue();
                    }
                }
                vertex.formula.formulaStr(createFormulaString(formulaPtg[0], formulaStringNodes, vertex));
                vertex.formula.formulaValues(createFormulaString(formulaPtg[0], formulaValuesNodes, vertex));
                vertex.formula.formulaPtgStr(createPtgString(formulaPtg[0], formulaPtgNodes, vertex));
                vertex.formula.ptgStr(createPtgString(formulaPtg[0], ptgNodes, vertex));
                vertex.formula.formulaPtgStr("");
                vertex.formula.ptgStr("");
                return CellFormulaExpression.copyOf(vertex.formula);
            }
            case IF: {
                List<String> formulaValuesNodes = new LinkedList<>();
                List<String> formulaPtgNodes = new LinkedList<>();
                List<String> ptgNodes = new LinkedList<>();
                for (ExecutionGraphEdge edge : state.dgraph.incomingEdgesOf(vertex)) {
                    ExecutionGraphVertex ivertex = state.dgraph.getEdgeSource(edge);
                    CellFormulaExpression formula = buildFormula(ivertex, state);
                    formulaValuesNodes.add(formula.formulaValues());
                    formulaPtgNodes.add(formula.formulaPtgStr());
                    ptgNodes.add(formula.ptgStr());
                    if (OPERATOR != ivertex.type) { vertex.value = ivertex.value; }
                }
                Collections.sort(formulaValuesNodes, (n1, n2) -> isCompareOperand(n1) ? -1 : 0);
                vertex.formula.formulaValues(createFormulaString(null, formulaValuesNodes, vertex));
                vertex.formula.formulaPtgStr(createPtgString(null, formulaPtgNodes, vertex));
                vertex.formula.ptgStr(createPtgString(null, ptgNodes, vertex));
                vertex.formula.formulaPtgStr("");
                vertex.formula.ptgStr("");
                return CellFormulaExpression.copyOf(vertex.formula);
            }
            case RANGE: {
                vertex.formula.formulaStr(vertex.properties().getName());
                vertex.formula.formulaValues(vertex.properties().getValue().toString());
                vertex.formula.formulaPtgStr(vertex.properties().getValue().toString());
                vertex.formula.ptgStr(vertex.properties().getName());
                connectValuesToRange(vertex, state);
                for (ExecutionGraphEdge edge : state.dgraph.incomingEdgesOf(vertex)) {
                    buildFormula(state.dgraph.getEdgeSource(edge), state);
                }
                return CellFormulaExpression.copyOf(vertex.formula);
            }
            case CONSTANT_VALUE: {
                vertex.properties().setName(CONSTANT_VALUE_NAME);
                vertex.formula.formulaStr(vertex.properties().getName());
                vertex.formula.formulaValues(vertex.getValue().toString());
                vertex.formula.formulaPtgStr(vertex.getValue().toString());
                vertex.formula.ptgStr(vertex.properties().getName());
                return CellFormulaExpression.copyOf(vertex.formula);
            }
            default: {
                return vertex.formula;
            }
        }
    }

    protected static void updateVertexType(ExecutionGraphVertex vertex, DirectedGraph<ExecutionGraphVertex, ExecutionGraphEdge> dgraph) {
        if (vertex.type == CELL_WITH_VALUE && !dgraph.incomingEdgesOf(vertex).isEmpty()) {
            vertex.type = dgraph.incomingEdgesOf(vertex).size() == 1 ? CELL_WITH_REFERENCE : CELL_WITH_FORMULA;        
        }
    }

    protected static void connectValuesToRange(ExecutionGraphVertex rangeVertex, PoiExecutionGraphBuilder state) {
        Object cellValue = rangeVertex.getValue();
        if (!(cellValue instanceof Area2DValues)) { return; }
        
        for (String adress : ((Area2DValues) cellValue).getRangeCellAddresses()) {
            if (state.addressToVertices.get(adress) == null) { continue; }
            
            state.addressToVertices.get(adress).forEach(cellVertex -> state.connect(cellVertex, rangeVertex));
        }
    }

    protected static boolean isSkipVertex(Ptg ptg) {
        return ptg instanceof ParenthesisPtg;
    }

    protected static String createFormulaString(Object optg, List<String> ops, ExecutionGraphVertex vertex) {
        String opname = "";
        if (optg == null) { // IF
            opname = "IF";
        } else if (optg instanceof Ptg) {
            opname = ptgToString((Ptg) optg);
            /* if the function was not recognized as internal function we use the node name as the function name */
            if (UNDEFINED_EXTERNAL_FUNCTION.equals(opname)) { opname = vertex.getName(); }
        } else {
            opname = optg.toString();
        }
        
        if (optg == null || optg instanceof AbstractFunctionPtg) {
            return removeBrackets(new StringBuilder()
                                    .append(opname)
                                    .append("(")
                                    .append(join(",", asList(ops).stream().map(v -> v.toString()).collect(toList())))
                                    .append(")")
                                    .toString());
        } else if (optg instanceof ValueOperatorPtg || optg instanceof UnionPtg) {
            return removeBrackets(new StringBuilder()
                                    .append(ops.size() > 1 ? ops.get(1) : "")
                                    .append(" ")
                                    .append(opname)
                                    .append(" ")
                                    .append(ops.size() > 0 ? ops.get(0) : "")
                                    .toString());
        }
        
        return "";
    }

    protected static String createPtgString(Object optg, List<String> ops, ExecutionGraphVertex vertex) {
        String opname = "";
        
        if (optg == null) {
            return removeBrackets(new StringBuilder()
                                    .append(join(",", asList(ops).stream().map(v -> v.toString()).collect(toList())))
                                    .append(" IF")
                                    .toString());
        } else {
            opname = optg instanceof Ptg ? ptgToString((Ptg) optg) : optg.toString();
            /* if the function was not recognized as internal function we use the node name as the function name */
            if (UNDEFINED_EXTERNAL_FUNCTION.equals(opname)) { opname = vertex.getName(); }
        }
        
        
        if (optg instanceof AbstractFunctionPtg) {
            return removeBrackets(new StringBuilder()
                                    .append(join(",", asList(ops).stream().map(v -> v.toString()).collect(toList())))
                                    .append(" ")
                                    .append(opname)
                                    .toString());
        } else if (optg instanceof ValueOperatorPtg || optg instanceof UnionPtg) {
            return removeBrackets(new StringBuilder()
                                    .append(ops.size() > 1 ? ops.get(1) : "")
                                    .append(" ")
                                    .append(ops.size() > 0 ? ops.get(0) : "")
                                    .append(" ")
                                    .append(opname)
                                    .toString());
        }

        return "";
    }

    protected static String removeBrackets(String str) {
        if (str.indexOf(B_LEFT) < 0) { return str; }
        
        final char[] chars = str.toCharArray();
        int pos = 0;
        for (int i = 0; i < chars.length; i++) {
            if (chars[i] != B_LEFT && chars[i] != B_RIGHT) 
                { chars[pos++] = chars[i]; }
        }
        return new String(chars, 0, pos);
    }
    
    public static String removeSymbol(String str, char symbol) {
        if (str.indexOf(symbol) < 0) { return str; }
        
        final char[] chars = str.toCharArray();
        int pos = 0;
        for (int i = 0; i < chars.length; i++) {
            if (chars[i] != symbol) 
                { chars[pos++] = chars[i]; }
        }
        return new String(chars, 0, pos);
    }

    protected static boolean isErrorValue(Object val) {
        return val instanceof ErrorEval;
    }

    protected static boolean inheritsErrorValue(IExecutionGraphVertex ivertex) {
        ExecutionGraphVertex vertex = (ExecutionGraphVertex) ivertex;
        boolean isNotInherFunction = "ISERROR".equals(vertex.getName());
        boolean isError = isErrorValue(vertex.getValue());
        return !(isError || isNotInherFunction);
    }

    /**
     * Does copy of all properties for every Vertex from @param vertices. the
     * first @param standard is used as object to copy from.
     */
    protected static void copyProperties(ExecutionGraphVertex standard, Set<IExecutionGraphVertex> vertices) {
        for (IExecutionGraphVertex vertex : vertices) {
            if (standard.equals(vertex)) { continue; }

            IExecutionGraphVertexProperties from = standard.properties();
            IExecutionGraphVertexProperties to = ((ExecutionGraphVertex) vertex).properties();

            //copy all, but: IndexInFormula and VertexId
            to.setName(from.getName());
            to.setAlias(from.getAlias());
            to.setValue(from.getValue());
            to.setType(from.getType());
            to.setFormulaString(from.getFormulaString());
            to.setFormulaValues(from.getFormulaValues());
            to.setFormulaPtg(from.getFormulaPtg());
            to.setPtgs(from.getPtgs());
            to.setSourceObjectId(from.getSourceObjectId());
            to.setRootFormulaId(from.getRootFormulaId());
            to.setFormulaPtgString(from.getFormulaPtgString());
            to.setPtgString(from.getPtgString());
        }
    }

    protected Set<ExecutionGraphVertex> getParents(ExecutionGraphVertex vertex) {
        Set<ExecutionGraphVertex> retvals = new HashSet<>();
        Set<ExecutionGraphEdge> edges = this.dgraph.outgoingEdgesOf(vertex);
        for (ExecutionGraphEdge edge : edges) { retvals.add(this.dgraph.getEdgeTarget(edge)); }
        return retvals;
    }

    protected Set<ExecutionGraphVertex> getChildren(ExecutionGraphVertex vertex) {
        Set<ExecutionGraphVertex> retvals = new HashSet<>();
        Set<ExecutionGraphEdge> edges = this.dgraph.incomingEdgesOf(vertex);
        for (ExecutionGraphEdge edge : edges) { retvals.add(this.dgraph.getEdgeSource(edge)); }
        return retvals;
    }

    protected void removeAllDuplicates() {
        Set<ExecutionGraphVertex> leaves = new HashSet<>();
        for (String address : this.addressToVertices.keySet()) {
            leaves.add((ExecutionGraphVertex) removeLeafDublicates(address, this.config.getDuplicatesNumberThreshold()));
        }
        processLeaves(leaves, this.config.getDuplicatesNumberThreshold());
    }

    protected void processLeaves(Set<ExecutionGraphVertex> leaves, int allowedNum) {
        Iterator<ExecutionGraphVertex> it = leaves.iterator();
        while (it.hasNext()) {
            ExecutionGraphVertex leaf = it.next();
            if (!this.dgraph.containsVertex(leaf)) {
                it.remove();
                continue;
            }
            Set<ExecutionGraphVertex> parents = getParents(leaf);
            Map<ExecutionGraphVertex, List<ExecutionGraphVertex>> chosen = new HashMap<>();
            for (ExecutionGraphVertex parent : parents) {
                if (isCyclicRef(parent, leaf)) { continue; }
                ExecutionGraphVertex found = returnVertexDuplicate(chosen.keySet(), parent);
                if (found == null) {
                    chosen.put(parent, new LinkedList<>());
                } else {
                    List<ExecutionGraphVertex> duplicates = chosen.get(found);
                    duplicates.add(parent);
                    chosen.put(found, duplicates);
                }
            }
            reduceDuplicates(chosen, allowedNum);
            processLeaves(chosen.keySet(), allowedNum);
        }
    }

    protected void reduceDuplicates(Map<ExecutionGraphVertex, List<ExecutionGraphVertex>> verticesMap, int allowedNum) {
        Set<ExecutionGraphVertex> childrenToRemove = new HashSet<>();
        Iterator<Entry<ExecutionGraphVertex, List<ExecutionGraphVertex>>> enterator = verticesMap.entrySet().iterator();
        while (enterator.hasNext()) {
            Entry<ExecutionGraphVertex, List<ExecutionGraphVertex>> entry = enterator.next();
            List<ExecutionGraphVertex> values = entry.getValue();
            if (values.size() > allowedNum) {
                for (ExecutionGraphVertex vertex : values) {
                    reassignOutgoingEdges(entry.getKey(), vertex);
                    for (ExecutionGraphEdge edge : this.dgraph.incomingEdgesOf(vertex)) {
                        ExecutionGraphVertex child = this.dgraph.getEdgeSource(edge);
                        if (Type.CONSTANT_VALUE.equals(child.getType())) {
                            childrenToRemove.add(child);
                        }
                    }
                    this.dgraph.removeVertex(vertex);
                }
            }
        }
        for (ExecutionGraphVertex child : childrenToRemove) {
            this.dgraph.removeVertex(child);
        }
    }

    protected boolean isCyclicRef(ExecutionGraphVertex parent, ExecutionGraphVertex child) {
        Set<ExecutionGraphVertex> grandParents = getParents(parent);
        return grandParents.contains(child);
    }

    protected static ExecutionGraphVertex returnVertexDuplicate(Collection<ExecutionGraphVertex> set, ExecutionGraphVertex value) {
        for (ExecutionGraphVertex item : set) 
            { if (item.compareTo(value) == 1) { return item; } }
        return null;
    }

    protected void reassignOutgoingEdges(ExecutionGraphVertex to, ExecutionGraphVertex from) {
        for (ExecutionGraphEdge item : this.dgraph.outgoingEdgesOf(from))
            { this.dgraph.addEdge(to, this.dgraph.getEdgeTarget(item)); }
    }

    protected IExecutionGraphVertex removeLeafDublicates(String address, int num) {
        Set<IExecutionGraphVertex> vertices = getVerticesFromCache(address);
        ExecutionGraphVertex result = null;
        if (vertices.size() >= num) {
            Iterator<IExecutionGraphVertex> it = vertices.iterator();
            result = (ExecutionGraphVertex) it.next();
            while (it.hasNext()) {
                ExecutionGraphVertex value = (ExecutionGraphVertex) it.next();
                if (this.dgraph.containsVertex(value) && this.dgraph.containsVertex(result)) {
                    reassignOutgoingEdges(result, value);
                    this.dgraph.removeVertex(value);
                } else {
                    it.remove();
                }
            }
        }
        return result;
    }

    protected static boolean isCompareOperand(String name) {
        return name.contains("=") || name.contains("<") || name.contains(">") || name.contains("<>") || name.contains("=>") || name.contains("<=");
    }

    public static ExecutionGraph buildSingleVertexGraphForParseException(ICellAddress address, ErrorEval error, String formulaString) {
        
        ExecutionGraphVertex vertex = new ExecutionGraphVertex(address.a1Address().address());
        vertex.properties().setType(CELL_WITH_FORMULA);
        vertex.properties().setValue(error);
        
        if (formulaString == null) { vertex.properties().setFormulaString(error.getErrorString()); }
        else { vertex.properties().setFormulaString(formulaString); }
        
        vertex.properties().setFormulaValues(error.getErrorString());
        vertex.properties().setFormulaPtgString(error.getErrorString());
        vertex.properties().setPtgString(error.getErrorString());
        vertex.properties().setSourceObjectId(address.getDataModelId());
        
        DirectedGraph<ExecutionGraphVertex, ExecutionGraphEdge> emptyGraph = new DefaultDirectedGraph<>(ExecutionGraphEdge.class);
        emptyGraph.addVertex(vertex);
        return ExecutionGraph.wrap(emptyGraph);
    }
    
    public static ExecutionGraph buildSingleVertexGraphForCellWithValue(ICellValue cell, ICellAddress address) {
        
        ExecutionGraphVertex vertex = new ExecutionGraphVertex(address.a1Address().address());
        vertex.properties().setValue(cell.get());
        vertex.properties().setType(CELL_WITH_VALUE);
        vertex.properties().setFormulaString(address.a1Address().address());
        vertex.properties().setFormulaValues(cell.get().toString());
        vertex.properties().setFormulaPtgString("");
        vertex.properties().setPtgString("");
        vertex.properties().setSourceObjectId(address.getDataModelId());

        DirectedGraph<ExecutionGraphVertex, ExecutionGraphEdge> emptyGraph = new DefaultDirectedGraph<>(ExecutionGraphEdge.class);
        emptyGraph.addVertex(vertex);
        return ExecutionGraph.wrap(emptyGraph);
    }
    
    public static ExecutionGraph buildSingleVertexGraphForEmptyCell(IA1Address address) {
        ExecutionGraphVertex vertex = new ExecutionGraphVertex(address.address());
        vertex.properties().setType(EMPTY_CELL);

        DirectedGraph<ExecutionGraphVertex, ExecutionGraphEdge> emptyGraph = new DefaultDirectedGraph<>(ExecutionGraphEdge.class);
        emptyGraph.addVertex(vertex);
        return ExecutionGraph.wrap(emptyGraph);
    }

    @Override public boolean getProcessNameState() { return this.processName.getFirst(); }
    @Override public void popRecentProcessNameState() { this.processName.pop(); }
    @Override public void putProcessNameState(boolean state) { this.processName.push(state); }
    @Override public boolean isProcessNameCacheEmpty() { return this.processName.isEmpty(); }
    @Override public IExecutionGraphVertex getNameVertexRoot() { return this.namedVertexRoot; }
    @Override public void setNameVertexRoot(IExecutionGraphVertex root) { this.namedVertexRoot = root; }

}
