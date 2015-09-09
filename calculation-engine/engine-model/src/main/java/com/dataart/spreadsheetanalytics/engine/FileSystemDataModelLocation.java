package com.dataart.spreadsheetanalytics.engine;

import java.nio.file.Path;

import com.dataart.spreadsheetanalytics.api.engine.IDataModelLocation;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;

/**
 * implementation of {@link IDataModelLocation} which uses file system as a place where {@link IDataModel}s are stored.
 * Implementation is based on {@link Path}, this field contains fs path.
 */
public class FileSystemDataModelLocation implements IDataModelLocation {

    protected Path location;
    
    public Path getPath() { return this.location; }
    public void setPath(Path location) { this.location = location; }    
}
