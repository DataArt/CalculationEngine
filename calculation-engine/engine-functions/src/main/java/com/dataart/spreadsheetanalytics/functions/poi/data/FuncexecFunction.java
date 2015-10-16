package com.dataart.spreadsheetanalytics.functions.poi.data;

import static org.apache.poi.common.execgraph.ExecutionGraphBuilderUtils.coerceValueTo;
import static org.apache.poi.ss.formula.eval.OperandResolver.getSingleValue;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.apache.poi.ss.formula.ArrayEval;
import org.apache.poi.ss.formula.IStabilityClassifier;
import org.apache.poi.ss.formula.OperationEvaluationContext;
import org.apache.poi.ss.formula.TwoDEval;
import org.apache.poi.ss.formula.eval.ErrorEval;
import org.apache.poi.ss.formula.eval.EvaluationException;
import org.apache.poi.ss.formula.eval.RefEval;
import org.apache.poi.ss.formula.eval.StringEval;
import org.apache.poi.ss.formula.eval.ValueEval;
import org.apache.poi.ss.formula.eval.forked.ForkedEvaluator;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.xssf.usermodel.XSSFForkedEvaluator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.dataart.spreadsheetanalytics.api.engine.AttributeFunctionStorage;
import com.dataart.spreadsheetanalytics.api.engine.ExternalServices;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.engine.DefineFunctionMeta;
import com.dataart.spreadsheetanalytics.functions.poi.CustomFunction;
import com.dataart.spreadsheetanalytics.functions.poi.FunctionMeta;
import com.dataart.spreadsheetanalytics.functions.poi.Functions;
import com.dataart.spreadsheetanalytics.model.DataModel;

@FunctionMeta(value = "FUNCEXEC")
public class FuncexecFunction implements CustomFunction {
    private static final Logger log = LoggerFactory.getLogger(FuncexecFunction.class);
    
    protected ExternalServices external = ExternalServices.INSTANCE; 
    
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
        defineFunctionName = defineFunctionName.toUpperCase();

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

        List<ValueEval> inputValues = new ArrayList<>(meta.inputs().size());
        for (int i = 1; i < args.length; i++) {
            
            try { inputValues.add(getSingleValue(args[i], ec.getRowIndex(), ec.getColumnIndex())); }
            catch (EvaluationException e) {
                log.error(String.format("Cannot resolve value of %sth input argument %s.", i, args[i]), e);
                return ErrorEval.VALUE_INVALID;
            }
        }
        
        List<ICellAddress> inputAddresses = meta.inputs();
        log.debug("Input Addresses for DEFINE: {}, Input Values for DEFINE: {}.", inputAddresses, inputValues);

        DataModel dmWithDefine = (DataModel) external.getDataModelStorage().getDataModel(meta.dataModelId());
        ForkedEvaluator forkedEvaluator = XSSFForkedEvaluator.create(dmWithDefine.poiModel, IStabilityClassifier.TOTALLY_IMMUTABLE, Functions.getUdfFinder());

        Sheet s = dmWithDefine.poiModel.getSheetAt(0);
        String firstSheetName = s.getSheetName(); /*TODO: one sheet support only*/
        for (int i = 0; i < inputAddresses.size(); i++) {
            
            Row r = s.getRow(inputAddresses.get(i).row());
            if (r == null) { r = s.createRow(inputAddresses.get(i).row()); }
            Cell c = r.getCell(inputAddresses.get(i).column());
            if (c == null) { c = r.createCell(inputAddresses.get(i).column()); }
            
            forkedEvaluator.updateCell(firstSheetName, 
                                       inputAddresses.get(i).row(), inputAddresses.get(i).column(),
                                       inputValues.get(i));
        }
            
        List<ValueEval> outputValues = new ArrayList<>(meta.outputs().size());
        meta.outputs()
            .forEach(a -> outputValues.add(forkedEvaluator.evaluate(firstSheetName, a.row(), a.column())));

        log.debug("Output Values of DEFINE execution: {}.", outputValues);

        return outputValues.size() == 1 ? outputValues.get(0) : toArrayEval(outputValues);
    }
    
    private static TwoDEval toArrayEval(List<ValueEval> outputValues) {
        ArrayEval ae = new ArrayEval();
        ae.setValues(outputValues);
        return ae;
    }

}
