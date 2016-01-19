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
package com.dataart.spreadsheetanalytics.engine.graph;

import java.io.Serializable;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Set;

import com.dataart.spreadsheetanalytics.api.model.IExecutionGraph;
import com.dataart.spreadsheetanalytics.engine.CalculationEngineException;

/**
 * {@link IExecutionGraph} implementation based on {@link ExecutionGraphVertex#id} and {@link HashMap}s.
 */
public class ExecutionGraph implements IExecutionGraph<ExecutionGraphVertex, ExecutionGraphEdge> {

    protected final Map<Integer, ExecutionGraphVertex> vertices = new HashMap<>();
    protected final Map<EdgeKey, ExecutionGraphEdge> edges = new HashMap<>();
    protected final Map<Integer, Set<ExecutionGraphEdge>> incoming = new HashMap<>();
    protected final Map<Integer, Set<ExecutionGraphEdge>> outgoing = new HashMap<>();

    @Override
    public ExecutionGraphVertex getRootVertex() {
        List<ExecutionGraphVertex> possible = new LinkedList<>();
        for (ExecutionGraphVertex vertex : getVertices()) {
            if (getOutgoingEdgesOf(vertex).isEmpty()) { possible.add(vertex); }
        }
        if (possible.isEmpty()) { throw new CalculationEngineException("No graph root found"); }
        if (possible.size() > 1) { throw new CalculationEngineException(String.format("Many graph roots found (%s)", possible.size())); }
        
        return possible.get(0);
    }

    @Override
    public Collection<ExecutionGraphVertex> getVertices() {
        return this.vertices.values();
    }

    @Override
    public Collection<ExecutionGraphEdge> getEdges() {
        return this.edges.values();
    }

    @Override
    public ExecutionGraphVertex getEdgeSource(ExecutionGraphEdge edge) {
        return edge.source;
    }

    @Override
    public ExecutionGraphVertex getEdgeTarget(ExecutionGraphEdge edge) {
        return edge.target;
    }

    @Override
    public void addVertex(ExecutionGraphVertex vertex) {
        if (vertex == null) { return; }
        
        this.vertices.put(vertex.id, vertex);
    }

    @Override
    public void addEdge(ExecutionGraphVertex from, ExecutionGraphVertex to) {
        if (from == null || to == null) { return; }
        if (!this.vertices.containsKey(from.id) || !this.vertices.containsKey(from.id)) { return; }
        
        ExecutionGraphEdge edge = new ExecutionGraphEdge(from, to);
        this.edges.put(edge.key, edge);
        
        Set<ExecutionGraphEdge> outgoing = this.outgoing.containsKey(from.id) ? this.outgoing.get(from.id) : new HashSet<>();
        outgoing.add(edge);
        this.outgoing.put(from.id, outgoing);
        
        Set<ExecutionGraphEdge> incoming = this.incoming.containsKey(to.id) ? this.incoming.get(to.id) : new HashSet<>();
        incoming.add(edge);
        this.incoming.put(to.id, incoming);
    }

    @Override
    public void removeVertex(ExecutionGraphVertex vertex) {
        if (vertex == null) { return; }

        this.vertices.remove(vertex.id);

        Set<ExecutionGraphEdge> outgoing = this.outgoing.get(vertex.id);
        if (outgoing != null) {
            outgoing.stream().forEach(e -> {
                this.edges.remove(e.key);
                cleanOutgoingEdgesFrom(e, vertex);
            });
        }
        this.outgoing.remove(vertex.id);

        Set<ExecutionGraphEdge> incoming = this.incoming.get(vertex.id);
        if (incoming != null) {
            incoming.stream().forEach(e -> {
                this.edges.remove(e.key);
                cleanIncomingEdgesFrom(e, vertex);
            });
        }
        this.incoming.remove(vertex.id);
    }

    protected void cleanIncomingEdgesFrom(ExecutionGraphEdge edge, ExecutionGraphVertex vertex) {
        ExecutionGraphVertex parent = edge.getSource();
        Set<ExecutionGraphEdge> outgoing = this.outgoing.get(parent.id);
        if (outgoing != null) {
            Set<ExecutionGraphEdge> chosenEdges = new HashSet<>();
            for (ExecutionGraphEdge outEdge : outgoing) { if (outEdge.getTarget() == vertex) { chosenEdges.add(outEdge); } }
            outgoing.removeAll(chosenEdges);
            this.outgoing.put(parent.id, outgoing);
        }
    }

    protected void cleanOutgoingEdgesFrom(ExecutionGraphEdge edge, ExecutionGraphVertex vertex) {
        ExecutionGraphVertex parent = edge.getTarget();
        Set<ExecutionGraphEdge> incoming = this.incoming.get(parent.id);
        if (incoming != null) {
            Set<ExecutionGraphEdge> chosenEdges = new HashSet<>();
            incoming.stream().forEach(e -> {if (e.getTarget() == vertex) { chosenEdges.add(e);}});
            for (ExecutionGraphEdge outEdge : incoming) { if (outEdge.getTarget() == vertex) { chosenEdges.add(outEdge); } }
            incoming.removeAll(chosenEdges);
            this.incoming.put(parent.id, incoming);
        }
    }

    @Override
    public Collection<ExecutionGraphEdge> getIncomingEdgesOf(ExecutionGraphVertex vertex) {
        return this.incoming.containsKey(vertex.id) ? this.incoming.get(vertex.id) : Collections.emptySet();
    }

    @Override
    public Collection<ExecutionGraphEdge> getOutgoingEdgesOf(ExecutionGraphVertex vertex) {
        return this.outgoing.containsKey(vertex.id) ? this.outgoing.get(vertex.id) : Collections.emptySet();
    }

    @Override
    public boolean containsVertex(ExecutionGraphVertex vertex) {
        return vertex != null && this.vertices.containsKey(vertex.id);
    }
    
    protected static class EdgeKey implements Serializable {
        /** */
        private static final long serialVersionUID = -3478352350059446804L;
        
        final int source;
        final int target;
        
        public EdgeKey(int source, int target) {
            this.source = source;
            this.target = target;
        }
        
        @Override
        public int hashCode() {
            int prime = 31;
            int result = 1;
            result = prime * result + this.source;
            result = prime * result + this.target;
            return result;
        }
        @Override
        public boolean equals(Object obj) {
            if (this == obj) { return true; }
            if (obj == null) { return false; }
            if (getClass() != obj.getClass()) { return false; }
            EdgeKey other = (EdgeKey) obj;
            if (this.source != other.source) { return false; }
            if (this.target != other.target) { return false; }
            return true;
        }
    }

}
