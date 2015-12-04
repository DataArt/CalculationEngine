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

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IEvaluationContext;
import com.dataart.spreadsheetanalytics.api.model.IEvaluationResult;
import com.dataart.spreadsheetanalytics.demo.util.DemoUtil;
import com.dataart.spreadsheetanalytics.engine.Converters;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.DataSet;
import com.dataart.spreadsheetanalytics.model.EvaluationContext;


public class Evaluation2ThreadsDemo {
    
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
        final IDataModel model = Converters.toDataModel(new XSSFWorkbook(excel));
        
        DemoUtil.initCaches(model, excel);
        new SpreadsheetEvaluator(model); //TODO: static init?
            
        System.out.println("1");
        new Thread(() -> {
            try{
                final IEvaluator evaluator1 = new SpreadsheetEvaluator(model);
                for (String cell : cellsToEvaluate) {
                    IEvaluationContext ctx = new EvaluationContext();
                    ctx.set("Validation", new DataSet("Validation"));
                    IEvaluationResult<ICellValue> val = evaluator1.evaluate(A1Address.fromA1Address(cell), ctx);
                    System.out.println("[1] Result of " + cell + " is: " + val.getResult());
                    DataSet vds = (DataSet) val.getContext().get("Validation");
                    System.out.println(vds);
                }
            }catch (Exception e) {
                e.printStackTrace();
            }
        }).start();
        
        System.out.println("2");
        
        new Thread(() -> {
            try {
                final IEvaluator evaluator2 = new SpreadsheetEvaluator(model);
                for (String cell : cellsToEvaluate) {
                    IEvaluationContext ctx = new EvaluationContext();
                    ctx.set("Validation", new DataSet("Validation"));
                    IEvaluationResult<ICellValue> val = evaluator2.evaluate(A1Address.fromA1Address(cell), ctx);
                    System.out.println("[2] Result of " + cell + " is: " + val.getResult());
                    DataSet vds = (DataSet) val.getContext().get("Validation");
                    System.out.println(vds);
                }
            }catch (Exception e) {
                e.printStackTrace();
            }
        }).start();
        
    }
    
}
