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
package com.dataart.spreadsheetanalytics.api.model;

import static org.apache.poi.common.fork.IExecutionGraphVertex.Type.CELL_WITH_FORMULA;
import static org.apache.poi.common.fork.IExecutionGraphVertex.Type.CELL_WITH_REFERENCE;
import static org.apache.poi.common.fork.IExecutionGraphVertex.Type.CELL_WITH_VALUE;
import static org.apache.poi.common.fork.IExecutionGraphVertex.Type.FUNCTION;
import static org.apache.poi.common.fork.IExecutionGraphVertex.Type.IF;
import static org.apache.poi.common.fork.IExecutionGraphVertex.Type.OPERATOR;
import static org.apache.poi.common.fork.IExecutionGraphVertex.Type.RANGE;

import org.apache.poi.common.fork.IExecutionGraphVertex.Type;

import com.dataart.spreadsheetanalytics.engine.CalculationEngineException;
import com.dataart.spreadsheetanalytics.engine.graph.CellFormulaExpression;
import com.dataart.spreadsheetanalytics.engine.graph.ExecutionGraphVertex;

/**
 * Represents a vertex (node) in execution graph (static or dynamic).
 * Graph basically consists of Vertices and Edges. 
 * Edges are always empty in terms of any data in them. 
 * The only information in any Edge is a direction (from Vertex to Vertex).
 * 
 * On the other hand, Vertex contains all the information about execution.
 * The Vertex Edge can be one of {@link Type}.
 * 
 * See methods docs for more information about every piece of information.
 *
 * Basic implementation: {@link ExecutionGraphVertex}.
 */
public interface IExecutionGraphVertex extends Comparable<IExecutionGraphVertex> {
    
    /**
     * Id of this vertex. Should be unique in scope of one ExecutionGraph
     */
    int getId();
    
    /**
     * Name of vertex, since vertices can be different in type, 
     * name should provide information to read this vertex easily.
     * E.g. name can be: A1, Sheet1!A1, ModelX!A1, ModelX!PropertyName, +, *, SUM, COS, IF, =, etc.  
     */
    String getName();

    /**
     * For named cells we also store the customer specified name
     */
    String getAlias();

    /**
     * Container for vertex formula. It may not be empty, on every level of execution graph
     * there should be some kind of a expression to evaluate.
     * E.g. formula can be: 1, A1, A1+A2, A1+1, IF(A1=A2,A3,A4), etc.
     */
    CellFormulaExpression getFormula();

    /**
     * Container for vertex value. Value can be in different types,
     * but it is always some end-value which can be treated as result.
     */
    Object getValue();

    /**
     * Type of vertex, see {@link Type} for details
     */
    Type getType();

    /**
     * Any kind of Id for source object of this vertex.
     * E.g. Id of a spreadsheet if vertex is a cell.
     * Major idea here is that using this Id you can get the original object source.
     */
    Object getSourceObjectId();

    static boolean isFunction(Type type) {
        if (type == null) { throw new CalculationEngineException("Type argument cannot be null"); }
        
        return type == OPERATOR ||
               type == IF ||
               type == FUNCTION;
    }
    
    static boolean isCell(Type type) {
        if (type == null) { throw new CalculationEngineException("Type argument cannot be null"); }
        
        return type == CELL_WITH_FORMULA ||
               type == CELL_WITH_REFERENCE ||
               type == CELL_WITH_VALUE ||
               type == RANGE;
    }
}
