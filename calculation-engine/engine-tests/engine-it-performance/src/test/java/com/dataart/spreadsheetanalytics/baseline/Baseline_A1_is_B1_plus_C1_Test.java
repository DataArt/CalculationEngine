package com.dataart.spreadsheetanalytics.baseline;

import static org.assertj.core.api.StrictAssertions.assertThat;

import java.util.Collection;

import org.junit.BeforeClass;
import org.junit.Test;
import org.openjdk.jmh.annotations.Benchmark;
import org.openjdk.jmh.annotations.Level;
import org.openjdk.jmh.annotations.Scope;
import org.openjdk.jmh.annotations.Setup;
import org.openjdk.jmh.annotations.State;
import org.openjdk.jmh.infra.Blackhole;
import org.openjdk.jmh.results.RunResult;

import com.dataart.spreadsheetanalytics.BenchmarkTestParent;
import com.dataart.spreadsheetanalytics.api.engine.IAuditor;
import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetAuditor;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.DataModel;

public class Baseline_A1_is_B1_plus_C1_Test extends BenchmarkTestParent {

    static String description;
    static String excelFile = "src/test/resources/datamodel/baseline/A1_is_B1_plus_C1.xlsx";
    static Object expectedValue = new Double(5.0);
    static String column = "A";
    static int iterations = 1;
  
    static DataModel dataModel;
    static IEvaluator evaluator;

    @BeforeClass
    public static void before() throws Exception {
        dataModel = new DataModel(excelFile, excelFile);
        evaluator = new SpreadsheetEvaluator(dataModel);
    }

    @Test
    public void startAllBenchmarks() throws Exception {
        Collection<RunResult> rrs = launchBenchmark(getClass().getSimpleName());
        addBenchmarkResultsToReport(getClass().getSimpleName(), description, excelFile, rrs);
    }

    @Benchmark
    public void evaluate_ExcelDataModel_ExecutionTimeIsOk(BenchmarkStateEvaluator state, Blackhole bh) {
        ICellValue value = state.evaluator.evaluate(state.address);
        assertThat(value.get()).isEqualTo(expectedValue); /* comment for better performance */
        bh.consume(value);
    }
    
    @Test
    public void evaluate_ExcelDataModel_ValuesAreOk() {
        //given
        ICellAddress cell = A1Address.fromA1Address(column + iterations);
        
        //when
        ICellValue value = evaluator.evaluate(cell);

        //then
        assertThat(value).isNotNull();
        assertThat(value.get()).overridingErrorMessage("expected:<[%s]> but was:<[%s] at %s]>", expectedValue, value.get(), cell.a1Address().address())
                               .isEqualTo(expectedValue);
    }
   
    @State(Scope.Benchmark)
    public static class BenchmarkStateEvaluator {
        DataModel dataModel;
        IEvaluator evaluator;
        ICellAddress address = A1Address.fromA1Address(column + iterations);

        @Setup(Level.Trial)
        public void initialize() throws Exception {
            this.dataModel = new DataModel(excelFile + "_Benchmark", excelFile);
            this.evaluator = new SpreadsheetEvaluator(dataModel);
        }
    }
    
    @State(Scope.Benchmark)
    public static class BenchmarkStateAuditor extends BenchmarkStateEvaluator {
        IAuditor auditor;

        @Setup(Level.Trial)
        public void initialize() throws Exception {
            super.initialize();
            this.auditor = new SpreadsheetAuditor((SpreadsheetEvaluator) this.evaluator);
        }
    }

}
