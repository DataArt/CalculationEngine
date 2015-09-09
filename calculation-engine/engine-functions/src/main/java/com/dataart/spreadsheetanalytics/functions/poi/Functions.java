package com.dataart.spreadsheetanalytics.functions.poi;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

import org.reflections.Reflections;

/**
 * Util class to work fith custom spreadsheet functions.
 * Allows to scan for such functions (java classes), load them into target (evaluator) objects.
 * 
 * This class can be extended to support loading of more custom functions from different packages.
 */
public abstract class Functions {

    /** Basic package where all the custom function are stored. By default static initializer tries to search it. */
    public final static String PACKAGE_FUNCTIONS = "com.dataart.spreadsheetanalytics.functions.poi";

    /**
     * Cache for custom functions (classes).
     */
    protected static Map<String, Class<? extends CustomFunction>> fs;

    static {
        fs = load(PACKAGE_FUNCTIONS);
    }

    /**
     * Does scan and load for custom functions.
     * By default it is invoked from static block of this class with {@link #PACKAGE_FUNCTIONS} as parameter.
     * It scans given package for {@link CustomFunction} and if that class has {@link FunctionMeta} annotation on it,
     * it will be added to functions cache ({@link #fs}).
     * 
     * This can be called for other custom functions from 3pty package.
     */
    protected static Map<String, Class<? extends CustomFunction>> load(String functionPackage) {
        Map<String, Class<? extends CustomFunction>> map = new HashMap<>();

        Set<Class<? extends CustomFunction>> classes = new Reflections(functionPackage).getSubTypesOf(CustomFunction.class);

        for (Class<? extends CustomFunction> cls : classes) {

            if (cls.isAnnotationPresent(FunctionMeta.class)) {
                FunctionMeta meta = cls.getAnnotation(FunctionMeta.class);
                map.put(meta.value(), cls);
            }
        }

        return map;
    }

    /**
     * Returns unmodifiable cache of custom functions (name-class).
     */
    public static Map<String, Class<? extends CustomFunction>> get() {
        return Collections.unmodifiableMap(fs);
    }

}
