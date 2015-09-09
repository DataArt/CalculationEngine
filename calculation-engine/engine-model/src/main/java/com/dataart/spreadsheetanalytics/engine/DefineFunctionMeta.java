package com.dataart.spreadsheetanalytics.engine;

import java.util.LinkedList;
import java.util.List;

import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataModelId;
import com.dataart.spreadsheetanalytics.model.A1Address;

/**
 * Class which integrates all the information about 'DEFINE' function.
 * Function itself (function code, implementation) can be found in {@link DefineFunction} in engine-functions library.
 * 
 * This class is only the container for meta information.
 * When parsing of spreadsheet is done (search for DEFINEs) all information is stored in instances of this class.
 * 
 * Meta information contains:
 * <li>Function name</li>
 * <li>Input paramenters (links to {@link ICellAddress})</li>
 * <li>Output paramentes (links to {@link ICellAddress})</li>
 * <li>Id of {@link IDataModel} as {@link IDataModelId}</li>
 * 
 */
@SuppressWarnings("javadoc")
public class DefineFunctionMeta {

    /** Name of DEFINE function in excel */
    public static final String KEYWORD = "DEFINE";
    /** Separator for intput and output arguments */
    public static final String IN_OUT_SEPARATOR = "#";
    
    protected String name;
    protected List<ICellAddress> inputs;
    protected List<ICellAddress> outputs;
    protected IDataModelId dataModelId;
    
    public String name() { return this.name; }
    public List<ICellAddress> inputs() { return this.inputs; }
    public List<ICellAddress> outputs() { return this.outputs; }
    public IDataModelId dataModelId() { return this.dataModelId; }
    
    public void name(String name) { this.name = name; }
    public void inputs(List<ICellAddress> inputs) { this.inputs = inputs; }
    public void outputs(List<ICellAddress> outputs) { this.outputs = outputs; }
    public void dataModelId(IDataModelId dataModelId) { this.dataModelId = dataModelId; }
    
    public static DefineFunctionMeta parse(String formula) {

        //TODO: parsing mechanism might be better, use POI's parser or think about it again
        //DEFINE("name", A1, A2, "#", B1, B2, B3)
        String[] ptgs = formula
                            .replace(KEYWORD, "")
                            .replace("(", "")
                            .replace(")", "")
                            .replace("\"", "")
                            .replace(" ", "")
                            .split(",");
        
        //TODO log or throw?? if throw create exception?
        if (ptgs.length < 2) { throw new RuntimeException("Number of Ptgs in " + KEYWORD + " function must be more than 2"); }
        
        DefineFunctionMeta meta = new DefineFunctionMeta();
        meta.name(ptgs[0]);

        List<ICellAddress> in = new LinkedList<>();
        List<ICellAddress> out = new LinkedList<>();
        
        boolean passedSeparator = false;

        for (int i = 1; i < ptgs.length; i++) {

            if (IN_OUT_SEPARATOR.equals(ptgs[i])) { passedSeparator = true; continue; }

            if (passedSeparator) {
                out.add(A1Address.fromA1Address(ptgs[i]));
            } else {
                in.add(A1Address.fromA1Address(ptgs[i]));
            }
        }

        meta.inputs(in);
        meta.outputs(out);

        return meta;
    }

}
