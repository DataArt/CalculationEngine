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
package com.dataart.spreadsheetanalytics.test.util.graphml;

import java.io.PrintWriter;
import java.io.Writer;

import javax.xml.transform.OutputKeys;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerConfigurationException;
import javax.xml.transform.sax.SAXTransformerFactory;
import javax.xml.transform.sax.TransformerHandler;
import javax.xml.transform.stream.StreamResult;

import org.xml.sax.SAXException;
import org.xml.sax.helpers.AttributesImpl;

import com.dataart.spreadsheetanalytics.api.model.IExecutionGraph;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphEdge;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex;
import com.dataart.spreadsheetanalytics.test.util.GraphTestUtil;

/**
 * Even though this class 'extends' GraphMLExporter (from jgrapht) its code looks different in 'export' method.
 * This is because we should follow the standards of xml file, but need to add a lot of custom properties
 * in vertex element. Hierarchy used only to show the initila point. 
 */
public class ExecutionGraphMLExporter {
    
    final String id;
    
    public ExecutionGraphMLExporter(String id) { this.id = id; }
    
    public void export(Writer writer, IExecutionGraph<IExecutionGraphVertex, IExecutionGraphEdge> graph) throws SAXException, TransformerConfigurationException {

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

        // Add all the vertices as <node> elements...
        for (IExecutionGraphVertex v : graph.getVertices()) {
            // <node>
            String value = v.getValue() == null ? "" : v.getValue().toString(); 
            
            attr.clear();
            attr.addAttribute("", "", "id", "CDATA", Integer.toString(v.getId()));
            handler.startElement("", "", "node", attr);

            // name
            attr.clear();
            attr.addAttribute("", "", "key", "CDATA", "name");
            handler.startElement("", "", "data", attr);
            handler.characters(v.getName().toCharArray(), 0, v.getName().length()); // Content for <data>
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
            handler.characters(v.getType().toString().toCharArray(), 0, v.getType().toString().length()); // Content for <data>
            handler.endElement("", "", "data");
            
            // formula
            attr.clear();
            attr.addAttribute("", "", "key", "CDATA", "formula");
            handler.startElement("", "", "data", attr);
            handler.characters(GraphTestUtil.formulaToString(v.getFormula()).toCharArray(), 0, GraphTestUtil.formulaToString(v.getFormula()).length()); // Content for <data>
            handler.endElement("", "", "data");

            handler.endElement("", "", "node");
        }

        // Add all the edges as <edge> elements...
        for (IExecutionGraphEdge e : graph.getEdges()) {
            // <edge>
            
            attr.clear();
            attr.addAttribute("", "", "source", "CDATA", Integer.toString(graph.getEdgeSource(e).getId()));
            attr.addAttribute("", "", "target", "CDATA", Integer.toString(graph.getEdgeTarget(e).getId()));
            handler.startElement("", "", "edge", attr);

            handler.endElement("", "", "edge");
        }

        handler.endElement("", "", "graph");
        handler.endElement("", "", "graphml");
        handler.endDocument();

        out.flush();
    }
}