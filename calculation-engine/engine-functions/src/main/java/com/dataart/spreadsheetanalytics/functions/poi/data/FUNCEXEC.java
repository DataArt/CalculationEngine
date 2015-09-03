package com.dataart.spreadsheetanalytics.functions.poi.data;

import org.apache.poi.ss.formula.OperationEvaluationContext;
import org.apache.poi.ss.formula.eval.NumberEval;
import org.apache.poi.ss.formula.eval.ValueEval;
import org.apache.poi.ss.formula.functions.FreeRefFunction;

public class FUNCEXEC implements FreeRefFunction {

    @Override
    public ValueEval evaluate(ValueEval[] args, OperationEvaluationContext ec) {
        return new NumberEval(42.0);
        /*
           if (args.length != 3) {  
        return ErrorEval.VALUE_INVALID;
    }

    double principal, rate, years,  result;
    try {
        ValueEval v1 = OperandResolver.getSingleValue( args[0], 
                                                       ec.getRowIndex(), 
                                                       ec.getColumnIndex() ) ;
        ValueEval v2 = OperandResolver.getSingleValue( args[1], 
                                                       ec.getRowIndex(), 
                                                       ec.getColumnIndex() ) ;
        ValueEval v3 = OperandResolver.getSingleValue( args[2], 
                                                       ec.getRowIndex(), 
                                                       ec.getColumnIndex() ) ;

        principal  = OperandResolver.coerceValueToDouble( v1 ) ; 
        rate  = OperandResolver.coerceValueToDouble( v2 ) ;
        years = OperandResolver.coerceValueToDouble( v3 ) ;
         */
    }

}
