var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '54c5d18b-f993-4f04-8302-76acdb851e0f', label: 'T\nexpected', color: '#f0ad4e', title: 'Name: T<br>Value: expected<br>Type: FUNCTION<br>Id: 54c5d18b-f993-4f04-8302-76acdb851e0f<br>Formula Expression: Formula String: T(D2); Formula Values: T(expected); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@759d81f3'},
{id: 'be953203-5fd6-437a-a3a5-d2e4cff04023', label: 'D2\nexpected', color: '#31b0d5', title: 'Name: D2<br>Value: expected<br>Type: CELL_WITH_VALUE<br>Id: be953203-5fd6-437a-a3a5-d2e4cff04023<br>Formula Expression: Formula String: D2; Formula Values: expected; Formula Ptg: expected; Ptgs: D2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@759d81f3'},
{id: 'd7ba3cdc-d6e4-4939-9c9b-4cbd75f4f0b2', label: 'D5\nexpected', color: '#31b0d5', title: 'Name: D5<br>Value: expected<br>Type: CELL_WITH_FORMULA<br>Id: d7ba3cdc-d6e4-4939-9c9b-4cbd75f4f0b2<br>Formula Expression: Formula String: T(D2); Formula Values: T(expected); Formula Ptg: expected T ; Ptgs: D2 T  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@759d81f3'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'be953203-5fd6-437a-a3a5-d2e4cff04023', to: '54c5d18b-f993-4f04-8302-76acdb851e0f'},
{from: '54c5d18b-f993-4f04-8302-76acdb851e0f', to: 'd7ba3cdc-d6e4-4939-9c9b-4cbd75f4f0b2'}
                            ]);