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
package com.dataart.spreadsheetanalytics.test.util;

import java.io.PrintWriter;
import java.io.Writer;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import javax.xml.transform.OutputKeys;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerConfigurationException;
import javax.xml.transform.sax.SAXTransformerFactory;
import javax.xml.transform.sax.TransformerHandler;
import javax.xml.transform.stream.StreamResult;

import org.jgrapht.DirectedGraph;
import org.jgrapht.Graph;
import org.jgrapht.ext.GraphMLExporter;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.AttributesImpl;

import com.dataart.spreadsheetanalytics.engine.execgraph.ExecutionGraphEdge;
import com.dataart.spreadsheetanalytics.engine.execgraph.ExecutionGraphVertex;

/**
 * Even though this class 'extends' GraphMLExporter its code looks different in 'export' method.
 * This is because we should follow the standards of xml file, but need to add a lot of custom properties
 * in vertex element. Hierarchy used only to show the initila point. 
 */
public class GraphWithProperertiesMLExporter extends GraphMLExporter {
    
    final String id;
    
    public GraphWithProperertiesMLExporter(String id) { this.id = id; }
    
    @Override
    public void export(Writer writer, Graph graph) throws SAXException, TransformerConfigurationException {

        DirectedGraph<ExecutionGraphVertex, ExecutionGraphEdge> g = (DirectedGraph<ExecutionGraphVertex, ExecutionGraphEdge>) graph;
        
        // Prepare an XML file to receive the GraphML data
        PrintWriter out = new PrintWriter(writer);
        StreamResult streamResult = new StreamResult(out);
        SAXTransformerFactory factory = (SAXTransformerFactory) SAXTransformerFactory.newInstance();
        TransformerHandler handler = factory.newTransformerHandler();
        Transformer serializer = handler.getTransformer();
        serializer.setOutputProperty(OutputKeys.ENCODING, "UTF-8");
        serializer.setOutputProperty(OutputKeys.INDENT, "yes");
        handler.setResult(streamResult);
        handler.startDocument();
        AttributesImpl attr = new AttributesImpl();

        // <graphml>
        handler.startPrefixMapping("xsi", "http://www.w3.org/2001/XMLSchema-instance");

        attr.addAttribute("", "", "xsi:schemaLocation", "CDATA", "http://graphml.graphdrawing.org/xmlns http://graphml.graphdrawing.org/xmlns/1.0/graphml.xsd");
        handler.startElement("http://graphml.graphdrawing.org/xmlns", "", "graphml", attr);
        handler.endPrefixMapping("xsi");

        // <key> for vertex label attribute
        attr.clear();
        attr.addAttribute("", "", "id", "CDATA", "vertex_label");
        attr.addAttribute("", "", "for", "CDATA", "node");
        attr.addAttribute("", "", "attr.name", "CDATA", "Vertex Label");
        attr.addAttribute("", "", "attr.type", "CDATA", "string");
        handler.startElement("", "", "key", attr);
        handler.endElement("", "", "key");

        // <graph>
        attr.clear();
        attr.addAttribute("", "", "edgedefault", "CDATA", "directed");
        attr.addAttribute("", "", "id", "CDATA", this.id);
        handler.startElement("", "", "graph", attr);

        //sort vertices for xml file
        List<ExecutionGraphVertex> sortedVertices = new ArrayList<>(g.vertexSet());
        Collections.sort(sortedVertices, (a, b) -> a.name().compareTo(b.name()));
        
        // Add all the vertices as <node> elements...
        for (ExecutionGraphVertex v : sortedVertices) {
            // <node>
            String value = v.value() == null ? "" : v.value().toString(); 
            
            String graphmlId = v.name() + "_" + value + "_" + v.type();
            attr.clear();
            attr.addAttribute("", "", "id", "CDATA", graphmlId);
            handler.startElement("", "", "node", attr);

            // name
            attr.clear();
            attr.addAttribute("", "", "key", "CDATA", "name");
            handler.startElement("", "", "data", attr);
            handler.characters(v.name().toCharArray(), 0, v.name().length()); // Content for <data>
            handler.endElement("", "", "data");
            
            // value
            attr.clear();
            attr.addAttribute("", "", "key", "CDATA", "value");
            handler.startElement("", "", "data", attr);
            /*TODO: remove static call*/ handler.characters(value.toCharArray(), 0, value.length()); // Content for <data>
            handler.endElement("", "", "data");
            
            // type
            attr.clear();
            attr.addAttribute("", "", "key", "CDATA", "type");
            handler.startElement("", "", "data", attr);
            handler.characters(v.type().toString().toCharArray(), 0, v.type().toString().length()); // Content for <data>
            handler.endElement("", "", "data");
            
            // formula
            attr.clear();
            attr.addAttribute("", "", "key", "CDATA", "formula");
            handler.startElement("", "", "data", attr);
            handler.characters((v.formula() == null ? "null" : v.formula()).toString().toCharArray(), 0, (v.formula() == null ? "null" : v.formula()).toString().length()); // Content for <data>
            handler.endElement("", "", "data");

            handler.endElement("", "", "node");
        }

        //sort edges for xml
        List<ExecutionGraphEdge> sortedEdges = new ArrayList<>(g.edgeSet());
        Collections.sort(sortedEdges, (a, b) -> 
                                                new String(g.getEdgeSource(a).name() + "_" + g.getEdgeSource(a).value().toString() + "_" + g.getEdgeSource(a).type())
                                     .compareTo(new String(g.getEdgeSource(b).name() + "_" + g.getEdgeSource(b).value().toString() + "_" + g.getEdgeSource(b).type())));

        // Add all the edges as <edge> elements...
        for (ExecutionGraphEdge e : sortedEdges) {
            // <edge>
            
            String graphmlId_1 = g.getEdgeSource(e).name() + "_" + g.getEdgeSource(e).value().toString() + "_" + g.getEdgeSource(e).type();
            String graphmlId_2 = g.getEdgeTarget(e).name() + "_" + g.getEdgeTarget(e).value().toString() + "_" + g.getEdgeTarget(e).type();
            
            attr.clear();
            attr.addAttribute("", "", "source", "CDATA", graphmlId_1);
            attr.addAttribute("", "", "target", "CDATA", graphmlId_2);
            handler.startElement("", "", "edge", attr);

            handler.endElement("", "", "edge");
        }

        handler.endElement("", "", "graph");
        handler.endElement("", "", "graphml");
        handler.endDocument();

        out.flush();
    }
}