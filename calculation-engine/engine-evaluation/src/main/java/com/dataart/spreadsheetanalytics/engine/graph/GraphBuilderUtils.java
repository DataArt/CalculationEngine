package com.dataart.spreadsheetanalytics.engine.graph;

import static java.lang.String.join;
import static org.apache.poi.common.fork.IExecutionGraphVertex.Type.CELL_WITH_FORMULA;
import static org.apache.poi.common.fork.IExecutionGraphVertex.Type.CELL_WITH_VALUE;
import static org.apache.poi.common.fork.IExecutionGraphVertex.Type.EMPTY_CELL;

import java.util.List;
import java.util.Set;

import org.apache.poi.common.fork.ExecutionGraphBuilderUtils;
import org.apache.poi.common.fork.IExecutionGraphVertex;
import org.apache.poi.common.fork.IExecutionGraphVertexProperties;
import org.apache.poi.ss.formula.eval.ErrorEval;
import org.apache.poi.ss.formula.ptg.AbstractFunctionPtg;
import org.apache.poi.ss.formula.ptg.ParenthesisPtg;
import org.apache.poi.ss.formula.ptg.Ptg;
import org.apache.poi.ss.formula.ptg.RefPtgBase;
import org.apache.poi.ss.formula.ptg.UnionPtg;
import org.apache.poi.ss.formula.ptg.ValueOperatorPtg;
import org.jgrapht.DirectedGraph;
import org.jgrapht.graph.DefaultDirectedGraph;

import com.dataart.spreadsheetanalytics.api.model.IA1Address;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.engine.A1AddressPool;
import com.dataart.spreadsheetanalytics.model.A1Address;

public final class GraphBuilderUtils {
    
    public static final String UNDEFINED_EXTERNAL_FUNCTION = "#external#";
    
    public static final char B_LEFT = '[';
    public static final char B_RIGHT = ']';
    
    private GraphBuilderUtils() {}
    
    static String ptgToString(Ptg ptg) {
        Class<? extends Ptg> ptgCls = ptg.getClass();

        if (ptgCls.isAssignableFrom(RefPtgBase.class)) {
            RefPtgBase refPtgBse = (RefPtgBase) ptg;
            A1Address address = A1AddressPool.get(refPtgBse.getRow(), refPtgBse.getColumn());
            return address == null ? ptg.toFormulaString() : address.address();
        }

        return ExecutionGraphBuilderUtils.ptgToString(ptg);
    }

    static boolean isCompareOperand(String name) {
        return name.contains("=") || name.contains("<") || name.contains(">") || name.contains("<>") || name.contains("=>") || name.contains("<=");
    }

    public static ExecutionGraph buildSingleVertexGraphForParseException(ICellAddress address, ErrorEval error, String formulaString) {
        
        ExecutionGraphVertex vertex = new ExecutionGraphVertex(address.a1Address().address());
        vertex.properties().setType(CELL_WITH_FORMULA);
        vertex.properties().setValue(error);
        
        if (formulaString == null) { vertex.properties().setFormulaString(error.getErrorString()); }
        else { vertex.properties().setFormulaString(formulaString); }
        
        vertex.properties().setFormulaValues(error.getErrorString());
        vertex.properties().setFormulaPtgString(error.getErrorString());
        vertex.properties().setPtgString(error.getErrorString());
        vertex.properties().setSourceObjectId(address.getDataModelId());
        
        DirectedGraph<ExecutionGraphVertex, ExecutionGraphEdge> emptyGraph = new DefaultDirectedGraph<>(ExecutionGraphEdge.class);
        emptyGraph.addVertex(vertex);
        return ExecutionGraph.wrap(emptyGraph);
    }
    
    public static ExecutionGraph buildSingleVertexGraphForCellWithValue(ICellValue cell, ICellAddress address) {
        
        ExecutionGraphVertex vertex = new ExecutionGraphVertex(address.a1Address().address());
        vertex.properties().setValue(cell.get());
        vertex.properties().setType(CELL_WITH_VALUE);
        vertex.properties().setFormulaString(address.a1Address().address());
        vertex.properties().setFormulaValues(cell.get().toString());
        vertex.properties().setFormulaPtgString("");
        vertex.properties().setPtgString("");
        vertex.properties().setSourceObjectId(address.getDataModelId());

        DirectedGraph<ExecutionGraphVertex, ExecutionGraphEdge> emptyGraph = new DefaultDirectedGraph<>(ExecutionGraphEdge.class);
        emptyGraph.addVertex(vertex);
        return ExecutionGraph.wrap(emptyGraph);
    }
    
    public static ExecutionGraph buildSingleVertexGraphForEmptyCell(IA1Address address) {
        ExecutionGraphVertex vertex = new ExecutionGraphVertex(address.address());
        vertex.properties().setType(EMPTY_CELL);

        DirectedGraph<ExecutionGraphVertex, ExecutionGraphEdge> emptyGraph = new DefaultDirectedGraph<>(ExecutionGraphEdge.class);
        emptyGraph.addVertex(vertex);
        return ExecutionGraph.wrap(emptyGraph);
    }

