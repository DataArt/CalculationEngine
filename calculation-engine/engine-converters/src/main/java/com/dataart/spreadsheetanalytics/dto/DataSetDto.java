package com.dataart.spreadsheetanalytics.dto;

import java.util.List;

public class DataSetDto {

    public String name;
    public String dataModelId;

    public List<List<Object>> table;
    
    public String getName() { return this.name; }
    public void setName(String name) { this.name = name; }

    public String getDataModelId() { return this.dataModelId; }
    public void setDataModelId(String dataModelId) { this.dataModelId = dataModelId; }

    public List<List<Object>> getTable() { return this.table; }
    public void setTable(List<List<Object>> table) { this.table = table; }

}
