var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '7aa38a36-8c7f-4399-8433-8cd28d57030f', label: 'C1\n3.0', color: '#31b0d5', title: 'Name: C1<br>Value: 3.0<br>Type: CELL_WITH_VALUE<br>Id: 7aa38a36-8c7f-4399-8433-8cd28d57030f<br>Formula Expression: Formula String: C1; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: C1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3fc064cb'},
{id: 'c50391c8-db3c-4003-9603-eb75dc2afa9c', label: 'E1\n5.0', color: '#31b0d5', title: 'Name: E1<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: c50391c8-db3c-4003-9603-eb75dc2afa9c<br>Formula Expression: Formula String: E1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: E1 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3fc064cb'},
{id: '6a332b8e-bc22-405c-9558-8192a9311337', label: '+\n7.0', color: '#f0ad4e', title: 'Name: +<br>Value: 7.0<br>Type: OPERATOR<br>Id: 6a332b8e-bc22-405c-9558-8192a9311337<br>Formula Expression: Formula String: C1 + D1; Formula Values: 3.0 + 4.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3fc064cb'},
{id: 'b25b058a-2398-441a-ba93-91a187413885', label: 'F1\n', color: '#31b0d5', title: 'Name: F1<br>Value: <br>Type: EMPTY_CELL<br>Id: b25b058a-2398-441a-ba93-91a187413885<br>Formula Expression: Formula String: F1; Formula Values: ; Formula Ptg: ; Ptgs: F1 Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3fc064cb'},
{id: '7f6a8d77-9897-437c-b4a5-019f80044fe0', label: 'E5\n12.0', color: '#31b0d5', title: 'Name: E5<br>Value: 12.0<br>Type: CELL_WITH_FORMULA<br>Id: 7f6a8d77-9897-437c-b4a5-019f80044fe0<br>Formula Expression: Formula String: C1 + D1 + E1 + F1; Formula Values: 3.0 + 4.0 + 5.0 + ; Formula Ptg: 3.0 4.0 + 5.0 +  +; Ptgs: C1 D1 + E1 + F1 + Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3fc064cb'},
{id: 'cb4546de-c82f-41f6-af7b-03ea1a50d98e', label: '+\n12.0', color: '#f0ad4e', title: 'Name: +<br>Value: 12.0<br>Type: OPERATOR<br>Id: cb4546de-c82f-41f6-af7b-03ea1a50d98e<br>Formula Expression: Formula String: C1 + D1 + E1 + F1; Formula Values: 3.0 + 4.0 + 5.0 + ; Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3fc064cb'},
{id: 'd4f98eb5-b727-427d-b31b-41286399cdf4', label: 'D1\n4.0', color: '#31b0d5', title: 'Name: D1<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: d4f98eb5-b727-427d-b31b-41286399cdf4<br>Formula Expression: Formula String: D1; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3fc064cb'},
{id: '3d015f0d-9767-45c2-bf11-218c3eb21397', label: '+\n12.0', color: '#f0ad4e', title: 'Name: +<br>Value: 12.0<br>Type: OPERATOR<br>Id: 3d015f0d-9767-45c2-bf11-218c3eb21397<br>Formula Expression: Formula String: C1 + D1 + E1; Formula Values: 3.0 + 4.0 + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3fc064cb'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'd4f98eb5-b727-427d-b31b-41286399cdf4', to: '6a332b8e-bc22-405c-9558-8192a9311337'},
{from: 'c50391c8-db3c-4003-9603-eb75dc2afa9c', to: '3d015f0d-9767-45c2-bf11-218c3eb21397'},
{from: '6a332b8e-bc22-405c-9558-8192a9311337', to: '3d015f0d-9767-45c2-bf11-218c3eb21397'},
{from: 'cb4546de-c82f-41f6-af7b-03ea1a50d98e', to: '7f6a8d77-9897-437c-b4a5-019f80044fe0'},
{from: '7aa38a36-8c7f-4399-8433-8cd28d57030f', to: '6a332b8e-bc22-405c-9558-8192a9311337'},
{from: '3d015f0d-9767-45c2-bf11-218c3eb21397', to: 'cb4546de-c82f-41f6-af7b-03ea1a50d98e'},
{from: 'b25b058a-2398-441a-ba93-91a187413885', to: 'cb4546de-c82f-41f6-af7b-03ea1a50d98e'}
                            ]);