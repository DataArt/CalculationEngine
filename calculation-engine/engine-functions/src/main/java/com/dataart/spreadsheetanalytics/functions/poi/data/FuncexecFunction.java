package com.dataart.spreadsheetanalytics.functions.poi.data;

import static org.apache.poi.common.execgraph.ExecutionGraphBuilderUtils.coerceValueTo;
import static org.apache.poi.common.execgraph.ExecutionGraphBuilderUtils.valueToValueEval;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.apache.poi.ss.formula.ArrayEval;
import org.apache.poi.ss.formula.OperationEvaluationContext;
import org.apache.poi.ss.formula.TwoDEval;
import org.apache.poi.ss.formula.eval.ErrorEval;
import org.apache.poi.ss.formula.eval.EvaluationException;
import org.apache.poi.ss.formula.eval.OperandResolver;
import org.apache.poi.ss.formula.eval.StringEval;
import org.apache.poi.ss.formula.eval.ValueEval;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.dataart.spreadsheetanalytics.api.engine.ExternalServices;
import com.dataart.spreadsheetanalytics.api.engine.IAttributeFunctionsCache;
import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.engine.DefineFunctionMeta;
import com.dataart.spreadsheetanalytics.functions.poi.CustomFunction;
import com.dataart.spreadsheetanalytics.functions.poi.FunctionMeta;
import com.dataart.spreadsheetanalytics.model.CellValue;

@FunctionMeta(value = "FUNCEXEC", stateless = false)
public class FuncexecFunction implements CustomFunction {
    private final static Logger log = LoggerFactory.getLogger(FuncexecFunction.class);
    
    protected ExternalServices external = ExternalServices.INSTANCE;
    protected IEvaluator evaluator; 

    public FuncexecFunction() {}
    
    @Override
    public ValueEval evaluate(ValueEval[] args, OperationEvaluationContext ec) {
        
        log.debug(String.format("In evaluate() of FUNCEXEC function. Args = %s", Arrays.toString(args))); 
        
        if (!(args[0] instanceof StringEval)) {
            log.warn(String.format("First argument of FUNCEXEC function must be a string - name of function. But was: %s", args[0]));
            return ErrorEval.VALUE_INVALID;
        }

        String defineFunctionName = ((StringEval) args[0]).getStringValue();

        IAttributeFunctionsCache dfCache = external.getAttributeFunctionsCache();

        if (!dfCache.getDefineFunctions().containsKey(defineFunctionName)) {
            log.warn(String.format("No DEFINE function with name %s is found.", defineFunctionName));
            return ErrorEval.NAME_INVALID;
        }

        DefineFunctionMeta meta = dfCache.getDefineFunctions().get(defineFunctionName);

        if (meta.inputs().size() != args.length - 1) {
            log.warn(String.format("Wrong number of input arguments for FUNCEXEC+DEFINE. Expected %s, Actual %s.", meta.inputs().size(), args.length - 1));
            return ErrorEval.VALUE_INVALID;
        }
        
        log.info(String.format("Found DEFINE function to invoke. Name = %s.", defineFunctionName));

        List<ICellAddress> inputAddresses = meta.inputs();
        List<ICellValue> inputValues = new ArrayList<>(meta.inputs().size());

        for (int i = 1; i < args.length; i++) {
            
            try { inputValues.add(new CellValue(coerceValueTo(OperandResolver.getSingleValue(args[i], ec.getRowIndex(), ec.getColumnIndex())))); }
            catch (EvaluationException e) {
                log.error(String.format("Cannot resolve value of input argument %s.", args[i]), e);
                return ErrorEval.REF_INVALID;
            }
        }
        
        log.info(String.format("Input Addresses for DEFINE: %s, Input Values for DEFINE: %s.", inputAddresses, inputValues));

        try {
            
            IDataModel execModel = external.getDataModelStorage().prepareDataModelForExecution(meta.dataModelId(), inputAddresses, inputValues);
            log.debug(String.format("Got DataModel for DEFINE execution, Id: %s, Name: %s.", execModel.dataModelId(), execModel.name()));
            
            evaluator.setDataModel(execModel);

            //TODO: here we should call evaluator.evaluate(execModel), 
            //but we do not have this method yet implemented so we will do it cell by cell
            List<ICellValue> outputValues = new ArrayList<>(meta.outputs().size());
            meta.outputs().forEach(addr -> outputValues.add(evaluator.evaluate(addr)));
            
            log.debug(String.format("Output Values of DEFINE execution: %s.", outputValues));
            
            return outputValues.size() == 1 ? valueToValueEval(outputValues.get(0)) : toTwoDEval(outputValues);
        } catch (Exception e) {
            log.error("Error while executing DEFINE (FUNCEXEC) function.", e);
            return ErrorEval.NA;
        }
    }
    
    private static TwoDEval toTwoDEval(List<ICellValue> outputValues) {
        ArrayEval ae = new ArrayEval();
        ae.setValues(outputValues.stream().map(v -> valueToValueEval(v.get())).collect(Collectors.<ValueEval> toList()));
        return ae;
    }

    @Override public void setEvaluator(IEvaluator evaluator) { this.evaluator = evaluator; }

}
