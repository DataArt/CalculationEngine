package com.dataart.spreadsheetanalytics.functions.poi;

import static java.lang.annotation.ElementType.TYPE;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

import java.lang.annotation.Retention;
import java.lang.annotation.Target;

/**
 * Marker for {@link CustomFunction}s.
 * Must contain name of function and (optional) number of arguments.
 */
@Target(TYPE)
@Retention(RUNTIME)
public @interface FunctionMeta {

    /** Name of this function */
    String value();

    /** Number of input arguments in case this is static data */
    int numberOfArguments() default 0;
}
