var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '79b4c1ee-16c9-4799-a194-b9607c1d3701', label: 'B2\n3.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 3.0<br>Type: CELL_WITH_VALUE<br>Id: 79b4c1ee-16c9-4799-a194-b9607c1d3701<br>Formula Expression: Formula String: B2; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: B2 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7ce69770'},
{id: 'f2d1c5ad-5b0d-4d0e-883b-aa8c4d63178e', label: 'VALUE\nDEVDEF_1', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF_1<br>Type: CONSTANT_VALUE<br>Id: f2d1c5ad-5b0d-4d0e-883b-aa8c4d63178e<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_1; Formula Ptg: DEVDEF_1; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7ce69770'},
{id: '864e257c-730f-4059-a2b4-662a37a9b554', label: 'A2\n5.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 864e257c-730f-4059-a2b4-662a37a9b554<br>Formula Expression: Formula String: A2; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7ce69770'},
{id: '23d2a21e-fe94-4154-891b-cbc4941672e5', label: 'F6\n5.25', color: '#31b0d5', title: 'Name: F6<br>Alias: null<br>Value: 5.25<br>Type: CELL_WITH_FORMULA<br>Id: 23d2a21e-fe94-4154-891b-cbc4941672e5<br>Formula Expression: Formula String: FUNCEXEC(D2, C2, B2, A2, VALUE); Formula Values: FUNCEXEC(4.0, 9.0, 3.0, 5.0, DEVDEF_1); Formula Ptg: 4.0, 9.0, 3.0, 5.0, DEVDEF_1 FUNCEXEC ; Ptgs: D2, C2, B2, A2, VALUE FUNCEXEC  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7ce69770'},
{id: '8029a31f-d380-48db-b598-89d06e4f467f', label: 'C2\n9.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: 8029a31f-d380-48db-b598-89d06e4f467f<br>Formula Expression: Formula String: C2; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: C2 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7ce69770'},
{id: 'e52762e7-5260-4d37-8aa3-436e8f7ae131', label: 'D2\n4.0', color: '#31b0d5', title: 'Name: D2<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: e52762e7-5260-4d37-8aa3-436e8f7ae131<br>Formula Expression: Formula String: D2; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D2 Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7ce69770'},
{id: 'a147a40f-a1d7-4271-89cf-1c42384fb7df', label: 'FUNCEXEC\n5.25', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: 5.25<br>Type: FUNCTION<br>Id: a147a40f-a1d7-4271-89cf-1c42384fb7df<br>Formula Expression: Formula String: FUNCEXEC(D2, C2, B2, A2, VALUE); Formula Values: FUNCEXEC(4.0, 9.0, 3.0, 5.0, DEVDEF_1); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7ce69770'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'a147a40f-a1d7-4271-89cf-1c42384fb7df', to: '23d2a21e-fe94-4154-891b-cbc4941672e5'},
{from: '79b4c1ee-16c9-4799-a194-b9607c1d3701', to: 'a147a40f-a1d7-4271-89cf-1c42384fb7df'},
{from: 'f2d1c5ad-5b0d-4d0e-883b-aa8c4d63178e', to: 'a147a40f-a1d7-4271-89cf-1c42384fb7df'},
{from: 'e52762e7-5260-4d37-8aa3-436e8f7ae131', to: 'a147a40f-a1d7-4271-89cf-1c42384fb7df'},
{from: '864e257c-730f-4059-a2b4-662a37a9b554', to: 'a147a40f-a1d7-4271-89cf-1c42384fb7df'},
{from: '8029a31f-d380-48db-b598-89d06e4f467f', to: 'a147a40f-a1d7-4271-89cf-1c42384fb7df'}
                            ]);