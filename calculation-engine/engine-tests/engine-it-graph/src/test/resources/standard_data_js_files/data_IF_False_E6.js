var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '378b78b3-441b-4b01-895c-cb7825f68e88', label: '>\nFALSE', color: '#f0ad4e', title: 'Name: ><br>Value: FALSE<br>Type: OPERATOR<br>Id: 378b78b3-441b-4b01-895c-cb7825f68e88<br>Formula Expression: Formula String: D1 > VALUE; Formula Values: 4.0 > 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7b139eab'},
{id: '3e08487d-50bd-4b38-846b-ceb2b91188d5', label: 'E6\n8.0', color: '#31b0d5', title: 'Name: E6<br>Value: 8.0<br>Type: CELL_WITH_FORMULA<br>Id: 3e08487d-50bd-4b38-846b-ceb2b91188d5<br>Formula Expression: Formula String: IF(D1>5,D2,C3); Formula Values: IF(4.0 > 5.0, 8.0); Formula Ptg: 8.0, 4.0 5.0 > IF ; Ptgs: C3, D1 VALUE > IF  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7b139eab'},
{id: '2c110210-c0e3-4b8f-a04d-0d7eeb1209e7', label: 'IF\n8.0', color: '#f0ad4e', title: 'Name: IF<br>Value: 8.0<br>Type: IF<br>Id: 2c110210-c0e3-4b8f-a04d-0d7eeb1209e7<br>Formula Expression: Formula String: IF(D1>5,D2,C3); Formula Values: IF(4.0 > 5.0, 8.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7b139eab'},
{id: '0570b552-51f9-41fb-ba1e-f65e097da1ca', label: 'C3\n8.0', color: '#31b0d5', title: 'Name: C3<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 0570b552-51f9-41fb-ba1e-f65e097da1ca<br>Formula Expression: Formula String: C3; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: C3 Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7b139eab'},
{id: 'ad186b3a-4431-464a-9171-6633b24ed2d7', label: 'D1\n4.0', color: '#31b0d5', title: 'Name: D1<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: ad186b3a-4431-464a-9171-6633b24ed2d7<br>Formula Expression: Formula String: D1; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7b139eab'},
{id: 'e8c6f571-41be-4ff6-8284-7735638c1557', label: 'VALUE\n5.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 5.0<br>Type: CONSTANT_VALUE<br>Id: e8c6f571-41be-4ff6-8284-7735638c1557<br>Formula Expression: Formula String: VALUE; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7b139eab'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2c110210-c0e3-4b8f-a04d-0d7eeb1209e7', to: '3e08487d-50bd-4b38-846b-ceb2b91188d5'},
{from: 'e8c6f571-41be-4ff6-8284-7735638c1557', to: '378b78b3-441b-4b01-895c-cb7825f68e88'},
{from: 'ad186b3a-4431-464a-9171-6633b24ed2d7', to: '378b78b3-441b-4b01-895c-cb7825f68e88'},
{from: '0570b552-51f9-41fb-ba1e-f65e097da1ca', to: '2c110210-c0e3-4b8f-a04d-0d7eeb1209e7'},
{from: '378b78b3-441b-4b01-895c-cb7825f68e88', to: '2c110210-c0e3-4b8f-a04d-0d7eeb1209e7'}
                            ]);