var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '9e35f0a3-0451-4adf-b41f-f40146895b6a', label: 'IF\n65.0', color: '#f0ad4e', title: 'Name: IF<br>Value: 65.0<br>Type: IF<br>Id: 9e35f0a3-0451-4adf-b41f-f40146895b6a<br>Formula Expression: Formula String: IF(D1<5,D2,C3); Formula Values: IF(4.0 < 5.0, 65.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2ee4c028'},
{id: '1d5852e7-1268-4c9a-a399-16beee57c0ce', label: 'D1\n4.0', color: '#31b0d5', title: 'Name: D1<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 1d5852e7-1268-4c9a-a399-16beee57c0ce<br>Formula Expression: Formula String: D1; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2ee4c028'},
{id: '6667e6df-43b5-4272-8ca9-855af3a1f8dc', label: 'E6\n65.0', color: '#31b0d5', title: 'Name: E6<br>Value: 65.0<br>Type: CELL_WITH_FORMULA<br>Id: 6667e6df-43b5-4272-8ca9-855af3a1f8dc<br>Formula Expression: Formula String: IF(D1<5,D2,C3); Formula Values: IF(4.0 < 5.0, 65.0); Formula Ptg: 65.0, 4.0 5.0 < IF ; Ptgs: D2, D1 VALUE < IF  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2ee4c028'},
{id: '3d3d8523-99fd-4170-9119-5574c5bce93c', label: '<\nTRUE', color: '#f0ad4e', title: 'Name: <<br>Value: TRUE<br>Type: OPERATOR<br>Id: 3d3d8523-99fd-4170-9119-5574c5bce93c<br>Formula Expression: Formula String: D1 < VALUE; Formula Values: 4.0 < 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2ee4c028'},
{id: 'd1183ad0-b05a-457c-9bd6-0bd1dba9d93e', label: 'VALUE\n5.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 5.0<br>Type: CONSTANT_VALUE<br>Id: d1183ad0-b05a-457c-9bd6-0bd1dba9d93e<br>Formula Expression: Formula String: VALUE; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2ee4c028'},
{id: '9b92f994-e682-4f35-a8a4-1edda9994876', label: 'D2\n65.0', color: '#31b0d5', title: 'Name: D2<br>Value: 65.0<br>Type: CELL_WITH_VALUE<br>Id: 9b92f994-e682-4f35-a8a4-1edda9994876<br>Formula Expression: Formula String: D2; Formula Values: 65.0; Formula Ptg: 65.0; Ptgs: D2 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2ee4c028'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1d5852e7-1268-4c9a-a399-16beee57c0ce', to: '3d3d8523-99fd-4170-9119-5574c5bce93c'},
{from: 'd1183ad0-b05a-457c-9bd6-0bd1dba9d93e', to: '3d3d8523-99fd-4170-9119-5574c5bce93c'},
{from: '3d3d8523-99fd-4170-9119-5574c5bce93c', to: '9e35f0a3-0451-4adf-b41f-f40146895b6a'},
{from: '9b92f994-e682-4f35-a8a4-1edda9994876', to: '9e35f0a3-0451-4adf-b41f-f40146895b6a'},
{from: '9e35f0a3-0451-4adf-b41f-f40146895b6a', to: '6667e6df-43b5-4272-8ca9-855af3a1f8dc'}
                            ]);