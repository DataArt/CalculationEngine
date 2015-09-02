package com.dataart.spreadsheetanalytics.demo;

import java.util.HashMap;
import java.util.Map;

import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.CellAddress;
import com.dataart.spreadsheetanalytics.model.TmpDataModel;

public class DefineFunctionDemo {

    public static void main(String[] args) throws Exception {

        final String define = "src/main/resources/excel/define-funcexec/define.xlsx";
        final String funcexec = "src/main/resources/excel/define-funcexec/funcexec.xlsx";

        final String cellToEvaluate = "C2";

        //here we need to get all the DEFINE funtions from model (on some action)
        //it can be model save action
        //and store them somewhere in a persistent storage
        //but we do not have any storage
        //so we have to use some interface for it with no implementation from our side

        final IDataModel modelDefine = new TmpDataModel(define);
        Map<String, Object> defines = new HashMap<>();
        defines.put("DEVDEF_1", modelDefine);
        defines.put("DEVDEF_2", modelDefine);
        
        //here we want to evaluate a cell
        //but this cell contains funcexec call or reference to this call
        //so application must know the name of function
        //and load it from persistent storage (interface in our case)
        final IDataModel modelFuncexec = new TmpDataModel(funcexec);

        ICellAddress addr = new CellAddress(modelFuncexec.dataModelId(), A1Address.fromA1Address(cellToEvaluate));

        final IEvaluator evaluator = new SpreadsheetEvaluator(modelFuncexec);

        ICellValue cv = evaluator.evaluate(addr);
        System.out.println(cv.toString());

    }

}
