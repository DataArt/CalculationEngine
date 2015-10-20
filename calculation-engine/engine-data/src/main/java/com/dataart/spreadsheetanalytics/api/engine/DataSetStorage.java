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

public interface DataSetStorage {
    
    /**
     * {@link #saveDataSet(IDataSet, DataSetScope)} with {@link DataSetScope#GLOBAL}
     */
    void saveDataSet(IDataSet dset);
    
    void saveDataSet(IDataSet dset, DataSetScope scope);
    
    IDataSet getDataSet(IDataModelId dataModelId) throws Exception;
    
    IDataSet getDataSet(String name) throws Exception;
    
    IDataSet getDataSet(String name, ILazyDataSet.Parameters parameters) throws Exception;
    
    boolean isLazyDataSet(String name);
    
    boolean isLazyDataSet(IDataSet dataSet);

}
