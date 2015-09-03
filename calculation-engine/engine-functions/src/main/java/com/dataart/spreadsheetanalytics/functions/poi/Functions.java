package com.dataart.spreadsheetanalytics.functions.poi;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import org.apache.poi.ss.formula.functions.FreeRefFunction;

public class Functions {

    protected static Map<String, FreeRefFunction> fs;

    private Functions() {}

    static {
        reload();
    }

    private static void reload() {
        fs = new HashMap<>();
        
    }

    public static Map<String, FreeRefFunction> get() {
        return Collections.unmodifiableMap(fs);
    }

}
