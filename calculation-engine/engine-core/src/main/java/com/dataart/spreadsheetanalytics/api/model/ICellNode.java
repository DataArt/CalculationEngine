package com.dataart.spreadsheetanalytics.api.model;

import java.util.List;

/**
 * TODO
 */
public interface ICellNode extends Iterable<ICellNode> {

    /**
     * @return the final value after calculation, e.g. "10"
     */
    ICellValue value();

    /**
     * @return cell formula as is, e.g. "=B1+F5*COS(A2)", everything inside
     */
    ICellFormulaExpression formula();

    /**
     * @return {@link ICellAddress} container with information about cell's address
     */
    ICellAddress address();

    /**
     * @return Cell's alias (defined name)
     */
    String alias();

    /**
     * @return Cell's comments
     */
    String comment();

    /**
     * @return direct children of this cell (direct dependencies), dynamic way //Lazy
     */
    List<ICellNode> getDynamicNodes();

    /**
     * @return direct children of this cell (direct dependencies), static way //Lazy
     */
    List<ICellNode> getStaticNodes();

    /**
     * @return list of cells this cell directly supports //Iterable, Lazy
     */
    List<ICell> getSupportedCells();

}
