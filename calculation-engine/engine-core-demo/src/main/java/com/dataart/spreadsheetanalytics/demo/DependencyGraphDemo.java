package com.dataart.spreadsheetanalytics.demo;

public class DependencyGraphDemo {
    // Contains some logic to generate dependency tree
    /*
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
                                            .a1Address(new A1Address(new CellReference(cell).formatAsString()))
                                            .row(cell.getRowIndex())
                                            .column(cell.getColumnIndex());

                    CellNode root = new CellNode(addr);

                    root = buildTree(root, cell, xssfW, xssfEW, xssfFE, 0);
                    root.value(new CellValue(xssfFE.evaluate(cell).formatAsString()));
                    root.formula(generateNodeFormulaExpression(xssfFE, cell, root));
                    lst.add(root);
                }
    }

    private static ICellFormulaExpression generateNodeFormulaExpression(XSSFFormulaEvaluator xssfFE, Cell cell, CellNode node) {
        Object[] opts = { "?", "?", "?", };

        if (Cell.CELL_TYPE_FORMULA == cell.getCellType()) {
            opts[0] = cell.getCellFormula();
        } else {
            opts[0] = String.valueOf(cell.getNumericCellValue());
        }

        StringBuilder sb = new StringBuilder();
        for (CellNode cn : node.getStaticNodes()) {
            CellFormulaExpression formula = (CellFormulaExpression) node.formula();
            sb.append(cn.value()).append(formula != null ? "XZ" : "");
        }
        if (sb.length() > 3) {
            sb.deleteCharAt(sb.length() - 1);
        } else if (sb.length() < 3) {
            sb.append(node.value());
        }

        opts[1] = sb.toString();

        opts[2] = node.value();

        CellFormulaExpression cfe = new CellFormulaExpression();
        cfe.formulaStr(String.format("(=%s) => (=%s) => (=%s)", opts));
        return cfe;
    }

    private static CellNode buildTree(CellNode node, Cell c, XSSFWorkbook xssfW, XSSFEvaluationWorkbook xssfEW, XSSFFormulaEvaluator xssfFE, int sheetIdx) {
        if (Cell.CELL_TYPE_FORMULA == c.getCellType()) {
            String f = c.getCellFormula();
            Ptg[] ptg = FormulaParser.parse(f, xssfEW, FormulaType.CELL, sheetIdx);
            for (Ptg ptgItem : ptg) {
                if (!ptgItem.getClass().isAssignableFrom(RefPtg.class)) {
                    CellFormulaExpression formula = (CellFormulaExpression) node.formula();
                    if (formula == null) {
                        formula = new CellFormulaExpression();
                        formula.formulaStr(ptgToSingleOperator(ptgItem));
                        node.formula(formula);
                    }
                    continue;
                }

                RefPtg refPtg = (RefPtg) ptgItem;
                Cell next = xssfW.getSheetAt(sheetIdx).getRow(refPtg.getRow()).getCell(refPtg.getColumn());

                ICellAddress addr = new CellAddress()
                                        .a1Address(new A1Address(new CellReference(next).formatAsString()))
                                        .row(next.getRowIndex())
                                        .column(next.getColumnIndex());

                CellNode cn = new CellNode(addr);

                cn = buildTree(cn, next, xssfW, xssfEW, xssfFE, sheetIdx);
                cn.value(new CellValue(xssfFE.evaluate(next).formatAsString()));
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
    */
}
