var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'ece252d0-8e6c-4390-8838-d206804766e6', label: 'A2:A6\n[[2.0], [3.0], [9.0], [1.0], [8.0]]', color: '#31b0d5', title: 'Name: A2:A6<br>Value: [[2.0], [3.0], [9.0], [1.0], [8.0]]<br>Type: RANGE<br>Id: ece252d0-8e6c-4390-8838-d206804766e6<br>Formula Expression: Formula String: A2:A6; Formula Values: [[2.0], [3.0], [9.0], [1.0], [8.0]]; Formula Ptg: [[2.0], [3.0], [9.0], [1.0], [8.0]]; Ptgs: A2:A6 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7da324d0'},
{id: '91319922-3056-42a7-a1bc-d013e85141de', label: 'C7\n0.04838709677419217', color: '#31b0d5', title: 'Name: C7<br>Value: 0.04838709677419217<br>Type: CELL_WITH_FORMULA<br>Id: 91319922-3056-42a7-a1bc-d013e85141de<br>Formula Expression: Formula String: INTERCEPT(B2:B6, A2:A6); Formula Values: INTERCEPT(6.0, 5.0, 11.0, 7.0, 5.0, 2.0, 3.0, 9.0, 1.0, 8.0); Formula Ptg: 6.0, 5.0, 11.0, 7.0, 5.0, 2.0, 3.0, 9.0, 1.0, 8.0 INTERCEPT ; Ptgs: B2:B6, A2:A6 INTERCEPT  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7da324d0'},
{id: '9a955366-9be4-484c-9882-0e05e8c3b9f9', label: 'B2:B6\n[[6.0], [5.0], [11.0], [7.0], [5.0]]', color: '#31b0d5', title: 'Name: B2:B6<br>Value: [[6.0], [5.0], [11.0], [7.0], [5.0]]<br>Type: RANGE<br>Id: 9a955366-9be4-484c-9882-0e05e8c3b9f9<br>Formula Expression: Formula String: B2:B6; Formula Values: [[6.0], [5.0], [11.0], [7.0], [5.0]]; Formula Ptg: [[6.0], [5.0], [11.0], [7.0], [5.0]]; Ptgs: B2:B6 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7da324d0'},
{id: 'd250ef2e-f01f-4675-a782-c8700ba847e6', label: 'INTERCEPT\n0.04838709677419217', color: '#f0ad4e', title: 'Name: INTERCEPT<br>Value: 0.04838709677419217<br>Type: FUNCTION<br>Id: d250ef2e-f01f-4675-a782-c8700ba847e6<br>Formula Expression: Formula String: INTERCEPT(B2:B6, A2:A6); Formula Values: INTERCEPT(6.0, 5.0, 11.0, 7.0, 5.0, 2.0, 3.0, 9.0, 1.0, 8.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7da324d0'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'ece252d0-8e6c-4390-8838-d206804766e6', to: 'd250ef2e-f01f-4675-a782-c8700ba847e6'},
{from: '9a955366-9be4-484c-9882-0e05e8c3b9f9', to: 'd250ef2e-f01f-4675-a782-c8700ba847e6'},
{from: 'd250ef2e-f01f-4675-a782-c8700ba847e6', to: '91319922-3056-42a7-a1bc-d013e85141de'}
                            ]);