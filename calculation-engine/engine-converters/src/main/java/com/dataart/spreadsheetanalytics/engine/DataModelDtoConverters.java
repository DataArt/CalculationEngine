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

import static com.fasterxml.jackson.core.JsonGenerator.Feature.IGNORE_UNKNOWN;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Optional;

import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDmCell;
import com.dataart.spreadsheetanalytics.api.model.IDmRow;
import com.dataart.spreadsheetanalytics.dto.DataModelDto;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.CellValue;
import com.dataart.spreadsheetanalytics.model.DataModel;
import com.dataart.spreadsheetanalytics.model.DataModelId;
import com.dataart.spreadsheetanalytics.model.DmCell;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

final class DataModelDtoConverters {

    static final ObjectMapper mapper = new ObjectMapper();
    
    private DataModelDtoConverters() {
        mapper.configure(IGNORE_UNKNOWN, true);
    }
    
    static DataModelDto toDataModelDto(final IDataModel dataModel) {

        Map<String, Object> table = new HashMap<>();
        Map<String, Object> result = new HashMap<>();
        
        Map<String, String> names = new HashMap<>(); //TODO: implement as soon as we get names support
        
        for (IDmRow r : dataModel) {
            for (IDmCell c : r) {
                ICellAddress address = c.getAddress();
                
                table.put(address.a1Address().address(), c.getContent().get());

                if (c.getValue().isPresent()) {
                    result.put(address.a1Address().address(), c.getValue().get().get());
                }
            }
        }

        dataModel.getCellAliases().forEach( (k,v) -> names.put(k.a1Address().address(), v) );

        DataModelDto dto = new DataModelDto();
        
        dto.names = names;
        dto.table = table;
        dto.result = result;
        
        dto.dataModelId = dataModel.getDataModelId().toString();
        dto.name = dataModel.getName();
        
        return dto;
    }
    
    static DataModelDto toDataModelDto(final String json) {
        try { return mapper.readValue(json, DataModelDto.class); }
        catch (IOException e) { throw new RuntimeException(e); }
    }
    
    static IDataModel toDataModel(final DataModelDto dto) {
        IDataModel dataModel = new DataModel(dto.name);
        dataModel.setDataModelId(new DataModelId(dto.dataModelId));
        
        for (Entry<String, Object> cell : dto.table.entrySet()) {
            ICellAddress address = A1Address.fromA1Address(cell.getKey());
            Object content = cell.getValue();
            
            DmCell dmcell = new DmCell();
            dmcell.setAddress(address);
            dmcell.setContent(CellValue.from(content));
            
            dataModel.setCell(address, dmcell);
        }
        
        for (Entry<String, Object> cell : dto.result.entrySet()) {
            Object value = cell.getValue();
            if (value == null) { continue; }
            
            ICellAddress address = A1Address.fromA1Address(cell.getKey());
            
            ((DmCell) dataModel.getCell(address)).setValue(Optional.of(CellValue.from(value)));
        }
        
        //TODO: add support for names: Map<String, String> names = dto.names;

        dto.getNames().forEach( (k,v) -> dataModel.setCellAlias(A1Address.fromA1Address(k), v) );

        return dataModel;
    }
    
    static IDataModel toDataModel(final String json) {
        return toDataModel(toDataModelDto(json));
    }
    
    static String toJsonString(final DataModelDto dto) {
        try { return mapper.writeValueAsString(dto); }
        catch (IOException e) { throw new RuntimeException(e); }
    }

    static String toJsonString(final IDataModel dataModel) {
        return toJsonString(toDataModelDto(dataModel));
    }
    
    static ObjectNode toJsonObject(final DataModelDto dto) {
        return (ObjectNode) mapper.valueToTree(dto);
    }

    static ObjectNode toJsonObject(final IDataModel dataModel) {
        return toJsonObject(toDataModelDto(dataModel));
    }

}
