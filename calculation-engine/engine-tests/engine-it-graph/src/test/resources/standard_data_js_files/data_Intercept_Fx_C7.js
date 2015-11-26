var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '27d3d36b-4ab9-4069-b4a4-b4074196408a', label: 'B2:B6\n[[6.0], [5.0], [11.0], [7.0], [5.0]]', color: '#31b0d5', title: 'Name: B2:B6<br>Alias: null<br>Value: [[6.0], [5.0], [11.0], [7.0], [5.0]]<br>Type: RANGE<br>Id: 27d3d36b-4ab9-4069-b4a4-b4074196408a<br>Formula Expression: Formula String: B2:B6; Formula Values: [[6.0], [5.0], [11.0], [7.0], [5.0]]; Formula Ptg: [[6.0], [5.0], [11.0], [7.0], [5.0]]; Ptgs: B2:B6 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@17271176'},
{id: '715ab3de-2304-4681-bd13-232f745d2395', label: 'C7\n0.04838709677419217', color: '#31b0d5', title: 'Name: C7<br>Alias: null<br>Value: 0.04838709677419217<br>Type: CELL_WITH_FORMULA<br>Id: 715ab3de-2304-4681-bd13-232f745d2395<br>Formula Expression: Formula String: INTERCEPT(B2:B6, A2:A6); Formula Values: INTERCEPT(6.0, 5.0, 11.0, 7.0, 5.0, 2.0, 3.0, 9.0, 1.0, 8.0); Formula Ptg: 6.0, 5.0, 11.0, 7.0, 5.0, 2.0, 3.0, 9.0, 1.0, 8.0 INTERCEPT ; Ptgs: B2:B6, A2:A6 INTERCEPT  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@17271176'},
{id: '4cf18586-e63f-4d8c-b42a-aa6aa9b437ea', label: 'INTERCEPT\n0.04838709677419217', color: '#f0ad4e', title: 'Name: INTERCEPT<br>Alias: null<br>Value: 0.04838709677419217<br>Type: FUNCTION<br>Id: 4cf18586-e63f-4d8c-b42a-aa6aa9b437ea<br>Formula Expression: Formula String: INTERCEPT(B2:B6, A2:A6); Formula Values: INTERCEPT(6.0, 5.0, 11.0, 7.0, 5.0, 2.0, 3.0, 9.0, 1.0, 8.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@17271176'},
{id: '3a4103ac-082a-4010-953a-9bd3079d3043', label: 'A2:A6\n[[2.0], [3.0], [9.0], [1.0], [8.0]]', color: '#31b0d5', title: 'Name: A2:A6<br>Alias: null<br>Value: [[2.0], [3.0], [9.0], [1.0], [8.0]]<br>Type: RANGE<br>Id: 3a4103ac-082a-4010-953a-9bd3079d3043<br>Formula Expression: Formula String: A2:A6; Formula Values: [[2.0], [3.0], [9.0], [1.0], [8.0]]; Formula Ptg: [[2.0], [3.0], [9.0], [1.0], [8.0]]; Ptgs: A2:A6 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@17271176'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4cf18586-e63f-4d8c-b42a-aa6aa9b437ea', to: '715ab3de-2304-4681-bd13-232f745d2395'},
{from: '27d3d36b-4ab9-4069-b4a4-b4074196408a', to: '4cf18586-e63f-4d8c-b42a-aa6aa9b437ea'},
{from: '3a4103ac-082a-4010-953a-9bd3079d3043', to: '4cf18586-e63f-4d8c-b42a-aa6aa9b437ea'}
                            ]);