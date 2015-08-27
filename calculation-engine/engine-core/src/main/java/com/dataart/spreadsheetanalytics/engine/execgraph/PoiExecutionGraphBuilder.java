package com.dataart.spreadsheetanalytics.engine.execgraph;

import static com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex.Type.CELL_WITH_FORMULA;
import static com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex.Type.CELL_WITH_REFERENCE;
import static com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex.Type.CELL_WITH_VALUE;
import static com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex.Type.FUNCTION;
import static com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex.Type.OPERATOR;
import static com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex.Type.RANGE;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.FORMULA_PTG_STRING;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.FORMULA_STRING;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.PTG_STRING;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.FORMULA_PTG;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.FORMULA_VALUES;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.NAME;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.TYPE;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.VALUE;

import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;

import org.apache.poi.common.execgraph.IExecutionGraphBuilder;
import org.apache.poi.common.execgraph.IExecutionGraphVertex;
import org.apache.poi.common.execgraph.IExecutionGraphVertexProperty;
import org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName;
import org.apache.poi.ss.formula.eval.ValueEval;
import org.apache.poi.ss.formula.ptg.AbstractFunctionPtg;
import org.apache.poi.ss.formula.ptg.AddPtg;
import org.apache.poi.ss.formula.ptg.AreaPtg;
import org.apache.poi.ss.formula.ptg.DividePtg;
import org.apache.poi.ss.formula.ptg.EqualPtg;
import org.apache.poi.ss.formula.ptg.MultiplyPtg;
import org.apache.poi.ss.formula.ptg.Ptg;
import org.apache.poi.ss.formula.ptg.RefPtg;
import org.apache.poi.ss.formula.ptg.ScalarConstantPtg;
import org.apache.poi.ss.formula.ptg.SubtractPtg;
import org.apache.poi.ss.formula.ptg.ValueOperatorPtg;
import org.jgrapht.DirectedGraph;
import org.jgrapht.graph.DefaultDirectedGraph;
import org.jgrapht.graph.DefaultEdge;

import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex.Type;
import com.dataart.spreadsheetanalytics.model.CellAddress;

/**
 * TODO: write about internal representation, not thread safe, one instance per calculation, etc.
 * @author rroschin
 *
 */
public class PoiExecutionGraphBuilder implements IExecutionGraphBuilder {

    protected final DirectedGraph<IExecutionGraphVertex, DefaultEdge> dgraph;

    protected Map<ValueEval, IExecutionGraphVertex> valueToVertex;
    protected Map<String, Set<IExecutionGraphVertex>> addressToVertices;

    public PoiExecutionGraphBuilder() {
        this.dgraph = new DefaultDirectedGraph<>(DefaultEdge.class);

        this.valueToVertex = new HashMap<>();
        this.addressToVertices = new HashMap<>();
    }

    public ExecutionGraph get() {
        return ExecutionGraph.wrap(dgraph);
    }

    /**
     * This method should be used when creating a new vertex from a cell, so vertex name is a cell's address.
     * New Vertex will be created any time this method is invoked.
     * New vertex will be stored in address-to-set-of-vertices map.
     */
    @Override
    public IExecutionGraphVertex createVertex(String address) {
        //create new vertex object
        ExecutionGraphVertex v = new ExecutionGraphVertex(address);

        //add vertex to actual graph
        dgraph.addVertex(v);

        //put new vertex to set of vertices with the same address, since they all must have the same set of properties and values
        Set<IExecutionGraphVertex> vs = addressToVertices.containsKey(address) ? addressToVertices.get(address) : new HashSet<>();
        vs.add(v);
        addressToVertices.put(address, vs);

        return v;
    }

    @Override
    public IExecutionGraphVertex createVertex(Ptg ptg) {
        boolean isCell = ptg instanceof RefPtg;
        String name = ptgToString(ptg);

        if (isCell) { //cell
            return createVertex(name);
        } else { //operation
            ExecutionGraphVertex v = new ExecutionGraphVertex(name);
            dgraph.addVertex(v);
            return v;
        }
    }

    @Override
    public void connect(IExecutionGraphVertex from, IExecutionGraphVertex to) {
        dgraph.addEdge(from, to);
    }

    @Override
    public void removeVertex(IExecutionGraphVertex vertex) {
        if (vertex == null) { return; }
        dgraph.removeVertex(vertex);
    }

    @Override
    public void putVertexToCache(ValueEval value, IExecutionGraphVertex vertex) {
        if (value == null) { throw new IllegalArgumentException("ValueEval to assosiate vertex with cannot be null."); }

        valueToVertex.put(value, vertex);
    }

    @Override
    public IExecutionGraphVertex getVertexFromCache(ValueEval value) {
        if (value == null) { throw new IllegalArgumentException("ValueEval to assosiate vertex with cannot be null."); }

        return valueToVertex.get(value);
    }

    @Override
    public void putVertexToCache(String address, IExecutionGraphVertex vertex) {
        if (!addressToVertices.containsKey(address)) addressToVertices.put(address, new HashSet<>());
        addressToVertices.get(address).add(vertex);
    }

