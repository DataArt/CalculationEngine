package com.dataart.spreadsheetanalytics.functions.poi.data;

import static java.util.Arrays.asList;
import static org.apache.poi.common.execgraph.ExecutionGraphBuilderUtils.coerceValueTo;
import static org.apache.poi.common.execgraph.ExecutionGraphBuilderUtils.valueToValueEval;
import static org.apache.poi.ss.formula.eval.OperandResolver.getSingleValue;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

import org.apache.poi.ss.formula.OperationEvaluationContext;
import org.apache.poi.ss.formula.TableEval;
import org.apache.poi.ss.formula.eval.ErrorEval;
import org.apache.poi.ss.formula.eval.EvaluationException;
import org.apache.poi.ss.formula.eval.RefEval;
import org.apache.poi.ss.formula.eval.StringEval;
import org.apache.poi.ss.formula.eval.ValueEval;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.dataart.spreadsheetanalytics.api.engine.ExternalServices;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.api.model.IDsCell;
import com.dataart.spreadsheetanalytics.api.model.IDsRow;
import com.dataart.spreadsheetanalytics.api.model.ILazyDataSet.Parameters;
import com.dataart.spreadsheetanalytics.engine.DataSetScope;
import com.dataart.spreadsheetanalytics.functions.poi.CustomFunction;
import com.dataart.spreadsheetanalytics.functions.poi.FunctionMeta;

@FunctionMeta("QUERY")
public class QueryFunction implements CustomFunction {
    private static final Logger log = LoggerFactory.getLogger(QueryFunction.class);
    
    protected ExternalServices external = ExternalServices.INSTANCE;

    @Override
    public ValueEval evaluate(ValueEval[] args, OperationEvaluationContext ec) {

        log.debug("In evaluate() of QUERY function. Args = {}", Arrays.toString(args));

        if (!(args[0] instanceof StringEval) && !(args[0] instanceof RefEval)) {
            log.warn("1st parameter in QUERY function must be a LazyDataSet name [String or Cell Reference].");
            return ErrorEval.VALUE_INVALID;
        }

        if (!(args[1] instanceof StringEval) && !(args[1] instanceof RefEval)) {
            log.warn("2d parameter in QUERY function must be a new (local) DataSet name [String or Cell Reference].");
            return ErrorEval.VALUE_INVALID;
        }

        String execDataSet;
        try { execDataSet = (String) coerceValueTo(getSingleValue(args[0], ec.getRowIndex(), ec.getColumnIndex())); }
        catch (EvaluationException e) {
            log.error(String.format("Cannot get the value of LazyDataSet name: %s", args[0]), e);
            return ErrorEval.VALUE_INVALID;
        }
        
        String cachedDataSet;
        try { cachedDataSet = (String) coerceValueTo(getSingleValue(args[1], ec.getRowIndex(), ec.getColumnIndex())); }
        catch (EvaluationException e) {
            log.error(String.format("Cannot get the value of local DataSet to save name: %s", args[1]), e);
            return ErrorEval.VALUE_INVALID;
        }

        List<ValueEval> queryArgs = new ArrayList<>(asList(args));
        /* remove DS name (1st arg) and remove local Ds name (2d arg) */
        queryArgs.remove(0);
        queryArgs.remove(0);
        
        List<Object> execParams = new LinkedList<>();
        try {
            for (ValueEval v : CustomFunction.prepareQueryArgs(queryArgs))
                { execParams.add(coerceValueTo(getSingleValue(v, ec.getRowIndex(), ec.getColumnIndex()))); }
            
        } catch (Exception e) {
            log.error("Error while resolving input arguments for QUERY function.", e);
            return ErrorEval.VALUE_INVALID;
        }

        log.info("QUERY function for DataModel: {}, Local DataSet: {}, Resolved parameters: {}", execDataSet, cachedDataSet, execParams);

        try {
            IDataSet dset = external.getDataSetStorage().getDataSet(execDataSet, new Parameters(execParams));
            
            dset.name(cachedDataSet);
            external.getDataSetStorage().saveDataSet(dset, DataSetScope.LOCAL);

            return toTableEval(dset);
        } catch (Exception e) {
            log.error("No LazyDataSet with name {} is found to execute QUERY in.", execDataSet);
            return ErrorEval.NA;
        }
    }

    private static TableEval toTableEval(IDataSet dset) {
        TableEval table = new TableEval(0, 0, dset.length() - 1, dset.width() - 1);
        
        List<List<ValueEval>> rows = new ArrayList<>(dset.length());
        
        for (IDsRow row : dset) {
            List<ValueEval> cells = new ArrayList<>(dset.width());
            for (IDsCell cell : row) { cells.add(valueToValueEval(cell.value())); }
            rows.add(cells);
        }
        
        table.setValues(rows);
        return table;
    }

}
