var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '196b3ee1-2541-4614-8d8c-6213efc831cd', label: '<\nTRUE', color: '#f0ad4e', title: 'Name: <<br>Value: TRUE<br>Type: OPERATOR<br>Id: 196b3ee1-2541-4614-8d8c-6213efc831cd<br>Formula Expression: Formula String: D1 < VALUE; Formula Values: 4.0 < 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3ba8ef4e'},
{id: '46510783-2d86-4f75-af5c-7f54c2d0074b', label: 'IF\n65.0', color: '#f0ad4e', title: 'Name: IF<br>Value: 65.0<br>Type: IF<br>Id: 46510783-2d86-4f75-af5c-7f54c2d0074b<br>Formula Expression: Formula String: IF(D1<5,D2,C3); Formula Values: IF(4.0 < 5.0, 65.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3ba8ef4e'},
{id: 'ad95c6b5-6273-4611-8225-ae60b74c638c', label: 'E6\n65.0', color: '#31b0d5', title: 'Name: E6<br>Value: 65.0<br>Type: CELL_WITH_FORMULA<br>Id: ad95c6b5-6273-4611-8225-ae60b74c638c<br>Formula Expression: Formula String: IF(D1<5,D2,C3); Formula Values: IF(4.0 < 5.0, 65.0); Formula Ptg: 65.0, 4.0 5.0 < IF ; Ptgs: D2, D1 VALUE < IF  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3ba8ef4e'},
{id: '57127b12-b18e-4bff-a6a5-ab0e11f0e8bc', label: 'D2\n65.0', color: '#31b0d5', title: 'Name: D2<br>Value: 65.0<br>Type: CELL_WITH_VALUE<br>Id: 57127b12-b18e-4bff-a6a5-ab0e11f0e8bc<br>Formula Expression: Formula String: D2; Formula Values: 65.0; Formula Ptg: 65.0; Ptgs: D2 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3ba8ef4e'},
{id: '9d857d65-30eb-470c-abd1-e45d4e44de44', label: 'D1\n4.0', color: '#31b0d5', title: 'Name: D1<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 9d857d65-30eb-470c-abd1-e45d4e44de44<br>Formula Expression: Formula String: D1; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3ba8ef4e'},
{id: '24e1c691-df6b-4672-9221-96802f5db5a0', label: 'VALUE\n5.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 5.0<br>Type: CONSTANT_VALUE<br>Id: 24e1c691-df6b-4672-9221-96802f5db5a0<br>Formula Expression: Formula String: VALUE; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3ba8ef4e'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '46510783-2d86-4f75-af5c-7f54c2d0074b', to: 'ad95c6b5-6273-4611-8225-ae60b74c638c'},
{from: '9d857d65-30eb-470c-abd1-e45d4e44de44', to: '196b3ee1-2541-4614-8d8c-6213efc831cd'},
{from: '57127b12-b18e-4bff-a6a5-ab0e11f0e8bc', to: '46510783-2d86-4f75-af5c-7f54c2d0074b'},
{from: '24e1c691-df6b-4672-9221-96802f5db5a0', to: '196b3ee1-2541-4614-8d8c-6213efc831cd'},
{from: '196b3ee1-2541-4614-8d8c-6213efc831cd', to: '46510783-2d86-4f75-af5c-7f54c2d0074b'}
                            ]);