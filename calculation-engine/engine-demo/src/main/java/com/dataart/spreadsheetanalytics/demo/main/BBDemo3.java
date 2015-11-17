package com.dataart.spreadsheetanalytics.demo.main;

import static com.dataart.spreadsheetanalytics.engine.util.PoiFileConverter.toDataSet;

import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStream;
import java.nio.file.Paths;
import java.util.HashSet;
import java.util.List;

import javax.cache.CacheManager;
import javax.cache.Caching;
import javax.cache.configuration.MutableConfiguration;
import javax.cache.expiry.AccessedExpiryPolicy;
import javax.cache.expiry.Duration;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.dataart.spreadsheetanalytics.api.engine.AttributeFunctionStorage;
import com.dataart.spreadsheetanalytics.api.engine.DataModelStorage;
import com.dataart.spreadsheetanalytics.api.engine.DataSetStorage;
import com.dataart.spreadsheetanalytics.api.engine.ExternalServices;
import com.dataart.spreadsheetanalytics.api.engine.IAuditor;
import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataModelId;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.api.model.IDsCell;
import com.dataart.spreadsheetanalytics.api.model.IDsRow;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraph;
import com.dataart.spreadsheetanalytics.api.model.ILazyDataSet;
import com.dataart.spreadsheetanalytics.demo.util.DemoUtil;
import com.dataart.spreadsheetanalytics.engine.CacheBasedAttributeFunctionStorage;
import com.dataart.spreadsheetanalytics.engine.CacheBasedDataModelStorage;
import com.dataart.spreadsheetanalytics.engine.CacheBasedDataSetStorage;
import com.dataart.spreadsheetanalytics.engine.DataSetOptimisationsCache;
import com.dataart.spreadsheetanalytics.engine.DataSetOptimisationsCache.DsLookupParameters;
import com.dataart.spreadsheetanalytics.engine.DefineFunctionMeta;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetAuditor;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.engine.execgraph.ExecutionGraphConfig;
import com.dataart.spreadsheetanalytics.engine.util.PoiFileConverter;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.DataModel;
import com.google.common.io.Files;

public class BBDemo3 {
    
    static CacheManager cacheManager = Caching.getCachingProvider().getCacheManager();
    static MutableConfiguration config = new MutableConfiguration()
                                        .setStoreByValue(false)
                                        .setExpiryPolicyFactory(AccessedExpiryPolicy.factoryOf(Duration.ETERNAL))
                                        .setStatisticsEnabled(false);
    static ExternalServices external = ExternalServices.INSTANCE;

