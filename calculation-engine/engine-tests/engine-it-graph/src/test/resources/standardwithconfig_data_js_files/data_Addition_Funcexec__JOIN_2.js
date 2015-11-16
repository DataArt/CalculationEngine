var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '25677a96-317d-491d-827b-9a02180ba4ec', label: 'VALUE\n#', color: '#31b0d5', title: 'Name: VALUE<br>Value: #<br>Type: CONSTANT_VALUE<br>Id: 25677a96-317d-491d-827b-9a02180ba4ec<br>Formula Expression: Formula String: VALUE; Formula Values: #; Formula Ptg: #; Ptgs: VALUE Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@49cb1baf'},
{id: 'f2cbd44a-69d7-43f5-98c7-4e929565300c', label: 'E3\n790.0', color: '#31b0d5', title: 'Name: E3<br>Value: 790.0<br>Type: CELL_WITH_FORMULA<br>Id: f2cbd44a-69d7-43f5-98c7-4e929565300c<br>Formula Expression: Formula String: FUNCEXEC(C2, B2, A2, VALUE); Formula Values: FUNCEXEC(300.0, 240.0, 250.0, DEVDEF); Formula Ptg: 300.0, 240.0, 250.0, DEVDEF FUNCEXEC ; Ptgs: C2, B2, A2, VALUE FUNCEXEC  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@49cb1baf'},
{id: 'd719c3aa-fe0b-4aad-bcb4-c2cff28c0fa3', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: d719c3aa-fe0b-4aad-bcb4-c2cff28c0fa3<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@49cb1baf'},
{id: '55048ea9-78e3-4383-923a-8dd2ddd7a6eb', label: 'FUNCEXEC\n790.0', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Value: 790.0<br>Type: FUNCTION<br>Id: 55048ea9-78e3-4383-923a-8dd2ddd7a6eb<br>Formula Expression: Formula String: FUNCEXEC(C2, B2, A2, VALUE); Formula Values: FUNCEXEC(300.0, 240.0, 250.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@49cb1baf'},
{id: 'f5c8dd19-b31c-41d4-a337-a2ef4b74d8a1', label: 'B2\n240.0', color: '#31b0d5', title: 'Name: B2<br>Value: 240.0<br>Type: CELL_WITH_VALUE<br>Id: f5c8dd19-b31c-41d4-a337-a2ef4b74d8a1<br>Formula Expression: Formula String: B2; Formula Values: 240.0; Formula Ptg: 240.0; Ptgs: B2 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@49cb1baf'},
{id: '127e7971-cbd4-4eb6-9263-dfcceeb534e7', label: '+\n490.0', color: '#f0ad4e', title: 'Name: +<br>Value: 490.0<br>Type: OPERATOR<br>Id: 127e7971-cbd4-4eb6-9263-dfcceeb534e7<br>Formula Expression: Formula String: A2 + B2; Formula Values: 250.0 + 240.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@49cb1baf'},
{id: 'd273def0-8b5b-41f5-953f-e35c3501d70a', label: '+\n790.0', color: '#f0ad4e', title: 'Name: +<br>Value: 790.0<br>Type: OPERATOR<br>Id: d273def0-8b5b-41f5-953f-e35c3501d70a<br>Formula Expression: Formula String: A2 + B2 + C2; Formula Values: 250.0 + 240.0 + 300.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@49cb1baf'},
{id: 'a70a8201-e736-410e-8802-6c19653c6fb3', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: a70a8201-e736-410e-8802-6c19653c6fb3<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@49cb1baf'},
{id: '424bf338-4c3a-468a-bc5c-3a62c226ac03', label: 'A2\n250.0', color: '#31b0d5', title: 'Name: A2<br>Value: 250.0<br>Type: CELL_WITH_VALUE<br>Id: 424bf338-4c3a-468a-bc5c-3a62c226ac03<br>Formula Expression: Formula String: A2; Formula Values: 250.0; Formula Ptg: 250.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@49cb1baf'},
{id: 'afa27ae9-c689-490c-8345-0fe8ccac3e8f', label: 'D2\n790.0', color: '#31b0d5', title: 'Name: D2<br>Value: 790.0<br>Type: CELL_WITH_FORMULA<br>Id: afa27ae9-c689-490c-8345-0fe8ccac3e8f<br>Formula Expression: Formula String: A2 + B2 + C2; Formula Values: 250.0 + 240.0 + 300.0; Formula Ptg: 250.0 240.0 + 300.0 +; Ptgs: A2 B2 + C2 + Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@49cb1baf'},
{id: 'a202d45b-cc58-4d55-8d2f-1f33add549c7', label: 'C2\n300.0', color: '#31b0d5', title: 'Name: C2<br>Value: 300.0<br>Type: CELL_WITH_VALUE<br>Id: a202d45b-cc58-4d55-8d2f-1f33add549c7<br>Formula Expression: Formula String: C2; Formula Values: 300.0; Formula Ptg: 300.0; Ptgs: C2 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@49cb1baf'},
{id: 'fbcdd981-3cd0-4019-ba6d-33292ab0006b', label: 'D3\nDEFINE', color: '#31b0d5', title: 'Name: D3<br>Value: DEFINE<br>Type: CELL_WITH_FORMULA<br>Id: fbcdd981-3cd0-4019-ba6d-33292ab0006b<br>Formula Expression: Formula String: DEFINE(A2 + B2 + C2, VALUE, C2, B2, A2, VALUE); Formula Values: DEFINE(250.0 + 240.0 + 300.0, #, 300.0, 240.0, 250.0, DEVDEF); Formula Ptg: 250.0 240.0 + 300.0 +, #, 300.0, 240.0, 250.0, DEVDEF DEFINE ; Ptgs: A2 B2 + C2 +, VALUE, C2, B2, A2, VALUE DEFINE  Index in Ptgs: 7 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@49cb1baf'},
{id: '8615beda-e70a-4ffe-9b15-6e48ae4b17d6', label: 'DEFINE\nDEFINE', color: '#f0ad4e', title: 'Name: DEFINE<br>Value: DEFINE<br>Type: FUNCTION<br>Id: 8615beda-e70a-4ffe-9b15-6e48ae4b17d6<br>Formula Expression: Formula String: DEFINE(A2 + B2 + C2, VALUE, C2, B2, A2, VALUE); Formula Values: DEFINE(250.0 + 240.0 + 300.0, #, 300.0, 240.0, 250.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@49cb1baf'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'a202d45b-cc58-4d55-8d2f-1f33add549c7', to: '55048ea9-78e3-4383-923a-8dd2ddd7a6eb'},
{from: 'a202d45b-cc58-4d55-8d2f-1f33add549c7', to: 'd273def0-8b5b-41f5-953f-e35c3501d70a'},
{from: '25677a96-317d-491d-827b-9a02180ba4ec', to: '8615beda-e70a-4ffe-9b15-6e48ae4b17d6'},
{from: '127e7971-cbd4-4eb6-9263-dfcceeb534e7', to: 'd273def0-8b5b-41f5-953f-e35c3501d70a'},
{from: 'a70a8201-e736-410e-8802-6c19653c6fb3', to: '55048ea9-78e3-4383-923a-8dd2ddd7a6eb'},
{from: 'f5c8dd19-b31c-41d4-a337-a2ef4b74d8a1', to: '127e7971-cbd4-4eb6-9263-dfcceeb534e7'},
{from: '424bf338-4c3a-468a-bc5c-3a62c226ac03', to: '55048ea9-78e3-4383-923a-8dd2ddd7a6eb'},
{from: 'd719c3aa-fe0b-4aad-bcb4-c2cff28c0fa3', to: '8615beda-e70a-4ffe-9b15-6e48ae4b17d6'},
{from: 'afa27ae9-c689-490c-8345-0fe8ccac3e8f', to: '8615beda-e70a-4ffe-9b15-6e48ae4b17d6'},
{from: '8615beda-e70a-4ffe-9b15-6e48ae4b17d6', to: 'fbcdd981-3cd0-4019-ba6d-33292ab0006b'},
{from: '55048ea9-78e3-4383-923a-8dd2ddd7a6eb', to: 'f2cbd44a-69d7-43f5-98c7-4e929565300c'},
{from: 'f5c8dd19-b31c-41d4-a337-a2ef4b74d8a1', to: '55048ea9-78e3-4383-923a-8dd2ddd7a6eb'},
{from: '424bf338-4c3a-468a-bc5c-3a62c226ac03', to: '8615beda-e70a-4ffe-9b15-6e48ae4b17d6'},
{from: 'd273def0-8b5b-41f5-953f-e35c3501d70a', to: 'afa27ae9-c689-490c-8345-0fe8ccac3e8f'},
{from: 'f5c8dd19-b31c-41d4-a337-a2ef4b74d8a1', to: '8615beda-e70a-4ffe-9b15-6e48ae4b17d6'},
{from: '424bf338-4c3a-468a-bc5c-3a62c226ac03', to: '127e7971-cbd4-4eb6-9263-dfcceeb534e7'},
{from: 'a202d45b-cc58-4d55-8d2f-1f33add549c7', to: '8615beda-e70a-4ffe-9b15-6e48ae4b17d6'}
                            ]);