package com.dataart.spreadsheetanalytics.functions.poi;

import static java.lang.annotation.ElementType.TYPE;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

import java.lang.annotation.Retention;
import java.lang.annotation.Target;

@Target(TYPE)
@Retention(RUNTIME)
public @interface FunctionMeta {

    String value();

    int numberOfArguments() default 0;
}