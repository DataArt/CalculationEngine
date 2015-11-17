var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'cffbb554-7180-4f44-8f28-c91ad3faacea', label: 'VALUE\n#', color: '#31b0d5', title: 'Name: VALUE<br>Value: #<br>Type: CONSTANT_VALUE<br>Id: cffbb554-7180-4f44-8f28-c91ad3faacea<br>Formula Expression: Formula String: VALUE; Formula Values: #; Formula Ptg: #; Ptgs: VALUE Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f315b08'},
{id: 'e8331931-9016-4c6c-bc3b-5af1e50e2803', label: 'A2\n250.0', color: '#31b0d5', title: 'Name: A2<br>Value: 250.0<br>Type: CELL_WITH_VALUE<br>Id: e8331931-9016-4c6c-bc3b-5af1e50e2803<br>Formula Expression: Formula String: A2; Formula Values: 250.0; Formula Ptg: 250.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f315b08'},
{id: 'ad671ae7-b68c-4e76-b0c6-5ef66fd28eab', label: '-\n10.0', color: '#f0ad4e', title: 'Name: -<br>Value: 10.0<br>Type: OPERATOR<br>Id: ad671ae7-b68c-4e76-b0c6-5ef66fd28eab<br>Formula Expression: Formula String: A2 - B2; Formula Values: 250.0 - 240.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f315b08'},
{id: 'c33ca177-63f1-4656-b043-5cf5e8a4d17e', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: c33ca177-63f1-4656-b043-5cf5e8a4d17e<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f315b08'},
{id: 'afea4fdd-2ef4-40d4-ae8f-dbf5338d69b3', label: 'E3\n-290.0', color: '#31b0d5', title: 'Name: E3<br>Value: -290.0<br>Type: CELL_WITH_FORMULA<br>Id: afea4fdd-2ef4-40d4-ae8f-dbf5338d69b3<br>Formula Expression: Formula String: FUNCEXEC(C2, B2, A2, VALUE); Formula Values: FUNCEXEC(300.0, 240.0, 250.0, DEVDEF); Formula Ptg: 300.0, 240.0, 250.0, DEVDEF FUNCEXEC ; Ptgs: C2, B2, A2, VALUE FUNCEXEC  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f315b08'},
{id: '3143d868-489a-432a-8351-9588f8418f68', label: 'C2\n300.0', color: '#31b0d5', title: 'Name: C2<br>Value: 300.0<br>Type: CELL_WITH_VALUE<br>Id: 3143d868-489a-432a-8351-9588f8418f68<br>Formula Expression: Formula String: C2; Formula Values: 300.0; Formula Ptg: 300.0; Ptgs: C2 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f315b08'},
{id: '6bfc1814-da79-4c28-8b80-a099c0f69369', label: '-\n-290.0', color: '#f0ad4e', title: 'Name: -<br>Value: -290.0<br>Type: OPERATOR<br>Id: 6bfc1814-da79-4c28-8b80-a099c0f69369<br>Formula Expression: Formula String: A2 - B2 - C2; Formula Values: 250.0 - 240.0 - 300.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f315b08'},
{id: '3f486e57-9b19-429a-88e2-834e99a00e47', label: 'B2\n240.0', color: '#31b0d5', title: 'Name: B2<br>Value: 240.0<br>Type: CELL_WITH_VALUE<br>Id: 3f486e57-9b19-429a-88e2-834e99a00e47<br>Formula Expression: Formula String: B2; Formula Values: 240.0; Formula Ptg: 240.0; Ptgs: B2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f315b08'},
{id: 'c5faad62-bc78-4839-96d4-03118d89bf1b', label: 'FUNCEXEC\n-290.0', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Value: -290.0<br>Type: FUNCTION<br>Id: c5faad62-bc78-4839-96d4-03118d89bf1b<br>Formula Expression: Formula String: FUNCEXEC(C2, B2, A2, VALUE); Formula Values: FUNCEXEC(300.0, 240.0, 250.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f315b08'},
{id: '8e806b5a-c9ec-4523-ab6b-3bdd0ab7cd1a', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 8e806b5a-c9ec-4523-ab6b-3bdd0ab7cd1a<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f315b08'},
{id: 'c5a3b0b0-ede1-48fc-b897-0abeb78f0a5d', label: 'DEFINE\nDEFINE', color: '#f0ad4e', title: 'Name: DEFINE<br>Value: DEFINE<br>Type: FUNCTION<br>Id: c5a3b0b0-ede1-48fc-b897-0abeb78f0a5d<br>Formula Expression: Formula String: DEFINE(A2 - B2 - C2, VALUE, C2, B2, A2, VALUE); Formula Values: DEFINE(250.0 - 240.0 - 300.0, #, 300.0, 240.0, 250.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f315b08'},
{id: '2ac7ce2d-648f-4af4-878c-92801c0af880', label: 'D2\n-290.0', color: '#31b0d5', title: 'Name: D2<br>Value: -290.0<br>Type: CELL_WITH_FORMULA<br>Id: 2ac7ce2d-648f-4af4-878c-92801c0af880<br>Formula Expression: Formula String: A2 - B2 - C2; Formula Values: 250.0 - 240.0 - 300.0; Formula Ptg: 250.0 240.0 - 300.0 -; Ptgs: A2 B2 - C2 - Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f315b08'},
{id: '579283d0-6a41-4a8a-83a8-5b885c682741', label: 'D3\nDEFINE', color: '#31b0d5', title: 'Name: D3<br>Value: DEFINE<br>Type: CELL_WITH_FORMULA<br>Id: 579283d0-6a41-4a8a-83a8-5b885c682741<br>Formula Expression: Formula String: DEFINE(A2 - B2 - C2, VALUE, C2, B2, A2, VALUE); Formula Values: DEFINE(250.0 - 240.0 - 300.0, #, 300.0, 240.0, 250.0, DEVDEF); Formula Ptg: 250.0 240.0 - 300.0 -, #, 300.0, 240.0, 250.0, DEVDEF DEFINE ; Ptgs: A2 B2 - C2 -, VALUE, C2, B2, A2, VALUE DEFINE  Index in Ptgs: 7 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f315b08'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'c5faad62-bc78-4839-96d4-03118d89bf1b', to: 'afea4fdd-2ef4-40d4-ae8f-dbf5338d69b3'},
{from: '3f486e57-9b19-429a-88e2-834e99a00e47', to: 'ad671ae7-b68c-4e76-b0c6-5ef66fd28eab'},
{from: '3f486e57-9b19-429a-88e2-834e99a00e47', to: 'c5a3b0b0-ede1-48fc-b897-0abeb78f0a5d'},
{from: '8e806b5a-c9ec-4523-ab6b-3bdd0ab7cd1a', to: 'c5a3b0b0-ede1-48fc-b897-0abeb78f0a5d'},
{from: '6bfc1814-da79-4c28-8b80-a099c0f69369', to: '2ac7ce2d-648f-4af4-878c-92801c0af880'},
{from: '2ac7ce2d-648f-4af4-878c-92801c0af880', to: 'c5a3b0b0-ede1-48fc-b897-0abeb78f0a5d'},
{from: 'e8331931-9016-4c6c-bc3b-5af1e50e2803', to: 'c5a3b0b0-ede1-48fc-b897-0abeb78f0a5d'},
{from: '3143d868-489a-432a-8351-9588f8418f68', to: '6bfc1814-da79-4c28-8b80-a099c0f69369'},
{from: 'e8331931-9016-4c6c-bc3b-5af1e50e2803', to: 'ad671ae7-b68c-4e76-b0c6-5ef66fd28eab'},
{from: 'e8331931-9016-4c6c-bc3b-5af1e50e2803', to: 'c5faad62-bc78-4839-96d4-03118d89bf1b'},
{from: '3143d868-489a-432a-8351-9588f8418f68', to: 'c5faad62-bc78-4839-96d4-03118d89bf1b'},
{from: '3f486e57-9b19-429a-88e2-834e99a00e47', to: 'c5faad62-bc78-4839-96d4-03118d89bf1b'},
{from: 'ad671ae7-b68c-4e76-b0c6-5ef66fd28eab', to: '6bfc1814-da79-4c28-8b80-a099c0f69369'},
{from: '3143d868-489a-432a-8351-9588f8418f68', to: 'c5a3b0b0-ede1-48fc-b897-0abeb78f0a5d'},
{from: 'c33ca177-63f1-4656-b043-5cf5e8a4d17e', to: 'c5faad62-bc78-4839-96d4-03118d89bf1b'},
{from: 'cffbb554-7180-4f44-8f28-c91ad3faacea', to: 'c5a3b0b0-ede1-48fc-b897-0abeb78f0a5d'},
{from: 'c5a3b0b0-ede1-48fc-b897-0abeb78f0a5d', to: '579283d0-6a41-4a8a-83a8-5b885c682741'}
                            ]);