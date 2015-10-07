package com.dataart.spreadsheetanalytics.engine;

import java.util.ArrayList;
import java.util.List;

import org.apache.poi.common.execgraph.IExecutionGraphBuilder;
import org.apache.poi.ss.formula.WorkbookEvaluator;
import org.apache.poi.ss.formula.eval.ErrorEval;
import org.apache.poi.ss.formula.udf.AggregatingUDFFinder;
import org.apache.poi.ss.formula.udf.DefaultUDFFinder;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.xssf.usermodel.XSSFFormulaEvaluator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.functions.poi.CustomFunction;
import com.dataart.spreadsheetanalytics.functions.poi.FunctionMeta;
import com.dataart.spreadsheetanalytics.functions.poi.Functions;
import com.dataart.spreadsheetanalytics.model.CellValue;
import com.dataart.spreadsheetanalytics.model.DataModel;

public class SpreadsheetEvaluator implements IEvaluator {
    private final static Logger log = LoggerFactory.getLogger(SpreadsheetEvaluator.class);

    protected DataModel model;
    protected XSSFFormulaEvaluator poiEvaluator;
    
    {
        try { loadCustomFunctions(); }
        catch (Exception e) { log.error("Custom functions loading was unsuccessful. This may cause Evaluator to not work with custom functions.", e); }
    }
    
    protected SpreadsheetEvaluator() {}
    
    public SpreadsheetEvaluator(DataModel model) {
        this.model = model;
        this.poiEvaluator = this.model.poiModel.getCreationHelper().createFormulaEvaluator();
        
        try { loadCustomFunctions(model); }
        catch (Exception e) { log.warn("Custom functions loading was unsuccessful. This may cause DataModel and Evaluator to not work with custom functions.", e); }
    }

    @Override
	public ICellValue evaluate(ICellAddress addr) {
		Sheet s = model.poiModel.getSheetAt(0 /* TODO: sheet number 1 */ );
		Row r = s.getRow(addr.row());
		if (r == null) { return null; }
		
        Cell c = r.getCell(addr.column());
        if (c == null) { return null; }

        org.apache.poi.ss.usermodel.CellValue poiValue = poiEvaluator.evaluate(c);

        if (poiValue == null) {	return null; }

        ICellValue cv = new CellValue(fromPoiValue(poiValue));
        
        return cv;
    }

    @Override
    public IDataSet evaluate(IDataModel model) {
        // TODO Auto-generated method stub
        return null;
    }
    
    @Override
    public void setDataModel(IDataModel execModel) {
        this.model = (DataModel) execModel;
    }

    public void setExecutionGraphBuilder(IExecutionGraphBuilder graphBuilder) {
        this.poiEvaluator = model.poiModel.getCreationHelper().createFormulaEvaluator(graphBuilder);
    }

    protected static void loadCustomFunctions() throws ReflectiveOperationException {
        
        for (String fname: Functions.get().keySet()) {
            CustomFunction cf = Functions.get().get(fname).newInstance();
            
            if (cf.getClass().getAnnotation(FunctionMeta.class).stateless()) 
                WorkbookEvaluator.registerFunction(fname, cf);
        }
    }
    
    protected static void loadCustomFunctions(DataModel dataModel) throws ReflectiveOperationException {
        if (dataModel == null || dataModel.poiModel == null) {
            throw new IllegalStateException("Evaluator must be provided with model to register custom functions.");
        }
        
        List<String> names = new ArrayList<>(Functions.get().size());
        List<CustomFunction> funcs = new ArrayList<>(Functions.get().size());
        
        for (String fname: Functions.get().keySet()) {
            
            CustomFunction cf = Functions.get().get(fname).newInstance();
            if (cf.getClass().getAnnotation(FunctionMeta.class).stateless()) { continue; }
            
            cf.setEvaluator(new SpreadsheetEvaluator()); /* TODO: ForkedEvaluator?*/
            
            names.add(fname);
            funcs.add(cf);
        }
        
        if (names.isEmpty()) { return; }
               
        dataModel.poiModel.addToolPack(new AggregatingUDFFinder(new DefaultUDFFinder(
                                            names.toArray(new String[names.size()]),
                                            funcs.toArray(new CustomFunction[funcs.size()]))));
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
