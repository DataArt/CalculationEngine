package com.dataart.spreadsheetanalytics.model;

import java.io.IOException;
import java.io.InputStream;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;

public class DataModel extends DataSet implements IDataModel {

    public final XSSFWorkbook poiModel;

    public DataModel(String name, String path) throws IOException {
        super(name);
        this.poiModel = new XSSFWorkbook(path);
        this.dataModelId = new DataModelId(this.poiModel.toString());
    }

    public DataModel(String name, InputStream in) throws IOException {
        super(name);
        this.poiModel = new XSSFWorkbook(in);
        this.dataModelId = new DataModelId(this.poiModel.toString());
    }

    @Override
    public void replaceCellValue(ICellAddress address, ICellValue value) {
        Sheet s = poiModel.getSheetAt(0/*TODO: add sheet information here*/);
        Row r = s.getRow(address.row());
        if (r == null) { r = s.createRow(address.row()); }
        Cell c = r.getCell(address.column());
        if (c == null) { c = r.createCell(address.column()); }

        if (value.get() instanceof Number) {
            c.setCellValue((double) value.get());
        } else if (value.get() instanceof Boolean) {
            c.setCellValue((boolean) value.get());
        } else if (value.get() instanceof String) {
            c.setCellValue((String) value.get());
        }
    }
    
    public boolean isFormulaCell(ICellAddress addr) {
        Sheet s = poiModel.getSheetAt(0 /* TODO: sheet number 1 */ );
        Cell c = s.getRow(addr.row()).getCell(addr.column());
        if (c == null) { throw new NullPointerException("Cell at row " + addr.row() + ", column " + addr.column() + " is null"); }

        return (Cell.CELL_TYPE_FORMULA == c.getCellType());
    }
    
    @Override
    public String toString() {
        return name();
    }
        
}
