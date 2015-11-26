var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '94a280e4-9b43-4080-bbd4-3f4c1d210561', label: 'IF\n65.0', color: '#f0ad4e', title: 'Name: IF<br>Alias: null<br>Value: 65.0<br>Type: IF<br>Id: 94a280e4-9b43-4080-bbd4-3f4c1d210561<br>Formula Expression: Formula String: IF(D1<5,D2,C3); Formula Values: IF(4.0 < 5.0, 65.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3ebff828'},
{id: 'de5e648b-b327-488b-bee6-004c8708a540', label: 'D2\n65.0', color: '#31b0d5', title: 'Name: D2<br>Alias: null<br>Value: 65.0<br>Type: CELL_WITH_VALUE<br>Id: de5e648b-b327-488b-bee6-004c8708a540<br>Formula Expression: Formula String: D2; Formula Values: 65.0; Formula Ptg: 65.0; Ptgs: D2 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3ebff828'},
{id: '56db3c84-51b4-46a5-81c0-ad6aaefcb866', label: 'D1\n4.0', color: '#31b0d5', title: 'Name: D1<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 56db3c84-51b4-46a5-81c0-ad6aaefcb866<br>Formula Expression: Formula String: D1; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3ebff828'},
{id: '45979d2c-cce3-4d46-8356-b09cd735fe81', label: 'E6\n65.0', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: 65.0<br>Type: CELL_WITH_FORMULA<br>Id: 45979d2c-cce3-4d46-8356-b09cd735fe81<br>Formula Expression: Formula String: IF(D1<5,D2,C3); Formula Values: IF(4.0 < 5.0, 65.0); Formula Ptg: 65.0, 4.0 5.0 < IF ; Ptgs: D2, D1 VALUE < IF  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3ebff828'},
{id: '92296916-b097-439a-9880-c3b13e65eea3', label: '<\nTRUE', color: '#f0ad4e', title: 'Name: <<br>Alias: null<br>Value: TRUE<br>Type: OPERATOR<br>Id: 92296916-b097-439a-9880-c3b13e65eea3<br>Formula Expression: Formula String: D1 < VALUE; Formula Values: 4.0 < 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3ebff828'},
{id: 'e714d138-1286-43e3-8157-c21eb87c150d', label: 'VALUE\n5.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 5.0<br>Type: CONSTANT_VALUE<br>Id: e714d138-1286-43e3-8157-c21eb87c150d<br>Formula Expression: Formula String: VALUE; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3ebff828'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'de5e648b-b327-488b-bee6-004c8708a540', to: '94a280e4-9b43-4080-bbd4-3f4c1d210561'},
{from: 'e714d138-1286-43e3-8157-c21eb87c150d', to: '92296916-b097-439a-9880-c3b13e65eea3'},
{from: '56db3c84-51b4-46a5-81c0-ad6aaefcb866', to: '92296916-b097-439a-9880-c3b13e65eea3'},
{from: '92296916-b097-439a-9880-c3b13e65eea3', to: '94a280e4-9b43-4080-bbd4-3f4c1d210561'},
{from: '94a280e4-9b43-4080-bbd4-3f4c1d210561', to: '45979d2c-cce3-4d46-8356-b09cd735fe81'}
                            ]);