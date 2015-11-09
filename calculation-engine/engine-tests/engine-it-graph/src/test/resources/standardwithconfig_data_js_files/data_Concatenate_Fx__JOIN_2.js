var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '1557d7be-c13f-42c7-8bb5-701d11637e8d', label: 'B1\ndo ', color: '#31b0d5', title: 'Name: B1<br>Value: do <br>Type: CELL_WITH_VALUE<br>Id: 1557d7be-c13f-42c7-8bb5-701d11637e8d<br>Formula Expression: Formula String: B1; Formula Values: do ; Formula Ptg: do ; Ptgs: B1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5ac53c06'},
{id: 'f3750497-6607-4784-9d39-284c32e0f37e', label: 'C2\nso', color: '#31b0d5', title: 'Name: C2<br>Value: so<br>Type: CELL_WITH_VALUE<br>Id: f3750497-6607-4784-9d39-284c32e0f37e<br>Formula Expression: Formula String: C2; Formula Values: so; Formula Ptg: so; Ptgs: C2 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5ac53c06'},
{id: 'c7ff361a-5fe0-414d-bdbb-010fbb4fc33e', label: 'D5\nWhy do you think so?', color: '#31b0d5', title: 'Name: D5<br>Value: Why do you think so?<br>Type: CELL_WITH_FORMULA<br>Id: c7ff361a-5fe0-414d-bdbb-010fbb4fc33e<br>Formula Expression: Formula String: CONCATENATE(C3, C2, B2, C1, B1, A1); Formula Values: CONCATENATE(?, so, think , you , do , Why ); Formula Ptg: ?, so, think , you , do , Why  CONCATENATE ; Ptgs: C3, C2, B2, C1, B1, A1 CONCATENATE  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5ac53c06'},
{id: '0124bc0c-3f20-402d-9191-59477c2863bf', label: 'A1\nWhy ', color: '#31b0d5', title: 'Name: A1<br>Value: Why <br>Type: CELL_WITH_VALUE<br>Id: 0124bc0c-3f20-402d-9191-59477c2863bf<br>Formula Expression: Formula String: A1; Formula Values: Why ; Formula Ptg: Why ; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5ac53c06'},
{id: '1f1a6679-4ac0-4363-8d98-dce0a608d9a4', label: 'CONCATENATE\nWhy do you think so?', color: '#f0ad4e', title: 'Name: CONCATENATE<br>Value: Why do you think so?<br>Type: FUNCTION<br>Id: 1f1a6679-4ac0-4363-8d98-dce0a608d9a4<br>Formula Expression: Formula String: CONCATENATE(C3, C2, B2, C1, B1, A1); Formula Values: CONCATENATE(?, so, think , you , do , Why ); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5ac53c06'},
{id: 'e2456f1d-d65e-4ef9-b7b9-63902297fce3', label: 'B2\nthink ', color: '#31b0d5', title: 'Name: B2<br>Value: think <br>Type: CELL_WITH_VALUE<br>Id: e2456f1d-d65e-4ef9-b7b9-63902297fce3<br>Formula Expression: Formula String: B2; Formula Values: think ; Formula Ptg: think ; Ptgs: B2 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5ac53c06'},
{id: 'aa5b13be-c84f-4a38-8e94-10986b5d39a6', label: 'C1\nyou ', color: '#31b0d5', title: 'Name: C1<br>Value: you <br>Type: CELL_WITH_VALUE<br>Id: aa5b13be-c84f-4a38-8e94-10986b5d39a6<br>Formula Expression: Formula String: C1; Formula Values: you ; Formula Ptg: you ; Ptgs: C1 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5ac53c06'},
{id: '804e1ba9-749b-4582-a43e-84d79801f41d', label: 'C3\n?', color: '#31b0d5', title: 'Name: C3<br>Value: ?<br>Type: CELL_WITH_VALUE<br>Id: 804e1ba9-749b-4582-a43e-84d79801f41d<br>Formula Expression: Formula String: C3; Formula Values: ?; Formula Ptg: ?; Ptgs: C3 Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5ac53c06'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'e2456f1d-d65e-4ef9-b7b9-63902297fce3', to: '1f1a6679-4ac0-4363-8d98-dce0a608d9a4'},
{from: 'aa5b13be-c84f-4a38-8e94-10986b5d39a6', to: '1f1a6679-4ac0-4363-8d98-dce0a608d9a4'},
{from: '1557d7be-c13f-42c7-8bb5-701d11637e8d', to: '1f1a6679-4ac0-4363-8d98-dce0a608d9a4'},
{from: '1f1a6679-4ac0-4363-8d98-dce0a608d9a4', to: 'c7ff361a-5fe0-414d-bdbb-010fbb4fc33e'},
{from: 'f3750497-6607-4784-9d39-284c32e0f37e', to: '1f1a6679-4ac0-4363-8d98-dce0a608d9a4'},
{from: '804e1ba9-749b-4582-a43e-84d79801f41d', to: '1f1a6679-4ac0-4363-8d98-dce0a608d9a4'},
{from: '0124bc0c-3f20-402d-9191-59477c2863bf', to: '1f1a6679-4ac0-4363-8d98-dce0a608d9a4'}
                            ]);