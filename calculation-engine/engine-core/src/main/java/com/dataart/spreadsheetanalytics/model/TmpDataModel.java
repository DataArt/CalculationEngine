package com.dataart.spreadsheetanalytics.model;

import java.io.IOException;

import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.dataart.spreadsheetanalytics.api.model.IDataModel;

public class TmpDataModel implements IDataModel {

    public final XSSFWorkbook model;

    public TmpDataModel(String path) throws IOException {
        model = new XSSFWorkbook(path);
    }

}
