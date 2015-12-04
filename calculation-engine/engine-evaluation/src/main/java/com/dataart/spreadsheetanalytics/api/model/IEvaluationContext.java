package com.dataart.spreadsheetanalytics.api.model;

public interface IEvaluationContext {

    Object get(Object key);

    void set(Object key, Object value);

}
