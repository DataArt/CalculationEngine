package com.dataart.spreadsheetanalytics.graph;

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
import com.dataart.spreadsheetanalytics.api.engine.IAuditor;
import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.IA1Address;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IEvaluationResult;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraph;
import com.dataart.spreadsheetanalytics.engine.Converters;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetAuditor;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;

@State(Scope.Benchmark)
public class Graph_vs_Evaluate_Test extends BenchmarkTestParent {

    @Param({"1", "10", "100", "1000"}) public int cell_iterations;
    @Param({"SIMPLE", "COMPLEX"}) public String formula_complexity;

    String column = "A";
    int from = 1;

    Object expectedValue = new Double(528.0);

    IDataModel dataModel;
    IEvaluator evaluator;
    IAuditor auditor;

    IA1Address[] address;

    @Setup(Level.Trial)
    public void initialize() throws Exception {
        String excelFile = "src/test/resources/datamodel/graph/" + formula_complexity + "_" + cell_iterations + "times.xlsx";
        
        this.dataModel = Converters.toDataModel(new XSSFWorkbook(excelFile));
        this.evaluator = new SpreadsheetEvaluator(dataModel);
        this.auditor = new SpreadsheetAuditor(dataModel);

        this.address = new IA1Address[from + cell_iterations];
        for (int i = from; i < from + cell_iterations; i++)
            this.address[i] = fromA1Address(column + i);
    }

    @Benchmark
    public void evaluate_ExcelDataModel_ExecutionTimeIsOk(Graph_vs_Evaluate_Test state, Blackhole bh) {
        for (int i = state.from; i < state.from + state.cell_iterations; i++) {
            IEvaluationResult<ICellValue> value = state.evaluator.evaluate(state.address[i]);
            assertThat(value.getResult().get()).isEqualTo(state.expectedValue); /* comment for better performance */
            bh.consume(value);
        }
    }

    @Benchmark
    public void graph_ExcelDataModel_ExecutionTimeIsOk(Graph_vs_Evaluate_Test state, Blackhole bh) {
        for (int i = state.from; i < state.from + state.cell_iterations; i++) {
            IExecutionGraph graph = state.auditor.buildExecutionGraph(state.address[i]);
            assertThat(graph.getRootVertex().value()).isEqualTo(state.expectedValue); /* comment for better performance */
            bh.consume(graph);
        }
    }

}