    public static void main(String[] args) throws Exception {
        
        final String overview_report_out = "src/main/resources/excel/bb_demo/3/_portfolio_report_1.xlsx";
        final String overview_report = "src/main/resources/excel/bb_demo/3/portfolio_report.xlsx";
        final String risk_model_def = "src/main/resources/excel/bb_demo/3/risk_model_def.xlsx";
        final String func_ltd = "src/main/resources/excel/bb_demo/3/Func_LTD.xlsx";
        final String positions = "src/main/resources/excel/bb_demo/3/Positions.xlsx";
        final String current_instrument_data = "src/main/resources/excel/bb_demo/3/current_instrument_data.xlsx";
        final String market_data_close_price_eod = "src/main/resources/excel/bb_demo/3/market_data_close_price_eod.xlsx";
        final String graph_for = "G2";
        
        final DataModel report1Model = new DataModel(Paths.get(overview_report).getFileName().toString(), overview_report);
        final DataModel defines1Model = new DataModel(Paths.get(risk_model_def).getFileName().toString(), risk_model_def);
        final DataModel funcLtdModel = new DataModel(Paths.get(func_ltd).getFileName().toString(), func_ltd);
        final DataModel positionsModel = new DataModel(Paths.get(positions).getFileName().toString(), positions);
        
        cacheManager.createCache(CacheBasedDataModelStorage.DATA_MODEL_TO_ID_CACHE_NAME, config.setTypes(IDataModelId.class, IDataModel.class));
        cacheManager.createCache(CacheBasedDataModelStorage.DATA_MODEL_TO_NAME_CACHE_NAME, config.setTypes(String.class, IDataModel.class));
        cacheManager.createCache(CacheBasedDataSetStorage.DATA_SET_TO_ID_CACHE_NAME, config.setTypes(IDataModelId.class, IDataSet.class));
        cacheManager.createCache(CacheBasedDataSetStorage.DATA_SET_TO_NAME_CACHE_NAME, config.setTypes(String.class, IDataSet.class));
        cacheManager.createCache(CacheBasedAttributeFunctionStorage.DEFINE_FUNCTIONS_CACHE_NAME, config.setTypes(String.class, DefineFunctionMeta.class));
        cacheManager.createCache(DataSetOptimisationsCache.DATA_SET_TO_LAZY_PARAMETERS, config.setTypes(ILazyDataSet.Parameters.class, IDataSet.class));
        cacheManager.createCache(DataSetOptimisationsCache.DATA_SET_DS_LOOKUP_PARAMETERS, config.setTypes(DsLookupParameters.class, List.class));
        
        DataModelStorage dataModelStorage = new CacheBasedDataModelStorage();
        DataSetStorage dataSetStorage = new CacheBasedDataSetStorage();
        AttributeFunctionStorage attributeFunctionStorage = new CacheBasedAttributeFunctionStorage(); 
        
        external.setDataModelStorage(dataModelStorage);
        external.setDataSetStorage(dataSetStorage);
        external.setAttributeFunctionStorage(attributeFunctionStorage);
        external.setDataSetOptimisationsCache(new DataSetOptimisationsCache());
        
        dataSetStorage.saveDataSet(toDataSet(new XSSFWorkbook(current_instrument_data)));
        dataSetStorage.saveDataSet(toDataSet(new XSSFWorkbook(market_data_close_price_eod)));
        
        dataModelStorage.addDataModel(report1Model);
        dataModelStorage.addDataModel(defines1Model);
        dataModelStorage.addDataModel(funcLtdModel);
        dataModelStorage.addDataModel(positionsModel);
        
        attributeFunctionStorage.updateDefineFunctions(new HashSet<>(dataModelStorage.getDataModels().values()));
        
        final IEvaluator evaluator1 = new SpreadsheetEvaluator(report1Model);

        final IDataSet _report1DataSet = evaluator1.evaluate();
        _report1DataSet.name("_report_1");
        
        dataSetStorage.saveDataSet(_report1DataSet);
        
        copyDataSetToFileWithFormatting(_report1DataSet, new File(overview_report), overview_report_out);
        
        final IAuditor auditor = new SpreadsheetAuditor((SpreadsheetEvaluator) evaluator1);
        final IExecutionGraph graph = auditor.buildDynamicExecutionGraph(ExecutionGraphConfig.JOIN_ALL_DUPLICATE_VERTICES);

        DemoUtil.generateVisJsData(graph);
        DemoUtil.plainprint(graph);    
    }

    protected static void copyDataSetToFileWithFormatting(IDataSet dataSet, File file, String outputName) throws Exception {
        Files.copy(new File("src/main/resources/excel/bb_demo/_overview_report.xlsx"), new File(outputName));
        
        Workbook result = new XSSFWorkbook("src/main/resources/excel/bb_demo/_overview_report.xlsx");
        Sheet sheet = result.getSheetAt(0);
        for (IDsRow row : dataSet) {
            Row wbRow = sheet.getRow(row.index() - 1);
            for (IDsCell cell : row) {
                if (wbRow == null) { continue; }
                Cell wbCell = wbRow.getCell(cell.index() - 1);
                PoiFileConverter.populateCellValue(wbCell, cell.value());
            }
        }

        OutputStream fileOut = new FileOutputStream(outputName);
        result.write(fileOut);
        fileOut.flush();
        
        result.close();
        fileOut.close();
    }

}
