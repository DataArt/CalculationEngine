var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'b6c19771-68e8-4132-bb19-08f63401d708', label: 'B7\n160.0', color: '#31b0d5', title: 'Name: B7<br>Value: 160.0<br>Type: CELL_WITH_FORMULA<br>Id: b6c19771-68e8-4132-bb19-08f63401d708<br>Formula Expression: Formula String: DAYS360(A4, A3); Formula Values: DAYS360(42347.0, 42184.0); Formula Ptg: 42347.0, 42184.0 DAYS360 ; Ptgs: A4, A3 DAYS360  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@66fdec9'},
{id: '30de1ea1-fb2f-4067-9c86-d9e4e0f723f0', label: 'A4\n42347.0', color: '#31b0d5', title: 'Name: A4<br>Value: 42347.0<br>Type: CELL_WITH_VALUE<br>Id: 30de1ea1-fb2f-4067-9c86-d9e4e0f723f0<br>Formula Expression: Formula String: A4; Formula Values: 42347.0; Formula Ptg: 42347.0; Ptgs: A4 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@66fdec9'},
{id: '152fefff-a521-4272-b903-a4b6f738b9b7', label: 'A3\n42184.0', color: '#31b0d5', title: 'Name: A3<br>Value: 42184.0<br>Type: CELL_WITH_VALUE<br>Id: 152fefff-a521-4272-b903-a4b6f738b9b7<br>Formula Expression: Formula String: A3; Formula Values: 42184.0; Formula Ptg: 42184.0; Ptgs: A3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@66fdec9'},
{id: '2b45da94-dd3e-49d0-8e76-94be55d04bb9', label: 'DAYS360\n160.0', color: '#f0ad4e', title: 'Name: DAYS360<br>Value: 160.0<br>Type: FUNCTION<br>Id: 2b45da94-dd3e-49d0-8e76-94be55d04bb9<br>Formula Expression: Formula String: DAYS360(A4, A3); Formula Values: DAYS360(42347.0, 42184.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@66fdec9'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '30de1ea1-fb2f-4067-9c86-d9e4e0f723f0', to: '2b45da94-dd3e-49d0-8e76-94be55d04bb9'},
{from: '152fefff-a521-4272-b903-a4b6f738b9b7', to: '2b45da94-dd3e-49d0-8e76-94be55d04bb9'},
{from: '2b45da94-dd3e-49d0-8e76-94be55d04bb9', to: 'b6c19771-68e8-4132-bb19-08f63401d708'}
                            ]);