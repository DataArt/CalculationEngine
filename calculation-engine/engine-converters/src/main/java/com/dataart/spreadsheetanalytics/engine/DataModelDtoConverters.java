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
package com.dataart.spreadsheetanalytics.engine;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.json.JSONObject;

import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDmCell;
import com.dataart.spreadsheetanalytics.api.model.IDmRow;
import com.dataart.spreadsheetanalytics.dto.DataModelDto;
import com.fasterxml.jackson.databind.ObjectMapper;

final class DataModelDtoConverters {

    private DataModelDtoConverters() {}
    
    static DataModelDto toDataModelDto(final IDataModel dataModel) {

        Map<String, Object> table = new HashMap<>();
        Map<String, Object> result = new HashMap<>();
        
        Map<String, String> names = new HashMap<>(); //TODO: implements as soone as we get names support
        
        for (IDmRow r : dataModel) {
            for (IDmCell c : r) {
                ICellAddress address = c.address();
                
                table.put(address.a1Address().address(), c.content().get());

                if (c.value().isPresent()) {
                    result.put(address.a1Address().address(), c.value().get().get());
                }
            }
        }
        DataModelDto dto = new DataModelDto();
        
        dto.names = names;
        dto.table = table;
        dto.result = result;
        
        dto.dataModelId = dataModel.dataModelId().toString();
        dto.name = dataModel.name();
        
        return dto;
    }
    
    static DataModelDto toDataModelDto(final String json) throws IOException {
        ObjectMapper jsonm = new ObjectMapper();
        return jsonm.readValue(json, DataModelDto.class);
    }
    
    static IDataModel toDataModel(final DataModelDto dto) {
        return null; //TODO
    }
    
    static IDataModel toDataModel(final String json) throws IOException {
        return toDataModel(toDataModelDto(json));
    }
    
    static String toJsonString(final DataModelDto dto) {
        JSONObject json = new JSONObject(dto);
        return json.toString();
    }

    static String toJsonString(final IDataModel dataModel) {
        return toJsonString(toDataModelDto(dataModel));
    }
    
    static JSONObject toJsonObject(final DataModelDto dto) {
        return new JSONObject(dto);
    }

    static JSONObject toJsonObject(final IDataModel dataModel) {
        return toJsonObject(toDataModelDto(dataModel));
    }

}
