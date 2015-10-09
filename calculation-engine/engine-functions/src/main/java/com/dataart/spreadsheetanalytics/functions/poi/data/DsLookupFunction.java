package com.dataart.spreadsheetanalytics.functions.poi.data;

import static org.apache.poi.common.execgraph.ExecutionGraphBuilderUtils.coerceValueTo;
import static org.apache.poi.common.execgraph.ExecutionGraphBuilderUtils.valueToValueEval;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.poi.ss.formula.OperationEvaluationContext;
import org.apache.poi.ss.formula.eval.ErrorEval;
import org.apache.poi.ss.formula.eval.EvaluationException;
import org.apache.poi.ss.formula.eval.OperandResolver;
import org.apache.poi.ss.formula.eval.RefEval;
import org.apache.poi.ss.formula.eval.StringEval;
import org.apache.poi.ss.formula.eval.StringValueEval;
import org.apache.poi.ss.formula.eval.ValueEval;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.dataart.spreadsheetanalytics.api.engine.ExternalServices;
import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.api.model.IDsCell;
import com.dataart.spreadsheetanalytics.api.model.IDsRow;
import com.dataart.spreadsheetanalytics.functions.poi.CustomFunction;
import com.dataart.spreadsheetanalytics.functions.poi.FunctionMeta;

@FunctionMeta(value = "DSLOOKUP")
public class DsLookupFunction implements CustomFunction {
    private final static Logger log = LoggerFactory.getLogger(DsLookupFunction.class);
    
    protected ExternalServices external = ExternalServices.INSTANCE;

    public DsLookupFunction() {}

    @Override
    public ValueEval evaluate(ValueEval[] args, OperationEvaluationContext ec) {

        if (args.length < 4 || args.length % 2 != 0) {
            log.warn("The number of input arguments in DSLOOKUP function should be even and more than 4");
            return ErrorEval.VALUE_INVALID;
        }
        if (!(args[0] instanceof StringValueEval) && !(args[0] instanceof RefEval)) {
            log.warn("The first input argument in DSLOOKUP function should be string representing the dataset name");
            return ErrorEval.VALUE_INVALID;
        }
        if (!(args[args.length - 1] instanceof StringValueEval) && !(args[args.length - 1] instanceof RefEval)) {
            log.warn("The last input argument in DSLOOKUP function shoud be string representing the name of column which values should be returned");
            return ErrorEval.VALUE_INVALID;
        }
        
        String datasetName = null;
        String columnName = null;
        try {
            datasetName = (String) coerceValueTo(OperandResolver.getSingleValue(args[0], ec.getRowIndex(), ec.getColumnIndex()));
            columnName = (String) coerceValueTo(OperandResolver.getSingleValue(args[args.length - 1], ec.getRowIndex(), ec.getColumnIndex()));
        } catch (EvaluationException e1) {
            //TODO log
            return ErrorEval.VALUE_INVALID;
        }
        
        int columnIndex = -1;

        Map<Object, ValueEval> pairs = new HashMap<>();

        for (int i = 1; i < args.length - 1; i += 2) {
            
            if (!(args[i] instanceof StringEval) && !(args[i] instanceof RefEval)) {
                log.warn("The {}th input argument in DSLOOKUP function should be the string representing the name of condition field", i);
                return ErrorEval.VALUE_INVALID;
            }
            
            try {
                String key = (String) coerceValueTo(OperandResolver.getSingleValue(args[i], ec.getRowIndex(), ec.getColumnIndex()));
                ValueEval val = OperandResolver.getSingleValue(args[i + 1], ec.getRowIndex(), ec.getColumnIndex());
                pairs.put(key, val);
            } catch (EvaluationException e) {
                //TODO log
                return ErrorEval.VALUE_INVALID;
            }
        }

        IDataSet dataSet;
        try { dataSet = external.getDataSetStorage().getDataSet(datasetName); }
        catch (Exception e) {
            log.error("The DataSet with name = {} cannot be found\retrived from DataSet storage.", datasetName);
            return ErrorEval.NA;
        }

        if (!dataSet.iterator().hasNext()) {
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
        
        List<ValueEval> fetchedValues = fetchValues(dataSet, indexToValue, columnIndex);

        //This is per PO decision: DSLOOKUP should return only one value - first found.
        return fetchedValues.isEmpty() ? ErrorEval.NA : fetchedValues.get(0);
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
                    /* Such a strange conversion because of Number types - everythin is Double in POI */
                    Object intValue = coerceValueTo(valueToValueEval(cell.value()));

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

    @Override public void setEvaluator(IEvaluator evaluator) { }
}
