var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '2786e20f-b05e-4540-87e4-3e881f4dd052', label: 'C2\n76.0', color: '#31b0d5', title: 'Name: C2<br>Value: 76.0<br>Type: CELL_WITH_VALUE<br>Id: 2786e20f-b05e-4540-87e4-3e881f4dd052<br>Formula Expression: Formula String: C2; Formula Values: 76.0; Formula Ptg: 76.0; Ptgs: C2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@21b508a0'},
{id: '6101968e-9f55-4f6f-a56b-6725942316f2', label: 'EXACT\nFALSE', color: '#f0ad4e', title: 'Name: EXACT<br>Value: FALSE<br>Type: FUNCTION<br>Id: 6101968e-9f55-4f6f-a56b-6725942316f2<br>Formula Expression: Formula String: EXACT(B2, A2); Formula Values: EXACT(56.0, 23.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@21b508a0'},
{id: '0318e8d9-1d5d-4ec9-a19b-858bd1ceac5b', label: 'C3\n76.0', color: '#31b0d5', title: 'Name: C3<br>Value: 76.0<br>Type: CELL_WITH_VALUE<br>Id: 0318e8d9-1d5d-4ec9-a19b-858bd1ceac5b<br>Formula Expression: Formula String: C3; Formula Values: 76.0; Formula Ptg: 76.0; Ptgs: C3 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@21b508a0'},
{id: 'c3a5a74c-90ba-484d-84c7-27bc3b6c7127', label: 'E6\nTRUE', color: '#31b0d5', title: 'Name: E6<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: c3a5a74c-90ba-484d-84c7-27bc3b6c7127<br>Formula Expression: Formula String: EXACT(C3, C2); Formula Values: EXACT(76.0, 76.0); Formula Ptg: 76.0, 76.0 EXACT ; Ptgs: C3, C2 EXACT  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@21b508a0'},
{id: '31dce3e8-aaed-445f-a571-c712397ed37e', label: 'A2\n23.0', color: '#31b0d5', title: 'Name: A2<br>Value: 23.0<br>Type: CELL_WITH_VALUE<br>Id: 31dce3e8-aaed-445f-a571-c712397ed37e<br>Formula Expression: Formula String: A2; Formula Values: 23.0; Formula Ptg: 23.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@21b508a0'},
{id: 'd8592e9b-9d4b-497d-a048-1c3a3d481d4b', label: 'EXACT\nTRUE', color: '#f0ad4e', title: 'Name: EXACT<br>Value: TRUE<br>Type: FUNCTION<br>Id: d8592e9b-9d4b-497d-a048-1c3a3d481d4b<br>Formula Expression: Formula String: EXACT(C3, C2); Formula Values: EXACT(76.0, 76.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@21b508a0'},
{id: '5e1446ad-51ac-47b8-bb26-b10ec035512b', label: 'E5\nFALSE', color: '#31b0d5', title: 'Name: E5<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 5e1446ad-51ac-47b8-bb26-b10ec035512b<br>Formula Expression: Formula String: EXACT(B2, A2); Formula Values: EXACT(56.0, 23.0); Formula Ptg: 56.0, 23.0 EXACT ; Ptgs: B2, A2 EXACT  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@21b508a0'},
{id: 'd4dbc2e4-67e5-4895-8f77-a860b4239748', label: 'B2\n56.0', color: '#31b0d5', title: 'Name: B2<br>Value: 56.0<br>Type: CELL_WITH_VALUE<br>Id: d4dbc2e4-67e5-4895-8f77-a860b4239748<br>Formula Expression: Formula String: B2; Formula Values: 56.0; Formula Ptg: 56.0; Ptgs: B2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@21b508a0'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '0318e8d9-1d5d-4ec9-a19b-858bd1ceac5b', to: 'd8592e9b-9d4b-497d-a048-1c3a3d481d4b'},
{from: 'd4dbc2e4-67e5-4895-8f77-a860b4239748', to: '6101968e-9f55-4f6f-a56b-6725942316f2'},
{from: '31dce3e8-aaed-445f-a571-c712397ed37e', to: '6101968e-9f55-4f6f-a56b-6725942316f2'},
{from: '2786e20f-b05e-4540-87e4-3e881f4dd052', to: 'd8592e9b-9d4b-497d-a048-1c3a3d481d4b'},
{from: 'd8592e9b-9d4b-497d-a048-1c3a3d481d4b', to: 'c3a5a74c-90ba-484d-84c7-27bc3b6c7127'},
{from: '6101968e-9f55-4f6f-a56b-6725942316f2', to: '5e1446ad-51ac-47b8-bb26-b10ec035512b'}
                            ]);