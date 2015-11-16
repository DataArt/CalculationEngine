var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '48dd14d1-af23-497a-a1e2-4529c8cd8025', label: 'IF\n6.0', color: '#f0ad4e', title: 'Name: IF<br>Value: 6.0<br>Type: IF<br>Id: 48dd14d1-af23-497a-a1e2-4529c8cd8025<br>Formula Expression: Formula String: IF(A3>A4,B3,B4); Formula Values: IF(3.0 > 5.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@52e2e426'},
{id: '457c5bc1-3c6b-4c84-b9ce-05c4b7c790e2', label: 'B4\n6.0', color: '#31b0d5', title: 'Name: B4<br>Value: 6.0<br>Type: CELL_WITH_VALUE<br>Id: 457c5bc1-3c6b-4c84-b9ce-05c4b7c790e2<br>Formula Expression: Formula String: B4; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: B4 Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@52e2e426'},
{id: '954648d4-496e-42d2-b1fd-bceb1888e036', label: '>\nFALSE', color: '#f0ad4e', title: 'Name: ><br>Value: FALSE<br>Type: OPERATOR<br>Id: 954648d4-496e-42d2-b1fd-bceb1888e036<br>Formula Expression: Formula String: A3 > A4; Formula Values: 3.0 > 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@52e2e426'},
{id: '2aee9128-9d18-4da5-b2cf-5e9a0ba69602', label: 'A1\n6.0', color: '#31b0d5', title: 'Name: A1<br>Value: 6.0<br>Type: CELL_WITH_FORMULA<br>Id: 2aee9128-9d18-4da5-b2cf-5e9a0ba69602<br>Formula Expression: Formula String:  + IF(A3>A4,B3,B4); Formula Values:  + IF(3.0 > 5.0, 6.0); Formula Ptg:  6.0, 3.0 5.0 > IF  +; Ptgs:  B4, A3 A4 > IF  + Index in Ptgs: 9 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@52e2e426'},
{id: '85c3f876-ef9c-4787-b486-6b7e6453b882', label: '+\n6.0', color: '#f0ad4e', title: 'Name: +<br>Value: 6.0<br>Type: OPERATOR<br>Id: 85c3f876-ef9c-4787-b486-6b7e6453b882<br>Formula Expression: Formula String:  + IF(A3>A4,B3,B4); Formula Values:  + IF(3.0 > 5.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 9 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@52e2e426'},
{id: '53d98e43-d5b0-409c-b31b-bf7044409c04', label: 'A3\n3.0', color: '#31b0d5', title: 'Name: A3<br>Value: 3.0<br>Type: CELL_WITH_VALUE<br>Id: 53d98e43-d5b0-409c-b31b-bf7044409c04<br>Formula Expression: Formula String: A3; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: A3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@52e2e426'},
{id: 'fca03a73-3acd-45a8-905a-a3e7d2bd96b1', label: 'A4\n5.0', color: '#31b0d5', title: 'Name: A4<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: fca03a73-3acd-45a8-905a-a3e7d2bd96b1<br>Formula Expression: Formula String: A4; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A4 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@52e2e426'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'fca03a73-3acd-45a8-905a-a3e7d2bd96b1', to: '954648d4-496e-42d2-b1fd-bceb1888e036'},
{from: '457c5bc1-3c6b-4c84-b9ce-05c4b7c790e2', to: '48dd14d1-af23-497a-a1e2-4529c8cd8025'},
{from: '85c3f876-ef9c-4787-b486-6b7e6453b882', to: '2aee9128-9d18-4da5-b2cf-5e9a0ba69602'},
{from: '53d98e43-d5b0-409c-b31b-bf7044409c04', to: '954648d4-496e-42d2-b1fd-bceb1888e036'},
{from: '954648d4-496e-42d2-b1fd-bceb1888e036', to: '48dd14d1-af23-497a-a1e2-4529c8cd8025'},
{from: '48dd14d1-af23-497a-a1e2-4529c8cd8025', to: '85c3f876-ef9c-4787-b486-6b7e6453b882'}
                            ]);