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

import com.dataart.spreadsheetanalytics.model.CellValue;

/**
 * Container for Cell's value. 
 * Since value can be of any type (Integer, Double, String, Error, etc.) this interface provides 
 * a wrapper to original value, so it can be send to any recipients.
 * The value is of {@link Object} class, but in runtime is should be one of: {@link Double}, {@link String}, {@link Boolean}.
 * The {@link #getType()} method is used to get the actual type information.
 * 
 * Basic implementation: {@link CellValue}.
 */
public interface ICellValue {

    /** The content. Can be a value (Double, String, Boolean), empty (null), formula (String) */
    Object get();

    /** Type of this cell. One of: String (for text nd formulas), Double (for numbers), Boolean (for logical), Object (for null) */
    Class<? extends Object> getType();

}
