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
    public static class Parameters {
        public static final Parameters EMPTY = new Parameters();
        
        protected List<Object> parameters;
        
        public Parameters() { this.parameters = Collections.emptyList(); }
        public Parameters(List<Object> parameters) { this.parameters = parameters; }
        
        public List<Object> getParameters() { return parameters; }
        public void setParameters(List<Object> parameters) { this.parameters = parameters; }
    }
}
