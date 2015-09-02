package com.dataart.spreadsheetanalytics.engine.execgraph;

import static com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex.Type.CELL_WITH_FORMULA;
import static com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex.Type.CELL_WITH_VALUE;
import static com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex.Type.FUNCTION;
import static com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex.Type.IF;
import static com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex.Type.OPERATOR;
import static com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex.Type.RANGE;
import static com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex.Type.CONSTANT_VALUE;
import static com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex.Type.isCell;
import static java.lang.String.format;
import static java.lang.String.join;
import static java.util.Arrays.asList;
import static java.util.stream.Collectors.toList;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.FORMULA_PTG;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.NAME;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.TYPE;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.VALUE;

import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.atomic.AtomicInteger;

import org.apache.poi.common.execgraph.IExecutionGraphBuilder;
import org.apache.poi.common.execgraph.IExecutionGraphVertex;
import org.apache.poi.common.execgraph.IExecutionGraphVertexProperty;
import org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName;
import org.apache.poi.ss.formula.eval.ValueEval;
import org.apache.poi.ss.formula.functions.Area2DValues;
import org.apache.poi.ss.formula.ptg.AbstractFunctionPtg;
import org.apache.poi.ss.formula.ptg.AddPtg;
import org.apache.poi.ss.formula.ptg.AreaPtg;
import org.apache.poi.ss.formula.ptg.ControlPtg;
import org.apache.poi.ss.formula.ptg.DividePtg;
import org.apache.poi.ss.formula.ptg.EqualPtg;
import org.apache.poi.ss.formula.ptg.GreaterThanPtg;
import org.apache.poi.ss.formula.ptg.LessThanPtg;
import org.apache.poi.ss.formula.ptg.MultiplyPtg;
import org.apache.poi.ss.formula.ptg.NotEqualPtg;
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
import com.dataart.spreadsheetanalytics.model.CellFormulaExpression;
import com.dataart.spreadsheetanalytics.model.CellValue;

