package com.dataart.spreadsheetanalytics.functions.poi.data;

import static org.apache.poi.common.fork.ExecutionGraphBuilderUtils.coerceValueTo;
import static org.apache.poi.ss.formula.eval.OperandResolver.getSingleValue;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Locale;
import java.util.Set;

import org.apache.poi.ss.formula.EvaluationWorkbook;
import org.apache.poi.ss.formula.OperationEvaluationContext;
import org.apache.poi.ss.formula.eval.BoolEval;
import org.apache.poi.ss.formula.eval.ErrorEval;
import org.apache.poi.ss.formula.eval.EvaluationException;
import org.apache.poi.ss.formula.eval.RefEval;
import org.apache.poi.ss.formula.eval.StringEval;
import org.apache.poi.ss.formula.eval.ValueEval;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.dataart.spreadsheetanalytics.api.model.CustomFunctionMeta;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.ICustomFunction;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.api.model.IDsRow;
import com.dataart.spreadsheetanalytics.engine.ConverterUtils;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.CellValue;
import com.dataart.spreadsheetanalytics.model.DataSet;

/**
 * https://github.com/DataArt/CalculationEngine/wiki/Custom-Functions-List-and-Description#validate
 */
@CustomFunctionMeta(value = "VALIDATE")
public class ValidateFunction implements ICustomFunction {
    private static final Logger log = LoggerFactory.getLogger(FuncexecFunction.class);

    public static final StringEval BLANK = new StringEval("");
    public static final String DATASET_NAME = "Validation";
    
    static final Set<String> SEVERITIES = new HashSet<>(Arrays.asList("E", "W"));

    protected static final String FIELD_1 = "Message";
    protected static final String FIELD_2 = "Severity";
    protected static final String FIELD_3 = "Cell";
    protected static final String FIELD_4 = "CellContent";
    protected static final String FIELD_5 = "CellValue";

    @Override
    public ValueEval evaluate(ValueEval[] args, OperationEvaluationContext ec) {
        log.debug("In evaluate() of VALIDATE function. Args = {}", Arrays.toString(args));

        //number of arguments
        if (args.length != 4) {
            log.error("VALIDATE function must have 4 arguments.");
            return ErrorEval.VALUE_INVALID;
        }

        //1: boolean expression
        BoolEval expression = args[0] instanceof BoolEval
                            ? (BoolEval) args[0]
                            : dereference(BoolEval.class, args[0]);
                            
        if (expression == null) {
            log.error("First argument of the VALIDATE function should be boolean expression or a reference to boolean expression. But was {}", args[0]);
            return ErrorEval.VALUE_INVALID;
        }

        //message
        String message;
        try { message = (String) coerceValueTo(getSingleValue(args[1], ec.getRowIndex(), ec.getColumnIndex())); }
        catch (EvaluationException e) {
            log.error(String.format("Second argument of the VALIDATE function should be text message. But was: %s.", args[1]), e);
            return ErrorEval.VALUE_INVALID;
        }

        //reference to a cell
        if (!(args[2] instanceof RefEval)) {
            log.error("Third argument of the VALIDATE function should be reference to the target cell. But was {}", args[2]);
            return ErrorEval.VALUE_INVALID;
        }

        //severity
        String severity;
        try { severity = (String) coerceValueTo(getSingleValue(args[3], ec.getRowIndex(), ec.getColumnIndex())); }
        catch (EvaluationException e) {
            log.error(String.format("Fourth argument of the VALIDATE function should be a string (Severity). But was: %s.", args[3]), e);
            return ErrorEval.VALUE_INVALID;
        }
        severity = severity.toUpperCase(Locale.getDefault());

        if (!SEVERITIES.contains(severity)) {
            log.error("Severity {} is not supported by VALIDATE function.", severity);
            return ErrorEval.VALUE_INVALID;
        }
        
        //expression = TRUE - return nothing
        if (expression.getBooleanValue()) { return BLANK; }
        
        //expression = FALSE - log to dataset
        IDataSet dataSet = (IDataSet) ec.getCustomEvaluationContext().get(DATASET_NAME);
        if (dataSet == null) {
            log.error("No Validation DataSet in current context is found. The new one is about to be created.");
            dataSet = newValidationDataSet(DATASET_NAME);
            ec.getCustomEvaluationContext().set(DATASET_NAME, dataSet);
        }

        RefEval ref = (RefEval) args[2]; //cell
        
        IDsRow row = dataSet.addRow(); //new row in validation data set

        row.addCell().setValue(new CellValue(message)); //message
        row.addCell().setValue(new CellValue(severity)); //severity
        row.addCell().setValue(new CellValue(A1Address.fromRowColumn(ref.getRow(), ref.getColumn()).address())); //cell address

        ICellValue targetCellValue = ConverterUtils.resolveValueEval(ref.getInnerValueEval(0));
        EvaluationWorkbook evWbk = ec.getWorkbook();
        String formulaString = evWbk.getFormulaString(evWbk.getSheet(0).getCell(ref.getRow(), ref.getColumn()));
        
        row.addCell().setValue(formulaString == null ? targetCellValue : new CellValue(formulaString)); //cell formula
        row.addCell().setValue(targetCellValue); //cell value

        return args[1];
    }

    protected static IDataSet newValidationDataSet(String name) {
        DataSet validateSet = new DataSet(DATASET_NAME);

        IDsRow r = validateSet.addRow();
        r.addCell().setValue(new CellValue(FIELD_1));
        r.addCell().setValue(new CellValue(FIELD_2));
        r.addCell().setValue(new CellValue(FIELD_3));
        r.addCell().setValue(new CellValue(FIELD_4));
        r.addCell().setValue(new CellValue(FIELD_5));
        
        return validateSet;
    }
    
    protected static <T extends ValueEval> T dereference(Class<T> target, ValueEval value) {
        if (!(value instanceof RefEval)) { return null; }
        
        ValueEval candidateValue = ((RefEval) value).getInnerValueEval(0);
        return candidateValue.getClass() == target ? (T) candidateValue : null;
    }

}
