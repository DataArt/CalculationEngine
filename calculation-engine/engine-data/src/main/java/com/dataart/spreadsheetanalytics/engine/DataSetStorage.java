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

public enum DataSetStorage implements IDataSetStorage {
    INSTANCE;
    private final static Logger log = LoggerFactory.getLogger(DataSetStorage.class);

    protected Map<IDataModelId, IDataSet> localDataSetsToId = new HashMap<>();
    protected Map<String, IDataSet> localDataSetsToName = new HashMap<>();

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
    public IDataSet getExecutableDataSet(String name, List<Object> execParams) {
        // TODO Auto-generated method stub
        return null;
    }

}
