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

import static org.apache.poi.ss.usermodel.Cell.CELL_TYPE_FORMULA;

import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;

import org.apache.poi.ss.formula.FormulaParseException;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.model.DataModel;

public class AttributeFunctionsScanner {
    private static final Logger log = LoggerFactory.getLogger(AttributeFunctionsScanner.class);
    
    public static final Map<String, Class<? extends AttributeFunctionMeta>> ALL_ATTRIBUTE_FUNCTIONS = new LinkedHashMap<>();;
    static {
        ALL_ATTRIBUTE_FUNCTIONS.put(DefineFunctionMeta.KEYWORD, DefineFunctionMeta.class);
    }
    
    /**
     * Does full scan given {@link IDataModel} for Model-Attribute functions (like DEFINE or QUERYDEFINE) to ({@link AttributeFunctionMeta}).
     * 3 iterators are used inside to go through all the cells and find 'function' keyword.
     */
    //                                                  keyword     name    instance
    public static <T extends AttributeFunctionMeta> Map<String, Map<String, T>> scan(IDataModel dataModel, Map<String, Class<T>> attrFunctions) {
        
        DataModel dm = (DataModel) dataModel;
        
        Map<String, Map<String, T>> map = new HashMap<>();
        attrFunctions.forEach((k, v) -> map.put(k, new HashMap<>()));

        for (Iterator sheeterator = dm.poiModel.iterator(); sheeterator.hasNext();) {
            Sheet sh = (Sheet) sheeterator.next();
            for (Iterator rowterator = sh.iterator(); rowterator.hasNext();) {
                Row ro = (Row) rowterator.next();
                
                for (Iterator celterator = ro.iterator(); celterator.hasNext();) {
                    Cell ce = (Cell) celterator.next();
                    if (ce == null || CELL_TYPE_FORMULA != ce.getCellType()) { continue; }
                    
                    try {
                        String formula = ce.getCellFormula();

                        String keyword = attrFunctions.keySet()
                                                      .stream()
                                                      .filter(key -> formula.startsWith(key))
                                                      .findFirst()
                                                      .orElse(null);
                        if (keyword == null) { continue; }

                        T meta = createAttributeFunctionMeta(attrFunctions.get(keyword), formula, dataModel);
                        map.get(keyword).put(meta.name(), meta);
                    } catch (FormulaParseException | ReflectiveOperationException e) {
                        log.debug("Warning while parsing custom excel formula. It is OK.", e);
                    }
                }
            }
        }
        
        return map;
    }

    protected static <T extends AttributeFunctionMeta> T createAttributeFunctionMeta(Class<T> metaClass, String formula, IDataModel model) throws ReflectiveOperationException {
        T meta = (T) metaClass.newInstance().parse(formula);
        meta.dataModelId(model.dataModelId());
        if (meta.name() == null) { meta.name(model.name()); }

        return meta;
    }

}
