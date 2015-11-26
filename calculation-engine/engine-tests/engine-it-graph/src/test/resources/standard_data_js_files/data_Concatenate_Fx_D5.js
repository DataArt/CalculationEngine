var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '2b4e3ad8-2376-4f68-8686-99a70cb2b80a', label: 'C3\n?', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: ?<br>Type: CELL_WITH_VALUE<br>Id: 2b4e3ad8-2376-4f68-8686-99a70cb2b80a<br>Formula Expression: Formula String: C3; Formula Values: ?; Formula Ptg: ?; Ptgs: C3 Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2ea6e30c'},
{id: '7f686cef-dfbf-43c4-a402-2fa8945bef21', label: 'B1\ndo ', color: '#31b0d5', title: 'Name: B1<br>Alias: null<br>Value: do <br>Type: CELL_WITH_VALUE<br>Id: 7f686cef-dfbf-43c4-a402-2fa8945bef21<br>Formula Expression: Formula String: B1; Formula Values: do ; Formula Ptg: do ; Ptgs: B1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2ea6e30c'},
{id: '3d194eae-e283-4339-b2f2-1f6027fea96d', label: 'C2\nso', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: so<br>Type: CELL_WITH_VALUE<br>Id: 3d194eae-e283-4339-b2f2-1f6027fea96d<br>Formula Expression: Formula String: C2; Formula Values: so; Formula Ptg: so; Ptgs: C2 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2ea6e30c'},
{id: '112b6269-812c-4499-b088-6268db7038c1', label: 'C1\nyou ', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: you <br>Type: CELL_WITH_VALUE<br>Id: 112b6269-812c-4499-b088-6268db7038c1<br>Formula Expression: Formula String: C1; Formula Values: you ; Formula Ptg: you ; Ptgs: C1 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2ea6e30c'},
{id: 'a8f8f847-2c24-4c3f-a68e-4048b7586c9c', label: 'B2\nthink ', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: think <br>Type: CELL_WITH_VALUE<br>Id: a8f8f847-2c24-4c3f-a68e-4048b7586c9c<br>Formula Expression: Formula String: B2; Formula Values: think ; Formula Ptg: think ; Ptgs: B2 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2ea6e30c'},
{id: '2f2f9476-6b59-4ec1-adfe-3a0a02d7e63a', label: 'A1\nWhy ', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: Why <br>Type: CELL_WITH_VALUE<br>Id: 2f2f9476-6b59-4ec1-adfe-3a0a02d7e63a<br>Formula Expression: Formula String: A1; Formula Values: Why ; Formula Ptg: Why ; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2ea6e30c'},
{id: '698a4384-8d79-43e9-9e51-7a7865082506', label: 'D5\nWhy do you think so?', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: Why do you think so?<br>Type: CELL_WITH_FORMULA<br>Id: 698a4384-8d79-43e9-9e51-7a7865082506<br>Formula Expression: Formula String: CONCATENATE(C3, C2, B2, C1, B1, A1); Formula Values: CONCATENATE(?, so, think , you , do , Why ); Formula Ptg: ?, so, think , you , do , Why  CONCATENATE ; Ptgs: C3, C2, B2, C1, B1, A1 CONCATENATE  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2ea6e30c'},
{id: '57943fba-6e18-4cc9-be04-72c44f7d71d6', label: 'CONCATENATE\nWhy do you think so?', color: '#f0ad4e', title: 'Name: CONCATENATE<br>Alias: null<br>Value: Why do you think so?<br>Type: FUNCTION<br>Id: 57943fba-6e18-4cc9-be04-72c44f7d71d6<br>Formula Expression: Formula String: CONCATENATE(C3, C2, B2, C1, B1, A1); Formula Values: CONCATENATE(?, so, think , you , do , Why ); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2ea6e30c'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3d194eae-e283-4339-b2f2-1f6027fea96d', to: '57943fba-6e18-4cc9-be04-72c44f7d71d6'},
{from: 'a8f8f847-2c24-4c3f-a68e-4048b7586c9c', to: '57943fba-6e18-4cc9-be04-72c44f7d71d6'},
{from: '7f686cef-dfbf-43c4-a402-2fa8945bef21', to: '57943fba-6e18-4cc9-be04-72c44f7d71d6'},
{from: '2b4e3ad8-2376-4f68-8686-99a70cb2b80a', to: '57943fba-6e18-4cc9-be04-72c44f7d71d6'},
{from: '2f2f9476-6b59-4ec1-adfe-3a0a02d7e63a', to: '57943fba-6e18-4cc9-be04-72c44f7d71d6'},
{from: '57943fba-6e18-4cc9-be04-72c44f7d71d6', to: '698a4384-8d79-43e9-9e51-7a7865082506'},
{from: '112b6269-812c-4499-b088-6268db7038c1', to: '57943fba-6e18-4cc9-be04-72c44f7d71d6'}
                            ]);