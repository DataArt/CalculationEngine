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
    
    public EvaluationContext() { this(null); }

    public EvaluationContext(final EvaluationContext another) {
        if (another != null) { this.map.putAll(another.map); }
    }

    @Override public Object get(Object key) { return this.map.get(key); }
    @Override public void set(Object key, Object value) { this.map.put(key, value); }

}
