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

import static com.dataart.spreadsheetanalytics.functions.poi.Functions.getUdfFinder;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.VALUE;
import static org.apache.poi.ss.formula.IStabilityClassifier.TOTALLY_IMMUTABLE;
import static org.apache.poi.ss.formula.eval.ErrorEval.NA;
import static org.apache.poi.ss.formula.eval.ErrorEval.NAME_INVALID;
import static org.apache.poi.ss.formula.eval.ErrorEval.REF_INVALID;
import static org.apache.poi.ss.formula.eval.ErrorEval.VALUE_INVALID;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;

import org.apache.poi.common.execgraph.FormulaParseNAException;
import org.apache.poi.common.execgraph.FormulaParseNameException;
import org.apache.poi.common.execgraph.IExecutionGraphBuilder;
import org.apache.poi.common.execgraph.IncorrectExternalReferenceException;
import org.apache.poi.common.execgraph.ValuesStackNotEmptyException;
import org.apache.poi.ss.formula.EvaluationCell;
import org.apache.poi.ss.formula.EvaluationWorkbook;
import org.apache.poi.ss.formula.WorkbookEvaluator;
import org.apache.poi.ss.formula.atp.AnalysisToolPak;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.xssf.usermodel.XSSFFormulaEvaluator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.dataart.spreadsheetanalytics.api.engine.IAuditor;
import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.engine.execgraph.ExecutionGraphVertex;
import com.dataart.spreadsheetanalytics.engine.execgraph.PoiExecutionGraphBuilder;
import com.dataart.spreadsheetanalytics.functions.poi.CustomFunction;
import com.dataart.spreadsheetanalytics.functions.poi.Functions;
import com.dataart.spreadsheetanalytics.model.CellValue;
import com.dataart.spreadsheetanalytics.model.DataModel;
import com.dataart.spreadsheetanalytics.model.DataSet;
import com.dataart.spreadsheetanalytics.model.DsCell;
import com.dataart.spreadsheetanalytics.model.DsRow;
import com.dataart.spreadsheetanalytics.model.PoiDataModel;

/**
 * SpreadsheetEvaluator is a direct implementation of {@link IEvaluator} interface.
 * It allows to do spreadsheets evaluation. It's 2 major methods are {@link #evaluate()} and {@link #evaluate(ICellAddress)}.
 * They do evaluation of one cell, or whole spreadsheet cell, by cell (algorithm can be changed in future).
 * 
 * This version of Evaluator requires a {@link PoiDataModel} to evaluate. DataModel provides access to POI's workbook object, 
 * so instance of {@link XSSFFormulaEvaluator} can do actual evaluation.
 * 
 * {@link IExecutionGraphBuilder} can be attached to this class to trace all evaluation steps. This is usually done via
 * {@link IAuditor}.
 */
public class SpreadsheetEvaluator implements IEvaluator {
    private static final Logger log = LoggerFactory.getLogger(SpreadsheetEvaluator.class);

    protected final IDataModel model;
    protected final XSSFFormulaEvaluator poiEvaluator; //TODO: to remove
    protected final EvaluationWorkbook evaluationWorkbook;
    protected final WorkbookEvaluator bookEvaluator;
    
    static {
        try { loadCustomFunctions(); }
        catch (Exception e) { log.error("Custom functions loading was unsuccessful. This may cause Evaluator to not work with custom functions.", e); }
    }
        
    public SpreadsheetEvaluator(PoiDataModel model) {
        this.model = model;
        this.poiEvaluator = ((PoiDataModel) this.model).poiModel.getCreationHelper().createFormulaEvaluator();
        this.evaluationWorkbook = null;
        this.bookEvaluator = null;
    }
    
    public SpreadsheetEvaluator(DataModel model) throws IOException {
        this.model = model;
        this.poiEvaluator = null; //to remove
        this.evaluationWorkbook = PoiWorkbookConverters.toEvaluationWorkbook(Converters.toWorkbook(this.model));
        this.bookEvaluator = new WorkbookEvaluator(this.evaluationWorkbook, TOTALLY_IMMUTABLE, getUdfFinder());        
    }

