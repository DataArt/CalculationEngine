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
package com.dataart.spreadsheetanalytics.api.model;

import java.util.Optional;

public interface IDmCell {

    /** An address of this Cell: row number, column number, A1 format value and link to {@link IDataModelId} */
    ICellAddress address();

    /** The content. Can be a value (Double, String, Boolean), empty (null), formula (String) */
    ICellValue content();

    /** Value only if it exists: 2+2 will be 4 (value), SUM(A1, B1) will be 4 if A1 = 2 and B1 = 2. Empty by default. */
    Optional<ICellValue> value();

    /** Defined name. */
    String alias();

}