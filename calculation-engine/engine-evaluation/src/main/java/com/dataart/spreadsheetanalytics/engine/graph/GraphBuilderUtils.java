package com.dataart.spreadsheetanalytics.engine.graph;

import org.apache.poi.ss.formula.ptg.AddPtg;
import org.apache.poi.ss.formula.ptg.ConcatPtg;
import org.apache.poi.ss.formula.ptg.DividePtg;
import org.apache.poi.ss.formula.ptg.EqualPtg;
import org.apache.poi.ss.formula.ptg.GreaterThanPtg;
import org.apache.poi.ss.formula.ptg.LessThanPtg;
import org.apache.poi.ss.formula.ptg.MultiplyPtg;
import org.apache.poi.ss.formula.ptg.NotEqualPtg;
import org.apache.poi.ss.formula.ptg.PercentPtg;
import org.apache.poi.ss.formula.ptg.PowerPtg;
import org.apache.poi.ss.formula.ptg.Ptg;
import org.apache.poi.ss.formula.ptg.RefPtgBase;
import org.apache.poi.ss.formula.ptg.SubtractPtg;
import org.apache.poi.ss.formula.ptg.UnaryMinusPtg;
import org.apache.poi.ss.formula.ptg.UnaryPlusPtg;
import org.apache.poi.ss.formula.ptg.UnionPtg;

import com.dataart.spreadsheetanalytics.engine.A1AddressPool;
import com.dataart.spreadsheetanalytics.model.A1Address;

public final class GraphBuilderUtils {
    
    private GraphBuilderUtils() {}
    
    public static String ptgToString(Ptg ptg) {
        Class<? extends Ptg> ptgCls = ptg.getClass();

        if (ptgCls.isAssignableFrom(AddPtg.class)) {
            return "+";
        } else if (ptgCls.isAssignableFrom(SubtractPtg.class)) {
            return "-";
        } else if (ptgCls.isAssignableFrom(DividePtg.class)) {
            return "/";
        } else if (ptgCls.isAssignableFrom(MultiplyPtg.class)) {
            return "*";
        } else if (ptgCls.isAssignableFrom(EqualPtg.class)) {
            return "=";
        } else if (ptgCls.isAssignableFrom(GreaterThanPtg.class)) {
            return ">";
        } else if (ptgCls.isAssignableFrom(LessThanPtg.class)) {
            return "<";
        } else if (ptgCls.isAssignableFrom(NotEqualPtg.class)) {
            return "<>";
        } else if (ptgCls.isAssignableFrom(UnaryPlusPtg.class)) {
            return "+";
        } else if (ptgCls.isAssignableFrom(UnaryMinusPtg.class)) {
            return "-";
        } else if (ptgCls.isAssignableFrom(ConcatPtg.class)) {
            return "&";
        } else if (ptgCls.isAssignableFrom(PowerPtg.class)) {
            return "^";
        } else if (ptgCls.isAssignableFrom(PercentPtg.class)) {
            return "%";
        } else if (ptgCls.isAssignableFrom(UnionPtg.class)) {
            return ",";
        } else if (ptgCls.isAssignableFrom(RefPtgBase.class)) {
            RefPtgBase refPtgBse = (RefPtgBase) ptg;
            A1Address address = A1AddressPool.get(refPtgBse.getRow(), refPtgBse.getColumn());
            return address == null ? ptg.toFormulaString() : address.address();
        }

        try { return ptg.toFormulaString(); }
        catch (Exception e) { return ptg.getClass().getSimpleName(); }
    }

}
