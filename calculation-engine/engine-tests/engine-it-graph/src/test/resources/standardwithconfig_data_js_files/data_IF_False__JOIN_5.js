var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '94442667-80e4-4cbd-84d5-f7467c3060be', label: 'IF\n8.0', color: '#f0ad4e', title: 'Name: IF<br>Value: 8.0<br>Type: IF<br>Id: 94442667-80e4-4cbd-84d5-f7467c3060be<br>Formula Expression: Formula String: IF(D1>5,D2,C3); Formula Values: IF(4.0 > 5.0, 8.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@44f4c619'},
{id: '8981e5fc-4e6b-4d02-b6fa-658ee4511faf', label: 'D1\n4.0', color: '#31b0d5', title: 'Name: D1<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 8981e5fc-4e6b-4d02-b6fa-658ee4511faf<br>Formula Expression: Formula String: D1; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@44f4c619'},
{id: '634ad069-e0b3-445b-bc7f-d71495f55a66', label: 'VALUE\n5.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 5.0<br>Type: CONSTANT_VALUE<br>Id: 634ad069-e0b3-445b-bc7f-d71495f55a66<br>Formula Expression: Formula String: VALUE; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@44f4c619'},
{id: '3b51036c-ca45-496a-aef1-035d164b8847', label: 'C3\n8.0', color: '#31b0d5', title: 'Name: C3<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 3b51036c-ca45-496a-aef1-035d164b8847<br>Formula Expression: Formula String: C3; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: C3 Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@44f4c619'},
{id: 'a2e45a34-4d26-4794-9229-7d155fe3e15b', label: 'E6\n8.0', color: '#31b0d5', title: 'Name: E6<br>Value: 8.0<br>Type: CELL_WITH_FORMULA<br>Id: a2e45a34-4d26-4794-9229-7d155fe3e15b<br>Formula Expression: Formula String: IF(D1>5,D2,C3); Formula Values: IF(4.0 > 5.0, 8.0); Formula Ptg: 8.0, 4.0 5.0 > IF ; Ptgs: C3, D1 VALUE > IF  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@44f4c619'},
{id: 'fac7ac55-85b1-4164-8504-f16b572313bd', label: '>\nFALSE', color: '#f0ad4e', title: 'Name: ><br>Value: FALSE<br>Type: OPERATOR<br>Id: fac7ac55-85b1-4164-8504-f16b572313bd<br>Formula Expression: Formula String: D1 > VALUE; Formula Values: 4.0 > 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@44f4c619'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'fac7ac55-85b1-4164-8504-f16b572313bd', to: '94442667-80e4-4cbd-84d5-f7467c3060be'},
{from: '94442667-80e4-4cbd-84d5-f7467c3060be', to: 'a2e45a34-4d26-4794-9229-7d155fe3e15b'},
{from: '8981e5fc-4e6b-4d02-b6fa-658ee4511faf', to: 'fac7ac55-85b1-4164-8504-f16b572313bd'},
{from: '3b51036c-ca45-496a-aef1-035d164b8847', to: '94442667-80e4-4cbd-84d5-f7467c3060be'},
{from: '634ad069-e0b3-445b-bc7f-d71495f55a66', to: 'fac7ac55-85b1-4164-8504-f16b572313bd'}
                            ]);