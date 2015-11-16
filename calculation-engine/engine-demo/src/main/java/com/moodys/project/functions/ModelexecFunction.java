package com.moodys.project.functions;

import org.apache.poi.ss.formula.OperationEvaluationContext;
import org.apache.poi.ss.formula.eval.ValueEval;

import com.dataart.spreadsheetanalytics.functions.poi.CustomFunction;
import com.dataart.spreadsheetanalytics.functions.poi.FunctionMeta;
import com.dataart.spreadsheetanalytics.functions.poi.data.FuncexecFunction;

@FunctionMeta(value = "MODELEXEC")
public class ModelexecFunction extends FuncexecFunction implements CustomFunction {

    @Override
    public ValueEval evaluate(ValueEval[] args, OperationEvaluationContext ec) {
        return super.evaluate(args, ec);
    }

}
