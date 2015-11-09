var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'e8a9b7fe-5140-4d6c-b398-e35f6ec3df7a', label: '+\n50.0', color: '#f0ad4e', title: 'Name: +<br>Value: 50.0<br>Type: OPERATOR<br>Id: e8a9b7fe-5140-4d6c-b398-e35f6ec3df7a<br>Formula Expression: Formula String: A1 + A2; Formula Values: 20.0 + 30.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@40230eb9'},
{id: '1ed6397c-4de6-4c1d-92c9-13acd2f29407', label: 'A1\n20.0', color: '#31b0d5', title: 'Name: A1<br>Value: 20.0<br>Type: CELL_WITH_VALUE<br>Id: 1ed6397c-4de6-4c1d-92c9-13acd2f29407<br>Formula Expression: Formula String: A1; Formula Values: 20.0; Formula Ptg: 20.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@40230eb9'},
{id: '8ff02051-9387-4070-906c-57d477bfc769', label: 'A2\n30.0', color: '#31b0d5', title: 'Name: A2<br>Value: 30.0<br>Type: CELL_WITH_VALUE<br>Id: 8ff02051-9387-4070-906c-57d477bfc769<br>Formula Expression: Formula String: A2; Formula Values: 30.0; Formula Ptg: 30.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@40230eb9'},
{id: '28c4ecb2-2c26-4979-932d-4fba8fb77a03', label: 'A3\n50.0', color: '#31b0d5', title: 'Name: A3<br>Value: 50.0<br>Type: CELL_WITH_FORMULA<br>Id: 28c4ecb2-2c26-4979-932d-4fba8fb77a03<br>Formula Expression: Formula String: A1 + A2; Formula Values: 20.0 + 30.0; Formula Ptg: 20.0 30.0 +; Ptgs: A1 A2 + Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@40230eb9'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'e8a9b7fe-5140-4d6c-b398-e35f6ec3df7a', to: '28c4ecb2-2c26-4979-932d-4fba8fb77a03'},
{from: '8ff02051-9387-4070-906c-57d477bfc769', to: 'e8a9b7fe-5140-4d6c-b398-e35f6ec3df7a'},
{from: '1ed6397c-4de6-4c1d-92c9-13acd2f29407', to: 'e8a9b7fe-5140-4d6c-b398-e35f6ec3df7a'}
                            ]);