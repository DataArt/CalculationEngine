var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '29b82427-3bb9-4897-bf93-a8ea3328bcd5', label: 'C5\n67.0', color: '#31b0d5', title: 'Name: C5<br>Value: 67.0<br>Type: CELL_WITH_VALUE<br>Id: 29b82427-3bb9-4897-bf93-a8ea3328bcd5<br>Formula Expression: Formula String: C5; Formula Values: 67.0; Formula Ptg: 67.0; Ptgs: C5 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1cd201a8'},
{id: 'c0970b28-3f91-49a2-9953-7b767060b085', label: 'E6\n#DIV/0!', color: '#31b0d5', title: 'Name: E6<br>Value: #DIV/0!<br>Type: CELL_WITH_FORMULA<br>Id: c0970b28-3f91-49a2-9953-7b767060b085<br>Formula Expression: Formula String: C5 / C4; Formula Values: 67.0 / 0.0; Formula Ptg: 67.0 0.0 /; Ptgs: C5 C4 / Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1cd201a8'},
{id: '5e5a68c4-dee7-4843-adb8-9a33a60b74ca', label: 'C4\n0.0', color: '#31b0d5', title: 'Name: C4<br>Value: 0.0<br>Type: CELL_WITH_VALUE<br>Id: 5e5a68c4-dee7-4843-adb8-9a33a60b74ca<br>Formula Expression: Formula String: C4; Formula Values: 0.0; Formula Ptg: 0.0; Ptgs: C4 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1cd201a8'},
{id: 'b6b8d038-3443-4584-855d-08c438c995a3', label: '/\n#DIV/0!', color: '#f0ad4e', title: 'Name: /<br>Value: #DIV/0!<br>Type: OPERATOR<br>Id: b6b8d038-3443-4584-855d-08c438c995a3<br>Formula Expression: Formula String: C5 / C4; Formula Values: 67.0 / 0.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1cd201a8'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '5e5a68c4-dee7-4843-adb8-9a33a60b74ca', to: 'b6b8d038-3443-4584-855d-08c438c995a3'},
{from: 'b6b8d038-3443-4584-855d-08c438c995a3', to: 'c0970b28-3f91-49a2-9953-7b767060b085'},
{from: '29b82427-3bb9-4897-bf93-a8ea3328bcd5', to: 'b6b8d038-3443-4584-855d-08c438c995a3'}
                            ]);