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
package com.dataart.spreadsheetanalytics.test.graph.nonstandard;

import static com.dataart.spreadsheetanalytics.test.util.GraphTestUtil.STANDARD_EXCELS_DIR;

import java.io.IOException;

import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.junit.Test;

import com.dataart.spreadsheetanalytics.api.engine.IAuditor;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.engine.Converters;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetAuditor;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.CellAddress;
import com.dataart.spreadsheetanalytics.test.SerializedGraphTest;

public class Excel_Index_Itself_D4_Test extends SerializedGraphTest {

    static String address = "D4";
    static String file = "Index_Itself";
    static String path = STANDARD_EXCELS_DIR + file + ".xlsx";

    @Test(expected = IllegalStateException.class)
    public void assert_ExcelFile_SerializedGraph() throws IOException {
        //given
        final IDataModel model = Converters.toDataModel(new XSSFWorkbook(path));

        final IAuditor auditor = new SpreadsheetAuditor(new SpreadsheetEvaluator(model));
        final ICellAddress addr = new CellAddress(model.getDataModelId(), A1Address.fromA1Address(address));
        graph = auditor.buildExecutionGraph(addr);

        //when
        graph.getRootVertex();

        //then
        //Exception
    }
}
