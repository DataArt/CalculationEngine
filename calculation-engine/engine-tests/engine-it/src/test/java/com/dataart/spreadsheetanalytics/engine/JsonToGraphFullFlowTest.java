package com.dataart.spreadsheetanalytics.engine;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Map.Entry;
import java.util.UUID;

import org.junit.BeforeClass;
import org.junit.Test;

import com.dataart.spreadsheetanalytics.api.engine.IAuditor;
import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataModelId;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraph;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphEdge;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex;
import com.dataart.spreadsheetanalytics.engine.graph.ExecutionGraphVertex;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.DataModelId;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.JsonNodeFactory;
import com.fasterxml.jackson.databind.node.ObjectNode;

public class JsonToGraphFullFlowTest {
    
    static String json;
    static ObjectNode jsonObject;
    static IDataModelId sharedId = new DataModelId(UUID.randomUUID().toString());

    @BeforeClass
    public static void before() throws Exception {
        
        jsonObject = (ObjectNode) ((ObjectNode) ((ObjectNode) new ObjectNode(JsonNodeFactory.instance)
                .put("name", "Sheet1")
                .put("dataModelId", sharedId.toString())
                .set("table", new ObjectNode(JsonNodeFactory.instance)
                                    .put("A1", 10.8)
                                    .put("B2", 5.0)
                                    .put("C3", "=B2+Tax")
                                    .put("A2", 1200.0)
                                    .put("A3", 30.0)
                                    .put("D2", "=ISEVEN(C3)")
                                    .put("D3", "=SUM(A2,A3)")))
                .set("result", new ObjectNode(JsonNodeFactory.instance)))
                .set("names", new ObjectNode(JsonNodeFactory.instance)
                        .put("A1", "Tax")
                        .put("A2", "Rev")
                        .put("A3", "Bon")
                        .put("D3", "Total"));

        json = DataModelDtoConverters.mapper.writeValueAsString(jsonObject);
    }

    @Test
    public void toDataModel_jsonString_validateEvaluationResult() {
        //given
        Double a1_expected_value = 10.8;
        Double b2_expected_value = 5.0;
        Double c3_expected_value = 15.8;
        Boolean d2_expected_value = false;
        Double d3_expected_value = 1230.0;

        //when
        IDataModel model = DataModelDtoConverters.toDataModel(json);
        IEvaluator evaluator = new SpreadsheetEvaluator(model);
        ObjectNode actualJsonObject = DataModelDtoConverters.toJsonObject(model);
        actualJsonObject.set("result", new ObjectNode(JsonNodeFactory.instance));

        //then
        assertThat(evaluator.evaluate(A1Address.fromA1Address("A1")).getResult().get()).isEqualTo(a1_expected_value);
        assertThat(evaluator.evaluate(A1Address.fromA1Address("B2")).getResult().get()).isEqualTo(b2_expected_value);
        assertThat(evaluator.evaluate(A1Address.fromA1Address("C3")).getResult().get()).isEqualTo(c3_expected_value);
        assertThat(evaluator.evaluate(A1Address.fromA1Address("D2")).getResult().get()).isEqualTo(d2_expected_value);
        assertThat(evaluator.evaluate(A1Address.fromA1Address("D3")).getResult().get()).isEqualTo(d3_expected_value);

        assertThat(actualJsonObject).isEqualTo(jsonObject);

    }

    @Test
    public void toDataModel_jsonString_validateExecutionGraph() {

        //given
        Map<String, Object> vertexNameToValue = new HashMap<String, Object>();
        vertexNameToValue.put("A1", 10.8);
        vertexNameToValue.put("A2", 1200.0);
        vertexNameToValue.put("A3", 30.0);
        vertexNameToValue.put("B2", 5.0);
        vertexNameToValue.put("+", 15.8);
        vertexNameToValue.put("C3", 15.8);
        vertexNameToValue.put("ISEVEN", "FALSE");
        vertexNameToValue.put("D2", "FALSE");
        vertexNameToValue.put("SUM", 1230.0);
        vertexNameToValue.put("D3", 1230.0);

        Map<String, String> edgeSourceToTarget = new HashMap<String, String>();
        edgeSourceToTarget.put("A1", "+");
        edgeSourceToTarget.put("B2", "+");
        edgeSourceToTarget.put("+", "C3");
        edgeSourceToTarget.put("C3", "ISEVEN");
        edgeSourceToTarget.put("ISEVEN", "D2");
        edgeSourceToTarget.put("A2", "SUM");
        edgeSourceToTarget.put("A3", "SUM");
        edgeSourceToTarget.put("SUM", "D3");

        Map<String, String> aliasesToAddresses = new HashMap<String, String>();
        aliasesToAddresses.put("Tax", "A1");
        aliasesToAddresses.put("Total", "D3");
        aliasesToAddresses.put("Bon", "A3");
        aliasesToAddresses.put("Rev", "A2");

        //when
        IDataModel model = DataModelDtoConverters.toDataModel(json);
        IAuditor auditor = new SpreadsheetAuditor(new SpreadsheetEvaluator(model));
        IExecutionGraph graph = auditor.buildExecutionGraph();

        //then

        //checking vertices
        for (IExecutionGraphVertex ivertex : graph.getVertices()) {
            ExecutionGraphVertex vertex = (ExecutionGraphVertex) ivertex;
            Object value = vertexNameToValue.get(vertex.name());
            assertThat(vertex.value()).isEqualTo(value);
            if (vertex.alias() != null) {
                String expectedByAlias = aliasesToAddresses.get(vertex.alias());
                assertThat(vertex.name()).isEqualTo(expectedByAlias);
            }
        }

        //checking edges
        for (IExecutionGraphEdge iedge : graph.getEdges()) {
            String from = ((ExecutionGraphVertex) graph.getEdgeSource(iedge)).name();
            String to = ((ExecutionGraphVertex) graph.getEdgeTarget(iedge)).name();
            String expected = edgeSourceToTarget.get(from);
            assertThat(to).isEqualTo(expected);
        }

    }

}
