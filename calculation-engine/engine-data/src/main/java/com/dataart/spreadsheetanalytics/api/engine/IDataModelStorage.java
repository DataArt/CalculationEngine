package com.dataart.spreadsheetanalytics.api.engine;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.ConcurrentMap;

import com.dataart.spreadsheetanalytics.api.engine.IDataModelLocation;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataModelId;
import com.dataart.spreadsheetanalytics.engine.DefineFunctionMeta;

public interface IDataModelStorage {

    void addDataModels(IDataModelLocation location);
    
    void addDataModel(IDataModel dataModel);
    
    IDataModel getDataModel(IDataModelId dataModelId);
    
    IDataModel getDataModel(String dataModelName);
    
    IDataModel prepareDataModelForExecution(IDataModelId dataModelId, List<ICellAddress> inputAddresses, List<ICellValue> inputValues) throws IOException;

    ConcurrentMap<IDataModelId, BlockingQueue<IDataModel>> warmUpDataModelsForExecutionCache(Map<String, DefineFunctionMeta> defs);

    Set<IDataModel> getDataModels();

}
