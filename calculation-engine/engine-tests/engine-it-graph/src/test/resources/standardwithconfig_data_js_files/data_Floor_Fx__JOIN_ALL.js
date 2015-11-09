var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '1464bd30-9c27-468e-90a8-7039498977e6', label: 'FLOOR\n2.0', color: '#f0ad4e', title: 'Name: FLOOR<br>Value: 2.0<br>Type: FUNCTION<br>Id: 1464bd30-9c27-468e-90a8-7039498977e6<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(2.0, 3.7); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@336365bc'},
{id: 'd9bfb08f-66a8-424a-82ac-3586f602e9e8', label: 'A1\n2.0', color: '#31b0d5', title: 'Name: A1<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: d9bfb08f-66a8-424a-82ac-3586f602e9e8<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(2.0, 3.7); Formula Ptg: 2.0, 3.7 FLOOR ; Ptgs: VALUE, VALUE FLOOR  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@336365bc'},
{id: '83f551b7-54b7-4b92-88a0-a80ff21b188c', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 83f551b7-54b7-4b92-88a0-a80ff21b188c<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@336365bc'},
{id: 'e0c91080-5958-4ba6-9311-2340fa4d06d5', label: 'VALUE\n32.5678', color: '#31b0d5', title: 'Name: VALUE<br>Value: 32.5678<br>Type: CONSTANT_VALUE<br>Id: e0c91080-5958-4ba6-9311-2340fa4d06d5<br>Formula Expression: Formula String: VALUE; Formula Values: 32.5678; Formula Ptg: 32.5678; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@336365bc'},
{id: '782faa05-e9cf-4bde-b373-7874cdf572c3', label: 'B2\n30.0', color: '#31b0d5', title: 'Name: B2<br>Value: 30.0<br>Type: CELL_WITH_FORMULA<br>Id: 782faa05-e9cf-4bde-b373-7874cdf572c3<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(3.0, 32.5678); Formula Ptg: 3.0, 32.5678 FLOOR ; Ptgs: VALUE, VALUE FLOOR  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@336365bc'},
{id: '6b4c66c1-f5a7-4b85-946f-d740568292e4', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 6b4c66c1-f5a7-4b85-946f-d740568292e4<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@336365bc'},
{id: '6728d023-3476-49dc-a02f-1feefc86ed57', label: 'FLOOR\n30.0', color: '#f0ad4e', title: 'Name: FLOOR<br>Value: 30.0<br>Type: FUNCTION<br>Id: 6728d023-3476-49dc-a02f-1feefc86ed57<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(3.0, 32.5678); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@336365bc'},
{id: '80e3bfaf-a04d-4805-9b4a-3f2632a57fb1', label: 'VALUE\n3.7', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.7<br>Type: CONSTANT_VALUE<br>Id: 80e3bfaf-a04d-4805-9b4a-3f2632a57fb1<br>Formula Expression: Formula String: VALUE; Formula Values: 3.7; Formula Ptg: 3.7; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@336365bc'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'e0c91080-5958-4ba6-9311-2340fa4d06d5', to: '6728d023-3476-49dc-a02f-1feefc86ed57'},
{from: '6728d023-3476-49dc-a02f-1feefc86ed57', to: '782faa05-e9cf-4bde-b373-7874cdf572c3'},
{from: '6b4c66c1-f5a7-4b85-946f-d740568292e4', to: '6728d023-3476-49dc-a02f-1feefc86ed57'},
{from: '83f551b7-54b7-4b92-88a0-a80ff21b188c', to: '1464bd30-9c27-468e-90a8-7039498977e6'},
{from: '80e3bfaf-a04d-4805-9b4a-3f2632a57fb1', to: '1464bd30-9c27-468e-90a8-7039498977e6'},
{from: '1464bd30-9c27-468e-90a8-7039498977e6', to: 'd9bfb08f-66a8-424a-82ac-3586f602e9e8'}
                            ]);