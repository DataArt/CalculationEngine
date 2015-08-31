package com.dataart.spreadsheetanalytics.engine.execgraph;

import static com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex.Type.CELL_WITH_FORMULA;
import static com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex.Type.CELL_WITH_REFERENCE;
import static com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex.Type.CELL_WITH_VALUE;
import static com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex.Type.FUNCTION;
import static com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex.Type.OPERATOR;
import static com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex.Type.RANGE;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.FORMULA_PTG;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.FORMULA_PTG_STRING;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.PTG_STRING;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.FORMULA_VALUES;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.NAME;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.TYPE;
import static org.apache.poi.common.execgraph.IExecutionGraphVertexProperty.PropertyName.VALUE;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
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
		Set<IExecutionGraphVertex> vs = addressToVertices.containsKey(address) ? addressToVertices.get(address)
				: new HashSet<>();
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
		if (vertex == null) {
			return;
		}
		dgraph.removeVertex(vertex);
	}

	@Override
	public void putVertexToCache(ValueEval value, IExecutionGraphVertex vertex) {
		if (value == null) {
			throw new IllegalArgumentException("ValueEval to assosiate vertex with cannot be null.");
		}

		valueToVertex.put(value, vertex);
	}

	@Override
	public IExecutionGraphVertex getVertexFromCache(ValueEval value) {
		if (value == null) {
			throw new IllegalArgumentException("ValueEval to assosiate vertex with cannot be null.");
		}

		return valueToVertex.get(value);
	}

	@Override
	public void putVertexToCache(String address, IExecutionGraphVertex vertex) {
		if (!addressToVertices.containsKey(address))
			addressToVertices.put(address, new HashSet<>());
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
			if (isCellType(type)) {
				String address = (String) vertex.property(NAME).get();

				adressToCount.putIfAbsent(address, new AtomicInteger(0));
				int count = adressToCount.get(address).incrementAndGet();

				if (count > 1) {
					// need to link
					Set<IExecutionGraphVertex> subgraphTops = new HashSet<>();

					// TODO: point to optimize!
					for (IExecutionGraphVertex itmpVertex : graph.vertexSet()) {

						ExecutionGraphVertex tmpVertex = (ExecutionGraphVertex) itmpVertex;

						String tmpAddress = (String) tmpVertex.property(NAME).get();
						if (address.equals(tmpAddress)) { // check for subgraph
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
			if (Type.IF == type) {
				Set<DefaultEdge> two = graph.incomingEdgesOf(vertex);
				if (two.size() != 2) {
					throw new IllegalStateException("IF must have only two incoming edges.");
				}

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

			/* Modifications for: FORMULA */
			// set formula_values to user-friendly string like: '1 + 2' or
			// 'SUM(2,1)'
			// For OPERATOR and FUNCTION types

		}

		ExecutionGraphVertex root = null;
		for (IExecutionGraphVertex vert : graph.vertexSet()) {
			if (graph.outgoingEdgesOf(vert).isEmpty()) {
				root = (ExecutionGraphVertex) vert;
			}
		}

		if (root != null) {
			root.formula = buildFormula(root, graph);
		}

		for (IExecutionGraphVertex vert : graph.vertexSet()) {
			if (((ExecutionGraphVertex) vert).type == Type.OPERATOR) {
				((ExecutionGraphVertex) vert).property(FORMULA_PTG_STRING).set("");
			}
		}
	}

	private CellFormulaExpression buildFormula(ExecutionGraphVertex vert,
			DirectedGraph<IExecutionGraphVertex, DefaultEdge> graph) {
		if (vert.type == Type.CELL_WITH_VALUE) {
			CellFormulaExpression formula = (CellFormulaExpression) vert.formula;
			formula.formulaStr(vert.property(NAME).get().toString());
			formula.formulaValues(vert.property(VALUE).get().toString());
			formula.formulaPtgStr(vert.property(VALUE).get().toString());
			formula.ptgStr(vert.property(NAME).get().toString());
			return formula;
		} else if (vert.type == Type.CELL_WITH_REFERENCE || vert.type == Type.CELL_WITH_FORMULA) {
			DefaultEdge edge = graph.incomingEdgesOf(vert).iterator().next();
			ExecutionGraphVertex ivert = (ExecutionGraphVertex) graph.getEdgeSource(edge);
			CellFormulaExpression formula = buildFormula(ivert, graph);
			vert.formula = new CellFormulaExpression(formula);
			((CellFormulaExpression) vert.formula).type(vert.type);
			return new CellFormulaExpression(formula);
		} else if (vert.type == Type.OPERATOR || vert.type == Type.FUNCTION) {
			Set<DefaultEdge> edges = graph.incomingEdgesOf(vert);
			ArrayList<String> formulaStringNodes = new ArrayList<>();
			ArrayList<String> formulaValuesNodes = new ArrayList<>();
			ArrayList<String> formulaPtgNodes = new ArrayList<>();
			ArrayList<String> ptgNodes = new ArrayList<>();
			Object[] formulaPtg = (Object[]) vert.property(FORMULA_PTG).get();
			for (DefaultEdge edge : edges) {
				ExecutionGraphVertex ivert = (ExecutionGraphVertex) graph.getEdgeSource(edge);
				CellFormulaExpression formula = buildFormula(ivert, graph);
				formulaStringNodes.add(formula.formulaStr());
				formulaValuesNodes.add(formula.formulaValues());
				formulaPtgNodes.add(formula.formulaPtgStr());
				ptgNodes.add(formula.ptgStr());
			}
			CellFormulaExpression iformula = (CellFormulaExpression) vert.formula;
			iformula.formulaStr(createFormulaString(formulaPtg[0], formulaStringNodes));
			iformula.formulaValues(createFormulaString(formulaPtg[0], formulaValuesNodes));
			iformula.formulaPtgStr(createPtgString(formulaPtg[0], formulaPtgNodes));
			iformula.ptgStr(createPtgString(formulaPtg[0], ptgNodes));
			CellFormulaExpression result = new CellFormulaExpression(iformula);
			iformula.type(vert.type);
			return result;
		} else if (vert.type == Type.IF) {
			Set<DefaultEdge> edges = graph.incomingEdgesOf(vert);
			ArrayList<String> formulaValuesNodes = new ArrayList<>();
			ArrayList<String> formulaPtgNodes = new ArrayList<>();
			ArrayList<String> ptgNodes = new ArrayList<>();
			for (DefaultEdge edge : edges) {
				ExecutionGraphVertex ivert = (ExecutionGraphVertex) graph.getEdgeSource(edge);
				CellFormulaExpression formula = buildFormula(ivert, graph);
				formulaValuesNodes.add(formula.formulaValues());
				formulaPtgNodes.add(formula.formulaPtgStr());
				ptgNodes.add(formula.ptgStr());
			}
			Comparator<String> cmp = new Comparator<String>() {

				@Override
				public int compare(String arg0, String arg1) {
					if (arg0.contains("=") && !arg1.contains("=")) {
						return -1;
					} else {
						return 0;
					}
				}

			};
			Collections.sort(formulaValuesNodes, cmp);
			CellFormulaExpression iformula = (CellFormulaExpression) vert.formula;
			iformula.formulaValues(createFormulaString(null, formulaValuesNodes));
			iformula.formulaPtgStr(createPtgString(null, formulaPtgNodes));
			iformula.ptgStr(createPtgString(null, ptgNodes));
			CellFormulaExpression result = new CellFormulaExpression(iformula);
			iformula.type(vert.type);
			return result;
		} else if (vert.type == Type.RANGE) {
			((CellFormulaExpression) vert.formula).formulaStr(vert.property(NAME).get().toString());
			((CellFormulaExpression) vert.formula).formulaValues(vert.property(VALUE).get().toString());
			((CellFormulaExpression) vert.formula).formulaPtgStr(vert.property(VALUE).get().toString());
			((CellFormulaExpression) vert.formula).ptgStr(vert.property(NAME).get().toString());
			return (CellFormulaExpression) vert.formula;
		}
		return (CellFormulaExpression) vert.formula;
	}

	private String createFormulaString(Object optg, ArrayList<String> ops) {
		String opname = "";
		if (optg == null) {
			opname = "IF";
		} else if (optg instanceof Ptg) {
			opname = ptgToString((Ptg) optg);
		} else {
			opname = optg.toString();
		}
		if (optg instanceof AbstractFunctionPtg || optg == null) {
			String result = String.format("%s(%s)", opname,
					String.join(",", Arrays.asList(ops).stream().map(v -> v.toString()).collect(Collectors.toList())));
			result = result.replaceAll("\\[", "");
			result = result.replaceAll("\\]", "");
			return result;
		} else if (optg instanceof ValueOperatorPtg) {
			String result = String.format("%s %s %s", ops.get(0), opname, ops.get(1));
			result = result.replaceAll("\\[", "");
			result = result.replaceAll("\\]", "");
			return result;
		}
		return "";
	}

	private String createPtgString(Object optg, ArrayList<String> ops) {
		String opname = "";
		if (optg == null) {
			opname = "IF";
		} else if (optg instanceof Ptg) {
			opname = ptgToString((Ptg) optg);
		} else {
			opname = optg.toString();
		}
		if (optg instanceof AbstractFunctionPtg || optg == null) {
			String result = String.format("%s %s ",
					String.join(",", Arrays.asList(ops).stream().map(v -> v.toString()).collect(Collectors.toList())),
					opname);
			result = result.replaceAll("\\[", "");
			result = result.replaceAll("\\]", "");
			result = result.replaceAll(",", "");
			return result;
		} else if (optg instanceof ValueOperatorPtg) {
			String result = String.format("%s %s %s", ops.get(0), ops.get(1), opname);
			result = result.replaceAll("\\[", "");
			result = result.replaceAll("\\]", "");
			result = result.replaceAll(",", "");
			return result;
		}
		return "";

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

		if (ptg instanceof AbstractFunctionPtg) { // functions: SUM, COUNT, COS,
													// etc.
			return FUNCTION;
		} else if (ptg instanceof ValueOperatorPtg) { // single operators: +, -,
														// /, *, =
			return OPERATOR;
		} else if (ptg instanceof RefPtg || ptg instanceof ScalarConstantPtg) { //
			return CELL_WITH_VALUE;
		} else if (ptg instanceof AreaPtg) {
			return RANGE;
		}
		// TODO: add more for our cases
		throw new IllegalArgumentException("Unsupported Ptg class: " + ptg.getClass());
	}

	private static boolean isCellType(Type type) {
		return CELL_WITH_REFERENCE == type || CELL_WITH_FORMULA == type || CELL_WITH_VALUE == type;
	}

	/**
	 * Does copy of all properties for every Vertex from @param vertices. the
	 * first @param istandard is used as object to copy from.
	 */
	private static void copyProperties(IExecutionGraphVertex istandard, Set<IExecutionGraphVertex> vertices) {
		for (IExecutionGraphVertex ivertex : vertices) {
			if (istandard == ivertex) {
				continue;
			}

			ExecutionGraphVertex vertex = (ExecutionGraphVertex) ivertex;
			ExecutionGraphVertex standard = (ExecutionGraphVertex) istandard;

			// copy properties
			for (PropertyName pname : PropertyName.values()) {
				if (pname == PropertyName.VERTEX_ID)
					continue;
				if (pname == PropertyName.INDEX_IN_FORMULA)
					continue;

				vertex.property(pname).set(standard.property(pname).get());
			}
		}
	}

	// TODO: not the best solution, but works as for now
	private static boolean isCompareOperand(String name) {
		return "=".equals(name) || ">".equals(name) || "<".equals(name) || "<>".equals(name);
	}

}
