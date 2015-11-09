var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '344a3fda-d584-4ef3-89f6-f34972ce1f76', label: 'A2:A6\n[[2.0], [3.0], [9.0], [1.0], [8.0]]', color: '#31b0d5', title: 'Name: A2:A6<br>Value: [[2.0], [3.0], [9.0], [1.0], [8.0]]<br>Type: RANGE<br>Id: 344a3fda-d584-4ef3-89f6-f34972ce1f76<br>Formula Expression: Formula String: A2:A6; Formula Values: [[2.0], [3.0], [9.0], [1.0], [8.0]]; Formula Ptg: [[2.0], [3.0], [9.0], [1.0], [8.0]]; Ptgs: A2:A6 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@54a98439'},
{id: 'f5fc095d-07ad-44a5-a693-5b07ee15bf3e', label: 'B2:B6\n[[6.0], [5.0], [11.0], [7.0], [5.0]]', color: '#31b0d5', title: 'Name: B2:B6<br>Value: [[6.0], [5.0], [11.0], [7.0], [5.0]]<br>Type: RANGE<br>Id: f5fc095d-07ad-44a5-a693-5b07ee15bf3e<br>Formula Expression: Formula String: B2:B6; Formula Values: [[6.0], [5.0], [11.0], [7.0], [5.0]]; Formula Ptg: [[6.0], [5.0], [11.0], [7.0], [5.0]]; Ptgs: B2:B6 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@54a98439'},
{id: '846398b2-3800-447f-90fa-fc39c5a6cb61', label: 'C7\n0.04838709677419217', color: '#31b0d5', title: 'Name: C7<br>Value: 0.04838709677419217<br>Type: CELL_WITH_FORMULA<br>Id: 846398b2-3800-447f-90fa-fc39c5a6cb61<br>Formula Expression: Formula String: INTERCEPT(B2:B6, A2:A6); Formula Values: INTERCEPT(6.0, 5.0, 11.0, 7.0, 5.0, 2.0, 3.0, 9.0, 1.0, 8.0); Formula Ptg: 6.0, 5.0, 11.0, 7.0, 5.0, 2.0, 3.0, 9.0, 1.0, 8.0 INTERCEPT ; Ptgs: B2:B6, A2:A6 INTERCEPT  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@54a98439'},
{id: '5bc6d870-0ef2-44ed-992b-05928dfedfb4', label: 'INTERCEPT\n0.04838709677419217', color: '#f0ad4e', title: 'Name: INTERCEPT<br>Value: 0.04838709677419217<br>Type: FUNCTION<br>Id: 5bc6d870-0ef2-44ed-992b-05928dfedfb4<br>Formula Expression: Formula String: INTERCEPT(B2:B6, A2:A6); Formula Values: INTERCEPT(6.0, 5.0, 11.0, 7.0, 5.0, 2.0, 3.0, 9.0, 1.0, 8.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@54a98439'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '344a3fda-d584-4ef3-89f6-f34972ce1f76', to: '5bc6d870-0ef2-44ed-992b-05928dfedfb4'},
{from: '5bc6d870-0ef2-44ed-992b-05928dfedfb4', to: '846398b2-3800-447f-90fa-fc39c5a6cb61'},
{from: 'f5fc095d-07ad-44a5-a693-5b07ee15bf3e', to: '5bc6d870-0ef2-44ed-992b-05928dfedfb4'}
                            ]);