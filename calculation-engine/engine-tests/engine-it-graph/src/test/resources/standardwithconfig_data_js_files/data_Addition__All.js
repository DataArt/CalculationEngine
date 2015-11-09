var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'c50b83fc-72e8-4b9d-93d1-4c48bd1bc32b', label: '+\n50.0', color: '#f0ad4e', title: 'Name: +<br>Value: 50.0<br>Type: OPERATOR<br>Id: c50b83fc-72e8-4b9d-93d1-4c48bd1bc32b<br>Formula Expression: Formula String: A1 + A2; Formula Values: 20.0 + 30.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4a561f7d'},
{id: '2962072e-f9ca-4804-b7ab-d9d60fbb836b', label: 'A3\n50.0', color: '#31b0d5', title: 'Name: A3<br>Value: 50.0<br>Type: CELL_WITH_FORMULA<br>Id: 2962072e-f9ca-4804-b7ab-d9d60fbb836b<br>Formula Expression: Formula String: A1 + A2; Formula Values: 20.0 + 30.0; Formula Ptg: 20.0 30.0 +; Ptgs: A1 A2 + Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4a561f7d'},
{id: 'df82bd2f-c1e2-4025-b071-31e2d726f439', label: 'A2\n30.0', color: '#31b0d5', title: 'Name: A2<br>Value: 30.0<br>Type: CELL_WITH_VALUE<br>Id: df82bd2f-c1e2-4025-b071-31e2d726f439<br>Formula Expression: Formula String: A2; Formula Values: 30.0; Formula Ptg: 30.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4a561f7d'},
{id: 'b8d86b6c-44b2-4715-b2fa-cc6ce3063e58', label: 'A1\n20.0', color: '#31b0d5', title: 'Name: A1<br>Value: 20.0<br>Type: CELL_WITH_VALUE<br>Id: b8d86b6c-44b2-4715-b2fa-cc6ce3063e58<br>Formula Expression: Formula String: A1; Formula Values: 20.0; Formula Ptg: 20.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4a561f7d'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'b8d86b6c-44b2-4715-b2fa-cc6ce3063e58', to: 'c50b83fc-72e8-4b9d-93d1-4c48bd1bc32b'},
{from: 'df82bd2f-c1e2-4025-b071-31e2d726f439', to: 'c50b83fc-72e8-4b9d-93d1-4c48bd1bc32b'},
{from: 'c50b83fc-72e8-4b9d-93d1-4c48bd1bc32b', to: '2962072e-f9ca-4804-b7ab-d9d60fbb836b'}
                            ]);