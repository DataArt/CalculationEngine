package com.dataart.spreadsheetanalytics.api.model;

/**
 * Container for evaluation result. Since result is not only the data,
 * but also anything that can be accessible in evaluation context it provides access to result and all state of execution.
 *
 * @param <T> {@link IDataModel} or {@link ICellValue}.
 */
public interface IEvaluationResult<T> {
    
    /** Returns execution context object. */
    IEvaluationContext getContext();
    
    /** Returns execution result. */
    T getResult();

}
