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
package com.dataart.spreadsheetanalytics.api.engine;

import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.api.model.IEvaluationResult;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;

/**
 * One of two basic interfaces to use the library. 
 * It's purpose is to do the evaluation of Cell or whole DataModel.
 * Two methods: {@link #evaluate(ICellAddress)} and {@link #evaluate()} are designed to do it.
 * 
 * Usually new instance of Evaluator should be created for every {@link IDataModel} to evaluate.
 * 
 * Basic implementation: {@link SpreadsheetEvaluator}.
 */
public interface IEvaluator {

    /**
     * Does evaluation of one provided cell.
     * Result cannot be null, but since it is a wrapper the underlying value can be of any type.
     */
    IEvaluationResult<ICellValue> evaluate(ICellAddress addr);

    /**
     * Does evaluation for every not-empty cell in {@link IDataModel}.
     * Simple realisation is done {@link #evaluate(ICellAddress)} for every cell in for loop.
     * Some other implementation can use complex logic to evaluate in parallel, etc.
     * 
     * Returns {@link IDataSet} where no formulas, but values in the cells.
     */
    IEvaluationResult<IDataModel> evaluate();

}
