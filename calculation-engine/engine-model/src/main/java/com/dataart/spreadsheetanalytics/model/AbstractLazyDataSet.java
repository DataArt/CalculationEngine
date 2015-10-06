package com.dataart.spreadsheetanalytics.model;

import java.util.Iterator;
import java.util.List;

import com.dataart.spreadsheetanalytics.api.model.IDataModelId;
import com.dataart.spreadsheetanalytics.api.model.IDsRow;
import com.dataart.spreadsheetanalytics.api.model.ILazyDataSet;

public abstract class AbstractLazyDataSet implements ILazyDataSet {

    protected DataSet dataSet;
    protected Boolean executed = Boolean.FALSE;
        
    public AbstractLazyDataSet(String name) {
        this.dataSet = new DataSet(name);
    }

    @Override public IDataModelId dataModelId() { return this.dataSet.dataModelId(); }
    @Override public String name() { return this.dataSet.name(); }
    @Override public void name(String name) { this.dataSet.name(name); }

    @Override public int length() {
        if (!executed) { throw new IllegalStateException("DataSet not executed."); }
        return this.dataSet.length();
    }
    @Override public int width() {
        if (!executed) { throw new IllegalStateException("DataSet not executed."); }
        return this.dataSet.width();
    }
    @Override public List<IDsRow> rows() {
        if (!executed) { throw new IllegalStateException("DataSet not executed."); }
        return this.dataSet.rows();
    }
    @Override public Iterator<IDsRow> iterator() {
        if (!executed) { throw new IllegalStateException("DataSet not executed."); }
        return this.dataSet.iterator();
    }
    @Override public boolean hasNext() {
        if (!executed) { throw new IllegalStateException("DataSet not executed."); }
        return this.dataSet.hasNext();
    }
    @Override public IDsRow next() {
        if (!executed) { throw new IllegalStateException("DataSet not executed."); }
        return this.dataSet.next();
    }

}
