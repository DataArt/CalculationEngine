package com.dataart.spreadsheetanalytics.engine.util;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.BlockingQueue;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataModelId;
import com.dataart.spreadsheetanalytics.engine.DefineFunctionMeta;
import com.dataart.spreadsheetanalytics.model.DataModel;

public class DataModelOperations {
    private final static Logger log = LoggerFactory.getLogger(DataModelOperations.class);
    
    public static Map<IDataModelId, BlockingQueue<IDataModel>> createDataModelsForExecution(Map<String, DefineFunctionMeta> defs, Map<IDataModelId, IDataModel> dataModels, int cacheSize) throws IOException, InterruptedException {
        Map<IDataModelId, BlockingQueue<IDataModel>> map = new HashMap<>();

        for (DefineFunctionMeta dmeta : defs.values()) {
            IDataModelId id = dmeta.dataModelId();
            BlockingQueue<IDataModel> q = new ArrayBlockingQueue<>(cacheSize);
            
            List<DataModel> dms = copyModelIntoMemory((DataModel) dataModels.get(id), cacheSize);
            for (DataModel dataModel : dms) {
                q.put(dataModel); 
            }
            
            map.put(id, q);
        }

        return map;
    }
    
    /**
     * Does exact copy of {@link DataModel} to memory.
     * There some cases when original model should contains different (replaced) values and only then executed.
     * To avoid copying model to files this method can store it in memory.
     * 
     * Implementation is based on {@link ByteArrayInputStream} and {@link ByteArrayOutputStream}
     * and {@link Arrays#copyOf(boolean[], int)} to do the actual copy command.
     *  
     * Returned {@link IDataModel} will not be equal to original one. But may contain the same Id.
     */
    public static List<DataModel> copyModelIntoMemory(DataModel model, int size) throws IOException {
        List<DataModel> list = new ArrayList<>(size);
        
        try {
            ByteArrayOutputStream os = new ByteArrayOutputStream();
            model.poiModel.write(os);

            byte[] b = os.toByteArray();
            InputStream in = new ByteArrayInputStream(Arrays.copyOf(b, b.length));

            for (int i = 0; i < size; i++) {
                list.add(new DataModel(model.name() + "_" + UUID.randomUUID().toString(), in));
            }
            return list;
        } catch (Exception e) {
            log.error("Cannot do DataModel copies with ByteArrayOutputStream.", e);
        }
        
        list.clear();
        for (int i = 0; i < size; i++) {
            list.add(new DataModel(model.name() + "_" + UUID.randomUUID().toString(), model.originalPath));
        }

        return list;
    }
}
