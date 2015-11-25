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
package com.dataart.spreadsheetanalytics.model;

import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDsCell;

public class DsCell implements IDsCell {

    protected final int index;
    protected ICellValue value;

    public DsCell(int cellIndex) {
        this.index = cellIndex;
    }

    @Override public ICellValue value() { return this.value; }
    public void value(ICellValue value) { this.value = value; }

    @Override public int index() { return this.index; }

    @Override
    public String toString() {
        return value == null ? "null" : value.toString();
    }

}
