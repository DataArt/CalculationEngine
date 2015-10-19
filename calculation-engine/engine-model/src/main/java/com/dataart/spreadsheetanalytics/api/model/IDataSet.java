/*
Copyright 2015 DataArt, Inc.

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

import java.util.Iterator;
import java.util.List;

/**
 * Basic interface to represent a spreadsheet.
 * Uses the same concept (spreadsheet), but can contains only values, not formulas.
 * After giving any instance of this type to Evaluator the resuilt will be the same (equal spreadsheets).
 * 
 * Known subinterface: {@link IDataModel}.
 */
public interface IDataSet extends Iterable<IDsRow>, Iterator<IDsRow> {

    IDataModelId dataModelId();
    
    String name();
    
    void name(String name);

    int length();
    
    int width();

    List<IDsRow> rows();

}
