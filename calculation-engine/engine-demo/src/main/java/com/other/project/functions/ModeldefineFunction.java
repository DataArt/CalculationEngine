package com.other.project.functions;

import java.util.HashMap;
import java.util.Map;

import com.dataart.spreadsheetanalytics.functions.poi.CustomFunction;
import com.dataart.spreadsheetanalytics.functions.poi.FunctionMeta;
import com.dataart.spreadsheetanalytics.functions.poi.data.DefineFunction;

@FunctionMeta(value = "MODELDEFINE")
public class ModeldefineFunction extends DefineFunction implements CustomFunction {

    public static final String KEYWORD = ModeldefineFunction.class.getAnnotation(FunctionMeta.class).value();
    public static final Map<String, Class<ModeldefineFunctionMeta>> map = new HashMap<>();

    static {
        map.put(KEYWORD, ModeldefineFunctionMeta.class);
    }

}
