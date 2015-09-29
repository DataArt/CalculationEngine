package com.dataart.spreadsheetanalytics.api.engine;

import com.dataart.spreadsheetanalytics.api.model.IDataModelId;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.engine.DataSetScope;

public interface IDataSetStorage {
    /**
     * {@link #saveDataSet(IDataSet, DataSetScope)} with {@link DataSetScope#GLOBAL}
     */
    void saveDataSet(IDataSet dset);
    
    void saveDataSet(IDataSet dset, DataSetScope scope);
    
    IDataSet getDataSet(IDataModelId dataModelId);
    
    IDataSet getDataSet(String name);
}
