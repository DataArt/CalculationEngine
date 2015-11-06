var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'fc19ace7-c985-4119-8445-ea85e7896f28', label: 'E1\n5.0', color: '#31b0d5', title: 'Name: E1<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: fc19ace7-c985-4119-8445-ea85e7896f28<br>Formula Expression: Formula String: E1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: E1 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@55b0dcab'},
{id: 'd580699f-b0e6-44e6-9de2-c70ccf2c69f3', label: 'C6\n', color: '#31b0d5', title: 'Name: C6<br>Value: <br>Type: EMPTY_CELL<br>Id: d580699f-b0e6-44e6-9de2-c70ccf2c69f3<br>Formula Expression: Formula String: C6; Formula Values: ; Formula Ptg: ; Ptgs: C6 Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@55b0dcab'},
{id: '9fa12632-a945-486d-b595-d54b443cba79', label: 'E5\nTRUE', color: '#31b0d5', title: 'Name: E5<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 9fa12632-a945-486d-b595-d54b443cba79<br>Formula Expression: Formula String: AND(C6, B3 + D1 - E1); Formula Values: AND(, 6.0 + 0.4 - 5.0); Formula Ptg: , 6.0 0.4 + 5.0 - AND ; Ptgs: C6, B3 D1 + E1 - AND  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@55b0dcab'},
{id: '1ed870bd-824b-4b39-8490-e127825c9f19', label: 'D1\n0.4', color: '#31b0d5', title: 'Name: D1<br>Value: 0.4<br>Type: CELL_WITH_VALUE<br>Id: 1ed870bd-824b-4b39-8490-e127825c9f19<br>Formula Expression: Formula String: D1; Formula Values: 0.4; Formula Ptg: 0.4; Ptgs: D1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@55b0dcab'},
{id: '83121421-652a-43c7-a9b1-c1d4742348a9', label: '+\n6.4', color: '#f0ad4e', title: 'Name: +<br>Value: 6.4<br>Type: OPERATOR<br>Id: 83121421-652a-43c7-a9b1-c1d4742348a9<br>Formula Expression: Formula String: B3 + D1; Formula Values: 6.0 + 0.4; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@55b0dcab'},
{id: '7a105f7b-0b82-4042-be42-89e794c05550', label: '-\n1.4000000000000004', color: '#f0ad4e', title: 'Name: -<br>Value: 1.4000000000000004<br>Type: OPERATOR<br>Id: 7a105f7b-0b82-4042-be42-89e794c05550<br>Formula Expression: Formula String: B3 + D1 - E1; Formula Values: 6.0 + 0.4 - 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@55b0dcab'},
{id: '788d1923-89b7-454c-9e98-454fec040f1c', label: 'AND\nTRUE', color: '#f0ad4e', title: 'Name: AND<br>Value: TRUE<br>Type: FUNCTION<br>Id: 788d1923-89b7-454c-9e98-454fec040f1c<br>Formula Expression: Formula String: AND(C6, B3 + D1 - E1); Formula Values: AND(, 6.0 + 0.4 - 5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@55b0dcab'},
{id: '929abad4-2db3-4109-9760-1dab72cfc8d6', label: 'B3\n6.0', color: '#31b0d5', title: 'Name: B3<br>Value: 6.0<br>Type: CELL_WITH_VALUE<br>Id: 929abad4-2db3-4109-9760-1dab72cfc8d6<br>Formula Expression: Formula String: B3; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: B3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@55b0dcab'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '929abad4-2db3-4109-9760-1dab72cfc8d6', to: '83121421-652a-43c7-a9b1-c1d4742348a9'},
{from: '7a105f7b-0b82-4042-be42-89e794c05550', to: '788d1923-89b7-454c-9e98-454fec040f1c'},
{from: '1ed870bd-824b-4b39-8490-e127825c9f19', to: '83121421-652a-43c7-a9b1-c1d4742348a9'},
{from: '83121421-652a-43c7-a9b1-c1d4742348a9', to: '7a105f7b-0b82-4042-be42-89e794c05550'},
{from: 'fc19ace7-c985-4119-8445-ea85e7896f28', to: '7a105f7b-0b82-4042-be42-89e794c05550'},
{from: '788d1923-89b7-454c-9e98-454fec040f1c', to: '9fa12632-a945-486d-b595-d54b443cba79'},
{from: 'd580699f-b0e6-44e6-9de2-c70ccf2c69f3', to: '788d1923-89b7-454c-9e98-454fec040f1c'}
                            ]);