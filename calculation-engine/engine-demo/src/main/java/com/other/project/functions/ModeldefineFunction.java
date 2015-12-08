package com.other.project.functions;

import java.util.HashMap;
import java.util.Map;

import com.dataart.spreadsheetanalytics.api.model.ICustomFunction;
import com.dataart.spreadsheetanalytics.api.model.CustomFunctionMeta;
import com.dataart.spreadsheetanalytics.functions.poi.data.DefineFunction;

@CustomFunctionMeta(value = "MODELDEFINE")
public class ModeldefineFunction extends DefineFunction implements ICustomFunction {

    public static final String KEYWORD = ModeldefineFunction.class.getAnnotation(CustomFunctionMeta.class).value();
    public static final Map<String, Class<ModeldefineFunctionMeta>> map = new HashMap<>();

    static {
        map.put(KEYWORD, ModeldefineFunctionMeta.class);
    }

}
