package com.dataart.spreadsheetanalytics.baseline;

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
import com.dataart.spreadsheetanalytics.model.A1Address;

@State(Scope.Benchmark)
public class Baseline_A1_is_B1_plus_C1_Test extends BenchmarkTestParent {

    @Param({"1"}) public int iterations;

    Object expectedValue = new Double(5.0);
    String column = "A";

    IDataModel dataModel;
    IEvaluator evaluator;

    ICellAddress address;

    @Setup(Level.Trial)
    public void initialize() throws Exception {
        String excelFile = "src/test/resources/datamodel/baseline/A1_is_B1_plus_C1.xlsx";

        this.dataModel = Converters.toDataModel(new XSSFWorkbook(excelFile));
        this.evaluator = new SpreadsheetEvaluator(dataModel);
        
        address = A1Address.fromA1Address(column + iterations);
    }

    @Benchmark
    public void evaluate_ExcelDataModel_ExecutionTimeIsOk(Baseline_A1_is_B1_plus_C1_Test state, Blackhole bh) {
        IEvaluationResult<ICellValue> value = state.evaluator.evaluate(state.address);
        assertThat(value.getResult().get()).isEqualTo(state.expectedValue); /* comment for better performance */
        bh.consume(value);
    }

}
