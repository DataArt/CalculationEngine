package com.dataart.spreadsheetanalytics.engine.execgraph;

public class ExecutionGraphConfig {

    public static final ExecutionGraphConfig DEFAULT = new ExecutionGraphConfig(false, null);
    public static final ExecutionGraphConfig JOIN_ALL_DUPLICATE_VERTICES = new ExecutionGraphConfig(true, 0);
    public static final ExecutionGraphConfig LIMIT_TO_2_DUPLICATE_VERTICES = new ExecutionGraphConfig(true, 2);
    public static final ExecutionGraphConfig LIMIT_TO_5_DUPLICATES_VERTICES = new ExecutionGraphConfig(true, 5);
    public static final ExecutionGraphConfig LIMIT_TO_10_DUPLICATES_VERTICES = new ExecutionGraphConfig(true, 10);

    private final boolean joinVertices;
    private final Integer duplicatesNumberThreshold;

    public ExecutionGraphConfig(boolean joinVertices, Integer duplicatesNumberThreshold) {
        super();
        this.joinVertices = joinVertices;
        this.duplicatesNumberThreshold = duplicatesNumberThreshold;
    }

    public int getThresholdNumber() {
        if (joinVertices) {
            return duplicatesNumberThreshold.intValue();
        } else {
            return -1;
        }
    }

}
