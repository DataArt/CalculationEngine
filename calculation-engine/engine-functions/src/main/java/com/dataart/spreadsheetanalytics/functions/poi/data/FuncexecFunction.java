package com.dataart.spreadsheetanalytics.functions.poi.data;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.apache.poi.ss.formula.OperationEvaluationContext;
import org.apache.poi.ss.formula.eval.ErrorEval;
import org.apache.poi.ss.formula.eval.EvaluationException;
import org.apache.poi.ss.formula.eval.NumberEval;
import org.apache.poi.ss.formula.eval.OperandResolver;
import org.apache.poi.ss.formula.eval.StringEval;
import org.apache.poi.ss.formula.eval.ValueEval;
import org.apache.poi.ss.formula.eval.ValueEvalArray;

import com.dataart.spreadsheetanalytics.api.engine.IDataProvider;
import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.engine.DefineFunctionMeta;
import com.dataart.spreadsheetanalytics.functions.poi.CustomFunction;
import com.dataart.spreadsheetanalytics.functions.poi.FunctionMeta;
import com.dataart.spreadsheetanalytics.model.CellValue;

@FunctionMeta("FUNCEXEC")
public class FuncexecFunction implements CustomFunction {
    
    protected IDataProvider dataProvider;
    protected IEvaluator evaluator; 

    public FuncexecFunction() {}
    
    @Override
    public ValueEval evaluate(ValueEval[] args, OperationEvaluationContext ec) {
        
        if(!(args[0] instanceof StringEval)) {
            //TODO: log that first arg should be string - name of function
            return ErrorEval.VALUE_INVALID;
        }
        
        String defineFunctionName = ((StringEval)args[0]).getStringValue();
        if (!dataProvider.getDefineFunctions().containsKey(defineFunctionName)) {
            //TODO: log that there is no such function is system            
            return ErrorEval.NAME_INVALID;
        }
        
        DefineFunctionMeta meta = dataProvider.getDefineFunctions().get(defineFunctionName);
        
        if (meta.inputs().size() != args.length - 1) {
            //TODO: log wrong number of input arguments
            return ErrorEval.VALUE_INVALID;
        }

        List<ICellAddress> inputAddresses = meta.inputs();
        List<ICellValue> inputValues = new ArrayList<>(meta.inputs().size());
        
        try {
            for (int i = 1; i < args.length; i++) {
                inputValues.add(toCellValue(OperandResolver.getSingleValue(args[i], ec.getRowIndex(), ec.getColumnIndex())));
            }
        } catch (EvaluationException e) {
            // TODO log this and do smth, probably return an error
        }

        try {
            IDataModel execModel = dataProvider.createModelForExecution(meta.dataModelId(), inputAddresses, inputValues);

            List<ICellValue> outputValues = new ArrayList<>(meta.outputs().size());
            //TODO: here we should call evaluator.evaluate(execModel), but we do not have this method yet implemented
            //so we will do it cell by cell
            for (ICellAddress addr : meta.outputs()) {

                evaluator.init(execModel);
                ICellValue outputValue = evaluator.evaluate(addr);
                //TODO: log this value
                outputValues.add(outputValue);
            }

            ValueEvalArray values = new ValueEvalArray();
            values.setValueEvals(toValueEval(outputValues));
            return values.getValueEvals().get(0); //TODO: because we do not have INDEX function as for now
            
        } catch (IOException e) {
            return ErrorEval.NA;
        }
    }
    
    private static List<ValueEval> toValueEval(List<ICellValue> outputValues) {
        List<ValueEval> values = new ArrayList<>(outputValues.size());
        
        for (ICellValue outputValue : outputValues) {
            CellValue ov = (CellValue) outputValue;
            if (ov.get() instanceof Number) {
                values.add(new NumberEval((double) ov.get()));
            } else if (ov.get() instanceof String) {
                values.add(new StringEval((String) ov.get()));
            }
            //TODO: add more types
        }
        
        return values;
    }

    private static ICellValue toCellValue(ValueEval value) throws EvaluationException {
        if (value instanceof NumberEval) {
            return new CellValue(OperandResolver.coerceValueToDouble(value));
        } else if (value instanceof StringEval) {
            return new CellValue(OperandResolver.coerceValueToString(value));
        }// TODO: add more types
        
        return new CellValue(0);
    }

    @Override public void setDataProvider(IDataProvider dataProvider) { this.dataProvider = dataProvider; }
    @Override public void setEvaluator(IEvaluator evaluator) { this.evaluator = evaluator; }

}
