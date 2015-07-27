package com.dataart.spreadsheetanalytics.main;

import org.jgrapht.graph.DefaultDirectedGraph;
import org.jgrapht.graph.DefaultEdge;
import org.jgrapht.traverse.TopologicalOrderIterator;

public final class CompleteGraphDemo {

    /**
     Generate two cases, one with cycles, this is depencencies and one
     without.

     @param args Ignored.
     */
    public static void main(String[] args) {

        DefaultDirectedGraph<Integer, DefaultEdge> gr = new DefaultDirectedGraph<>(DefaultEdge.class);

        // Add vertices, e.g. equations.
        gr.addVertex(1);
        gr.addVertex(3);
        gr.addVertex(5);
        gr.addVertex(0);
        gr.addVertex(11);

        gr.addEdge(1, 3);
        gr.addEdge(0, 1);
        gr.addEdge(0, 5);
        
        gr.addEdge(11, 1);
        gr.addEdge(11, 3);
        gr.addEdge(11, 0);
        gr.addEdge(11, 5);

        TopologicalOrderIterator<Integer, DefaultEdge> orderIterator = new TopologicalOrderIterator<>(gr);
        while (orderIterator.hasNext()) {
            System.out.println(orderIterator.next());
        }
    }
}
