var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '8233ec5c-f542-434c-8ed9-677623e28fa7', label: 'ACOS\n1.359221367036801', color: '#f0ad4e', title: 'Name: ACOS<br>Value: 1.359221367036801<br>Type: FUNCTION<br>Id: 8233ec5c-f542-434c-8ed9-677623e28fa7<br>Formula Expression: Formula String: ACOS(C2); Formula Values: ACOS(0.21); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@243c4f91'},
{id: 'c86fc44b-891c-4838-9215-d2beb91832c0', label: 'E5\n1.359221367036801', color: '#31b0d5', title: 'Name: E5<br>Value: 1.359221367036801<br>Type: CELL_WITH_FORMULA<br>Id: c86fc44b-891c-4838-9215-d2beb91832c0<br>Formula Expression: Formula String: ACOS(C2); Formula Values: ACOS(0.21); Formula Ptg: 0.21 ACOS ; Ptgs: C2 ACOS  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@243c4f91'},
{id: '06d84121-6418-4700-b3ec-7d0a60d6899e', label: 'C2\n0.21', color: '#31b0d5', title: 'Name: C2<br>Value: 0.21<br>Type: CELL_WITH_VALUE<br>Id: 06d84121-6418-4700-b3ec-7d0a60d6899e<br>Formula Expression: Formula String: C2; Formula Values: 0.21; Formula Ptg: 0.21; Ptgs: C2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@243c4f91'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '06d84121-6418-4700-b3ec-7d0a60d6899e', to: '8233ec5c-f542-434c-8ed9-677623e28fa7'},
{from: '8233ec5c-f542-434c-8ed9-677623e28fa7', to: 'c86fc44b-891c-4838-9215-d2beb91832c0'}
                            ]);