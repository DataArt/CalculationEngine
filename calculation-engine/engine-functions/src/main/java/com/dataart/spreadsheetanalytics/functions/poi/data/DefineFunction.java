package com.dataart.spreadsheetanalytics.functions.poi.data;

import org.apache.poi.ss.formula.OperationEvaluationContext;
import org.apache.poi.ss.formula.eval.StringEval;
import org.apache.poi.ss.formula.eval.ValueEval;

import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.functions.poi.CustomFunction;
import com.dataart.spreadsheetanalytics.functions.poi.FunctionMeta;

@FunctionMeta("DEFINE")
public class DefineFunction implements CustomFunction {

    protected IEvaluator evaluator;
    
    public DefineFunction() {}

    /**
     * This function does nothing, since it should never be evaluated.
     * DEFINE function is a spreadsheet metadata and it cannot have value.
     */
    @Override
    public ValueEval evaluate(ValueEval[] args, OperationEvaluationContext ec) {
        return new StringEval(DefineFunction.class.getAnnotation(FunctionMeta.class).value());
    }

    @Override public void setEvaluator(IEvaluator evaluator) { this.evaluator = evaluator; }

}
