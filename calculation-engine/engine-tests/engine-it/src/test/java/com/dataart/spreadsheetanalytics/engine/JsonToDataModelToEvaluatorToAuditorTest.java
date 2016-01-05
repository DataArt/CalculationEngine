package com.dataart.spreadsheetanalytics.engine;

import static com.dataart.spreadsheetanalytics.model.A1Address.fromA1Address;
import static org.assertj.core.api.Assertions.assertThat;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.junit.BeforeClass;
import org.junit.Test;

import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraph;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.DataModelId;
import com.fasterxml.jackson.databind.node.JsonNodeFactory;
import com.fasterxml.jackson.databind.node.ObjectNode;

public class JsonToDataModelToEvaluatorToAuditorTest {
    
    static String json;
    static ObjectNode jsonObject;

    @BeforeClass
    public static void before() throws Exception {
        
        jsonObject = (ObjectNode) ((ObjectNode) ((ObjectNode) new ObjectNode(JsonNodeFactory.instance)
                .put("name", "Sheet1")
                .put("dataModelId", new DataModelId(UUID.randomUUID().toString()).toString())
                .set("table", new ObjectNode(JsonNodeFactory.instance)
                                    .put("A1", 10.8)
                                    .put("A2", 1200.0)
                                    .put("B2", 5.0)
                                    .put("A3", 30.0)
                                    .put("C3", "=B2+Tax")
                                    .put("D2", "=ISEVEN(C3)")
                                    .put("D3", "=SUM(A2,A3,Coef)")
                                    .put("D5", "=MEDIAN(RangeA)")
                                    .put("D4", "=My_Sum")))
                .set("result", new ObjectNode(JsonNodeFactory.instance)))
                .set("names", new ObjectNode(JsonNodeFactory.instance)
                                    .put("Bon", "B2")
                                    .put("Rev", "A2")
                                    .put("Total", "D3")
                                    .put("Tax", "A1")
                                    .put("RangeA", "A1,B2,A2")
                                    .put("My_Sum", "=AVERAGE(A1,A2)")
                                    .put("Coef", 2.0));

        json = DataModelDtoConverters.mapper.writeValueAsString(jsonObject);
    }

    @Test
    public void toDataModel_jsonString_validateEvaluationResult() {
        //given
        Double a1_expected_value = 10.8;
        Double b2_expected_value = 5.0;
        Double c3_expected_value = 15.8;
        Boolean d2_expected_value = false;
        Double d3_expected_value = 1232.0;
        Double d4_expected_value = 605.4;
        Double d5_expected_value = 10.8;

        //when
        IDataModel model = DataModelDtoConverters.toDataModel(json);
        IEvaluator evaluator = new SpreadsheetEvaluator(model);
        ObjectNode actualJsonObject = DataModelDtoConverters.toJsonObject(model);
        actualJsonObject.set("result", new ObjectNode(JsonNodeFactory.instance));

        //then
        assertThat(evaluator.evaluate(fromA1Address("A1")).getResult().get()).isEqualTo(a1_expected_value);
        assertThat(evaluator.evaluate(fromA1Address("B2")).getResult().get()).isEqualTo(b2_expected_value);
        assertThat(evaluator.evaluate(fromA1Address("C3")).getResult().get()).isEqualTo(c3_expected_value);
        assertThat(evaluator.evaluate(fromA1Address("D2")).getResult().get()).isEqualTo(d2_expected_value);
        assertThat(evaluator.evaluate(fromA1Address("D3")).getResult().get()).isEqualTo(d3_expected_value);
        assertThat(evaluator.evaluate(fromA1Address("D4")).getResult().get()).isEqualTo(d4_expected_value);
        assertThat(evaluator.evaluate(fromA1Address("D5")).getResult().get()).isEqualTo(d5_expected_value);

        assertThat(actualJsonObject).isEqualTo(jsonObject);
    }

    @SuppressWarnings("serial")
    @Test
    public void toDataModel_jsonString_validateExecutionGraph() {
        //given
        //some vertices to check that graph (part of it) is ok  
        
        Map<String, Map<String, Object>> vertices = new HashMap<>();
        vertices.put("A3",     new HashMap<String, Object>(){{
            put("value", 30.0);
            put("alias", null); }});
        vertices.put("AVERAGE", new HashMap<String, Object>(){{
            put("value", 605.4);
            put("alias", "My_Sum"); }});
        vertices.put("SUM",    new HashMap<String, Object>(){{
            put("value", 1232.0);
            put("alias", null); }});
        vertices.put("B2",     new HashMap<String, Object>(){{
            put("value", 5.0);
            put("alias", null); }});
        vertices.put("A1",     new HashMap<String, Object>(){{
            put("value", 10.8);
            put("alias", "Tax"); }});
        
        //when
        IDataModel model = DataModelDtoConverters.toDataModel(json);
        IExecutionGraph graph = new SpreadsheetAuditor(model).buildExecutionGraph();

        //then
        for (IExecutionGraphVertex vertex : graph.getVertices()) {
            Map<String, Object> expected;
            if ((expected = vertices.get(vertex.name())) == null) { continue; }
            
            assertThat(vertex.value()).isEqualTo(expected.get("value"));
            assertThat(vertex.alias()).isEqualTo(expected.get("alias"));
        }
    }

}
