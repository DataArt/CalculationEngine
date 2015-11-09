var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'e3f40227-87e5-40c4-a7db-c3b6353b88b5', label: 'C2\n0.21', color: '#31b0d5', title: 'Name: C2<br>Value: 0.21<br>Type: CELL_WITH_VALUE<br>Id: e3f40227-87e5-40c4-a7db-c3b6353b88b5<br>Formula Expression: Formula String: C2; Formula Values: 0.21; Formula Ptg: 0.21; Ptgs: C2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5cbe72b9'},
{id: '8f29cfc9-dd2d-449b-bbc1-cdb4305ae1be', label: 'ACOS\n1.359221367036801', color: '#f0ad4e', title: 'Name: ACOS<br>Value: 1.359221367036801<br>Type: FUNCTION<br>Id: 8f29cfc9-dd2d-449b-bbc1-cdb4305ae1be<br>Formula Expression: Formula String: ACOS(C2); Formula Values: ACOS(0.21); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5cbe72b9'},
{id: '3cb1c34b-b8a6-4c2f-99a4-c0b64b1fbedb', label: 'E5\n1.359221367036801', color: '#31b0d5', title: 'Name: E5<br>Value: 1.359221367036801<br>Type: CELL_WITH_FORMULA<br>Id: 3cb1c34b-b8a6-4c2f-99a4-c0b64b1fbedb<br>Formula Expression: Formula String: ACOS(C2); Formula Values: ACOS(0.21); Formula Ptg: 0.21 ACOS ; Ptgs: C2 ACOS  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5cbe72b9'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '8f29cfc9-dd2d-449b-bbc1-cdb4305ae1be', to: '3cb1c34b-b8a6-4c2f-99a4-c0b64b1fbedb'},
{from: 'e3f40227-87e5-40c4-a7db-c3b6353b88b5', to: '8f29cfc9-dd2d-449b-bbc1-cdb4305ae1be'}
                            ]);