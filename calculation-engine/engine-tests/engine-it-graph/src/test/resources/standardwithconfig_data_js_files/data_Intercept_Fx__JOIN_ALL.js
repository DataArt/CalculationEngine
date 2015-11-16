var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '31c2cc03-3eb9-427e-95e3-502d1a0c18e5', label: 'INTERCEPT\n0.04838709677419217', color: '#f0ad4e', title: 'Name: INTERCEPT<br>Value: 0.04838709677419217<br>Type: FUNCTION<br>Id: 31c2cc03-3eb9-427e-95e3-502d1a0c18e5<br>Formula Expression: Formula String: INTERCEPT(B2:B6, A2:A6); Formula Values: INTERCEPT(6.0, 5.0, 11.0, 7.0, 5.0, 2.0, 3.0, 9.0, 1.0, 8.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@787f32b7'},
{id: 'b7a41cf7-c52b-4a78-b013-e9e9b5d5795d', label: 'C7\n0.04838709677419217', color: '#31b0d5', title: 'Name: C7<br>Value: 0.04838709677419217<br>Type: CELL_WITH_FORMULA<br>Id: b7a41cf7-c52b-4a78-b013-e9e9b5d5795d<br>Formula Expression: Formula String: INTERCEPT(B2:B6, A2:A6); Formula Values: INTERCEPT(6.0, 5.0, 11.0, 7.0, 5.0, 2.0, 3.0, 9.0, 1.0, 8.0); Formula Ptg: 6.0, 5.0, 11.0, 7.0, 5.0, 2.0, 3.0, 9.0, 1.0, 8.0 INTERCEPT ; Ptgs: B2:B6, A2:A6 INTERCEPT  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@787f32b7'},
{id: '6b4a56fd-8f51-4b15-9081-b9d645acce11', label: 'A2:A6\n[[2.0], [3.0], [9.0], [1.0], [8.0]]', color: '#31b0d5', title: 'Name: A2:A6<br>Value: [[2.0], [3.0], [9.0], [1.0], [8.0]]<br>Type: RANGE<br>Id: 6b4a56fd-8f51-4b15-9081-b9d645acce11<br>Formula Expression: Formula String: A2:A6; Formula Values: [[2.0], [3.0], [9.0], [1.0], [8.0]]; Formula Ptg: [[2.0], [3.0], [9.0], [1.0], [8.0]]; Ptgs: A2:A6 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@787f32b7'},
{id: 'fdd25a74-5839-45c0-9578-5bff940a3b76', label: 'B2:B6\n[[6.0], [5.0], [11.0], [7.0], [5.0]]', color: '#31b0d5', title: 'Name: B2:B6<br>Value: [[6.0], [5.0], [11.0], [7.0], [5.0]]<br>Type: RANGE<br>Id: fdd25a74-5839-45c0-9578-5bff940a3b76<br>Formula Expression: Formula String: B2:B6; Formula Values: [[6.0], [5.0], [11.0], [7.0], [5.0]]; Formula Ptg: [[6.0], [5.0], [11.0], [7.0], [5.0]]; Ptgs: B2:B6 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@787f32b7'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '6b4a56fd-8f51-4b15-9081-b9d645acce11', to: '31c2cc03-3eb9-427e-95e3-502d1a0c18e5'},
{from: '31c2cc03-3eb9-427e-95e3-502d1a0c18e5', to: 'b7a41cf7-c52b-4a78-b013-e9e9b5d5795d'},
{from: 'fdd25a74-5839-45c0-9578-5bff940a3b76', to: '31c2cc03-3eb9-427e-95e3-502d1a0c18e5'}
                            ]);