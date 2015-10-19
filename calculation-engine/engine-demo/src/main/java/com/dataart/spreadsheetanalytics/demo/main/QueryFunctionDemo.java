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
package com.dataart.spreadsheetanalytics.demo.main;

import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.dataart.spreadsheetanalytics.api.engine.ExternalServices;
import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.api.model.IDsCell;
import com.dataart.spreadsheetanalytics.api.model.IDsRow;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.CellAddress;
import com.dataart.spreadsheetanalytics.model.DataModel;

public class QueryFunctionDemo {
    private final static Logger log = LoggerFactory.getLogger(QueryFunctionDemo.class);

    public static void main(String[] args) throws Exception {

        final String query = args[0];
        final List<String> cellsToEvaluate = new ArrayList<>(Arrays.asList(args));
        cellsToEvaluate.remove(0);
        final String dslookupAddress = cellsToEvaluate.remove(cellsToEvaluate.size() - 1);

        final DataModel model = new DataModel(Paths.get(query).getFileName().toString(), query);
        
        EvaluationWithExecutionGraphDemo.initCaches(model);
        
        final IEvaluator evaluator = new SpreadsheetEvaluator(model);
        
        log.info("QUERY function with INDEX function:\n");
        for (String cellToEvaluate : cellsToEvaluate) {
            final ICellAddress addr = new CellAddress(model.dataModelId(), A1Address.fromA1Address(cellToEvaluate));

            final ICellValue cv = evaluator.evaluate(addr);
            log.info("Result: " + cv + "\n");            
        }

        ExternalServices external = ExternalServices.INSTANCE;
        
        IDataSet ds = external.getDataSetStorage().getDataSet("pers");

        log.info("\nResult DataSet of QUERY function with parameters (called 'pers'):\n");
        for (IDsRow row : ds) {
            for (IDsCell cell : row) {
                log.info(cell.value() + "");
                log.info(" | ");
            }
            log.info("\n");
        }
        
        log.info("\nDSLOOKUP with DataSet from QUERY function:\n");
        final ICellAddress addr = new CellAddress(model.dataModelId(), A1Address.fromA1Address(dslookupAddress));
        final ICellValue cv = evaluator.evaluate(addr);
        log.info("Result: " + cv);
    }

}