    @Override
    public Set<IExecutionGraphVertex> getVerticesFromCache(String address) {
        return addressToVertices.get(address);
    }

    @Override
    public void putVertexToCache(int row, int column, IExecutionGraphVertex vertex) {
        putVertexToCache(CellAddress.toA1Address(row, column), vertex);
    }

    @Override
    public Set<IExecutionGraphVertex> getVerticesFromCache(int row, int column) {
        return getVerticesFromCache(CellAddress.toA1Address(row, column));
    }

    @Override
    public IExecutionGraphVertexProperty getVertexProperty(IExecutionGraphVertex vertex, PropertyName property) {
        return ((ExecutionGraphVertex) vertex).property(property);
    }

    /**
     * Do anything you want here. After graph is completed and we are out of POI context
     * you can add\remove\etc any information you want.
     */
    public void runPostProcessing() {
        DirectedGraph<IExecutionGraphVertex, DefaultEdge> graph = dgraph;

        //make identical vertices have the same set of properties
        //two vertices are identical if they have the same address value. 
        //Id for every vertex is unique, so this is not a flag here
        for (String address : addressToVertices.keySet()) {
            Set<IExecutionGraphVertex> vs = addressToVertices.get(address);
            
            //the logic below is very fragile and based on some empirical model and may not work for other type of graphs
            if (vs != null && vs.size() > 1) {
                IExecutionGraphVertex standard = null;
                
                for (IExecutionGraphVertex ivertex : vs) {
                    ExecutionGraphVertex vertex = (ExecutionGraphVertex) ivertex;
                    Type type = (Type) vertex.property(TYPE).get();
                    if (CELL_WITH_FORMULA == type) {
                        standard = vertex;
                        break;
                    }
                }
                
                if (standard != null) {
                    copyProperties(standard, vs);
                }
            }
            
        }
        
        //copy or link subgraphs to identical vertices
        //and
        //modify Formula field with additional values
        Map<String, AtomicInteger> adressToCount = new HashMap<>();
        for (IExecutionGraphVertex ivertex : graph.vertexSet()) {

            ExecutionGraphVertex vertex = (ExecutionGraphVertex) ivertex;
            
            //restore/add subgraphs to identical vertices
            Type type = (Type) vertex.property(TYPE).get();
            if (isCellType(type)) {
                String address = (String) vertex.property(NAME).get();

                adressToCount.putIfAbsent(address, new AtomicInteger(0));
                int count = adressToCount.get(address).incrementAndGet();

                if (count > 1) {
                    //need to link
                    Set<IExecutionGraphVertex> subgraphTops = new HashSet<>();

                    //TODO: point to optimize!
                    for (IExecutionGraphVertex itmpVertex : graph.vertexSet()) {
                        
                        ExecutionGraphVertex tmpVertex = (ExecutionGraphVertex) itmpVertex;
                        
                        String tmpAddress = (String) tmpVertex.property(NAME).get();
                        if (address.equals(tmpAddress)) { //check for subgraph
                            Set<DefaultEdge> tmpEdges = graph.incomingEdgesOf(tmpVertex);
                            for (DefaultEdge tmpEdge : tmpEdges) {
                                subgraphTops.add(graph.getEdgeSource(tmpEdge));
                            }
                        }
                    }

                    for (IExecutionGraphVertex subVertex : subgraphTops) {
                        for (IExecutionGraphVertex vertexOfAddress : addressToVertices.get(address)) {
                            graph.addEdge(subVertex, vertexOfAddress);
                        }
                    }
                }
            }
            
			/* Adding IF Value */
			if ("IF".equals(vertex.property(TYPE).get().toString())) {
				Object val = vertex.property(VALUE).get();
				vertex.property(VALUE).set(getVertexById(val.toString(), graph).value());
			}

			/* Modifications for: FORMULA */
			// set formula_values to user-friendly string like: '1 + 2' or
			// 'SUM(2,1)'
			// For OPERATOR and FUNCTION types
			if ("OPERATOR".equals(vertex.property(TYPE).get().toString())
					|| "FUNCTION".equals(vertex.property(TYPE).get().toString())) {
				Object[] formulaPtg = (Object[]) vertex.property(FORMULA_PTG).get();
				if (formulaPtg != null) {
					Ptg optg = (Ptg) formulaPtg[0];
					String[] vals = getStringValuesByIds((ValueEval[]) formulaPtg[1], graph);
					String[] names = this.getNamesByIds((ValueEval[]) formulaPtg[1], graph);
					String formulaStr = null;
					String formulaValues = null;
					if (optg instanceof AbstractFunctionPtg) {
						// FUNC(arg,arg,...)
						formulaValues = String.format("%s(%s)", ptgToString(optg), String.join(",",
								Arrays.asList(vals).stream().map(v -> v.toString()).collect(Collectors.toList())));
						formulaStr = String.format("%s %s", String.join(" ",
								Arrays.asList(names).stream().map(v -> v.toString()).collect(Collectors.toList())),
								ptgToString(optg));
					} else if (optg instanceof ValueOperatorPtg) {
						// arg optr arg
						// TODO: what if unary?
						formulaValues = String.format("%s %s %s", vals[0], ptgToString(optg), vals[1]);
						formulaStr = String.format("%s %s %s", names[0], ptgToString(optg), names[1]);
					}

					if (formulaValues != null) {
						vertex.property(FORMULA_VALUES).set(formulaValues);
					}
					if (formulaStr != null) {
						vertex.property(FORMULA_STRING).set(formulaStr);
					}
					vertex.property(FORMULA_PTG_STRING).set("");
					vertex.property(PTG_STRING).set("");
				}
			}
		}
	}
            
