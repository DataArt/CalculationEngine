var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'f5bdc72a-95ec-4ed8-b3ea-6f3764457eab', label: 'E5\nFALSE', color: '#31b0d5', title: 'Name: E5<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: f5bdc72a-95ec-4ed8-b3ea-6f3764457eab<br>Formula Expression: Formula String: EXACT(B2, A2); Formula Values: EXACT(56.0, 23.0); Formula Ptg: 56.0, 23.0 EXACT ; Ptgs: B2, A2 EXACT  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@66a74cba'},
{id: 'e8d25982-c594-42db-ba3c-29e0a2b2486b', label: 'B2\n56.0', color: '#31b0d5', title: 'Name: B2<br>Value: 56.0<br>Type: CELL_WITH_VALUE<br>Id: e8d25982-c594-42db-ba3c-29e0a2b2486b<br>Formula Expression: Formula String: B2; Formula Values: 56.0; Formula Ptg: 56.0; Ptgs: B2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@66a74cba'},
{id: '909f886d-3c38-47e7-9f75-34ebe22d51f8', label: 'EXACT\nFALSE', color: '#f0ad4e', title: 'Name: EXACT<br>Value: FALSE<br>Type: FUNCTION<br>Id: 909f886d-3c38-47e7-9f75-34ebe22d51f8<br>Formula Expression: Formula String: EXACT(B2, A2); Formula Values: EXACT(56.0, 23.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@66a74cba'},
{id: 'f3f8d998-7981-4ba4-91bd-631b2737c242', label: 'E6\nTRUE', color: '#31b0d5', title: 'Name: E6<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: f3f8d998-7981-4ba4-91bd-631b2737c242<br>Formula Expression: Formula String: EXACT(C3, C2); Formula Values: EXACT(76.0, 76.0); Formula Ptg: 76.0, 76.0 EXACT ; Ptgs: C3, C2 EXACT  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@66a74cba'},
{id: '8c993760-307d-48a6-9688-ae1c3c1e8f22', label: 'C2\n76.0', color: '#31b0d5', title: 'Name: C2<br>Value: 76.0<br>Type: CELL_WITH_VALUE<br>Id: 8c993760-307d-48a6-9688-ae1c3c1e8f22<br>Formula Expression: Formula String: C2; Formula Values: 76.0; Formula Ptg: 76.0; Ptgs: C2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@66a74cba'},
{id: '60639458-7918-4c6b-89cc-db8db19e8e74', label: 'C3\n76.0', color: '#31b0d5', title: 'Name: C3<br>Value: 76.0<br>Type: CELL_WITH_VALUE<br>Id: 60639458-7918-4c6b-89cc-db8db19e8e74<br>Formula Expression: Formula String: C3; Formula Values: 76.0; Formula Ptg: 76.0; Ptgs: C3 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@66a74cba'},
{id: 'b768cfc8-9971-4f34-8f50-5ec8dba774c7', label: 'EXACT\nTRUE', color: '#f0ad4e', title: 'Name: EXACT<br>Value: TRUE<br>Type: FUNCTION<br>Id: b768cfc8-9971-4f34-8f50-5ec8dba774c7<br>Formula Expression: Formula String: EXACT(C3, C2); Formula Values: EXACT(76.0, 76.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@66a74cba'},
{id: 'fe18d1c1-0463-4b39-bdda-d6f2b2a0c412', label: 'A2\n23.0', color: '#31b0d5', title: 'Name: A2<br>Value: 23.0<br>Type: CELL_WITH_VALUE<br>Id: fe18d1c1-0463-4b39-bdda-d6f2b2a0c412<br>Formula Expression: Formula String: A2; Formula Values: 23.0; Formula Ptg: 23.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@66a74cba'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'e8d25982-c594-42db-ba3c-29e0a2b2486b', to: '909f886d-3c38-47e7-9f75-34ebe22d51f8'},
{from: '60639458-7918-4c6b-89cc-db8db19e8e74', to: 'b768cfc8-9971-4f34-8f50-5ec8dba774c7'},
{from: 'fe18d1c1-0463-4b39-bdda-d6f2b2a0c412', to: '909f886d-3c38-47e7-9f75-34ebe22d51f8'},
{from: '8c993760-307d-48a6-9688-ae1c3c1e8f22', to: 'b768cfc8-9971-4f34-8f50-5ec8dba774c7'},
{from: 'b768cfc8-9971-4f34-8f50-5ec8dba774c7', to: 'f3f8d998-7981-4ba4-91bd-631b2737c242'},
{from: '909f886d-3c38-47e7-9f75-34ebe22d51f8', to: 'f5bdc72a-95ec-4ed8-b3ea-6f3764457eab'}
                            ]);