package com.dataart.spreadsheetanalytics.functions.poi.data;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.poi.common.execgraph.ExecutionGraphBuilderUtils;
import org.apache.poi.ss.formula.ArrayEval;
import org.apache.poi.ss.formula.OperationEvaluationContext;
import org.apache.poi.ss.formula.eval.ErrorEval;
import org.apache.poi.ss.formula.eval.StringEval;
import org.apache.poi.ss.formula.eval.StringValueEval;
import org.apache.poi.ss.formula.eval.ValueEval;

import com.dataart.spreadsheetanalytics.api.engine.IDataProvider;
import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.api.model.IDsCell;
import com.dataart.spreadsheetanalytics.api.model.IDsRow;
import com.dataart.spreadsheetanalytics.functions.poi.CustomFunction;
import com.dataart.spreadsheetanalytics.functions.poi.FunctionMeta;

@FunctionMeta(value = "DSLOOKUP")
public class DsLookup implements CustomFunction {

    protected IDataProvider dataProvider;
    protected IEvaluator evaluator;

    public DsLookup() {
    }

    @Override
    public ValueEval evaluate(ValueEval[] args, OperationEvaluationContext ec) {

        if (args.length < 4) {
            return ErrorEval.VALUE_INVALID;
        }

        if (args.length % 2 != 0) {
            return ErrorEval.VALUE_INVALID;
        }

        StringEval datasetName = null;
        StringEval columnName = null;
        int columnIndex = -1;

        Map<Object, ValueEval> pairs = new HashMap<>();

        if (args[0] instanceof StringValueEval) {
            datasetName = (StringEval) args[0];
        } else {
            return ErrorEval.VALUE_INVALID;
        }

        if (args[args.length - 1] instanceof StringValueEval) {
            columnName = (StringEval) args[args.length - 1];
        } else {
            return ErrorEval.VALUE_INVALID;
        }

        for (int i = 1; i < args.length - 1; i += 2) {
            String key = null;
            if (args[i] instanceof StringEval) {
                key = ((StringEval) args[i]).getStringValue();
            } else {
                return ErrorEval.VALUE_INVALID;
            }
            pairs.put(key, args[i + 1]);
        }

        IDataSet dataSet = dataProvider.getDataSet(datasetName.getStringValue());
        IDsRow titleRow = dataSet.next();

        Map<Integer, Object> indexToValue = new HashMap<>();

        for (IDsCell cell : titleRow) {
            Object value = cell.value();
            int index = cell.index();
            if (pairs.containsKey(value)) {
                indexToValue.put(index, pairs.get(value));
            }
            if (value.equals(columnName.getStringValue())) {
                columnIndex = cell.index();
            }
        }
        List<ValueEval> retlist = new ArrayList<>();
        while (dataSet.hasNext()) {
            IDsRow row = dataSet.next();
            validateRowAndFetchValue(row, indexToValue, retlist, columnIndex);
        }
        ArrayEval result = new ArrayEval();
        result.setValues(retlist);
        return result;
    }

    private boolean validateRowAndFetchValue(IDsRow row, Map<Integer, Object> indToVal, List<ValueEval> retlist, int columnIndex) {
        Object columnValue = null;
        for (IDsCell cell : row) {
            if (columnIndex == cell.index()) {
                columnValue = cell.value();
            }
            if (indToVal.containsKey(cell.index())) {
                Object extValue = ExecutionGraphBuilderUtils.coerceValueTo(indToVal.get(cell.index()));
                Object intValue = cell.value();
                if (!intValue.equals(extValue)) {
                    return false;
                }
            }
        }
        retlist.add(ExecutionGraphBuilderUtils.valueToValueEval(columnValue));
        return true;
    }

    @Override
    public void setDataProvider(IDataProvider dataProvider) {
        this.dataProvider = dataProvider;
    }

    @Override
    public void setEvaluator(IEvaluator evaluator) {
        this.evaluator = evaluator;
    }

}
