package com.dataart.spreadsheetanalytics.engine.graph;

public class ExecutionGraphConfig {

    /** No joining of duplicate graph nodes */
    public static final ExecutionGraphConfig DEFAULT = new ExecutionGraphConfig(false, null);
    
    /** Join all duplicate graph nodes */
    public static final ExecutionGraphConfig JOIN_ALL_DUPLICATE_VERTICES = new ExecutionGraphConfig(true, 0);
    
    /** The number of duplicates is less or equal to 2 */
    public static final ExecutionGraphConfig LIMIT_TO_2_DUPLICATE_VERTICES = new ExecutionGraphConfig(true, 2);
    
    /** The number of duplicates is less or equal to 5 */
    public static final ExecutionGraphConfig LIMIT_TO_5_DUPLICATE_VERTICES = new ExecutionGraphConfig(true, 5);
    
    /** The number of duplicates is less or equal to 10 */
    public static final ExecutionGraphConfig LIMIT_TO_10_DUPLICATE_VERTICES = new ExecutionGraphConfig(true, 10);

    protected final boolean joinVertices;
    protected final Integer duplicatesNumberThreshold;

    public ExecutionGraphConfig(boolean joinVertices, Integer duplicatesNumberThreshold) {
        this.joinVertices = joinVertices;
        this.duplicatesNumberThreshold = duplicatesNumberThreshold;
    }

    public int getDuplicatesNumberThreshold() {
        if (this.joinVertices && this.duplicatesNumberThreshold != null) { return this.duplicatesNumberThreshold.intValue(); }
        else { return -1; }
    }
    
    @Override
    public String toString() {
        return String.format("joinVertices=%s duplicatesNumberThreshold=%s", this.joinVertices, this.duplicatesNumberThreshold);
    }

}
