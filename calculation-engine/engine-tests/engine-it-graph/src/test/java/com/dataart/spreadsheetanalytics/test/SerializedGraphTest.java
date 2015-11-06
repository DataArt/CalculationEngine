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
package com.dataart.spreadsheetanalytics.test;

import static org.assertj.core.api.StrictAssertions.assertThat;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

import com.dataart.spreadsheetanalytics.api.engine.IAuditor;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraph;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetAuditor;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.CellAddress;
import com.dataart.spreadsheetanalytics.model.DataModel;
import com.dataart.spreadsheetanalytics.test.util.ExecutionGraphAssert;
import com.dataart.spreadsheetanalytics.test.util.GraphTestUtil;
import com.dataart.spreadsheetanalytics.test.util.graphml.ExecutionGraphML;
import com.dataart.spreadsheetanalytics.test.util.graphml.ExecutionGraphMLImporter;

public abstract class SerializedGraphTest {
    
    protected IExecutionGraph graph;
    private static final String VISUALIZER_ACTUAL_DIR = "src/../target/graph-visualizer/";
    static {
        try { Files.createDirectory(Paths.get(VISUALIZER_ACTUAL_DIR)); }
        catch (IOException e) { e.printStackTrace(); }
    }

    public void before(String path, String address) throws Exception {
        
        final IDataModel model = new DataModel(path, path);
        
        GraphTestUtil.initExternalServices((DataModel) model);
        
        final IAuditor auditor = new SpreadsheetAuditor(new SpreadsheetEvaluator((DataModel) model));        
        final ICellAddress addr = new CellAddress(model.dataModelId(), A1Address.fromA1Address(address));
        
        //build
        graph = auditor.buildDynamicExecutionGraph(addr);
    }
    
    public void after() throws Exception {
        GraphTestUtil.destroyExternalServices();
    }
    
    public void compare_ExcelFile_SerializedGraph(String dir, String file, String address) throws Exception {
        // save graph to visual file - debug information
        GraphTestUtil.generateVisualizer(graph, VISUALIZER_ACTUAL_DIR, file, address);
        
        // given
        ExecutionGraphML expected = ExecutionGraphMLImporter._import(new File(dir + file + "_" + address + ".graphml"));

        // when
        IExecutionGraph actual = graph;
        assertThat(actual).isNotNull();
        
        // then
        ExecutionGraphAssert.assertThat(actual).isEqualTo(expected);
    }

}
