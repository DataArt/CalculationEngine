var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '12f6119d-acef-4068-a836-11a698ebc89b', label: 'C1\n3.0', color: '#31b0d5', title: 'Name: C1<br>Value: 3.0<br>Type: CELL_WITH_VALUE<br>Id: 12f6119d-acef-4068-a836-11a698ebc89b<br>Formula Expression: Formula String: C1; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: C1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3fc064cb'},
{id: 'af44f515-e78e-49d3-939e-8f82a7eb109e', label: 'E1\n5.0', color: '#31b0d5', title: 'Name: E1<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: af44f515-e78e-49d3-939e-8f82a7eb109e<br>Formula Expression: Formula String: E1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: E1 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3fc064cb'},
{id: '3f4ab437-66c7-48a1-88c0-a5809cc50983', label: '+\n7.0', color: '#f0ad4e', title: 'Name: +<br>Value: 7.0<br>Type: OPERATOR<br>Id: 3f4ab437-66c7-48a1-88c0-a5809cc50983<br>Formula Expression: Formula String: C1 + D1; Formula Values: 3.0 + 4.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3fc064cb'},
{id: '0f01d508-8aa3-4319-b9b9-582c3444acac', label: 'F1\n', color: '#31b0d5', title: 'Name: F1<br>Value: <br>Type: EMPTY_CELL<br>Id: 0f01d508-8aa3-4319-b9b9-582c3444acac<br>Formula Expression: Formula String: F1; Formula Values: ; Formula Ptg: ; Ptgs: F1 Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3fc064cb'},
{id: 'be187d90-b60f-4189-9019-29c209773170', label: 'E5\n12.0', color: '#31b0d5', title: 'Name: E5<br>Value: 12.0<br>Type: CELL_WITH_FORMULA<br>Id: be187d90-b60f-4189-9019-29c209773170<br>Formula Expression: Formula String: C1 + D1 + E1 + F1; Formula Values: 3.0 + 4.0 + 5.0 + ; Formula Ptg: 3.0 4.0 + 5.0 +  +; Ptgs: C1 D1 + E1 + F1 + Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3fc064cb'},
{id: 'b96f4820-9333-4435-ada2-efb80fe20c5a', label: '+\n12.0', color: '#f0ad4e', title: 'Name: +<br>Value: 12.0<br>Type: OPERATOR<br>Id: b96f4820-9333-4435-ada2-efb80fe20c5a<br>Formula Expression: Formula String: C1 + D1 + E1 + F1; Formula Values: 3.0 + 4.0 + 5.0 + ; Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3fc064cb'},
{id: '56ea9f7c-f0a7-4a63-8356-f39a4613dd0e', label: 'D1\n4.0', color: '#31b0d5', title: 'Name: D1<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 56ea9f7c-f0a7-4a63-8356-f39a4613dd0e<br>Formula Expression: Formula String: D1; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3fc064cb'},
{id: '93e178b6-07f5-440e-a7b8-444ff91c4df8', label: '+\n12.0', color: '#f0ad4e', title: 'Name: +<br>Value: 12.0<br>Type: OPERATOR<br>Id: 93e178b6-07f5-440e-a7b8-444ff91c4df8<br>Formula Expression: Formula String: C1 + D1 + E1; Formula Values: 3.0 + 4.0 + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3fc064cb'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '56ea9f7c-f0a7-4a63-8356-f39a4613dd0e', to: '3f4ab437-66c7-48a1-88c0-a5809cc50983'},
{from: 'af44f515-e78e-49d3-939e-8f82a7eb109e', to: '93e178b6-07f5-440e-a7b8-444ff91c4df8'},
{from: '3f4ab437-66c7-48a1-88c0-a5809cc50983', to: '93e178b6-07f5-440e-a7b8-444ff91c4df8'},
{from: 'b96f4820-9333-4435-ada2-efb80fe20c5a', to: 'be187d90-b60f-4189-9019-29c209773170'},
{from: '12f6119d-acef-4068-a836-11a698ebc89b', to: '3f4ab437-66c7-48a1-88c0-a5809cc50983'},
{from: '93e178b6-07f5-440e-a7b8-444ff91c4df8', to: 'b96f4820-9333-4435-ada2-efb80fe20c5a'},
{from: '0f01d508-8aa3-4319-b9b9-582c3444acac', to: 'b96f4820-9333-4435-ada2-efb80fe20c5a'}
                            ]);