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
package com.dataart.spreadsheetanalytics.functions.poi.data;

import static org.apache.poi.common.fork.ExecutionGraphBuilderUtils.coerceValueTo;
import static org.apache.poi.common.fork.ExecutionGraphBuilderUtils.valueToValueEval;
import static org.apache.poi.ss.formula.eval.OperandResolver.getSingleValue;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import javax.cache.Cache;

import org.apache.poi.ss.formula.OperationEvaluationContext;
import org.apache.poi.ss.formula.eval.ErrorEval;
import org.apache.poi.ss.formula.eval.EvaluationException;
import org.apache.poi.ss.formula.eval.RefEval;
import org.apache.poi.ss.formula.eval.StringEval;
import org.apache.poi.ss.formula.eval.StringValueEval;
import org.apache.poi.ss.formula.eval.ValueEval;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.dataart.spreadsheetanalytics.api.engine.DataSetAccessor;
import com.dataart.spreadsheetanalytics.api.engine.ExternalServices;
import com.dataart.spreadsheetanalytics.api.model.CustomFunctionMeta;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.ICustomFunction;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.api.model.IDsCell;
import com.dataart.spreadsheetanalytics.api.model.IDsRow;
import com.dataart.spreadsheetanalytics.engine.DataSetOptimisationsCache;
import com.dataart.spreadsheetanalytics.engine.DataSetOptimisationsCache.DsLookupParameters;

/**
 * https://github.com/DataArt/CalculationEngine/wiki/Custom-Functions-List-and-Description#dslookup
 */
@CustomFunctionMeta(value = "DSLOOKUP")
public class DsLookupFunction implements ICustomFunction {
    private static final Logger log = LoggerFactory.getLogger(DsLookupFunction.class);
    
    protected ExternalServices external = ExternalServices.INSTANCE;
    
    @Override
    public ValueEval evaluate(ValueEval[] args, OperationEvaluationContext ec) {

        log.debug("In evaluate() of DSLOOKUP function. Args = {}", Arrays.toString(args));
        
        if (args.length < 4 || args.length % 2 != 0) {
            log.warn("The number of input arguments of DSLOOKUP function should be even and no less than 4.");
            return ErrorEval.VALUE_INVALID;
        }
        if (!(args[0] instanceof StringValueEval) && !(args[0] instanceof RefEval)) {
            log.warn("The first input argument of DSLOOKUP function should be a string (or a reference to a cell) with a dataset name.");
            return ErrorEval.VALUE_INVALID;
        }
        if (!(args[args.length - 1] instanceof StringValueEval) && !(args[args.length - 1] instanceof RefEval)) {
            log.warn("The last input argument of DSLOOKUP function should be a string (or a reference to a cell) with a name of a column which values should be returned.");
            return ErrorEval.VALUE_INVALID;
        }
        
        String datasetName;
        try { datasetName = (String) coerceValueTo(getSingleValue(args[0], ec.getRowIndex(), ec.getColumnIndex())); }
        catch (EvaluationException e) {
            log.error(String.format("Cannot get the value of DataSet name: %s", args[0]), e);
            return ErrorEval.VALUE_INVALID;
        }
        
        String columnName;
        try { columnName = (String) coerceValueTo(getSingleValue(args[args.length - 1], ec.getRowIndex(), ec.getColumnIndex())); }
        catch (EvaluationException e) {
            log.error(String.format("Cannot get the value of target column name: %s", args[args.length - 1]), e);
            return ErrorEval.VALUE_INVALID;
        }
        
        Map<Object, ValueEval> pairs = new HashMap<>();

        for (int i = 1; i < args.length - 1; i += 2) {
            
            if (!(args[i] instanceof StringEval) && !(args[i] instanceof RefEval)) {
                log.warn("The {}th input argument in DSLOOKUP function should be a string (or a reference to a cell) with a name of a condition field", i);
                return ErrorEval.VALUE_INVALID;
            }
            
            try {
                String key = (String) coerceValueTo(getSingleValue(args[i], ec.getRowIndex(), ec.getColumnIndex()));
                ValueEval val = getSingleValue(args[i + 1], ec.getRowIndex(), ec.getColumnIndex());
                pairs.put(key, val);
            } catch (EvaluationException e) {
                log.error(String.format("Cannot get the value of matcher column: %s", args[i]), e);
                return ErrorEval.VALUE_INVALID;
            }
        }

        DataSetAccessor dataSets = (DataSetAccessor) ec.getCustomEvaluationContext().get(DataSetAccessor.class);
        if (dataSets == null) { dataSets = this.external.getDataSetAccessor(); }
        
        IDataSet dataSet;
        try { dataSet = dataSets.get(datasetName); }
        catch (Exception e) {
            log.error("The DataSet with name = {} cannot be found\retrived from DataSet storage.", datasetName);
            return ErrorEval.NA;
        }

        Iterator<IDsRow> rowrator = dataSet.iterator();
        if (!rowrator.hasNext()) {
            log.warn("The spreadsheet shoud have at least 2 rows to run DSLOOKUP function");
            return ErrorEval.VALUE_INVALID;
        }

        int columnIndex = -1;
        IDsRow titleRow = rowrator.next();
        Map<Integer, Object> indexToValue = new HashMap<>();

        for (IDsCell cell : titleRow) {
            ICellValue value = cell.getValue();
            
            if (pairs.containsKey(value.get())) { indexToValue.put(cell.index(), pairs.get(value.get())); }

            if (columnName.equals(value.get())) { columnIndex = cell.index(); }
        }
        
        if (columnIndex < 0) {
            log.warn("No such column to retreive value from is found: {}.", columnName);
            return ErrorEval.VALUE_INVALID;
        }

        if (indexToValue.isEmpty()) {
            log.warn("No filter columns are found.");
            return ErrorEval.VALUE_INVALID;
        }
        
        DsLookupParameters parameters = new DsLookupParameters(dataSet.getName(), indexToValue, columnIndex);
        List<ValueEval> fetchedValues = fetchValuesWithOptimisations(parameters, ec);
        
        if (fetchedValues == null) {
            fetchedValues = fetchValuesWithFullScan(dataSet, indexToValue, columnIndex);
            
            updateOptimisationsCache(parameters, dataSet, fetchedValues, ec);
        }

        //This is per PO decision: DSLOOKUP should return only one value - first found.
        return fetchedValues.isEmpty() ? ErrorEval.NA : fetchedValues.get(0);
    }

