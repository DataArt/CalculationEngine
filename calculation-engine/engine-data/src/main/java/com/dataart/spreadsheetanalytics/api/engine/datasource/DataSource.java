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
package com.dataart.spreadsheetanalytics.api.engine.datasource;

import java.util.List;

import com.dataart.spreadsheetanalytics.api.model.IDataSet;

/**
 * Generic Data Source. Some gateway to any data storage that can execute 'queries'.
 * Can provide access to Relational DB, File System, Network access, etc.
 */
public interface DataSource {
    
    /**
     * Executes some query that can contain parameters.
     * Reesult of query should be converted to {@link IDataSet}.
     */
    IDataSet executeQuery(DataSourceQuery query, List<Object> params) throws Exception;

    /**
     * Name of this {@link DataSource}. Used to store sources in cache.
     */
    String getName();

}