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
import java.util.UUID;

import com.dataart.spreadsheetanalytics.api.engine.ExternalServices;
import com.dataart.spreadsheetanalytics.api.engine.IEvaluator;
import com.dataart.spreadsheetanalytics.api.engine.SqlDataSource;
import com.dataart.spreadsheetanalytics.api.model.ICellAddress;
import com.dataart.spreadsheetanalytics.api.model.ICellValue;
import com.dataart.spreadsheetanalytics.api.model.IDataModel;
import com.dataart.spreadsheetanalytics.api.model.IDataSet;
import com.dataart.spreadsheetanalytics.api.model.IDsCell;
import com.dataart.spreadsheetanalytics.api.model.IDsRow;
import com.dataart.spreadsheetanalytics.api.model.ILazyDataSet;
import com.dataart.spreadsheetanalytics.engine.SpreadsheetEvaluator;
import com.dataart.spreadsheetanalytics.engine.dataset.SqlDataSet;
import com.dataart.spreadsheetanalytics.model.A1Address;
import com.dataart.spreadsheetanalytics.model.CellAddress;
import com.dataart.spreadsheetanalytics.model.DataModel;
import com.dataart.spreadsheetanalytics.model.DataSet;
import com.dataart.spreadsheetanalytics.model.DsRow;

public class QueryFunctionDemo {

    public static void main(String[] args) throws Exception {

        final String query = args[0];
        final List<String> cellsToEvaluate = new ArrayList<>(Arrays.asList(args));
        cellsToEvaluate.remove(0);
        final String dslookupAddress = cellsToEvaluate.remove(cellsToEvaluate.size() - 1);

        final IDataModel model = new DataModel(Paths.get(query).getFileName().toString(), query);
        
        ExternalServices external = ExternalServices.INSTANCE;
        
        //in memoty sql data source - demo only
        external.getDataSourceHub().addSqlDataSource(new TempSqlDataSource());
        //add define functions to storage - demo only
        final String sql = "SELECT * FROM PERSONS WHERE AGE = ? OR AGE = ? OR FIRSTNAME = '?'";
        final ILazyDataSet sqlDataSet = new SqlDataSet("P", sql);
        external.getDataSetStorage().saveDataSet(sqlDataSet);

        final IEvaluator evaluator = new SpreadsheetEvaluator(model);
        ((SpreadsheetEvaluator) evaluator).loadCustomFunctions();
        
        System.out.println("QUERY function with INDEX function:");
        for (String cellToEvaluate : cellsToEvaluate) {
            final ICellAddress addr = new CellAddress(model.dataModelId(), A1Address.fromA1Address(cellToEvaluate));

            final ICellValue cv = evaluator.evaluate(addr);
            System.out.println("Result: " + cv);            
        }

        IDataSet ds = external.getDataSetStorage().getDataSet("pers");

        System.out.println();
        System.out.println("Result DataSet of QUERY function with parameters:");
        for (IDsRow row : ds) {
            for (IDsCell cell : row) {
                System.out.print(cell.value());
                System.out.print(" | ");
            }
            System.out.println();
        }
        
        System.out.println();
        System.out.println("DSLOOKUP with DataSet from QUERY function:");
        final ICellAddress addr = new CellAddress(model.dataModelId(), A1Address.fromA1Address(dslookupAddress));
        final ICellValue cv = evaluator.evaluate(addr);
        System.out.println("Result: " + cv);
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
