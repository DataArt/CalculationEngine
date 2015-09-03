package com.dataart.spreadsheetanalytics.functions.poi.data;

import org.apache.poi.ss.formula.OperationEvaluationContext;
import org.apache.poi.ss.formula.eval.ValueEval;

import com.dataart.spreadsheetanalytics.api.engine.IDataProvider;
import com.dataart.spreadsheetanalytics.functions.poi.CustomFunction;
import com.dataart.spreadsheetanalytics.functions.poi.FunctionMeta;

@FunctionMeta("DEFINE")
public class DefineFunction implements CustomFunction {

    protected IDataProvider dataProvider;
    
    public DefineFunction() {}

    @Override
    public ValueEval evaluate(ValueEval[] args, OperationEvaluationContext ec) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override public void setDataProvider(IDataProvider dataProvider) { this.dataProvider = dataProvider; }

}
