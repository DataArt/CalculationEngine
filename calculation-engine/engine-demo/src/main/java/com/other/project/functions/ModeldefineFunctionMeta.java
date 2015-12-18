package com.other.project.functions;

import com.dataart.spreadsheetanalytics.engine.DefineFunctionMeta;

public class ModeldefineFunctionMeta extends DefineFunctionMeta {

    public static final String KEYWORD = "MODELDEFINE";

    @Override
    public ModeldefineFunctionMeta parse(String formula) {
        DefineFunctionMeta dfm = super.parse(formula.replace(KEYWORD, ""));
        ModeldefineFunctionMeta mdfm = new ModeldefineFunctionMeta();
        mdfm.name(dfm.name());
        mdfm.inputs(dfm.inputs());
        mdfm.outputs(dfm.outputs());
        mdfm.dataModelId(dfm.getDataModelId());
        return mdfm;
    }

}
