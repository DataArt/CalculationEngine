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
package com.dataart.spreadsheetanalytics.model;

import org.apache.poi.ss.formula.eval.BlankEval;
import org.apache.poi.ss.formula.eval.ErrorEval;
import org.apache.poi.ss.formula.eval.NumberEval;
import org.apache.poi.ss.formula.eval.StringValueEval;

import com.dataart.spreadsheetanalytics.api.model.ICellValue;

/**
 * Basic implementation of {@link ICellValue}.
 * It is a simple wrapper for {@link Object} (represents the value).
 */
public class CellValue implements ICellValue {

    protected final Object value;

    public CellValue(Object value) { this.value = value; }

    @Override
    public Object get() { return value; }

    /**
     * TODO: check this method - it shpuld be removed, since all values in CellValue is Object )String, Integer) - not POI's
     * Util toString with some additional logic in case the value is of type String or Number. 
     */
    public static String fromCellValueToString(ICellValue value) {
        if (value == null) { return ""; }

        Object v = value.get();

        if (v == null) { return ""; }

        if (v instanceof StringValueEval) {
            return ((StringValueEval) v).getStringValue();
        } else if (v instanceof NumberEval) {
            return Double.toString(((NumberEval) v).getNumberValue());
        } else if (v instanceof ErrorEval) {
            return ((ErrorEval) v).getErrorString();
        } else if (v instanceof BlankEval) {
            return "";
        }

        return v.toString();
    }

    @Override
    public String toString() {
        return value == null ? "null" : value.toString();
    }

}
