package com.dataart.spreadsheetanalytics.engine;

import static org.apache.poi.common.execgraph.ExecutionGraphBuilderUtils.coerceValueEvalToCellValue;

import org.apache.poi.ss.formula.eval.ErrorEval;
import org.apache.poi.ss.formula.eval.ValueEval;
import org.apache.poi.ss.usermodel.Cell;

import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.model.CellValue;

public class PoiValueConverters {

    public static ICellValue resolveCellValue(org.apache.poi.ss.usermodel.CellValue poiValue) {
        if (poiValue == null) {
            return CellValue.BLANK;
        }

        switch (poiValue.getCellType()) {
        case Cell.CELL_TYPE_STRING: {
            return CellValue.from(poiValue.getStringValue());
        }
        case Cell.CELL_TYPE_NUMERIC: {
            return CellValue.from(Double.valueOf(poiValue.getNumberValue()));
        }
        case Cell.CELL_TYPE_BOOLEAN: {
            return CellValue.from(Boolean.valueOf(poiValue.getBooleanValue()));
        }
        case Cell.CELL_TYPE_ERROR: {
            return CellValue.from(ErrorEval.valueOf(poiValue.getErrorValue()).getErrorString());
        }
        case Cell.CELL_TYPE_FORMULA: {
            throw new IllegalStateException("Result of evaluation cannot be a formula.");
        }
        case Cell.CELL_TYPE_BLANK:
        default: {
            return CellValue.BLANK;
        }
        }
    }

    public static ICellValue resolveValueEval(ValueEval valueEval) {
        return resolveCellValue(coerceValueEvalToCellValue(valueEval));
    }

}
