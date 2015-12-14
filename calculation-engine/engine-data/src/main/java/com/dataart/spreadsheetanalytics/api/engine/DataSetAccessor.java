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

public interface DataSetAccessor {
    
    /**
     * {@link #add(IDataSet, DataSetScope)} with {@link DataSetScope#GLOBAL}
     */
    void add(IDataSet dataSet);
    
    void add(IDataSet dataSet, DataSetScope scope);
    
    IDataSet get(IDataModelId dataModelId);
    
    IDataSet get(String dataSetName);
    
    IDataSet get(String dataSetName, ILazyDataSet.Parameters parameters);
    
    boolean isLazy(String dataSetName);
    
    boolean isLazy(IDataSet dataSet);

}
