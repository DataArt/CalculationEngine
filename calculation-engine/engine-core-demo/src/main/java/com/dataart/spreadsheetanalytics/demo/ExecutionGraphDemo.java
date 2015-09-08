package com.dataart.spreadsheetanalytics.demo;

import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;

import org.apache.poi.ss.formula.eval.NumberEval;
import org.apache.poi.ss.formula.eval.StringValueEval;
import org.jgrapht.DirectedGraph;
import org.jgrapht.graph.DefaultEdge;

import com.dataart.spreadsheetanalytics.api.engine.IAuditor;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraph;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex.Type;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetAuditor;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.engine.execgraph.ExecutionGraph;
import com.dataart.spreadsheetanalytics.engine.execgraph.PoiExecutionGraphBuilder;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.CellAddress;
import com.dataart.spreadsheetanalytics.model.CellValue;
import com.dataart.spreadsheetanalytics.model.DataModel;

public class ExecutionGraphDemo {
    
    public static void main(String[] args) throws Exception {
        
        if (args.length != 2) {
            System.err.println("Excel file path and Cell Address, please!");
            return;
        }

        final String path = args[0];
        final String address = args[1];

        final IDataModel model = new DataModel(path);
        
        final IAuditor auditor = new SpreadsheetAuditor(new SpreadsheetEvaluator(model));
        
        ICellAddress addr = new CellAddress(model.dataModelId(), A1Address.fromA1Address(address));
        
        IExecutionGraph graph = auditor.buildDynamicExecutionGraph(addr);
        
        generateVisJsData(ExecutionGraph.unwrap((ExecutionGraph) graph));
        plainprint(ExecutionGraph.unwrap((ExecutionGraph) graph));
    }
    
    public static void plainprint(DirectedGraph<IExecutionGraphVertex, DefaultEdge> graph) {
        for (IExecutionGraphVertex vertex : graph.vertexSet()) {
            System.out.println("---------------------------------");
            System.out.println("Vertex Id: " + vertex.id());
            System.out.println("Name: " + vertex.name());
            System.out.println("Type: " + vertex.type());
            System.out.println("Formula Expression: " + vertex.formula());
            System.out.println("Value: " + CellValue.fromCellTypeHereToString(vertex.value(), true));
            System.out.println("Source Object Id: " + vertex.sourceObjectId());
		}
	}

    private static void generateVisJsData(DirectedGraph<IExecutionGraphVertex, DefaultEdge> graph) {
        try {
            final String dataTemplateFileStr = "src/main/resources/ui/data_template.js";
            final String dataFileStr = "src/main/resources/ui/data.js";

            final String VERTICES_PLACEHOLDER = "<%vertices_placeholder%>";
            final String EDGES_PLACEHOLDER = "<%edges_placeholder%>";
            
            StringBuilder verticesJson = new StringBuilder();
            StringBuilder edgesJson = new StringBuilder();
            
            for (IExecutionGraphVertex vertex : graph.vertexSet()) {
				/* {id: a, label: b, ...}, */

                verticesJson.append("{id: '")
                            .append(vertex.id())
                            .append("', label: '")
                            .append(vertex.name())
                            .append("\\n")
                            .append(vertex.value() == null || vertex.value().toString().length() > 8 ? "..." : vertex.value())
                            .append("', color: '")
                            .append(vertex.type() == Type.OPERATOR || vertex.type() == Type.FUNCTION || vertex.type() == Type.IF ? "#f0ad4e" : "#31b0d5")
                            .append("', title: '")
                                .append("Name: ")
                                .append(vertex.name())
                                .append("<br>")
                                .append("Value: ")
                                .append(CellValue.fromCellTypeHereToString(vertex.value(), true))
                                .append("<br>")
                                .append("Type: ")
                                .append(vertex.type())
                                .append("<br>")
                                .append("Id: ")
                                .append(vertex.id())
                                .append("<br>")
                                .append("Formula Expression: ")
                                .append(vertex.formula())
                                .append("<br>")
                                .append("Source Object Id: ")
                                .append(vertex.sourceObjectId())
                            .append("'},\n");
            }
            verticesJson.setLength(verticesJson.length() > 0 ? verticesJson.length() - 2 : 0);

            for (DefaultEdge edge : graph.edgeSet()) {
                /* {from: id_a, to: id_b}, */
                
                IExecutionGraphVertex from = graph.getEdgeSource(edge);
                IExecutionGraphVertex to = graph.getEdgeTarget(edge);
                
                edgesJson.append("{from: '")
                         .append(from.id())
                         .append("', to: '")
                         .append(to.id())
                         .append("'},\n");
            }

			edgesJson.setLength(edgesJson.length() > 0 ? edgesJson.length() - 2 : 0);

            String content = new String(Files.readAllBytes(Paths.get(dataTemplateFileStr)), StandardCharsets.UTF_8);
            content = content.replace(VERTICES_PLACEHOLDER, verticesJson.toString())
                             .replace(EDGES_PLACEHOLDER, edgesJson.toString());
            
            Files.write(Paths.get(dataFileStr), content.getBytes(StandardCharsets.UTF_8));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    
}
