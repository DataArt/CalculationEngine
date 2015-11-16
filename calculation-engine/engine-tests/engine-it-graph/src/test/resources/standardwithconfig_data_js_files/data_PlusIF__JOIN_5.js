var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '93419528-194e-49c3-b437-0eb2c80a25c3', label: 'B4\n6.0', color: '#31b0d5', title: 'Name: B4<br>Value: 6.0<br>Type: CELL_WITH_VALUE<br>Id: 93419528-194e-49c3-b437-0eb2c80a25c3<br>Formula Expression: Formula String: B4; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: B4 Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5e0e97b6'},
{id: 'f71a9546-7549-49da-9f8a-40d2f729d1fe', label: '>\nFALSE', color: '#f0ad4e', title: 'Name: ><br>Value: FALSE<br>Type: OPERATOR<br>Id: f71a9546-7549-49da-9f8a-40d2f729d1fe<br>Formula Expression: Formula String: A3 > A4; Formula Values: 3.0 > 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5e0e97b6'},
{id: 'd95c3990-b76a-42e9-bcec-4873e6e545dc', label: 'A3\n3.0', color: '#31b0d5', title: 'Name: A3<br>Value: 3.0<br>Type: CELL_WITH_VALUE<br>Id: d95c3990-b76a-42e9-bcec-4873e6e545dc<br>Formula Expression: Formula String: A3; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: A3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5e0e97b6'},
{id: '8a215e0f-4ea2-473a-9e12-29d96d60117d', label: 'A1\n6.0', color: '#31b0d5', title: 'Name: A1<br>Value: 6.0<br>Type: CELL_WITH_FORMULA<br>Id: 8a215e0f-4ea2-473a-9e12-29d96d60117d<br>Formula Expression: Formula String:  + IF(A3>A4,B3,B4); Formula Values:  + IF(3.0 > 5.0, 6.0); Formula Ptg:  6.0, 3.0 5.0 > IF  +; Ptgs:  B4, A3 A4 > IF  + Index in Ptgs: 9 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5e0e97b6'},
{id: 'f1224f8e-568a-4d81-b842-ccad04484139', label: 'A4\n5.0', color: '#31b0d5', title: 'Name: A4<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: f1224f8e-568a-4d81-b842-ccad04484139<br>Formula Expression: Formula String: A4; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A4 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5e0e97b6'},
{id: 'a1afe203-56df-48d1-9457-27e42a74c1b3', label: 'IF\n6.0', color: '#f0ad4e', title: 'Name: IF<br>Value: 6.0<br>Type: IF<br>Id: a1afe203-56df-48d1-9457-27e42a74c1b3<br>Formula Expression: Formula String: IF(A3>A4,B3,B4); Formula Values: IF(3.0 > 5.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5e0e97b6'},
{id: '18abf9b7-96cd-4626-9d20-ca01f238234d', label: '+\n6.0', color: '#f0ad4e', title: 'Name: +<br>Value: 6.0<br>Type: OPERATOR<br>Id: 18abf9b7-96cd-4626-9d20-ca01f238234d<br>Formula Expression: Formula String:  + IF(A3>A4,B3,B4); Formula Values:  + IF(3.0 > 5.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 9 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5e0e97b6'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'd95c3990-b76a-42e9-bcec-4873e6e545dc', to: 'f71a9546-7549-49da-9f8a-40d2f729d1fe'},
{from: 'a1afe203-56df-48d1-9457-27e42a74c1b3', to: '18abf9b7-96cd-4626-9d20-ca01f238234d'},
{from: '93419528-194e-49c3-b437-0eb2c80a25c3', to: 'a1afe203-56df-48d1-9457-27e42a74c1b3'},
{from: 'f71a9546-7549-49da-9f8a-40d2f729d1fe', to: 'a1afe203-56df-48d1-9457-27e42a74c1b3'},
{from: 'f1224f8e-568a-4d81-b842-ccad04484139', to: 'f71a9546-7549-49da-9f8a-40d2f729d1fe'},
{from: '18abf9b7-96cd-4626-9d20-ca01f238234d', to: '8a215e0f-4ea2-473a-9e12-29d96d60117d'}
                            ]);