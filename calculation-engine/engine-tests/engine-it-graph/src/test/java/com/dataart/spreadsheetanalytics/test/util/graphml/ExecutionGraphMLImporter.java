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

import java.io.File;
import java.util.LinkedList;
import java.util.List;

import javax.xml.parsers.SAXParserFactory;

import org.apache.poi.common.fork.IExecutionGraphVertex.Type;
import org.xml.sax.Attributes;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;

public class ExecutionGraphMLImporter extends DefaultHandler {

    private final ExecutionGraphML graphML;
    
    private ExecutionGraphVertexML prev;
    private StringBuilder content;
    private String key;
    
    private ExecutionGraphMLImporter() {
        this.graphML = new ExecutionGraphML();
    }
    
    public static ExecutionGraphML _import(File xml) throws Exception {
        ExecutionGraphMLImporter i = new ExecutionGraphMLImporter();
        SAXParserFactory.newInstance().newSAXParser().parse(xml, i);
        createIndexes(i.graphML);
        return i.graphML;
    }

    @Override
    public void startElement(String uri, String localName, String elementName, Attributes attributes) throws SAXException {

        if (elementName.equalsIgnoreCase("node")) {

            ExecutionGraphVertexML vertexML = new ExecutionGraphVertexML(null);
            vertexML.properties().setVertexId(Integer.valueOf(attributes.getValue("id")));
            
            this.graphML.getVerticesML().add(vertexML);
            
            this.prev = vertexML;
        }

        if (elementName.equalsIgnoreCase("edge")) {

            ExecutionGraphEdgeML edgeML = new ExecutionGraphEdgeML();
            edgeML.sourceId = Integer.valueOf(attributes.getValue("source"));
            edgeML.targetId = Integer.valueOf(attributes.getValue("target"));

            this.graphML.getEdgesML().add(edgeML);
        }

        if (elementName.equalsIgnoreCase("data")) {
            if (this.prev == null) { return; }
            
            this.key = attributes.getValue("key");
            this.content = new StringBuilder();
        }
    }

    @Override
    public void endElement(String uri, String localName, String elementName) throws SAXException {
        
        if (elementName.equalsIgnoreCase("data")) {
            if (this.key == null) { return; }

            switch (key) {
                case "name": { this.prev.properties().setName(content.toString()); break; }
                case "value": { this.prev.properties().setValue(content.toString()); break; } 
                case "type": { this.prev.properties().setType(Type.valueOf(Type.class, content.toString())); break; }
                case "formula": { this.prev.formulaToString = content.toString(); break; }
            }

            this.content = null;
            this.key = null;
        }
    }
    
    @Override
    public void characters(char[] ch, int start, int length) throws SAXException {
        if (content != null) { content.append(ch, start, length); }
    }

    private static void createIndexes(ExecutionGraphML graphML) {
        for (ExecutionGraphVertexML v : graphML.getVerticesML()) {
            List<ExecutionGraphVertexML> set = graphML.verticesIndexName.get(v.getName()) != null ? graphML.verticesIndexName.get(v.getName()) : new LinkedList<>();
            set.add(v);
            graphML.verticesIndexName.put(v.getName(), set);
            graphML.verticesIndexId.put(v.getId(), v);
        }
    }

}
