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

import java.util.stream.Stream;

/**
 * Basic interface to represent a spreadsheet with data only.
 * It looks like a result of a SELECT query from RBD.
 * Uses the same concept (spreadsheet), but can contains only values, not formulas.
 * Cannot be evaluated, only sorted, searched for, etc.
 * Cannot contain empty rows, but can contain cell with empty values.
 */
public interface IDataSet extends Iterable<IDsRow> {

    /** The Id of this model. Should be unique in DataModel storage. */
    IDataModelId getDataModelId();
    
    /** Sets the Id of this model. Should be unique in DataModel storage. */
    void setDataModelId(IDataModelId dataModelId);
    
    /** Name of this model. Not required to be unique, but highly recommended. */
    String getName();
    
    /** Name of this DataModel can always be changed. */
    void setName(String name);

    /** Number of rows in this DataSet. */
    int rowCount();
    
    /** Adds a new Row to the end. */
    IDsRow addRow();
    
    /** Adds a new Row to the given row index. */
    IDsRow addRow(int rowIdx);
    
    /** Gets a Row from the given row index. */
    IDsRow getRow(int rowIdx);

    /** Stream support for DataSet */
    Stream<IDsRow> stream();
}
