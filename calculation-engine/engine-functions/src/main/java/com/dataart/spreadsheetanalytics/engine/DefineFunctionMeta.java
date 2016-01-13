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

import java.util.LinkedList;
import java.util.List;
import java.util.Locale;

import com.dataart.spreadsheetanalytics.api.model.IA1Address;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataModelId;
import com.dataart.spreadsheetanalytics.engine.FunctionMeta.MetaFunctionKeyword;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.A1RangeAddress;

/**
 * This class integrates all the information about 'DEFINE' function.
 * Function itself (function code, implementation) can be found in DefineFunction and FuncexecFunction in engine-functions library.
 * 
 * This class is only the container for meta information.
 * When parsing of spreadsheet is done (search for DEFINEs) all information is stored in instances of this class.
 * 
 * Meta information contains:
 * Function name;
 * Input paramenters (links to {@link ICellAddress});
 * Output paramentes (links to {@link ICellAddress});
 * Id of {@link IDataModel} as {@link IDataModelId};
 */
@MetaFunctionKeyword(DefineFunctionMeta.KEYWORD)
public class DefineFunctionMeta extends FunctionMeta {

    /** Name of DEFINE function in excel */
    public static final String KEYWORD = "DEFINE";
    /** Separator for intput and output arguments */
    public static final String IN_OUT_SEPARATOR = "#";
    
    protected List<IA1Address> inputs;
    protected List<IA1Address> outputs;
    
    public List<IA1Address> getInputs() { return this.inputs; }
    public void setInputs(List<IA1Address> inputs) { this.inputs = inputs; }
    
    public List<IA1Address> getOutputs() { return this.outputs; }
    public void setOutputs(List<IA1Address> outputs) { this.outputs = outputs; }
    
    public DefineFunctionMeta parse(String formula) {

        String[] ptgs = formula
                            .replace(KEYWORD, "")
                            .replace("(", "")
                            .replace(")", "")
                            .replace("\"", "")
                            .replace(" ", "")
                            .split(",");
        
        if (ptgs.length < 2) { throw new CalculationEngineException("Number of arguments in " + KEYWORD + " function must be more than 2"); }
        if (!formula.contains(IN_OUT_SEPARATOR)) { throw new CalculationEngineException(KEYWORD + " function must contain a " + IN_OUT_SEPARATOR); }
        
        DefineFunctionMeta meta = new DefineFunctionMeta();
        meta.setName(ptgs[0].toUpperCase(Locale.getDefault()));

        List<IA1Address> in = new LinkedList<>();
        List<IA1Address> out = new LinkedList<>();
        
        boolean passedSeparator = false;

        for (int i = 1; i < ptgs.length; i++) {

            if (IN_OUT_SEPARATOR.equals(ptgs[i])) { passedSeparator = true; continue; }

            if (passedSeparator) {
                A1Address outAddr = A1Address.fromA1Address(ptgs[i]);
                if (outAddr instanceof A1RangeAddress) { out.addAll(A1RangeAddress.toA1Addresses((A1RangeAddress) outAddr)); }
                else { out.add(outAddr); }
            } else {
                A1Address inAddr = A1Address.fromA1Address(ptgs[i]);
                if (inAddr instanceof A1RangeAddress) { in.addAll(A1RangeAddress.toA1Addresses((A1RangeAddress) inAddr)); }
                else { in.add(inAddr); }
            }
        }

        meta.setInputs(in);
        meta.setOutputs(out);

        return meta;
    }

}
