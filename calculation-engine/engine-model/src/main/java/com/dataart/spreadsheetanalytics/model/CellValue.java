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

import org.apache.poi.ss.formula.eval.RefEval;

import com.dataart.spreadsheetanalytics.api.model.ICellValue;

/**
 * Basic implementation of {@link ICellValue}.
 * It is a simple wrapper for {@link Object} (represents the value).
 */
public class CellValue implements ICellValue {

    protected final Object value;

    public CellValue(Object value) { 
        if (value instanceof RefEval) {
            throw new IllegalArgumentException("Value of CellValue must not be a POI object.");
        }
        this.value = value; 
    }

    @Override
    public Object get() { return value; }

    @Override
    public String toString() {
        return value == null ? "null" : value.toString();
    }

}
