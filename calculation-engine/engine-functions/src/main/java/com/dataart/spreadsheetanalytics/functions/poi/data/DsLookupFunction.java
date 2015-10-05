package com.dataart.spreadsheetanalytics.functions.poi.data;

import static org.apache.poi.common.execgraph.ExecutionGraphBuilderUtils.coerceValueTo;
import static org.apache.poi.common.execgraph.ExecutionGraphBuilderUtils.valueToValueEval;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.poi.ss.formula.ArrayEval;
import org.apache.poi.ss.formula.OperationEvaluationContext;
import org.apache.poi.ss.formula.eval.BlankEval;
import org.apache.poi.ss.formula.eval.ErrorEval;
import org.apache.poi.ss.formula.eval.StringEval;
import org.apache.poi.ss.formula.eval.StringValueEval;
import org.apache.poi.ss.formula.eval.ValueEval;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.api.model.IDsCell;
import com.dataart.spreadsheetanalytics.api.model.IDsRow;
import com.dataart.spreadsheetanalytics.engine.ExternalServices;
import com.dataart.spreadsheetanalytics.functions.poi.CustomFunction;
import com.dataart.spreadsheetanalytics.functions.poi.FunctionMeta;

@FunctionMeta(value = "DSLOOKUP")
public class DsLookupFunction implements CustomFunction {
    private final static Logger log = LoggerFactory.getLogger(DsLookupFunction.class);
    
    protected ExternalServices external = ExternalServices.INSTANCE;
    protected IEvaluator evaluator;

    public DsLookupFunction() {}

    @Override
    public ValueEval evaluate(ValueEval[] args, OperationEvaluationContext ec) {

        if (args.length < 4 || args.length % 2 != 0) {
            log.warn("The number of input arguments in DSLOOKUP function should be even and more than 4");
            return ErrorEval.VALUE_INVALID;
        }
        if (!(args[0] instanceof StringValueEval)) {
            log.warn("The first input argument in DSLOOKUP function should be string representing the dataset name");
            return ErrorEval.VALUE_INVALID;
        }
        if (!(args[args.length - 1] instanceof StringValueEval)) {
            log.warn("The last input argument in DSLOOKUP function shoud be string representing the name of column which values should be returned");
            return ErrorEval.VALUE_INVALID;
        }
        
        String datasetName = ((StringEval) args[0]).getStringValue();
        String columnName = ((StringEval) args[args.length - 1]).getStringValue();
        
        int columnIndex = -1;

        Map<Object, ValueEval> pairs = new HashMap<>();

        for (int i = 1; i < args.length - 1; i += 2) {
            
            if (!(args[i] instanceof StringEval)) {
                log.warn("The "+i+"th input argument in DSLOOKUP function should be the string representing the name of condition field");
                return ErrorEval.VALUE_INVALID;
            }
            
            String key = ((StringEval) args[i]).getStringValue();
            pairs.put(key, args[i + 1]);
        }

        IDataSet dataSet = external.getDataSetStorage().getDataSet(datasetName);

        if (!dataSet.hasNext()) {
            log.warn("The spreadsheet shoud have at least 2 rows to run DSLOOKUP function");
            return ErrorEval.VALUE_INVALID;
        }
        IDsRow titleRow = dataSet.next();
        Map<Integer, Object> indexToValue = new HashMap<>();

        for (IDsCell cell : titleRow) {
            Object value = cell.value();
            
            if (pairs.containsKey(value)) { indexToValue.put(cell.index(), pairs.get(value)); }

            if (value.equals(columnName)) { columnIndex = cell.index(); }
        }
        
        ValueEval result = BlankEval.instance;
        
        List<ValueEval> fetchedValues = fetchValues(dataSet, indexToValue, columnIndex);
        int size = fetchedValues.size();
        if (size != 0) {
                result = fetchedValues.get(0);
        }

        return result;
    }

    private List<ValueEval> fetchValues(IDataSet set, Map<Integer, Object> where, int columnIndex) {

        List<ValueEval> found = new ArrayList<>();
        
        for (IDsRow row : set) {
            boolean allFieldsMatch = true;
            int allFieldsPresent = where.size();
            
            for (IDsCell cell : row) {

                if (where.containsKey(cell.index())) {
                    allFieldsPresent--;
                    Object extValue = coerceValueTo(where.get(cell.index()));
                    Object intValue = cell.value();

                    if (!intValue.equals(extValue)) { allFieldsMatch = false; break; }
                }
            }
            
            if (!where.isEmpty() && allFieldsPresent == 0 && allFieldsMatch) {
                found.add(valueToValueEval(row.cells().get(columnIndex - 1).value()));
                break; // collecting only the first matching record according to product owner requirements
            }
        }

        return found;
    }

    @Override public void setEvaluator(IEvaluator evaluator) { this.evaluator = evaluator; }
}
