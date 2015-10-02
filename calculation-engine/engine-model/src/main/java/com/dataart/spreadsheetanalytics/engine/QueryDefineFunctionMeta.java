package com.dataart.spreadsheetanalytics.engine;

import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.Map;

/**
 * This class integrates all the information about 'QUERYDEFINE' function.
 * Function itself (function code, implementation) can be found in {@link QueryDefineFunction} and {@link QueryFunction} engine-functions library.
 * 
 * This class is only the container for meta information.
 * When parsing of a spreadsheet is done (search for QUERYDEFINEs) all information is stored in instances of this class.
 * 
 * Meta information contains:
 * <li>SQL string with placeholders</li>
 * <li>Name/Id of SQL DataSource in case of several DataSources in application</li>
 * 
 */
@SuppressWarnings("javadoc")
public class QueryDefineFunctionMeta extends AttributeFunctionMeta {

    /** Name of QUERYDEFINE function in excel */
    public final static String KEYWORD = "QUERYDEFINE";
    
    public final static Map<String, Class<QueryDefineFunctionMeta>> ATTRIBUTE_FUNCTION = Collections.unmodifiableMap(new LinkedHashMap() {
        {
            put(QueryDefineFunctionMeta.KEYWORD, QueryDefineFunctionMeta.class);
        }
    });
    
    protected String sqlQuery;
    protected String dataSource;
    
    public String sqlQuery() { return this.sqlQuery; }
    public String dataSource() { return this.dataSource; }
    
    public void sqlQuery(String sqlQuery) { this.sqlQuery = sqlQuery; }
    public void dataSource(String dataSource) { this.dataSource = dataSource; }
    
    public QueryDefineFunctionMeta parse(String formula) {

        String step1 = formula.replace(KEYWORD, ""); //("sql", ["sqlDataSource"])
        if (step1.length() == formula.length()) { throw new IllegalArgumentException("Wrong Formula name."); }
        
        String step2 = step1.substring(1, step1.length() - 1); //"sql", ["sqlDataSource"]
        if (step2.isEmpty()) { throw new IllegalArgumentException("No arguments are found."); }
        if (step2.indexOf("\"") < 0 || step2.indexOf("\"") + 1 < 0) { throw new IllegalArgumentException("First parameter SQL string must be in quotes."); }
        
        String step3 = step2.substring(step2.indexOf("\"") + 1, step2.indexOf("\"", 1));
        
        String sqlQuery = step3;
        String sqlDataSource = null;

        String step4 = step2.substring(step2.indexOf("\"", 1) + 1, step2.length());
        if (!step4.isEmpty()) {
            if (step4.split(",").length > 2) { throw new IllegalArgumentException("Number of arguments in " + KEYWORD + " function must be 1 or 2."); }
            
            sqlDataSource = step4.replace(",", "").replace("\"", "").trim();
        }

        if (sqlQuery == null) { throw new IllegalArgumentException("Number of arguments in " + KEYWORD + " function must be 1 or 2."); }
        
        QueryDefineFunctionMeta meta = new QueryDefineFunctionMeta();
        meta.sqlQuery(sqlQuery);
        meta.dataSource(sqlDataSource);

        return meta;
    }

}
