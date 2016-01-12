package com.dataart.spreadsheetanalytics.funcexec;

import static com.dataart.spreadsheetanalytics.model.A1Address.fromA1Address;
import static org.assertj.core.api.Assertions.assertThat;

import java.util.Map;

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
import com.dataart.spreadsheetanalytics.api.model.IA1Address;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IEvaluationResult;
import com.dataart.spreadsheetanalytics.engine.Converters;
import com.dataart.spreadsheetanalytics.engine.DefineFunctionMeta;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;

@State(Scope.Benchmark)
public class FUNCEXEC_vs_PLAIN_Test extends BenchmarkTestParent {

    @Param({"1", "100", "1000"}) public int cell_iterations;
    
    String columnA = "A";
    String columnB = "B";
    int from = 2;

    Double[] expectedValues;

    IDataModel dataModel;
    IEvaluator evaluator;
    
    IA1Address[] addressA;
    IA1Address[] addressB;

    @Setup(Level.Trial)
    public void initialize() throws Exception {
        String excelFile = "src/test/resources/datamodel/funcexec/FUNCEXEC_vs_PLAIN_" + cell_iterations + "times.xlsx";
        
        this.dataModel = Converters.toDataModel(new XSSFWorkbook(excelFile));
        this.evaluator = new SpreadsheetEvaluator(dataModel);

        external.getDataModelAccessor().add(this.dataModel);
        Map<DefineFunctionMeta, IDataModel> defineModels = Converters.toMetaFunctions(new XSSFWorkbook(excelFile), DefineFunctionMeta.class);
        defineModels.forEach((k, v) -> {
            external.getMetaFunctionAccessor().add(k);
            external.getDataModelAccessor().add(v);
        });

        this.expectedValues = new Double[from + cell_iterations]; 
        for (int i = from; i < from + cell_iterations; i++)
            this.expectedValues[i] = (Double) evaluator.evaluate(fromA1Address(columnB + i)).getResult().get();

        this.addressA = new IA1Address[from + cell_iterations];
        this.addressB = new IA1Address[from + cell_iterations];
        for (int i = from; i < from + cell_iterations; i++) {
            this.addressA[i] = fromA1Address(columnA + i);
            this.addressB[i] = fromA1Address(columnB + i);
        }
    }

    @Benchmark
    public void evaluate_ExcelDataModelFuncexec_ExecutionTimeIsOk(FUNCEXEC_vs_PLAIN_Test state, Blackhole bh) {
        for (int i = state.from; i < state.from + state.cell_iterations; i++) {
            IEvaluationResult<ICellValue> value = state.evaluator.evaluate(state.addressA[i]);
            assertThat(value.getResult().get()).isEqualTo(state.expectedValues[i]); /* comment for better performance */
            bh.consume(value);
        }
    }

    @Benchmark
    public void evaluate_ExcelDataModelPlainFormula_ExecutionTimeIsOk(FUNCEXEC_vs_PLAIN_Test state, Blackhole bh) {
        for (int i = state.from; i < state.from + state.cell_iterations; i++) {
            IEvaluationResult<ICellValue> value = state.evaluator.evaluate(state.addressB[i]);
            assertThat(value.getResult().get()).isEqualTo(state.expectedValues[i]); /* comment for better performance */
            bh.consume(value);
        }
    }

}
