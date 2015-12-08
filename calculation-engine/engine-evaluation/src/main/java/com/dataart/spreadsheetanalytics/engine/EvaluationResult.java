package com.dataart.spreadsheetanalytics.engine;

import com.dataart.spreadsheetanalytics.api.model.IEvaluationContext;
import com.dataart.spreadsheetanalytics.api.model.IEvaluationResult;

class EvaluationResult<T> implements IEvaluationResult<T> {

    protected final IEvaluationContext evaluationContext;
    protected final T result;
    
    public EvaluationResult(IEvaluationContext evaluationContext, T result) {
        this.evaluationContext = evaluationContext;
        this.result = result;
    }

    @Override public IEvaluationContext getContext() { return this.evaluationContext; }
    @Override public T getResult() { return this.result; }
    
    @Override
    public String toString() { return this.result.toString(); }

}
