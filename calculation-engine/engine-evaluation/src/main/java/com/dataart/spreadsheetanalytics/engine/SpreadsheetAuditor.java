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

import static com.dataart.spreadsheetanalytics.engine.execgraph.PoiExecutionGraphBuilder.buildGraphForNonFormulaCell;
import static com.dataart.spreadsheetanalytics.engine.execgraph.PoiExecutionGraphBuilder.buildSingleNodeGraphForParseException;
import static com.dataart.spreadsheetanalytics.engine.execgraph.PoiExecutionGraphBuilder.getSingleNodeGraph;

import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

import org.apache.poi.common.execgraph.IncorrectExternalReferenceException;
import org.apache.poi.common.execgraph.ValuesStackNotEmptyException;
import org.apache.poi.ss.formula.FormulaParseException;
import org.apache.poi.ss.formula.eval.ErrorEval;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.dataart.spreadsheetanalytics.api.engine.IAuditor;
import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraph;
import com.dataart.spreadsheetanalytics.engine.execgraph.ExecutionGraph;
import com.dataart.spreadsheetanalytics.engine.execgraph.ExecutionGraphConfig;
import com.dataart.spreadsheetanalytics.engine.execgraph.PoiExecutionGraphBuilder;

/**
 * TODO
 */
public class SpreadsheetAuditor implements IAuditor {
    private static final Logger log = LoggerFactory.getLogger(SpreadsheetAuditor.class);

    protected final SpreadsheetEvaluator evaluator;
    protected final Lock graphLock = new ReentrantLock();

    public SpreadsheetAuditor(SpreadsheetEvaluator evaluator) {
        this.evaluator = evaluator;
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
        return buildDynamicExecutionGraph(cell, ExecutionGraphConfig.DEFAULT);
    }
    
    @Override
    public IExecutionGraph buildDynamicExecutionGraph(ICellAddress cell, ExecutionGraphConfig config) {
        try {
            graphLock.lock();
            log.debug("Building Graph for address: {}.", cell);
            
            /* Clear POI cache to allow graph building to be full */
            this.evaluator.poiEvaluator.clearAllCachedResultValues();
            
            PoiExecutionGraphBuilder graphBuilder = new PoiExecutionGraphBuilder();
            graphBuilder.setExecutionGraphConfig(config);
            this.evaluator.setExecutionGraphBuilder(graphBuilder);
            
            ICellValue cv;
            
            try { cv = evaluator.evaluate(cell); }
            catch (ValuesStackNotEmptyException e) {
                return buildSingleNodeGraphForParseException(cell, ErrorEval.VALUE_INVALID, null); }
            catch (FormulaParseException | IncorrectExternalReferenceException e) {
                graphBuilder.runPostProcessing(false);
                return graphBuilder.get();
            }
    
            if (cv != null && ErrorEval.NAME_INVALID.getErrorString().equals(cv.get())) {
                return buildSingleNodeGraphForParseException(cell, ErrorEval.NAME_INVALID, null);
            }
    
            IExecutionGraph nonFormulaResult = buildGraphForEdgeCases(graphBuilder.get(), cv, cell);
            if (nonFormulaResult != null) { return nonFormulaResult; }
    
            graphBuilder.runPostProcessing(false);
            return graphBuilder.get();
            
        } finally {
            graphLock.unlock();
            log.debug("Building Graph for address: {} is finished.", cell);
        }
    }

    @Override
    public IExecutionGraph buildDynamicExecutionGraph() {
        return buildDynamicExecutionGraph(ExecutionGraphConfig.DEFAULT);
    }

    @Override
    public IExecutionGraph buildDynamicExecutionGraph(ExecutionGraphConfig config) {
        try {
            graphLock.lock();
            log.debug("Building Graph for DataModel: {}.", evaluator.model.name());
            
            /* Clear POI cache to allow graph building to be full */
            this.evaluator.poiEvaluator.clearAllCachedResultValues();
            
            PoiExecutionGraphBuilder graphBuilder = new PoiExecutionGraphBuilder();
            graphBuilder.setExecutionGraphConfig(config);
            this.evaluator.setExecutionGraphBuilder(graphBuilder);
            
            /*TODO: check if second (and others) graph for the same formula is full (not empty)*/
            /*if fail - possible solution is evaluator.evaluate() in for loop with evaluateCell(cell)*/
            evaluator.evaluate();
            
            graphBuilder.runPostProcessing(true);
            return graphBuilder.get();
            
        } finally {
            graphLock.unlock();
            log.debug("Building Graph for DataModel: {} is finished.", evaluator.model.name());
        }
    }

    protected IExecutionGraph buildGraphForEdgeCases(ExecutionGraph executionGraph, ICellValue evalCell, ICellAddress cell) {
        if (evalCell == null) { return getSingleNodeGraph(cell); }

        if (!evaluator.model.isFormulaCell(cell)) { return buildGraphForNonFormulaCell(executionGraph, evalCell, cell); }
        
        return null;
    }

    @Override
    public IEvaluator getEvaluator() { return evaluator; }
}
