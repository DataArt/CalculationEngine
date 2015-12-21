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

import java.util.Arrays;

import org.apache.poi.ss.formula.OperationEvaluationContext;
import org.apache.poi.ss.formula.eval.StringEval;
import org.apache.poi.ss.formula.eval.ValueEval;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.dataart.spreadsheetanalytics.api.model.CustomFunctionMeta;
import com.dataart.spreadsheetanalytics.api.model.ICustomFunction;

/**
 * https://github.com/DataArt/CalculationEngine/wiki/Custom-Functions-List-and-Description#define
 */
@CustomFunctionMeta("DEFINE")
public class DefineFunction implements ICustomFunction {
    private static final Logger log = LoggerFactory.getLogger(DefineFunction.class);

    /**
     * This function does nothing, since it should never be evaluated.
     * DEFINE function is a spreadsheet metadata and it cannot have a value.
     */
    @Override
    public ValueEval evaluate(ValueEval[] args, OperationEvaluationContext ec) {
        log.debug("In evaluate() of DEFINE function. Args = {}", Arrays.toString(args));
        
        return new StringEval(DefineFunction.class.getAnnotation(CustomFunctionMeta.class).value());
    }

}
