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
import java.util.ArrayList;
import java.util.List;

import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.api.model.IDsCell;
import com.dataart.spreadsheetanalytics.api.model.IDsRow;
import com.dataart.spreadsheetanalytics.dto.DataSetDto;
import com.dataart.spreadsheetanalytics.model.CellValue;
import com.dataart.spreadsheetanalytics.model.DataModelId;
import com.dataart.spreadsheetanalytics.model.DataSet;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

final class DataSetDtoConverters {

    static final ObjectMapper mapper = new ObjectMapper();
    
    private DataSetDtoConverters() {
        mapper.configure(IGNORE_UNKNOWN, true);
    }
    
    static DataSetDto toDataSetDto(final IDataSet dataSet) {
        List<List<Object>> table = new ArrayList<>(dataSet.rowCount());
        
        for (IDsRow r : dataSet) {
            List<Object> row = new ArrayList<>(r.width());
            
            for (IDsCell c : r) {
                row.add(c.value().get());
            }
            
            table.add(row);
        }
        
        DataSetDto dto = new DataSetDto();
        
        dto.table = table;
        
        dto.dataModelId = dataSet.getDataModelId().toString();
        dto.name = dataSet.getName();
        
        return dto;
    }
    
    static DataSetDto toDataSetDto(final String json) {
        try { return mapper.readValue(json, DataSetDto.class); }
        catch (IOException e) { throw new RuntimeException(e); }
    }
    
    static IDataSet toDataSet(final DataSetDto dto) {
        IDataSet dataSet = new DataSet(dto.name);
        dataSet.setDataModelId(new DataModelId(dto.dataModelId));
        
        for (List<Object> row : dto.table) {
            IDsRow dsrow = dataSet.addRow();
            
            for (Object value : row) {
                dsrow.addCell().value(CellValue.from(value));
            }
        }
        
        return dataSet;
    }
    
    static IDataSet toDataSet(final String json) {
        return toDataSet(toDataSetDto(json));
    }
    
    static String toJsonString(final DataSetDto dto) {
        try { return mapper.writeValueAsString(dto); }
        catch (IOException e) { throw new RuntimeException(e); }
    }

    static String toJsonString(final IDataSet dataSet) {
        return toJsonString(toDataSetDto(dataSet));
    }
    
    static ObjectNode toJsonObject(final DataSetDto dto) {
        return (ObjectNode) mapper.valueToTree(dto);
    }

    static ObjectNode toJsonObject(final IDataSet dataSet) {
        return toJsonObject(toDataSetDto(dataSet));
    }

}
