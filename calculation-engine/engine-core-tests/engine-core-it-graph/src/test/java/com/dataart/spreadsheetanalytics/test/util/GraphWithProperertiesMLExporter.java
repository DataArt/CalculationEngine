package com.dataart.spreadsheetanalytics.test.util;

import java.io.PrintWriter;
import java.io.Writer;

import javax.xml.transform.OutputKeys;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerConfigurationException;
import javax.xml.transform.sax.SAXTransformerFactory;
import javax.xml.transform.sax.TransformerHandler;
import javax.xml.transform.stream.StreamResult;

import org.jgrapht.DirectedGraph;
import org.jgrapht.Graph;
import org.jgrapht.ext.GraphMLExporter;
import org.jgrapht.graph.DefaultEdge;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.AttributesImpl;

import com.dataart.spreadsheetanalytics.engine.execgraph.ExecutionGraphVertex;
import com.dataart.spreadsheetanalytics.model.CellValue;

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

        DirectedGraph<ExecutionGraphVertex, DefaultEdge> g = (DirectedGraph<ExecutionGraphVertex, DefaultEdge>) graph;
        
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
        for (ExecutionGraphVertex v : g.vertexSet()) {
            // <node>
            attr.clear();
            attr.addAttribute("", "", "id", "CDATA", v.id().toString());
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
            /*TODO: remove static call*/ handler.characters(CellValue.fromCellValueToString(v.value()).toCharArray(), 0, CellValue.fromCellValueToString(v.value()).length()); // Content for <data>
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
            
            // sourceObjectId
            attr.clear();
            attr.addAttribute("", "", "key", "CDATA", "sourceObjectId");
            handler.startElement("", "", "data", attr);
            handler.characters((v.sourceObjectId() == null ? "null" : v.sourceObjectId()).toString().toCharArray(), 0, (v.sourceObjectId() == null ? "null" : v.sourceObjectId()).toString().length()); // Content for <data>
            handler.endElement("", "", "data");
            
            handler.endElement("", "", "node");
        }

        // Add all the edges as <edge> elements...
        for (DefaultEdge e : g.edgeSet()) {
            // <edge>
            attr.clear();
            attr.addAttribute("", "", "source", "CDATA", g.getEdgeSource(e).id().toString());
            attr.addAttribute("", "", "target", "CDATA", g.getEdgeTarget(e).id().toString());
            handler.startElement("", "", "edge", attr);

            handler.endElement("", "", "edge");
        }

        handler.endElement("", "", "graph");
        handler.endElement("", "", "graphml");
        handler.endDocument();

        out.flush();
    }
}