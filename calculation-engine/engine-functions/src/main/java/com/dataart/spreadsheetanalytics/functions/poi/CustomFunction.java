package com.dataart.spreadsheetanalytics.functions.poi;

import org.apache.poi.ss.formula.functions.FreeRefFunction;

import com.dataart.spreadsheetanalytics.api.engine.ExternalServices;

/**
 * High level interface for all custom functions for spreadsheet.
 * It is a marker interface and is needed only for functions scan part (and loading into memory).
 * Since some of the functions require data access, it might use access to {@link ExternalServices}.
 */
public interface CustomFunction extends FreeRefFunction {

}
