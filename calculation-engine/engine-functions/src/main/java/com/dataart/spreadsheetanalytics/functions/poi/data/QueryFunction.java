package com.dataart.spreadsheetanalytics.functions.poi.data;

import static org.apache.poi.common.execgraph.ExecutionGraphBuilderUtils.coerceValueTo;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.apache.poi.common.execgraph.ExecutionGraphBuilderUtils;
import org.apache.poi.ss.formula.OperationEvaluationContext;
import org.apache.poi.ss.formula.TableEval;
import org.apache.poi.ss.formula.eval.ErrorEval;
import org.apache.poi.ss.formula.eval.OperandResolver;
import org.apache.poi.ss.formula.eval.StringEval;
import org.apache.poi.ss.formula.eval.ValueEval;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.dataart.spreadsheetanalytics.api.engine.ExternalServices;
import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.api.model.IDsCell;
import com.dataart.spreadsheetanalytics.api.model.IDsRow;
import com.dataart.spreadsheetanalytics.api.model.ILazyDataSet.Parameters;
import com.dataart.spreadsheetanalytics.engine.DataSetScope;
import com.dataart.spreadsheetanalytics.functions.poi.CustomFunction;
import com.dataart.spreadsheetanalytics.functions.poi.FunctionMeta;

@FunctionMeta("QUERY")
public class QueryFunction implements CustomFunction {
    
    private final static Logger log = LoggerFactory.getLogger(QueryFunction.class);
    
    protected ExternalServices external = ExternalServices.INSTANCE;
    
    public QueryFunction() {}

    @Override
    public ValueEval evaluate(ValueEval[] args, OperationEvaluationContext ec) {

        log.debug("In evaluate() of QUERY function. Args = {}", Arrays.toString(args));

        if (!(args[0] instanceof StringEval)) {
            log.warn("1st parameter in QUERY function must be a ExecutableDataSet name [String].");
            return ErrorEval.VALUE_INVALID;
        }

        if (!(args[1] instanceof StringEval)) {
            log.warn("2d parameter in QUERY function must be a new (local) DataSet name [String].");
            return ErrorEval.VALUE_INVALID;
        }

        String execDataSet = ((StringEval) args[0]).getStringValue();
        String cachedDataSet = ((StringEval) args[1]).getStringValue();

        List<ValueEval> queryArgs = new ArrayList<>(Arrays.asList(args));
        queryArgs.remove(0);
        queryArgs.remove(0);

        List<Object> execParams = new ArrayList<>(queryArgs.size());

        for (ValueEval v : queryArgs) {
            try { execParams.add(coerceValueTo(OperandResolver.getSingleValue(v, ec.getRowIndex(), ec.getColumnIndex()))); }
            catch (Exception e) {
                log.warn(String.format("Error while resolving input arguments for QUERY function. Argument: %s", v), e);
                return ErrorEval.VALUE_INVALID;
            }
        }
        
        log.info("QUERY function for DataModel: {}, Local DataSet: {}, Resolved parameters: {}", execDataSet, cachedDataSet, execParams);

        try {
            IDataSet dset = external.getDataSetStorage().getDataSet(execDataSet, new Parameters(execParams));
            
            dset.name(cachedDataSet);
            external.getDataSetStorage().saveDataSet(dset, DataSetScope.LOCAL);

            return toTableEval(dset);
        } catch (Exception e) {
            log.error("No QueryDataModel with name {} is found to execute SQL QUERY in.", execDataSet);
            return ErrorEval.NA;
        }
        
    }

    private static TableEval toTableEval(IDataSet dset) {
        TableEval table = new TableEval(0, 0, dset.length() - 1, dset.width() - 1);
        
        List<List<ValueEval>> rows = new ArrayList<>(dset.length());
        
        for (IDsRow row : dset) {
            List<ValueEval> cells = new ArrayList<>(dset.width());
            for (IDsCell cell : row) cells.add(ExecutionGraphBuilderUtils.valueToValueEval(cell.value()));
            rows.add(cells);
        }
        
        table.setValues(rows);
        return table;
    }

    @Override public void setEvaluator(IEvaluator evaluator) { }

}
