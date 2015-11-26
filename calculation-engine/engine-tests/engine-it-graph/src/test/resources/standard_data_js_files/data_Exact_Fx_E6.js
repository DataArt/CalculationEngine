var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '5a0cdd2f-5345-4e95-b777-98d19d5a0e51', label: 'EXACT\nTRUE', color: '#f0ad4e', title: 'Name: EXACT<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 5a0cdd2f-5345-4e95-b777-98d19d5a0e51<br>Formula Expression: Formula String: EXACT(C3, C2); Formula Values: EXACT(76.0, 76.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4e558728'},
{id: '4e83209d-a82b-4190-8d7e-4f813e5fadb9', label: 'E6\nTRUE', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 4e83209d-a82b-4190-8d7e-4f813e5fadb9<br>Formula Expression: Formula String: EXACT(C3, C2); Formula Values: EXACT(76.0, 76.0); Formula Ptg: 76.0, 76.0 EXACT ; Ptgs: C3, C2 EXACT  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4e558728'},
{id: 'df391992-e02c-46d7-9989-c81927aba72a', label: 'C3\n76.0', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 76.0<br>Type: CELL_WITH_VALUE<br>Id: df391992-e02c-46d7-9989-c81927aba72a<br>Formula Expression: Formula String: C3; Formula Values: 76.0; Formula Ptg: 76.0; Ptgs: C3 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4e558728'},
{id: '17b36acc-390b-4ff8-b016-275ed0d0ccc3', label: 'C2\n76.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 76.0<br>Type: CELL_WITH_VALUE<br>Id: 17b36acc-390b-4ff8-b016-275ed0d0ccc3<br>Formula Expression: Formula String: C2; Formula Values: 76.0; Formula Ptg: 76.0; Ptgs: C2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4e558728'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '17b36acc-390b-4ff8-b016-275ed0d0ccc3', to: '5a0cdd2f-5345-4e95-b777-98d19d5a0e51'},
{from: '5a0cdd2f-5345-4e95-b777-98d19d5a0e51', to: '4e83209d-a82b-4190-8d7e-4f813e5fadb9'},
{from: 'df391992-e02c-46d7-9989-c81927aba72a', to: '5a0cdd2f-5345-4e95-b777-98d19d5a0e51'}
                            ]);