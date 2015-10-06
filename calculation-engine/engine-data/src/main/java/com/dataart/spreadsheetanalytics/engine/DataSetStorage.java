package com.dataart.spreadsheetanalytics.engine;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.dataart.spreadsheetanalytics.api.engine.IDataSetStorage;
import com.dataart.spreadsheetanalytics.api.model.IDataModelId;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.api.model.ILazyDataSet;
import com.dataart.spreadsheetanalytics.api.model.ILazyDataSet.Parameters;

/**
 * Map based implementation of {@link IDataSetStorage}. 
 */
public enum DataSetStorage implements IDataSetStorage {
    INSTANCE;
    private final static Logger log = LoggerFactory.getLogger(DataSetStorage.class);

    protected Map<IDataModelId, IDataSet> dataSetsToId = new HashMap<>();
    protected Map<String, IDataSet> dataSetsToName = new HashMap<>();

    @Override
    public void saveDataSet(IDataSet dset) {
        saveDataSet(dset, DataSetScope.GLOBAL);
    }
    
    @Override
    public void saveDataSet(IDataSet dset, DataSetScope scope) {
        if (dset == null) { return; }
        if (dset.name() == null) { throw new IllegalArgumentException("DataSet must have a name."); }
        
        switch (scope) {
            case LOCAL:
                this.dataSetsToName.put(dset.name(), dset);                
                this.dataSetsToId.put(dset.dataModelId(), dset);
                break;
            case GLOBAL:
                this.dataSetsToName.put(dset.name(), dset);                
                this.dataSetsToId.put(dset.dataModelId(), dset);
                break;
        }
    }

    @Override
    public IDataSet getDataSet(IDataModelId dataModelId) throws Exception {
        IDataSet dset = this.dataSetsToId.get(dataModelId);
        if (dset == null) { throw new IllegalStateException(String.format("No DataSet with id = %s is found in DataSet storage.", dataModelId)); }
        
        return isLazyDataSet(dset) ? ((ILazyDataSet) dset).get(Parameters.EMPTY) : dset; 
    }

    @Override
    public IDataSet getDataSet(String name) throws Exception {
        IDataSet dset = this.dataSetsToName.get(name);
        if (dset == null) { throw new IllegalStateException(String.format("No DataSet with name = %s is found in DataSet storage.", name)); }
        
        return isLazyDataSet(dset) ? ((ILazyDataSet) dset).get(Parameters.EMPTY) : dset; 
    }
    
    @Override
    public IDataSet getDataSet(String name, Parameters parameters) throws Exception {
        IDataSet dset = this.dataSetsToName.get(name);
        if (dset == null) { throw new IllegalStateException(String.format("No DataSet with name = %s is found in DataSet storage.", name)); }
       
        return isLazyDataSet(dset) ? ((ILazyDataSet) dset).get(parameters) : dset;
    }

    @Override
    public boolean isLazyDataSet(String name) {
        return this.dataSetsToName.containsKey(name) && this.dataSetsToName.get(name) instanceof ILazyDataSet;
    }

    @Override
    public boolean isLazyDataSet(IDataSet dataSet) {    
        return dataSet instanceof ILazyDataSet;
    }

}
