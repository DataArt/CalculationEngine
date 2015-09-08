package com.dataart.spreadsheetanalytics.engine;

import java.util.ArrayList;
import java.util.List;

import org.apache.poi.common.execgraph.EmptyExecutionGraph;
import org.apache.poi.common.execgraph.IExecutionGraphBuilder;
import org.apache.poi.ss.formula.udf.AggregatingUDFFinder;
import org.apache.poi.ss.formula.udf.DefaultUDFFinder;
import org.apache.poi.ss.formula.udf.UDFFinder;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.xssf.usermodel.XSSFFormulaEvaluator;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.dataart.spreadsheetanalytics.api.engine.IDataProvider;
import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.functions.poi.CustomFunction;
import com.dataart.spreadsheetanalytics.functions.poi.Functions;
import com.dataart.spreadsheetanalytics.model.CellValue;
import com.dataart.spreadsheetanalytics.model.DataModel;

public class SpreadsheetEvaluator implements IEvaluator {

    protected IExecutionGraphBuilder graphBuilder = EmptyExecutionGraph.DoNothingExecutionGraphBuilder.get();

    protected XSSFWorkbook model;
    protected XSSFFormulaEvaluator poiEvaluator;
    
    protected SpreadsheetEvaluator() {}
    
    public SpreadsheetEvaluator(IDataModel model) {
        this.model = ((DataModel) model).model;
        this.poiEvaluator = this.model.getCreationHelper().createFormulaEvaluator();
    }

	public boolean isFormulaCell(ICellAddress addr) {
		Sheet s = model.getSheetAt(0 /* sheet number 1 */ );
		Cell c = s.getRow(addr.row()).getCell(addr.column());
		if (c == null) {
			throw new NullPointerException("Cell at row " + addr.row() + ", column " + addr.column() + " is null");
		}
		return (Cell.CELL_TYPE_FORMULA == c.getCellType());
	}

    @Override
	public ICellValue evaluate(ICellAddress addr) {
		Sheet s = model.getSheetAt(0 /* sheet number 1 */ );
		Cell c = s.getRow(addr.row()).getCell(addr.column());
		org.apache.poi.ss.usermodel.CellValue icv = poiEvaluator.evaluate(c);
		if (icv == null) {
			return null;
		}

        ICellValue cv = new CellValue(poiEvaluator.evaluate(c).formatAsString());
        
        destroy();
        
        return cv;
    }

    @Override
    public IDataSet evaluate(IDataModel model) {
        // TODO Auto-generated method stub
        return null;
    }

    public void setExecutionGraphBuilder(IExecutionGraphBuilder graphBuilder) {
        this.graphBuilder = graphBuilder;
        this.poiEvaluator = model.getCreationHelper().createFormulaEvaluator(graphBuilder);
    }

    @Override
    public void init(IDataModel model) {
        this.model = ((DataModel) model).model;
        
        if (this.graphBuilder != null) {
            this.poiEvaluator = this.model.getCreationHelper().createFormulaEvaluator(this.graphBuilder);
        } else {
            this.poiEvaluator = this.model.getCreationHelper().createFormulaEvaluator();
        }
    }
    
    @Override
    public void destroy() {
        graphBuilder = EmptyExecutionGraph.DoNothingExecutionGraphBuilder.get();
    }

    /**
     * TODO: this should be provided with really good java doc of how to use it
     */
    public void loadCustomFunctions(IDataProvider dataProvider) throws ReflectiveOperationException {
        if (this.model == null) {
            throw new IllegalStateException("Evaluator must be provided with model to register custom functions.");
        }
        
        List<String> names = new ArrayList<>(Functions.get().size());
        List<CustomFunction> functions = new ArrayList<>(Functions.get().size());
        
        for (String fname: Functions.get().keySet()) {
            
            CustomFunction cf = Functions.get().get(fname).newInstance();
            
            cf.setDataProvider(dataProvider);
            
            SpreadsheetEvaluator ev = new SpreadsheetEvaluator();
            ev.graphBuilder = this.graphBuilder;
            cf.setEvaluator(ev);
            
            names.add(fname);
            functions.add(cf);
        }
        
        UDFFinder udfToolpack = new AggregatingUDFFinder(new DefaultUDFFinder(
                                                            names.toArray(new String[names.size()]),
                                                            functions.toArray(new CustomFunction[functions.size()])));  
        this.model.addToolPack(udfToolpack);
    }
}
