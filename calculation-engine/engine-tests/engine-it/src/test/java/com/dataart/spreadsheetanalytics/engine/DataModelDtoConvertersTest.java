package com.dataart.spreadsheetanalytics.engine;

import static org.assertj.core.api.Assertions.assertThat;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.TreeMap;
import java.util.UUID;

import org.json.JSONException;
import org.junit.BeforeClass;
import org.junit.Test;
import org.skyscreamer.jsonassert.JSONAssert;

import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataModelId;
import com.dataart.spreadsheetanalytics.api.model.IDmCell;
import com.dataart.spreadsheetanalytics.api.model.IDmRow;
import com.dataart.spreadsheetanalytics.dto.DataModelDto;
import com.dataart.spreadsheetanalytics.model.DataModel;
import com.dataart.spreadsheetanalytics.model.DataModelId;
import com.fasterxml.jackson.databind.node.JsonNodeFactory;
import com.fasterxml.jackson.databind.node.ObjectNode;

public class DataModelDtoConvertersTest {
    
    static String dataModelPath = "src/test/resources/datamodel/DataModelDto_Test.xlsx"; 
    static DataModel dataModel;
    static DataModelDto dataModelDto;
    
    static ObjectNode validJsonObject;
    static String validJsonString;
    
    static IDataModelId sharedId = new DataModelId(UUID.randomUUID().toString());
    
    @BeforeClass
    public static void before() throws IOException {
        dataModel = (DataModel) Converters.toDataModel(new FileInputStream(dataModelPath));
        dataModel = (DataModel) new SpreadsheetEvaluator(dataModel).evaluate().getResult();
        dataModel.setDataModelId(sharedId);
        dataModel.setName("Sheet1");
        
        dataModelDto = new DataModelDto();
        dataModelDto.name = "Sheet1";
        dataModelDto.dataModelId = sharedId.toString();
        dataModelDto.names = new TreeMap<>();
        dataModelDto.names.put("My_Age", "C1");
        dataModelDto.names.put("My_Id", "C3");
        
        dataModelDto.table = new TreeMap<>();
        dataModelDto.table.put("A3", "Text");
        dataModelDto.table.put("A7", "=ISLOGICAL(TRUE)");
        dataModelDto.table.put("B5", Boolean.FALSE);
        dataModelDto.table.put("B9", "=2+2");
        dataModelDto.table.put("C1", 4.0);
        dataModelDto.table.put("C3", 6.0);
        dataModelDto.table.put("C9", "=TRUE+TRUE");
        dataModelDto.table.put("D4", "=COS(50)");
        dataModelDto.table.put("D6", "=SUM(A1,B3)");
        
        dataModelDto.result = new TreeMap<>();
        dataModelDto.result.put("A3", "Text");
        dataModelDto.result.put("A7", Boolean.TRUE);
        dataModelDto.result.put("B5", Boolean.FALSE);
        dataModelDto.result.put("B9", 4.0);
        dataModelDto.result.put("C1", 4.0);
        dataModelDto.result.put("C3", 6.0);
        dataModelDto.result.put("C9", 2.0);
        dataModelDto.result.put("D4", 0.9649660284921133);
        dataModelDto.result.put("D6", 0.0);
        
        validJsonObject = (ObjectNode) ((ObjectNode) ((ObjectNode) new ObjectNode(JsonNodeFactory.instance)
                                .put("name", "Sheet1")
                                .put("dataModelId", sharedId.toString())
                                .set("names", new ObjectNode(JsonNodeFactory.instance)
                                                    .put("My_Age", "C1")
                                                    .put("My_Id", "C3")))
                                .set("table", new ObjectNode(JsonNodeFactory.instance)
                                                    .put("A3", "Text")
                                                    .put("A7", "=ISLOGICAL(TRUE)")
                                                    .put("B5", false)
                                                    .put("B9", "=2+2")
                                                    .put("C1", 4.0)
                                                    .put("C3", 6.0)
                                                    .put("C9", "=TRUE+TRUE")
                                                    .put("D4", "=COS(50)")
                                                    .put("D6", "=SUM(A1,B3)")))
                                .set("result", new ObjectNode(JsonNodeFactory.instance)
                                                    .put("A3", "Text")
                                                    .put("A7", Boolean.TRUE)
                                                    .put("B5", Boolean.FALSE)
                                                    .put("B9", 4.0)
                                                    .put("C1", 4.0)
                                                    .put("C3", 6.0)
                                                    .put("C9", 2.0)
                                                    .put("D4", 0.9649660284921133)
                                                    .put("D6", 0.0));
        
        validJsonString = DataModelDtoConverters.mapper.writeValueAsString(validJsonObject);
    }

