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

import java.util.List;

import com.dataart.spreadsheetanalytics.api.model.IDataSet;

/**
 * JSON representation of {@link IDataSet}.
 */
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