/**
 * TODO: write about internal representation, not thread safe, one instance per
 * calculation, etc.
 * 
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
	 * This method should be used when creating a new vertex from a cell, so
	 * vertex name is a cell's address. New Vertex will be created any time this
	 * method is invoked. New vertex will be stored in
	 * address-to-set-of-vertices map.
	 */
	@Override
	public IExecutionGraphVertex createVertex(String address) {
		// create new vertex object
		ExecutionGraphVertex v = new ExecutionGraphVertex(address);

		// add vertex to actual graph
		dgraph.addVertex(v);

		// put new vertex to set of vertices with the same address, since they
		// all must have the same set of properties and values
		Set<IExecutionGraphVertex> vs = addressToVertices.containsKey(address) ? addressToVertices.get(address) : new HashSet<>();
		vs.add(v);
		addressToVertices.put(address, vs);

		return v;
	}

	@Override
	public IExecutionGraphVertex createVertex(Ptg ptg) {
		boolean isCell = ptg instanceof RefPtg;
		String name = ptgToString(ptg);

		if (isCell) { // cell
			return createVertex(name);
		} else { // operation
			ExecutionGraphVertex v = new ExecutionGraphVertex(name);
			if (ptg instanceof ControlPtg) {
				return v;
			}
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
	 * Do anything you want here. After graph is completed and we are out of POI
	 * context you can add\remove\etc any information you want.
	 */
	public void runPostProcessing() {
		DirectedGraph<IExecutionGraphVertex, DefaultEdge> graph = dgraph;

		// make identical vertices have the same set of properties
		// two vertices are identical if they have the same address value.
		// Id for every vertex is unique, so this is not a flag here
		for (String address : addressToVertices.keySet()) {
			Set<IExecutionGraphVertex> vs = addressToVertices.get(address);

			// the logic below is very fragile and based on some empirical model
			// and may not work for other type of graphs
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

		// copy or link subgraphs to identical vertices
		// and
		// modify Formula field with additional values
		Map<String, AtomicInteger> adressToCount = new HashMap<>();
		for (IExecutionGraphVertex ivertex : graph.vertexSet()) {

			ExecutionGraphVertex vertex = (ExecutionGraphVertex) ivertex;

			// restore/add subgraphs to identical vertices
			Type type = (Type) vertex.property(TYPE).get();
			if (isCell(type)) {
				String address = (String) vertex.property(NAME).get();

				adressToCount.putIfAbsent(address, new AtomicInteger(0));

				if (adressToCount.get(address).incrementAndGet() > 1) { //count > 1
					// need to link
					Set<IExecutionGraphVertex> subgraphTops = new HashSet<>();

					// TODO: point to optimize!
					for (IExecutionGraphVertex itmpVertex : graph.vertexSet()) {

						ExecutionGraphVertex tmpVertex = (ExecutionGraphVertex) itmpVertex;

						String tmpAddress = (String) tmpVertex.property(NAME).get();
						if (address.equals(tmpAddress)) { // check for subgraph
							for (DefaultEdge tmpEdge : graph.incomingEdgesOf(tmpVertex)) {
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
			if (IF == type) {
				Set<DefaultEdge> two = graph.incomingEdgesOf(vertex);
				if (two.size() != 2) { throw new IllegalStateException("IF must have only two incoming edges."); }

				Object ifBranchValue = null;
				for (DefaultEdge e : two) {
					ExecutionGraphVertex oneOfTwo = (ExecutionGraphVertex) graph.getEdgeSource(e);
					if (!isCompareOperand(oneOfTwo.name())) {
						ifBranchValue = oneOfTwo.property(VALUE).get();
						break;
					}
				}
				vertex.property(VALUE).set(ifBranchValue);
			}

		}

		for (IExecutionGraphVertex vert : graph.vertexSet()) {
			if (graph.outgoingEdgesOf(vert).isEmpty()) {
			    ExecutionGraphVertex root = (ExecutionGraphVertex) vert;
				root.formula = buildFormula(root, graph);
				break;
			}
		}
	}

    /* Modifications for: FORMULA */
    // set formula_values to user-friendly string like: '1 + 2' or
    // 'SUM(2,1)'
    // For OPERATOR and FUNCTION types
	private CellFormulaExpression buildFormula(ExecutionGraphVertex vertex, DirectedGraph<IExecutionGraphVertex, DefaultEdge> graph) {

        switch (vertex.type) {
    
            case CELL_WITH_VALUE: {
                CellFormulaExpression formula = (CellFormulaExpression) vertex.formula;
                formula.formulaStr(vertex.property(NAME).get().toString());
                formula.formulaValues(vertex.property(VALUE).get().toString());
                formula.formulaPtgStr(vertex.property(VALUE).get().toString());
                formula.ptgStr(vertex.property(NAME).get().toString());
                return formula;
            }
            case CELL_WITH_REFERENCE:
            case CELL_WITH_FORMULA: {
                DefaultEdge edge = graph.incomingEdgesOf(vertex).iterator().next();
                ExecutionGraphVertex ivertex = (ExecutionGraphVertex) graph.getEdgeSource(edge);
                CellFormulaExpression formula = buildFormula(ivertex, graph);
                vertex.formula = new CellFormulaExpression(formula);
                return new CellFormulaExpression(formula);
            }
            case OPERATOR:
            case FUNCTION: {
                Set<DefaultEdge> edges = graph.incomingEdgesOf(vertex);
                List<String> formulaStringNodes = new LinkedList<>();
                List<String> formulaValuesNodes = new LinkedList<>();
                List<String> formulaPtgNodes = new LinkedList<>();
                List<String> ptgNodes = new LinkedList<>();
                Object[] formulaPtg = (Object[]) vertex.property(FORMULA_PTG).get();
                for (DefaultEdge edge : edges) {
                    ExecutionGraphVertex ivertex = (ExecutionGraphVertex) graph.getEdgeSource(edge);
                    CellFormulaExpression formula = buildFormula(ivertex, graph);
                    formulaStringNodes.add(formula.formulaStr());
                    formulaValuesNodes.add(formula.formulaValues());
                    formulaPtgNodes.add(formula.formulaPtgStr());
                    ptgNodes.add(formula.ptgStr());
                }
                CellFormulaExpression iformula = (CellFormulaExpression) vertex.formula();
                iformula.formulaStr(createFormulaString(formulaPtg[0], formulaStringNodes));
                iformula.formulaValues(createFormulaString(formulaPtg[0], formulaValuesNodes));
                iformula.formulaPtgStr(createPtgString(formulaPtg[0], formulaPtgNodes));
                iformula.ptgStr(createPtgString(formulaPtg[0], ptgNodes));
                CellFormulaExpression result = new CellFormulaExpression(iformula);
                iformula.formulaPtgStr("");
                iformula.ptgStr("");
                return result;
            }
            case IF: {
                Set<DefaultEdge> edges = graph.incomingEdgesOf(vertex);
                List<String> formulaValuesNodes = new LinkedList<>();
                List<String> formulaPtgNodes = new LinkedList<>();
                List<String> ptgNodes = new LinkedList<>();
                for (DefaultEdge edge : edges) {
                    ExecutionGraphVertex ivertex = (ExecutionGraphVertex) graph.getEdgeSource(edge);
                    CellFormulaExpression formula = buildFormula(ivertex, graph);
                    formulaValuesNodes.add(formula.formulaValues());
                    formulaPtgNodes.add(formula.formulaPtgStr());
                    ptgNodes.add(formula.ptgStr());
                }
                //TODO: are you sure you need only '=' ?
                Collections.sort(formulaValuesNodes, (n1, n2) -> n1.contains("=") ? -1 : 0);
                CellFormulaExpression iformula = (CellFormulaExpression) vertex.formula;
                iformula.formulaValues(createFormulaString(null, formulaValuesNodes));
                iformula.formulaPtgStr(createPtgString(null, formulaPtgNodes));
                iformula.ptgStr(createPtgString(null, ptgNodes));
                CellFormulaExpression result = new CellFormulaExpression(iformula);
                iformula.formulaPtgStr("");
                iformula.ptgStr("");
                return result;
            }
            case RANGE: {
                CellFormulaExpression iformula = (CellFormulaExpression) vertex.formula();
                iformula.formulaStr(vertex.property(NAME).get().toString());
                iformula.formulaValues(vertex.property(VALUE).get().toString());
                iformula.formulaPtgStr(vertex.property(VALUE).get().toString());
                iformula.ptgStr(vertex.property(NAME).get().toString());
                connectValuesToRange(vertex);
                return iformula;
            }
		case CONSTANT_VALUE: {
			vertex.property(NAME).set("VALUE");
			CellFormulaExpression formula = (CellFormulaExpression) vertex.formula;
			formula.formulaStr(vertex.property(NAME).get().toString());
			formula.formulaValues(vertex.property(VALUE).get().toString());
			formula.formulaPtgStr(vertex.property(VALUE).get().toString());
			formula.ptgStr(vertex.property(NAME).get().toString());
			return new CellFormulaExpression(formula);
		}
            default: {
                return (CellFormulaExpression) vertex.formula;
            }
        }
		
	}

	private void connectValuesToRange(ExecutionGraphVertex rangeVertex) {
		Object cellValue = ((CellValue) rangeVertex.value()).get();
		if (cellValue instanceof Area2DValues) {
			Area2DValues value = (Area2DValues) cellValue;
			List<String> adresses = value.getRangeCellAddresses();
			for (String adress : adresses) {
				Set<IExecutionGraphVertex> cellVertices = addressToVertices.get(adress);
				if (cellVertices != null) {
					for (IExecutionGraphVertex cellVertex : cellVertices) {
						connect(cellVertex, rangeVertex);
					}
				}
			}
		}
	}

	private String createFormulaString(Object optg, List<String> ops) {
		String opname = "";
		if (optg == null) { // IF
			opname = "IF";
		} else if (optg instanceof Ptg) {
			opname = ptgToString((Ptg) optg);
		} else {
			opname = optg.toString();
		}
		
		if (optg == null || optg instanceof AbstractFunctionPtg) {
			return stripBracesAndCommas(format("%s(%s)", 
			                                     opname,
			                                     join(",", asList(ops)
			                                                   .stream()
			                                                   .map(v -> v.toString())
			                                                   .collect(toList()))));
		} else if (optg instanceof ValueOperatorPtg) {
			return stripBracesAndCommas(format("%s %s %s", ops.get(0), opname, ops.get(1)));
		}
		
		return "";
	}

	private String createPtgString(Object optg, List<String> ops) {
		String opname = "";
		
		if (optg == null) {
			opname = "IF";
			return stripBracesAndCommas(format("%s %s ",
					                            join(",", asList(ops)
					                                        .stream()
					                                        .map(v -> v.toString())
					                                        .collect(toList())), 
					                            opname));
		} else {
            opname = optg instanceof Ptg ? ptgToString((Ptg) optg) : optg.toString();
			
			if (optg instanceof AbstractFunctionPtg) {
				return stripBracesAndCommas(format("%s %s ",
						                            join(",", asList(ops)
						                                        .stream()
						                                        .map(v -> v.toString())
						                                        .collect(toList())), 
						                            opname));
			} else if (optg instanceof ValueOperatorPtg) {
				return stripBracesAndCommas(String.format("%s %s %s", ops.get(0), ops.get(1), opname));
			}
			
			return "";
		}
	}

	private static String stripBracesAndCommas(String inline) {
	    return inline.replace("[", "").replace("]", "").replace(",", "");
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
		} else if (ptgCls.isAssignableFrom(GreaterThanPtg.class)) {
			return ">";
		} else if (ptgCls.isAssignableFrom(LessThanPtg.class)) {
			return "<";
		} else if (ptgCls.isAssignableFrom(NotEqualPtg.class)) {
			return "<>";
		}

		try {
			return ptg.toFormulaString();
		} catch (Exception e) {
			return ptg.getClass().getSimpleName();
		}
	}

	public static Type ptgToVertexType(Ptg ptg) {

		if (ptg instanceof AbstractFunctionPtg) { // functions: SUM, COUNT, COS, etc.
			return FUNCTION;
		} else if (ptg instanceof ValueOperatorPtg) { // single operators: +, -, /, *, =
			return OPERATOR;
		} else if (ptg instanceof RefPtg) {
			return CELL_WITH_VALUE;
		} else if (ptg instanceof ScalarConstantPtg) {
			return CONSTANT_VALUE;
		} else if (ptg instanceof AreaPtg) {
			return RANGE;
		}

		// TODO: add more for our cases
		throw new IllegalArgumentException("Unsupported Ptg class: " + ptg.getClass());
	}

	/**
	 * Does copy of all properties for every Vertex from @param vertices. the
	 * first @param istandard is used as object to copy from.
	 */
	private static void copyProperties(IExecutionGraphVertex istandard, Set<IExecutionGraphVertex> vertices) {
		for (IExecutionGraphVertex ivertex : vertices) {
			if (istandard == ivertex) { continue; }

			ExecutionGraphVertex vertex = (ExecutionGraphVertex) ivertex;
			ExecutionGraphVertex standard = (ExecutionGraphVertex) istandard;

			// copy properties
			for (PropertyName pname : PropertyName.values()) {
				if (pname == PropertyName.VERTEX_ID) continue;
				if (pname == PropertyName.INDEX_IN_FORMULA) continue;

				vertex.property(pname).set(standard.property(pname).get());
			}
		}
	}

    // TODO: not the best solution, but works as for now
    private static boolean isCompareOperand(String name) {
        return "=".equals(name) || ">".equals(name) || "<".equals(name) || "<>".equals(name);
    }

}
