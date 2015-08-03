package com.dataart.spreadsheetanalytics.model;

import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphNode;

public class ExecutionGraphNode implements IExecutionGraphNode {

    final protected String name;
    final protected String formula;
    final protected ICellValue value;
    final protected Object type;
    final protected Object sourceObjectId;

    public ExecutionGraphNode(String name, String formula, ICellValue value, Object type, Object sourceObjectId) {
        this.name = name;
        this.formula = formula;
        this.value = value;
        this.type = type;
        this.sourceObjectId = sourceObjectId;
    }

    @Override
    public String name() { return name; }

    @Override
    public String formula() { return formula; }

    @Override
    public ICellValue value() { return value; }

    @Override
    public Object type() { return type; }

    @Override
    public Object sourceObjectId() { return sourceObjectId; }

}
