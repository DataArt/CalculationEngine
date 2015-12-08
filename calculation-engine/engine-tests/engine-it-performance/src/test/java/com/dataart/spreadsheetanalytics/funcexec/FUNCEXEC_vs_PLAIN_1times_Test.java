package com.dataart.spreadsheetanalytics.funcexec;

import static org.assertj.core.api.StrictAssertions.assertThat;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;

import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openjdk.jmh.annotations.Benchmark;
import org.openjdk.jmh.annotations.Level;
import org.openjdk.jmh.annotations.Scope;
import org.openjdk.jmh.annotations.Setup;
import org.openjdk.jmh.annotations.State;
import org.openjdk.jmh.infra.Blackhole;

import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.engine.Converters;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.model.A1Address;

public class FUNCEXEC_vs_PLAIN_1times_Test extends ZParentTest {

    @State(Scope.Benchmark)
    public static class BenchmarkStateEvaluator {
        int iterations = 1;
        String excelFile = "src/test/resources/datamodel/funcexec/FUNCEXEC_vs_PLAIN_" + iterations + "times.xlsx";

        Map<ICellAddress, Double> expectedValues;

        IDataModel dataModel;
        IEvaluator evaluator;
        Map<Integer, ICellAddress> addressMapA;
        Map<Integer, ICellAddress> addressMapB;

        @Setup(Level.Trial)
        public void initialize() throws Exception {
            this.dataModel = Converters.toDataModel(new XSSFWorkbook(excelFile));
            this.evaluator = new SpreadsheetEvaluator(dataModel);

            external.getDataModelAccessor().addDataModel(this.dataModel);
            external.getAttributeFunctionStorage().refreshDefines(new HashSet<>(external.getDataModelAccessor().getDataModels().values()));

            this.expectedValues = new HashMap<>();

            for (int i = from; i < from + iterations; i++) {
                ICellAddress address = A1Address.fromA1Address(columnB + i);
                Double value = (Double) evaluator.evaluate(address).get();
                this.expectedValues.put(address, value);
                this.expectedValues.put(A1Address.fromA1Address(columnA + i), value);
            }

            this.addressMapA = new HashMap<>();
            this.addressMapB = new HashMap<>();
            for (int i = from; i < from + iterations; i++) {
                this.addressMapA.put(i, A1Address.fromA1Address(columnA + i));
                this.addressMapB.put(i, A1Address.fromA1Address(columnB + i));
            }
        }

        ICellAddress addressAtColumnA(int i) { return addressMapA.get(i); }
        ICellAddress addressAtColumnB(int i) { return addressMapB.get(i); }
    }

    @Benchmark
    public void evaluate_ExcelDataModelFuncexec_ExecutionTimeIsOk(BenchmarkStateEvaluator state, Blackhole bh) {
        for (int i = from; i < from + state.iterations; i++) {
            ICellValue value = state.evaluator.evaluate(state.addressAtColumnA(i));
            assertThat(value.get()).isEqualTo(state.expectedValues.get(state.addressAtColumnA(i))); /* comment for better performance */
            bh.consume(value);
        }
    }

    @Benchmark
    public void evaluate_ExcelDataModelPlainFormula_ExecutionTimeIsOk(BenchmarkStateEvaluator state, Blackhole bh) {
        for (int i = from; i < from + state.iterations; i++) {
            ICellValue value = state.evaluator.evaluate(state.addressAtColumnB(i));
            assertThat(value.get()).isEqualTo(state.expectedValues.get(state.addressAtColumnB(i))); /* comment for better performance */
            bh.consume(value);
        }
    }

}
