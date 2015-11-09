var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'd9bb6167-91c9-44ff-8df9-c5d3c00e54b8', label: '+\n500.0', color: '#f0ad4e', title: 'Name: +<br>Value: 500.0<br>Type: OPERATOR<br>Id: d9bb6167-91c9-44ff-8df9-c5d3c00e54b8<br>Formula Expression: Formula String: B1 + B2; Formula Values: 200.0 + 300.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@101330ad'},
{id: 'be479e25-ede7-45f3-b1e6-5417372e45af', label: 'A1\n20.0', color: '#31b0d5', title: 'Name: A1<br>Value: 20.0<br>Type: CELL_WITH_VALUE<br>Id: be479e25-ede7-45f3-b1e6-5417372e45af<br>Formula Expression: Formula String: A1; Formula Values: 20.0; Formula Ptg: 20.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@101330ad'},
{id: 'ee881453-22ed-4b69-bd97-306e65001122', label: 'Sheet2!$B$1\n85.0', color: '#31b0d5', title: 'Name: Sheet2!$B$1<br>Value: 85.0<br>Type: CELL_WITH_VALUE<br>Id: ee881453-22ed-4b69-bd97-306e65001122<br>Formula Expression: Formula String: Sheet2!$B$1; Formula Values: 85.0; Formula Ptg: 85.0; Ptgs: Sheet2!$B$1 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@101330ad'},
{id: '4cf4ecd1-9dad-491e-8e3f-5ab1ce4ead17', label: 'B2\n300.0', color: '#31b0d5', title: 'Name: B2<br>Value: 300.0<br>Type: CELL_WITH_VALUE<br>Id: 4cf4ecd1-9dad-491e-8e3f-5ab1ce4ead17<br>Formula Expression: Formula String: B2; Formula Values: 300.0; Formula Ptg: 300.0; Ptgs: B2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@101330ad'},
{id: '07ecf450-93ca-4c32-86b6-b0851be0769f', label: '+\n25.0', color: '#f0ad4e', title: 'Name: +<br>Value: 25.0<br>Type: OPERATOR<br>Id: 07ecf450-93ca-4c32-86b6-b0851be0769f<br>Formula Expression: Formula String: A1 + C1; Formula Values: 20.0 + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@101330ad'},
{id: '3dcd1447-ce5d-4782-b350-2af2084b50f5', label: '+\n505.0', color: '#f0ad4e', title: 'Name: +<br>Value: 505.0<br>Type: OPERATOR<br>Id: 3dcd1447-ce5d-4782-b350-2af2084b50f5<br>Formula Expression: Formula String: B1 + B2 + C1; Formula Values: 200.0 + 300.0 + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@101330ad'},
{id: '9444f01e-63a4-4206-8ef7-ca93399cac73', label: 'A4\n110.0', color: '#31b0d5', title: 'Name: A4<br>Value: 110.0<br>Type: CELL_WITH_FORMULA<br>Id: 9444f01e-63a4-4206-8ef7-ca93399cac73<br>Formula Expression: Formula String: A1 + C1 + Sheet2!$B$1; Formula Values: 20.0 + 5.0 + 85.0; Formula Ptg: 20.0 5.0 + 85.0 +; Ptgs: A1 C1 + Sheet2!$B$1 + Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@101330ad'},
{id: 'c8791bad-a148-46a3-abf8-1eb3facaa00b', label: 'B1\n200.0', color: '#31b0d5', title: 'Name: B1<br>Value: 200.0<br>Type: CELL_WITH_VALUE<br>Id: c8791bad-a148-46a3-abf8-1eb3facaa00b<br>Formula Expression: Formula String: B1; Formula Values: 200.0; Formula Ptg: 200.0; Ptgs: B1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@101330ad'},
{id: '137d6585-f2f6-4c4d-abb5-30b8e01dab0f', label: '+\n55.0', color: '#f0ad4e', title: 'Name: +<br>Value: 55.0<br>Type: OPERATOR<br>Id: 137d6585-f2f6-4c4d-abb5-30b8e01dab0f<br>Formula Expression: Formula String: A1 + A2 + C1; Formula Values: 20.0 + 30.0 + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@101330ad'},
{id: '0e090c26-7813-4aa4-8411-b85f0270db5b', label: 'A2\n30.0', color: '#31b0d5', title: 'Name: A2<br>Value: 30.0<br>Type: CELL_WITH_VALUE<br>Id: 0e090c26-7813-4aa4-8411-b85f0270db5b<br>Formula Expression: Formula String: A2; Formula Values: 30.0; Formula Ptg: 30.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@101330ad'},
{id: '94c1f0af-d6cc-4c93-b62f-177540da8b46', label: '+\n50.0', color: '#f0ad4e', title: 'Name: +<br>Value: 50.0<br>Type: OPERATOR<br>Id: 94c1f0af-d6cc-4c93-b62f-177540da8b46<br>Formula Expression: Formula String: A1 + A2; Formula Values: 20.0 + 30.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@101330ad'},
{id: '33ac4d1e-0fd3-48a4-a2fb-6ce835e858d5', label: 'C1\n5.0', color: '#31b0d5', title: 'Name: C1<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 33ac4d1e-0fd3-48a4-a2fb-6ce835e858d5<br>Formula Expression: Formula String: C1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: C1 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@101330ad'},
{id: 'adf8a927-8d83-4dbc-aeb3-b05751cd041c', label: '+\n10.0', color: '#f0ad4e', title: 'Name: +<br>Value: 10.0<br>Type: OPERATOR<br>Id: adf8a927-8d83-4dbc-aeb3-b05751cd041c<br>Formula Expression: Formula String: C1 + C2 + C1; Formula Values: 5.0 +  + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@101330ad'},
{id: '8a027c5d-47e3-49d0-9d0d-e956ab4a7a1c', label: '+\n5.0', color: '#f0ad4e', title: 'Name: +<br>Value: 5.0<br>Type: OPERATOR<br>Id: 8a027c5d-47e3-49d0-9d0d-e956ab4a7a1c<br>Formula Expression: Formula String: C1 + C2; Formula Values: 5.0 + ; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@101330ad'},
{id: '94e76207-1be3-469d-8f85-2c6db3f93732', label: 'C3\n10.0', color: '#31b0d5', title: 'Name: C3<br>Value: 10.0<br>Type: CELL_WITH_FORMULA<br>Id: 94e76207-1be3-469d-8f85-2c6db3f93732<br>Formula Expression: Formula String: C1 + C2 + C1; Formula Values: 5.0 +  + 5.0; Formula Ptg: 5.0  + 5.0 +; Ptgs: C1 C2 + C1 + Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@101330ad'},
{id: '5d7ac5c3-4e12-4a1d-8b2c-9292af8ab2d0', label: 'C2\n', color: '#31b0d5', title: 'Name: C2<br>Value: <br>Type: EMPTY_CELL<br>Id: 5d7ac5c3-4e12-4a1d-8b2c-9292af8ab2d0<br>Formula Expression: Formula String: C2; Formula Values: ; Formula Ptg: ; Ptgs: C2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@101330ad'},
{id: '98c22206-4678-4388-a428-9942a4f09c98', label: 'A3\n55.0', color: '#31b0d5', title: 'Name: A3<br>Value: 55.0<br>Type: CELL_WITH_FORMULA<br>Id: 98c22206-4678-4388-a428-9942a4f09c98<br>Formula Expression: Formula String: A1 + A2 + C1; Formula Values: 20.0 + 30.0 + 5.0; Formula Ptg: 20.0 30.0 + 5.0 +; Ptgs: A1 A2 + C1 + Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@101330ad'},
{id: 'ead0a890-351e-4694-9ec1-37a5a9334876', label: '+\n110.0', color: '#f0ad4e', title: 'Name: +<br>Value: 110.0<br>Type: OPERATOR<br>Id: ead0a890-351e-4694-9ec1-37a5a9334876<br>Formula Expression: Formula String: A1 + C1 + Sheet2!$B$1; Formula Values: 20.0 + 5.0 + 85.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@101330ad'},
{id: '9013a30e-da94-432f-8812-4df6553c4886', label: 'B3\n505.0', color: '#31b0d5', title: 'Name: B3<br>Value: 505.0<br>Type: CELL_WITH_FORMULA<br>Id: 9013a30e-da94-432f-8812-4df6553c4886<br>Formula Expression: Formula String: B1 + B2 + C1; Formula Values: 200.0 + 300.0 + 5.0; Formula Ptg: 200.0 300.0 + 5.0 +; Ptgs: B1 B2 + C1 + Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@101330ad'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4cf4ecd1-9dad-491e-8e3f-5ab1ce4ead17', to: 'd9bb6167-91c9-44ff-8df9-c5d3c00e54b8'},
{from: '33ac4d1e-0fd3-48a4-a2fb-6ce835e858d5', to: '07ecf450-93ca-4c32-86b6-b0851be0769f'},
{from: 'be479e25-ede7-45f3-b1e6-5417372e45af', to: '07ecf450-93ca-4c32-86b6-b0851be0769f'},
{from: '0e090c26-7813-4aa4-8411-b85f0270db5b', to: '94c1f0af-d6cc-4c93-b62f-177540da8b46'},
{from: 'ead0a890-351e-4694-9ec1-37a5a9334876', to: '9444f01e-63a4-4206-8ef7-ca93399cac73'},
{from: '33ac4d1e-0fd3-48a4-a2fb-6ce835e858d5', to: '3dcd1447-ce5d-4782-b350-2af2084b50f5'},
{from: '137d6585-f2f6-4c4d-abb5-30b8e01dab0f', to: '98c22206-4678-4388-a428-9942a4f09c98'},
{from: 'c8791bad-a148-46a3-abf8-1eb3facaa00b', to: 'd9bb6167-91c9-44ff-8df9-c5d3c00e54b8'},
{from: 'd9bb6167-91c9-44ff-8df9-c5d3c00e54b8', to: '3dcd1447-ce5d-4782-b350-2af2084b50f5'},
{from: '33ac4d1e-0fd3-48a4-a2fb-6ce835e858d5', to: '137d6585-f2f6-4c4d-abb5-30b8e01dab0f'},
{from: '33ac4d1e-0fd3-48a4-a2fb-6ce835e858d5', to: '8a027c5d-47e3-49d0-9d0d-e956ab4a7a1c'},
{from: 'adf8a927-8d83-4dbc-aeb3-b05751cd041c', to: '94e76207-1be3-469d-8f85-2c6db3f93732'},
{from: '3dcd1447-ce5d-4782-b350-2af2084b50f5', to: '9013a30e-da94-432f-8812-4df6553c4886'},
{from: '94c1f0af-d6cc-4c93-b62f-177540da8b46', to: '137d6585-f2f6-4c4d-abb5-30b8e01dab0f'},
{from: '33ac4d1e-0fd3-48a4-a2fb-6ce835e858d5', to: 'adf8a927-8d83-4dbc-aeb3-b05751cd041c'},
{from: '8a027c5d-47e3-49d0-9d0d-e956ab4a7a1c', to: 'adf8a927-8d83-4dbc-aeb3-b05751cd041c'},
{from: '07ecf450-93ca-4c32-86b6-b0851be0769f', to: 'ead0a890-351e-4694-9ec1-37a5a9334876'},
{from: 'be479e25-ede7-45f3-b1e6-5417372e45af', to: '94c1f0af-d6cc-4c93-b62f-177540da8b46'},
{from: '5d7ac5c3-4e12-4a1d-8b2c-9292af8ab2d0', to: '8a027c5d-47e3-49d0-9d0d-e956ab4a7a1c'},
{from: 'ee881453-22ed-4b69-bd97-306e65001122', to: 'ead0a890-351e-4694-9ec1-37a5a9334876'}
                            ]);