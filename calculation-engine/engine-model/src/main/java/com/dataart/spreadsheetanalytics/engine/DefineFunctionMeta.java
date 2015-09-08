package com.dataart.spreadsheetanalytics.engine;

import java.util.List;

import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.IDataModelId;

public class DefineFunctionMeta {
    
    public static final String KEYWORD = "DEFINE";
    public static final String IN_OUT_SEPARATOR = "#";
    
    protected String name;
    protected List<ICellAddress> inputs;
    protected List<ICellAddress> outputs;
    protected IDataModelId dataModelId;
    
    public String name() { return this.name; }
    public List<ICellAddress> inputs() { return this.inputs; }
    public List<ICellAddress> outputs() { return this.outputs; }
    public IDataModelId dataModelId() { return this.dataModelId; }
    
    public void name(String name) { this.name = name; }
    public void inputs(List<ICellAddress> inputs) { this.inputs = inputs; }
    public void outputs(List<ICellAddress> outputs) { this.outputs = outputs; }
    public void dataModelId(IDataModelId dataModelId) { this.dataModelId = dataModelId; }
    
}
