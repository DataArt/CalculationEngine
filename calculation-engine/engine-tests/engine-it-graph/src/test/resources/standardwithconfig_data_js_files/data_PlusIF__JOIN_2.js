var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '11e46360-9d5f-4766-aaee-ffb4187af304', label: 'IF\n6.0', color: '#f0ad4e', title: 'Name: IF<br>Value: 6.0<br>Type: IF<br>Id: 11e46360-9d5f-4766-aaee-ffb4187af304<br>Formula Expression: Formula String: IF(A3>A4,B3,B4); Formula Values: IF(3.0 > 5.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@123307c4'},
{id: '9e4234a7-5bef-44c6-be4c-9af204c07121', label: '>\nFALSE', color: '#f0ad4e', title: 'Name: ><br>Value: FALSE<br>Type: OPERATOR<br>Id: 9e4234a7-5bef-44c6-be4c-9af204c07121<br>Formula Expression: Formula String: A3 > A4; Formula Values: 3.0 > 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@123307c4'},
{id: '63d8b6fc-07fb-4298-b4c1-003046659245', label: 'B4\n6.0', color: '#31b0d5', title: 'Name: B4<br>Value: 6.0<br>Type: CELL_WITH_VALUE<br>Id: 63d8b6fc-07fb-4298-b4c1-003046659245<br>Formula Expression: Formula String: B4; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: B4 Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@123307c4'},
{id: '1ae2fde8-1f9b-4914-9683-a34d746b24d1', label: 'A4\n5.0', color: '#31b0d5', title: 'Name: A4<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 1ae2fde8-1f9b-4914-9683-a34d746b24d1<br>Formula Expression: Formula String: A4; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A4 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@123307c4'},
{id: '82faf7fa-79b2-4643-9f07-419afdc66af8', label: '+\n6.0', color: '#f0ad4e', title: 'Name: +<br>Value: 6.0<br>Type: OPERATOR<br>Id: 82faf7fa-79b2-4643-9f07-419afdc66af8<br>Formula Expression: Formula String:  + IF(A3>A4,B3,B4); Formula Values:  + IF(3.0 > 5.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 9 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@123307c4'},
{id: '9b530a44-b78d-401f-8c45-9f96ab78b3bd', label: 'A1\n6.0', color: '#31b0d5', title: 'Name: A1<br>Value: 6.0<br>Type: CELL_WITH_FORMULA<br>Id: 9b530a44-b78d-401f-8c45-9f96ab78b3bd<br>Formula Expression: Formula String:  + IF(A3>A4,B3,B4); Formula Values:  + IF(3.0 > 5.0, 6.0); Formula Ptg:  6.0, 3.0 5.0 > IF  +; Ptgs:  B4, A3 A4 > IF  + Index in Ptgs: 9 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@123307c4'},
{id: '696c5ed2-5ce6-4c9c-ae94-03258cc6f059', label: 'A3\n3.0', color: '#31b0d5', title: 'Name: A3<br>Value: 3.0<br>Type: CELL_WITH_VALUE<br>Id: 696c5ed2-5ce6-4c9c-ae94-03258cc6f059<br>Formula Expression: Formula String: A3; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: A3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@123307c4'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '696c5ed2-5ce6-4c9c-ae94-03258cc6f059', to: '9e4234a7-5bef-44c6-be4c-9af204c07121'},
{from: '1ae2fde8-1f9b-4914-9683-a34d746b24d1', to: '9e4234a7-5bef-44c6-be4c-9af204c07121'},
{from: '9e4234a7-5bef-44c6-be4c-9af204c07121', to: '11e46360-9d5f-4766-aaee-ffb4187af304'},
{from: '63d8b6fc-07fb-4298-b4c1-003046659245', to: '11e46360-9d5f-4766-aaee-ffb4187af304'},
{from: '11e46360-9d5f-4766-aaee-ffb4187af304', to: '82faf7fa-79b2-4643-9f07-419afdc66af8'},
{from: '82faf7fa-79b2-4643-9f07-419afdc66af8', to: '9b530a44-b78d-401f-8c45-9f96ab78b3bd'}
                            ]);