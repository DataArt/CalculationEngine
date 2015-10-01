package com.dataart.spreadsheetanalytics.engine;

import static com.dataart.spreadsheetanalytics.engine.DefineFunctionMeta.ATTRIBUTE_FUNCTION;
import static com.dataart.spreadsheetanalytics.engine.DefineFunctionMeta.KEYWORD;
import static java.lang.Runtime.getRuntime;
import static java.util.concurrent.TimeUnit.MINUTES;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.dataart.spreadsheetanalytics.api.engine.IDefineFunctionsCache;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;

public enum DefineFunctionsCache implements IDefineFunctionsCache {
    INSTANCE;
    private final static Logger log = LoggerFactory.getLogger(DefineFunctionsCache.class);

    protected Map<String, DefineFunctionMeta> defines = new HashMap<>();

    @Override
    public void addDefineFunction(DefineFunctionMeta meta) {
        this.defines.put(meta.name(), meta);
    }
    
    @Override
    public Map<String, DefineFunctionMeta> getDefineFunctions() {
        return Collections.<String, DefineFunctionMeta> unmodifiableMap(defines);
    }
    
    @Override
    public void updateDefineFunctions(Set<IDataModel> dataModels) {
        ConcurrentHashMap<String, DefineFunctionMeta> map = new ConcurrentHashMap<>(defines.size());
        defines.clear();
        
        ExecutorService scanner = Executors.newFixedThreadPool(getRuntime().availableProcessors() > dataModels.size()
                                                                    ? dataModels.size()
                                                                    : getRuntime().availableProcessors());
        List<Runnable> targets = new ArrayList<>(dataModels.size());
        dataModels.forEach((v) -> { targets.add(() -> map.putAll(AttributeFunctionsScanner.scan(v, ATTRIBUTE_FUNCTION).get(KEYWORD))); });

        try {
            targets.forEach(r -> scanner.execute(r));
            scanner.shutdown();
            scanner.awaitTermination(/* TODO */5, MINUTES);
        } catch (InterruptedException e) {
            // TODO
        }
        
        defines.putAll(map);
    }
    
}
