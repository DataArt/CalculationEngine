package com.dataart.spreadsheetanalytics.engine.util;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.BlockingQueue;

import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataModelId;
import com.dataart.spreadsheetanalytics.engine.DefineFunctionMeta;
import com.dataart.spreadsheetanalytics.model.DataModel;

public class DataModelOperations {
    
    public static Map<IDataModelId, BlockingQueue<IDataModel>> createDataModelsForExecution(Map<String, DefineFunctionMeta> defs, Map<IDataModelId, IDataModel> dataModels, int cacheSize) throws IOException, InterruptedException {
        Map<IDataModelId, BlockingQueue<IDataModel>> map = new HashMap<>();

        for (DefineFunctionMeta dmeta : defs.values()) {
            IDataModelId id = dmeta.dataModelId();
            BlockingQueue q = new ArrayBlockingQueue(cacheSize);
            
            for (int i = 0; i < cacheSize; i++) {
                DataModel dm = copyModelInMemory((DataModel) dataModels.get(id));
                q.put(dm);
            }
            map.put(id, q);
        }

        return map;
    }
    
    /**
     * Does exact copy of {@link DataModel} to memory.
     * There some cases when original model should contains different (replaced) values and
     * only then executed.
     * To avoid copying model to files this method can store it in memory.
     * 
     *  Implementation is based on {@link ByteArrayInputStream} and {@link ByteArrayOutputStream}
     *  and {@link Arrays#copyOf(boolean[], int)} to do the actual copy command.
     *  
     *  Returned {@link IDataModel} will not be equal to original one. But may contain the same Id.
     */
    public static DataModel copyModelInMemory(DataModel model) throws IOException {
        ByteArrayOutputStream os = new ByteArrayOutputStream();
        model.poiModel.write(os);
        
        byte[] b = os.toByteArray();
        InputStream in = new ByteArrayInputStream(Arrays.copyOf(b, b.length));

        return new DataModel(model.name() + "_" + UUID.randomUUID().toString(), in);
    }
}
