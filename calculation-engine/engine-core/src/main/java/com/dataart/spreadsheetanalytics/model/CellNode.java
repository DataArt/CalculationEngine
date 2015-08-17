package com.dataart.spreadsheetanalytics.model;

import java.util.Collections;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;

import org.apache.poi.ss.formula.eval.NotImplementedException;

import com.dataart.spreadsheetanalytics.api.model.ICell;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellFormulaExpression;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;

//TODO replace with IExecGraph
public class CellNode {

    protected final ICellAddress address;
    protected ICellValue value;
    protected ICellFormulaExpression formula;

    protected List<CellNode> dynamicChildren;
    protected List<CellNode> staticChildren;
    protected List<ICell> supports;

    protected String alias;
    protected String comment;

    public CellNode(ICellAddress address) {
        this.address = address;

        this.staticChildren = new LinkedList<>();
        this.dynamicChildren = new LinkedList<>();
        this.supports = new LinkedList<>();
    }

    public Iterator<CellNode> iterator() {
        throw new NotImplementedException("not yet");
    }

    public ICellValue value() {
        return value;
    }

    public ICellFormulaExpression formula() {
        return formula;
    }

    public ICellAddress address() {
        return address;
    }

    public String alias() {
        return alias;
    }

    public String comment() {
        return comment;
    }

    public List<CellNode> getDynamicNodes() {
        return Collections.<CellNode>emptyList();
    }

    public List<CellNode> getStaticNodes() {
        return Collections.unmodifiableList(staticChildren);
    }

    public List<ICell> getSupportedCells() {
        return Collections.<ICell>emptyList();
    }

    public int addStaticChild(CellNode child) {
        staticChildren.add(child);
        return staticChildren.size();
    }

    public void value(ICellValue value) {
        this.value = value;
    }

    public void formula(ICellFormulaExpression formula) {
        this.formula = formula;
    }

}