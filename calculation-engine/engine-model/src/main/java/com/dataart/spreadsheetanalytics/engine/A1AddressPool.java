/*
Copyright 2015 DataArt Apps, Inc

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
package com.dataart.spreadsheetanalytics.engine;

import java.util.HashMap;
import java.util.Map;

import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.CellAddress;

/**
 * Implementation of {@link ICellAddress} which uses A1 format to navigate between cells.
 * Contains: row, column, address in a1 format.
 * 
 * Preferable way to use it is to aggregate it in {@link CellAddress} which is more common.
 */
public final class A1AddressPool {

    static final int POOL_SIZE = 128;

    static final A1Address[][] _rc = new A1Address[POOL_SIZE][];
    static final Map<String, A1Address> _a1 = new HashMap<>();

    static {
        for (int i = 0; i < POOL_SIZE; i++) {
            _rc[i] = new A1Address[POOL_SIZE];
            for (int j = 0; j < POOL_SIZE; j++) {
                A1Address address = A1Address.fromRowColumn(i, j);
                _rc[i][j] = address;
                _a1.put(address.address(), address);
            }
        }
    }

    public static A1Address get(int r, int c) {
        return r >= 0 && r < POOL_SIZE && c >= 0 && c < POOL_SIZE ? _rc[r][c] : null;
    }

    public static A1Address get(String a1) {
        return _a1.get(a1);
    }

}
