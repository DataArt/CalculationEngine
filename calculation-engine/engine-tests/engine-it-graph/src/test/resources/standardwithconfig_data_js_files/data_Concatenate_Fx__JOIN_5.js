var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '65df9a51-6fa3-476b-8102-859e742b853c', label: 'C1\nyou ', color: '#31b0d5', title: 'Name: C1<br>Value: you <br>Type: CELL_WITH_VALUE<br>Id: 65df9a51-6fa3-476b-8102-859e742b853c<br>Formula Expression: Formula String: C1; Formula Values: you ; Formula Ptg: you ; Ptgs: C1 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35984172'},
{id: '9cddf9cf-5071-4768-ad38-c537053752a2', label: 'CONCATENATE\nWhy do you think so?', color: '#f0ad4e', title: 'Name: CONCATENATE<br>Value: Why do you think so?<br>Type: FUNCTION<br>Id: 9cddf9cf-5071-4768-ad38-c537053752a2<br>Formula Expression: Formula String: CONCATENATE(C3, C2, B2, C1, B1, A1); Formula Values: CONCATENATE(?, so, think , you , do , Why ); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35984172'},
{id: '955361ed-360d-4519-9ef5-2bdd4ca889d4', label: 'C2\nso', color: '#31b0d5', title: 'Name: C2<br>Value: so<br>Type: CELL_WITH_VALUE<br>Id: 955361ed-360d-4519-9ef5-2bdd4ca889d4<br>Formula Expression: Formula String: C2; Formula Values: so; Formula Ptg: so; Ptgs: C2 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35984172'},
{id: '36a46fe3-eed1-4d2a-9a5b-2d3a0ea4e265', label: 'B2\nthink ', color: '#31b0d5', title: 'Name: B2<br>Value: think <br>Type: CELL_WITH_VALUE<br>Id: 36a46fe3-eed1-4d2a-9a5b-2d3a0ea4e265<br>Formula Expression: Formula String: B2; Formula Values: think ; Formula Ptg: think ; Ptgs: B2 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35984172'},
{id: '6a9acce3-dc7d-4c8d-8fe0-f1733897b4bd', label: 'D5\nWhy do you think so?', color: '#31b0d5', title: 'Name: D5<br>Value: Why do you think so?<br>Type: CELL_WITH_FORMULA<br>Id: 6a9acce3-dc7d-4c8d-8fe0-f1733897b4bd<br>Formula Expression: Formula String: CONCATENATE(C3, C2, B2, C1, B1, A1); Formula Values: CONCATENATE(?, so, think , you , do , Why ); Formula Ptg: ?, so, think , you , do , Why  CONCATENATE ; Ptgs: C3, C2, B2, C1, B1, A1 CONCATENATE  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35984172'},
{id: 'd8e5b71a-2905-4f98-b58a-92bedddced5d', label: 'A1\nWhy ', color: '#31b0d5', title: 'Name: A1<br>Value: Why <br>Type: CELL_WITH_VALUE<br>Id: d8e5b71a-2905-4f98-b58a-92bedddced5d<br>Formula Expression: Formula String: A1; Formula Values: Why ; Formula Ptg: Why ; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35984172'},
{id: '4d1f6dd9-27f9-451e-8fee-fef6f429eb36', label: 'B1\ndo ', color: '#31b0d5', title: 'Name: B1<br>Value: do <br>Type: CELL_WITH_VALUE<br>Id: 4d1f6dd9-27f9-451e-8fee-fef6f429eb36<br>Formula Expression: Formula String: B1; Formula Values: do ; Formula Ptg: do ; Ptgs: B1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35984172'},
{id: '1aa7ead6-981c-4b58-944d-4493b7feacd3', label: 'C3\n?', color: '#31b0d5', title: 'Name: C3<br>Value: ?<br>Type: CELL_WITH_VALUE<br>Id: 1aa7ead6-981c-4b58-944d-4493b7feacd3<br>Formula Expression: Formula String: C3; Formula Values: ?; Formula Ptg: ?; Ptgs: C3 Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35984172'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1aa7ead6-981c-4b58-944d-4493b7feacd3', to: '9cddf9cf-5071-4768-ad38-c537053752a2'},
{from: 'd8e5b71a-2905-4f98-b58a-92bedddced5d', to: '9cddf9cf-5071-4768-ad38-c537053752a2'},
{from: '65df9a51-6fa3-476b-8102-859e742b853c', to: '9cddf9cf-5071-4768-ad38-c537053752a2'},
{from: '955361ed-360d-4519-9ef5-2bdd4ca889d4', to: '9cddf9cf-5071-4768-ad38-c537053752a2'},
{from: '4d1f6dd9-27f9-451e-8fee-fef6f429eb36', to: '9cddf9cf-5071-4768-ad38-c537053752a2'},
{from: '9cddf9cf-5071-4768-ad38-c537053752a2', to: '6a9acce3-dc7d-4c8d-8fe0-f1733897b4bd'},
{from: '36a46fe3-eed1-4d2a-9a5b-2d3a0ea4e265', to: '9cddf9cf-5071-4768-ad38-c537053752a2'}
                            ]);