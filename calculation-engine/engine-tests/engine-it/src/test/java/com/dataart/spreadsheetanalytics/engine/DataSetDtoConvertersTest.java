package com.dataart.spreadsheetanalytics.engine;

import static org.assertj.core.api.Assertions.assertThat;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.UUID;

import org.json.JSONException;
import org.junit.BeforeClass;
import org.junit.Test;
import org.skyscreamer.jsonassert.JSONAssert;

import com.dataart.spreadsheetanalytics.api.model.IDataModelId;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.api.model.IDsCell;
import com.dataart.spreadsheetanalytics.api.model.IDsRow;
import com.dataart.spreadsheetanalytics.dto.DataSetDto;
import com.dataart.spreadsheetanalytics.model.DataModelId;
import com.dataart.spreadsheetanalytics.model.DataSet;
import com.fasterxml.jackson.databind.node.JsonNodeFactory;
import com.fasterxml.jackson.databind.node.ObjectNode;

public class DataSetDtoConvertersTest {
    
    static String dataSetPath = "src/test/resources/datamodel/DataSetDto_Test.xlsx"; 
    static DataSet dataSet;
    static DataSetDto dataSetDto;
    
    static ObjectNode validJsonObject;
    static String validJsonString;
    
    static IDataModelId sharedId = new DataModelId(UUID.randomUUID().toString());
    
    @BeforeClass
    public static void before() throws IOException {
        dataSet = (DataSet) Converters.toDataSet(new FileInputStream(dataSetPath));
        dataSet.setDataModelId(sharedId);
        dataSet.setName("Sheet1");
        
        dataSetDto = new DataSetDto();
        dataSetDto.name = "Sheet1";
        dataSetDto.dataModelId = sharedId.toString();
        
        dataSetDto.table = new ArrayList<>();
        dataSetDto.table.add(Arrays.asList(1.0, Boolean.TRUE, "text", -0.0001));
        dataSetDto.table.add(Arrays.asList(2.0, Boolean.TRUE, "text", -0.0002));
        dataSetDto.table.add(Arrays.asList(3.0, Boolean.TRUE, "text", -0.0003));
        dataSetDto.table.add(Arrays.asList(4.0, Boolean.FALSE, "text", -0.0004));
        dataSetDto.table.add(Arrays.asList(5.0, Boolean.FALSE, "text", -0.0005));
        dataSetDto.table.add(Arrays.asList(6.0, Boolean.FALSE, "text", -0.0006));
        
        validJsonObject = (ObjectNode) ((new ObjectNode(JsonNodeFactory.instance)
                                .put("name", "Sheet1")
                                .put("dataModelId", sharedId.toString())
                                .set("table", new ObjectNode(JsonNodeFactory.instance).arrayNode()
                                                    .add(new ObjectNode(JsonNodeFactory.instance).arrayNode()
                                                            .add(1.0)
                                                            .add(Boolean.TRUE)
                                                            .add("text")
                                                            .add(-0.0001)
                                                         )
                                                    .add(new ObjectNode(JsonNodeFactory.instance).arrayNode()
                                                            .add(2.0)
                                                            .add(Boolean.TRUE)
                                                            .add("text")
                                                            .add(-0.0002)   
                                                         )
                                                    .add(new ObjectNode(JsonNodeFactory.instance).arrayNode()
                                                            .add(3.0)
                                                            .add(Boolean.TRUE)
                                                            .add("text")
                                                            .add(-0.0003)
                                                         )
                                                    .add(new ObjectNode(JsonNodeFactory.instance).arrayNode()
                                                            .add(4.0)
                                                            .add(Boolean.FALSE)
                                                            .add("text")
                                                            .add(-0.0004)
                                                         )
                                                    .add(new ObjectNode(JsonNodeFactory.instance).arrayNode()
                                                            .add(5.0)
                                                            .add(Boolean.FALSE)
                                                            .add("text")
                                                            .add(-0.0005)
                                                         )
                                                    .add(new ObjectNode(JsonNodeFactory.instance).arrayNode()
                                                            .add(6.0)
                                                            .add(Boolean.FALSE)
                                                            .add("text")
                                                            .add(-0.0006)   
                                                         )
                                                    )));
        
        validJsonString = DataSetDtoConverters.mapper.writeValueAsString(validJsonObject);
    }

