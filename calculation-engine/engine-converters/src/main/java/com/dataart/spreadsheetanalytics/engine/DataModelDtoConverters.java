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

import static com.dataart.spreadsheetanalytics.model.A1Address.fromA1Address;
import static com.dataart.spreadsheetanalytics.model.A1Address.isAddress;
import static com.fasterxml.jackson.core.JsonGenerator.Feature.IGNORE_UNKNOWN;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Optional;
import java.util.stream.Collectors;

import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDmCell;
import com.dataart.spreadsheetanalytics.api.model.IDmRow;
import com.dataart.spreadsheetanalytics.dto.DataModelDto;
import com.dataart.spreadsheetanalytics.model.CellValue;
import com.dataart.spreadsheetanalytics.model.DataModel;
import com.dataart.spreadsheetanalytics.model.DataModelId;
import com.dataart.spreadsheetanalytics.model.DmCell;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

/**
 * Util methods for conversion to\from {@link IDataModel} and {@link DataModelDto}.
 */
final class DataModelDtoConverters {

    static final ObjectMapper mapper = new ObjectMapper();
    
    private DataModelDtoConverters() {
        mapper.configure(IGNORE_UNKNOWN, true);
    }
    
    /** Converts {@link IDataModel} to {@link DataModelDto}. */
    static DataModelDto toDataModelDto(final IDataModel dataModel) {

        Map<String, Object> names = dataModel.getNamedAddresses()
                .entrySet()
                .stream()
                .collect(Collectors.toMap(
                            e -> e.getKey(),
                            e -> e.getValue().a1Address().address()));

        dataModel.getNamedValues().forEach( (k,v) -> names.put(k, v.get()) );

        Map<String, Object> table = new HashMap<>();
        Map<String, Object> result = new HashMap<>();
        
        for (IDmRow r : dataModel) {
            for (IDmCell c : r) {
                ICellAddress address = c.getAddress();
                
                table.put(address.a1Address().address(), c.getContent().get());

                if (c.getValue().isPresent()) {
                    result.put(address.a1Address().address(), c.getValue().get().get());
                }
            }
        }

        DataModelDto dto = new DataModelDto();
        
        dto.names = names;
        dto.table = table;
        dto.result = result;
        
        dto.dataModelId = dataModel.getDataModelId().toString();
        dto.name = dataModel.getName();
        
        return dto;
    }
    
    /** Converts JSON string that represents an {@link IDataModel} to {@link DataModelDto}. */
    static DataModelDto toDataModelDto(final String json) {
        try { return mapper.readValue(json, DataModelDto.class); }
        catch (IOException e) { throw new CalculationEngineException(e); }
    }
    
    /** Converts a {@link DataModelDto} to {@link IDataModel}. */
    static IDataModel toDataModel(final DataModelDto dto) {
        IDataModel dataModel = new DataModel(dto.name);
        dataModel.setDataModelId(new DataModelId(dto.dataModelId));
        
        for (Entry<String, Object> cell : dto.table.entrySet()) {
            ICellAddress address = fromA1Address(cell.getKey());
            Object content = cell.getValue();
            
            DmCell dmcell = new DmCell();
            dmcell.setAddress(address);
            dmcell.setContent(CellValue.from(content));
            
            dataModel.setCell(address, dmcell);
        }
        
        for (Entry<String, Object> cell : dto.result.entrySet()) {
            Object value = cell.getValue();
            if (value == null) { continue; }
            
            ICellAddress address = fromA1Address(cell.getKey());
            
            ((DmCell) dataModel.getCell(address)).setValue(Optional.of(CellValue.from(value)));
        }

        for (Entry<String, Object> entry : dto.getNames().entrySet()) {
            Object aliasValue = entry.getValue();
            
            if (isAddress(aliasValue)) {
                dataModel.setNamedAddress(entry.getKey(), fromA1Address((String) aliasValue));
            } else {
                dataModel.setNamedValue(entry.getKey(), CellValue.from(aliasValue));
            }
        }

        return dataModel;
    }
    
    /** Converts JSON string that represents an {@link IDataModel} to {@link IDataModel}. */
    static IDataModel toDataModel(final String json) {
        return toDataModel(toDataModelDto(json));
    }
    
    /** Converts a {@link DataModelDto} to JSON string that represents an {@link IDataModel}. */
    static String toJsonString(final DataModelDto dto) {
        try { return mapper.writeValueAsString(dto); }
        catch (IOException e) { throw new CalculationEngineException(e); }
    }

    /** Converts a {@link IDataModel} to JSON string that represents an {@link IDataModel}. */
    static String toJsonString(final IDataModel dataModel) {
        return toJsonString(toDataModelDto(dataModel));
    }
    
    /** Converts a {@link DataModelDto} to JSON object represented by {@link ObjectNode}. */
    static ObjectNode toJsonObject(final DataModelDto dto) {
        return (ObjectNode) mapper.valueToTree(dto);
    }

    /** Converts a {@link IDataModel} to JSON object represented by {@link ObjectNode}. */
    static ObjectNode toJsonObject(final IDataModel dataModel) {
        return toJsonObject(toDataModelDto(dataModel));
    }

}
