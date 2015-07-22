package com.dataart.spreadsheetanalytics.model;

import java.util.Collections;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;

import org.apache.poi.ss.formula.eval.NotImplementedException;

import com.dataart.spreadsheetanalytics.api.model.ICell;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellFormulaExpression;
import com.dataart.spreadsheetanalytics.api.model.ICellNode;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.model.util.CellNodePrinter;

//TODO should be graph actually
public class CellNode implements ICellNode {

    protected final ICellAddress address;
    protected ICellValue value;
    protected ICellFormulaExpression formula;

    protected List<ICellNode> dynamicChildren;
    protected List<ICellNode> staticChildren;
    protected List<ICell> supports;

    protected String alias;
    protected String comment;

    public CellNode(ICellAddress address) {
        this.address = address;

        this.staticChildren = new LinkedList<>();
        this.dynamicChildren = new LinkedList<>();
        this.supports = new LinkedList<>();
    }

    @Override
    public Iterator<ICellNode> iterator() {
        throw new NotImplementedException("not yet");
    }

    @Override
    public ICellValue value() {
        return value;
    }

    @Override
    public ICellFormulaExpression formula() {
        return formula;
    }

    @Override
    public ICellAddress address() {
        return address;
    }

    @Override
    public String alias() {
        return alias;
    }

    @Override
    public String comment() {
        return comment;
    }

    @Override
    public List<ICellNode> getDynamicNodes() {
        return Collections.<ICellNode>emptyList();
    }

    @Override
    public List<ICellNode> getStaticNodes() {
        return Collections.unmodifiableList(staticChildren);
    }

    @Override
    public List<ICell> getSupportedCells() {
        return Collections.<ICell>emptyList();
    }

    public int addStaticChild(ICellNode child) {
        staticChildren.add(child);
        return staticChildren.size();
    }

    public void value(ICellValue value) {
        this.value = value;
    }

    public void formula(ICellFormulaExpression formula) {
        this.formula = formula;
    }

    public static CellNodePrinter newCellNodePrinter(CellNode node) {
        return new CellNodePrinter(node);
    }

}