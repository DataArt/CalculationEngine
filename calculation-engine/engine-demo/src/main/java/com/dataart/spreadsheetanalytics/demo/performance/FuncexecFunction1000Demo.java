package com.dataart.spreadsheetanalytics.demo.performance;

import java.nio.file.Paths;
import java.util.concurrent.TimeUnit;

import com.dataart.spreadsheetanalytics.api.engine.ExternalServices;
import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.CellAddress;
import com.dataart.spreadsheetanalytics.model.CellValue;
import com.dataart.spreadsheetanalytics.model.DataModel;

public class FuncexecFunction1000Demo {

    public static void main(String[] args) throws Exception {

        final String funcexec = args[1];
        
        final String indexA1 = args[2]; //M
        
        final Integer start = Integer.valueOf(args[3]); //4
        final String times = args[4]; //1000

        final IDataModel modelFuncexec = new DataModel(Paths.get(funcexec).getFileName().toString(), funcexec);
        
        ExternalServices external = ExternalServices.INSTANCE;
        
        //add define functions to storage - demo only
        external.getAttributeFunctionsCache().updateDefineFunctions(external.getDataModelStorage().getDataModels());
        //copy data models to cache - demo only
        external.getDataModelStorage().warmUpDataModelsForExecutionCache(external.getAttributeFunctionsCache().getDefineFunctions());

        final IEvaluator evaluator = new SpreadsheetEvaluator((DataModel) modelFuncexec);

        long time1 = System.nanoTime();
        for (int i = start; i < Integer.valueOf(times) + start; i++) {
            String address1 = indexA1 + i;
            
            final ICellValue cv1 = evaluator.evaluate(new CellAddress(modelFuncexec.dataModelId(), A1Address.fromA1Address(address1)));
            
            System.out.println(address1 + ": " + CellValue.fromCellValueToString(cv1));
        }
        long time2 = System.nanoTime();
        
        System.out.println("Time for " + times + " Funcexec(s): " + TimeUnit.NANOSECONDS.toSeconds((time2 - time1)) + " sec.");
    }
}
