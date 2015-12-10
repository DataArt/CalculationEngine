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

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.List;
import java.util.Map;

import org.apache.poi.ss.usermodel.Workbook;

import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.dto.DataModelDto;
import com.dataart.spreadsheetanalytics.dto.DataSetDto;
import com.fasterxml.jackson.databind.node.ObjectNode;

public final class Converters {
    
    private Converters() {}
    
    /** @see DataModelDtoConverters#toDataModel(DataModelDto) */
    public static IDataModel toDataModel(final DataModelDto dto) {
        return DataModelDtoConverters.toDataModel(dto);
    }
    
    /** @see DataModelDtoConverters#toDataModel(String) */
    public static IDataModel toDataModel(final String json) throws IOException {
        return DataModelDtoConverters.toDataModel(json);
    }
    
    /** @see DependencyExtractors#toDataModel(InputStream, ICellAddress) */
    public static IDataModel toDataModel(final InputStream workbook, final ICellAddress address) throws IOException {
        return DependencyExtractors.toDataModel(workbook, address);
    }
    
    /** @see DependencyExtractors#toDataModel(Workbook, ICellAddress) */
    public static IDataModel toDataModel(final Workbook workbook, final ICellAddress address) throws IOException {
        return DependencyExtractors.toDataModel(workbook, address);
    }
    
    /** @see DependencyExtractors#toDataModel(IDataModel, ICellAddress) */
    public static IDataModel toDataModel(final IDataModel workbook, final ICellAddress address) throws IOException {
        return DependencyExtractors.toDataModel(workbook, address);
    }
    
    /** @see DataModelConverters#toDataModel(InputStream) */
    public static IDataModel toDataModel(final InputStream workbook) throws IOException {
        return DataModelConverters.toDataModel(workbook);
    }
    
    /** @see DataModelConverters#toDataModel(Workbook) */
    public static IDataModel toDataModel(final Workbook workbook) throws IOException {
        return DataModelConverters.toDataModel(workbook);
    }
    
    /** @see DataSetDtoConverters#toDataSet(DataSetDto) */
    public static IDataSet toDataSet (final DataSetDto dto) {
        return DataSetDtoConverters.toDataSet(dto);
    }
    
    /** @see DataSetDtoConverters#toDataSet(String) */
    public static IDataSet toDataSet(final String json) throws IOException {
        return DataSetDtoConverters.toDataSet(json);
    }
    
    /** @see DataSetConverters#toDataSet(InputStream) */
    public static IDataSet toDataSet(final InputStream workbook) throws IOException {
        return DataSetConverters.toDataSet(workbook);
    }
    
    /** @see DataSetConverters#toDataSet(Workbook) */
    public static IDataSet toDataSet(final Workbook workbook) throws IOException {
        return DataSetConverters.toDataSet(workbook);
    }

    /** @see DataModelConverters#toXlsxFile(IDataModel) */
    public static OutputStream toXlsxFile(final IDataModel dataModel) throws IOException {
        return DataModelConverters.toXlsxFile(dataModel);
    }
    
    /** @see DataModelConverters#toXlsxFile(IDataModel, InputStream) */
    public static OutputStream toXlsxFile(final IDataModel dataModel, final InputStream formatting) throws IOException {
        return DataModelConverters.toXlsxFile(dataModel, formatting);
    }
    
    /** @see DataSetConverters#toXlsxFile(IDataSet) */
    public static OutputStream toXlsxFile(final IDataSet dataSet) throws IOException {
        return DataSetConverters.toXlsxFile(dataSet);
    }
    
    /** @see DataSetConverters#toXlsxFile(IDataSet, InputStream) */
    public static OutputStream toXlsxFile(final IDataSet dataSet, final InputStream formatting) throws IOException {
        return DataSetConverters.toXlsxFile(dataSet, formatting);
    }
    
    /** @see DataModelConverters#toWorkbook(IDataModel) */
    public static Workbook toWorkbook(final IDataModel dataModel) throws IOException {
        return DataModelConverters.toWorkbook(dataModel);
    }
    
    /** @see DataModelConverters#toWorkbook(IDataModel, Workbook) */
    public static Workbook toWorkbook(final IDataModel dataModel, final Workbook formatting) throws IOException {
        return DataModelConverters.toWorkbook(dataModel, formatting);
    }

    /** @see DataSetConverters#toWorkbook(IDataSet) */
    public static Workbook toWorkbook(final IDataSet dataSet) throws IOException {
        return DataSetConverters.toWorkbook(dataSet);
    }
    
    /** @see DataSetConverters#toWorkbook(IDataSet, Workbook) */
    public static Workbook toWorkbook(final IDataSet dataSet, final Workbook formatting) throws IOException {
        return DataSetConverters.toWorkbook(dataSet, formatting);        
    }
    
