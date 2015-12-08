package com.dataart.spreadsheetanalytics.dto;

import java.util.Map;

public class DataModelDto {

    public String name;
    public String dataModelId;

    public Map<String, Object> table;
    public Map<String, Object> result;

    public Map<String, String> names;

    public String getName() { return this.name; }
    public void setName(String name) { this.name = name; }

    public String getDataModelId() { return this.dataModelId; }
    public void setDataModelId(String dataModelId) { this.dataModelId = dataModelId; }

    public Map<String, Object> getTable() { return this.table; }
    public void setTable(Map<String, Object> table) { this.table = table; }

    public Map<String, Object> getResult() { return this.result; }
    public void setResult(Map<String, Object> result) { this.result = result; }

    public Map<String, String> getNames() { return this.names; }
    public void setNames(Map<String, String> names) { this.names = names; }

}
