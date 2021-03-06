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

import java.util.Random;
import java.util.UUID;

import com.dataart.spreadsheetanalytics.api.model.IDataModelId;

/**
 * Simple implementation of {@link IDataModelId}.
 * Contains generic {@link Object} instance as id.
 */
public class DataModelId implements IDataModelId {
    
    protected static final Random ID_RANDOMIZER = new Random();
    
    protected final Object id;
    
    public DataModelId() { this(new UUID(ID_RANDOMIZER.nextLong(), ID_RANDOMIZER.nextLong()).toString()); }
    
    public DataModelId(Object id) { this.id = id; }
    
    public Object get() { return this.id; }

    @Override public String toString() { return this.id.toString(); }

}
