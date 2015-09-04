package com.dataart.spreadsheetanalytics.api.engine;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataModelId;

public interface IDataProvider {

    Map<String, DefineFunctionMeta> getDefineFunctions();
    
    IDataModel getDataModel(IDataModelId dataModelId);
    
    IDataModel createModelForExecution(IDataModelId dataModelId, List<ICellAddress> inputAddresses, List<ICellValue> inputValues) throws IOException;

}
