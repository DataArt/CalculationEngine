package com.dataart.spreadsheetanalytics.api.model;

public interface IExecutionGraphNode {

    String name();

    String formula();

    ICellValue value();

    Object type();

    Object sourceObjectId();

}
