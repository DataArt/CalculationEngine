var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3dc177cb-7f35-49ef-a856-00216edd68bf', label: 'E6\nTRUE', color: '#31b0d5', title: 'Name: E6<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 3dc177cb-7f35-49ef-a856-00216edd68bf<br>Formula Expression: Formula String: EXACT(C3, C2); Formula Values: EXACT(76.0, 76.0); Formula Ptg: 76.0, 76.0 EXACT ; Ptgs: C3, C2 EXACT  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5b022357'},
{id: 'a32473bd-6396-4bd7-bdc0-90cda37d2a5b', label: 'A2\n23.0', color: '#31b0d5', title: 'Name: A2<br>Value: 23.0<br>Type: CELL_WITH_VALUE<br>Id: a32473bd-6396-4bd7-bdc0-90cda37d2a5b<br>Formula Expression: Formula String: A2; Formula Values: 23.0; Formula Ptg: 23.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5b022357'},
{id: '12447ece-43d3-4b99-9527-a889c50f8cd3', label: 'EXACT\nFALSE', color: '#f0ad4e', title: 'Name: EXACT<br>Value: FALSE<br>Type: FUNCTION<br>Id: 12447ece-43d3-4b99-9527-a889c50f8cd3<br>Formula Expression: Formula String: EXACT(B2, A2); Formula Values: EXACT(56.0, 23.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5b022357'},
{id: 'fd49fb47-213d-4d91-b018-653c1cfb423f', label: 'EXACT\nTRUE', color: '#f0ad4e', title: 'Name: EXACT<br>Value: TRUE<br>Type: FUNCTION<br>Id: fd49fb47-213d-4d91-b018-653c1cfb423f<br>Formula Expression: Formula String: EXACT(C3, C2); Formula Values: EXACT(76.0, 76.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5b022357'},
{id: '1db47dde-22d3-497d-9634-22fc2d17ae1b', label: 'B2\n56.0', color: '#31b0d5', title: 'Name: B2<br>Value: 56.0<br>Type: CELL_WITH_VALUE<br>Id: 1db47dde-22d3-497d-9634-22fc2d17ae1b<br>Formula Expression: Formula String: B2; Formula Values: 56.0; Formula Ptg: 56.0; Ptgs: B2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5b022357'},
{id: 'a718b608-928f-400f-bbad-9a820a878d70', label: 'E5\nFALSE', color: '#31b0d5', title: 'Name: E5<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: a718b608-928f-400f-bbad-9a820a878d70<br>Formula Expression: Formula String: EXACT(B2, A2); Formula Values: EXACT(56.0, 23.0); Formula Ptg: 56.0, 23.0 EXACT ; Ptgs: B2, A2 EXACT  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5b022357'},
{id: '8df9a0d5-46f5-4cd0-953e-a428c09be4a4', label: 'C2\n76.0', color: '#31b0d5', title: 'Name: C2<br>Value: 76.0<br>Type: CELL_WITH_VALUE<br>Id: 8df9a0d5-46f5-4cd0-953e-a428c09be4a4<br>Formula Expression: Formula String: C2; Formula Values: 76.0; Formula Ptg: 76.0; Ptgs: C2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5b022357'},
{id: '468ae1db-326c-498c-b20d-d9a41cb15574', label: 'C3\n76.0', color: '#31b0d5', title: 'Name: C3<br>Value: 76.0<br>Type: CELL_WITH_VALUE<br>Id: 468ae1db-326c-498c-b20d-d9a41cb15574<br>Formula Expression: Formula String: C3; Formula Values: 76.0; Formula Ptg: 76.0; Ptgs: C3 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5b022357'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'a32473bd-6396-4bd7-bdc0-90cda37d2a5b', to: '12447ece-43d3-4b99-9527-a889c50f8cd3'},
{from: 'fd49fb47-213d-4d91-b018-653c1cfb423f', to: '3dc177cb-7f35-49ef-a856-00216edd68bf'},
{from: '12447ece-43d3-4b99-9527-a889c50f8cd3', to: 'a718b608-928f-400f-bbad-9a820a878d70'},
{from: '1db47dde-22d3-497d-9634-22fc2d17ae1b', to: '12447ece-43d3-4b99-9527-a889c50f8cd3'},
{from: '468ae1db-326c-498c-b20d-d9a41cb15574', to: 'fd49fb47-213d-4d91-b018-653c1cfb423f'},
{from: '8df9a0d5-46f5-4cd0-953e-a428c09be4a4', to: 'fd49fb47-213d-4d91-b018-653c1cfb423f'}
                            ]);