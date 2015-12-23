package com.other.project.functions;

import com.dataart.spreadsheetanalytics.engine.DefineFunctionMeta;

public class ModeldefineFunctionMeta extends DefineFunctionMeta {

    public static final String KEYWORD = "MODELDEFINE";

    @Override
    public ModeldefineFunctionMeta parse(String formula) {
        DefineFunctionMeta dfm = super.parse(formula.replace(KEYWORD, ""));
        ModeldefineFunctionMeta mdfm = new ModeldefineFunctionMeta();
        mdfm.setName(dfm.getName());
        mdfm.setInputs(dfm.getInputs());
        mdfm.setOutputs(dfm.getOutputs());
        mdfm.setDataModelId(dfm.getDataModelId());
        return mdfm;
    }

}
