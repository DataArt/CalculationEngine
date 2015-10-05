package com.dataart.spreadsheetanalytics.engine;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.poi.ss.formula.eval.NotImplementedException;
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

    protected Map<IDataModelId, IDataSet> localDataSetsToId = new HashMap<>();
    protected Map<String, IDataSet> localDataSetsToName = new HashMap<>();
    
    protected Map<String, ILazyDataSet> lazyDataSetsToName = new HashMap<>();

    @Override
    public void saveDataSet(IDataSet dset) {
        saveDataSet(dset, DataSetScope.GLOBAL);
    }
    
    @Override
    public void saveDataSet(IDataSet dset, DataSetScope scope) {
        switch (scope) {
            case LOCAL:
                this.localDataSetsToName.put(dset.name(), dset);
                this.localDataSetsToId.put(dset.dataModelId(), dset);
                break;
            case GLOBAL:
                throw new NotImplementedException("Global scope for DataSet is not yet implemented.");
        }
    }

    @Override
    public IDataSet getDataSet(IDataModelId dataModelId) {
        return this.localDataSetsToId.get(dataModelId);
    }

    @Override
    public IDataSet getDataSet(String name) {
        return localDataSetsToName.get(name);
    }

    @Override
    public void saveLazyDataSet(ILazyDataSet dset) {
        if (dset == null) { return; }
        if (dset.name() == null) { throw new IllegalArgumentException("ExecutableDataSet must have a name."); }
        
        this.lazyDataSetsToName.put(dset.name(), dset);
    }
    
    @Override
    public IDataSet getLazyDataSet(String name, List<Object> execParams) throws Exception {
        ILazyDataSet eds = this.lazyDataSetsToName.get(name);
        if (eds == null) { throw new IllegalStateException(String.format("No LazyDataSet with name %s is found in storage.", name)); }
        
        return eds.get(new Parameters(execParams));
    }

}
