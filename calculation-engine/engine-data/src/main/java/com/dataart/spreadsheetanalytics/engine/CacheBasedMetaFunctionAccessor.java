/*
Copyright 2015 DataArt Apps, Inc

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
package com.dataart.spreadsheetanalytics.engine;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import javax.cache.Cache;
import javax.cache.Cache.Entry;
import javax.cache.Caching;

import com.dataart.spreadsheetanalytics.api.engine.MetaFunctionAccessor;

/**
 * {@link MetaFunctionAccessor} implementation based on {@link Cache}.
 */
public class CacheBasedMetaFunctionAccessor implements MetaFunctionAccessor {

    public static final String META_FUNCTIONS_CACHE_NAME = "metaFunctionsCache";

    protected Cache<String, FunctionMeta> metaFunctionsCache = Caching.getCache(META_FUNCTIONS_CACHE_NAME, String.class, FunctionMeta.class);

    @Override
    public void add(FunctionMeta meta) {
        this.metaFunctionsCache.put(meta.getName(), meta);
    }
    
    @Override
    public FunctionMeta get(String name) {
        return this.metaFunctionsCache.get(name);
    }    
    
    @Override
    public Map<String, FunctionMeta> getAll() {
        Map<String, FunctionMeta> map = new HashMap<>();
        for (Entry<String, FunctionMeta> entry : this.metaFunctionsCache) {
            map.put(entry.getKey(), entry.getValue());
        }
        return Collections.<String, FunctionMeta>unmodifiableMap(map);
    }

    public void setDefineFunctionsCache(Cache<String, FunctionMeta> defineFunctionsCache) { this.metaFunctionsCache = defineFunctionsCache; }
    
}
