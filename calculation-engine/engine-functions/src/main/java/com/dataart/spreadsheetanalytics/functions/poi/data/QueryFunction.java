package com.dataart.spreadsheetanalytics.functions.poi.data;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

import org.apache.poi.common.execgraph.ExecutionGraphBuilderUtils;
import org.apache.poi.ss.formula.OperationEvaluationContext;
import org.apache.poi.ss.formula.eval.ErrorEval;
import org.apache.poi.ss.formula.eval.NumberEval;
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
        
        ValueEval queryStr = args[0];
        ValueEval cachedDataSetName = args[1];
        
        List<ValueEval> queryArgs = new LinkedList<>(Arrays.asList(args));
        queryArgs.remove(0);
        queryArgs.remove(0);
        
        if (!(queryStr instanceof StringEval)) {
            log.warn("1st parameter in QUERY function must be a SQL query [String].");
            return ErrorEval.VALUE_INVALID;
        }
        
        if (!(cachedDataSetName instanceof StringEval)) {
            log.warn("2d parameter in QUERY function must be a DS name [String].");
            return ErrorEval.VALUE_INVALID;
        }

        List<Object> queryParams;
        try {
            queryParams = queryArgs.stream().map(v -> ExecutionGraphBuilderUtils.coerceValueTo(v)).collect(Collectors.<Object> toList());
        } catch (RuntimeException e) {
            log.warn("Error while resolving input arguments for QUERY function.", e);
            return ErrorEval.VALUE_INVALID;
        }

        try {
            String query = ((StringEval) queryStr).getStringValue();
            IDataSet dset = external.getSqlDataSourceHub().executeQuery("TEMP_DS", query, queryParams);
            
            String dsName = ((StringEval) cachedDataSetName).getStringValue();
            dset.name(dsName);

            external.getDataSetStorage().saveDataSet(dset, DataSetScope.LOCAL);

            return new NumberEval(dset.length());
        } catch (Exception e) {
            return ErrorEval.NA;
        }

    }

    @Override public void setEvaluator(IEvaluator evaluator) { this.evaluator = evaluator; }

}
