var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'feeff6b2-f83b-4c0b-bb3b-c90e8c657437', label: 'B2\n240.0', color: '#31b0d5', title: 'Name: B2<br>Value: 240.0<br>Type: CELL_WITH_VALUE<br>Id: feeff6b2-f83b-4c0b-bb3b-c90e8c657437<br>Formula Expression: Formula String: B2; Formula Values: 240.0; Formula Ptg: 240.0; Ptgs: B2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7748410a'},
{id: 'e532d8f0-9f8e-49df-89cd-49a164d5ad76', label: 'D2\n790.0', color: '#31b0d5', title: 'Name: D2<br>Value: 790.0<br>Type: CELL_WITH_FORMULA<br>Id: e532d8f0-9f8e-49df-89cd-49a164d5ad76<br>Formula Expression: Formula String: A2 + B2 + C2; Formula Values: 250.0 + 240.0 + 300.0; Formula Ptg: 250.0 240.0 + 300.0 +; Ptgs: A2 B2 + C2 + Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7748410a'},
{id: 'fd4708b0-5863-4eb3-b143-da14d1998c8a', label: 'DEFINE\nDEFINE', color: '#f0ad4e', title: 'Name: DEFINE<br>Value: DEFINE<br>Type: FUNCTION<br>Id: fd4708b0-5863-4eb3-b143-da14d1998c8a<br>Formula Expression: Formula String: DEFINE(A2 + B2 + C2, VALUE, C2, B2, A2, VALUE); Formula Values: DEFINE(250.0 + 240.0 + 300.0, #, 300.0, 240.0, 250.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7748410a'},
{id: 'c0bff334-aed1-4a02-8c6f-8006e9cf3caa', label: '+\n490.0', color: '#f0ad4e', title: 'Name: +<br>Value: 490.0<br>Type: OPERATOR<br>Id: c0bff334-aed1-4a02-8c6f-8006e9cf3caa<br>Formula Expression: Formula String: A2 + B2; Formula Values: 250.0 + 240.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7748410a'},
{id: 'b5bdb0df-2ff3-4869-a68a-7373cd146ba2', label: 'A2\n250.0', color: '#31b0d5', title: 'Name: A2<br>Value: 250.0<br>Type: CELL_WITH_VALUE<br>Id: b5bdb0df-2ff3-4869-a68a-7373cd146ba2<br>Formula Expression: Formula String: A2; Formula Values: 250.0; Formula Ptg: 250.0; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7748410a'},
{id: '88a3385f-5acc-4407-903e-40aabe79495f', label: 'C2\n300.0', color: '#31b0d5', title: 'Name: C2<br>Value: 300.0<br>Type: CELL_WITH_VALUE<br>Id: 88a3385f-5acc-4407-903e-40aabe79495f<br>Formula Expression: Formula String: C2; Formula Values: 300.0; Formula Ptg: 300.0; Ptgs: C2 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7748410a'},
{id: 'dcc999c7-f07a-458e-82d4-509a9a94fea8', label: '+\n790.0', color: '#f0ad4e', title: 'Name: +<br>Value: 790.0<br>Type: OPERATOR<br>Id: dcc999c7-f07a-458e-82d4-509a9a94fea8<br>Formula Expression: Formula String: A2 + B2 + C2; Formula Values: 250.0 + 240.0 + 300.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7748410a'},
{id: 'aa4d950d-ffcf-4252-bf16-d89279e26b71', label: 'D3\nDEFINE', color: '#31b0d5', title: 'Name: D3<br>Value: DEFINE<br>Type: CELL_WITH_FORMULA<br>Id: aa4d950d-ffcf-4252-bf16-d89279e26b71<br>Formula Expression: Formula String: DEFINE(A2 + B2 + C2, VALUE, C2, B2, A2, VALUE); Formula Values: DEFINE(250.0 + 240.0 + 300.0, #, 300.0, 240.0, 250.0, DEVDEF); Formula Ptg: 250.0 240.0 + 300.0 +, #, 300.0, 240.0, 250.0, DEVDEF DEFINE ; Ptgs: A2 B2 + C2 +, VALUE, C2, B2, A2, VALUE DEFINE  Index in Ptgs: 7 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7748410a'},
{id: 'e0a7d129-c456-4716-95cc-49bea5f63d0a', label: 'E3\n790.0', color: '#31b0d5', title: 'Name: E3<br>Value: 790.0<br>Type: CELL_WITH_FORMULA<br>Id: e0a7d129-c456-4716-95cc-49bea5f63d0a<br>Formula Expression: Formula String: FUNCEXEC(C2, B2, A2, VALUE); Formula Values: FUNCEXEC(300.0, 240.0, 250.0, DEVDEF); Formula Ptg: 300.0, 240.0, 250.0, DEVDEF FUNCEXEC ; Ptgs: C2, B2, A2, VALUE FUNCEXEC  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7748410a'},
{id: 'dafb5a1a-6593-4a97-a346-2a19aca59556', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: dafb5a1a-6593-4a97-a346-2a19aca59556<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7748410a'},
{id: 'ca64fd9d-6e0e-48aa-8d96-913c0e1620e8', label: 'FUNCEXEC\n790.0', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Value: 790.0<br>Type: FUNCTION<br>Id: ca64fd9d-6e0e-48aa-8d96-913c0e1620e8<br>Formula Expression: Formula String: FUNCEXEC(C2, B2, A2, VALUE); Formula Values: FUNCEXEC(300.0, 240.0, 250.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7748410a'},
{id: '1b3e51ec-b402-405f-b1eb-18fb48e07312', label: 'VALUE\n#', color: '#31b0d5', title: 'Name: VALUE<br>Value: #<br>Type: CONSTANT_VALUE<br>Id: 1b3e51ec-b402-405f-b1eb-18fb48e07312<br>Formula Expression: Formula String: VALUE; Formula Values: #; Formula Ptg: #; Ptgs: VALUE Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7748410a'},
{id: 'af70d8d4-ff63-4cc7-a595-3e6a8698da1b', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: af70d8d4-ff63-4cc7-a595-3e6a8698da1b<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7748410a'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1b3e51ec-b402-405f-b1eb-18fb48e07312', to: 'fd4708b0-5863-4eb3-b143-da14d1998c8a'},
{from: 'dcc999c7-f07a-458e-82d4-509a9a94fea8', to: 'e532d8f0-9f8e-49df-89cd-49a164d5ad76'},
{from: 'feeff6b2-f83b-4c0b-bb3b-c90e8c657437', to: 'c0bff334-aed1-4a02-8c6f-8006e9cf3caa'},
{from: 'ca64fd9d-6e0e-48aa-8d96-913c0e1620e8', to: 'e0a7d129-c456-4716-95cc-49bea5f63d0a'},
{from: 'feeff6b2-f83b-4c0b-bb3b-c90e8c657437', to: 'ca64fd9d-6e0e-48aa-8d96-913c0e1620e8'},
{from: 'af70d8d4-ff63-4cc7-a595-3e6a8698da1b', to: 'fd4708b0-5863-4eb3-b143-da14d1998c8a'},
{from: 'fd4708b0-5863-4eb3-b143-da14d1998c8a', to: 'aa4d950d-ffcf-4252-bf16-d89279e26b71'},
{from: '88a3385f-5acc-4407-903e-40aabe79495f', to: 'ca64fd9d-6e0e-48aa-8d96-913c0e1620e8'},
{from: 'b5bdb0df-2ff3-4869-a68a-7373cd146ba2', to: 'ca64fd9d-6e0e-48aa-8d96-913c0e1620e8'},
{from: '88a3385f-5acc-4407-903e-40aabe79495f', to: 'dcc999c7-f07a-458e-82d4-509a9a94fea8'},
{from: 'dafb5a1a-6593-4a97-a346-2a19aca59556', to: 'ca64fd9d-6e0e-48aa-8d96-913c0e1620e8'},
{from: '88a3385f-5acc-4407-903e-40aabe79495f', to: 'fd4708b0-5863-4eb3-b143-da14d1998c8a'},
{from: 'feeff6b2-f83b-4c0b-bb3b-c90e8c657437', to: 'fd4708b0-5863-4eb3-b143-da14d1998c8a'},
{from: 'b5bdb0df-2ff3-4869-a68a-7373cd146ba2', to: 'c0bff334-aed1-4a02-8c6f-8006e9cf3caa'},
{from: 'b5bdb0df-2ff3-4869-a68a-7373cd146ba2', to: 'fd4708b0-5863-4eb3-b143-da14d1998c8a'},
{from: 'e532d8f0-9f8e-49df-89cd-49a164d5ad76', to: 'fd4708b0-5863-4eb3-b143-da14d1998c8a'},
{from: 'c0bff334-aed1-4a02-8c6f-8006e9cf3caa', to: 'dcc999c7-f07a-458e-82d4-509a9a94fea8'}
                            ]);