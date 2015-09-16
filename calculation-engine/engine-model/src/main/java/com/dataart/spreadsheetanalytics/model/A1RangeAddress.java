package com.dataart.spreadsheetanalytics.model;

import java.util.Collections;
import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

import org.apache.poi.ss.util.CellRangeAddress;

import com.dataart.spreadsheetanalytics.api.model.IA1Address;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;

public class A1RangeAddress extends A1Address {

    protected List<IA1Address> addresses;

    protected A1RangeAddress(String a1address) {
        this.addresses = new LinkedList<>();
        
        if (!a1address.contains(":")) { this.addresses.add(A1Address.fromA1Address(a1address)); return; }
        
        CellRangeAddress addrs = CellRangeAddress.valueOf(a1address);
        int fromR = addrs.getFirstRow();
        int fromC = addrs.getFirstColumn();
        int toR = addrs.getLastRow();
        int toC = addrs.getLastColumn();

        for (int row = fromR; row <= toR; row++) {
            for (int col = fromC; col <= toC; col++) {
                this.addresses.add(A1Address.fromRowColumn(row, col));
            }
        }
    }

    public static List<IA1Address> toA1Addresses(A1RangeAddress rangeAddress) {
        return Collections.<IA1Address>unmodifiableList(rangeAddress.addresses);
    }
    
    public static List<ICellAddress> toCellAddresses(A1RangeAddress rangeAddress) {
        return Collections.<ICellAddress> unmodifiableList(rangeAddress.addresses
                                                                            .stream()
                                                                            .map(e -> { return (ICellAddress) e; })
                                                                            .collect(Collectors.toList()));
    }
}
