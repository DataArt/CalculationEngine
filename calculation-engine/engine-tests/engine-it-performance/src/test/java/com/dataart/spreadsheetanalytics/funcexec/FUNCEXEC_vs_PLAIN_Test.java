package com.dataart.spreadsheetanalytics.funcexec;

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
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IEvaluationResult;
import com.dataart.spreadsheetanalytics.engine.Converters;
import com.dataart.spreadsheetanalytics.engine.DefineFunctionMeta;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.model.A1Address;

@State(Scope.Benchmark)
public class FUNCEXEC_vs_PLAIN_Test extends BenchmarkTestParent {

    @Param({"1", "100", "1000"})
    public int iterations;
    
    String columnA = "A";
    String columnB = "B";
    int from = 2;

    Double[] expectedValuesA;
    Double[] expectedValuesB;

    IDataModel dataModel;
    IEvaluator evaluator;
    
    ICellAddress[] addressA;
    ICellAddress[] addressB;

    @Setup(Level.Trial)
    public void initialize() throws Exception {
        String excelFile = "src/test/resources/datamodel/funcexec/FUNCEXEC_vs_PLAIN_" + iterations + "times.xlsx";
        
        this.dataModel = Converters.toDataModel(new XSSFWorkbook(excelFile));
        this.evaluator = new SpreadsheetEvaluator(dataModel);

        external.getDataModelAccessor().add(this.dataModel);
        Map<DefineFunctionMeta, IDataModel> defineModels = Converters.toMetaFunctions(new XSSFWorkbook(excelFile), DefineFunctionMeta.class);
        defineModels.forEach((k, v) -> {
            external.getMetaFunctionAccessor().add(k);
            external.getDataModelAccessor().add(v);
        });

        this.expectedValuesA = new Double[from + iterations]; 
        this.expectedValuesB = new Double[from + iterations];

        for (int i = from; i < from + iterations; i++) {
            Double value = (Double) evaluator.evaluate(A1Address.fromA1Address(columnB + i)).getResult().get();
            
            this.expectedValuesA[i] = value;
            this.expectedValuesB[i] = value;
        }

        this.addressA = new ICellAddress[from + iterations];
        this.addressB = new ICellAddress[from + iterations];
        for (int i = from; i < from + iterations; i++) {
            this.addressA[i] = A1Address.fromA1Address(columnA + i);
            this.addressB[i] = A1Address.fromA1Address(columnB + i);
        }
    }

    @Benchmark
    public void evaluate_ExcelDataModelFuncexec_ExecutionTimeIsOk(FUNCEXEC_vs_PLAIN_Test state, Blackhole bh) {
        for (int i = state.from; i < state.from + state.iterations; i++) {
            IEvaluationResult<ICellValue> value = state.evaluator.evaluate(state.addressA[i]);
            assertThat(value.getResult().get()).isEqualTo(state.expectedValuesA[i]); /* comment for better performance */
            bh.consume(value);
        }
    }

    @Benchmark
    public void evaluate_ExcelDataModelPlainFormula_ExecutionTimeIsOk(FUNCEXEC_vs_PLAIN_Test state, Blackhole bh) {
        for (int i = state.from; i < state.from + state.iterations; i++) {
            IEvaluationResult<ICellValue> value = state.evaluator.evaluate(state.addressB[i]);
            assertThat(value.getResult().get()).isEqualTo(state.expectedValuesB[i]); /* comment for better performance */
            bh.consume(value);
        }
    }

}
