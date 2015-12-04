package com.dataart.spreadsheetanalytics.test.graph.nonstandard;

import static com.dataart.spreadsheetanalytics.test.util.GraphTestUtil.ADVANCED_CONF_TESTS_DIR;

import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import com.dataart.spreadsheetanalytics.api.engine.IAuditor;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.engine.Converters;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetAuditor;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.engine.graph.ExecutionGraphConfig;
import com.dataart.spreadsheetanalytics.test.SerializedGraphTest;
import com.dataart.spreadsheetanalytics.test.util.GraphTestUtil;

public class Excel_With_Config_Case_3 extends SerializedGraphTest {

    static String file = "case_3";
    static String path = "src/test/resources/standardwithconfig_excel_files/" + file + ".xlsx";
    static String suffix = "All";
    static String suffix1 = "JOIN_ALL";
    static String suffix2 = "JOIN_2";
    static String suffix3 = "JOIN_5";
    static String suffix4 = "JOIN_10";
    static String graphml = file + "\\";

    IAuditor auditor = null;

    @Before
    public void beforeTest() throws Exception {
        final IDataModel model = Converters.toDataModel(new XSSFWorkbook(path));
        GraphTestUtil.initExternalServices(model);
        auditor = new SpreadsheetAuditor(new SpreadsheetEvaluator(model));
    }

    @After
    public void afterTest() throws Exception {
        super.after();
    }

    @Test
    public void assert_ExcelFile_SerializedGraph_No_Join() throws Exception {
        graph = auditor.buildExecutionGraph();
        super.compare_ExcelFile_SerializedGraph(ADVANCED_CONF_TESTS_DIR, graphml, suffix);
    }

    @Test
    public void assert_ExcelFile_SerializedGraph_Join_All() throws Exception {
        graph = auditor.buildExecutionGraph(ExecutionGraphConfig.JOIN_ALL_DUPLICATE_VERTICES);
        super.compare_ExcelFile_SerializedGraph(ADVANCED_CONF_TESTS_DIR, graphml, suffix1);
    }

    @Test
    public void assert_ExcelFile_SerializedGraph_Join_2() throws Exception {
        graph = auditor.buildExecutionGraph(ExecutionGraphConfig.LIMIT_TO_2_DUPLICATE_VERTICES);
        super.compare_ExcelFile_SerializedGraph(ADVANCED_CONF_TESTS_DIR, graphml, suffix2);
    }

    @Test
    public void assert_ExcelFile_SerializedGraph_Join_5() throws Exception {
        graph = auditor.buildExecutionGraph(ExecutionGraphConfig.LIMIT_TO_5_DUPLICATE_VERTICES);
        super.compare_ExcelFile_SerializedGraph(ADVANCED_CONF_TESTS_DIR, graphml, suffix3);
    }

    @Test
    public void assert_ExcelFile_SerializedGraph_Join_10() throws Exception {
        graph = auditor.buildExecutionGraph(ExecutionGraphConfig.LIMIT_TO_10_DUPLICATE_VERTICES);
        super.compare_ExcelFile_SerializedGraph(ADVANCED_CONF_TESTS_DIR, graphml, suffix4);
    }

}
