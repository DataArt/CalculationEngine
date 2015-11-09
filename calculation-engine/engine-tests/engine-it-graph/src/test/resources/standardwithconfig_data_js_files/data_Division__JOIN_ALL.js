var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'bf25082a-60aa-484e-b62e-0d8008d7fc2d', label: 'A2\n25.0', color: '#31b0d5', title: 'Name: A2<br>Value: 25.0<br>Type: CELL_WITH_VALUE<br>Id: bf25082a-60aa-484e-b62e-0d8008d7fc2d<br>Formula Expression: Formula String: A2; Formula Values: 25.0; Formula Ptg: 25.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3a62c01e'},
{id: '9292d77f-93be-438f-b687-750f05a235cd', label: '/\n4.0', color: '#f0ad4e', title: 'Name: /<br>Value: 4.0<br>Type: OPERATOR<br>Id: 9292d77f-93be-438f-b687-750f05a235cd<br>Formula Expression: Formula String: A1 / A2; Formula Values: 100.0 / 25.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3a62c01e'},
{id: '0973c2c8-0831-4295-bcad-88695d76b37f', label: 'A1\n100.0', color: '#31b0d5', title: 'Name: A1<br>Value: 100.0<br>Type: CELL_WITH_VALUE<br>Id: 0973c2c8-0831-4295-bcad-88695d76b37f<br>Formula Expression: Formula String: A1; Formula Values: 100.0; Formula Ptg: 100.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3a62c01e'},
{id: '2eafab42-d5f8-4bb9-a4b6-a74cd1ceecaa', label: 'B3\n4.0', color: '#31b0d5', title: 'Name: B3<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: 2eafab42-d5f8-4bb9-a4b6-a74cd1ceecaa<br>Formula Expression: Formula String: A1 / A2; Formula Values: 100.0 / 25.0; Formula Ptg: 100.0 25.0 /; Ptgs: A1 A2 / Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3a62c01e'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '9292d77f-93be-438f-b687-750f05a235cd', to: '2eafab42-d5f8-4bb9-a4b6-a74cd1ceecaa'},
{from: '0973c2c8-0831-4295-bcad-88695d76b37f', to: '9292d77f-93be-438f-b687-750f05a235cd'},
{from: 'bf25082a-60aa-484e-b62e-0d8008d7fc2d', to: '9292d77f-93be-438f-b687-750f05a235cd'}
                            ]);