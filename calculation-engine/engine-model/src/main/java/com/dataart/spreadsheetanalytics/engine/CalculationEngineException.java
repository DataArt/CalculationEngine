package com.dataart.spreadsheetanalytics.engine;

/**
 * Common Runtime Exception to be thrown by CalculatuionEngine library.
 */
public class CalculationEngineException extends RuntimeException {

    /** */
    private static final long serialVersionUID = -197123306881415337L;

    public CalculationEngineException() { super(); }
    public CalculationEngineException(String message) { super(message); }
    public CalculationEngineException(String message, Throwable cause) { super(message, cause); }
    public CalculationEngineException(Throwable cause) { super(cause); }
}
