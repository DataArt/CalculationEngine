package com.dataart.spreadsheetanalytics.functions.poi.data;

import java.util.Arrays;

import org.apache.poi.ss.formula.OperationEvaluationContext;
import org.apache.poi.ss.formula.eval.StringEval;
import org.apache.poi.ss.formula.eval.ValueEval;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.functions.poi.CustomFunction;
import com.dataart.spreadsheetanalytics.functions.poi.FunctionMeta;

@FunctionMeta("DEFINE")
public class DefineFunction implements CustomFunction {
    private final static Logger log = LoggerFactory.getLogger(DefineFunction.class);
    
    public DefineFunction() {}

    /**
     * This function does nothing, since it should never be evaluated.
     * DEFINE function is a spreadsheet metadata and it cannot have a value.
     */
    @Override
    public ValueEval evaluate(ValueEval[] args, OperationEvaluationContext ec) {
        log.debug("In evaluate() of DEFINE function. Args = {}", Arrays.toString(args));
        
        return new StringEval(DefineFunction.class.getAnnotation(FunctionMeta.class).value());
    }

    @Override public void setEvaluator(IEvaluator evaluator) { }

}
