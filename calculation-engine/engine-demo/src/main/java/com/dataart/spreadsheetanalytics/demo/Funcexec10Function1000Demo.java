package com.dataart.spreadsheetanalytics.demo;

import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.concurrent.TimeUnit;

import com.dataart.spreadsheetanalytics.api.engine.IDataProvider;
import com.dataart.spreadsheetanalytics.engine.DataProvider;
import com.dataart.spreadsheetanalytics.engine.FileSystemDataModelLocation;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.CellAddress;
import com.dataart.spreadsheetanalytics.model.DataModel;

public class Funcexec10Function1000Demo {

    public static void main(String[] args) throws Exception {

        final String storage = "src/main/resources/excel/define-funcexec/index1000/";
        final int funcexecs = 11;
        final String funcexec = "src/main/resources/excel/define-funcexec/index1000/f[i].xlsx";
        
        final String indexA1 = "M"; //M
        
        final int start = 4;
        final int times = 1000;


        final IDataProvider dataProvider = DataProvider.createEmptyDataProvider();
        final FileSystemDataModelLocation location = new FileSystemDataModelLocation();
        location.setPath(Paths.get(storage));
        
        dataProvider.updateDataModels(location);
        dataProvider.updateDefineFunctions();
        
        List<Callable<String>> robins = new ArrayList<>(funcexecs);
        for (int i = 1; i <= funcexecs; i++) {
            
            final String file = funcexec.replace("[i]", i + "");
            DataModel dm = new DataModel(file);

            SpreadsheetEvaluator evaluator = new SpreadsheetEvaluator(dm);
            evaluator.loadCustomFunctions(dataProvider);
            
            robins.add( () -> {
                String cv = null;
                for (int j = start; j < Integer.valueOf(times) + start; j++) {
                    String address1 = indexA1 + j;
                    cv = file + " ==> " + evaluator.evaluate(new CellAddress(dm.dataModelId(), A1Address.fromA1Address(address1)));
                }
                return cv;
            });
        }


        ExecutorService batman = Executors.newFixedThreadPool(funcexecs);
        long time1 = System.nanoTime();
        List<Future<String>> gordons =  batman.invokeAll(robins);
        
        batman.shutdown();
        
        batman.awaitTermination(10, TimeUnit.MINUTES);
        
        long time2 = System.nanoTime();
        
        for (Future<String> future : gordons) {
            System.out.println(future.get());
        }
        
        System.out.println("Time for " + times + " Funcexec(s): " + TimeUnit.NANOSECONDS.toSeconds((time2 - time1)) + " sec.");
    }

}
