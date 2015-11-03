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

import static com.dataart.spreadsheetanalytics.test.util.GraphTestUtil.STANDARD_GRAPHML_DIR;
import static com.dataart.spreadsheetanalytics.test.util.GraphTestUtil.ALL_CELLS_GRAPHML_DIR;
import static org.junit.Assert.fail;

import java.io.StringWriter;
import java.util.HashMap;
import java.util.Map;

import org.w3c.dom.Document;
import org.w3c.dom.NamedNodeMap;

import javax.xml.transform.Source;
import javax.xml.transform.TransformerConfigurationException;

import org.jgraph.graph.DefaultEdge;
import org.jgrapht.DirectedGraph;
import org.jgrapht.ext.GraphMLExporter;
import org.junit.Assert;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;
import org.xmlunit.builder.Input;
import org.xmlunit.diff.ComparisonResult;
import org.xmlunit.diff.DOMDifferenceEngine;
import org.xmlunit.diff.DifferenceEngine;
import org.xmlunit.util.Convert;

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
    
    public void assert_ExcelFile_SerializedGraph(String file, String address) {
        //given
        String expectedGraphML = file + "_" + address + ".graphml";
        Source expected = Input.fromFile(STANDARD_GRAPHML_DIR + expectedGraphML).build();
        
        GraphMLExporter exporter = new GraphWithProperertiesMLExporter(address);
        StringWriter sw = new StringWriter();
        
        //when
        try { exporter.export(sw, dgraph); } 
        catch (TransformerConfigurationException | SAXException e) { fail(e.getMessage()); }
        Source actual = Input.fromString(sw.toString()).build();
        
        //then
        DifferenceEngine de = new DOMDifferenceEngine();
        de.addDifferenceListener((comparision, outcome) -> {
            if (outcome == ComparisonResult.DIFFERENT) {
                boolean ok = false;
                //add exceptions here if needed
                
                //skip sourceObjectId, since it is not yet fully implemented
                try {
                    String key = comparision.getControlDetails().getTarget().getParentNode().getAttributes().getNamedItem("key").getNodeValue();
                    if ("sourceObjectId".equals(key)) { ok = true; }
                } catch (Exception e) { /* just to avoid many if statements */}

                if (!ok) { fail(comparision.toString()); }
            }
        });

        de.compare(expected, actual);
    }

    public void assert_ExcelFile_SerializedGraph_All(String file, String address) {
        // given
        String expectedGraphML = file + "_" + address + ".graphml";
        Source expected = Input.fromFile(ALL_CELLS_GRAPHML_DIR + expectedGraphML).build();

        GraphMLExporter exporter = new GraphWithProperertiesMLExporter(address);
        StringWriter sw = new StringWriter();

        // when
        try {
            exporter.export(sw, dgraph);
        } catch (TransformerConfigurationException | SAXException e) {
            fail(e.getMessage());
        }
        Source actual = Input.fromString(sw.toString()).build();

        Document expectedDocument = Convert.toDocument(expected);
        Document actualDocument = Convert.toDocument(actual);

        testGraphsEqual(expectedDocument, actualDocument);

    }

    protected static void testGraphsEqual(Document document1, Document document2) {
        Map<TestItem, Integer> testItems1 = getTestItems(document1);
        Map<TestItem, Integer> testItems2 = getTestItems(document2);
        if (testItems1.size() != testItems2.size()) {
            Assert.assertEquals("Graph nodes number is not equal", testItems1.size(), testItems2.size());
        }
        for (TestItem key : testItems1.keySet()) {
            if (testItems2.containsKey(key)) {
                Integer value1 = testItems1.get(key);
                Integer value2 = testItems2.get(key);
                if (value1.intValue() != value2.intValue()) {
                    Assert.fail(key.toString() + " item is observed " + value1 + " times but expected " + value2 + " times");
                }
            } else {
                Assert.fail(key.toString() + " expected to be present in the xml tree");
            }
        }
    }

    protected static Map<TestItem, Integer> getTestItems(Document document) {
        Map<TestItem, Integer> result = new HashMap<>();
        Node graphRootNode = getRootGraphNode(document);
        NodeList nodeList = graphRootNode.getChildNodes();
        for (int i = 0; i < nodeList.getLength(); i++) {
            Node node = nodeList.item(i);
            String nodeName = node.getNodeName();
            if (TestNode.NODE_NAME.equals(nodeName)) {
                TestNode addNode = new TestNode(node);
                if (result.containsKey(addNode)) {
                    result.put(addNode, result.get(addNode) + 1);
                } else {
                    result.put(addNode, 1);
                }
            } else if (TestEdge.NODE_NAME.equals(nodeName)) {
                TestEdge addEdge = new TestEdge(node);
                if (result.containsKey(addEdge)) {
                    result.put(addEdge, result.get(addEdge) + 1);
                } else {
                    result.put(addEdge, 1);
                }
            }
        }
        return result;
    }

    protected static Node getRootGraphNode(Document document) {
        return document.getChildNodes().item(0).getChildNodes().item(3);
    }

    interface TestItem {
    }

    static class TestNode implements TestItem {

        static final String NODE_NAME = "node";

        private String name;
        private String value;

        public TestNode(Node node) {
            NodeList nodeList = node.getChildNodes();
            for (int i = 0; i < nodeList.getLength(); i++) {
                Node dasNode = nodeList.item(i);
                String nodeName = dasNode.getNodeName();
                if ("data".equals(nodeName)) {
                    NamedNodeMap nodeMap = dasNode.getAttributes();
                    Node key = nodeMap.getNamedItem("key");
                    if ("name".equals(key.getNodeValue())) {
                        name = nodeList.item(i).getTextContent();
                    }
                    if ("value".equals(key.getNodeValue())) {
                        value = nodeList.item(i).getTextContent();
                    }
                }
            }
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getValue() {
            return value;
        }

        public void setValue(String value) {
            this.value = value;
        }

        @Override
        public int hashCode() {
            final int prime = 31;
            int result = 1;
            result = prime * result + ((name == null) ? 0 : name.hashCode());
            result = prime * result + ((value == null) ? 0 : value.hashCode());
            return result;
        }

        @Override
        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj == null) {
                return false;
            }
            if (getClass() != obj.getClass()) {
                return false;
            }
            TestNode other = (TestNode) obj;
            if (name == null) {
                if (other.name != null) {
                    return false;
                }
            } else if (!name.equals(other.name)) {
                return false;
            }
            if (value == null) {
                if (other.value != null) {
                    return false;
                }
            } else if (!value.equals(other.value)) {
                return false;
            }
            return true;
        }

        @Override
        public String toString() {
            return "TestNode [name=" + name + ", value=" + value + "]";
        }

    }

    static class TestEdge implements TestItem {

        static final String NODE_NAME = "edge";

        private String source;
        private String target;

        public TestEdge(Node node) {
            source = node.getAttributes().item(0).getNodeValue();
            target = node.getAttributes().item(1).getNodeValue();
        }

        public String getSource() {
            return source;
        }

        public void setSource(String source) {
            this.source = source;
        }

        public String getTarget() {
            return target;
        }

        public void setTarget(String target) {
            this.target = target;
        }

        @Override
        public int hashCode() {
            final int prime = 31;
            int result = 1;
            result = prime * result + ((source == null) ? 0 : source.hashCode());
            result = prime * result + ((target == null) ? 0 : target.hashCode());
            return result;
        }

        @Override
        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj == null) {
                return false;
            }
            if (getClass() != obj.getClass()) {
                return false;
            }
            TestEdge other = (TestEdge) obj;
            if (source == null) {
                if (other.source != null) {
                    return false;
                }
            } else if (!source.equals(other.source)) {
                return false;
            }
            if (target == null) {
                if (other.target != null) {
                    return false;
                }
            } else if (!target.equals(other.target)) {
                return false;
            }
            return true;
        }

        @Override
        public String toString() {
            return "[source=" + source + ", target=" + target + "]";
        }

    }

}
