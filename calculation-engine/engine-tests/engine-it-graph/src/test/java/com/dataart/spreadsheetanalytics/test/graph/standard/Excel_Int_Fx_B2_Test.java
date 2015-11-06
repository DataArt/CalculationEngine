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
package com.dataart.spreadsheetanalytics.test.graph.standard;

import static com.dataart.spreadsheetanalytics.test.util.GraphTestUtil.STANDARD_EXCELS_DIR;
import static com.dataart.spreadsheetanalytics.test.util.GraphTestUtil.STANDARD_GRAPHML_DIR;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import com.dataart.spreadsheetanalytics.test.SerializedGraphTest;

public class Excel_Int_Fx_B2_Test extends SerializedGraphTest {

    static String address = "B2";
    static String file = "Int_Fx";
    static String path = STANDARD_EXCELS_DIR + file + ".xlsx";

    @Before
    public void beforeTest() throws Exception {
        super.before(path, address);
    }

    @After
    public void afterTest() throws Exception {
        super.after();
    }

    @Test
    public void assert_ExcelFile_SerializedGraph() throws Exception {
        super.compare_ExcelFile_SerializedGraph(STANDARD_GRAPHML_DIR, file, address);
    }
}
