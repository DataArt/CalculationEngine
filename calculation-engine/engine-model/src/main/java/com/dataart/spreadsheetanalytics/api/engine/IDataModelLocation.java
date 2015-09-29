package com.dataart.spreadsheetanalytics.api.engine;

import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.engine.FileSystemDataModelLocation;

/**
 * Simple interface to provide path to {@link IDataModel}s.
 * Path can be file system, database, network, etc.
 * 
 * Known implementations: {@link FileSystemDataModelLocation}.
 */
public interface IDataModelLocation {

}
