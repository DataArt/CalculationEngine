var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '344a2d4c-f764-4894-be12-f9c06450c098', label: 'D5\nWhy do you think so?', color: '#31b0d5', title: 'Name: D5<br>Value: Why do you think so?<br>Type: CELL_WITH_FORMULA<br>Id: 344a2d4c-f764-4894-be12-f9c06450c098<br>Formula Expression: Formula String: CONCATENATE(C3, C2, B2, C1, B1, A1); Formula Values: CONCATENATE(?, so, think , you , do , Why ); Formula Ptg: ?, so, think , you , do , Why  CONCATENATE ; Ptgs: C3, C2, B2, C1, B1, A1 CONCATENATE  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7cbc3762'},
{id: '331e31b7-5d9c-4fc5-b3c7-e57459178d02', label: 'CONCATENATE\nWhy do you think so?', color: '#f0ad4e', title: 'Name: CONCATENATE<br>Value: Why do you think so?<br>Type: FUNCTION<br>Id: 331e31b7-5d9c-4fc5-b3c7-e57459178d02<br>Formula Expression: Formula String: CONCATENATE(C3, C2, B2, C1, B1, A1); Formula Values: CONCATENATE(?, so, think , you , do , Why ); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7cbc3762'},
{id: '99543980-4a79-4eaa-9065-06eb09301a78', label: 'B1\ndo ', color: '#31b0d5', title: 'Name: B1<br>Value: do <br>Type: CELL_WITH_VALUE<br>Id: 99543980-4a79-4eaa-9065-06eb09301a78<br>Formula Expression: Formula String: B1; Formula Values: do ; Formula Ptg: do ; Ptgs: B1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7cbc3762'},
{id: '7563ae9f-0bbb-422c-b898-efaf6b58345c', label: 'A1\nWhy ', color: '#31b0d5', title: 'Name: A1<br>Value: Why <br>Type: CELL_WITH_VALUE<br>Id: 7563ae9f-0bbb-422c-b898-efaf6b58345c<br>Formula Expression: Formula String: A1; Formula Values: Why ; Formula Ptg: Why ; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7cbc3762'},
{id: '3f581e9e-fd7a-41ee-8cae-6802a6512979', label: 'C3\n?', color: '#31b0d5', title: 'Name: C3<br>Value: ?<br>Type: CELL_WITH_VALUE<br>Id: 3f581e9e-fd7a-41ee-8cae-6802a6512979<br>Formula Expression: Formula String: C3; Formula Values: ?; Formula Ptg: ?; Ptgs: C3 Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7cbc3762'},
{id: '8ad2433d-3284-4519-90d3-2853ec4a61d2', label: 'C2\nso', color: '#31b0d5', title: 'Name: C2<br>Value: so<br>Type: CELL_WITH_VALUE<br>Id: 8ad2433d-3284-4519-90d3-2853ec4a61d2<br>Formula Expression: Formula String: C2; Formula Values: so; Formula Ptg: so; Ptgs: C2 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7cbc3762'},
{id: 'd71ee64f-a39d-47e1-a26b-d37445e30be3', label: 'C1\nyou ', color: '#31b0d5', title: 'Name: C1<br>Value: you <br>Type: CELL_WITH_VALUE<br>Id: d71ee64f-a39d-47e1-a26b-d37445e30be3<br>Formula Expression: Formula String: C1; Formula Values: you ; Formula Ptg: you ; Ptgs: C1 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7cbc3762'},
{id: '3f60e322-1011-4375-90ef-ff6d43a4f977', label: 'B2\nthink ', color: '#31b0d5', title: 'Name: B2<br>Value: think <br>Type: CELL_WITH_VALUE<br>Id: 3f60e322-1011-4375-90ef-ff6d43a4f977<br>Formula Expression: Formula String: B2; Formula Values: think ; Formula Ptg: think ; Ptgs: B2 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7cbc3762'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '7563ae9f-0bbb-422c-b898-efaf6b58345c', to: '331e31b7-5d9c-4fc5-b3c7-e57459178d02'},
{from: '99543980-4a79-4eaa-9065-06eb09301a78', to: '331e31b7-5d9c-4fc5-b3c7-e57459178d02'},
{from: '8ad2433d-3284-4519-90d3-2853ec4a61d2', to: '331e31b7-5d9c-4fc5-b3c7-e57459178d02'},
{from: '331e31b7-5d9c-4fc5-b3c7-e57459178d02', to: '344a2d4c-f764-4894-be12-f9c06450c098'},
{from: '3f581e9e-fd7a-41ee-8cae-6802a6512979', to: '331e31b7-5d9c-4fc5-b3c7-e57459178d02'},
{from: 'd71ee64f-a39d-47e1-a26b-d37445e30be3', to: '331e31b7-5d9c-4fc5-b3c7-e57459178d02'},
{from: '3f60e322-1011-4375-90ef-ff6d43a4f977', to: '331e31b7-5d9c-4fc5-b3c7-e57459178d02'}
                            ]);