    /** @see ConverterUtils#clearContent(InputStream) */
    public static OutputStream clearContent(final InputStream workbook) throws IOException {
        return ConverterUtils.clearContent(workbook);
    }
    
    /** @see ConverterUtils#clearContent(Workbook) */
    public static Workbook clearContent(final Workbook workbook) throws IOException {
        return ConverterUtils.clearContent(workbook);
    }

    /** @see DependencyExtractors#toDataModels(InputStream, String) */
    public static List<IDataModel> toDataModels(final InputStream workbook, final String function) throws IOException {
        return DependencyExtractors.toDataModels(workbook, function);
    }
    
    /** @see DependencyExtractors#toDataModels(Workbook, String) */
    public static List<IDataModel> toDataModels(final Workbook workbook, final String function) {
        return DependencyExtractors.toDataModels(workbook, function);
    }
    
    /** @see DependencyExtractors#toDataModels(IDataModel, String) */
    public static List<IDataModel> toDataModels(final IDataModel workbook, final String function) throws IOException {
        return DependencyExtractors.toDataModels(workbook, function);
    }
    
    /** @see DependencyExtractors#toMetaFunctions(IDataModel, Class) */
    public static <T extends FunctionMeta> Map<T, IDataModel> toMetaFunctions(IDataModel book, Class<T> metaClass) throws IOException {
        return DependencyExtractors.toMetaFunctions(book, metaClass);
    }
    
    /** @see DependencyExtractors#toMetaFunctions(InputStream, Class) */
    public static <T extends FunctionMeta> Map<T, IDataModel> toMetaFunctions(InputStream book, Class<T> metaClass) throws IOException {
        return DependencyExtractors.toMetaFunctions(book, metaClass);    
    }

    /** @see DependencyExtractors#toMetaFunctions(Workbook, Class) */
    public static <T extends FunctionMeta> Map<T, IDataModel> toMetaFunctions(Workbook book, Class<T> metaClass) {
        return DependencyExtractors.toMetaFunctions(book, metaClass);
    }
    
    /** @see DataModelDtoConverters#toDataModelDto(IDataModel) */
    public static DataModelDto toDataModelDto(final IDataModel dataModel) {
        return DataModelDtoConverters.toDataModelDto(dataModel);
    }
    
    /** @see DataModelDtoConverters#toDataModel(String) */
    public static DataModelDto toDataModelDto(final String json) throws IOException {
        return DataModelDtoConverters.toDataModelDto(json);
    }
    
    /** @see DataSetDtoConverters#toDataSetDto(IDataSet) */
    public static DataSetDto toDataSetDto(final IDataSet dataSet) {
        return DataSetDtoConverters.toDataSetDto(dataSet);
    }
    
    /** @see DataSetDtoConverters#toDataSetDto(String) */
    public static DataSetDto toDataSetDto(final String json) throws IOException {
        return DataSetDtoConverters.toDataSetDto(json);
    }
    
    /** @see DataModelDtoConverters#toDataModel(DataModelDto) */
    public static String toJsonString(final DataModelDto dto) throws IOException {
        return DataModelDtoConverters.toJsonString(dto);
    }

    /** @see DataModelDtoConverters#toJsonString(IDataModel) */
    public static String toJsonString(final IDataModel dataModel) throws IOException {
        return DataModelDtoConverters.toJsonString(dataModel);
    }
    
    /** @see DataSetDtoConverters#toJsonString(DataSetDto) */
    public static String toJsonString(final DataSetDto dto) throws IOException {
        return DataSetDtoConverters.toJsonString(dto);
    }

    /** @see DataSetDtoConverters#toJsonString(IDataSet) */
    public static String toJsonString(final IDataSet dataSet) throws IOException {
        return DataSetDtoConverters.toJsonString(dataSet);
    }
    
    /** @see DataModelDtoConverters#toJsonObject(DataModelDto) */
    public static ObjectNode toJsonObject(final DataModelDto dto) {
        return DataModelDtoConverters.toJsonObject(dto);
    }

    /** @see DataModelDtoConverters#toDataModel(DataModelDto) */
    public static ObjectNode toJsonObject(final IDataModel dataModel) {
        return DataModelDtoConverters.toJsonObject(dataModel);
    }
    
    /** @see DataSetDtoConverters#toJsonObject(DataSetDto) */
    public static ObjectNode toJsonObject(final DataSetDto dto) {
        return DataSetDtoConverters.toJsonObject(dto);
    }

    /** @see DataSetDtoConverters#toJsonObject(IDataSet) */
    public static ObjectNode toJsonObject(final IDataSet dataSet) {
        return DataSetDtoConverters.toJsonObject(dataSet);
    }
    
}
