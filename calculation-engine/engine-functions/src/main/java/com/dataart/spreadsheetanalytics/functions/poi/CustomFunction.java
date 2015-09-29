package com.dataart.spreadsheetanalytics.functions.poi;

import org.apache.poi.ss.formula.functions.FreeRefFunction;

import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.engine.ExternalServices;

/**
 * High level interface for all custom functions for spreadsheet.
 * Used as marker with DI. 
 * 'Marker' part is used to locate all custom functions and load them into memory.
 * 'DI' part is used to inject some state-containing object for this function to work.
 * Since some of the functions require data access, it must provide access to {@link ExternalServices}.
 * Some of the functions should be executed in the context as the parent-function, so {@link IEvaluator} should be provided.
 * 
 * All of the dependencies can be omitted in case function does not require any dependencdies to work (e.g. Math functions).
 */
public interface CustomFunction extends FreeRefFunction {

    void setEvaluator(IEvaluator evaluator);

}
