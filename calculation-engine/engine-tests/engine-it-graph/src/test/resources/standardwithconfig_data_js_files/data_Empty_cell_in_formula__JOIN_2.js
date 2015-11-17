var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'a3b99ab8-f231-431e-8012-1ec960dd06d9', label: '+\n7.0', color: '#f0ad4e', title: 'Name: +<br>Value: 7.0<br>Type: OPERATOR<br>Id: a3b99ab8-f231-431e-8012-1ec960dd06d9<br>Formula Expression: Formula String: C1 + D1; Formula Values: 3.0 + 4.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4702e7a5'},
{id: '5288e148-6e8f-4595-ba2b-206b4f296209', label: '+\n12.0', color: '#f0ad4e', title: 'Name: +<br>Value: 12.0<br>Type: OPERATOR<br>Id: 5288e148-6e8f-4595-ba2b-206b4f296209<br>Formula Expression: Formula String: C1 + D1 + E1 + F1; Formula Values: 3.0 + 4.0 + 5.0 + ; Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4702e7a5'},
{id: '08331cc9-cd80-48ff-84ad-e22cdb4f473f', label: 'E5\n12.0', color: '#31b0d5', title: 'Name: E5<br>Value: 12.0<br>Type: CELL_WITH_FORMULA<br>Id: 08331cc9-cd80-48ff-84ad-e22cdb4f473f<br>Formula Expression: Formula String: C1 + D1 + E1 + F1; Formula Values: 3.0 + 4.0 + 5.0 + ; Formula Ptg: 3.0 4.0 + 5.0 +  +; Ptgs: C1 D1 + E1 + F1 + Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4702e7a5'},
{id: '57719eba-4aad-452f-8094-82d75d69b1bc', label: 'C1\n3.0', color: '#31b0d5', title: 'Name: C1<br>Value: 3.0<br>Type: CELL_WITH_VALUE<br>Id: 57719eba-4aad-452f-8094-82d75d69b1bc<br>Formula Expression: Formula String: C1; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: C1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4702e7a5'},
{id: '9ed370a5-2e68-4eae-8b48-42d3bb06e1e2', label: '+\n12.0', color: '#f0ad4e', title: 'Name: +<br>Value: 12.0<br>Type: OPERATOR<br>Id: 9ed370a5-2e68-4eae-8b48-42d3bb06e1e2<br>Formula Expression: Formula String: C1 + D1 + E1; Formula Values: 3.0 + 4.0 + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4702e7a5'},
{id: 'abc81001-0cda-4bd4-b9bf-e9a0920abe2b', label: 'F1\n', color: '#31b0d5', title: 'Name: F1<br>Value: <br>Type: EMPTY_CELL<br>Id: abc81001-0cda-4bd4-b9bf-e9a0920abe2b<br>Formula Expression: Formula String: F1; Formula Values: ; Formula Ptg: ; Ptgs: F1 Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4702e7a5'},
{id: '8e301479-26b6-493e-a2bc-7d47635cf980', label: 'E1\n5.0', color: '#31b0d5', title: 'Name: E1<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 8e301479-26b6-493e-a2bc-7d47635cf980<br>Formula Expression: Formula String: E1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: E1 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4702e7a5'},
{id: '3e5f95bc-7901-4e74-adf1-ce0a928a63f2', label: 'D1\n4.0', color: '#31b0d5', title: 'Name: D1<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 3e5f95bc-7901-4e74-adf1-ce0a928a63f2<br>Formula Expression: Formula String: D1; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4702e7a5'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3e5f95bc-7901-4e74-adf1-ce0a928a63f2', to: 'a3b99ab8-f231-431e-8012-1ec960dd06d9'},
{from: '5288e148-6e8f-4595-ba2b-206b4f296209', to: '08331cc9-cd80-48ff-84ad-e22cdb4f473f'},
{from: '57719eba-4aad-452f-8094-82d75d69b1bc', to: 'a3b99ab8-f231-431e-8012-1ec960dd06d9'},
{from: 'abc81001-0cda-4bd4-b9bf-e9a0920abe2b', to: '5288e148-6e8f-4595-ba2b-206b4f296209'},
{from: '8e301479-26b6-493e-a2bc-7d47635cf980', to: '9ed370a5-2e68-4eae-8b48-42d3bb06e1e2'},
{from: 'a3b99ab8-f231-431e-8012-1ec960dd06d9', to: '9ed370a5-2e68-4eae-8b48-42d3bb06e1e2'},
{from: '9ed370a5-2e68-4eae-8b48-42d3bb06e1e2', to: '5288e148-6e8f-4595-ba2b-206b4f296209'}
                            ]);