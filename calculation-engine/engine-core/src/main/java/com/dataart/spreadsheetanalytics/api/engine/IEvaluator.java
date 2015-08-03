package com.dataart.spreadsheetanalytics.api.engine;

import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;

public interface IEvaluator {

    ICellValue evaluate(ICellAddress addr);

}
