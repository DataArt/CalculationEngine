package com.dataart.spreadsheetanalytics.engine;

import static com.dataart.spreadsheetanalytics.engine.DefineFunctionMeta.IN_OUT_SEPARATOR;
import static com.dataart.spreadsheetanalytics.engine.DefineFunctionMeta.KEYWORD;
import static java.lang.Runtime.getRuntime;
import static java.util.concurrent.TimeUnit.MINUTES;
import static org.apache.poi.ss.usermodel.Cell.CELL_TYPE_FORMULA;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import org.apache.poi.ss.formula.FormulaParseException;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.dataart.spreadsheetanalytics.api.engine.IDefineFunctionsCache;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.engine.DefineFunctionMeta;
import com.dataart.spreadsheetanalytics.model.DataModel;

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
    public Map<String, DefineFunctionMeta> scanDataModelForDefines(IDataModel dataModel) {
        DataModel dm = (DataModel) dataModel;
        
        Map<String, DefineFunctionMeta> map = new HashMap<>();

        for (Iterator sheeterator = dm.model.iterator(); sheeterator.hasNext();) {
            Sheet sh = (Sheet) sheeterator.next();
            for (Iterator rowterator = sh.iterator(); rowterator.hasNext();) {
                Row ro = (Row) rowterator.next();
                
                for (Iterator celterator = ro.iterator(); celterator.hasNext();) {
                    Cell ce = (Cell) celterator.next();
                    if (ce == null) { continue; }
                        
                    //for each cell we should scan for =DEFINE key word
                    //then get it and parse to DefineFunctionMeta
                    if (CELL_TYPE_FORMULA != ce.getCellType()) { continue; }
                    
                    try {
                        String formula = ce.getCellFormula();

                        if (!formula.startsWith(KEYWORD)) { continue; }

                        if (!formula.contains(IN_OUT_SEPARATOR)) {
                            //TODO log or throw?? if throw create exception?
                            throw new RuntimeException(KEYWORD + " function must contain a " + IN_OUT_SEPARATOR);
                        }

                        DefineFunctionMeta meta = DefineFunctionMeta.parse(formula);
                        meta.dataModelId(dataModel.dataModelId());

                        map.put(meta.name(), meta);
                    } catch (FormulaParseException e) {
                        //silent, we do not interested in custom formulas on this step
                    }
                }
            }
        }
        
        return map;
    }
    
    @Override
    public void updateDefineFunctions(Set<IDataModel> dataModels) {
        ConcurrentHashMap<String, DefineFunctionMeta> map = new ConcurrentHashMap<>(defines.size());
        defines.clear();
        
        ExecutorService scanner = Executors.newFixedThreadPool(getRuntime().availableProcessors() > dataModels.size()
                                                                    ? dataModels.size()
                                                                    : getRuntime().availableProcessors());
        List<Runnable> targets = new ArrayList<>(dataModels.size());
        dataModels.forEach((v) -> { targets.add(() -> map.putAll(scanDataModelForDefines(v))); });

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
