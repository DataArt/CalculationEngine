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

    public final XSSFWorkbook model;

    public DataModel(String path) throws IOException {
        super();
        this.model = new XSSFWorkbook(path);
        this.dataModelId = new DataModelId(this.model.toString());
    }

    public DataModel(InputStream in) throws IOException {
        super();
        this.model = new XSSFWorkbook(in);
        this.dataModelId = new DataModelId(this.model.toString());
    }

    @Override
    public void replaceCellValue(ICellAddress address, ICellValue value) {
        Sheet s = model.getSheetAt(0/*TODO: add sheet information here*/);
        Row r = s.getRow(address.row());
        if (r == null) { r = s.createRow(address.row()); }
        Cell c = r.getCell(address.column());
        if (c == null) { c = r.createCell(address.column()); }

        if (value.get() instanceof Double) {
            c.setCellValue((double) value.get());
        } else if (value.get() instanceof Integer) {
            c.setCellValue((int) value.get());
        } else if (value.get() instanceof String) {
            c.setCellValue((String) value.get());
        }
    }

    @Override
    public Object clone() throws CloneNotSupportedException {
        return super.clone();
    }
    
}
