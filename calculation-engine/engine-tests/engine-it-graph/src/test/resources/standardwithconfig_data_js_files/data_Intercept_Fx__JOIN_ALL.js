var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '781af895-4a47-450e-8cc3-c4fa3eaf2e8e', label: 'INTERCEPT\n0.04838709677419217', color: '#f0ad4e', title: 'Name: INTERCEPT<br>Value: 0.04838709677419217<br>Type: FUNCTION<br>Id: 781af895-4a47-450e-8cc3-c4fa3eaf2e8e<br>Formula Expression: Formula String: INTERCEPT(B2:B6, A2:A6); Formula Values: INTERCEPT(6.0, 5.0, 11.0, 7.0, 5.0, 2.0, 3.0, 9.0, 1.0, 8.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@787f32b7'},
{id: '52f17842-cb2e-4dee-b622-01466ec3f7fe', label: 'C7\n0.04838709677419217', color: '#31b0d5', title: 'Name: C7<br>Value: 0.04838709677419217<br>Type: CELL_WITH_FORMULA<br>Id: 52f17842-cb2e-4dee-b622-01466ec3f7fe<br>Formula Expression: Formula String: INTERCEPT(B2:B6, A2:A6); Formula Values: INTERCEPT(6.0, 5.0, 11.0, 7.0, 5.0, 2.0, 3.0, 9.0, 1.0, 8.0); Formula Ptg: 6.0, 5.0, 11.0, 7.0, 5.0, 2.0, 3.0, 9.0, 1.0, 8.0 INTERCEPT ; Ptgs: B2:B6, A2:A6 INTERCEPT  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@787f32b7'},
{id: 'f2448124-d6d0-47b6-90c4-023fc617fbbf', label: 'A2:A6\n[[2.0], [3.0], [9.0], [1.0], [8.0]]', color: '#31b0d5', title: 'Name: A2:A6<br>Value: [[2.0], [3.0], [9.0], [1.0], [8.0]]<br>Type: RANGE<br>Id: f2448124-d6d0-47b6-90c4-023fc617fbbf<br>Formula Expression: Formula String: A2:A6; Formula Values: [[2.0], [3.0], [9.0], [1.0], [8.0]]; Formula Ptg: [[2.0], [3.0], [9.0], [1.0], [8.0]]; Ptgs: A2:A6 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@787f32b7'},
{id: '4b26c7ba-1b2f-46c4-a2dd-6296252cdc90', label: 'B2:B6\n[[6.0], [5.0], [11.0], [7.0], [5.0]]', color: '#31b0d5', title: 'Name: B2:B6<br>Value: [[6.0], [5.0], [11.0], [7.0], [5.0]]<br>Type: RANGE<br>Id: 4b26c7ba-1b2f-46c4-a2dd-6296252cdc90<br>Formula Expression: Formula String: B2:B6; Formula Values: [[6.0], [5.0], [11.0], [7.0], [5.0]]; Formula Ptg: [[6.0], [5.0], [11.0], [7.0], [5.0]]; Ptgs: B2:B6 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@787f32b7'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'f2448124-d6d0-47b6-90c4-023fc617fbbf', to: '781af895-4a47-450e-8cc3-c4fa3eaf2e8e'},
{from: '781af895-4a47-450e-8cc3-c4fa3eaf2e8e', to: '52f17842-cb2e-4dee-b622-01466ec3f7fe'},
{from: '4b26c7ba-1b2f-46c4-a2dd-6296252cdc90', to: '781af895-4a47-450e-8cc3-c4fa3eaf2e8e'}
                            ]);