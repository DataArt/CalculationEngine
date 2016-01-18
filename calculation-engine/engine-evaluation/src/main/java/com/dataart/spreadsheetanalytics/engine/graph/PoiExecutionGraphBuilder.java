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
import static com.dataart.spreadsheetanalytics.engine.graph.GraphBuilderUtils.copyProperties;
import static com.dataart.spreadsheetanalytics.engine.graph.GraphBuilderUtils.isCompareOperand;
import static com.dataart.spreadsheetanalytics.engine.graph.GraphBuilderUtils.isSkipVertex;
import static com.dataart.spreadsheetanalytics.engine.graph.GraphBuilderUtils.ptgToString;
import static com.dataart.spreadsheetanalytics.engine.graph.GraphBuilderUtils.removeSymbol;
import static org.apache.poi.common.fork.IExecutionGraphVertex.Type.CELL_WITH_FORMULA;
import static org.apache.poi.common.fork.IExecutionGraphVertex.Type.CELL_WITH_REFERENCE;
import static org.apache.poi.common.fork.IExecutionGraphVertex.Type.CELL_WITH_VALUE;
import static org.apache.poi.common.fork.IExecutionGraphVertex.Type.IF;

import java.util.Collection;
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
import org.apache.poi.ss.formula.eval.ValueEval;
import org.apache.poi.ss.formula.ptg.Ptg;
import org.apache.poi.ss.formula.ptg.RefPtg;

