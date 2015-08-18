package com.dataart.spreadsheetanalytics.demo;

import javax.swing.JFrame;
import javax.swing.JScrollPane;

import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.jgraph.JGraph;
import org.jgrapht.DirectedGraph;
import org.jgrapht.Graph;
import org.jgrapht.ext.JGraphModelAdapter;
import org.jgrapht.graph.DefaultEdge;

import com.dataart.spreadsheetanalytics.api.engine.IAuditor;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress.A1Address;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraph;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetAuditor;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.model.CellAddress;
import com.dataart.spreadsheetanalytics.model.ExecutionGraph;

public class ExecutionGraphDemo {
    
    public static void main(String[] args) throws Exception {
        
        final String path = "src/main/resources/excel/2.xlsx";
        // TODO: this part  should somewhere in dataprovider and Class should be something like IWorkbook or IModel
        final XSSFWorkbook model = new XSSFWorkbook(path);
        
        final IAuditor auditor = new SpreadsheetAuditor(new SpreadsheetEvaluator(model));
        
        ICellAddress addr = new CellAddress().a1Address(new A1Address("A1")).row(0).column(0);
        
        IExecutionGraph graph = auditor.buildDynamicExecutionGraph(model, addr);
        
        plainprint(ExecutionGraph.unwrap((ExecutionGraph) graph));
        visualize(ExecutionGraph.unwrap((ExecutionGraph) graph));
    }

    public static void visualize(Graph graphT) {

        JGraph graph = new JGraph(new JGraphModelAdapter(graphT));

        // Show in Frame
        JFrame frame = new JFrame();
        frame.getContentPane().add(new JScrollPane(graph));
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.pack();
        frame.setVisible(true);
    }
    
    public static void plainprint(DirectedGraph<IExecutionGraphVertex, DefaultEdge> graph) {
        for (IExecutionGraphVertex vertex : graph.vertexSet()) {
            System.out.println("---------------------------------");
            System.out.println("Vertex Id: " + vertex.id());
            System.out.println("Name: " + vertex.name());
            System.out.println("Type: " + vertex.type());
            System.out.println("Formula Expression: " + vertex.formula());
            System.out.println("Value: " + vertex.value());
            System.out.println("Source Object Id: " + vertex.sourceObjectId());
        }
    }
    
}
