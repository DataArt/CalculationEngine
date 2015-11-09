var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'eaf53ca7-81ba-44ef-a9bf-0cbb4e3d049a', label: 'INTERCEPT\n0.04838709677419217', color: '#f0ad4e', title: 'Name: INTERCEPT<br>Value: 0.04838709677419217<br>Type: FUNCTION<br>Id: eaf53ca7-81ba-44ef-a9bf-0cbb4e3d049a<br>Formula Expression: Formula String: INTERCEPT(B2:B6, A2:A6); Formula Values: INTERCEPT(6.0, 5.0, 11.0, 7.0, 5.0, 2.0, 3.0, 9.0, 1.0, 8.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5c76fce4'},
{id: '5f1ab528-ddb9-4b05-a88e-8b42b45607cb', label: 'B2:B6\n[[6.0], [5.0], [11.0], [7.0], [5.0]]', color: '#31b0d5', title: 'Name: B2:B6<br>Value: [[6.0], [5.0], [11.0], [7.0], [5.0]]<br>Type: RANGE<br>Id: 5f1ab528-ddb9-4b05-a88e-8b42b45607cb<br>Formula Expression: Formula String: B2:B6; Formula Values: [[6.0], [5.0], [11.0], [7.0], [5.0]]; Formula Ptg: [[6.0], [5.0], [11.0], [7.0], [5.0]]; Ptgs: B2:B6 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5c76fce4'},
{id: '5d7cbdcb-a9b9-4990-97aa-a004b589f1a1', label: 'C7\n0.04838709677419217', color: '#31b0d5', title: 'Name: C7<br>Value: 0.04838709677419217<br>Type: CELL_WITH_FORMULA<br>Id: 5d7cbdcb-a9b9-4990-97aa-a004b589f1a1<br>Formula Expression: Formula String: INTERCEPT(B2:B6, A2:A6); Formula Values: INTERCEPT(6.0, 5.0, 11.0, 7.0, 5.0, 2.0, 3.0, 9.0, 1.0, 8.0); Formula Ptg: 6.0, 5.0, 11.0, 7.0, 5.0, 2.0, 3.0, 9.0, 1.0, 8.0 INTERCEPT ; Ptgs: B2:B6, A2:A6 INTERCEPT  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5c76fce4'},
{id: '765a72ca-276b-49f4-bbb7-85b1f70f6223', label: 'A2:A6\n[[2.0], [3.0], [9.0], [1.0], [8.0]]', color: '#31b0d5', title: 'Name: A2:A6<br>Value: [[2.0], [3.0], [9.0], [1.0], [8.0]]<br>Type: RANGE<br>Id: 765a72ca-276b-49f4-bbb7-85b1f70f6223<br>Formula Expression: Formula String: A2:A6; Formula Values: [[2.0], [3.0], [9.0], [1.0], [8.0]]; Formula Ptg: [[2.0], [3.0], [9.0], [1.0], [8.0]]; Ptgs: A2:A6 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5c76fce4'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'eaf53ca7-81ba-44ef-a9bf-0cbb4e3d049a', to: '5d7cbdcb-a9b9-4990-97aa-a004b589f1a1'},
{from: '5f1ab528-ddb9-4b05-a88e-8b42b45607cb', to: 'eaf53ca7-81ba-44ef-a9bf-0cbb4e3d049a'},
{from: '765a72ca-276b-49f4-bbb7-85b1f70f6223', to: 'eaf53ca7-81ba-44ef-a9bf-0cbb4e3d049a'}
                            ]);