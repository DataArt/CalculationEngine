var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '78959b6a-96d5-4b46-b48b-838215b3d4bc', label: 'T\nwhy not?', color: '#f0ad4e', title: 'Name: T<br>Value: why not?<br>Type: FUNCTION<br>Id: 78959b6a-96d5-4b46-b48b-838215b3d4bc<br>Formula Expression: Formula String: T(C3); Formula Values: T(why not?); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1f1c7fde'},
{id: 'd4b829bc-59ed-491f-8ac6-ab48990f52c6', label: 'D3\n52.0', color: '#31b0d5', title: 'Name: D3<br>Value: 52.0<br>Type: CELL_WITH_VALUE<br>Id: d4b829bc-59ed-491f-8ac6-ab48990f52c6<br>Formula Expression: Formula String: D3; Formula Values: 52.0; Formula Ptg: 52.0; Ptgs: D3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1f1c7fde'},
{id: '4804f3b2-e937-46c1-a59d-81bbe827d83c', label: 'B1\nexpected', color: '#31b0d5', title: 'Name: B1<br>Value: expected<br>Type: CELL_WITH_VALUE<br>Id: 4804f3b2-e937-46c1-a59d-81bbe827d83c<br>Formula Expression: Formula String: B1; Formula Values: expected; Formula Ptg: expected; Ptgs: B1 Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1f1c7fde'},
{id: 'a0d40292-a3df-43fb-9bf5-abb5cfeadefc', label: 'A2\nSun', color: '#31b0d5', title: 'Name: A2<br>Value: Sun<br>Type: CELL_WITH_VALUE<br>Id: a0d40292-a3df-43fb-9bf5-abb5cfeadefc<br>Formula Expression: Formula String: A2; Formula Values: Sun; Formula Ptg: Sun; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1f1c7fde'},
{id: '9cea1dd0-46ea-4fba-9350-e805d8e1fb99', label: 'T\n', color: '#f0ad4e', title: 'Name: T<br>Value: <br>Type: FUNCTION<br>Id: 9cea1dd0-46ea-4fba-9350-e805d8e1fb99<br>Formula Expression: Formula String: T(D3); Formula Values: T(52.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1f1c7fde'},
{id: '86e2b5e0-014b-403d-b24f-c125e3776318', label: 'C1\nis', color: '#31b0d5', title: 'Name: C1<br>Value: is<br>Type: CELL_WITH_VALUE<br>Id: 86e2b5e0-014b-403d-b24f-c125e3776318<br>Formula Expression: Formula String: C1; Formula Values: is; Formula Ptg: is; Ptgs: C1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1f1c7fde'},
{id: 'a3ff8171-1e1c-43ea-afdb-045ea509f127', label: 'D6\n', color: '#31b0d5', title: 'Name: D6<br>Value: <br>Type: CELL_WITH_FORMULA<br>Id: a3ff8171-1e1c-43ea-afdb-045ea509f127<br>Formula Expression: Formula String: T(D3); Formula Values: T(52.0); Formula Ptg: 52.0 T ; Ptgs: D3 T  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1f1c7fde'},
{id: '0ca0a67b-75ea-472c-b2b8-b2b16a2ddca0', label: '=\nFALSE', color: '#f0ad4e', title: 'Name: =<br>Value: FALSE<br>Type: OPERATOR<br>Id: 0ca0a67b-75ea-472c-b2b8-b2b16a2ddca0<br>Formula Expression: Formula String: A2 = C1; Formula Values: Sun = is; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1f1c7fde'},
{id: '2e8b1aa0-f6ee-444d-adea-0f367173457f', label: 'D2\nexpected', color: '#31b0d5', title: 'Name: D2<br>Value: expected<br>Type: CELL_WITH_FORMULA<br>Id: 2e8b1aa0-f6ee-444d-adea-0f367173457f<br>Formula Expression: Formula String: IF(A2=C1,B4,B1); Formula Values: IF(Sun = is, expected); Formula Ptg: expected, Sun is = IF ; Ptgs: B1, A2 C1 = IF  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1f1c7fde'},
{id: '17cc9a5b-6b31-4b5f-b5f6-aabb4633e025', label: 'IF\nexpected', color: '#f0ad4e', title: 'Name: IF<br>Value: expected<br>Type: IF<br>Id: 17cc9a5b-6b31-4b5f-b5f6-aabb4633e025<br>Formula Expression: Formula String: IF(A2=C1,B4,B1); Formula Values: IF(Sun = is, expected); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1f1c7fde'},
{id: '661e4dda-7297-44b2-bd61-ba8dee2ed630', label: 'C3\nwhy not?', color: '#31b0d5', title: 'Name: C3<br>Value: why not?<br>Type: CELL_WITH_VALUE<br>Id: 661e4dda-7297-44b2-bd61-ba8dee2ed630<br>Formula Expression: Formula String: C3; Formula Values: why not?; Formula Ptg: why not?; Ptgs: C3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1f1c7fde'},
{id: '5b1563af-9506-4045-8353-339d11b856e1', label: 'D5\nwhy not?', color: '#31b0d5', title: 'Name: D5<br>Value: why not?<br>Type: CELL_WITH_FORMULA<br>Id: 5b1563af-9506-4045-8353-339d11b856e1<br>Formula Expression: Formula String: T(C3); Formula Values: T(why not?); Formula Ptg: why not? T ; Ptgs: C3 T  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1f1c7fde'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '661e4dda-7297-44b2-bd61-ba8dee2ed630', to: '78959b6a-96d5-4b46-b48b-838215b3d4bc'},
{from: '9cea1dd0-46ea-4fba-9350-e805d8e1fb99', to: 'a3ff8171-1e1c-43ea-afdb-045ea509f127'},
{from: '86e2b5e0-014b-403d-b24f-c125e3776318', to: '0ca0a67b-75ea-472c-b2b8-b2b16a2ddca0'},
{from: '17cc9a5b-6b31-4b5f-b5f6-aabb4633e025', to: '2e8b1aa0-f6ee-444d-adea-0f367173457f'},
{from: '4804f3b2-e937-46c1-a59d-81bbe827d83c', to: '17cc9a5b-6b31-4b5f-b5f6-aabb4633e025'},
{from: '78959b6a-96d5-4b46-b48b-838215b3d4bc', to: '5b1563af-9506-4045-8353-339d11b856e1'},
{from: 'd4b829bc-59ed-491f-8ac6-ab48990f52c6', to: '9cea1dd0-46ea-4fba-9350-e805d8e1fb99'},
{from: 'a0d40292-a3df-43fb-9bf5-abb5cfeadefc', to: '0ca0a67b-75ea-472c-b2b8-b2b16a2ddca0'},
{from: '0ca0a67b-75ea-472c-b2b8-b2b16a2ddca0', to: '17cc9a5b-6b31-4b5f-b5f6-aabb4633e025'}
                            ]);