package com.dataart.spreadsheetanalytics.test;

import static com.dataart.spreadsheetanalytics.test.util.GraphTestUtil.STANDARD_GRAPHML_DIR;
import static org.junit.Assert.fail;

import java.io.IOException;
import java.io.StringWriter;

import javax.xml.transform.Source;
import javax.xml.transform.TransformerConfigurationException;

import org.jgraph.graph.DefaultEdge;
import org.jgrapht.DirectedGraph;
import org.jgrapht.ext.GraphMLExporter;
import org.xml.sax.SAXException;
import org.xmlunit.builder.Input;
import org.xmlunit.diff.ComparisonResult;
import org.xmlunit.diff.DOMDifferenceEngine;
import org.xmlunit.diff.DifferenceEngine;

import com.dataart.spreadsheetanalytics.api.engine.IAuditor;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraph;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetAuditor;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.engine.execgraph.ExecutionGraph;
import com.dataart.spreadsheetanalytics.engine.execgraph.ExecutionGraphVertex;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.CellAddress;
import com.dataart.spreadsheetanalytics.model.DataModel;
import com.dataart.spreadsheetanalytics.test.util.GraphWithProperertiesMLExporter;

public abstract class SerializedGraphTest {
    
    protected static IExecutionGraph graph;
    protected static DirectedGraph<ExecutionGraphVertex, DefaultEdge> dgraph;
    protected static ExecutionGraphVertex rootVertex;

    public static void before(String path, String address) throws IOException {
        final IDataModel model = new DataModel(path);        
        final IAuditor auditor = new SpreadsheetAuditor(new SpreadsheetEvaluator(model));        
        final ICellAddress addr = new CellAddress(model.dataModelId(), A1Address.fromA1Address(address));        
        graph = auditor.buildDynamicExecutionGraph(addr);
        dgraph = ExecutionGraph.unwrap((ExecutionGraph) graph);
        rootVertex = (ExecutionGraphVertex)graph.getRootVertex();        
    }
    
    public void assert_ExcelFile_SerializedGraph(String file, String address) throws TransformerConfigurationException, SAXException {
        //given
        String expectedGraphML = file + "_" + address + ".graphml";
        Source expected = Input.fromFile(STANDARD_GRAPHML_DIR + expectedGraphML).build();
        
        GraphMLExporter exporter = new GraphWithProperertiesMLExporter(address);
        StringWriter sw = new StringWriter();
        
        //when
        exporter.export(sw, dgraph);
        Source actual = Input.fromString(sw.toString()).build();
        
        //then
        DifferenceEngine de = new DOMDifferenceEngine();
        de.addDifferenceListener((comparision, outcome) -> {
            if (outcome == ComparisonResult.DIFFERENT) {
                boolean ok = false;
                
                if ("id".equals(comparision.getControlDetails().getTarget().getNodeName())) { ok = true; }

                if (!ok) { fail(comparision.toString()); }
            }
        });

        de.compare(actual, expected);
    }
}
