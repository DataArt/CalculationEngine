package com.dataart.spreadsheetanalytics.api.engine;

import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;

public interface IEvaluator {

    ICellValue evaluate(ICellAddress addr);
    
    IDataSet evaluate(IDataModel dataModel);
    
    /**
     * Lazy initialization of data model. Usefull for cases when you do not have a model in a moment of Evaluator initialization,
     * but still want to use it. 
     */
    void init(IDataModel dataModel);
    
    void destroy();

}
