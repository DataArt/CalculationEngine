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

import com.dataart.spreadsheetanalytics.model.PoiDataModel;

/**
 * Representation of typical spreadsheet.
 * Can contain formulas and values.
 * Can be evaluated using Evaluator.
 * 
 * Basic implementation: {@link PoiDataModel}.
 */
public interface IDataModel extends Iterable<IDmRow> {

    IDataModelId dataModelId();
    
    String name();
    
    void name(String name);

    int length();
    
    /**
     * Does replacement of cell with particular address with provided value.
     * 
     * @param address Address to replace value at
     * @param value New value to replace the old one 
     */
    void replaceCellValue(ICellAddress address, ICellValue value);
    
    void setRow(int row, IDmRow r);

    IDmRow getRow(int row);

}
