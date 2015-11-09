var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0aca53b8-e9d1-4462-b14b-192160e839bb', label: 'ASIN\n1.5707963267948966', color: '#f0ad4e', title: 'Name: ASIN<br>Value: 1.5707963267948966<br>Type: FUNCTION<br>Id: 0aca53b8-e9d1-4462-b14b-192160e839bb<br>Formula Expression: Formula String: ASIN(A2); Formula Values: ASIN(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4ebd8d2'},
{id: 'e2aa4bf8-6fa9-492f-a38e-d0fc986939ef', label: 'E3\n1.5707963267948966', color: '#31b0d5', title: 'Name: E3<br>Value: 1.5707963267948966<br>Type: CELL_WITH_FORMULA<br>Id: e2aa4bf8-6fa9-492f-a38e-d0fc986939ef<br>Formula Expression: Formula String: ASIN(A2); Formula Values: ASIN(1.0); Formula Ptg: 1.0 ASIN ; Ptgs: A2 ASIN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4ebd8d2'},
{id: '69a241dd-5d2d-4ef6-9aa6-414960137d02', label: 'A2\n1.0', color: '#31b0d5', title: 'Name: A2<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 69a241dd-5d2d-4ef6-9aa6-414960137d02<br>Formula Expression: Formula String: A2; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4ebd8d2'},
{id: '5682d017-774d-4345-bae7-aab6d6ac73a5', label: 'ASIN\n-0.5235987755982989', color: '#f0ad4e', title: 'Name: ASIN<br>Value: -0.5235987755982989<br>Type: FUNCTION<br>Id: 5682d017-774d-4345-bae7-aab6d6ac73a5<br>Formula Expression: Formula String: ASIN(VALUE); Formula Values: ASIN(-0.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4ebd8d2'},
{id: '44a96198-f85a-49cd-abaa-efcde628f19d', label: 'C1\n-0.5235987755982989', color: '#31b0d5', title: 'Name: C1<br>Value: -0.5235987755982989<br>Type: CELL_WITH_FORMULA<br>Id: 44a96198-f85a-49cd-abaa-efcde628f19d<br>Formula Expression: Formula String: ASIN(VALUE); Formula Values: ASIN(-0.5); Formula Ptg: -0.5 ASIN ; Ptgs: VALUE ASIN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4ebd8d2'},
{id: '41d28a80-5b80-4c98-99a1-fc183b0e61e8', label: 'VALUE\n-0.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: -0.5<br>Type: CONSTANT_VALUE<br>Id: 41d28a80-5b80-4c98-99a1-fc183b0e61e8<br>Formula Expression: Formula String: VALUE; Formula Values: -0.5; Formula Ptg: -0.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4ebd8d2'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '41d28a80-5b80-4c98-99a1-fc183b0e61e8', to: '5682d017-774d-4345-bae7-aab6d6ac73a5'},
{from: '69a241dd-5d2d-4ef6-9aa6-414960137d02', to: '0aca53b8-e9d1-4462-b14b-192160e839bb'},
{from: '0aca53b8-e9d1-4462-b14b-192160e839bb', to: 'e2aa4bf8-6fa9-492f-a38e-d0fc986939ef'},
{from: '5682d017-774d-4345-bae7-aab6d6ac73a5', to: '44a96198-f85a-49cd-abaa-efcde628f19d'}
                            ]);