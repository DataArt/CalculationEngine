package com.dataart.spreadsheetanalytics.engine;

import static org.assertj.core.api.StrictAssertions.assertThat;

import org.junit.Test;

public class QueryDefineFunctionMetaTest {

    @Test
    public void parse_SimpleSQL_MetaWithSQL() {
        //given
        String formula = "QUERYDEFINE(\"SELECT a1 as a4 FROM T WHERE T.a1 = ?\")";
        String expectedSqlQuery = "SELECT a1 as a4 FROM T WHERE T.a1 = ?";
        
        //when
        QueryDefineFunctionMeta actual = new QueryDefineFunctionMeta().parse(formula);

        //then
        assertThat(actual).isNotNull();
        assertThat(actual.sqlQuery()).isEqualTo(expectedSqlQuery);
        assertThat(actual.dataSource()).isNull();
    }

    @Test
    public void parse_SimpleSQLWithDataSource_MetaWithSQLAndDataSource() {
        //given
        String formula = "QUERYDEFINE(\"SELECT a1 as a4 FROM T WHERE T.a1 = ?\", \"Production\")";
        String expectedSqlQuery = "SELECT a1 as a4 FROM T WHERE T.a1 = ?";
        String expectedSqlDataSource = "Production";
        
        //when
        QueryDefineFunctionMeta actual = new QueryDefineFunctionMeta().parse(formula);

        //then
        assertThat(actual).isNotNull();
        assertThat(actual.sqlQuery()).isEqualTo(expectedSqlQuery);
        assertThat(actual.dataSource()).isEqualTo(expectedSqlDataSource);
    }

    @Test
    public void parse_SQLWithCommasAndBrakets_MetaWithSQL() {
        //given
        String formula = "QUERYDEFINE(\"SELECT a1,a2,a3 as a4 FROM T,B WHERE T.a1 = ? AND T.a2 in (1,2,3)\")";
        String expectedSqlQuery = "SELECT a1,a2,a3 as a4 FROM T,B WHERE T.a1 = ? AND T.a2 in (1,2,3)";
        
        //when
        QueryDefineFunctionMeta actual = new QueryDefineFunctionMeta().parse(formula);

        //then
        assertThat(actual).isNotNull();
        assertThat(actual.sqlQuery()).isEqualTo(expectedSqlQuery);
        assertThat(actual.dataSource()).isNull();
    }

    @Test
    public void parse_SQLWithCommasAndBraketsWithDataSource_MetaWithSQLWithDataSource() {
        //given
        String formula = "QUERYDEFINE(\"SELECT a1,a2,a3 as a4 FROM T,B WHERE T.a1 = ? AND T.a2 in (1,2,3)\", \"Production\")";
        String expectedSqlQuery = "SELECT a1,a2,a3 as a4 FROM T,B WHERE T.a1 = ? AND T.a2 in (1,2,3)";
        String expectedSqlDataSource = "Production";
        
        //when
        QueryDefineFunctionMeta actual = new QueryDefineFunctionMeta().parse(formula);

        //then
        assertThat(actual).isNotNull();
        assertThat(actual.sqlQuery()).isEqualTo(expectedSqlQuery);
        assertThat(actual.dataSource()).isEqualTo(expectedSqlDataSource);
    }
    
    @Test(expected = IllegalArgumentException.class)
    public void parse_NoArgs_IllegalArgumentException() {
        //given
        String formula = "QUERYDEFINE()";
        
        //when
        new QueryDefineFunctionMeta().parse(formula);
        
        //then
        //Exception
    }
    
    @Test(expected = IllegalArgumentException.class)
    public void parse_EmptyArgs_IllegalArgumentException() {
        //given
        String formula = "QUERYDEFINE(,)";
        
        //when
        new QueryDefineFunctionMeta().parse(formula);
        
        //then
        //Exception
    }
    
    @Test(expected = IllegalArgumentException.class)
    public void parse_3Args_IllegalArgumentException() {
        //given
        String formula = "QUERYDEFINE(\"SELECT a1 FROM T\", \"PROD\", 5)";
        
        //when
        new QueryDefineFunctionMeta().parse(formula);
        
        //then
        //Exception
    }
}
