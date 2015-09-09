package com.dataart.spreadsheetanalytics.api.model;

import com.dataart.spreadsheetanalytics.model.A1Address;

/**
 * Additional information for {@link ICellAddress}.
 * Gives string representation of {@link ICellAddress#row()} and {@link ICellAddress#column()} in A1 format.
 * 
 * Basic implementation: {@link A1Address}.
 */
public interface IA1Address {

    /**
     * row and column in A1 format.
     */
    String address();

}
