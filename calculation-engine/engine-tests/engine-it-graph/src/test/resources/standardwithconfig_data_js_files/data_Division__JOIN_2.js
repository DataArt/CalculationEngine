var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '401d5b49-cc1c-4b64-b7ab-270abdd3250e', label: 'A1\n100.0', color: '#31b0d5', title: 'Name: A1<br>Value: 100.0<br>Type: CELL_WITH_VALUE<br>Id: 401d5b49-cc1c-4b64-b7ab-270abdd3250e<br>Formula Expression: Formula String: A1; Formula Values: 100.0; Formula Ptg: 100.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@224c7de4'},
{id: '06799fee-efe1-4b87-b9c4-525fd64758ef', label: 'A2\n25.0', color: '#31b0d5', title: 'Name: A2<br>Value: 25.0<br>Type: CELL_WITH_VALUE<br>Id: 06799fee-efe1-4b87-b9c4-525fd64758ef<br>Formula Expression: Formula String: A2; Formula Values: 25.0; Formula Ptg: 25.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@224c7de4'},
{id: '7d01681e-2669-4c2d-9d19-0a423822bf72', label: '/\n4.0', color: '#f0ad4e', title: 'Name: /<br>Value: 4.0<br>Type: OPERATOR<br>Id: 7d01681e-2669-4c2d-9d19-0a423822bf72<br>Formula Expression: Formula String: A1 / A2; Formula Values: 100.0 / 25.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@224c7de4'},
{id: '20dce64f-0fea-4a20-88f2-c7f94bab2b81', label: 'B3\n4.0', color: '#31b0d5', title: 'Name: B3<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: 20dce64f-0fea-4a20-88f2-c7f94bab2b81<br>Formula Expression: Formula String: A1 / A2; Formula Values: 100.0 / 25.0; Formula Ptg: 100.0 25.0 /; Ptgs: A1 A2 / Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@224c7de4'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '06799fee-efe1-4b87-b9c4-525fd64758ef', to: '7d01681e-2669-4c2d-9d19-0a423822bf72'},
{from: '7d01681e-2669-4c2d-9d19-0a423822bf72', to: '20dce64f-0fea-4a20-88f2-c7f94bab2b81'},
{from: '401d5b49-cc1c-4b64-b7ab-270abdd3250e', to: '7d01681e-2669-4c2d-9d19-0a423822bf72'}
                            ]);