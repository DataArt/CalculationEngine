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
 * Row representation in a {@link IDataSet}.
 * It is a container for {@link IDsCell}s.
 * 
 * Allows to add/get cells and iterate over cells.
 */
public interface IDsRow extends Iterable<IDsCell> {

    /** Adds a new cell to the end. */
    IDsCell addCell();

    /** Adds a new cell to the given column. */
    IDsCell addCell(int cellIdx);

    /** Returns a cell at the given column. */
    IDsCell getCell(int cellIdx);

    /** This row index. */
    int index();

    /** Number of cells is a row. */
    int cellCount();

    /** Stream support for Row */
    Stream<IDsCell> stream();
}
