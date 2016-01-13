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
package com.dataart.spreadsheetanalytics.engine.graph;

import org.apache.poi.common.fork.ExecutionGraphBuilderUtils;
import org.apache.poi.common.fork.IExecutionGraphVertex.Type;
import org.apache.poi.common.fork.IExecutionGraphVertexProperties;
import org.apache.poi.ss.formula.ptg.Ptg;

import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex;

/**
 * Class represent ony property of {@link IExecutionGraphVertex}.
 * Internal use only.
 */
class ExecutionGraphVertexProperties implements IExecutionGraphVertexProperties {

    private final ExecutionGraphVertex parent;

    public ExecutionGraphVertexProperties(ExecutionGraphVertex vertex) {
        this.parent = vertex;
        if (this.parent.formula == null) {
            this.parent.formula = new CellFormulaExpression();
        }
    }

    @Override public String getName() {
        return this.parent.name;
    }

    @Override public void setName(String value) {
        this.parent.name = value;
    }

    @Override public String getAlias() {
        return this.parent.alias;
    }

    @Override public void setAlias(String value) {
        this.parent.alias = value;
    }

    @Override public int getVertexId() {
        return this.parent.id;
    }

    @Override public void setVertexId(int value) {
        this.parent.id = value;
    }

    @Override public Object getValue() {
        return this.parent.value;
    }

    @Override public void setValue(Object value) {
        this.parent.value = ExecutionGraphBuilderUtils.coerceValueTo(value);
    }

    @Override public Type getType() {
        return this.parent.type;
    }

    @Override public void setType(Type value) {
        if (Type.CELL_WITH_FORMULA == this.parent.type) { return; }
        this.parent.type = value;
    }

    @Override public String getFormulaValues() {
        return this.parent.formula.formulaValues();
    }

    @Override public void setFormulaValues(String value) {
        this.parent.formula.formulaValues(value);
    }

    @Override public Object[] getFormulaPtg() {
        return this.parent.formula.formulaPtg();
    }

    @Override public void setFormulaPtg(Object[] value) {
        this.parent.formula.formulaPtg(value);
    }

    @Override public Ptg[] getPtgs() {
        return this.parent.formula.ptgs();
    }

    @Override public void setPtgs(Ptg[] value) {
        this.parent.formula.ptgs(value);
    }

    @Override public int getIndexInFormula() {
        return this.parent.formula.iptg();
    }

    @Override public void setIndexInFormula(int value) {
        this.parent.formula.iptg(value);
    }

    @Override public Object getSourceObjectId() {
        return this.parent.sourceObjectId;
    }

    @Override public void setSourceObjectId(Object value) {
        this.parent.sourceObjectId = value;
    }

    @Override public int getRootFormulaId() {
        return this.parent.formula.rootFormulaId();
    }

    @Override public void setRootFormulaId(int value) {
        this.parent.formula.rootFormulaId(value);
    }

    @Override public String getFormulaPtgString() {
        return this.parent.formula.formulaPtgStr();
    }

    @Override public void setFormulaPtgString(String value) {
        this.parent.formula.formulaPtgStr(value);
    }

    @Override public String getFormulaString() {
        return this.parent.formula.formulaStr();
    }

    @Override public void setFormulaString(String value) {
        this.parent.formula.formulaStr((value == null) ? "" : GraphBuilderUtils.removeSymbol(value, '$'));
    }

    @Override public String getPtgString() {
        return this.parent.formula.ptgStr();
    }

    @Override public void setPtgString(String value) {
        this.parent.formula.ptgStr(value);
    }

}