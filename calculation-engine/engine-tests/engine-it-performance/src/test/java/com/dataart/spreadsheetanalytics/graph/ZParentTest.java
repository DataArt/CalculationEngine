package com.dataart.spreadsheetanalytics.graph;

import static org.assertj.core.api.StrictAssertions.assertThat;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

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
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraph;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetAuditor;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.DataModel;

public abstract class ZParentTest extends BenchmarkTestParent {

    static String description;
    static String excelFile;
    static String column = "A";
    static int from = 1;
    static int iterations = -1;
    static Object expectedValue;
  
    static DataModel dataModel;
    static IEvaluator evaluator;
    static IAuditor auditor;

    public static void before() throws Exception {
        dataModel = new DataModel(excelFile, excelFile);
        evaluator = new SpreadsheetEvaluator(dataModel);
        auditor = new SpreadsheetAuditor((SpreadsheetEvaluator) evaluator);
    }

    @Test
    public void startAllBenchmarks() throws Exception {
        Collection<RunResult> rrs = launchBenchmark(getClass().getSimpleName());
        addBenchmarkResultsToReport(getClass().getSimpleName(), description, excelFile, rrs);
    }

    @Benchmark
    public void evaluate_ExcelDataModel_ExecutionTimeIsOk(BenchmarkStateEvaluator state, Blackhole bh) {
        for (int i = from; i < from + iterations; i++) { 
            ICellValue value = state.evaluator.evaluate(state.addressAt(i));
            assertThat(value.get()).isEqualTo(expectedValue); /* comment for better performance */
            bh.consume(value);
        }
    }
    
    @Test
    public void evaluate_ExcelDataModel_ValuesAreOk() {

        for (int i = from; i < from + iterations; i++) {
            //given
            ICellAddress cell = A1Address.fromA1Address(column + i);
            
            //when
            ICellValue value = evaluator.evaluate(cell);

            //then
            assertThat(value).isNotNull();
            assertThat(value.get()).overridingErrorMessage("expected:<[%s]> but was:<[%s] at %s]>", expectedValue, value.get(), cell.a1Address().address())
                                   .isEqualTo(expectedValue);
        }
    }
    
    @Benchmark
    public void buildGraph_ExcelDataModel_ExecutionTimeIsOk(BenchmarkStateAuditor state, Blackhole bh) {
        for (int i = from; i < from + iterations; i++) {
            IExecutionGraph graph = state.auditor.buildDynamicExecutionGraph(state.addressAt(i));
            assertThat(graph.getRootVertex().value().get()).isEqualTo(expectedValue); /* comment for better performance */
            bh.consume(graph);
        }
    }
    
    @Test
    public void buildGraph_ExcelDataModel_ValuesAreOk() {

        for (int i = from; i < from + iterations; i++) {
            //given
            ICellAddress cell = A1Address.fromA1Address(column + i);
            
            //when
            IExecutionGraph graph = auditor.buildDynamicExecutionGraph(cell);

            //then
            assertThat(graph).isNotNull();
            assertThat(graph.getRootVertex().value()).isNotNull();
            assertThat(graph.getRootVertex().value().get()).overridingErrorMessage("expected:<[%s]> but was:<[%s] at %s]>", expectedValue, graph.getRootVertex().value().get(), graph.getRootVertex().name())
                                                           .isEqualTo(expectedValue);
        }
    }

    @State(Scope.Benchmark)
    public static class BenchmarkStateEvaluator {
        DataModel dataModel;
        IEvaluator evaluator;
        Map<Integer, ICellAddress> addressMap;

        @Setup(Level.Trial)
        public void initialize() throws Exception {
            this.dataModel = new DataModel(excelFile + "_Benchmark", excelFile);
            this.evaluator = new SpreadsheetEvaluator(dataModel);
            
            this.addressMap = new HashMap<>();
            for (int i = from; i < from + iterations; i++)
                this.addressMap.put(i, A1Address.fromA1Address(column + i));
        }
        
        ICellAddress addressAt(int i) {
            return addressMap.get(i);
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
