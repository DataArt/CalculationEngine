package com.dataart.spreadsheetanalytics.nativepoi;

import static com.dataart.spreadsheetanalytics.model.A1Address.fromA1Address;
import static org.assertj.core.api.Assertions.assertThat;

import org.apache.poi.ss.formula.EvaluationCell;
import org.apache.poi.ss.formula.IStabilityClassifier;
import org.apache.poi.ss.formula.WorkbookEvaluator;
import org.apache.poi.ss.formula.eval.ValueEval;
import org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook;
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
import com.dataart.spreadsheetanalytics.api.model.IEvaluationResult;
import com.dataart.spreadsheetanalytics.engine.Converters;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;

@State(Scope.Benchmark)
public class CalcEngine_vs_POI_Formula_Set_Test extends BenchmarkTestParent {

    @Param({"100"}) public int cell_iterations;

    int columnAIndex = 0;
    String columnA = "A";
    String columnB = "B";
    int from = 1;

    Object[] ccExpectedValues;
    ValueEval[] poiExpectedValues;

    IEvaluator ccEvaluator;
    WorkbookEvaluator poiEvaluator;
    
    ICellAddress[] addressA;
    EvaluationCell[] addressB;

    @Setup(Level.Trial)
    public void initialize() throws Exception {
        String excelFile = "src/test/resources/datamodel/nativepoi/CalcEngine_vs_POI_set" + cell_iterations + "formulas.xlsx";

        XSSFWorkbook wb = new XSSFWorkbook(excelFile);
        XSSFEvaluationWorkbook ewb = XSSFEvaluationWorkbook.create(wb);

        this.ccEvaluator = new SpreadsheetEvaluator(Converters.toDataModel(wb));
        this.poiEvaluator = new WorkbookEvaluator(ewb, IStabilityClassifier.TOTALLY_IMMUTABLE, null);

        this.ccExpectedValues = new Object[from + cell_iterations];
        for (int i = from; i < from + cell_iterations; i++)
            this.ccExpectedValues[i] = ccEvaluator.evaluate(fromA1Address(columnB + i)).getResult().get();

        this.poiExpectedValues = new ValueEval[from + cell_iterations - 1];
        for (int i = from - 1; i < from + cell_iterations - 1; i++)
            this.poiExpectedValues[i] = poiEvaluator.evaluate(ewb.getSheet(0).getCell(i, columnAIndex));

        this.addressA = new ICellAddress[from + cell_iterations];
        for (int i = from; i < from + cell_iterations; i++)
            this.addressA[i] = fromA1Address(columnA + i);

        this.addressB = new EvaluationCell[from + cell_iterations - 1];
        for (int i = from - 1; i < from + cell_iterations - 1; i++)
            this.addressB[i] = ewb.getSheet(0).getCell(i, columnAIndex);
    }

    @Benchmark
    public void calcengine_ExcelDataModel_ExecutionTimeIsOk(CalcEngine_vs_POI_Formula_Set_Test state, Blackhole bh) {
        for (int i = state.from; i < state.from + state.cell_iterations; i++) {
            IEvaluationResult<ICellValue> value = state.ccEvaluator.evaluate(state.addressA[i]);
            assertThat(value.getResult().get()).isEqualTo(state.ccExpectedValues[i]); /* comment for better performance */
            bh.consume(value);
        }
    }

    @Benchmark
    public void apachepoi_ExcelFile_ExecutionTimeIsOk(CalcEngine_vs_POI_Formula_Set_Test state, Blackhole bh) {
        for (int i = state.from - 1; i < state.from + state.cell_iterations - 1; i++) {
            ValueEval value = state.poiEvaluator.evaluate(state.addressB[i]);
            assertThat(value).isEqualTo(state.poiExpectedValues[i]); /* comment for better performance */
            bh.consume(value);
        }
    }

}
