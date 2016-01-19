package com.dataart.spreadsheetanalytics.test.util;

import java.util.List;

import org.assertj.core.api.AbstractAssert;
import org.assertj.core.api.Assertions;
import org.junit.ComparisonFailure;

import com.dataart.spreadsheetanalytics.api.model.IExecutionGraph;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphEdge;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex;
import com.dataart.spreadsheetanalytics.test.util.graphml.ExecutionGraphEdgeML;
import com.dataart.spreadsheetanalytics.test.util.graphml.ExecutionGraphML;
import com.dataart.spreadsheetanalytics.test.util.graphml.ExecutionGraphVertexML;

public class ExecutionGraphAssert extends AbstractAssert {
    
    protected ExecutionGraphAssert(Object actual, Class selfType) {
        super(actual, selfType);
    }

    public static AbstractAssert<?, IExecutionGraph> assertThat(IExecutionGraph actual) {
        return new ExecutionGraphAssert(actual, ExecutionGraphAssert.class);
    }

    @Override
    public AbstractAssert isEqualTo(Object expected) {
        if (!(expected instanceof ExecutionGraphML)) {
            throw new RuntimeException("Method 'isEqualTo()' in class ExecutionGraphAssert works only with 'ExecutionGraphML'");
        }
        
        ExecutionGraphML _expected = (ExecutionGraphML) expected;
        IExecutionGraph<IExecutionGraphVertex, IExecutionGraphEdge> _actual = (IExecutionGraph) this.actual;

        //compare vertex by vertex
        Assertions.assertThat(_actual.getVertices().size()).overridingErrorMessage("Number of Vertices expected: <[%s]>, but was in actual: <[%s]>", _expected.getVerticesML().size(), _actual.getVertices().size())
                                                                 .isEqualTo(_expected.getVerticesML().size());
        
        for (IExecutionGraphVertex av : _actual.getVertices()) {            
            List<ExecutionGraphVertexML> ev_set = _expected.verticesIndexName.get(av.getName());
            Assertions.assertThat(ev_set).overridingErrorMessage("Vertex is present in actual graph, but not present in expected: <[%s:%s:%s]>", av.getName(), av.getType(), av.getValue())
                                               .isNotNull();
            Assertions.assertThat(ev_set.size()).overridingErrorMessage("Vertex is present in actual graph, but not present in expected: <[%s:%s:%s]>", av.getName(), av.getType(), av.getValue())
                                                      .isNotEqualTo(0);

            boolean ok = false;
            for (ExecutionGraphVertexML ev : ev_set) {
                try {
                    assertVerticesAreEqual(av, ev);
                    ok = true; break;
                } catch (Exception | ComparisonFailure e) { }
            }
            
            Assertions.assertThat(ok).overridingErrorMessage("Vertex is present in actual graph, but not present in expected:%n<[%s;%s;%s;%s]>", av.getName(), av.getType(), av.getValue(), av.getFormula())
                                           .isTrue();
        }

        //compare edge by edge
        Assertions.assertThat(_actual.getEdges().size()).overridingErrorMessage("Number of Edges expected: <[%s]>, but was in actual: <[%s]>", _expected.getEdgesML().size(), _actual.getEdges().size())
                                                              .isEqualTo(_expected.getEdgesML().size());
        
        for (ExecutionGraphEdgeML ee : _expected.getEdgesML()) {
            ExecutionGraphVertexML ee_source = _expected.verticesIndexId.get(ee.sourceId);
            ExecutionGraphVertexML ee_target = _expected.verticesIndexId.get(ee.targetId);

            boolean ok = false;
            for (IExecutionGraphEdge ae : _actual.getEdges()) {
                IExecutionGraphVertex av_source = _actual.getEdgeSource(ae);
                IExecutionGraphVertex av_target = _actual.getEdgeTarget(ae);
                
                try {
                    assertVerticesAreEqual(av_source, ee_source);
                    assertVerticesAreEqual(av_target, ee_target);
                    ok = true; break;
                } catch (Exception | ComparisonFailure e) { }
            }

            Assertions.assertThat(ok).overridingErrorMessage("Edge is present in expected graph, but not found in actual: %n[%s;%s;%s;%s]%n->%n[%s;%s;%s;%s]", ee_source.getName(), ee_source.getType(), ee_source.getValue(), ee_source.formulaToString, ee_target.getName(), ee_target.getType(), ee_target.getValue(), ee_target.formulaToString)
                                           .isTrue();
        }
        
        return this;
    }

    private static void assertVerticesAreEqual(IExecutionGraphVertex av, ExecutionGraphVertexML ev) {
        Assertions.assertThat(av.getName()).isEqualTo(ev.getName());
        Assertions.assertThat(av.getValue() == null ? "" : av.getValue().toString()).isEqualTo(ev.getValue().toString());
        Assertions.assertThat(av.getType().toString()).isEqualTo(ev.getType().toString());
        Assertions.assertThat(GraphTestUtil.formulaToString(av.getFormula())).isEqualTo(ev.formulaToString);
    }

}