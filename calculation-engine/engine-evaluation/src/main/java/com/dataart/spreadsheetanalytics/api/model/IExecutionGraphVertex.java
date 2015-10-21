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

import com.dataart.spreadsheetanalytics.engine.execgraph.ExecutionGraphVertex;

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
public interface IExecutionGraphVertex {
    
    /**
     * Id of this vertex. Should be unique in scope of one ExecutionGraph
     */
    Object id();
    
    /**
     * Name of vertex, since vertices can be different in type, 
     * name should provide information to read this vertex easily.
     * E.g. name can be: A1, Sheet1!A1, ModelX!A1, ModelX!PropertyName, +, *, SUM, COS, IF, =, etc.  
     */
    String name();

    /**
     * Container for vertex formula. It may not be empty, on every level of execution graph
     * there should be some kind of a expression to evaluate.
     * E.g. formula can be: 1, A1, A1+A2, A1+1, IF(A1=A2,A3,A4), etc.
     */
    ICellFormulaExpression formula();

    /**
     * Container for vertex value. Value can be in different types,
     * but it is always some end-value which can be treated as result.
     */
    ICellValue value();

    /**
     * Type of vertex, see {@link Type} for details
     */
    Type type();

    /**
     * Any kind of Id for source object of this vertex.
     * E.g. Id of a spreadsheet if vertex is a cell.
     * Major idea here is that using this Id you can get the original object source.
     */
    Object sourceObjectId();

    /**
     * Vertex type. Since Vertex in Execution graph may represent different type of data,
     * it needs to be described.
     * 
     * @author rroschin
     *
     */
    public static enum Type {
        
        /**
         * Cell with value. This value is static data, not a formula or reference.
         * It cannot be evaluated, only accessed in static way, meaning getting this value will not produce 
         * any additional operations.
         * E.g. if cell A1 contains value 5, type of this cell's vertex will be VALUE.
         */
        CELL_WITH_VALUE,
        /**
         * Cell with reference to other cell. Only applicable for direct cell references (or ranges).
         * E.g. if cell A1 contains value =B1, type of this cell's vertex will be REFERENCE.
         */
        CELL_WITH_REFERENCE,
        /**
         * Cell with some formula inside.
         * E.g. if cell A1 contains value = 5+A1, this is a cell with a formula.
         */
        CELL_WITH_FORMULA,
        /**
         * Range of cells with values. E.g. A1:B1
         */
        RANGE,
        /**
         * Part of formula which is not a cell reference ot function. Any operator supported by Excel, but a function.
         * E.g. +, -, *, /  
         */
        OPERATOR,
        /**
         * Part of formula which is not a cell reference or operator. Applicable for functions only, except IF.
         * E.g. SUM, COS, COUNT, etc. 
         */
        FUNCTION,
        /**
         * IF and IF-like (COUNTIF, SUMIF) functions.
         */
        IF,
        /**
         * Constant coefficient not related to any cell.
         * E.g. in SUM(2,B1,3) 2,3 are CONSTANT_VALUEs
         */
        CONSTANT_VALUE,
        /**
         * Empty cell (does not contains formula, reference or constant coefficient)
         */
        EMPTY_CELL;
        
        public static boolean isFunction(Type type) {
            if (type == null) { throw new IllegalArgumentException("Type argument cannot be null"); }
            
            return type == OPERATOR ||
                   type == IF ||
                   type == FUNCTION;
        }
        
        public static boolean isCell(Type type) {
            if (type == null) { throw new IllegalArgumentException("Type argument cannot be null"); }
            
            return type == CELL_WITH_FORMULA ||
                   type == CELL_WITH_REFERENCE ||
                   type == CELL_WITH_VALUE ||
                   type == RANGE;
        }
    }
}
