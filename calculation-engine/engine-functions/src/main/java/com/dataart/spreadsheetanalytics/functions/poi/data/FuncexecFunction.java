/*
Copyright 2015 DataArt Apps, Inc

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
package com.dataart.spreadsheetanalytics.functions.poi.data;

import static com.dataart.spreadsheetanalytics.engine.Converters.toWorkbook;
import static com.dataart.spreadsheetanalytics.engine.EvaluationWorkbooks.getEvaluationCell;
import static com.dataart.spreadsheetanalytics.engine.EvaluationWorkbooks.toEvaluationWorkbook;
import static com.dataart.spreadsheetanalytics.engine.EvaluationWorkbooks.updateCell;
import static org.apache.poi.common.fork.ExecutionGraphBuilderUtils.coerceValueTo;
import static org.apache.poi.common.fork.ExecutionGraphBuilderUtils.populateCellValue;
import static org.apache.poi.ss.formula.eval.OperandResolver.getSingleValue;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;
import java.util.Locale;
import java.util.stream.Collectors;

import org.apache.poi.ss.formula.ArrayEval;
import org.apache.poi.ss.formula.EvaluationWorkbook;
import org.apache.poi.ss.formula.IStabilityClassifier;
import org.apache.poi.ss.formula.OperationEvaluationContext;
import org.apache.poi.ss.formula.TwoDEval;
import org.apache.poi.ss.formula.WorkbookEvaluator;
import org.apache.poi.ss.formula.eval.ErrorEval;
import org.apache.poi.ss.formula.eval.EvaluationException;
import org.apache.poi.ss.formula.eval.RefEval;
import org.apache.poi.ss.formula.eval.StringEval;
import org.apache.poi.ss.formula.eval.ValueEval;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.dataart.spreadsheetanalytics.api.engine.DataModelAccessor;
import com.dataart.spreadsheetanalytics.api.engine.ExternalServices;
import com.dataart.spreadsheetanalytics.api.engine.MetaFunctionAccessor;
import com.dataart.spreadsheetanalytics.api.model.CustomFunctionMeta;
import com.dataart.spreadsheetanalytics.api.model.IA1Address;
import com.dataart.spreadsheetanalytics.api.model.ICustomFunction;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.engine.DefineFunctionMeta;

/**
 * https://github.com/DataArt/CalculationEngine/wiki/Custom-Functions-List-and-Description#funcexec
 */
@CustomFunctionMeta(value = "FUNCEXEC")
public class FuncexecFunction implements ICustomFunction {
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
        defineFunctionName = defineFunctionName.toUpperCase(Locale.getDefault());

        MetaFunctionAccessor defines = (MetaFunctionAccessor) ec.getCustomEvaluationContext().get(MetaFunctionAccessor.class);
        if (defines == null) { defines = this.external.getMetaFunctionAccessor(); }

        if (defines.get(defineFunctionName) == null) {
            log.warn("No DEFINE function with name {} is found.", defineFunctionName);
            return ErrorEval.NAME_INVALID;
        }

        List<ValueEval> inputValues = new LinkedList<>();        
        List<ValueEval> inArgs = new ArrayList(Arrays.asList(args));
        inArgs.remove(0); //remove define function name
        
        try {
            for (ValueEval v : ICustomFunction.prepareQueryArgs(inArgs))
                { inputValues.add(getSingleValue(v, ec.getRowIndex(), ec.getColumnIndex())); }
        }
        catch (EvaluationException e) {
            log.error("Cannot resolve input values for FUNCEXEC function", e);
            return ErrorEval.VALUE_INVALID;
        }

        final DefineFunctionMeta meta = (DefineFunctionMeta) defines.get(defineFunctionName);       
        log.info("Found DEFINE function to invoke. Name = {}.", defineFunctionName);
        
        if (meta.getInputs().size() != inputValues.size()) {
            log.warn("Wrong number of input arguments for FUNCEXEC+DEFINE. Expected: {}, Actual: {}.", meta.getInputs().size(), args.length - 1);
            return ErrorEval.VALUE_INVALID;
        }
                
        List<IA1Address> inputAddresses = meta.getInputs();
        log.debug("Input Addresses for DEFINE: {}, Input Values for DEFINE: {}.", inputAddresses, inputValues);
        
        if (inputAddresses.size() != inputValues.size()) {
            log.warn("Wrong number of input arguments for {} function.", defineFunctionName);
            return ErrorEval.VALUE_INVALID;
        }

        DataModelAccessor dataModels = (DataModelAccessor) ec.getCustomEvaluationContext().get(DataModelAccessor.class);
        if (dataModels == null) { dataModels = this.external.getDataModelAccessor(); }
        
        IDataModel dmWithDefine = dataModels.get(meta.getDataModelId());
        
        Workbook book = toWorkbook(dmWithDefine);
        EvaluationWorkbook defineBook = toEvaluationWorkbook(book);
        
        Sheet s = book.getSheetAt(0); //TODO one sheet support
        for (int i = 0; i < inputAddresses.size(); i++) {
            
            Row defineRow = s.getRow(inputAddresses.get(i).row());
            if (defineRow == null) { defineRow = s.createRow(inputAddresses.get(i).row()); }
            Cell defineCell = defineRow.getCell(inputAddresses.get(i).column());
            if (defineCell == null) { defineCell = defineRow.createCell(inputAddresses.get(i).column()); }
            
            populateCellValue(defineCell, inputValues.get(i));
            updateCell(defineBook, defineCell);
        }
        
        WorkbookEvaluator defineEvaluator = new WorkbookEvaluator(defineBook, IStabilityClassifier.TOTALLY_IMMUTABLE, null);
        List<ValueEval> outputValues = meta.getOutputs()
                                           .stream()
                                           .map(a -> defineEvaluator.evaluate(getEvaluationCell(defineBook, a), ec.getCustomEvaluationContext()))
                                           .collect(Collectors.<ValueEval>toList());
        
        log.debug("Output Values of DEFINE execution: {}.", outputValues);

        return outputValues.size() == 1 ? outputValues.get(0) : toArrayEval(outputValues);
    }
    
    private static TwoDEval toArrayEval(List<ValueEval> outputValues) {
        ArrayEval ae = new ArrayEval();
        ae.setValues(outputValues);
        return ae;
    }

}
