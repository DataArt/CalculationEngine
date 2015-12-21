/*
Copyright 2015 DataArt Apps, Inc

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
package com.dataart.spreadsheetanalytics.dto;

import java.util.Map;

public class DataModelDto {

    public String name;
    public String dataModelId;

    public Map<String, Object> table;
    public Map<String, Object> result;

    public Map<String, Object> names;

    public String getName() { return this.name; }
    public void setName(String name) { this.name = name; }

    public String getDataModelId() { return this.dataModelId; }
    public void setDataModelId(String dataModelId) { this.dataModelId = dataModelId; }

    public Map<String, Object> getTable() { return this.table; }
    public void setTable(Map<String, Object> table) { this.table = table; }

    public Map<String, Object> getResult() { return this.result; }
    public void setResult(Map<String, Object> result) { this.result = result; }

    public Map<String, Object> getNames() { return this.names; }
    public void setNames(Map<String, Object> names) { this.names = names; }

}
