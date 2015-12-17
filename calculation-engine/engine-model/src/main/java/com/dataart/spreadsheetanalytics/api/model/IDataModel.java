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

import java.util.Map;
import java.util.stream.Stream;

import com.dataart.spreadsheetanalytics.model.DataModel;

/**
 * Representation of typical spreadsheet.
 * Can contain formulas and values.
 * Can be evaluated using Evaluator.
 * May be of two states: not-evaluated and evaluated. The difference is only in its cell's values.
 * If model is not evaluated - value will be empty, if it is evaluated - cell contains some value.
 * Original cell's content is present at all time.
 * 
 * Provides methods for row\cell manipulations. It is a kind of a collection represents a table.
 * 
 * Basic implementation: {@link DataModel}.
 */
public interface IDataModel extends Iterable<IDmRow> {

    /** The Id of this model. Should be unique in DataModel storage. */
    IDataModelId getDataModelId();
    
    /** Sets the Id of this model. Should be unique in DataModel storage. */
    void setDataModelId(IDataModelId dataModelId);
    
    /** Name of this model. Not required to be unique, but highly recommended. */
    String getName();
    
    /** Name of this DataModel can always be changed. */
    void setName(String name);

    /** Number of rows in this DataModel. */
    int rowCount();
    
    /** Number of first row in this sheet. */
    int getFirstRowIndex();
    
    /** Number of last row in this sheet. */
    int getLastRowIndex();
    
    /** Returns the Row at given position. Null if does not exist. */
    IDmRow getRow(int rowIdx);

    /** Returns the Row at given position (row argument of Address). Null if does not exist. */
    IDmRow getRow(ICellAddress address);

    /** Sets a Rows at given address. Replaces old if exists. Null rows are accepted. */
    void setRow(int rowIdx, IDmRow row);
        
    /** Sets a Rows at given address (row argument of address). Replaces old if exists. Null rows are accepted. */
    void setRow(ICellAddress address, IDmRow row);
    
    /** Returns the Cell at given position. Null if does not exist. */
    IDmCell getCell(int rowIdx, int cellIdx);

    /** Returns the Cell at given position. Null if does not exist. */
    IDmCell getCell(ICellAddress address);

    /** Sets the Cell at given position. Creates a new Row if Row does not exist. */
    void setCell(int rowIdx, int cellIdx, IDmCell cell);
    
    /** Sets the Cell at given position. Creates a new Row if Row does not exist. */
    void setCell(ICellAddress address, IDmCell cell);

    /** Gets String alias for CellAddress */
    String getCellAlias(ICellAddress cellAddress);
    
    /** Sets String alias for CellAddress */
    void setCellAlias(ICellAddress address, String alias);

    /** Returns all available Cell Aliases */
    Map<ICellAddress, String> getCellAliases();
    
    /** Stream support for DataModel */
    Stream<IDmRow> stream();

}
