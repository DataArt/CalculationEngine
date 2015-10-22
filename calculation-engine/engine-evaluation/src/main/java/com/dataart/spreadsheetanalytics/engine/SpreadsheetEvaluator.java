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

import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;

import org.apache.poi.common.execgraph.FormulaParseNameException;
import org.apache.poi.common.execgraph.IExecutionGraphBuilder;
import org.apache.poi.ss.formula.WorkbookEvaluator;
import org.apache.poi.ss.formula.atp.AnalysisToolPak;
import org.apache.poi.ss.formula.eval.ErrorEval;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.xssf.usermodel.XSSFFormulaEvaluator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.functions.poi.CustomFunction;
import com.dataart.spreadsheetanalytics.functions.poi.Functions;
import com.dataart.spreadsheetanalytics.model.CellValue;
import com.dataart.spreadsheetanalytics.model.DataModel;
import com.dataart.spreadsheetanalytics.model.DataSet;
import com.dataart.spreadsheetanalytics.model.DsCell;
import com.dataart.spreadsheetanalytics.model.DsRow;

public class SpreadsheetEvaluator implements IEvaluator {
    private static final Logger log = LoggerFactory.getLogger(SpreadsheetEvaluator.class);

    protected DataModel model;
    protected XSSFFormulaEvaluator poiEvaluator;
    
    static {
        try { loadCustomFunctions(); }
        catch (Exception e) { log.error("Custom functions loading was unsuccessful. This may cause Evaluator to not work with custom functions.", e); }
    }
        
    public SpreadsheetEvaluator(DataModel model) {
        this.model = model;
        this.poiEvaluator = this.model.poiModel.getCreationHelper().createFormulaEvaluator();
    }

    @Override
    public ICellValue evaluate(ICellAddress addr) {
        Sheet s = model.poiModel.getSheetAt(0 /* TODO: sheet number 1 */ );
        Row r = s.getRow(addr.row());
        if (r == null) { return null; }
        
        Cell c = r.getCell(addr.column());
        if (c == null) { return null; }

        return evaluateCell(c);
    }

    @Override
    public IDataSet evaluate() {
        DataSet dataSet = new DataSet(model.name());
        Sheet sheet = model.poiModel.getSheetAt(0); // TODO handle sheet number specification
        for (Row row : sheet) {
            DsRow evaluatedRow = dataSet.createRow();
            if (row != null) {
                for (Cell cell : row) {
                    DsCell evaluatedCell = evaluatedRow.createCell();
                    ICellValue value = evaluateCell(cell);
                    evaluatedCell.value((value == null) ? null : value.get());
                    // TODO: Use multithreading to calculate cells in parallel
                }
            }
        }
        return dataSet;
    }

    protected ICellValue evaluateCell(Cell c) {
        if (c == null) { return null; }

        org.apache.poi.ss.usermodel.CellValue poiValue = null;

        try {
            poiValue = poiEvaluator.evaluate(c);
        } catch (FormulaParseNameException e) {
            return handleNameParseException();
        }

        if (poiValue == null) { return null; }

        ICellValue cv = new CellValue(fromPoiValue(poiValue));
        
        return cv;
    }

    protected ICellValue handleNameParseException() {
        return new CellValue(ErrorEval.NAME_INVALID);
    }

    public void setExecutionGraphBuilder(IExecutionGraphBuilder graphBuilder) {
        this.poiEvaluator = model.poiModel.getCreationHelper().createFormulaEvaluator(graphBuilder);
    }

    protected static void loadCustomFunctions() throws ReflectiveOperationException {
        Map<String, Class<? extends CustomFunction>> map = Functions.get();
        AnalysisToolPak._saFunctionsByName = new HashMap<>();
        map.forEach((k, v) -> AnalysisToolPak._saFunctionsByName.put(k, null));
        
        for (Entry<String, Class<? extends CustomFunction>> en : map.entrySet())
            { WorkbookEvaluator.registerFunction(en.getKey(), en.getValue().newInstance()); }
    }

    protected Object fromPoiValue(org.apache.poi.ss.usermodel.CellValue poiValue) {
        switch (poiValue.getCellType()) {
            case Cell.CELL_TYPE_STRING: { return poiValue.getStringValue(); }
            case Cell.CELL_TYPE_NUMERIC: { return Double.valueOf(poiValue.getNumberValue()); }
            case Cell.CELL_TYPE_BOOLEAN: { return Boolean.valueOf(poiValue.getBooleanValue()); }
            case Cell.CELL_TYPE_ERROR: { return ErrorEval.valueOf(poiValue.getErrorValue()); /* TODO we do not have special classes for error values yet */ }
            case Cell.CELL_TYPE_FORMULA: { throw new IllegalStateException("Result of evaluation cannot be a formula."); }
            case Cell.CELL_TYPE_BLANK: default: { return ""; }
        }
    }

}