    /**
     * Does copy of all properties for every Vertex from @param vertices. the
     * first @param standard is used as object to copy from.
     */
    static void copyProperties(ExecutionGraphVertex standard, Set<IExecutionGraphVertex> vertices) {
        for (IExecutionGraphVertex vertex : vertices) {
            if (standard.equals(vertex)) { continue; }

            IExecutionGraphVertexProperties from = standard.properties();
            IExecutionGraphVertexProperties to = ((ExecutionGraphVertex) vertex).properties();

            //copy all, but: IndexInFormula and VertexId
            to.setName(from.getName());
            to.setAlias(from.getAlias());
            to.setValue(from.getValue());
            to.setType(from.getType());
            to.setFormulaPtg(from.getFormulaPtg());
            to.setPtgs(from.getPtgs());
            if (from.getFormulaString() == null && to.getFormulaString() != null) { from.setFormulaString(to.getFormulaString()); }
            else { to.setFormulaString(from.getFormulaString()); }
            if (from.getFormulaValues() == null && to.getFormulaValues() != null) { from.setFormulaValues(to.getFormulaValues()); }
            else { to.setFormulaValues(from.getFormulaValues()); }
            if (from.getFormulaPtgString() == null && to.getFormulaPtgString() != null) { from.setFormulaPtgString(to.getFormulaPtgString()); }
            else { to.setFormulaPtgString(from.getFormulaPtgString()); }
            if (from.getPtgString() == null && to.getPtgString() != null) { from.setPtgString(to.getPtgString()); }
            else { to.setPtgString(from.getPtgString()); }
            to.setSourceObjectId(from.getSourceObjectId());
            to.setRootFormulaId(from.getRootFormulaId());
        }
    }
    
    static String removeSymbol(String str, char symbol) {
        if (str.indexOf(symbol) < 0) { return str; }
        
        final char[] chars = str.toCharArray();
        int pos = 0;
        for (int i = 0; i < chars.length; i++) {
            if (chars[i] != symbol) 
                { chars[pos++] = chars[i]; }
        }
        return new String(chars, 0, pos);
    }

    static boolean isErrorValue(Object val) {
        return val instanceof ErrorEval;
    }

    static boolean inheritsErrorValue(IExecutionGraphVertex ivertex) {
        ExecutionGraphVertex vertex = (ExecutionGraphVertex) ivertex;
        boolean isNotInherFunction = "ISERROR".equals(vertex.getName());
        boolean isError = isErrorValue(vertex.getValue());
        return !(isError || isNotInherFunction);
    }

    static boolean isSkipVertex(Ptg ptg) {
        return ptg instanceof ParenthesisPtg;
    }

    static String createFormulaString(Object optg, List<String> ops, ExecutionGraphVertex vertex) {
        String opname = "";
        if (optg == null) { // IF
            opname = "IF";
        } else if (optg instanceof Ptg) {
            opname = ptgToString((Ptg) optg);
            /* if the function was not recognized as internal function we use the node name as the function name */
            if (UNDEFINED_EXTERNAL_FUNCTION.equals(opname)) { opname = vertex.getName(); }
        } else {
            opname = optg.toString();
        }
        
        if (optg == null || optg instanceof AbstractFunctionPtg) {
            return new StringBuilder()
                    .append(opname)
                    .append("(")
                    .append(removeBrackets(ops.toString()))
                    .append(")")
                    .toString();
        } else if (optg instanceof ValueOperatorPtg || optg instanceof UnionPtg) {
            return new StringBuilder()
                    .append(ops.size() > 1 ? removeBrackets(ops.get(1)) : "")
                    .append(" ")
                    .append(opname)
                    .append(" ")
                    .append(ops.size() > 0 ? removeBrackets(ops.get(0)) : "")
                    .toString();
        }
        
        return "";
    }

    static String createPtgString(Object optg, List<String> ops, ExecutionGraphVertex vertex) {
        String opname = "";
        
        if (optg == null) {
            return new StringBuilder()
                    .append(join(", ", ops))
                    .append(" IF")
                    .toString();
        } else {
            opname = optg instanceof Ptg ? ptgToString((Ptg) optg) : optg.toString();
            /* if the function was not recognized as internal function we use the node name as the function name */
            if (UNDEFINED_EXTERNAL_FUNCTION.equals(opname)) { opname = vertex.getName(); }
        }
        
        if (optg instanceof AbstractFunctionPtg) {
            return new StringBuilder()
                    .append(join(", ", ops))
                    .append(" ")
                    .append(opname)
                    .toString();
        } else if (optg instanceof ValueOperatorPtg || optg instanceof UnionPtg) {
            return new StringBuilder()
                    .append(ops.size() > 1 ? removeBrackets(ops.get(1)) : "")
                    .append(" ")
                    .append(ops.size() > 0 ? removeBrackets(ops.get(0)) : "")
                    .append(" ")
                    .append(opname)
                    .toString();
        }

        return "";
    }

    static String removeBrackets(String str) {
        if (str.indexOf(B_LEFT) < 0) { return str; }
        
        final char[] chars = str.toCharArray();
        int pos = 0;
        for (int i = 0; i < chars.length; i++) {
            if (chars[i] != B_LEFT && chars[i] != B_RIGHT) 
                { chars[pos++] = chars[i]; }
        }
        return new String(chars, 0, pos);
    }

}
