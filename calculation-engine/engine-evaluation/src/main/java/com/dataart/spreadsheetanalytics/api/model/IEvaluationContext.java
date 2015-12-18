package com.dataart.spreadsheetanalytics.api.model;

/**
 * Map-like object for storing everything.
 * Any object put to this context will be accessible in {@link ICustomFunction} runtime.
 */
public interface IEvaluationContext {

    /** Returns object from context by key. */
    Object get(Object key);

    /** Sets object to context. */
    void set(Object key, Object value);

}
