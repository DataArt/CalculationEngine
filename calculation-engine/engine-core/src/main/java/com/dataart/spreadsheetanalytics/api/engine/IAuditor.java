package com.dataart.spreadsheetanalytics.api.engine;

import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraph;

public interface IAuditor {

    IExecutionGraph buildStaticExecutionGraph(XSSFWorkbook model);
    
    IExecutionGraph buildDynamicExecutionGraph(XSSFWorkbook model);

    IExecutionGraph buildStaticExecutionGraph(XSSFWorkbook model, ICellAddress cell);

    IExecutionGraph buildDynamicExecutionGraph(XSSFWorkbook model, ICellAddress cell);

}
