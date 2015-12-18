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
import com.dataart.spreadsheetanalytics.engine.CalculationEngineException;

/**
 * Basic implementation of {@link ICellValue}.
 * It is a simple wrapper for {@link Object} (represents the value).
 * 
 * Inside implementation there are 3 data types: 
 * {@link Double} for numeric values;
 * {@link Boolean} for logical values;
 * {@link String} for text values, errors and formulas;
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

    @Override public Object get() { return this.value; }
    @Override public Class<? extends Object> getType() { return this.type; }

    /**
     * Creates new instance of {@link CellValue} with given argument.
     * Supported types: null, String, Double, Boolean.
     */
    public static ICellValue from(Object o) {
        if (o == null) { return BLANK; }
        else if (o instanceof String) { return new CellValue(o, String.class); }
        else if (o instanceof Double) { return new CellValue(o, Double.class); }
        else if (o instanceof Integer) { return new CellValue(new Double((Integer) o)); }
        else if (o instanceof Boolean) { return new CellValue(o, Boolean.class); }

        throw new CalculationEngineException(String.format("The object %s of class %s is not supported as type for CellValue", o, o.getClass().getSimpleName()));
    }

    @Override
    public String toString() {
        return this.value == null ? "null" : this.value.toString() + ":" + this.type.getSimpleName();
    }

    @Override
    public int hashCode() {
        int prime = 31;
        int result = 1;
        result = prime * result + ((this.type == null) ? 0 : this.type.hashCode());
        result = prime * result + ((this.value == null) ? 0 : this.value.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) { return true; }
        if (obj == null) { return false; }
        if (getClass() != obj.getClass()) { return false; }
        CellValue other = (CellValue) obj;
        if (this.type == null) {
            if (other.type != null) { return false; }
        } else if (this.type != other.type) { return false; }
        if (this.value == null) {
            if (other.value != null) { return false; }
        } else if (!this.value.equals(other.value)) { return false; }
        return true;
    }

}
