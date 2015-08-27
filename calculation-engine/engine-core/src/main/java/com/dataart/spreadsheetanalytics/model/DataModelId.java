package com.dataart.spreadsheetanalytics.model;

import com.dataart.spreadsheetanalytics.api.model.IDataModelId;

public class DataModelId implements IDataModelId {

    protected final Object id;

    public DataModelId(Object id) { this.id = id; }

    public Object id() { return id; }
    
}
