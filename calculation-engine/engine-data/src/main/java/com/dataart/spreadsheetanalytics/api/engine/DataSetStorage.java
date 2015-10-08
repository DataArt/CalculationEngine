package com.dataart.spreadsheetanalytics.api.engine;

import com.dataart.spreadsheetanalytics.api.model.IDataModelId;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.api.model.ILazyDataSet;
import com.dataart.spreadsheetanalytics.engine.DataSetScope;

public interface DataSetStorage {
    
    /**
     * {@link #saveDataSet(IDataSet, DataSetScope)} with {@link DataSetScope#GLOBAL}
     */
    void saveDataSet(IDataSet dset);
    
    void saveDataSet(IDataSet dset, DataSetScope scope);
    
    IDataSet getDataSet(IDataModelId dataModelId) throws Exception;
    
    IDataSet getDataSet(String name) throws Exception;
    
    IDataSet getDataSet(String name, ILazyDataSet.Parameters parameters) throws Exception;
    
    boolean isLazyDataSet(String name);
    
    boolean isLazyDataSet(IDataSet dataSet);

}
