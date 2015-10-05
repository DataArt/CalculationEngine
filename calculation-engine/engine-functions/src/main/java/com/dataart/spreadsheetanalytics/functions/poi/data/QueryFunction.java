package com.dataart.spreadsheetanalytics.functions.poi.data;

import static org.apache.poi.common.execgraph.ExecutionGraphBuilderUtils.coerceValueTo;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

import org.apache.poi.ss.formula.OperationEvaluationContext;
import org.apache.poi.ss.formula.eval.ErrorEval;
import org.apache.poi.ss.formula.eval.NumberEval;
import org.apache.poi.ss.formula.eval.OperandResolver;
import org.apache.poi.ss.formula.eval.StringEval;
import org.apache.poi.ss.formula.eval.ValueEval;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.engine.DataSetScope;
import com.dataart.spreadsheetanalytics.engine.ExternalServices;
import com.dataart.spreadsheetanalytics.functions.poi.CustomFunction;
import com.dataart.spreadsheetanalytics.functions.poi.FunctionMeta;

@FunctionMeta("QUERY")
public class QueryFunction implements CustomFunction {
    
    private final static Logger log = LoggerFactory.getLogger(QueryFunction.class);
    
    protected ExternalServices external = ExternalServices.INSTANCE;
    protected IEvaluator evaluator;
    
    public QueryFunction() {}

    @Override
    public ValueEval evaluate(ValueEval[] args, OperationEvaluationContext ec) {

        log.debug(String.format("In evaluate() of QUERY function. Args = %s", Arrays.toString(args)));
        
        if (!(args[0] instanceof StringEval)) {
            log.warn("1st parameter in QUERY function must be a QueryDataModel name [String].");
            return ErrorEval.VALUE_INVALID;
        }
        
        if (!(args[1] instanceof StringEval)) {
            log.warn("2d parameter in QUERY function must be a DS name [String].");
            return ErrorEval.VALUE_INVALID;
        }
        
        String queryDataModel = ((StringEval) args[0]).getStringValue();
        String cachedDataSet = ((StringEval) args[1]).getStringValue();
        
        List<ValueEval> queryArgs = new LinkedList<>(Arrays.asList(args));
        queryArgs.remove(0);
        queryArgs.remove(0);
        
        List<Object> queryParams = new ArrayList<>(queryArgs.size());

        for (ValueEval v : queryArgs) {
            try { queryParams.add(coerceValueTo(OperandResolver.getSingleValue(v, ec.getRowIndex(), ec.getColumnIndex()))); }
            catch (Exception e) {
                log.warn(String.format("Error while resolving input arguments for QUERY function. Argument: %s", v), e);
                return ErrorEval.VALUE_INVALID;
            }
        }
        
        log.info("QUERY function for DataModel: {}, Local DataSet: {}, Resolved parameters: {}", queryDataModel, cachedDataSet, queryParams);

        try {
            IDataSet dset = external.getSqlDataSourceHub().executeQuery(queryDataModel, queryParams);
            
            dset.name(cachedDataSet);

            external.getDataSetStorage().saveDataSet(dset, DataSetScope.LOCAL);

            return new NumberEval(dset.length()); /*TODO: Table to return*/
        } catch (Exception e) {
            return ErrorEval.NA;
        }

    }

    @Override public void setEvaluator(IEvaluator evaluator) { this.evaluator = evaluator; }

}
