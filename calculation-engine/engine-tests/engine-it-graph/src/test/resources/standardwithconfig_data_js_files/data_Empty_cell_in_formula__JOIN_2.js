var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '6d9220db-ad28-48e3-8714-d33246c604e5', label: '+\n7.0', color: '#f0ad4e', title: 'Name: +<br>Value: 7.0<br>Type: OPERATOR<br>Id: 6d9220db-ad28-48e3-8714-d33246c604e5<br>Formula Expression: Formula String: C1 + D1; Formula Values: 3.0 + 4.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@685f5d0d'},
{id: 'b1a62da1-1e30-43fc-87e5-47dbc4f067ec', label: '+\n12.0', color: '#f0ad4e', title: 'Name: +<br>Value: 12.0<br>Type: OPERATOR<br>Id: b1a62da1-1e30-43fc-87e5-47dbc4f067ec<br>Formula Expression: Formula String: C1 + D1 + E1; Formula Values: 3.0 + 4.0 + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@685f5d0d'},
{id: '5a3deaf6-035c-4d0c-9122-3d2849ab51d7', label: 'D1\n4.0', color: '#31b0d5', title: 'Name: D1<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 5a3deaf6-035c-4d0c-9122-3d2849ab51d7<br>Formula Expression: Formula String: D1; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@685f5d0d'},
{id: '0a619b99-0419-4664-8162-335df234cb5b', label: 'E5\n12.0', color: '#31b0d5', title: 'Name: E5<br>Value: 12.0<br>Type: CELL_WITH_FORMULA<br>Id: 0a619b99-0419-4664-8162-335df234cb5b<br>Formula Expression: Formula String: C1 + D1 + E1 + F1; Formula Values: 3.0 + 4.0 + 5.0 + ; Formula Ptg: 3.0 4.0 + 5.0 +  +; Ptgs: C1 D1 + E1 + F1 + Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@685f5d0d'},
{id: '0437ded1-84ba-4e9b-8a95-8d08a2474702', label: 'F1\n', color: '#31b0d5', title: 'Name: F1<br>Value: <br>Type: EMPTY_CELL<br>Id: 0437ded1-84ba-4e9b-8a95-8d08a2474702<br>Formula Expression: Formula String: F1; Formula Values: ; Formula Ptg: ; Ptgs: F1 Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@685f5d0d'},
{id: 'ac85c928-9fa7-47ea-b5e2-418bf90b7b13', label: 'E1\n5.0', color: '#31b0d5', title: 'Name: E1<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: ac85c928-9fa7-47ea-b5e2-418bf90b7b13<br>Formula Expression: Formula String: E1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: E1 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@685f5d0d'},
{id: 'ce2cadf9-7b84-4831-8910-5e805df182f9', label: '+\n12.0', color: '#f0ad4e', title: 'Name: +<br>Value: 12.0<br>Type: OPERATOR<br>Id: ce2cadf9-7b84-4831-8910-5e805df182f9<br>Formula Expression: Formula String: C1 + D1 + E1 + F1; Formula Values: 3.0 + 4.0 + 5.0 + ; Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@685f5d0d'},
{id: 'cf79d231-13cc-4731-807e-8c70b272993c', label: 'C1\n3.0', color: '#31b0d5', title: 'Name: C1<br>Value: 3.0<br>Type: CELL_WITH_VALUE<br>Id: cf79d231-13cc-4731-807e-8c70b272993c<br>Formula Expression: Formula String: C1; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: C1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@685f5d0d'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '0437ded1-84ba-4e9b-8a95-8d08a2474702', to: 'ce2cadf9-7b84-4831-8910-5e805df182f9'},
{from: 'cf79d231-13cc-4731-807e-8c70b272993c', to: '6d9220db-ad28-48e3-8714-d33246c604e5'},
{from: 'b1a62da1-1e30-43fc-87e5-47dbc4f067ec', to: 'ce2cadf9-7b84-4831-8910-5e805df182f9'},
{from: 'ac85c928-9fa7-47ea-b5e2-418bf90b7b13', to: 'b1a62da1-1e30-43fc-87e5-47dbc4f067ec'},
{from: '5a3deaf6-035c-4d0c-9122-3d2849ab51d7', to: '6d9220db-ad28-48e3-8714-d33246c604e5'},
{from: 'ce2cadf9-7b84-4831-8910-5e805df182f9', to: '0a619b99-0419-4664-8162-335df234cb5b'},
{from: '6d9220db-ad28-48e3-8714-d33246c604e5', to: 'b1a62da1-1e30-43fc-87e5-47dbc4f067ec'}
                            ]);