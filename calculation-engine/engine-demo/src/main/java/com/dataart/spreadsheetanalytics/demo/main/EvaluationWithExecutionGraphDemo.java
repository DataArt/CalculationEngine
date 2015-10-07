package com.dataart.spreadsheetanalytics.demo.main;

import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.dataart.spreadsheetanalytics.api.engine.ExternalServices;
import com.dataart.spreadsheetanalytics.api.engine.IAuditor;
import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.engine.SqlDataSource;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraph;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphEdge;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex;
import com.dataart.spreadsheetanalytics.api.model.IExecutionGraphVertex.Type;
import com.dataart.spreadsheetanalytics.api.model.ILazyDataSet;
import com.dataart.spreadsheetanalytics.engine.PoiFileConverter;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetAuditor;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.engine.dataset.SqlDataSet;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.CellAddress;
import com.dataart.spreadsheetanalytics.model.CellValue;
import com.dataart.spreadsheetanalytics.model.DataModel;
import com.dataart.spreadsheetanalytics.model.DataSet;
import com.dataart.spreadsheetanalytics.model.DsRow;

public class EvaluationWithExecutionGraphDemo {

    public static void main(String[] args) throws Exception {

        if (args.length < 2) {
            System.err.println("Excel file path and Cell Address, please!");
            return;
        }
        
        final String excel = args[0]; // "src/main/resources/excel/define-funcexec/funcexec.xlsx";
        final List<String> cellsToEvaluate = new ArrayList<>(Arrays.asList(args));
        cellsToEvaluate.remove(0);

        final IDataModel model = new DataModel(Paths.get(excel).getFileName().toString(), excel);
        
        final ExternalServices external = ExternalServices.INSTANCE;

        try {
            final XSSFWorkbook xssf = new XSSFWorkbook(excel);
            final IDataSet dataSet = PoiFileConverter.toDataSet(xssf);
            external.getDataSetStorage().saveDataSet(dataSet);
        } catch (Exception e) { }
        
        //add datamodels to storage
        external.getDataModelStorage().addDataModel(model);
        //add define functions to storage
        external.getAttributeFunctionsCache().updateDefineFunctions(external.getDataModelStorage().getDataModels());
        //copy data models to cache
        external.getDataModelStorage().warmUpDataModelsForExecutionCache(external.getAttributeFunctionsCache().getDefineFunctions());
        
        //in memoty sql data source
        external.getDataSourceHub().addSqlDataSource(new TempSqlDataSource());
        //add sql dataset to storage
        final String sql = "SELECT * FROM PERSONS WHERE AGE = ? OR AGE = ? OR FIRSTNAME = '?'";
        final ILazyDataSet sqlDataSet = new SqlDataSet("P", sql);
        external.getDataSetStorage().saveDataSet(sqlDataSet);

        //create Evaluator
        final IEvaluator evaluator = new SpreadsheetEvaluator((DataModel) model);
        
        Map<String, Object> values = new LinkedHashMap<>();
        for (String cell : cellsToEvaluate) {
            values.put(cell, evaluator.evaluate(new CellAddress(model.dataModelId(), A1Address.fromA1Address(cell))));
        }
        
        final ICellAddress addr = new CellAddress(model.dataModelId(), A1Address.fromA1Address(cellsToEvaluate.get(cellsToEvaluate.size() - 1)));

        final IAuditor auditor = new SpreadsheetAuditor((SpreadsheetEvaluator) evaluator);
        final IExecutionGraph graph = auditor.buildDynamicExecutionGraph(addr);
        
        generateVisJsData(graph);
        plainprint(graph);

        System.out.println("\n\n***********");
        for (String cell : values.keySet()) {
            System.out.println("Result of " + cell + " is: " + values.get(cell));
        }
        
    }
    
    protected static void plainprint(IExecutionGraph graph) {
        for (IExecutionGraphVertex vertex : graph.getVertices()) {
            System.out.println("---------------------------------");
            System.out.println("Vertex Id: " + vertex.id());
            System.out.println("Name: " + vertex.name());
            System.out.println("Type: " + vertex.type());
            System.out.println("Formula Expression: " + vertex.formula());
            System.out.println("Value: " + CellValue.fromCellValueToString(vertex.value()));
            System.out.println("Source Object Id: " + vertex.sourceObjectId());
        }
    }

