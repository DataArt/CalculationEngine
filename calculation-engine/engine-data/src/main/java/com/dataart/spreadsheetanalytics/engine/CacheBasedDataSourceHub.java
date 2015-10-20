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

import java.util.List;

import javax.cache.Cache;
import javax.cache.Caching;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.dataart.spreadsheetanalytics.api.engine.DataSourceHub;
import com.dataart.spreadsheetanalytics.api.engine.datasource.DataSource;
import com.dataart.spreadsheetanalytics.api.engine.datasource.DataSourceQuery;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;

public class CacheBasedDataSourceHub implements DataSourceHub {
    private static final Logger log = LoggerFactory.getLogger(CacheBasedDataSourceHub.class);

    public static final String DATA_SOURCE_CACHE_NAME = "dataSourceCache";

    protected Cache<Object, DataSource> dataSourceCache = Caching.getCache(DATA_SOURCE_CACHE_NAME, Object.class, DataSource.class);

    @Override
    public IDataSet executeQuery(String dataSourceName, DataSourceQuery query, List<Object> params) throws Exception {
        log.debug("Execute data query for DataSource: {} and Query: {}", dataSourceName, query);
        
        DataSource ds = getDataSource(dataSourceName);
        
        if (ds == null) {
            IllegalStateException e = new IllegalStateException(String.format("DataSource with name %s is not found.", dataSourceName));
            log.error("DataSource not found exception.", e);
            throw e;
        }
        
        return ds.executeQuery(query, params);
    }
    
    @Override
    public void addDataSource(DataSource sqlDataSource) {
        this.dataSourceCache.put(sqlDataSource.name() == null ? "" : sqlDataSource.name(), sqlDataSource);
        log.debug("Added DataSource with name {}", sqlDataSource.name());
    }

    @Override
    public void removeDataSource(DataSource dataSource) {
        if (dataSource == null) { return; }
        this.dataSourceCache.remove(dataSource.name() == null ? "" : dataSource.name());
    }

    @Override
    public void removeDataSource(String dataSourceName) {
        this.dataSourceCache.remove(dataSourceName == null ? "" : dataSourceName);
    }

    @Override
    public DataSource getDataSource(String dataSourceName) {
        return this.dataSourceCache.get(dataSourceName == null ? "" : dataSourceName);
    }

    public void setDataSourceCache(Cache<Object, DataSource> cache) { this.dataSourceCache = cache; }
}
