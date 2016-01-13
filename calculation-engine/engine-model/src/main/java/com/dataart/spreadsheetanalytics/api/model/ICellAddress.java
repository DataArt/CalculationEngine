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

import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.CellAddress;

/**
 * Represents Cell's address in a workbook.
 * Using this object it should be possible to find the original cell, get it's value, workbook, etc.
 * {@link IA1Address} is more like a format to describe address. 
 * This class is a link to actual address in some workbook.
 * 
 * Basic implementations: {@link CellAddress}, {@link A1Address}
 */
public interface ICellAddress {

    /**
     * Link to {@link A1Address} address format.
     */
    IA1Address a1Address();

    /**
     * Link to {@link IDataModelId}.
     */
    IDataModelId getDataModelId();

}
