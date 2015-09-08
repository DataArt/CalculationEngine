package com.dataart.spreadsheetanalytics.api.engine;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataModelId;
import com.dataart.spreadsheetanalytics.engine.DefineFunctionMeta;

/**
 * Root interface for any data access from other part of library.
 * IDataProvider contains all methods to CRUD any {@link IDataModel} and related classes.
 * 
 * The particular use is not specified, but usually it may be a singleton type for all application or prototype.
 * In case of singleton it may aggregate other data providers inside of itself and gice facade like access to Auditor and Evaluator.
 * In case of prototype it may be created every time for every evaluation operation and destroyed just after.
 */
public interface IDataProvider {

    /**
     * Gives the Map of defeine functions, where key - is function name, value is {@link DefineFunctionMeta}.
     * This should be unmodifiable map in most cases.
     */
    Map<String, DefineFunctionMeta> getDefineFunctions();

    /**
     * Does full scan for DEFINE function for all loaded {@link IDataModel}s. 
     */
    void updateDefineFunctions();

    /**
     * Does add new DEFINE function to cache of existing functions.
     */
    void addDefineFunction(DefineFunctionMeta meta);

    /**
     * Does find operation for given {@link IDataModelId}. Simple select by Id. 
     */
    IDataModel getDataModel(IDataModelId dataModelId);

    /**
     * Replaces all old {@link IDataModel}s from cache with new ones.
     * New ones are taken from specified {@link IDataModelLocation}.
     * To add a new {@link IDataModel} use {@link #addDataModel(IDataModelLocation)}.
     */
    void updateDataModels(IDataModelLocation location);
    
    /**
     * Adds new {@link IDataModel} to cache
     */
    void addDataModel(IDataModelLocation location);
    
    /**
     * Adds new {@link IDataModel} to cache
     */
    void addDataModel(IDataModel dataModel);
    
    /**
     * Creates new {@link IDataModel} for execution purpose.
     * This will be an in-memory DataModel used in current context.
     * Will be destroyed after all evaluation operations are completed.
     * 
     * @param dataModelId original {@link IDataModelId} to copy
     * @param inputAddresses list of {@link ICellAddress} to replace with values
     * @param inputValues list of {@link ICellValue} to replace in original model
     * @return in-memory copy of existing model with replaced values
     * @throws IOException if original model is not found, or memory allocation error.
     */
    IDataModel createModelForExecution(IDataModelId dataModelId, List<ICellAddress> inputAddresses, List<ICellValue> inputValues) throws IOException;

}
