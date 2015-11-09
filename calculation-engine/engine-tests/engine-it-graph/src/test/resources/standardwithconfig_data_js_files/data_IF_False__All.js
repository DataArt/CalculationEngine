var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'fcdb7cab-0463-40a1-8fb6-767220a568ce', label: 'E6\n8.0', color: '#31b0d5', title: 'Name: E6<br>Value: 8.0<br>Type: CELL_WITH_FORMULA<br>Id: fcdb7cab-0463-40a1-8fb6-767220a568ce<br>Formula Expression: Formula String: IF(D1>5,D2,C3); Formula Values: IF(4.0 > 5.0, 8.0); Formula Ptg: 8.0, 4.0 5.0 > IF ; Ptgs: C3, D1 VALUE > IF  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@71cdde0c'},
{id: '305f0b60-e75a-40f7-96ce-d83c683fd8ec', label: 'IF\n8.0', color: '#f0ad4e', title: 'Name: IF<br>Value: 8.0<br>Type: IF<br>Id: 305f0b60-e75a-40f7-96ce-d83c683fd8ec<br>Formula Expression: Formula String: IF(D1>5,D2,C3); Formula Values: IF(4.0 > 5.0, 8.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@71cdde0c'},
{id: '6baf07ee-b0bf-4fef-90ff-69193675776e', label: '>\nFALSE', color: '#f0ad4e', title: 'Name: ><br>Value: FALSE<br>Type: OPERATOR<br>Id: 6baf07ee-b0bf-4fef-90ff-69193675776e<br>Formula Expression: Formula String: D1 > VALUE; Formula Values: 4.0 > 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@71cdde0c'},
{id: '37ea8d67-543e-4b07-9fe7-cb284e2e58b2', label: 'VALUE\n5.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 5.0<br>Type: CONSTANT_VALUE<br>Id: 37ea8d67-543e-4b07-9fe7-cb284e2e58b2<br>Formula Expression: Formula String: VALUE; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@71cdde0c'},
{id: 'ed6849d0-d31d-456f-b7ad-f8e3c66a9611', label: 'C3\n8.0', color: '#31b0d5', title: 'Name: C3<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: ed6849d0-d31d-456f-b7ad-f8e3c66a9611<br>Formula Expression: Formula String: C3; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: C3 Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@71cdde0c'},
{id: '2231f190-44d8-4ccc-8fbb-6574018467ac', label: 'D1\n4.0', color: '#31b0d5', title: 'Name: D1<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 2231f190-44d8-4ccc-8fbb-6574018467ac<br>Formula Expression: Formula String: D1; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@71cdde0c'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '6baf07ee-b0bf-4fef-90ff-69193675776e', to: '305f0b60-e75a-40f7-96ce-d83c683fd8ec'},
{from: '2231f190-44d8-4ccc-8fbb-6574018467ac', to: '6baf07ee-b0bf-4fef-90ff-69193675776e'},
{from: '37ea8d67-543e-4b07-9fe7-cb284e2e58b2', to: '6baf07ee-b0bf-4fef-90ff-69193675776e'},
{from: 'ed6849d0-d31d-456f-b7ad-f8e3c66a9611', to: '305f0b60-e75a-40f7-96ce-d83c683fd8ec'},
{from: '305f0b60-e75a-40f7-96ce-d83c683fd8ec', to: 'fcdb7cab-0463-40a1-8fb6-767220a568ce'}
                            ]);