    protected static void generateVisJsData(IExecutionGraph graph) {
        try {
            final String dataTemplateFileStr = "src/main/resources/ui/data_template.js";
            final String dataFileStr = "src/main/resources/ui/data.js";

            final String VERTICES_PLACEHOLDER = "<%vertices_placeholder%>";
            final String EDGES_PLACEHOLDER = "<%edges_placeholder%>";
            
            StringBuilder verticesJson = new StringBuilder();
            StringBuilder edgesJson = new StringBuilder();
            
            for (IExecutionGraphVertex vertex : graph.getVertices()) {
                /* {id: a, label: b, ...}, */

                verticesJson.append("{id: '")
                            .append(vertex.id())
                            .append("', label: '")
                            .append(vertex.name())
                            .append("\\n")
                            .append(vertex.value() == null || CellValue.fromCellValueToString(vertex.value()).length() > 25 ? "..." : CellValue.fromCellValueToString(vertex.value()))
                            .append("', color: '")
                            .append(vertex.type() == Type.OPERATOR || vertex.type() == Type.FUNCTION || vertex.type() == Type.IF ? "#f0ad4e" : "#31b0d5")
                            .append("', title: '")
                                .append("Name: ")
                                .append(vertex.name())
                                .append("<br>")
                                .append("Value: ")
                                .append(CellValue.fromCellValueToString(vertex.value()))
                                .append("<br>")
                                .append("Type: ")
                                .append(vertex.type())
                                .append("<br>")
                                .append("Id: ")
                                .append(vertex.id())
                                .append("<br>")
                                .append("Formula Expression: ")
                                .append(vertex.formula())
                                .append("<br>")
                                .append("Source Object Id: ")
                                .append(vertex.sourceObjectId())
                            .append("'},\n");
            }
            verticesJson.setLength(verticesJson.length() > 0 ? verticesJson.length() - 2 : 0);

            for (IExecutionGraphEdge edge : graph.getEdges()) {
                /* {from: id_a, to: id_b}, */
                
                IExecutionGraphVertex from = graph.getEdgeSource(edge);
                IExecutionGraphVertex to = graph.getEdgeTarget(edge);
                
                edgesJson.append("{from: '")
                         .append(from.id())
                         .append("', to: '")
                         .append(to.id())
                         .append("'},\n");
            }

            edgesJson.setLength(edgesJson.length() > 0 ? edgesJson.length() - 2 : 0);

            String content = new String(Files.readAllBytes(Paths.get(dataTemplateFileStr)), StandardCharsets.UTF_8);
            content = content.replace(VERTICES_PLACEHOLDER, verticesJson.toString())
                             .replace(EDGES_PLACEHOLDER, edgesJson.toString());
            
            Files.write(Paths.get(dataFileStr), content.getBytes(StandardCharsets.UTF_8));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
class TempSqlDataSource implements SqlDataSource {

    private Connection co;
    
    private String initSql_1 = "CREATE TABLE Persons "
                                + "("
                                    + "PersonId int,"
                                    + "LastName varchar(255),"
                                    + "FirstName varchar(255),"
                                    + "Address varchar(255),"
                                    + "City varchar(255),"
                                    + "Age int,"
                                    + "CreditCardNumber bigint,"
                                + ");";
    
    private String initSql_2 = 
            "INSERT INTO Persons (PersonId, LastName, FirstName, Address, City, Age, CreditCardNumber) VALUES (1,'Erichsen','Tom B.','Abc St.','Lublin',36, 0001000100010001);" +
            "INSERT INTO Persons (PersonId, LastName, FirstName, Address, City, Age, CreditCardNumber) VALUES (2,'Tomasson','John B.','Abc St.','Lublin',25, 0002000200020002);" +
            "INSERT INTO Persons (PersonId, LastName, FirstName, Address, City, Age, CreditCardNumber) VALUES (3,'Bedersson','Richard B.','Abc St.','Lublin',48, 0003000300030003);" +
            "INSERT INTO Persons (PersonId, LastName, FirstName, Address, City, Age, CreditCardNumber) VALUES (4,'Chrenesson','Michael B.','Abc St.','Lublin',77, 0004000400040004);" +
            "INSERT INTO Persons (PersonId, LastName, FirstName, Address, City, Age, CreditCardNumber) VALUES (5,'Nefasson','Hank B.','Abc St.','Lublin',19, 0005000500050005);";
    
    public TempSqlDataSource() {
        
        try {
            Class.forName("org.hsqldb.jdbcDriver" );
            co = DriverManager.getConnection("jdbc:hsqldb:mem:aname", "sa", "");
            Statement st = co.createStatement();
            st.execute(initSql_1);
            st.execute(initSql_2);
        } catch (Exception e) {
            //TODO: this is temp!!
            e.printStackTrace();
        }
    }

    @Override
    public IDataSet executeQuery(String query, List<Object> params) throws SQLException {

        final DataSet ds = new DataSet(UUID.randomUUID().toString());

        String queryToExecute = query;
        for (int i = 0; i < params.size(); i++) queryToExecute = queryToExecute.replaceFirst("\\?", params.get(i).toString());        

        PreparedStatement st = co.prepareStatement(queryToExecute);
        st.execute();

        ResultSet rs = st.getResultSet();
        ResultSetMetaData rsmd = rs.getMetaData();
        
        DsRow row = ds.createRow();
        for (int i = 1; i <= rsmd.getColumnCount(); i++)
            row.createCell().value(rsmd.getColumnLabel(i));
        
        while (rs.next()) {
            row = ds.createRow();
            for (int i = 1; i <= rsmd.getColumnCount(); i++)
                row.createCell().value(rs.getObject(i));
        }
        
        return ds;
    }

    @Override
    public String name() {
        return null;
    }
}
