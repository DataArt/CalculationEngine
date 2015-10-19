/*
Copyright 2015 DataArt, Inc.

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
package com.dataart.spreadsheetanalytics.engine.util;

import static org.apache.poi.common.execgraph.ExecutionGraphBuilderUtils.cellValueToObject;

import java.io.IOException;

import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;

import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.model.DataSet;
import com.dataart.spreadsheetanalytics.model.DsCell;
import com.dataart.spreadsheetanalytics.model.DsRow;

public class PoiFileConverter {

    public static IDataSet toDataSet(Workbook workbook) throws IOException {
        Sheet sheet = workbook.getSheetAt(0); //TODO: this works only for single sheet documents
        
        DataSet result = new DataSet(sheet.getSheetName());
        
        for (int i = sheet.getFirstRowNum(); i <= sheet.getLastRowNum(); i++) {
            DsRow dsRow = result.createRow(); 
            Row row = sheet.getRow(i);
            for (int j = row.getFirstCellNum(); j <= row.getLastCellNum(); j++) {
                DsCell cell = dsRow.createCell();
                cell.value(cellValueToObject(row.getCell(j)));
            }
        }
        
        return result;
    }
    
    public static Workbook toWorkbook(IDataSet dataSet) throws IOException {
        return null;
    }

}
