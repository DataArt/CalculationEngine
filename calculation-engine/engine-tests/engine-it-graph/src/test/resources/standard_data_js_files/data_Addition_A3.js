var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0b314ba3-19ae-42cd-bcda-f7ea6fb9d64e', label: 'A3\n50.0', color: '#31b0d5', title: 'Name: A3<br>Value: 50.0<br>Type: CELL_WITH_FORMULA<br>Id: 0b314ba3-19ae-42cd-bcda-f7ea6fb9d64e<br>Formula Expression: Formula String: A1 + A2; Formula Values: 20.0 + 30.0; Formula Ptg: 20.0 30.0 +; Ptgs: A1 A2 + Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35e2d654'},
{id: '864adef5-355d-47c2-a86d-dad96d1262db', label: 'A1\n20.0', color: '#31b0d5', title: 'Name: A1<br>Value: 20.0<br>Type: CELL_WITH_VALUE<br>Id: 864adef5-355d-47c2-a86d-dad96d1262db<br>Formula Expression: Formula String: A1; Formula Values: 20.0; Formula Ptg: 20.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35e2d654'},
{id: '09ee40ea-684a-4111-8e92-21cfeaf28b71', label: 'A2\n30.0', color: '#31b0d5', title: 'Name: A2<br>Value: 30.0<br>Type: CELL_WITH_VALUE<br>Id: 09ee40ea-684a-4111-8e92-21cfeaf28b71<br>Formula Expression: Formula String: A2; Formula Values: 30.0; Formula Ptg: 30.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35e2d654'},
{id: 'ec7c76c7-7a5a-4408-be37-7023168ebc2a', label: '+\n50.0', color: '#f0ad4e', title: 'Name: +<br>Value: 50.0<br>Type: OPERATOR<br>Id: ec7c76c7-7a5a-4408-be37-7023168ebc2a<br>Formula Expression: Formula String: A1 + A2; Formula Values: 20.0 + 30.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35e2d654'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '09ee40ea-684a-4111-8e92-21cfeaf28b71', to: 'ec7c76c7-7a5a-4408-be37-7023168ebc2a'},
{from: 'ec7c76c7-7a5a-4408-be37-7023168ebc2a', to: '0b314ba3-19ae-42cd-bcda-f7ea6fb9d64e'},
{from: '864adef5-355d-47c2-a86d-dad96d1262db', to: 'ec7c76c7-7a5a-4408-be37-7023168ebc2a'}
                            ]);