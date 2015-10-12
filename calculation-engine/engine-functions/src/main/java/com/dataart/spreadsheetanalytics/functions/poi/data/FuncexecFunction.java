package com.dataart.spreadsheetanalytics.functions.poi.data;

import static org.apache.poi.common.execgraph.ExecutionGraphBuilderUtils.coerceValueTo;
import static org.apache.poi.common.execgraph.ExecutionGraphBuilderUtils.valueToValueEval;
import static org.apache.poi.ss.formula.eval.OperandResolver.getSingleValue;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.apache.poi.ss.formula.ArrayEval;
import org.apache.poi.ss.formula.OperationEvaluationContext;
import org.apache.poi.ss.formula.TwoDEval;
import org.apache.poi.ss.formula.eval.ErrorEval;
import org.apache.poi.ss.formula.eval.EvaluationException;
import org.apache.poi.ss.formula.eval.RefEval;
import org.apache.poi.ss.formula.eval.StringEval;
import org.apache.poi.ss.formula.eval.ValueEval;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.dataart.spreadsheetanalytics.api.engine.AttributeFunctionStorage;
import com.dataart.spreadsheetanalytics.api.engine.ExternalServices;
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
        
        log.debug("In evaluate() of FUNCEXEC function. Args = {}", Arrays.toString(args));
        
        if (!(args[0] instanceof StringEval) && !(args[0] instanceof RefEval)) {
            log.warn("The first argument of FUNCEXEC function must be a string (or a reference to a cell) - name of DEFINE function.");
            return ErrorEval.VALUE_INVALID;
        }

        String defineFunctionName;
        try { defineFunctionName = (String) coerceValueTo(getSingleValue(args[0], ec.getRowIndex(), ec.getColumnIndex())); }
        catch (EvaluationException e) {
            log.error(String.format("Cannot get the value of DEFINE functuion name: %s", args[0]), e);
            return ErrorEval.VALUE_INVALID;
        }

        final AttributeFunctionStorage defines = external.getAttributeFunctionStorage();

        if (!defines.getDefineFunctions().containsKey(defineFunctionName)) {
            log.warn("No DEFINE function with name {} is found.", defineFunctionName);
            return ErrorEval.NAME_INVALID;
        }

        final DefineFunctionMeta meta = defines.getDefineFunctions().get(defineFunctionName);

        if (meta.inputs().size() != args.length - 1) {
            log.warn("Wrong number of input arguments for FUNCEXEC+DEFINE. Expected: {}, Actua: {}.", meta.inputs().size(), args.length - 1);
            return ErrorEval.VALUE_INVALID;
        }
        
        log.info("Found DEFINE function to invoke. Name = {}.", defineFunctionName);

        List<ICellAddress> inputAddresses = meta.inputs();
        List<ICellValue> inputValues = new ArrayList<>(meta.inputs().size());

        for (int i = 1; i < args.length; i++) {
            
            try { inputValues.add(new CellValue(coerceValueTo(getSingleValue(args[i], ec.getRowIndex(), ec.getColumnIndex())))); }
            catch (EvaluationException e) {
                log.error(String.format("Cannot resolve value of %sth input argument %s.", i, args[i]), e);
                return ErrorEval.VALUE_INVALID;
            }
        }
        
        log.debug("Input Addresses for DEFINE: {}, Input Values for DEFINE: {}.", inputAddresses, inputValues);

        try {
            
            IDataModel execModel = external.getDataModelStorage().prepareDataModelForExecution(meta.dataModelId(), inputAddresses, inputValues);
            log.debug("Got DataModel for DEFINE execution, Id: {}, Name: {}.", execModel.dataModelId(), execModel.name());
            
            evaluator.setDataModel(execModel);

            //TODO: here we should call evaluator.evaluate(execModel), 
            //but we do not have this method yet implemented so we will do it cell by cell
            List<ICellValue> outputValues = new ArrayList<>(meta.outputs().size());
            meta.outputs().forEach(addr -> outputValues.add(evaluator.evaluate(addr)));
            
            log.debug("Output Values of DEFINE execution: {}.", outputValues);
            
            return outputValues.size() == 1 ? valueToValueEval(outputValues.get(0)) : toTwoDEval(outputValues);
        } catch (Exception e) {
            log.error("Error while executing DEFINE part of FUNCEXEC function.", e);
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