    @Test
    public void toDataSetDto_DataSet_ValidDataSetDto() {
        //when
        DataSetDto actual = Converters.toDataSetDto(dataSet);
        //then
        assertDataSetDtosEqual(dataSetDto, actual);
    }

    @Test
    public void toDataSetDto_JsonString_ValidDataSetDto() throws IOException {
        //when
        DataSetDto actual = Converters.toDataSetDto(validJsonString);
        //then
        assertDataSetDtosEqual(dataSetDto, actual);
    }

    @Test
    public void toDataSet_DataSetDto_ValidDataSet() {
        //when
        IDataSet actual = Converters.toDataSet(dataSetDto);
        //then
        assertDataSetsEqual(dataSet, actual);
    }

    @Test
    public void toDataSet_JsonString_ValidDataSet() throws IOException {
        //when
        IDataSet actual = Converters.toDataSet(validJsonString);
        //then
        assertDataSetsEqual(dataSet, actual);
    }

    @Test
    public void toJsonString_DataSetDto_ValidJsonString() throws IOException, JSONException {
        //when
        String actual = Converters.toJsonString(dataSetDto);
        //then
        JSONAssert.assertEquals(validJsonString, actual, true);
    }

    @Test
    public void toJsonString_DataSet_ValidJsonString() throws IOException, JSONException {
        //when
        String actual = Converters.toJsonString(dataSet);
        //then
        JSONAssert.assertEquals(validJsonString, actual, true);
    }

    @Test
    public void toJsonObject_DataSetDto_ValidJsonObject() {
        //when
        ObjectNode actual = Converters.toJsonObject(dataSetDto);
        //then
        assertThat(validJsonObject.equals(actual)).isTrue();
    }

    @Test
    public void toJsonObject_DataSet_ValidJsonObject() {
        //when
        ObjectNode actual = Converters.toJsonObject(dataSet);
        //then
        assertThat(validJsonObject.equals(actual)).isTrue();
    }
    
    public static void assertDataSetsEqual(IDataSet expected, IDataSet actual) {
        if (expected == actual) { return; }
        
        if (!expected.getName().equals(actual.getName())) { throw new AssertionError(String.format("DataSet Assert: name - expected [%s], but was [%s]", expected.getName(), actual.getName())); }
        if (!expected.getDataModelId().toString().equals(actual.getDataModelId().toString())) { throw new AssertionError(String.format("DataSet Assert: DataModelId - expected [%s], but was [%s]", expected.getDataModelId(), actual.getDataModelId())); }
            
        assertThat(actual.rowCount()).isEqualTo(expected.rowCount());
        
        for (IDsRow exRow : expected) {
            IDsRow acRow = actual.getRow(exRow.index());
            
            assertThat(acRow.cellCount()).isEqualTo(exRow.cellCount());
            
            for (IDsCell exCell : exRow) {
                IDsCell acCell = acRow.getCell(exCell.index());
                
                assertThat(acCell.getValue()).isEqualTo(exCell.getValue());
            }
        }
    }
    
    public static void assertDataSetDtosEqual(DataSetDto expected, DataSetDto actual) {
        if (expected == actual) { return; }
        
        if (!expected.name.equals(actual.name)) { throw new AssertionError(String.format("DataSetDto Assert: name - expected [%s], but was [%s]", expected.name, actual.name)); }
        if (!expected.dataModelId.equals(actual.dataModelId)) { throw new AssertionError(String.format("DataSetDto Assert: DataModelId - expected [%s], but was [%s]", expected.dataModelId, actual.dataModelId)); }
        
        if (!expected.table.equals(actual.table)) { throw new AssertionError(String.format("DataSetDto Assert: table - expected [%s], but was [%s]", expected.table, actual.table)); }
    }

}
