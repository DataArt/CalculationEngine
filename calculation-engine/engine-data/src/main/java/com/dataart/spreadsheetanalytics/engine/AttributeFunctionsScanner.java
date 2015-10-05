package com.dataart.spreadsheetanalytics.engine;

import static org.apache.poi.ss.usermodel.Cell.CELL_TYPE_FORMULA;

import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;

import org.apache.poi.ss.formula.FormulaParseException;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;

import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.model.DataModel;

public abstract class AttributeFunctionsScanner {
    
    public final static Map<String, Class<? extends AttributeFunctionMeta>> ALL_ATTRIBUTE_FUNCTIONS = Collections.unmodifiableMap(new LinkedHashMap() {
        {
            put(DefineFunctionMeta.KEYWORD, DefineFunctionMeta.class);
            put(QueryDefineFunctionMeta.KEYWORD, QueryDefineFunctionMeta.class);
        }
    });
    
    /**
     * Does full scan given {@link IDataModel} for Model-Attribute functions (like DEFINE or QUERYDEFINE) to ({@link AttributeFunctionMeta}).
     * 3 iterators are used inside to go through all the cells and find 'function' keyword.
     */
    //                keyword     name    instance
    public static <T extends AttributeFunctionMeta> Map<String, Map<String, T>> scan(IDataModel dataModel, Map<String, Class<T>> attrFunctions) {
        
        DataModel dm = (DataModel) dataModel;
        
        Map<String, Map<String, T>> map = new HashMap<>();
        for (String key : attrFunctions.keySet()) map.put(key, new HashMap<>());

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

                        String keyword = null;
                        for (String key : attrFunctions.keySet()) if (formula.startsWith(key)) { keyword = key; break; }
                        
                        if (keyword == null) { continue; }

                        AttributeFunctionMeta meta = attrFunctions.get(keyword).newInstance().parse(formula);
                        meta.dataModelId(dataModel.dataModelId());
                        if (meta.name() == null) { meta.name(dataModel.name()); }

                        map.get(keyword).put(meta.name(), (T) meta);
                    } catch (FormulaParseException | InstantiationException | IllegalAccessException e) {
                        //silent, we do not interested in custom formulas on this step
                    }
                }
            }
        }
        
        return map;
    }

}
