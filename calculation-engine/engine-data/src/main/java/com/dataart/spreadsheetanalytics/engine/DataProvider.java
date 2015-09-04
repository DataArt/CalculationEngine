package com.dataart.spreadsheetanalytics.engine;

import static com.dataart.spreadsheetanalytics.model.A1Address.fromA1Address;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.PipedInputStream;
import java.io.PipedOutputStream;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.dataart.spreadsheetanalytics.api.engine.DefineFunctionMeta;
import com.dataart.spreadsheetanalytics.api.engine.IDataProvider;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataModelId;
import com.dataart.spreadsheetanalytics.model.DataModel;

public class DataProvider implements IDataProvider {

    //this is a cache
    protected Map<String, DefineFunctionMeta> defines;
    
    //TODO: this should be a persistent storage
    protected Map<IDataModelId, IDataModel> dataModels;
    
    public static IDataProvider getDummyDataProvider() throws IOException {
        return new DataProvider() {
            
            final String define = "src/main/resources/excel/define-funcexec/define.xlsx";
            final IDataModel model = new DataModel(define);
            
            {
                defines = new HashMap<>();
                
                DefineFunctionMeta m1 = new DefineFunctionMeta();
                m1.name("DEVDEF_1");
                m1.inputs(Arrays.asList(fromA1Address("A2"), fromA1Address("B2")));
                m1.outputs(Arrays.asList(fromA1Address("F2"), fromA1Address("G2")));
                m1.dataModelId(model.dataModelId());
                defines.put(m1.name(), m1);
                
                DefineFunctionMeta m2 = new DefineFunctionMeta();
                m2.name("DEVDEF_2");
                m2.inputs(Arrays.asList(fromA1Address("A2")));
                m2.outputs(Arrays.asList(fromA1Address("G2")));
                m2.dataModelId(model.dataModelId());
                defines.put(m2.name(), m2);
            }
            
            @Override
            public IDataModel getDataModel(IDataModelId dataModelId) {
                return model;
            }
        };
    }

    @Override
    public Map<String, DefineFunctionMeta> getDefineFunctions() {
        return defines;
    }

    @Override
    public IDataModel getDataModel(IDataModelId dataModelId) {
        return dataModels.get(dataModelId);
    }

    @Override
    public IDataModel createModelForExecution(IDataModelId dataModelId, List<ICellAddress> inputAddresses, List<ICellValue> inputValues) throws IOException {
        IDataModel model = getDataModel(dataModelId);
        IDataModel execModel = copyModelInMemory((DataModel) model);
        
        for (int i = 0; i < inputAddresses.size(); i++) {
            execModel.replaceCellValue(inputAddresses.get(i), inputValues.get(i));
        }

        return execModel;
    }

    protected IDataModel copyModelInMemory(DataModel model) throws IOException {
        ByteArrayOutputStream os = new ByteArrayOutputStream(); 
        model.model.write(os);
        
        PipedInputStream in = new PipedInputStream();
        PipedOutputStream out = new PipedOutputStream(in);
        
        new Thread(() -> { try { os.writeTo(out); } catch (IOException e) {} }).start();
        
        return new DataModel(in);
    }    
}
