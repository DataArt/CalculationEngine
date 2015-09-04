package com.dataart.spreadsheetanalytics.functions.poi;

import org.apache.poi.ss.formula.functions.FreeRefFunction;

import com.dataart.spreadsheetanalytics.api.engine.IDataProvider;
import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;

public interface CustomFunction extends FreeRefFunction {

    void setDataProvider(IDataProvider dataProvider);

    void setEvaluator(IEvaluator evaluator);

}
