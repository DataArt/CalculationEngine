package com.dataart.spreadsheetanalytics.engine;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.UUID;

import org.junit.BeforeClass;
import org.junit.Test;

import com.dataart.spreadsheetanalytics.api.engine.IAuditor;
import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraph;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphEdge;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex;
import com.dataart.spreadsheetanalytics.engine.graph.ExecutionGraphVertex;
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
                                    .put("B2", 5.0)
                                    .put("A2", 1200.0)
                                    .put("A3", 30.0)
                                    .put("A4", 50.0)
                                    .put("A5", 20.0)
                                    .put("C3", "=B2+Tax")
                                    .put("D2", "=ISEVEN(C3)")
                                    .put("D3", "=SUM(A2,A3,Coef)")
                                    .put("D5", "=MEDIAN(RangeA)")
                                    .put("D4", "=My_Sum")))
                .set("result", new ObjectNode(JsonNodeFactory.instance)))
                .set("names", new ObjectNode(JsonNodeFactory.instance)
                                    .put("Bon", "A3")
                                    .put("Rev", "A2")
                                    .put("Total", "D3")
                                    .put("Tax", "A1")
                                    .put("RangeA", "A1,A2,B2,C1,C3,D2,D3,F8")
                                    .put("My_Sum", "=AVERAGE(A4,A5)")
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
        Double d4_expected_value = 35.0;
        Double d5_expected_value = 15.8;

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
        assertThat(evaluator.evaluate(A1Address.fromA1Address("D4")).getResult().get()).isEqualTo(d4_expected_value);
        assertThat(evaluator.evaluate(A1Address.fromA1Address("D5")).getResult().get()).isEqualTo(d5_expected_value);

        assertThat(actualJsonObject).isEqualTo(jsonObject);
    }

    @Test
    public void toDataModel_jsonString_validateExecutionGraph() {
        //given

        Map<String, Set<Object>> vertexNameToValue = new HashMap<>();
        vertexNameToValue.put("A1", new HashSet<Object>(Arrays.asList(10.8)));
        vertexNameToValue.put("A2", new HashSet<Object>(Arrays.asList(1200.0)));
        vertexNameToValue.put("A3", new HashSet<Object>(Arrays.asList(30.0)));
        vertexNameToValue.put("A4", new HashSet<Object>(Arrays.asList(50.0)));
        vertexNameToValue.put("A5", new HashSet<Object>(Arrays.asList(20.0)));
        vertexNameToValue.put("B2", new HashSet<Object>(Arrays.asList(5.0)));
        vertexNameToValue.put("+", new HashSet<Object>(Arrays.asList(15.8)));//
        vertexNameToValue.put("C1", new HashSet<Object>(Arrays.asList("")));
        vertexNameToValue.put("C3", new HashSet<Object>(Arrays.asList(15.8)));//
        vertexNameToValue.put("ISEVEN", new HashSet<Object>(Arrays.asList("FALSE")));
        vertexNameToValue.put("D2", new HashSet<Object>(Arrays.asList("FALSE")));
        vertexNameToValue.put("F8", new HashSet<Object>(Arrays.asList("")));
        vertexNameToValue.put("SUM", new HashSet<Object>(Arrays.asList(1232.0)));
        vertexNameToValue.put("MEDIAN", new HashSet<Object>(Arrays.asList(15.8)));
        vertexNameToValue.put("AVERAGE", new HashSet<Object>(Arrays.asList(35.0)));
        vertexNameToValue.put("D4", new HashSet<Object>(Arrays.asList(35.0)));
        vertexNameToValue.put("D5", new HashSet<Object>(Arrays.asList(15.8)));
        vertexNameToValue.put("My_Sum", new HashSet<Object>(Arrays.asList(35.0)));
        vertexNameToValue.put("D3", new HashSet<Object>(Arrays.asList(1232.0)));
        vertexNameToValue.put("Coef", new HashSet<Object>(Arrays.asList(2.0)));
        vertexNameToValue.put("RangeA", new HashSet<Object>(Arrays.asList(
                Arrays.asList("", 1232.0, "FALSE", 15.8, "", 5.0, 1200.0, 10.8))));
        vertexNameToValue.put(",", new HashSet<Object>(Arrays.asList(
                Arrays.asList("", 1232.0, "FALSE", 15.8, "", 5.0, 1200.0, 10.8))));
        vertexNameToValue.put("VALUE", new HashSet<Object>(Arrays.asList(2.0, 10.8)));

        Map<String, Set<String>> edgeSourceToTarget = new HashMap<>();
        edgeSourceToTarget.put("A1", new HashSet<String>(Arrays.asList("+")));
        edgeSourceToTarget.put("B2", new HashSet<String>(Arrays.asList("+")));
        edgeSourceToTarget.put("F8", new HashSet<String>(Arrays.asList(",")));
        edgeSourceToTarget.put("A2", new HashSet<String>(Arrays.asList("SUM")));
        edgeSourceToTarget.put("A3", new HashSet<String>(Arrays.asList("SUM")));
        edgeSourceToTarget.put("C3", new HashSet<String>(Arrays.asList("ISEVEN")));
        edgeSourceToTarget.put("VALUE", new HashSet<String>(Arrays.asList("+", "SUM")));
        edgeSourceToTarget.put("+", new HashSet<String>(Arrays.asList("C3")));
        edgeSourceToTarget.put("ISEVEN", new HashSet<String>(Arrays.asList("D2")));
        edgeSourceToTarget.put("SUM", new HashSet<String>(Arrays.asList("D3")));
        edgeSourceToTarget.put("Coef", new HashSet<String>(Arrays.asList("SUM")));
        edgeSourceToTarget.put("A4", new HashSet<String>(Arrays.asList("AVERAGE")));
        edgeSourceToTarget.put("A5", new HashSet<String>(Arrays.asList("AVERAGE")));
        edgeSourceToTarget.put("AVERAGE", new HashSet<String>(Arrays.asList("D4")));
        edgeSourceToTarget.put("My_Sum", new HashSet<String>(Arrays.asList("D4")));
        edgeSourceToTarget.put("MEDIAN", new HashSet<String>(Arrays.asList("D5")));
        edgeSourceToTarget.put("RangeA", new HashSet<String>(Arrays.asList("MEDIAN")));
        edgeSourceToTarget.put(",", new HashSet<String>(Arrays.asList("MEDIAN")));

        Map<String, Object> aliasToVertexName = new HashMap<>();
        aliasToVertexName.put("Coef", "VALUE");
        aliasToVertexName.put("Tax", "VALUE");//
        aliasToVertexName.put("Total", "D3");
        aliasToVertexName.put("Bon", "A3");
        aliasToVertexName.put("Rev", "A2");
        aliasToVertexName.put("My_Sum", "AVERAGE");
        aliasToVertexName.put("RangeA", ",");

        //when
        IDataModel model = DataModelDtoConverters.toDataModel(json);
        IAuditor auditor = new SpreadsheetAuditor(new SpreadsheetEvaluator(model));
        IExecutionGraph graph = auditor.buildExecutionGraph();

        //then

        //checking vertices
        for (IExecutionGraphVertex ivertex : graph.getVertices()) {
            ExecutionGraphVertex vertex = (ExecutionGraphVertex) ivertex;
            Set<Object> value = vertexNameToValue.get(vertex.name());
            assertThat(vertex.value()).isIn(value);
            
            if (vertex.alias() == null) { continue; }
            assertThat(vertex.name()).isEqualTo(aliasToVertexName.get(vertex.alias()));
        }

        //checking edges
        for (IExecutionGraphEdge iedge : graph.getEdges()) {
            String from = ((ExecutionGraphVertex) graph.getEdgeSource(iedge)).name();
            String to = ((ExecutionGraphVertex) graph.getEdgeTarget(iedge)).name();
            Set<String> expected = edgeSourceToTarget.get(from);
            assertThat(to).isIn(expected);
        }
    }

}
