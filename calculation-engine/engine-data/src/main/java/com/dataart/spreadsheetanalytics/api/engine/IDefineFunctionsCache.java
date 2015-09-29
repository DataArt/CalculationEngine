package com.dataart.spreadsheetanalytics.api.engine;

import java.util.Map;
import java.util.Set;

import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.engine.DefineFunctionMeta;

public interface IDefineFunctionsCache {

    void addDefineFunction(DefineFunctionMeta meta);
    
    Map<String, DefineFunctionMeta> getDefineFunctions();
    /**
     * Does full scan given {@link IDataModel} for DEFINE functions ({@link DefineFunctionMeta}).
     * 3 iterators are used inside to go through all the cells and find 'DEFINE' keyword.
     */
    Map<String, DefineFunctionMeta> scanDataModelForDefines(IDataModel dataModel);
    
    void updateDefineFunctions(Set<IDataModel> dataModels);

}
