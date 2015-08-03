package com.dataart.spreadsheetanalytics.engine;

import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReadWriteLock;
import java.util.concurrent.locks.ReentrantReadWriteLock;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.util.CellReference;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.dataart.spreadsheetanalytics.api.engine.IAuditor;
import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress.A1Address;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraph;
import com.dataart.spreadsheetanalytics.model.CellAddress;

public class SpreadsheetAuditor implements IAuditor {

    private final ReadWriteLock lock = new ReentrantReadWriteLock();

    protected final IEvaluator evaluator;

    public SpreadsheetAuditor(IEvaluator evaluator) {
        this.evaluator = evaluator;
    }

    @Override
    public IExecutionGraph buildStaticExecutionGraph(XSSFWorkbook model, ICellAddress cell) {
        return null;
    }
    
    @Override
    public IExecutionGraph buildStaticExecutionGraph(XSSFWorkbook model) {

        ExecutionGraphBuilder graphBuilder = new ExecutionGraphBuilder();

        Lock l = null;
        try {
            l = lock.readLock();

            ((SpreadsheetEvaluator) evaluator).setExecutionGraphBuilder(graphBuilder);

            //Model Iterator
            for (XSSFSheet xssfSheet : model)
                for (Row row : xssfSheet)
                    for (Cell cell : row) {

                        ICellAddress addr = new CellAddress()
                                                .a1Address(A1Address.from(new CellReference(cell).formatAsString()))
                                                .row(cell.getRowIndex())
                                                .column(cell.getColumnIndex());

                        ICellValue v = evaluator.evaluate(addr);
                        System.out.println(v);
                    }
        } finally {
            l.unlock();
        }

        return graphBuilder.get();
    }

    @Override
    public IExecutionGraph buildDynamicExecutionGraph(XSSFWorkbook model, ICellAddress cell) {
        // TODO Auto-generated method stub
        return null;
    }
    
    @Override
    public IExecutionGraph buildDynamicExecutionGraph(XSSFWorkbook model) {
        // TODO Auto-generated method stub
        return null;
    }

}
