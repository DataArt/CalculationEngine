package com.dataart.spreadsheetanalytics.dslookup;

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
import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.IA1Address;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IEvaluationResult;
import com.dataart.spreadsheetanalytics.engine.Converters;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;

@State(Scope.Benchmark)
public class DSLOOKUP_not_found_Test extends BenchmarkTestParent {

    @Param({"10", "100", "1000"}) public int data_set_size;
    @Param({"sorted", "shuffled"}) public String data_set_type;

    String columnA = "A";
    String columnB = "B";
    int from = 1;

    int dslookups = 10;
    int cell_iterations = dslookups * 4;

    Object[] expectedValues;

    IDataModel dataModel;
    IEvaluator evaluator;

    IA1Address[] address;

    @Setup(Level.Trial)
    public void initialize() throws Exception {
        String excelFile = "src/test/resources/datamodel/dslookup/" + data_set_type + "/DSLOOKUP_" + data_set_size + "set_" + dslookups + "times_not_found.xlsx";
        String dataSet = "src/test/resources/dataset/" + data_set_type + data_set_size + ".xlsx";
        
        this.dataModel = Converters.toDataModel(new XSSFWorkbook(excelFile));
        this.evaluator = new SpreadsheetEvaluator(dataModel);

        external.getDataSetAccessor().add(Converters.toDataSet(new XSSFWorkbook(dataSet)));

        this.expectedValues = new Object[from + cell_iterations]; 
        for (int i = from; i < from + cell_iterations; i++)
            this.expectedValues[i] = evaluator.evaluate(fromA1Address(columnB + i)).getResult().get();

        this.address = new IA1Address[from + cell_iterations];
        for (int i = from; i < from + cell_iterations; i++)
            this.address[i] = fromA1Address(columnA + i);
    }

    @Benchmark
    public void evaluate_ExcelDataModel_ExecutionTimeIsOk(DSLOOKUP_not_found_Test state, Blackhole bh) {
        for (int i = state.from; i < state.from + state.cell_iterations; i++) {
            IEvaluationResult<ICellValue> value = state.evaluator.evaluate(state.address[i]);
            assertThat(value.getResult().get()).isEqualTo(state.expectedValues[i]); /* comment for better performance */
            bh.consume(value);
        }
    }

}
