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
package com.dataart.spreadsheetanalytics.test;

import static org.junit.Assert.fail;

import java.io.StringWriter;

import javax.xml.transform.Source;
import javax.xml.transform.TransformerConfigurationException;

import org.hamcrest.MatcherAssert;
import org.jgraph.graph.DefaultEdge;
import org.jgrapht.DirectedGraph;
import org.xml.sax.SAXException;
import org.xmlunit.builder.Input;
import org.xmlunit.matchers.CompareMatcher;

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
import com.dataart.spreadsheetanalytics.test.util.GraphTestUtil;
import com.dataart.spreadsheetanalytics.test.util.GraphWithProperertiesMLExporter;

public abstract class SerializedGraphTest {
    
    protected static IExecutionGraph graph;
    protected static DirectedGraph<ExecutionGraphVertex, DefaultEdge> dgraph;
    protected static ExecutionGraphVertex rootVertex;

    public static void before(String path, String address) throws Exception {
        
        final IDataModel model = new DataModel(path, path);
        
        GraphTestUtil.initExternalServices((DataModel) model);
        
        final IAuditor auditor = new SpreadsheetAuditor(new SpreadsheetEvaluator((DataModel) model));        
        final ICellAddress addr = new CellAddress(model.dataModelId(), A1Address.fromA1Address(address));
        
        //build
        graph = auditor.buildDynamicExecutionGraph(addr);
        dgraph = ExecutionGraph.unwrap((ExecutionGraph) graph);
        rootVertex = (ExecutionGraphVertex) graph.getRootVertex();        
    }
    
    public static void after() throws Exception {
        GraphTestUtil.destroyExternalServices();
    }
    
    public void compare_ExcelFile_SerializedGraph(String dir, String file, String address) {
        // given
        Source expected = Input.fromFile(dir + file + "_" + address + ".graphml").build();

        // when
        StringWriter sw = new StringWriter();
        try { new GraphWithProperertiesMLExporter(address).export(sw, dgraph); }
        catch (TransformerConfigurationException | SAXException e) { fail(e.getMessage()); }
        Source actual = Input.fromString(sw.toString()).build();

        // then
        MatcherAssert.assertThat(actual, CompareMatcher.isSimilarTo(expected));
    }

}
