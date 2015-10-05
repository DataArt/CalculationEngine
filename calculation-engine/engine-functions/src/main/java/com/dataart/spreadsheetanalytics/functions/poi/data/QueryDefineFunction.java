package com.dataart.spreadsheetanalytics.functions.poi.data;

import org.apache.poi.ss.formula.OperationEvaluationContext;
import org.apache.poi.ss.formula.eval.StringEval;
import org.apache.poi.ss.formula.eval.ValueEval;

import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.functions.poi.CustomFunction;
import com.dataart.spreadsheetanalytics.functions.poi.FunctionMeta;

@FunctionMeta("QUERYDEFINE")
public class QueryDefineFunction implements CustomFunction {

    public QueryDefineFunction() {}

    /**
     * This function does nothing, since it should never be evaluated.
     * QUERYDEFINE function is a spreadsheet metadata and it cannot have a value.
     */
    @Override
    public ValueEval evaluate(ValueEval[] args, OperationEvaluationContext ec) {
        return new StringEval(QueryDefineFunction.class.getAnnotation(FunctionMeta.class).value());
    }

    @Override public void setEvaluator(IEvaluator evaluator) {}

}