var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '798d4f20-96b8-4f47-b81a-a045ad2806d5', label: 'A5\n6.0', color: '#31b0d5', title: 'Name: A5<br>Value: 6.0<br>Type: CELL_WITH_FORMULA<br>Id: 798d4f20-96b8-4f47-b81a-a045ad2806d5<br>Formula Expression: Formula String: FIND(A1, VALUE); Formula Values: FIND(Some text for test, text); Formula Ptg: Some text for test, text FIND ; Ptgs: A1, VALUE FIND  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@600e2000'},
{id: '3b929a46-d646-4945-b6a5-649b8b42b453', label: 'FIND\n6.0', color: '#f0ad4e', title: 'Name: FIND<br>Value: 6.0<br>Type: FUNCTION<br>Id: 3b929a46-d646-4945-b6a5-649b8b42b453<br>Formula Expression: Formula String: FIND(A1, VALUE); Formula Values: FIND(Some text for test, text); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@600e2000'},
{id: '83586f17-13f5-45cc-851a-033dcaff9146', label: 'VALUE\ntext', color: '#31b0d5', title: 'Name: VALUE<br>Value: text<br>Type: CONSTANT_VALUE<br>Id: 83586f17-13f5-45cc-851a-033dcaff9146<br>Formula Expression: Formula String: VALUE; Formula Values: text; Formula Ptg: text; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@600e2000'},
{id: 'd2e9d242-a5f0-4f86-a353-c8e5ed10327d', label: 'A1\nSome text for test', color: '#31b0d5', title: 'Name: A1<br>Value: Some text for test<br>Type: CELL_WITH_VALUE<br>Id: d2e9d242-a5f0-4f86-a353-c8e5ed10327d<br>Formula Expression: Formula String: A1; Formula Values: Some text for test; Formula Ptg: Some text for test; Ptgs: A1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@600e2000'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '83586f17-13f5-45cc-851a-033dcaff9146', to: '3b929a46-d646-4945-b6a5-649b8b42b453'},
{from: 'd2e9d242-a5f0-4f86-a353-c8e5ed10327d', to: '3b929a46-d646-4945-b6a5-649b8b42b453'},
{from: '3b929a46-d646-4945-b6a5-649b8b42b453', to: '798d4f20-96b8-4f47-b81a-a045ad2806d5'}
                            ]);