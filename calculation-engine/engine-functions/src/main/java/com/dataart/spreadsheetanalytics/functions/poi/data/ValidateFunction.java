package com.dataart.spreadsheetanalytics.functions.poi.data;

import java.util.Arrays;

import org.apache.poi.ss.formula.EvaluationCell;
import org.apache.poi.ss.formula.EvaluationWorkbook;
import org.apache.poi.ss.formula.OperationEvaluationContext;
import org.apache.poi.ss.formula.eval.BlankEval;
import org.apache.poi.ss.formula.eval.BoolEval;
import org.apache.poi.ss.formula.eval.RefEval;
import org.apache.poi.ss.formula.eval.StringEval;
import org.apache.poi.ss.formula.eval.ValueEval;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.dataart.spreadsheetanalytics.api.engine.ExternalServices;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.engine.PoiValueConverters;
import com.dataart.spreadsheetanalytics.functions.poi.CustomFunction;
import com.dataart.spreadsheetanalytics.functions.poi.FunctionMeta;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.CellValue;
import com.dataart.spreadsheetanalytics.model.DataSet;
import com.dataart.spreadsheetanalytics.model.DsCell;
import com.dataart.spreadsheetanalytics.model.DsRow;

@FunctionMeta(value = "VALIDATE")
public class ValidateFunction implements CustomFunction {

    private static final Logger log = LoggerFactory.getLogger(FuncexecFunction.class);

    protected ExternalServices external = ExternalServices.INSTANCE;

    @Override
    public ValueEval evaluate(ValueEval[] args, OperationEvaluationContext ec) {
        log.debug("In evaluate() of FUNCEXEC function. Args = {}", Arrays.toString(args));

        if (args.length != 4) {
            throw new IllegalArgumentException("VALIDATE function should have 4 arguments");
        }

        BoolEval expression = null;

        if (args[0] instanceof BoolEval) {
            expression = (BoolEval) args[0];
        } else {
            expression = getTOrNullFromRef(BoolEval.class, args[0]);
            if (expression == null) {
                throw new IllegalArgumentException(
                        "first argument of the VALIDATE function should be boolean expression or a reference to boolean expression");
            }
        }

        StringEval messageEval = null;

        if (args[1] instanceof StringEval) {
            messageEval = (StringEval) args[1];
        } else {
            messageEval = getTOrNullFromRef(StringEval.class, args[1]);
            if (messageEval == null) {
                throw new IllegalArgumentException("second argument of the VALIDATE function should be text message");
            }
        }

        if (!(args[2] instanceof RefEval)) {
            throw new IllegalArgumentException("third argument of the VALIDATE function should be reference to the target cell");
        }

        StringEval severityEval = null;

        if (args[3] instanceof StringEval) {
            severityEval = (StringEval) args[3];
        } else {
            severityEval = getTOrNullFromRef(StringEval.class, args[3]);
            if (severityEval == null) {
                throw new IllegalArgumentException("fourth argument of the VALIDATE function should be string");
            }
        }

        String severity = severityEval.getStringValue();

        if (!("Error".equals(severity) || "Warning".equals(severity))) {
            throw new IllegalArgumentException("third argument of the VALIDATE function should be \"Error\" or \"Warning\"");
        }

        String message = messageEval.getStringValue();
        RefEval ref = (RefEval) args[2];

        if (expression.getBooleanValue()) { return BlankEval.instance; }
        else {
            try {
                DataSet dataSet = (DataSet) external.getDataSetStorage().getDataSet("Validation");
                DsRow row = dataSet.createRow();

                DsCell messageCell = row.createCell();
                messageCell.value(new CellValue(message));

                DsCell severityCell = row.createCell();
                severityCell.value(new CellValue(severity));

                DsCell cellCellAddress = row.createCell();
                cellCellAddress.value(new CellValue(A1Address.fromRowColumn(ref.getRow(), ref.getColumn()).address()));

                ICellValue targetCellValue = PoiValueConverters.resolveValueEval(ref.getInnerValueEval(0));

                DsCell cellCellFormula = row.createCell();
                EvaluationWorkbook evWbk = ec.getWorkbook();

                EvaluationCell evCell = evWbk.getSheet(0).getCell(ref.getRow(), ref.getColumn());
                String formulaString = evWbk.getFormulaString(evCell);
                cellCellFormula.value(formulaString == null ? targetCellValue : new CellValue(formulaString));

                DsCell cellCellValue = row.createCell();
                cellCellValue.value(targetCellValue);

                return args[1];

            } catch (Exception e) {
                log.debug("The excetpion was caught during opening the Validation dataset");
                return BlankEval.instance;
            }
        }
    }

    private static <T extends ValueEval> T getTOrNullFromRef(Class<T> tClass, ValueEval value) {
        if (!(value instanceof RefEval)) { return null; }        
        ValueEval candidateValue = ((RefEval) value).getInnerValueEval(0);
        if (candidateValue.getClass() == tClass) { return (T) candidateValue; }
        else { return null; }
    }

}
