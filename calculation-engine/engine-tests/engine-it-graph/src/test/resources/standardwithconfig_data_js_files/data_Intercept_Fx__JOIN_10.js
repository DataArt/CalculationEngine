var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '2a63d34c-b71d-4eea-8c24-87206ed8b064', label: 'B2:B6\n[[6.0], [5.0], [11.0], [7.0], [5.0]]', color: '#31b0d5', title: 'Name: B2:B6<br>Value: [[6.0], [5.0], [11.0], [7.0], [5.0]]<br>Type: RANGE<br>Id: 2a63d34c-b71d-4eea-8c24-87206ed8b064<br>Formula Expression: Formula String: B2:B6; Formula Values: [[6.0], [5.0], [11.0], [7.0], [5.0]]; Formula Ptg: [[6.0], [5.0], [11.0], [7.0], [5.0]]; Ptgs: B2:B6 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@317fa5dd'},
{id: '8c948b10-bf0b-4e5e-b789-ccb88bf1235c', label: 'A2:A6\n[[2.0], [3.0], [9.0], [1.0], [8.0]]', color: '#31b0d5', title: 'Name: A2:A6<br>Value: [[2.0], [3.0], [9.0], [1.0], [8.0]]<br>Type: RANGE<br>Id: 8c948b10-bf0b-4e5e-b789-ccb88bf1235c<br>Formula Expression: Formula String: A2:A6; Formula Values: [[2.0], [3.0], [9.0], [1.0], [8.0]]; Formula Ptg: [[2.0], [3.0], [9.0], [1.0], [8.0]]; Ptgs: A2:A6 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@317fa5dd'},
{id: '611f32d0-0d74-4875-9da6-208863090c08', label: 'INTERCEPT\n0.04838709677419217', color: '#f0ad4e', title: 'Name: INTERCEPT<br>Value: 0.04838709677419217<br>Type: FUNCTION<br>Id: 611f32d0-0d74-4875-9da6-208863090c08<br>Formula Expression: Formula String: INTERCEPT(B2:B6, A2:A6); Formula Values: INTERCEPT(6.0, 5.0, 11.0, 7.0, 5.0, 2.0, 3.0, 9.0, 1.0, 8.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@317fa5dd'},
{id: '8f6ceb93-fcd3-4094-ab64-990acf527f0b', label: 'C7\n0.04838709677419217', color: '#31b0d5', title: 'Name: C7<br>Value: 0.04838709677419217<br>Type: CELL_WITH_FORMULA<br>Id: 8f6ceb93-fcd3-4094-ab64-990acf527f0b<br>Formula Expression: Formula String: INTERCEPT(B2:B6, A2:A6); Formula Values: INTERCEPT(6.0, 5.0, 11.0, 7.0, 5.0, 2.0, 3.0, 9.0, 1.0, 8.0); Formula Ptg: 6.0, 5.0, 11.0, 7.0, 5.0, 2.0, 3.0, 9.0, 1.0, 8.0 INTERCEPT ; Ptgs: B2:B6, A2:A6 INTERCEPT  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@317fa5dd'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '8c948b10-bf0b-4e5e-b789-ccb88bf1235c', to: '611f32d0-0d74-4875-9da6-208863090c08'},
{from: '2a63d34c-b71d-4eea-8c24-87206ed8b064', to: '611f32d0-0d74-4875-9da6-208863090c08'},
{from: '611f32d0-0d74-4875-9da6-208863090c08', to: '8f6ceb93-fcd3-4094-ab64-990acf527f0b'}
                            ]);