    protected List<ValueEval> fetchValuesWithFullScan(IDataSet set, Map<Integer, Object> where, int columnIndex) {

        List<ValueEval> found = new ArrayList<>();
        
        for (IDsRow row : set) {
            boolean allFieldsMatch = true;
            int allFieldsPresent = where.size();
            
            for (Entry<Integer, Object> whereColumn : where.entrySet()) {
                IDsCell cell = row.getCell(whereColumn.getKey());
                
                if (cell != null) {
                    allFieldsPresent--;
                    Object extValue = coerceValueTo(whereColumn.getValue());
                    /* Such a strange conversion because of Number types - everything is Double in POI */
                    Object intValue = coerceValueTo(valueToValueEval(cell.getValue().get()));

                    if (!intValue.equals(extValue)) { allFieldsMatch = false; break; }
                }
            }
            
            if (allFieldsPresent == 0 && allFieldsMatch) {
                found.add(valueToValueEval(row.getCell(columnIndex).getValue().get()));
                break; // collecting only the first matching record according to product owner requirements
            }
        }

        return found;
    }
    
    protected List<ValueEval> fetchValuesWithOptimisations(DsLookupParameters parameters, OperationEvaluationContext ec) {
        DataSetOptimisationsCache caches = (DataSetOptimisationsCache) ec.getCustomEvaluationContext().get(DataSetOptimisationsCache.class);
        if (caches == null) { caches = this.external.getDataSetOptimisationsCache(); }
        
        Cache<DsLookupParameters, List> cache = caches.getDataSetToDsLookupParameters();
       
        if (cache.containsKey(parameters)) { return cache.get(parameters); }

        return null;
    }


    protected void updateOptimisationsCache(DsLookupParameters parameters, IDataSet dataSet, List<ValueEval> fetchedValues, OperationEvaluationContext ec) {
        if (fetchedValues == null || parameters == null) { return; }
        
        DataSetOptimisationsCache caches = (DataSetOptimisationsCache) ec.getCustomEvaluationContext().get(DataSetOptimisationsCache.class);
        if (caches == null) { caches = this.external.getDataSetOptimisationsCache(); }
        
        Cache<DsLookupParameters, List> cache = caches.getDataSetToDsLookupParameters();
        
        cache.put(parameters, fetchedValues);
    }

}
