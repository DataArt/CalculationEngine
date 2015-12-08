package com.dataart.spreadsheetanalytics.graph;

import static org.assertj.core.api.StrictAssertions.assertThat;

import java.util.HashMap;
import java.util.Map;

import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openjdk.jmh.annotations.Benchmark;
import org.openjdk.jmh.annotations.Level;
import org.openjdk.jmh.annotations.Scope;
import org.openjdk.jmh.annotations.Setup;
import org.openjdk.jmh.annotations.State;
import org.openjdk.jmh.infra.Blackhole;

import com.dataart.spreadsheetanalytics.api.engine.IAuditor;
import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IEvaluationResult;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraph;
import com.dataart.spreadsheetanalytics.engine.Converters;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetAuditor;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.model.A1Address;

public class COMPLEX_10times_Test extends ZParentTest {

    @State(Scope.Benchmark)
    public static class BenchmarkStateEvaluator {
        int iterations = 10;
        String excelFile = "src/test/resources/datamodel/graph/COMPLEX_" + iterations + "times.xlsx";
        Object expectedValue = new Double(528.0);

        IDataModel dataModel;
        IEvaluator evaluator;
        Map<Integer, ICellAddress> addressMap;

        @Setup(Level.Trial)
        public void initialize() throws Exception {
            this.dataModel = Converters.toDataModel(new XSSFWorkbook(excelFile));
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

    @Benchmark
    public void evaluate_ExcelDataModel_ExecutionTimeIsOk(BenchmarkStateEvaluator state, Blackhole bh) {
        for (int i = from; i < from + state.iterations; i++) {
            IEvaluationResult<ICellValue> value = state.evaluator.evaluate(state.addressAt(i));
            assertThat(value.getResult().get()).isEqualTo(state.expectedValue); /* comment for better performance */
            bh.consume(value);
        }
    }

    @Benchmark
    public void buildGraph_ExcelDataModel_ExecutionTimeIsOk(BenchmarkStateAuditor state, Blackhole bh) {
        for (int i = from; i < from + state.iterations; i++) {
            IExecutionGraph graph = state.auditor.buildExecutionGraph(state.addressAt(i));
            assertThat(graph.getRootVertex().value()).isEqualTo(state.expectedValue); /* comment for better performance */
            bh.consume(graph);
        }
    }

}