    public ICellValue evaluateFork(ICellAddress addr) {
        EvaluationCell cell = PoiWorkbookConverters.getEvaluationCell(this.evaluationWorkbook, addr);
        return PoiExecutionGraphBuilder.resolveValueEval(bookEvaluator.evaluate(cell));
    }
    
    @Override
    public ICellValue evaluate(ICellAddress addr) {
        Sheet s = ((PoiDataModel) this.model).poiModel.getSheetAt(0 /* TODO: sheet number 1 */ );
        
        Row r = s.getRow(addr.row());
        if (r == null) { return null; }
        
        Cell c = r.getCell(addr.column());
        if (c == null) { return null; }

        try { return evaluateCell(c); }
        catch (ValuesStackNotEmptyException e) { return new CellValue(VALUE_INVALID.getErrorString()); }
    }

    @Override
    public IDataSet evaluate() {
        DataSet dataSet = new DataSet(model.name());
        Sheet sheet = ((PoiDataModel) this.model).poiModel.getSheetAt(0); // TODO handle sheet number specification
        for (int j = 0 ; j <= sheet.getLastRowNum() ; j++) {
            Row row = sheet.getRow(j);
            DsRow evaluatedRow = dataSet.createRow();
            if (row == null) { continue; }

            for (int i = 0 ; i <= row.getLastCellNum() ; i++) {
                Cell cell = row.getCell(i);
                DsCell evaluatedCell = evaluatedRow.createCell();
                ICellValue value = null;
                try { value = evaluateCell(cell); }
                catch (ValuesStackNotEmptyException e) { value = handleExceptionForGraphBuilder(poiEvaluator, cell); }
                evaluatedCell.value(value);
            }
        }
        return dataSet;
    }

    protected ICellValue evaluateCell(Cell c) {
        if (c == null) { return null; }

        org.apache.poi.ss.usermodel.CellValue poiValue;
        
        try { poiValue = poiEvaluator.evaluate(c); }
        catch (FormulaParseNameException e) { return handleNameParseException(); }
        catch (FormulaParseNAException e) { return handleNaParseException(); }
        catch (IncorrectExternalReferenceException e) { return handleIncorrectExternalReferenceException(); }

        return PoiExecutionGraphBuilder.resolveCellValue(poiValue);
    }

    protected static ICellValue handleIncorrectExternalReferenceException() {
        return new CellValue(REF_INVALID.getErrorString());
    }

    protected static ICellValue handleNameParseException() {
        return new CellValue(NAME_INVALID.getErrorString());
    }

    protected static ICellValue handleNaParseException() {
        return new CellValue(NA.getErrorString());
    }

    protected static void loadCustomFunctions() throws ReflectiveOperationException {
        Map<String, Class<? extends CustomFunction>> map = Functions.get();
        AnalysisToolPak._saFunctionsByName = new HashMap<>();
        map.forEach((k, v) -> AnalysisToolPak._saFunctionsByName.put(k, null));
        
        for (Entry<String, Class<? extends CustomFunction>> en : map.entrySet())
            { WorkbookEvaluator.registerFunction(en.getKey(), en.getValue().newInstance()); }
    }
    
    protected static CellValue handleExceptionForGraphBuilder(XSSFFormulaEvaluator poiEvaluator, Cell cell) {
        IExecutionGraphBuilder builder = poiEvaluator._getWorkbookEvaluator().getExecutionGraphBuilder();
        if (builder instanceof PoiExecutionGraphBuilder) {
            ((PoiExecutionGraphBuilder) builder).getVerticesFromCache(cell.getRowIndex(), cell.getColumnIndex())
                                                .forEach(v -> ((ExecutionGraphVertex) v).property(VALUE).set(VALUE_INVALID.getErrorString()));
        }
        return new CellValue(VALUE_INVALID.getErrorString());
    }

    void setExecutionGraphBuilder(IExecutionGraphBuilder graphBuilder) { this.poiEvaluator.setExecutionGraphBuilder(graphBuilder); }

}
