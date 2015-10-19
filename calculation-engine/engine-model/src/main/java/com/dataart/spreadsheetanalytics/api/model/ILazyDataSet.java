/*
Copyright 2015 DataArt, Inc.

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
package com.dataart.spreadsheetanalytics.api.model;

import java.util.Collections;
import java.util.List;

/**
 * Interface for special type of {@link IDataSet} that can be 'executed'.
 * Result of such execution is a regular {@link IDataSet}.
 * 'Execution' means some query operation of retreiving data for DataSet.
 * Each subclass of this interface should specify the method of how it can be executed
 * and all the meta informations.
 * 
 * For example if this class is used to get data from SQL source, the meta information will be 
 * SQL query and SqlDataSource name. The result of SQL query will converted to {@link IDataSet}. 
 */
public interface ILazyDataSet extends IDataSet {

    /**
     * Does 'execution' of this DataSet and returns the basic {@link IDataSet}. 
     * @throws Exception if 'execution' was not successful  
     */
    IDataSet get(Parameters parameters) throws Exception ;

    /**
     * Parameters for execution. Can be anything, it is just a container.
     */
    class Parameters {
        public static final Parameters EMPTY = new Parameters(null);
        
        public final String dsname;
        protected List<Object> parameters;
        
        public Parameters(String dsname) {
            this(dsname, Collections.emptyList());
        }
        
        public Parameters(String dsname, List<Object> parameters) {
            this.dsname = dsname;
            this.parameters = parameters;
        }
        
        public List<Object> getParameters() { return parameters; }
        public void setParameters(List<Object> parameters) { this.parameters = parameters; }

        @Override
        public int hashCode() {
            int prime = 31;
            int result = 1;
            result = prime * result + ((dsname == null) ? 0 : dsname.hashCode());
            result = prime * result + ((parameters == null) ? 0 : parameters.hashCode());
            return result;
        }

        @Override
        public boolean equals(Object obj) {
            if (this == obj) { return true; }
            if (obj == null) { return false; }
            if (getClass() != obj.getClass()) { return false; }
            Parameters other = (Parameters) obj;
            if (dsname == null) {
                if (other.dsname != null) { return false; }
            } else if (!dsname.equals(other.dsname)) { return false; }
            if (parameters == null) {
                if (other.parameters != null) { return false; }
            } else if (!parameters.equals(other.parameters)) { return false; }
            return true;
        }
        
    }
}