    @Test
    public void toDataModelDto_DataModel_ValidDataModelDto() {
        //when
        DataModelDto actual = Converters.toDataModelDto(dataModel);
        //then
        assertDataModelDtosEqual(dataModelDto, actual);
    }

    @Test
    public void toDataModelDto_JsonString_ValidDataModelDto() throws IOException {
        //when
        DataModelDto actual = Converters.toDataModelDto(validJsonString);
        //then
        assertDataModelDtosEqual(dataModelDto, actual);
    }

    @Test
    public void toDataModel_DataModelDto_ValidDataModel() {
        //when
        IDataModel actual = Converters.toDataModel(dataModelDto);
        //then
        assertDataModelsEqual(dataModel, actual);
    }

    @Test
    public void toDataModel_JsonString_ValidDataModel() throws IOException {
        //when
        IDataModel actual = Converters.toDataModel(validJsonString);
        //then
        assertDataModelsEqual(dataModel, actual);
    }

    @Test
    public void toJsonString_DataModelDto_ValidJsonString() throws IOException, JSONException {
        //when
        String actual = Converters.toJsonString(dataModelDto);
        //then
        JSONAssert.assertEquals(validJsonString, actual, true);
    }

    @Test
    public void toJsonString_DataModel_ValidJsonString() throws IOException, JSONException {
        //when
        String actual = Converters.toJsonString(dataModel);
        //then
        JSONAssert.assertEquals(validJsonString, actual, true);
    }

    @Test
    public void toJsonObject_DataModelDto_ValidJsonObject() {
        //when
        ObjectNode actual = Converters.toJsonObject(dataModelDto);
        //then
        assertThat(validJsonObject.equals(actual)).isTrue();
    }

    @Test
    public void toJsonObject_DataModel_ValidJsonObject() {
        //when
        ObjectNode actual = Converters.toJsonObject(dataModel);
        //then
        assertThat(validJsonObject.equals(actual)).isTrue();
    }
    
    public static void assertDataModelsEqual(IDataModel expected, IDataModel actual) {
        if (expected == actual) { return; }
        
        if (!expected.getName().equals(actual.getName())) { throw new AssertionError(String.format("DataModel Assert: name - expected [%s], but was [%s]", expected.getName(), actual.getName())); }
        if (!expected.getDataModelId().toString().equals(actual.getDataModelId().toString())) { throw new AssertionError(String.format("DataModel Assert: DataModelId - expected [%s], but was [%s]", expected.getDataModelId(), actual.getDataModelId())); }
            
        assertThat(actual.rowCount()).isEqualTo(expected.rowCount());
        
        for (IDmRow exRow : expected) {
            IDmRow acRow = actual.getRow(exRow.index());
            
            assertThat(acRow.cellCount()).isEqualTo(exRow.cellCount());
            
            for (IDmCell exCell : exRow) {
                IDmCell acCell = acRow.getCell(exCell.getAddress().column());
                
                assertThat(acCell.getAddress().row()).isEqualTo(exCell.getAddress().row());
                assertThat(acCell.getAddress().column()).isEqualTo(exCell.getAddress().column());
                
                //TODO: assertThat(acCell.alias()).isEqualTo(exCell.alias());
                assertThat(acCell.getContent()).isEqualTo(exCell.getContent());
                assertThat(acCell.getValue()).isEqualTo(exCell.getValue());
            }
        }
    }
    
    public static void assertDataModelDtosEqual(DataModelDto expected, DataModelDto actual) {
        if (expected == actual) { return; }
        
        if (!expected.name.equals(actual.name)) { throw new AssertionError(String.format("DataModelDto Assert: name - expected [%s], but was [%s]", expected.name, actual.name)); }
        if (!expected.dataModelId.equals(actual.dataModelId)) { throw new AssertionError(String.format("DataModelDto Assert: DataModelId - expected [%s], but was [%s]", expected.dataModelId, actual.dataModelId)); }
        
        if (!expected.names.equals(actual.names)) { throw new AssertionError(String.format("DataModelDto Assert: names - expected [%s], but was [%s]", expected.names, actual.names)); }
        if (!expected.result.equals(actual.result)) { throw new AssertionError(String.format("DataModelDto Assert: result - expected [%s], but was [%s]", expected.result, actual.result)); }
        if (!expected.table.equals(actual.table)) { throw new AssertionError(String.format("DataModelDto Assert: table - expected [%s], but was [%s]", expected.table, actual.table)); }
    }

}
