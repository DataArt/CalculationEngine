var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '58432ac6-4e91-4831-9bbb-3a9a1ccdc907', label: 'ISBLANK\nFALSE', color: '#f0ad4e', title: 'Name: ISBLANK<br>Value: FALSE<br>Type: FUNCTION<br>Id: 58432ac6-4e91-4831-9bbb-3a9a1ccdc907<br>Formula Expression: Formula String: ISBLANK(A6); Formula Values: ISBLANK(4.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@78830d9a'},
{id: 'debe908b-46e3-44a1-97b1-af0b9f16b676', label: 'D2\nFALSE', color: '#31b0d5', title: 'Name: D2<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: debe908b-46e3-44a1-97b1-af0b9f16b676<br>Formula Expression: Formula String: ISBLANK(A6); Formula Values: ISBLANK(4.0); Formula Ptg: 4.0 ISBLANK ; Ptgs: A6 ISBLANK  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@78830d9a'},
{id: '2a0121d8-3b96-4af0-b584-0711a19bc945', label: 'A6\n4.0', color: '#31b0d5', title: 'Name: A6<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 2a0121d8-3b96-4af0-b584-0711a19bc945<br>Formula Expression: Formula String: A6; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: A6 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@78830d9a'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '58432ac6-4e91-4831-9bbb-3a9a1ccdc907', to: 'debe908b-46e3-44a1-97b1-af0b9f16b676'},
{from: '2a0121d8-3b96-4af0-b584-0711a19bc945', to: '58432ac6-4e91-4831-9bbb-3a9a1ccdc907'}
                            ]);