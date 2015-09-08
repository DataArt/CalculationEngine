package com.dataart.spreadsheetanalytics.model;

import org.apache.poi.ss.formula.eval.NumberEval;
import org.apache.poi.ss.formula.eval.StringValueEval;

import com.dataart.spreadsheetanalytics.api.model.ICellValue;

public class CellValue implements ICellValue {

    protected final Object value;

    public CellValue(Object value) {
        this.value = value;
    }

	public static String fromCellTypeHereToString(ICellValue value, boolean appendClass) {
		if (value == null) {
			return "";
		}
		StringBuilder sb = new StringBuilder();
		Object fieldValue = value.get();
		if (fieldValue instanceof StringValueEval) {
			StringValueEval stringValue = (StringValueEval) fieldValue;
			sb.append(stringValue.getStringValue());
		} else if (fieldValue instanceof NumberEval) {
			NumberEval numValue = (NumberEval) fieldValue;
			sb.append(Double.toString(numValue.getNumberValue()));
		} else {
			sb.append(fieldValue.toString());
		}

		if (appendClass) {
			sb.append(" (").append(fieldValue.getClass().toString()).append(")");
		}
		return sb.toString();
	}

    @Override
    public Object get() { return value; }

    @Override
    public String toString() {
        return get().toString();
    }

}