import com.dataart.spreadsheetanalytics.api.model.IA1Address;
import com.dataart.spreadsheetanalytics.engine.CalculationEngineException;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.A1RangeAddress;
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
    
    protected static final ThreadLocal<AtomicInteger> ID_RANDOMIZER = new ThreadLocal<>();
    
    protected IExecutionGraphVertex namedVertexRoot;
    
    protected ExecutionGraph graph = new ExecutionGraph();
    protected Deque<Boolean> processName = new LinkedList<>();
    protected final ExecutionGraphConfig config;
    /*
     * The map is used to store vertices using value field as a key
     * One value may correspond to several vertices. That's why we use Deques instead of single values.
     */
    protected Map<ValueEval, Deque<ExecutionGraphVertex>> valueToVertex = new HashMap<>();
    protected Map<String, Set<ExecutionGraphVertex>> addressToVertices = new HashMap<>();

    public PoiExecutionGraphBuilder() {
        this(ExecutionGraphConfig.DEFAULT);
    }

    public PoiExecutionGraphBuilder(ExecutionGraphConfig config) {
        this.config = config;
        ID_RANDOMIZER.set(new AtomicInteger(0));
    }
    
    public ExecutionGraph getGraph() {
        return this.graph;
    }

    /**
     * This method should be used when creating a new vertex from a cell, so
     * vertex name is a cell's address. New Vertex will be created any time this
     * method is invoked. New vertex will be stored in address-to-set-of-vertices map.
     */
    @Override
    public ExecutionGraphVertex createVertex(String address) {
        // create new vertex object
        ExecutionGraphVertex v = new ExecutionGraphVertex(removeSymbol(address, '$'));

        // add vertex to actual graph
        this.graph.addVertex(v);

        // put new vertex to set of vertices with the same address, since they
        // all must have the same set of properties and values
        Set<ExecutionGraphVertex> vs = this.addressToVertices.containsKey(address) ? this.addressToVertices.get(address) : new HashSet<>();
        vs.add(v);
        this.addressToVertices.put(address, vs);

        return v;
    }

    @Override
    public ExecutionGraphVertex createVertex(Ptg ptg) {
        if (isSkipVertex(ptg)) { return null; }
        
        boolean isCell = ptg instanceof RefPtg;
        String name = ptgToString(ptg);

        if (isCell) { // cell
            return createVertex(name);
        } else { // operation
            ExecutionGraphVertex v = new ExecutionGraphVertex(name);
            this.graph.addVertex(v);
            return v;
        }
    }

    @Override
    public void connect(IExecutionGraphVertex from, IExecutionGraphVertex to) {
        this.graph.addEdge((ExecutionGraphVertex) from, (ExecutionGraphVertex) to);
    }

    @Override
    public void removeVertex(IExecutionGraphVertex vertex) {
        if (vertex == null) { return; }
        this.graph.removeVertex((ExecutionGraphVertex) vertex);
        String address = null;
        for (Entry<String, Set<ExecutionGraphVertex>> entry : this.addressToVertices.entrySet()) {
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
        if (!this.valueToVertex.containsKey(value)) { this.valueToVertex.put(value, new LinkedList<>()); }
        this.valueToVertex.get(value).push((ExecutionGraphVertex) vertex);
    }

    @Override
    public ExecutionGraphVertex getVertexFromStack(ValueEval value) {
        if (value == null) { throw new CalculationEngineException("ValueEval to assosiate vertex with cannot be null."); }
        /* the value is taken from the Deque while it is taken from the stack in poi WorkbookEvaluator class */
        return this.valueToVertex.get(value).pop();
    }

    @Override
    public void putVertexToCache(String address, IExecutionGraphVertex vertex) {
        if (!this.addressToVertices.containsKey(address)) { this.addressToVertices.put(address, new HashSet<>()); }
        this.addressToVertices.get(address).add((ExecutionGraphVertex) vertex);
    }
    
    @Override
    public void putVertexToCache(int row, int column, IExecutionGraphVertex vertex) {
        putVertexToCache(CellAddress.toA1Address(row, column), vertex);
    }
    
    @Override
    public Set<ExecutionGraphVertex> getVerticesFromCache(String address) {
        return this.addressToVertices.get(address) == null ? new HashSet<>() : this.addressToVertices.get(address);
    }

    @Override
    public Set<ExecutionGraphVertex> getVerticesFromCache(int row, int column) {
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
        // make identical vertices have the same set of properties
        // two vertices are identical if they have the same address value.
        // Id for every vertex is unique, so this is not a flag here
        for (Entry<String, Set<ExecutionGraphVertex>> en : this.addressToVertices.entrySet()) {
            Set<ExecutionGraphVertex> vs = this.addressToVertices.get(en.getKey());

            // the logic below is very fragile and based on some empirical model
            // and may not work for other type of graphs
            if (vs != null && vs.size() > 1) {
                ExecutionGraphVertex standard = null;

                for (ExecutionGraphVertex ivertex : vs) {
                    ExecutionGraphVertex vertex = ivertex;
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

        for (ExecutionGraphVertex vertex : this.graph.getVertices()) {

            // restore/add subgraphs to identical vertices
            Type type = vertex.properties().getType();

            if (isCell(type)) {
                String address = vertex.properties().getName();

                adressToCount.putIfAbsent(address, new AtomicInteger(0));

                if (adressToCount.get(address).incrementAndGet() > 1) { // count > 1
                    // need to link
                    Set<ExecutionGraphVertex> subgraphTops = new HashSet<>();

                    for (ExecutionGraphVertex tmpVertex : this.graph.getVertices()) {

                        String tmpAddress = tmpVertex.properties().getName();
                        if (address.equals(tmpAddress)) { // check for subgraph
                            for (ExecutionGraphEdge tmpEdge : this.graph.getIncomingEdgesOf(tmpVertex)) {
                                subgraphTops.add(this.graph.getEdgeSource(tmpEdge));
                            }
                        }
                    }

                    for (ExecutionGraphVertex subVertex : subgraphTops) {
                        if (!this.addressToVertices.containsKey(address)) { continue; }
                        for (ExecutionGraphVertex vertexOfAddress : this.addressToVertices.get(address)) {
                            this.graph.addEdge(subVertex, vertexOfAddress);
                        }
                    }
                }
            }

            /* Adding IF Value */
            if (IF == type) {
                Collection<ExecutionGraphEdge> two = this.graph.getIncomingEdgesOf(vertex);
                if (two.size() != 2) { throw new CalculationEngineException("IF must have only two incoming edges."); }

                Object ifBranchValue = null;
                for (ExecutionGraphEdge e : two) {
                    ExecutionGraphVertex oneOfTwo = this.graph.getEdgeSource(e);
                    if (!isCompareOperand(oneOfTwo.getName())) {
                        ifBranchValue = oneOfTwo.properties().getValue();
                        break;
                    }
                }
                vertex.properties().setValue(ifBranchValue);
            }

        }

        for (ExecutionGraphVertex vert : this.graph.getVertices()) {
            if (this.graph.getOutgoingEdgesOf(vert).isEmpty()) {
                ExecutionGraphVertex root = vert;
                root.formula = buildFormula(root, this);
                if (!multiRoot) { break; }
            }
        }

        if (this.config.getDuplicatesNumberThreshold() != -1) { removeAllDuplicates(); }
    }

    protected static CellFormulaExpression buildFormula(ExecutionGraphVertex vertex, PoiExecutionGraphBuilder state) {
        updateVertexType(vertex, state.graph);

        switch (vertex.type) {
            case CELL_WITH_REFERENCE:
            case CELL_WITH_FORMULA: {
                ExecutionGraphEdge edge = state.graph.getIncomingEdgesOf(vertex).iterator().next();
                ExecutionGraphVertex source = state.graph.getEdgeSource(edge);
                vertex.formula = buildFormula(source, state);
                vertex.value = source.value;
                return CellFormulaExpression.copyOf(vertex.formula);
            }
            case OPERATOR:
            case FUNCTION: {
                for (ExecutionGraphEdge edge : state.graph.getIncomingEdgesOf(vertex)) {
                    ExecutionGraphVertex ivertex = state.graph.getEdgeSource(edge);
                    buildFormula(ivertex, state);
                }
                return CellFormulaExpression.copyOf(vertex.formula);
            }
            case RANGE: {
                connectValuesToRange(vertex, state);
                for (ExecutionGraphEdge edge : state.graph.getIncomingEdgesOf(vertex)) {
                    buildFormula(state.graph.getEdgeSource(edge), state);
                }
                return CellFormulaExpression.copyOf(vertex.formula);
            }
            default: {
                return vertex.formula;
            }
        }
    }

    protected static void updateVertexType(ExecutionGraphVertex vertex, ExecutionGraph graph) {
        final Collection<ExecutionGraphEdge> incoming;
        if (vertex.type == CELL_WITH_VALUE && !(incoming = graph.getIncomingEdgesOf(vertex)).isEmpty()) {
            vertex.type = incoming.size() == 1 ? CELL_WITH_REFERENCE : CELL_WITH_FORMULA;        
        }
    }

    protected static void connectValuesToRange(ExecutionGraphVertex rangeVertex, PoiExecutionGraphBuilder state) {
        A1Address address = A1Address.fromA1Address(rangeVertex.getName());
        if (address instanceof A1RangeAddress) {
            List<IA1Address> addresses = A1RangeAddress.toA1Addresses((A1RangeAddress) address);
            for (IA1Address addr : addresses) {
                if (state.addressToVertices.get(addr.address()) == null) { continue; }
                state.addressToVertices.get(addr.address()).forEach(cellVertex -> state.connect(cellVertex, rangeVertex));
            }
        }
    }

    protected Set<ExecutionGraphVertex> getParents(ExecutionGraphVertex vertex) {
        Set<ExecutionGraphVertex> retvals = new HashSet<>();
        Collection<ExecutionGraphEdge> edges = this.graph.getOutgoingEdgesOf(vertex);
        for (ExecutionGraphEdge edge : edges) { retvals.add(this.graph.getEdgeTarget(edge)); }
        return retvals;
    }

    protected Set<ExecutionGraphVertex> getChildren(ExecutionGraphVertex vertex) {
        Set<ExecutionGraphVertex> retvals = new HashSet<>();
        Collection<ExecutionGraphEdge> edges = this.graph.getIncomingEdgesOf(vertex);
        for (ExecutionGraphEdge edge : edges) { retvals.add(this.graph.getEdgeSource(edge)); }
        return retvals;
    }

    protected void removeAllDuplicates() {
        Set<ExecutionGraphVertex> leaves = new HashSet<>();
        for (String address : this.addressToVertices.keySet()) {
            leaves.add(removeLeafDublicates(address, this.config.getDuplicatesNumberThreshold()));
        }
        processLeaves(leaves, this.config.getDuplicatesNumberThreshold());
    }

    protected void processLeaves(Set<ExecutionGraphVertex> leaves, int allowedNum) {
        Iterator<ExecutionGraphVertex> it = leaves.iterator();
        while (it.hasNext()) {
            ExecutionGraphVertex leaf = it.next();
            if (!this.graph.containsVertex(leaf)) {
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
                    for (ExecutionGraphEdge edge : this.graph.getIncomingEdgesOf(vertex)) {
                        ExecutionGraphVertex child = this.graph.getEdgeSource(edge);
                        if (Type.CONSTANT_VALUE.equals(child.getType())) {
                            childrenToRemove.add(child);
                        }
                    }
                    this.graph.removeVertex(vertex);
                }
            }
        }
        for (ExecutionGraphVertex child : childrenToRemove) {
            this.graph.removeVertex(child);
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
        for (ExecutionGraphEdge item : this.graph.getOutgoingEdgesOf(from))
            { this.graph.addEdge(to, this.graph.getEdgeTarget(item)); }
    }

    protected ExecutionGraphVertex removeLeafDublicates(String address, int num) {
        Set<ExecutionGraphVertex> vertices = getVerticesFromCache(address);
        ExecutionGraphVertex result = null;
        if (vertices.size() >= num) {
            Iterator<ExecutionGraphVertex> it = vertices.iterator();
            result = it.next();
            while (it.hasNext()) {
                ExecutionGraphVertex value = it.next();
                if (this.graph.containsVertex(value) && this.graph.containsVertex(result)) {
                    reassignOutgoingEdges(result, value);
                    this.graph.removeVertex(value);
                } else {
                    it.remove();
                }
            }
        }
        return result;
    }

    @Override public boolean getProcessNameState() { return this.processName.getFirst(); }
    @Override public void popRecentProcessNameState() { this.processName.pop(); }
    @Override public void putProcessNameState(boolean state) { this.processName.push(state); }
    @Override public boolean isProcessNameCacheEmpty() { return this.processName.isEmpty(); }
    @Override public IExecutionGraphVertex getNameVertexRoot() { return this.namedVertexRoot; }
    @Override public void setNameVertexRoot(IExecutionGraphVertex root) { this.namedVertexRoot = root; }

}
