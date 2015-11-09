var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'd6ff5f2c-dfe6-4f52-beac-dad43db5e5f4', label: 'E6\nTRUE', color: '#31b0d5', title: 'Name: E6<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: d6ff5f2c-dfe6-4f52-beac-dad43db5e5f4<br>Formula Expression: Formula String: EXACT(C3, C2); Formula Values: EXACT(76.0, 76.0); Formula Ptg: 76.0, 76.0 EXACT ; Ptgs: C3, C2 EXACT  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5b022357'},
{id: 'c8c35885-ddcc-4e5a-935f-da9b348e0c2a', label: 'A2\n23.0', color: '#31b0d5', title: 'Name: A2<br>Value: 23.0<br>Type: CELL_WITH_VALUE<br>Id: c8c35885-ddcc-4e5a-935f-da9b348e0c2a<br>Formula Expression: Formula String: A2; Formula Values: 23.0; Formula Ptg: 23.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5b022357'},
{id: '3585d37a-2cd0-4e84-b39e-635fbb59f87c', label: 'EXACT\nFALSE', color: '#f0ad4e', title: 'Name: EXACT<br>Value: FALSE<br>Type: FUNCTION<br>Id: 3585d37a-2cd0-4e84-b39e-635fbb59f87c<br>Formula Expression: Formula String: EXACT(B2, A2); Formula Values: EXACT(56.0, 23.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5b022357'},
{id: '7d6db907-4e94-41b3-b065-49f3fbfaa4c5', label: 'EXACT\nTRUE', color: '#f0ad4e', title: 'Name: EXACT<br>Value: TRUE<br>Type: FUNCTION<br>Id: 7d6db907-4e94-41b3-b065-49f3fbfaa4c5<br>Formula Expression: Formula String: EXACT(C3, C2); Formula Values: EXACT(76.0, 76.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5b022357'},
{id: '0fc4f711-9d77-413f-b598-b146ae22eb67', label: 'B2\n56.0', color: '#31b0d5', title: 'Name: B2<br>Value: 56.0<br>Type: CELL_WITH_VALUE<br>Id: 0fc4f711-9d77-413f-b598-b146ae22eb67<br>Formula Expression: Formula String: B2; Formula Values: 56.0; Formula Ptg: 56.0; Ptgs: B2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5b022357'},
{id: '459dc9c4-2d10-42bb-96d9-5398c26fa5a2', label: 'E5\nFALSE', color: '#31b0d5', title: 'Name: E5<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 459dc9c4-2d10-42bb-96d9-5398c26fa5a2<br>Formula Expression: Formula String: EXACT(B2, A2); Formula Values: EXACT(56.0, 23.0); Formula Ptg: 56.0, 23.0 EXACT ; Ptgs: B2, A2 EXACT  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5b022357'},
{id: '6ee04e26-9dd1-4fe5-a9dc-5f9f0639d75f', label: 'C2\n76.0', color: '#31b0d5', title: 'Name: C2<br>Value: 76.0<br>Type: CELL_WITH_VALUE<br>Id: 6ee04e26-9dd1-4fe5-a9dc-5f9f0639d75f<br>Formula Expression: Formula String: C2; Formula Values: 76.0; Formula Ptg: 76.0; Ptgs: C2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5b022357'},
{id: '1dc2b565-73a7-4c2c-8d01-867b9a3e5470', label: 'C3\n76.0', color: '#31b0d5', title: 'Name: C3<br>Value: 76.0<br>Type: CELL_WITH_VALUE<br>Id: 1dc2b565-73a7-4c2c-8d01-867b9a3e5470<br>Formula Expression: Formula String: C3; Formula Values: 76.0; Formula Ptg: 76.0; Ptgs: C3 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5b022357'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'c8c35885-ddcc-4e5a-935f-da9b348e0c2a', to: '3585d37a-2cd0-4e84-b39e-635fbb59f87c'},
{from: '7d6db907-4e94-41b3-b065-49f3fbfaa4c5', to: 'd6ff5f2c-dfe6-4f52-beac-dad43db5e5f4'},
{from: '3585d37a-2cd0-4e84-b39e-635fbb59f87c', to: '459dc9c4-2d10-42bb-96d9-5398c26fa5a2'},
{from: '0fc4f711-9d77-413f-b598-b146ae22eb67', to: '3585d37a-2cd0-4e84-b39e-635fbb59f87c'},
{from: '1dc2b565-73a7-4c2c-8d01-867b9a3e5470', to: '7d6db907-4e94-41b3-b065-49f3fbfaa4c5'},
{from: '6ee04e26-9dd1-4fe5-a9dc-5f9f0639d75f', to: '7d6db907-4e94-41b3-b065-49f3fbfaa4c5'}
                            ]);