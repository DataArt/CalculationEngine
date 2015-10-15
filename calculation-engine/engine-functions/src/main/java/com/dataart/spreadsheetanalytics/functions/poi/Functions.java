package com.dataart.spreadsheetanalytics.functions.poi;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import org.apache.poi.ss.formula.udf.AggregatingUDFFinder;
import org.apache.poi.ss.formula.udf.DefaultUDFFinder;
import org.apache.poi.ss.formula.udf.UDFFinder;
import org.reflections.Reflections;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Util class to work fith custom spreadsheet functions.
 * Allows to scan for such functions (java classes), load them into target (evaluator) objects.
 * 
 * This class can be extended to support loading of more custom functions from different packages.
 * 
 */
public class Functions {
    private static final Logger log = LoggerFactory.getLogger(Functions.class);
    
    /** Basic package where all the custom function are stored. By default static initializer tries to search it. */
    public static final String PACKAGE_FUNCTIONS = "com.dataart.spreadsheetanalytics.functions.poi";

    /**
     * Cache for custom functions (classes).
     */
    protected static final Map<String, Class<? extends CustomFunction>> fs;
    static {
        fs = load(PACKAGE_FUNCTIONS);
    }

    /**
     * POI's cache for custom functions: static instance of {@link UDFFinder}
     */
    protected static final UDFFinder poifs;
    static {
        List<String> names = new ArrayList<>(Functions.get().size());
        List<CustomFunction> funcs = new ArrayList<>(Functions.get().size());

        for (Entry<String, Class<? extends CustomFunction>> en : fs.entrySet()) {

            try {
                names.add(en.getKey());
                funcs.add(en.getValue().newInstance());
            } catch (Exception e) {
                log.error(String.format("Cannot create instance of CustomFunction %s", en.getKey()), e);
            }
        }

        poifs = names.isEmpty()
              ? null
              : new AggregatingUDFFinder(new DefaultUDFFinder(
                      names.toArray(new String[names.size()]),
                      funcs.toArray(new CustomFunction[funcs.size()])));
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
    public static Map<String, Class<? extends CustomFunction>> get() { return Collections.unmodifiableMap(fs); }

    /**
     * Returns static instance of {@link UDFFinder} for custom functions. Can be null.
     */
    public static UDFFinder getUdfFinder() { return poifs; }
    
}
