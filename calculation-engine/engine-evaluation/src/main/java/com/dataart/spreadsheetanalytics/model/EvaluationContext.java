package com.dataart.spreadsheetanalytics.model;

import java.util.HashMap;
import java.util.Map;

import org.apache.poi.common.fork.CustomEvaluationContext;

import com.dataart.spreadsheetanalytics.api.model.IEvaluationContext;

/**
 * {@link IEvaluationContext} implementation. Uses {@link HashMap} to store context objects.
 */
public class EvaluationContext implements IEvaluationContext, CustomEvaluationContext {

    protected final Map<Object, Object> map = new HashMap<>();

    @Override public Object get(Object key) { return this.map.get(key); }
    @Override public void set(Object key, Object value) { this.map.put(key, value); }

}
