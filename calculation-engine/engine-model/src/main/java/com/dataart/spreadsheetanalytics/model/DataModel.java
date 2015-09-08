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
import com.dataart.spreadsheetanalytics.api.model.IDataModelId;

public class DataModel implements IDataModel {

    public final XSSFWorkbook model;
    public final IDataModelId dataModelId;

    public DataModel(String path) throws IOException {
        this.model = new XSSFWorkbook(path);
        this.dataModelId = new DataModelId(model.toString());
    }

    public DataModel(InputStream in) throws IOException {
        this.model = new XSSFWorkbook(in);
        this.dataModelId = new DataModelId(model.toString());
    }

    @Override
    public IDataModelId dataModelId() {
        return this.dataModelId;
    }

    @Override
    public void replaceCellValue(ICellAddress address, ICellValue value) {
        Sheet s = model.getSheetAt(0/*TODO: add sheet information here*/);
        Row r = s.getRow(address.row());
        if (r == null) { r = s.createRow(address.row()); }
        Cell c = r.getCell(address.column());
        if (c == null) { c = r.createCell(address.column()); }

        if (value.get() instanceof Number) {
            c.setCellValue((double) value.get());
        } else if (value.get() instanceof String) {
            c.setCellValue((String) value.get());
        }
    }

}
