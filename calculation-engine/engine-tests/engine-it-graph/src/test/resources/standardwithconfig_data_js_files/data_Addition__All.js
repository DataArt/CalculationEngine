var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '28ec3d6d-aeee-4d7d-abac-c3aa1762197a', label: '+\n50.0', color: '#f0ad4e', title: 'Name: +<br>Value: 50.0<br>Type: OPERATOR<br>Id: 28ec3d6d-aeee-4d7d-abac-c3aa1762197a<br>Formula Expression: Formula String: A1 + A2; Formula Values: 20.0 + 30.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4a561f7d'},
{id: 'f4a3cb2a-0afc-4502-8849-bf4059d0f0c5', label: 'A3\n50.0', color: '#31b0d5', title: 'Name: A3<br>Value: 50.0<br>Type: CELL_WITH_FORMULA<br>Id: f4a3cb2a-0afc-4502-8849-bf4059d0f0c5<br>Formula Expression: Formula String: A1 + A2; Formula Values: 20.0 + 30.0; Formula Ptg: 20.0 30.0 +; Ptgs: A1 A2 + Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4a561f7d'},
{id: 'cf7a8230-50f9-427f-8897-b565f3979a22', label: 'A2\n30.0', color: '#31b0d5', title: 'Name: A2<br>Value: 30.0<br>Type: CELL_WITH_VALUE<br>Id: cf7a8230-50f9-427f-8897-b565f3979a22<br>Formula Expression: Formula String: A2; Formula Values: 30.0; Formula Ptg: 30.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4a561f7d'},
{id: '67a6b927-456c-4cbd-8a80-46504356a8a7', label: 'A1\n20.0', color: '#31b0d5', title: 'Name: A1<br>Value: 20.0<br>Type: CELL_WITH_VALUE<br>Id: 67a6b927-456c-4cbd-8a80-46504356a8a7<br>Formula Expression: Formula String: A1; Formula Values: 20.0; Formula Ptg: 20.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4a561f7d'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '67a6b927-456c-4cbd-8a80-46504356a8a7', to: '28ec3d6d-aeee-4d7d-abac-c3aa1762197a'},
{from: 'cf7a8230-50f9-427f-8897-b565f3979a22', to: '28ec3d6d-aeee-4d7d-abac-c3aa1762197a'},
{from: '28ec3d6d-aeee-4d7d-abac-c3aa1762197a', to: 'f4a3cb2a-0afc-4502-8849-bf4059d0f0c5'}
                            ]);