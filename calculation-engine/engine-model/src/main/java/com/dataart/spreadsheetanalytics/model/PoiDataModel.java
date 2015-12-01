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
package com.dataart.spreadsheetanalytics.model;

import java.io.IOException;
import java.io.InputStream;
import java.util.Iterator;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataModelId;
import com.dataart.spreadsheetanalytics.api.model.IDmCell;
import com.dataart.spreadsheetanalytics.api.model.IDmRow;

public class PoiDataModel implements IDataModel {

    protected String name;
    protected IDataModelId dataModelId;
    
    public final XSSFWorkbook poiModel;

    public PoiDataModel(String name, String path) throws IOException {
        this.name = name;
        this.poiModel = new XSSFWorkbook(path);
        this.dataModelId = new DataModelId(this.poiModel.toString());
    }

    public PoiDataModel(String name, InputStream in) throws IOException {
        this.name = name;
        this.poiModel = new XSSFWorkbook(in);
        this.dataModelId = new DataModelId(this.poiModel.toString());
    }

    public boolean isFormulaCell(ICellAddress addr) {
        Sheet s = poiModel.getSheetAt(0 /* TODO: sheet number 1 */ );
        Row r = s.getRow(addr.row());
        if (r == null) { return false; }
        Cell c = r.getCell(addr.column());
        if (c == null) { return false; }

        return Cell.CELL_TYPE_FORMULA == c.getCellType();
    }
    
    @Override
    public String toString() {
        return name();
    }

    @Override
    public Iterator<IDmRow> iterator() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override public IDataModelId dataModelId() { return this.dataModelId; }
    @Override public String name() { return this.name; }
    @Override public void name(String name) { this.name = name; }
    @Override public int length() { return this.poiModel.getSheetAt(0).getLastRowNum(); }

    @Override
    public IDmRow getRow(int row) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public IDmRow getRow(ICellAddress address) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public void setRow(int row, IDmRow r) {
        // TODO Auto-generated method stub
        
    }

    @Override
    public void setRow(ICellAddress address, IDmRow row) {
        // TODO Auto-generated method stub
        
    }

    @Override
    public IDmCell getCell(int rowIdx, int cellIdx) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public IDmCell getCell(ICellAddress address) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public void setCell(int rowIdx, int cellIdx, IDmCell cell) {
        // TODO Auto-generated method stub
        
    }

    @Override
    public void setCell(ICellAddress address, IDmCell cell) {
        // TODO Auto-generated method stub
        
    }

    @Override
    public int getFirstRowIndex() {
        // TODO Auto-generated method stub
        return 0;
    }

    @Override
    public int getLastRowIndex() {
        // TODO Auto-generated method stub
        return 0;
    }
        
}
