var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '2471d4da-e37b-46d4-9e03-3cf6f82d5cbd', label: 'A3\n3.0', color: '#31b0d5', title: 'Name: A3<br>Value: 3.0<br>Type: CELL_WITH_VALUE<br>Id: 2471d4da-e37b-46d4-9e03-3cf6f82d5cbd<br>Formula Expression: Formula String: A3; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: A3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4d4d8fcf'},
{id: '86fb24ff-0dcc-4083-9145-4c7e175aee95', label: 'IF\n6.0', color: '#f0ad4e', title: 'Name: IF<br>Value: 6.0<br>Type: IF<br>Id: 86fb24ff-0dcc-4083-9145-4c7e175aee95<br>Formula Expression: Formula String: IF(A3>A4,B3,B4); Formula Values: IF(3.0 > 5.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4d4d8fcf'},
{id: '7b9b74f8-b23d-4fb6-95e9-4e5c5845f376', label: 'B4\n6.0', color: '#31b0d5', title: 'Name: B4<br>Value: 6.0<br>Type: CELL_WITH_VALUE<br>Id: 7b9b74f8-b23d-4fb6-95e9-4e5c5845f376<br>Formula Expression: Formula String: B4; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: B4 Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4d4d8fcf'},
{id: 'ef32d556-59e9-4aed-8b1a-f8ebea4a83e9', label: 'A1\n6.0', color: '#31b0d5', title: 'Name: A1<br>Value: 6.0<br>Type: CELL_WITH_FORMULA<br>Id: ef32d556-59e9-4aed-8b1a-f8ebea4a83e9<br>Formula Expression: Formula String:  + IF(A3>A4,B3,B4); Formula Values:  + IF(3.0 > 5.0, 6.0); Formula Ptg:  6.0, 3.0 5.0 > IF  +; Ptgs:  B4, A3 A4 > IF  + Index in Ptgs: 9 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4d4d8fcf'},
{id: '7555639f-936f-4a34-9ed0-60cd1ae79ee4', label: 'A4\n5.0', color: '#31b0d5', title: 'Name: A4<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 7555639f-936f-4a34-9ed0-60cd1ae79ee4<br>Formula Expression: Formula String: A4; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A4 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4d4d8fcf'},
{id: 'b25a2f9a-cb52-4568-8a5a-ca3442f8fdbb', label: '>\nFALSE', color: '#f0ad4e', title: 'Name: ><br>Value: FALSE<br>Type: OPERATOR<br>Id: b25a2f9a-cb52-4568-8a5a-ca3442f8fdbb<br>Formula Expression: Formula String: A3 > A4; Formula Values: 3.0 > 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4d4d8fcf'},
{id: '5af6c0f4-ffa9-4674-84f3-a6c938dd19b4', label: '+\n6.0', color: '#f0ad4e', title: 'Name: +<br>Value: 6.0<br>Type: OPERATOR<br>Id: 5af6c0f4-ffa9-4674-84f3-a6c938dd19b4<br>Formula Expression: Formula String:  + IF(A3>A4,B3,B4); Formula Values:  + IF(3.0 > 5.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 9 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4d4d8fcf'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '7b9b74f8-b23d-4fb6-95e9-4e5c5845f376', to: '86fb24ff-0dcc-4083-9145-4c7e175aee95'},
{from: '2471d4da-e37b-46d4-9e03-3cf6f82d5cbd', to: 'b25a2f9a-cb52-4568-8a5a-ca3442f8fdbb'},
{from: '5af6c0f4-ffa9-4674-84f3-a6c938dd19b4', to: 'ef32d556-59e9-4aed-8b1a-f8ebea4a83e9'},
{from: 'b25a2f9a-cb52-4568-8a5a-ca3442f8fdbb', to: '86fb24ff-0dcc-4083-9145-4c7e175aee95'},
{from: '86fb24ff-0dcc-4083-9145-4c7e175aee95', to: '5af6c0f4-ffa9-4674-84f3-a6c938dd19b4'},
{from: '7555639f-936f-4a34-9ed0-60cd1ae79ee4', to: 'b25a2f9a-cb52-4568-8a5a-ca3442f8fdbb'}
                            ]);