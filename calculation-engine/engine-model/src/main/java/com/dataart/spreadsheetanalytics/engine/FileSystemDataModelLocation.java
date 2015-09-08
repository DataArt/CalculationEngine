package com.dataart.spreadsheetanalytics.engine;

import java.nio.file.Path;

import com.dataart.spreadsheetanalytics.api.engine.IDataModelLocation;

public class FileSystemDataModelLocation implements IDataModelLocation {

    protected Path location;
    
    public Path getPath() { return this.location; }

    public void setPath(Path location) { this.location = location; }
    
}
