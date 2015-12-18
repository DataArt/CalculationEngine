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
package com.dataart.spreadsheetanalytics.api.engine;

import java.util.Map;

import com.dataart.spreadsheetanalytics.engine.FunctionMeta;

/**
 * Storage (Cache, Provider) for {@link FunctionMeta}.
 * Used in Custom Functions to access function meta information.
 */
public interface MetaFunctionAccessor<T extends FunctionMeta> {

    /** Adds {@link FunctionMeta} to storage. */
    void add(T meta);

    /** Returns all available {@link FunctionMeta}s. */
    Map<String, T> getAll();

    /** Returns {@link FunctionMeta} by its name. Null - if not found. */
    T get(String name);

}
