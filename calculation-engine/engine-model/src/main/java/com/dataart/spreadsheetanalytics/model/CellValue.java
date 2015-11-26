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
package com.dataart.spreadsheetanalytics.model;

import com.dataart.spreadsheetanalytics.api.model.ICellValue;

/**
 * Basic implementation of {@link ICellValue}.
 * It is a simple wrapper for {@link Object} (represents the value).
 */
public class CellValue implements ICellValue {
    
    public static final ICellValue BLANK = new CellValue(null, Object.class);  

    protected final Object value;
    protected final Class<? extends Object> type;

    protected CellValue(Object value, Class<? extends Object> type) {
        this.value = value;
        this.type = type;
    }
    
    public CellValue(Double value) { this(value, Double.class); }
    public CellValue(Boolean value) { this(value, Boolean.class); }
    public CellValue(String value) { this(value, String.class); }

    @Override public Object get() { return value; }
    @Override public Class<? extends Object> type() { return this.type; }

    public static ICellValue from(Object o) {
        if (o == null) { return BLANK; }
        else if (o instanceof String) { return new CellValue(o, String.class); }
        else if (o instanceof Double) { return new CellValue(o, Double.class); }
        else if (o instanceof Boolean) { return new CellValue(o, Boolean.class); }

        throw new IllegalArgumentException(String.format("The object %s of class %s is not supported as type for CellValue", o, o.getClass().getSimpleName()));
    }

    @Override
    public String toString() {
        return value == null ? "null" : value.toString() + ":" + type.getSimpleName();
    }

}
