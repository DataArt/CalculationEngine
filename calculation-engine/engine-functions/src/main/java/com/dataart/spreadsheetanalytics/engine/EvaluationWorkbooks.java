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
package com.dataart.spreadsheetanalytics.engine; //NOPMD

import org.apache.poi.ss.formula.EvaluationCell;
import org.apache.poi.ss.formula.EvaluationWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Workbook;

import com.dataart.spreadsheetanalytics.api.model.ICellAddress;

public final class EvaluationWorkbooks {

    private EvaluationWorkbooks() {}

    public static EvaluationWorkbook toEvaluationWorkbook(Workbook workbook) {
        return PoiWorkbookConverters.toEvaluationWorkbook(workbook);
    }

    public static EvaluationCell getEvaluationCell(EvaluationWorkbook evaluationWorkbook, ICellAddress addr) {
        return PoiWorkbookConverters.getEvaluationCell(evaluationWorkbook, addr);
    }

    public static void updateCell(EvaluationWorkbook defineWorkbook, Cell cell) {
        ((PoiProxyWorkbook) defineWorkbook).updateCell(cell);
    }
}
