package com.dataart.spreadsheetanalytics.demo;

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
import java.util.List;

import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.api.model.IDsCell;
import com.dataart.spreadsheetanalytics.api.model.IDsRow;
import com.dataart.spreadsheetanalytics.engine.ExternalServices;
import com.dataart.spreadsheetanalytics.engine.FileSystemDataModelLocation;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.engine.SqlDataSource;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.CellAddress;
import com.dataart.spreadsheetanalytics.model.DataModel;
import com.dataart.spreadsheetanalytics.model.DataSet;

public class QueryFunctionDemo {

    public static void main(String[] args) throws Exception {

        final String path = args[0];
        final String query = args[1];
        final List<String> cellsToEvaluate = new ArrayList<>(Arrays.asList(args));
        cellsToEvaluate.remove(0);
        cellsToEvaluate.remove(0);

        final FileSystemDataModelLocation location = new FileSystemDataModelLocation();
        location.setPath(Paths.get(path));
        
        final IDataModel model = new DataModel(query);
        
        ExternalServices external = ExternalServices.INSTANCE;
        
        //add datamodels to storage - demo only
        external.getDataModelStorage().addDataModels(location);
        //in memoty sql data source - demo only
        external.getSqlDataSourceHub().addSqlDataSource(new TempSqlDataSource());
        //add define functions to storage - demo only
        external.getAttributeFunctionsCache().updateQueryDefineFunctions(external.getDataModelStorage().getDataModels());

        final IEvaluator evaluator = new SpreadsheetEvaluator(model);
        ((SpreadsheetEvaluator) evaluator).loadCustomFunctions();
        
        for (String cellToEvaluate : cellsToEvaluate) {
            final ICellAddress addr = new CellAddress(model.dataModelId(), A1Address.fromA1Address(cellToEvaluate));

            final ICellValue cv = evaluator.evaluate(addr);
            System.out.println("Result: " + cv);            
        }

        IDataSet ds = external.getDataSetStorage().getDataSet("pers");
        
        for (IDsRow row : ds) {
            System.out.println();
            for (IDsCell cell : row) {
                System.out.print(cell.value());
                System.out.print(" | ");
            }
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

        DataSet ds = new DataSet();

        String queryToExecute = query;
        for (int i = 0; i < params.size(); i++) queryToExecute = queryToExecute.replaceFirst("\\?", params.get(i).toString());        

        PreparedStatement st = co.prepareStatement(queryToExecute);
        st.execute();

        ResultSet rs = st.getResultSet();
        ResultSetMetaData rsmd = rs.getMetaData();
        
        while (rs.next()) 
            for (int i = 1; i <= rsmd.getColumnCount(); i++) 
                ds.createRow().createCell().value(rs.getObject(i));

        return ds;
    }

    @Override
    public String name() {
        return "TEMP";
    }
}
