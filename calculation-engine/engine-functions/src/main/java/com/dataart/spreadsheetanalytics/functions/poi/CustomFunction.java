/*
Copyright 2015 DataArt, Inc.

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
package com.dataart.spreadsheetanalytics.functions.poi;

import static org.apache.poi.ss.formula.eval.OperandResolver.getSingleValue;

import java.util.LinkedList;
import java.util.List;

import org.apache.poi.ss.formula.eval.AreaEval;
import org.apache.poi.ss.formula.eval.EvaluationException;
import org.apache.poi.ss.formula.eval.ValueEval;
import org.apache.poi.ss.formula.functions.FreeRefFunction;

import com.dataart.spreadsheetanalytics.api.engine.ExternalServices;

/**
 * High level interface for all custom functions for spreadsheet.
 * It is a marker interface and is needed only for functions scan part (and loading into memory).
 * Since some of the functions require data access, it might use access to {@link ExternalServices}.
 */
public interface CustomFunction extends FreeRefFunction {

    static List<ValueEval> prepareQueryArgs(List<ValueEval> queryArgs) throws EvaluationException {
        List<ValueEval> args = new LinkedList<>();
        
        for (ValueEval arg : queryArgs) {
            
            if (arg instanceof AreaEval) {
                AreaEval range = (AreaEval) arg;
                
                for (int i = range.getFirstRow(); i <= range.getLastRow(); i++) {
                    for (int j = range.getFirstColumn(); j <= range.getLastColumn(); j++)
                        { args.add(getSingleValue(arg, i, j)); }
                }
            } else {
                args.add(arg);  
            }
        }
        
        return args;
    }
    
}
