var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'b3126230-99f1-4e11-86e1-9e1ba904f9d0', label: 'B1\nexpected', color: '#31b0d5', title: 'Name: B1<br>Value: expected<br>Type: CELL_WITH_VALUE<br>Id: b3126230-99f1-4e11-86e1-9e1ba904f9d0<br>Formula Expression: Formula String: B1; Formula Values: expected; Formula Ptg: expected; Ptgs: B1 Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4e4894d'},
{id: '2da69c91-855b-409e-8f8a-375daecb2fd9', label: 'A2\nSun', color: '#31b0d5', title: 'Name: A2<br>Value: Sun<br>Type: CELL_WITH_VALUE<br>Id: 2da69c91-855b-409e-8f8a-375daecb2fd9<br>Formula Expression: Formula String: A2; Formula Values: Sun; Formula Ptg: Sun; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4e4894d'},
{id: 'c221b13c-6f6d-45cc-9528-53b2d35d3507', label: 'D2\nexpected', color: '#31b0d5', title: 'Name: D2<br>Value: expected<br>Type: CELL_WITH_FORMULA<br>Id: c221b13c-6f6d-45cc-9528-53b2d35d3507<br>Formula Expression: Formula String: IF(A2=C1,B4,B1); Formula Values: IF(Sun = is, expected); Formula Ptg: expected, Sun is = IF ; Ptgs: B1, A2 C1 = IF  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4e4894d'},
{id: 'd24d123a-4722-4c47-b499-56cfd77a255e', label: '=\nFALSE', color: '#f0ad4e', title: 'Name: =<br>Value: FALSE<br>Type: OPERATOR<br>Id: d24d123a-4722-4c47-b499-56cfd77a255e<br>Formula Expression: Formula String: A2 = C1; Formula Values: Sun = is; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4e4894d'},
{id: 'a781c327-123a-4bba-aeff-8d6ac4635cf0', label: 'D3\n52.0', color: '#31b0d5', title: 'Name: D3<br>Value: 52.0<br>Type: CELL_WITH_VALUE<br>Id: a781c327-123a-4bba-aeff-8d6ac4635cf0<br>Formula Expression: Formula String: D3; Formula Values: 52.0; Formula Ptg: 52.0; Ptgs: D3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4e4894d'},
{id: '8bd2bb11-d758-4dc2-9646-cf73892a5dcc', label: 'T\n', color: '#f0ad4e', title: 'Name: T<br>Value: <br>Type: FUNCTION<br>Id: 8bd2bb11-d758-4dc2-9646-cf73892a5dcc<br>Formula Expression: Formula String: T(D3); Formula Values: T(52.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4e4894d'},
{id: '061005d6-410a-4800-af02-7aa2302cbbd7', label: 'C1\nis', color: '#31b0d5', title: 'Name: C1<br>Value: is<br>Type: CELL_WITH_VALUE<br>Id: 061005d6-410a-4800-af02-7aa2302cbbd7<br>Formula Expression: Formula String: C1; Formula Values: is; Formula Ptg: is; Ptgs: C1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4e4894d'},
{id: '70f80b5a-2d63-406a-ad0a-ba161f7caaa0', label: 'IF\nexpected', color: '#f0ad4e', title: 'Name: IF<br>Value: expected<br>Type: IF<br>Id: 70f80b5a-2d63-406a-ad0a-ba161f7caaa0<br>Formula Expression: Formula String: IF(A2=C1,B4,B1); Formula Values: IF(Sun = is, expected); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4e4894d'},
{id: '933f58d7-b97f-42d0-b63e-527a35599459', label: 'D5\n', color: '#31b0d5', title: 'Name: D5<br>Value: <br>Type: CELL_WITH_FORMULA<br>Id: 933f58d7-b97f-42d0-b63e-527a35599459<br>Formula Expression: Formula String: T(D3); Formula Values: T(52.0); Formula Ptg: 52.0 T ; Ptgs: D3 T  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4e4894d'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'a781c327-123a-4bba-aeff-8d6ac4635cf0', to: '8bd2bb11-d758-4dc2-9646-cf73892a5dcc'},
{from: '70f80b5a-2d63-406a-ad0a-ba161f7caaa0', to: 'c221b13c-6f6d-45cc-9528-53b2d35d3507'},
{from: 'b3126230-99f1-4e11-86e1-9e1ba904f9d0', to: '70f80b5a-2d63-406a-ad0a-ba161f7caaa0'},
{from: 'd24d123a-4722-4c47-b499-56cfd77a255e', to: '70f80b5a-2d63-406a-ad0a-ba161f7caaa0'},
{from: '061005d6-410a-4800-af02-7aa2302cbbd7', to: 'd24d123a-4722-4c47-b499-56cfd77a255e'},
{from: '8bd2bb11-d758-4dc2-9646-cf73892a5dcc', to: '933f58d7-b97f-42d0-b63e-527a35599459'},
{from: '2da69c91-855b-409e-8f8a-375daecb2fd9', to: 'd24d123a-4722-4c47-b499-56cfd77a255e'}
                            ]);