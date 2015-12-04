package com.dataart.spreadsheetanalytics.api.model;

public interface IEvaluationResult<T> {
    
    IEvaluationContext getContext();
    
    T getResult();

}
