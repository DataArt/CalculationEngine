package com.dataart.spreadsheetanalytics.engine;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.UUID;

import org.junit.Test;

import com.dataart.spreadsheetanalytics.api.model.IDataModelId;
import com.dataart.spreadsheetanalytics.model.DataModel;
import com.dataart.spreadsheetanalytics.model.DataModelId;
import com.fasterxml.jackson.databind.node.JsonNodeFactory;
import com.fasterxml.jackson.databind.node.ObjectNode;

public class DataModelDtoConvertersTest {
    
    static String dataModelPath = "src/test/resources/datamodel/DataModelDto_Test.xlsx"; 
    static DataModel dataModel;
    
    static ObjectNode validJsonObject;
    static String validJsonString;
    
    static IDataModelId sharedId = new DataModelId(UUID.randomUUID().toString());
    
//    @BeforeClass
    public void before() throws IOException {
        dataModel = (DataModel) Converters.toDataModel(new FileInputStream(dataModelPath));
        
        validJsonObject = (ObjectNode) new ObjectNode(JsonNodeFactory.instance)
                                .put("name", "Sheet1")
                                .put("dataModelId", sharedId.toString())
                                .set("table", new ObjectNode(JsonNodeFactory.instance)
                                                    .put("C1", 4.0)
                                                    
                            );
        
        validJsonString = DataModelDtoConverters.mapper.writeValueAsString(validJsonObject);
    }

    @Test
    public void toDataModelDto_DataModel_ValidDataModelDto() {}

    @Test
    public void toDataModelDto_JsonString_ValidDataModelDto() {}

    @Test
    public void toDataModel_DataModelDto_ValidDataModel() {}

    @Test
    public void toDataModel_JsonString_ValidDataModel() {}

    @Test
    public void toJsonString_DataModelDto_ValidJsonString() {}

    @Test
    public void toJsonString_DataModel_ValidJsonString() {}

    @Test
    public void toJsonObject_DataModelDto_ValidJsonObject() {}

    @Test
    public void toJsonObject_DataModel_ValidJsonObject() {}
}
