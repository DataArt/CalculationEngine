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
package com.dataart.spreadsheetanalytics.demo.main;

import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import com.dataart.spreadsheetanalytics.api.engine.IAuditor;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraph;
import com.dataart.spreadsheetanalytics.demo.util.DemoUtil;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetAuditor;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.engine.execgraph.ExecutionGraphConfig;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.PoiDataModel;

public class EvaluationForkWithExecutionGraphDemo {
    
    public static void main(String[] args) throws Exception {

        //input arguments: filename and list of cells to evaluate
        if (args.length < 2) {
            System.err.println("Excel file path and Cell Address, please!");
            return;
        }
        
        final String excel = args[0];
        final List<String> cellsToEvaluate = new ArrayList<>(Arrays.asList(args));
        cellsToEvaluate.remove(0);

        //prepare DataModel to work with
        final PoiDataModel model = new PoiDataModel(Paths.get(excel).getFileName().toString(), excel);
        
        DemoUtil.initCaches(model);
        
        //create Evaluator
        final SpreadsheetEvaluator evaluator = new SpreadsheetEvaluator(model);
        
        //evaluate and save to map to print later
        Map<String, Object> values = new LinkedHashMap<>();
        for (String cell : cellsToEvaluate) {
            values.put(cell, evaluator.evaluateFork(A1Address.fromA1Address(cell)));
        }
        
        //last cell
        final ICellAddress addr = A1Address.fromA1Address(cellsToEvaluate.get(cellsToEvaluate.size() - 1));

        //create Auditor
        final IAuditor auditor = new SpreadsheetAuditor(evaluator);
        //build graph
        final IExecutionGraph graph = auditor.buildExecutionGraph(addr, ExecutionGraphConfig.DEFAULT);
        
        //print graph
        DemoUtil.generateVisJsData(graph);
        DemoUtil.plainprint(graph);

        //pring values\
        System.out.println("\n\n***********");
        for (String cell : values.keySet()) {
            System.out.println("Result of " + cell + " is: " + values.get(cell));
        }
        
    }
    
}
