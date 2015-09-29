package com.dataart.spreadsheetanalytics.api.engine;

import java.util.HashMap;
import java.util.Map;

import org.apache.poi.ss.formula.eval.NotImplementedException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.dataart.spreadsheetanalytics.api.model.IDataModelId;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.engine.DataSetScope;

public enum DataSetStorage {
    INSTANCE;
    private final static Logger log = LoggerFactory.getLogger(DataSetStorage.class);

    protected Map<IDataModelId, IDataSet> localDataSetsToId = new HashMap<>();
    protected Map<String, IDataSet> localDataSetsToName = new HashMap<>();

    /**
     * {@link #saveDataSet(IDataSet, DataSetScope)} with {@link DataSetScope#GLOBAL}
     */
    public void saveDataSet(IDataSet dset) {
        saveDataSet(dset, DataSetScope.GLOBAL);
    }
    
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

    public IDataSet getDataSet(IDataModelId dataModelId) {
        return this.localDataSetsToId.get(dataModelId);
    }

    public IDataSet getDataSet(String name) {
        return localDataSetsToName.get(name);
    }

}
