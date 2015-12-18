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

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import com.dataart.spreadsheetanalytics.api.model.IDataModelId;

/**
 * Abstract container for CustomFunction meta information.
 * Meta information of a function is: name, parameters, return type, etc. - enything that is not the function code itself.
 */
public abstract class FunctionMeta {

    protected String name;
    protected IDataModelId dataModelId;
    
    public String getName() { return this.name; }
    public void setName(String name) { this.name = name; }
    
    public IDataModelId getDataModelId() { return this.dataModelId; }
    public void setDataModelId(IDataModelId dataModelId) { this.dataModelId = dataModelId; }
    
    abstract FunctionMeta parse(String formula);
    
    @Retention(RetentionPolicy.RUNTIME)
    @Target(ElementType.TYPE)
    public @interface MetaFunctionKeyword {
        String value();
    }
}

