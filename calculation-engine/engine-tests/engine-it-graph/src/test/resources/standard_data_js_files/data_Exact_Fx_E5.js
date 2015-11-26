var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '948da6ec-3d6f-420e-b092-c490d1732c2c', label: 'A2\n23.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 23.0<br>Type: CELL_WITH_VALUE<br>Id: 948da6ec-3d6f-420e-b092-c490d1732c2c<br>Formula Expression: Formula String: A2; Formula Values: 23.0; Formula Ptg: 23.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4159e81b'},
{id: '285dbc31-05a2-425f-928b-d81118f20ed8', label: 'E5\nFALSE', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 285dbc31-05a2-425f-928b-d81118f20ed8<br>Formula Expression: Formula String: EXACT(B2, A2); Formula Values: EXACT(56.0, 23.0); Formula Ptg: 56.0, 23.0 EXACT ; Ptgs: B2, A2 EXACT  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4159e81b'},
{id: '5d1de03b-72bd-4eac-879f-54289fa2a5b7', label: 'EXACT\nFALSE', color: '#f0ad4e', title: 'Name: EXACT<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 5d1de03b-72bd-4eac-879f-54289fa2a5b7<br>Formula Expression: Formula String: EXACT(B2, A2); Formula Values: EXACT(56.0, 23.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4159e81b'},
{id: '8dd68767-74cc-4d03-a796-b05638bde352', label: 'B2\n56.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 56.0<br>Type: CELL_WITH_VALUE<br>Id: 8dd68767-74cc-4d03-a796-b05638bde352<br>Formula Expression: Formula String: B2; Formula Values: 56.0; Formula Ptg: 56.0; Ptgs: B2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4159e81b'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '948da6ec-3d6f-420e-b092-c490d1732c2c', to: '5d1de03b-72bd-4eac-879f-54289fa2a5b7'},
{from: '5d1de03b-72bd-4eac-879f-54289fa2a5b7', to: '285dbc31-05a2-425f-928b-d81118f20ed8'},
{from: '8dd68767-74cc-4d03-a796-b05638bde352', to: '5d1de03b-72bd-4eac-879f-54289fa2a5b7'}
                            ]);