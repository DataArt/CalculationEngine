package com.dataart.spreadsheetanalytics.query;

import static com.dataart.spreadsheetanalytics.model.A1Address.fromA1Address;
import static org.assertj.core.api.Assertions.assertThat;

import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openjdk.jmh.annotations.Benchmark;
import org.openjdk.jmh.annotations.Level;
import org.openjdk.jmh.annotations.Param;
import org.openjdk.jmh.annotations.Scope;
import org.openjdk.jmh.annotations.Setup;
import org.openjdk.jmh.annotations.State;
import org.openjdk.jmh.infra.Blackhole;

import com.dataart.spreadsheetanalytics.BenchmarkTestParent;
import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IEvaluationResult;
import com.dataart.spreadsheetanalytics.engine.Converters;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;

@State(Scope.Benchmark)
public class QUERY_Test extends BenchmarkTestParent {

    @Param({"1", "100", "1000"}) public int cell_iterations;
    @Param({"10", "100", "1000"}) int data_set_size;

    String column = "A";
    int from = 1;
    Object expectedValue = "Column 1";

    IDataModel dataModel;
    IEvaluator evaluator;

    ICellAddress[] address;

    @Setup(Level.Trial)
    public void initialize() throws Exception {
        String excelFile = "src/test/resources/datamodel/query/QUERY_" + data_set_size + "set_" + cell_iterations + "times.xlsx";
        String dataSet = "src/test/resources/dataset/shuffled" + data_set_size + ".xlsx";
        
        external.getDataSetAccessor().add(Converters.toDataSet(new XSSFWorkbook(dataSet)));
        
        this.dataModel = Converters.toDataModel(new XSSFWorkbook(excelFile));
        this.evaluator = new SpreadsheetEvaluator(dataModel);
        
        this.address = new ICellAddress[from + cell_iterations];
        for (int i = from; i < from + cell_iterations; i++)
            this.address[i] = fromA1Address(column + i);
    }

    @Benchmark
    public void evaluate_ExcelDataModel_ExecutionTimeIsOk(QUERY_Test state, Blackhole bh) {
        for (int i = state.from; i < state.from + state.cell_iterations; i++) {
            IEvaluationResult<ICellValue> value = state.evaluator.evaluate(state.address[i]);
            assertThat(value.getResult().get()).isEqualTo(expectedValue); /* comment for better performance */
            bh.consume(value);
        }
    }

}
