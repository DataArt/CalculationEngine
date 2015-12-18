package com.dataart.spreadsheetanalytics.engine;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.HashMap;
import java.util.Map;
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
import com.fasterxml.jackson.databind.node.JsonNodeFactory;
import com.fasterxml.jackson.databind.node.ObjectNode;

public class JsonToGraphFullFlowTest {
    
    static String jsonSample;
    static ObjectNode validJsonObject;
    static IDataModelId sharedId = new DataModelId(UUID.randomUUID().toString());

    @BeforeClass
    public static void before() throws Exception {
        
        validJsonObject = (ObjectNode) ((ObjectNode) ((ObjectNode) new ObjectNode(JsonNodeFactory.instance)
                .put("name", "Sheet1")
                .put("dataModelId", sharedId.toString())
                .set("names", new ObjectNode(JsonNodeFactory.instance)
                                    .put("A1", "Tax")
                                    .put("A2", "Rev")
                                    .put("A3", "Bon")
                                    .put("D3", "Total")))
                .set("table", new ObjectNode(JsonNodeFactory.instance)
                                    .put("A1", 10.8)
                                    .put("A2", 1200.0)
                                    .put("A3", 30.0)
                                    .put("B2", 5)
                                    .put("C3", "=B2+Tax")
                                    .put("D2", "=ISEVEN(C3)")
                                    .put("D3", "=SUM(A2,A3)")))
                .set("result", new ObjectNode(JsonNodeFactory.instance));

        jsonSample = DataModelDtoConverters.mapper.writeValueAsString(validJsonObject);
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
        IDataModel model = DataModelDtoConverters.toDataModel(jsonSample);
        IEvaluator evaluator = new SpreadsheetEvaluator(model);

        //then
        assertThat(evaluator.evaluate(A1Address.fromA1Address("A1")).getResult().get()).isEqualTo(a1_expected_value);
        assertThat(evaluator.evaluate(A1Address.fromA1Address("B2")).getResult().get()).isEqualTo(b2_expected_value);
        assertThat(evaluator.evaluate(A1Address.fromA1Address("C3")).getResult().get()).isEqualTo(c3_expected_value);
        assertThat(evaluator.evaluate(A1Address.fromA1Address("D2")).getResult().get()).isEqualTo(d2_expected_value);
        assertThat(evaluator.evaluate(A1Address.fromA1Address("D3")).getResult().get()).isEqualTo(d3_expected_value);
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

        Map<String, String> aliasesToNames = new HashMap<String, String>();
        aliasesToNames.put("Tax", "A1");
        aliasesToNames.put("Total", "D3");
        aliasesToNames.put("Bon", "A3");
        aliasesToNames.put("Rev", "A2");

        //when
        IDataModel model = DataModelDtoConverters.toDataModel(jsonSample);
        IAuditor auditor = new SpreadsheetAuditor(new SpreadsheetEvaluator(model));
        IExecutionGraph graph = auditor.buildExecutionGraph();

        //then

        //checking vertices
        for (IExecutionGraphVertex ivertex : graph.getVertices()) {
            ExecutionGraphVertex vertex = (ExecutionGraphVertex) ivertex;
            Object value = vertexNameToValue.get(vertex.name());
            assertThat(vertex.value()).isEqualTo(value);
            if (vertex.alias() != null) {
                String expectedByAlias = aliasesToNames.get(vertex.alias());
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
