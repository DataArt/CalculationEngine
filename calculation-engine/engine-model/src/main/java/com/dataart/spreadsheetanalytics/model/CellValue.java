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
     * Util toString with some additional logic in case the value is of type String or Number. 
     */
    public static String fromCellValueToString(ICellValue value) {
        if (value == null) { return ""; }

        Object v = value.get();

        if (v == null) return "";

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
