var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '93a2ea4d-e424-46cf-afc6-d21766a50680', label: 'B2\n7.0', color: '#31b0d5', title: 'Name: B2<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: 93a2ea4d-e424-46cf-afc6-d21766a50680<br>Formula Expression: Formula String: INT(VALUE); Formula Values: INT(7.5); Formula Ptg: 7.5 INT ; Ptgs: VALUE INT  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2116b68b'},
{id: '2d070f05-4f92-48f1-a7ed-a5c8f77cd0bf', label: 'INT\n19.0', color: '#f0ad4e', title: 'Name: INT<br>Value: 19.0<br>Type: FUNCTION<br>Id: 2d070f05-4f92-48f1-a7ed-a5c8f77cd0bf<br>Formula Expression: Formula String: INT(A1); Formula Values: INT(19.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2116b68b'},
{id: 'b235d6f7-dd8b-4d16-8ee5-763facf8dea8', label: 'B3\n19.0', color: '#31b0d5', title: 'Name: B3<br>Value: 19.0<br>Type: CELL_WITH_FORMULA<br>Id: b235d6f7-dd8b-4d16-8ee5-763facf8dea8<br>Formula Expression: Formula String: INT(A1); Formula Values: INT(19.5); Formula Ptg: 19.5 INT ; Ptgs: A1 INT  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2116b68b'},
{id: 'ed2b36d4-e51b-4a7c-a0a9-de8322bea21b', label: 'VALUE\n7.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: 7.5<br>Type: CONSTANT_VALUE<br>Id: ed2b36d4-e51b-4a7c-a0a9-de8322bea21b<br>Formula Expression: Formula String: VALUE; Formula Values: 7.5; Formula Ptg: 7.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2116b68b'},
{id: '62639aff-1c89-4d73-9934-8534968d7c64', label: 'A1\n19.5', color: '#31b0d5', title: 'Name: A1<br>Value: 19.5<br>Type: CELL_WITH_VALUE<br>Id: 62639aff-1c89-4d73-9934-8534968d7c64<br>Formula Expression: Formula String: A1; Formula Values: 19.5; Formula Ptg: 19.5; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2116b68b'},
{id: 'eccf5508-f3a6-457f-b372-3a4d16e539b0', label: 'INT\n7.0', color: '#f0ad4e', title: 'Name: INT<br>Value: 7.0<br>Type: FUNCTION<br>Id: eccf5508-f3a6-457f-b372-3a4d16e539b0<br>Formula Expression: Formula String: INT(VALUE); Formula Values: INT(7.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2116b68b'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'ed2b36d4-e51b-4a7c-a0a9-de8322bea21b', to: 'eccf5508-f3a6-457f-b372-3a4d16e539b0'},
{from: 'eccf5508-f3a6-457f-b372-3a4d16e539b0', to: '93a2ea4d-e424-46cf-afc6-d21766a50680'},
{from: '62639aff-1c89-4d73-9934-8534968d7c64', to: '2d070f05-4f92-48f1-a7ed-a5c8f77cd0bf'},
{from: '2d070f05-4f92-48f1-a7ed-a5c8f77cd0bf', to: 'b235d6f7-dd8b-4d16-8ee5-763facf8dea8'}
                            ]);