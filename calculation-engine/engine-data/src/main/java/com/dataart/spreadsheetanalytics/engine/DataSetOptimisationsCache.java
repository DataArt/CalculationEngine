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
import java.util.Map;

import javax.cache.Cache;
import javax.cache.Caching;

import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.api.model.ILazyDataSet;

public class DataSetOptimisationsCache {
    
    public static final String DATA_SET_TO_LAZY_PARAMETERS = "dataSetToLazyParameters";
    public static final String DATA_SET_DS_LOOKUP_PARAMETERS = "dataSetToDsLookupParameters";
    
    protected Cache<ILazyDataSet.Parameters, IDataSet> dataSetToLazyParameters = Caching.getCache(DATA_SET_TO_LAZY_PARAMETERS, ILazyDataSet.Parameters.class, IDataSet.class);
    protected Cache<DsLookupParameters, List> dataSetToDsLookupParameters = Caching.getCache(DATA_SET_DS_LOOKUP_PARAMETERS, DsLookupParameters.class, List.class);
   
    public void setDataSetToLazyParameters(Cache<ILazyDataSet.Parameters, IDataSet> dataSetToLazyParameters) { this.dataSetToLazyParameters = dataSetToLazyParameters; }

    public Cache<DsLookupParameters, List> getDataSetToDsLookupParameters() { return dataSetToDsLookupParameters; }
    public void setDataSetToDsLookupParameters(Cache<DsLookupParameters, List> dataSetToDsLookupParameters) { this.dataSetToDsLookupParameters = dataSetToDsLookupParameters; }

    
    public static class DsLookupParameters {
        
        public final String dsname;
        public final Map<Integer, Object> where;
        public final int columnIndex;
        
        public DsLookupParameters(String dsname, Map<Integer, Object> where, int columnIndex) {
            this.dsname = dsname;
            this.where = where;
            this.columnIndex = columnIndex;
        }

        @Override
        public int hashCode() {
            int prime = 31;
            int result = 1;
            result = prime * result + columnIndex;
            result = prime * result + ((dsname == null) ? 0 : dsname.hashCode());
            result = prime * result + ((where == null) ? 0 : where.hashCode());
            return result;
        }

        @Override
        public boolean equals(Object obj) {
            if (this == obj) { return true; }
            if (obj == null) { return false; }
            if (getClass() != obj.getClass()) { return false; }
            DsLookupParameters other = (DsLookupParameters) obj;
            if (columnIndex != other.columnIndex) { return false; }
            if (dsname == null) {
                if (other.dsname != null) { return false; }
            } else if (!dsname.equals(other.dsname)) { return false; }
            if (where == null) {
                if (other.where != null) { return false; }
            } else if (!where.equals(other.where)) { return false; }
            return true;
        }
    }
    
}
