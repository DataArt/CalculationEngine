var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'fb600f14-0f1b-408d-bc2b-9d82deefa0a3', label: 'E5\nFALSE', color: '#31b0d5', title: 'Name: E5<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: fb600f14-0f1b-408d-bc2b-9d82deefa0a3<br>Formula Expression: Formula String: EXACT(B2, A2); Formula Values: EXACT(56.0, 23.0); Formula Ptg: 56.0, 23.0 EXACT ; Ptgs: B2, A2 EXACT  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@30ec211a'},
{id: '37958352-eac2-4937-bad2-d48b905b35b3', label: 'EXACT\nTRUE', color: '#f0ad4e', title: 'Name: EXACT<br>Value: TRUE<br>Type: FUNCTION<br>Id: 37958352-eac2-4937-bad2-d48b905b35b3<br>Formula Expression: Formula String: EXACT(C3, C2); Formula Values: EXACT(76.0, 76.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@30ec211a'},
{id: '2a53b7b8-61a3-44a6-a791-209e1a427e3f', label: 'A2\n23.0', color: '#31b0d5', title: 'Name: A2<br>Value: 23.0<br>Type: CELL_WITH_VALUE<br>Id: 2a53b7b8-61a3-44a6-a791-209e1a427e3f<br>Formula Expression: Formula String: A2; Formula Values: 23.0; Formula Ptg: 23.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@30ec211a'},
{id: 'd459ee8e-f08e-4b37-bdd6-e6ef686965a8', label: 'EXACT\nFALSE', color: '#f0ad4e', title: 'Name: EXACT<br>Value: FALSE<br>Type: FUNCTION<br>Id: d459ee8e-f08e-4b37-bdd6-e6ef686965a8<br>Formula Expression: Formula String: EXACT(B2, A2); Formula Values: EXACT(56.0, 23.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@30ec211a'},
{id: '84b1a164-df67-4ad8-b129-9c11c6124f0f', label: 'B2\n56.0', color: '#31b0d5', title: 'Name: B2<br>Value: 56.0<br>Type: CELL_WITH_VALUE<br>Id: 84b1a164-df67-4ad8-b129-9c11c6124f0f<br>Formula Expression: Formula String: B2; Formula Values: 56.0; Formula Ptg: 56.0; Ptgs: B2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@30ec211a'},
{id: '6cfd2ed0-656c-4e68-98d3-e323bc2ee20c', label: 'C2\n76.0', color: '#31b0d5', title: 'Name: C2<br>Value: 76.0<br>Type: CELL_WITH_VALUE<br>Id: 6cfd2ed0-656c-4e68-98d3-e323bc2ee20c<br>Formula Expression: Formula String: C2; Formula Values: 76.0; Formula Ptg: 76.0; Ptgs: C2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@30ec211a'},
{id: 'd11386f9-abaa-4982-942e-495af517860b', label: 'C3\n76.0', color: '#31b0d5', title: 'Name: C3<br>Value: 76.0<br>Type: CELL_WITH_VALUE<br>Id: d11386f9-abaa-4982-942e-495af517860b<br>Formula Expression: Formula String: C3; Formula Values: 76.0; Formula Ptg: 76.0; Ptgs: C3 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@30ec211a'},
{id: 'd301165d-f5ee-4a29-9ec8-da44904bcc86', label: 'E6\nTRUE', color: '#31b0d5', title: 'Name: E6<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: d301165d-f5ee-4a29-9ec8-da44904bcc86<br>Formula Expression: Formula String: EXACT(C3, C2); Formula Values: EXACT(76.0, 76.0); Formula Ptg: 76.0, 76.0 EXACT ; Ptgs: C3, C2 EXACT  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@30ec211a'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'd11386f9-abaa-4982-942e-495af517860b', to: '37958352-eac2-4937-bad2-d48b905b35b3'},
{from: '84b1a164-df67-4ad8-b129-9c11c6124f0f', to: 'd459ee8e-f08e-4b37-bdd6-e6ef686965a8'},
{from: '2a53b7b8-61a3-44a6-a791-209e1a427e3f', to: 'd459ee8e-f08e-4b37-bdd6-e6ef686965a8'},
{from: 'd459ee8e-f08e-4b37-bdd6-e6ef686965a8', to: 'fb600f14-0f1b-408d-bc2b-9d82deefa0a3'},
{from: '37958352-eac2-4937-bad2-d48b905b35b3', to: 'd301165d-f5ee-4a29-9ec8-da44904bcc86'},
{from: '6cfd2ed0-656c-4e68-98d3-e323bc2ee20c', to: '37958352-eac2-4937-bad2-d48b905b35b3'}
                            ]);