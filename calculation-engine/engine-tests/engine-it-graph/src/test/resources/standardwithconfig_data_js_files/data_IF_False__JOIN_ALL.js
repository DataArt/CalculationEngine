var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '2e35f53f-723b-4d49-ae08-6379e8bfa0cf', label: 'E6\n8.0', color: '#31b0d5', title: 'Name: E6<br>Value: 8.0<br>Type: CELL_WITH_FORMULA<br>Id: 2e35f53f-723b-4d49-ae08-6379e8bfa0cf<br>Formula Expression: Formula String: IF(D1>5,D2,C3); Formula Values: IF(4.0 > 5.0, 8.0); Formula Ptg: 8.0, 4.0 5.0 > IF ; Ptgs: C3, D1 VALUE > IF  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@21d5c1a0'},
{id: 'fc06a71f-64b2-48b7-a514-51f12dd90d9d', label: 'VALUE\n5.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 5.0<br>Type: CONSTANT_VALUE<br>Id: fc06a71f-64b2-48b7-a514-51f12dd90d9d<br>Formula Expression: Formula String: VALUE; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@21d5c1a0'},
{id: '38f69b7e-8814-4758-a160-f91a1471c879', label: 'IF\n8.0', color: '#f0ad4e', title: 'Name: IF<br>Value: 8.0<br>Type: IF<br>Id: 38f69b7e-8814-4758-a160-f91a1471c879<br>Formula Expression: Formula String: IF(D1>5,D2,C3); Formula Values: IF(4.0 > 5.0, 8.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@21d5c1a0'},
{id: 'f4d55bef-c8e1-4e29-a35f-514886eda14b', label: 'C3\n8.0', color: '#31b0d5', title: 'Name: C3<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: f4d55bef-c8e1-4e29-a35f-514886eda14b<br>Formula Expression: Formula String: C3; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: C3 Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@21d5c1a0'},
{id: '1f39f0e7-f220-4ed5-a387-0294dea9d9b1', label: 'D1\n4.0', color: '#31b0d5', title: 'Name: D1<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 1f39f0e7-f220-4ed5-a387-0294dea9d9b1<br>Formula Expression: Formula String: D1; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@21d5c1a0'},
{id: 'd23e518e-0058-40d3-a44a-2cbfcd8b5c16', label: '>\nFALSE', color: '#f0ad4e', title: 'Name: ><br>Value: FALSE<br>Type: OPERATOR<br>Id: d23e518e-0058-40d3-a44a-2cbfcd8b5c16<br>Formula Expression: Formula String: D1 > VALUE; Formula Values: 4.0 > 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@21d5c1a0'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'fc06a71f-64b2-48b7-a514-51f12dd90d9d', to: 'd23e518e-0058-40d3-a44a-2cbfcd8b5c16'},
{from: 'd23e518e-0058-40d3-a44a-2cbfcd8b5c16', to: '38f69b7e-8814-4758-a160-f91a1471c879'},
{from: '38f69b7e-8814-4758-a160-f91a1471c879', to: '2e35f53f-723b-4d49-ae08-6379e8bfa0cf'},
{from: 'f4d55bef-c8e1-4e29-a35f-514886eda14b', to: '38f69b7e-8814-4758-a160-f91a1471c879'},
{from: '1f39f0e7-f220-4ed5-a387-0294dea9d9b1', to: 'd23e518e-0058-40d3-a44a-2cbfcd8b5c16'}
                            ]);