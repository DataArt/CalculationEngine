var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'dee87e71-1a3a-46eb-93f7-7748205ef81b', label: 'FIND\n6.0', color: '#f0ad4e', title: 'Name: FIND<br>Value: 6.0<br>Type: FUNCTION<br>Id: dee87e71-1a3a-46eb-93f7-7748205ef81b<br>Formula Expression: Formula String: FIND(A1, VALUE); Formula Values: FIND(Some text for test, text); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3ea4dcc5'},
{id: '8a388483-3b0e-41c4-98dd-8a992bff570a', label: 'A1\nSome text for test', color: '#31b0d5', title: 'Name: A1<br>Value: Some text for test<br>Type: CELL_WITH_VALUE<br>Id: 8a388483-3b0e-41c4-98dd-8a992bff570a<br>Formula Expression: Formula String: A1; Formula Values: Some text for test; Formula Ptg: Some text for test; Ptgs: A1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3ea4dcc5'},
{id: 'b1d0f9c3-b40b-43d2-98f2-2f0c7dfb6a33', label: 'VALUE\ntext', color: '#31b0d5', title: 'Name: VALUE<br>Value: text<br>Type: CONSTANT_VALUE<br>Id: b1d0f9c3-b40b-43d2-98f2-2f0c7dfb6a33<br>Formula Expression: Formula String: VALUE; Formula Values: text; Formula Ptg: text; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3ea4dcc5'},
{id: 'f344758d-45b9-4b1e-8343-d166d8db994e', label: 'A5\n6.0', color: '#31b0d5', title: 'Name: A5<br>Value: 6.0<br>Type: CELL_WITH_FORMULA<br>Id: f344758d-45b9-4b1e-8343-d166d8db994e<br>Formula Expression: Formula String: FIND(A1, VALUE); Formula Values: FIND(Some text for test, text); Formula Ptg: Some text for test, text FIND ; Ptgs: A1, VALUE FIND  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3ea4dcc5'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '8a388483-3b0e-41c4-98dd-8a992bff570a', to: 'dee87e71-1a3a-46eb-93f7-7748205ef81b'},
{from: 'dee87e71-1a3a-46eb-93f7-7748205ef81b', to: 'f344758d-45b9-4b1e-8343-d166d8db994e'},
{from: 'b1d0f9c3-b40b-43d2-98f2-2f0c7dfb6a33', to: 'dee87e71-1a3a-46eb-93f7-7748205ef81b'}
                            ]);