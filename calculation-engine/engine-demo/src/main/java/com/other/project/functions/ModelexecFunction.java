package com.other.project.functions;

import org.apache.poi.ss.formula.OperationEvaluationContext;
import org.apache.poi.ss.formula.eval.ValueEval;

import com.dataart.spreadsheetanalytics.api.model.ICustomFunction;
import com.dataart.spreadsheetanalytics.api.model.CustomFunctionMeta;
import com.dataart.spreadsheetanalytics.functions.poi.data.FuncexecFunction;

@CustomFunctionMeta(value = "MODELEXEC")
public class ModelexecFunction extends FuncexecFunction implements ICustomFunction {

    @Override
    public ValueEval evaluate(ValueEval[] args, OperationEvaluationContext ec) {
        return super.evaluate(args, ec);
    }

}
