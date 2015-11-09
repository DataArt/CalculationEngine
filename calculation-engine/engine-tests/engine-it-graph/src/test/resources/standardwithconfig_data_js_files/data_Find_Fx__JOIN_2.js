var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '182b5953-07c2-48f9-a7b0-19770f071a61', label: 'A5\n6.0', color: '#31b0d5', title: 'Name: A5<br>Value: 6.0<br>Type: CELL_WITH_FORMULA<br>Id: 182b5953-07c2-48f9-a7b0-19770f071a61<br>Formula Expression: Formula String: FIND(A1, VALUE); Formula Values: FIND(Some text for test, text); Formula Ptg: Some text for test, text FIND ; Ptgs: A1, VALUE FIND  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3b57f915'},
{id: 'ab39180c-54c0-4b1e-8e4e-068975face08', label: 'VALUE\ntext', color: '#31b0d5', title: 'Name: VALUE<br>Value: text<br>Type: CONSTANT_VALUE<br>Id: ab39180c-54c0-4b1e-8e4e-068975face08<br>Formula Expression: Formula String: VALUE; Formula Values: text; Formula Ptg: text; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3b57f915'},
{id: '50f9fbe7-9523-4bef-8bc8-b56577ee5a64', label: 'FIND\n6.0', color: '#f0ad4e', title: 'Name: FIND<br>Value: 6.0<br>Type: FUNCTION<br>Id: 50f9fbe7-9523-4bef-8bc8-b56577ee5a64<br>Formula Expression: Formula String: FIND(A1, VALUE); Formula Values: FIND(Some text for test, text); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3b57f915'},
{id: '880e4bdb-7b3f-4816-bc27-7595321360c5', label: 'A1\nSome text for test', color: '#31b0d5', title: 'Name: A1<br>Value: Some text for test<br>Type: CELL_WITH_VALUE<br>Id: 880e4bdb-7b3f-4816-bc27-7595321360c5<br>Formula Expression: Formula String: A1; Formula Values: Some text for test; Formula Ptg: Some text for test; Ptgs: A1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3b57f915'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '880e4bdb-7b3f-4816-bc27-7595321360c5', to: '50f9fbe7-9523-4bef-8bc8-b56577ee5a64'},
{from: '50f9fbe7-9523-4bef-8bc8-b56577ee5a64', to: '182b5953-07c2-48f9-a7b0-19770f071a61'},
{from: 'ab39180c-54c0-4b1e-8e4e-068975face08', to: '50f9fbe7-9523-4bef-8bc8-b56577ee5a64'}
                            ]);