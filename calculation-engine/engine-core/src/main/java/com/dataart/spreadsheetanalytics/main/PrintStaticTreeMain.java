package com.dataart.spreadsheetanalytics.main;

import java.io.IOException;
import java.util.LinkedList;
import java.util.List;

import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.ss.formula.FormulaParser;
import org.apache.poi.ss.formula.FormulaType;
import org.apache.poi.ss.formula.ptg.AddPtg;
import org.apache.poi.ss.formula.ptg.DividePtg;
import org.apache.poi.ss.formula.ptg.MultiplyPtg;
import org.apache.poi.ss.formula.ptg.Ptg;
import org.apache.poi.ss.formula.ptg.RefPtg;
import org.apache.poi.ss.formula.ptg.SubtractPtg;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.util.CellReference;
import org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook;
import org.apache.poi.xssf.usermodel.XSSFFormulaEvaluator;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress.A1Address;
import com.dataart.spreadsheetanalytics.api.model.ICellFormulaExpression;
import com.dataart.spreadsheetanalytics.api.model.ICellNode;
import com.dataart.spreadsheetanalytics.model.CellAddress;
import com.dataart.spreadsheetanalytics.model.CellFormulaExpression;
import com.dataart.spreadsheetanalytics.model.CellNode;
import com.dataart.spreadsheetanalytics.model.CellValue;

public class PrintStaticTreeMain {
    public static void main(String[] args) throws IOException, InvalidFormatException {
        final String path = "src/main/resources/excel/1.xlsx";

        final XSSFWorkbook xssfW = new XSSFWorkbook(path);
        final XSSFEvaluationWorkbook xssfEW = XSSFEvaluationWorkbook.create(xssfW);
        final XSSFFormulaEvaluator xssfFE = xssfW.getCreationHelper().createFormulaEvaluator();

        List<CellNode> lst = new LinkedList<>();

        for (XSSFSheet xssfSheet : xssfW)
            for (Row row : xssfSheet)
                for (Cell cell : row) {

                    ICellAddress addr = new CellAddress()
                                            .a1Address(A1Address.from(new CellReference(cell).formatAsString()))
                                            .row(cell.getRowIndex())
                                            .column(cell.getColumnIndex());

                    CellNode root = new CellNode(addr);

                    root = buildTree(root, cell, xssfW, xssfEW, xssfFE, 0);
                    root.value(CellValue.fromString(xssfFE.evaluate(cell).formatAsString()));
                    root.formula(generateNodeFormulaExpression(xssfFE, cell, root));
                    lst.add(root);
                }

        lst.forEach(root -> {
            System.out.println("********************");
            CellNode.newCellNodePrinter(root).printStaticGraph();
        });
    }

    private static ICellFormulaExpression generateNodeFormulaExpression(XSSFFormulaEvaluator xssfFE, Cell cell, CellNode node) {
        Object[] opts = { "?", "?", "?", };

        if (Cell.CELL_TYPE_FORMULA == cell.getCellType()) {
            opts[0] = cell.getCellFormula();
        } else {
            opts[0] = String.valueOf(cell.getNumericCellValue());
        }

        StringBuilder sb = new StringBuilder();
        for (ICellNode cn : node.getStaticNodes()) {
            CellFormulaExpression formula = (CellFormulaExpression) node.formula();
            sb.append(cn.value()).append(formula != null ? formula.singleOperator() : "");
        }
        if (sb.length() > 3) {
            sb.deleteCharAt(sb.length() - 1);
        } else if (sb.length() < 3) {
            sb.append(node.value());
        }

        opts[1] = sb.toString();

        opts[2] = node.value();

        return CellFormulaExpression.fromString(String.format("(=%s) => (=%s) => (=%s)", opts));
    }

    private static CellNode buildTree(CellNode node, Cell c, XSSFWorkbook xssfW, XSSFEvaluationWorkbook xssfEW, XSSFFormulaEvaluator xssfFE, int sheetIdx) {
        if (Cell.CELL_TYPE_FORMULA == c.getCellType()) {
            String f = c.getCellFormula();
            Ptg[] ptg = FormulaParser.parse(f, xssfEW, FormulaType.CELL, sheetIdx);
            for (Ptg ptgItem : ptg) {
                if (!ptgItem.getClass().isAssignableFrom(RefPtg.class)) {
                    CellFormulaExpression formula = (CellFormulaExpression) node.formula();
                    if (formula == null) {
                        node.formula(formula = new CellFormulaExpression());
                    }
                    formula.singleOperator(ptgToSingleOperator(ptgItem));
                    continue;
                }

                RefPtg refPtg = (RefPtg) ptgItem;
                Cell next = xssfW.getSheetAt(sheetIdx).getRow(refPtg.getRow()).getCell(refPtg.getColumn());

                ICellAddress addr = new CellAddress()
                                        .a1Address(A1Address.from(new CellReference(next).formatAsString()))
                                        .row(next.getRowIndex())
                                        .column(next.getColumnIndex());

                CellNode cn = new CellNode(addr);

                cn = buildTree(cn, next, xssfW, xssfEW, xssfFE, sheetIdx);
                cn.value(CellValue.fromString(xssfFE.evaluate(next).formatAsString()));
                cn.formula(generateNodeFormulaExpression(xssfFE, next, cn));

                node.addStaticChild(cn);
            }
        }
        return node;
    }

    public static String ptgToSingleOperator(Ptg ptg) {
        if (ptg.getClass().isAssignableFrom(AddPtg.class)) {
            return "+";
        } else if (ptg.getClass().isAssignableFrom(SubtractPtg.class)) {
            return "-";
        } else if (ptg.getClass().isAssignableFrom(DividePtg.class)) {
            return "/";
        } else if (ptg.getClass().isAssignableFrom(MultiplyPtg.class)) {
            return "*";
        }
        return "?";
    }
}
