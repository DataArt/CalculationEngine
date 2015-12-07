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

import java.util.UUID;

import org.apache.poi.ss.formula.OperationEvaluationContext;
import org.apache.poi.ss.formula.eval.StringEval;
import org.apache.poi.ss.formula.eval.ValueEval;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.dataart.spreadsheetanalytics.api.engine.ExternalServices;
import com.dataart.spreadsheetanalytics.api.model.IDsRow;
import com.dataart.spreadsheetanalytics.functions.poi.CustomFunction;
import com.dataart.spreadsheetanalytics.functions.poi.FunctionMeta;
import com.dataart.spreadsheetanalytics.model.CellValue;
import com.dataart.spreadsheetanalytics.model.DataSet;

@FunctionMeta("VALIDATE2")
public class Validate2Function implements CustomFunction {
    private static final Logger log = LoggerFactory.getLogger(Validate2Function.class);
    
    public static final String DATASET_NAME = "Validation";
    
    protected ExternalServices external = ExternalServices.INSTANCE;

    @Override
    public ValueEval evaluate(ValueEval[] args, OperationEvaluationContext ec) {
        DataSet validateSet = (DataSet) ec.getCustomEvaluationContext().get(DATASET_NAME);
        if (validateSet == null) {
            log.error("No Validation DataSet in current context is found. No information will be logged.");
            validateSet = new DataSet(DATASET_NAME);
        }
        
        IDsRow r = validateSet.addRow();
        r.addCell().value(CellValue.from("Message" + UUID.randomUUID().toString()));
        r.addCell().value(CellValue.from("Severity"));
        r.addCell().value(CellValue.from("Cell"));
        r.addCell().value(CellValue.from("CellContent"));
        r.addCell().value(CellValue.from("CellValue"));
        
        return new StringEval("Called VALIDATE2 function.");
    }
}
