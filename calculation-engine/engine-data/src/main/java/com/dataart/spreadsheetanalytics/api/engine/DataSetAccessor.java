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
package com.dataart.spreadsheetanalytics.api.engine;

import com.dataart.spreadsheetanalytics.api.model.IDataModelId;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.api.model.ILazyDataSet;
import com.dataart.spreadsheetanalytics.engine.DataSetScope;

/**
 * Storage for {@link IDataSet}s.
 */
public interface DataSetAccessor {
    
    /** Invokes {@link #add(IDataSet, DataSetScope)} with {@link DataSetScope#GLOBAL} */
    void add(IDataSet dataSet);
    
    /** Adds {@link IDataSet} to storage with given scope. */
    void add(IDataSet dataSet, DataSetScope scope);
    
    /** Returns {@link IDataSet} by Id. */
    IDataSet get(IDataModelId dataModelId);
    
    /** Returns {@link IDataSet} by name. */
    IDataSet get(String dataSetName);
    
    /** Returns {@link IDataSet} by name, provides access to parameters. */
    IDataSet get(String dataSetName, ILazyDataSet.Parameters parameters);
    
    /** Checks if {@link IDataSet} is {@link ILazyDataSet}. */
    boolean isLazy(String dataSetName);
    
    /** Checks if {@link IDataSet} is {@link ILazyDataSet}. */
    boolean isLazy(IDataSet dataSet);

}
