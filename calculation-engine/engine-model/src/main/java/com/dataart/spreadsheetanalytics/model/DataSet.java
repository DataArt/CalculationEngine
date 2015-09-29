package com.dataart.spreadsheetanalytics.model;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.UUID;

import com.dataart.spreadsheetanalytics.api.model.IDataModelId;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.api.model.IDsRow;

public class DataSet implements IDataSet {

    protected IDataModelId dataModelId;
    protected String name;
    
    protected List<IDsRow> rows;
    
    protected Iterator<IDsRow> iterator;

    public DataSet() {
        this.dataModelId = new DataModelId(UUID.randomUUID().toString());
        this.rows = new ArrayList<>();
    }

    @Override public IDataModelId dataModelId() { return this.dataModelId; }
    
    @Override public String name() { return name; }
    @Override public void name(String name) { this.name = name; }

    @Override public int length() { return this.rows.size(); }
    @Override public int width() { return rows.isEmpty() ? 0 : rows.get(0).width(); }

    @Override public List<IDsRow> rows() { return Collections.<IDsRow> unmodifiableList(this.rows); }
    
    public DsRow createRow() {
        DsRow row = new DsRow(rows.size() + 1);
        rows.add(row);
        this.iterator = rows.iterator();
        return row;
    }

    @Override public Iterator<IDsRow> iterator() {
        this.iterator = rows.iterator();
        return this; 
    }

    @Override public boolean hasNext() { return this.iterator.hasNext(); }
    @Override public IDsRow next() { return this.iterator.next(); }

}
