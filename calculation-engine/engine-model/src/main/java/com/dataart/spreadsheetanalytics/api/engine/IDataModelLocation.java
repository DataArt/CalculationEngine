package com.dataart.spreadsheetanalytics.api.engine;

import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.engine.FileSystemDataModelLocation;

/**
 * Simple interface to provide path to {@link IDataModel}s.
 * Path can be file system, database, network, etc.
 * Each implemetation of this interface and {@link IDataProvider#updateDataModels(IDataModelLocation)}
 * should support loading from path.
 * 
 * Known implementations: {@link FileSystemDataModelLocation}.
 */
public interface IDataModelLocation {

}
