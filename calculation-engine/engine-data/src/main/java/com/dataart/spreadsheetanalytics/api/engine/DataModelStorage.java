package com.dataart.spreadsheetanalytics.api.engine;

import java.util.List;
import java.util.Map;

import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataModelId;

public interface DataModelStorage {

    void addDataModel(IDataModel dataModel);
    
    IDataModel getDataModel(IDataModelId dataModelId);
    
    IDataModel getDataModel(String dataModelName);

    Map<IDataModelId, IDataModel> getDataModels();
    
    IDataModel prepareDataModelForExecution(IDataModelId dataModelId, List<ICellAddress> inputAddresses, List<ICellValue> inputValues) throws Exception;

}