    private ExecutionGraphVertex getVertexById(String id, DirectedGraph<IExecutionGraphVertex, DefaultEdge> graph) {
    	ExecutionGraphVertex result = null;
    	String name = "";
        if (id.contains("!")) {
        	name = id.substring(id.indexOf("!")+1).replaceAll("]", "");        	
        }        
        for (IExecutionGraphVertex ivertex : graph.vertexSet()) {
        	ExecutionGraphVertex vertex = (ExecutionGraphVertex) ivertex;
        	if (name.equals(vertex.name())) {
        		result = vertex;
        	} 
        }
        return result;
    }
    
    private String getStringValueById(String id, DirectedGraph<IExecutionGraphVertex, DefaultEdge> graph) {
    	if (id.contains("RefEval")) {
    		return getVertexById(id, graph).value().toString();
    	} else if (id.contains("NumberEval")) {
    		return id.substring(id.indexOf("[")+1).replaceAll("]", "");
    	}
    	return "";
    }
    
    private String[] getStringValuesByIds(ValueEval[] ids, DirectedGraph<IExecutionGraphVertex, DefaultEdge> graph) {
    	String[] result = new String[ids.length];
    	for (int i = 0 ; i < ids.length ; i++) {
    		result[i] = getStringValueById(ids[i].toString(), graph);
    	}
    	return result;
    }
    
    private String getNameById(String id, DirectedGraph<IExecutionGraphVertex, DefaultEdge> graph) {
    	if (id.contains("RefEval")) {
    		return id.substring(id.indexOf("!")+1).replaceAll("]", "");
    	} else if (id.contains("NumberEval")) {
    		return id.substring(id.indexOf("[")+1).replaceAll("]", "");
    	}
    	return ""; 
    }    
    
    private String[] getNamesByIds(ValueEval[] ids, DirectedGraph<IExecutionGraphVertex, DefaultEdge> graph) {
    	String[] result = new String[ids.length];
    	for (int i = 0 ; i < ids.length ; i++) {
    		result[i] = getNameById(ids[i].toString(), graph);
    	}
    	return result;
    }
    
    public static String ptgToString(Ptg ptg) {
        Class<? extends Ptg> ptgCls = ptg.getClass();

        if (ptgCls.isAssignableFrom(AddPtg.class)) {
            return "+";
        } else if (ptgCls.isAssignableFrom(SubtractPtg.class)) {
            return "-";
        } else if (ptgCls.isAssignableFrom(DividePtg.class)) {
            return "/";
        } else if (ptgCls.isAssignableFrom(MultiplyPtg.class)) {
            return "*";
        } else if (ptgCls.isAssignableFrom(EqualPtg.class)) {
            return "=";
        }

        try {
            return ptg.toFormulaString();
        } catch (Exception e) {
            return ptg.getClass().getSimpleName();
        }
    }

    public static Type ptgToVertexType(Ptg ptg) {

        if (ptg instanceof AbstractFunctionPtg) { //functions: SUM, COUNT, COS, etc.
            return FUNCTION;
        } else if (ptg instanceof ValueOperatorPtg) { //single operators: +, -, /, *, =
            return OPERATOR;
        } else if (ptg instanceof RefPtg || ptg instanceof ScalarConstantPtg) { //
            return CELL_WITH_VALUE;
        } else if (ptg instanceof AreaPtg) {
            return RANGE;
        }
        //TODO: add more for our cases
        throw new IllegalArgumentException("Unsupported Ptg class: " + ptg.getClass());
    }

    private static boolean isCellType(Type type) {
        return CELL_WITH_REFERENCE == type
            || CELL_WITH_FORMULA == type
            || CELL_WITH_VALUE == type;
    }
    
    /**
     * Does copy of all properties for every Vertex from @param vertices.
     * the first @param istandard is used as object to copy from.
     */
    private static void copyProperties(IExecutionGraphVertex istandard, Set<IExecutionGraphVertex> vertices) {
        for (IExecutionGraphVertex ivertex : vertices) {
            if (istandard == ivertex) { continue; }
            
            ExecutionGraphVertex vertex = (ExecutionGraphVertex) ivertex;
            ExecutionGraphVertex standard = (ExecutionGraphVertex) istandard;
            
            //copy properties
            for (PropertyName pname : PropertyName.values()) {
                if (pname == PropertyName.VERTEX_ID) continue;
                if (pname == PropertyName.INDEX_IN_FORMULA) continue;
                
                vertex.property(pname).set(standard.property(pname).get());
            } 
        }
    }
}
