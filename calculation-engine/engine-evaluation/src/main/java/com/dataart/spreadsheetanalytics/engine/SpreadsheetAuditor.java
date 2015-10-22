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
package com.dataart.spreadsheetanalytics.engine;

import static com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex.Type.CELL_WITH_FORMULA;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.FORMULA_PTG_STRING;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.FORMULA_STRING;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.FORMULA_VALUES;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.PTG_STRING;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.SOURCE_OBJECT_ID;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.TYPE;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.VALUE;

import org.apache.poi.common.execgraph.IExecutionGraphVertex;
import org.apache.poi.common.execgraph.IncorrectExternalReferenceException;
import org.apache.poi.common.execgraph.ValuesStackNotEmptyException;
import org.apache.poi.ss.formula.FormulaParseException;
import org.apache.poi.ss.formula.eval.ErrorEval;
import org.jgrapht.DirectedGraph;
import org.jgrapht.graph.DefaultDirectedGraph;

import com.dataart.spreadsheetanalytics.api.engine.IAuditor;
import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraph;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex.Type;
import com.dataart.spreadsheetanalytics.engine.execgraph.ExecutionGraph;
import com.dataart.spreadsheetanalytics.engine.execgraph.ExecutionGraphEdge;
import com.dataart.spreadsheetanalytics.engine.execgraph.ExecutionGraphVertex;
import com.dataart.spreadsheetanalytics.engine.execgraph.PoiExecutionGraphBuilder;
import com.dataart.spreadsheetanalytics.model.CellValue;

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
        
        try { cv = evaluator.evaluate(cell); }
        catch (ValuesStackNotEmptyException e) { return buildSingleNodeGraphForParseException(cell, ErrorEval.VALUE_INVALID, null); }
        catch (FormulaParseException | IncorrectExternalReferenceException e) {
            graphBuilder.runPostProcessing(false);
            return graphBuilder.get();
        }

        if (cv != null && ErrorEval.NAME_INVALID.equals(cv.get())) {
            return buildSingleNodeGraphForParseException(cell, ErrorEval.NAME_INVALID, null);
        }

        IExecutionGraph nonFormulaResult = buildGraphForEdgeCases(cv, cell);
        if (nonFormulaResult != null) { return nonFormulaResult; }

        graphBuilder.runPostProcessing(false);
        return graphBuilder.get();
    }

    @Override
    public IExecutionGraph buildDynamicExecutionGraph() {
        evaluator.evaluate();
        graphBuilder.runPostProcessing(true);
        return graphBuilder.get();
    }

    public void setMultiGraph(boolean multiGraph) {
        graphBuilder.setAllowMultipleGraphs(multiGraph);
    }

    protected IExecutionGraph buildGraphForEdgeCases(ICellValue evalCell, ICellAddress cell) {
        if (evalCell == null) { return graphBuilder.getSingleNodeGraph(cell); }
        
        if (!evaluator.model.isFormulaCell(cell)) { return buildGraphForNonFormulaCell(graphBuilder.get(), evalCell, cell); }
        
        return null;
    }
    
    protected static ExecutionGraph buildSingleNodeGraphForParseException(ICellAddress address, ErrorEval error, String formulaString) {
        
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

    protected static IExecutionGraph buildGraphForNonFormulaCell(ExecutionGraph executionGraph, ICellValue cell, ICellAddress address) {
        
        ExecutionGraphVertex vertex = new ExecutionGraphVertex("VALUE");
        vertex.property(VALUE).set(cell.get());
        vertex.property(TYPE).set(Type.CELL_WITH_VALUE);
        vertex.property(FORMULA_STRING).set(address.a1Address().address());
        vertex.property(FORMULA_VALUES).set(CellValue.fromCellValueToString(cell));
        vertex.property(FORMULA_PTG_STRING).set("");
        vertex.property(PTG_STRING).set("");
        vertex.property(SOURCE_OBJECT_ID).set(address.dataModelId());

        DirectedGraph<IExecutionGraphVertex, ExecutionGraphEdge> dgraph = ExecutionGraph.unwrap(executionGraph);
        dgraph.addVertex(vertex);
        return ExecutionGraph.wrap(dgraph);
    }
    
    @Override
    public IEvaluator getEvaluator() { return evaluator; }
}
