package com.dataart.spreadsheetanalytics.model;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import com.dataart.spreadsheetanalytics.api.model.IDsCell;
import com.dataart.spreadsheetanalytics.api.model.IDsRow;

public class DsRow implements IDsRow {

    protected final int index;
    protected List<IDsCell> cells;
    
    protected Iterator<IDsCell> iterator;
    
    public DsRow(int rowIndex) {
        this.index = rowIndex;
        this.cells = new ArrayList<>();
    }

    @Override public int index() { return this.index; }
    
    @Override public int width() { return cells.size(); }
    
    @Override public List<IDsCell> cells() { return this.cells; }
    
    public DsCell createCell() {
        DsCell cell = new DsCell(cells.size() + 1);
        cells.add(cell);
        this.iterator = this.cells.iterator();
        return cell;
    }

    @Override
    public Iterator<IDsCell> iterator() {
        this.iterator = this.cells.iterator();
        return this;
    }

    @Override public boolean hasNext() { return this.iterator.hasNext(); }
    @Override public IDsCell next() { return this.iterator.next(); }

}
