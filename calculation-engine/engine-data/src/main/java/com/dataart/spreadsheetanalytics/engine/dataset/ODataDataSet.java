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
package com.dataart.spreadsheetanalytics.engine.dataset;

import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.api.model.IDsRow;
import com.dataart.spreadsheetanalytics.model.AbstractLazyDataSet;

public class ODataDataSet extends AbstractLazyDataSet {

    private static final RuntimeException NS = new UnsupportedOperationException("Class " + ODataDataSet.class.getSimpleName() + " is a stub and not yet implemented.");

    public ODataDataSet(String name) {
        super(name);
    }

    @Override
    public IDataSet get(Parameters parameters) throws Exception {
        throw NS;
    }

    @Override
    public IDsRow addRow() {
        throw NS;
    }

    @Override
    public IDsRow addRow(int rowIdx) {
        throw NS;
    }

    @Override
    public IDsRow getRow(int rowIdx) {
        throw NS;
    }

}