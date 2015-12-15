package com.dataart.spreadsheetanalytics.dslookup.vlookup;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.HashMap;
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
import com.dataart.spreadsheetanalytics.api.model.IEvaluationResult;
import com.dataart.spreadsheetanalytics.engine.Converters;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.model.A1Address;

public class DSLOOKUP_vs_VLOOKUP_10set_4times_Test extends ZParentTest {

    @State(Scope.Benchmark)
    public static class BenchmarkStateEvaluator {
        int iterations = 4;
        int dataSetSize = 10;
        String excelFile = "src/test/resources/datamodel/dslookup/vlookup/DSLOOKUP_vs_VLOOKUP_" + dataSetSize + "set_" + iterations + "times.xlsx";
        String dataSet = "src/test/resources/dataset/SortedDataSet" + dataSetSize + ".xlsx";
        
        Map<ICellAddress, Object> expectedValues;
        
        IDataModel dataModel;
        IEvaluator evaluator;
        Map<Integer, ICellAddress> addressMapA;
        Map<Integer, ICellAddress> addressMapB;

        @Setup(Level.Trial)
        public void initialize() throws Exception {
            this.dataModel = Converters.toDataModel(new XSSFWorkbook(excelFile));
            this.evaluator = new SpreadsheetEvaluator(dataModel);
            
            external.getDataSetAccessor().add(Converters.toDataSet(new XSSFWorkbook(dataSet)));
            
            this.expectedValues = new HashMap<>();
            for (int i = from; i < from + iterations; i++) {
                Object val = evaluator.evaluate(A1Address.fromA1Address(columnB + i)).getResult().get();
                expectedValues.put(A1Address.fromA1Address(columnA + i), val);
                expectedValues.put(A1Address.fromA1Address(columnB + i), val);
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
    public void evaluate_ExcelDataModelDsLookup_ExecutionTimeIsOk(BenchmarkStateEvaluator state, Blackhole bh) {
        for (int i = from; i < from + state.iterations; i++) { 
            IEvaluationResult<ICellValue> value = state.evaluator.evaluate(state.addressAtColumnA(i));
            assertThat(value.getResult().get()).isEqualTo(state.expectedValues.get(state.addressAtColumnA(i))); /* comment for better performance */
            bh.consume(value);
        }
    }
    
    @Benchmark
    public void evaluate_ExcelDataModelVLookup_ExecutionTimeIsOk(BenchmarkStateEvaluator state, Blackhole bh) {
        for (int i = from; i < from + state.iterations; i++) { 
            IEvaluationResult<ICellValue> value = state.evaluator.evaluate(state.addressAtColumnB(i));
            assertThat(value.getResult().get()).isEqualTo(state.expectedValues.get(state.addressAtColumnB(i))); /* comment for better performance */
            bh.consume(value);
        }
    }
}
