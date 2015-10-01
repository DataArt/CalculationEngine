package com.dataart.spreadsheetanalytics.engine;

import com.dataart.spreadsheetanalytics.api.model.IDataModelId;

public abstract class AttributeFunctionMeta {

    protected String name;
    protected IDataModelId dataModelId;
    
    public String name() { return this.name; }
    public IDataModelId dataModelId() { return this.dataModelId; }
    
    public void name(String name) { this.name = name; }
    public void dataModelId(IDataModelId dataModelId) { this.dataModelId = dataModelId; }
    
    abstract AttributeFunctionMeta parse(String formula);
}
