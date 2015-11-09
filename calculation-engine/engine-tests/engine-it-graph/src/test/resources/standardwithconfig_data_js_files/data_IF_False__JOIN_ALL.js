var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '4721c412-a939-4339-bd0d-d919ded870ab', label: 'E6\n8.0', color: '#31b0d5', title: 'Name: E6<br>Value: 8.0<br>Type: CELL_WITH_FORMULA<br>Id: 4721c412-a939-4339-bd0d-d919ded870ab<br>Formula Expression: Formula String: IF(D1>5,D2,C3); Formula Values: IF(4.0 > 5.0, 8.0); Formula Ptg: 8.0, 4.0 5.0 > IF ; Ptgs: C3, D1 VALUE > IF  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@21d5c1a0'},
{id: '00f1a804-ee69-483b-92c6-270b0067f2ba', label: 'VALUE\n5.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 5.0<br>Type: CONSTANT_VALUE<br>Id: 00f1a804-ee69-483b-92c6-270b0067f2ba<br>Formula Expression: Formula String: VALUE; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@21d5c1a0'},
{id: 'c03f6cd4-9153-468a-912f-03247748254a', label: 'IF\n8.0', color: '#f0ad4e', title: 'Name: IF<br>Value: 8.0<br>Type: IF<br>Id: c03f6cd4-9153-468a-912f-03247748254a<br>Formula Expression: Formula String: IF(D1>5,D2,C3); Formula Values: IF(4.0 > 5.0, 8.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@21d5c1a0'},
{id: '90fb80be-0848-41a2-8ab7-e653596e47af', label: 'C3\n8.0', color: '#31b0d5', title: 'Name: C3<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 90fb80be-0848-41a2-8ab7-e653596e47af<br>Formula Expression: Formula String: C3; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: C3 Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@21d5c1a0'},
{id: '4d7c15fb-43ba-4418-a611-5060460e5bd0', label: 'D1\n4.0', color: '#31b0d5', title: 'Name: D1<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 4d7c15fb-43ba-4418-a611-5060460e5bd0<br>Formula Expression: Formula String: D1; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@21d5c1a0'},
{id: '7ff9bc38-96bf-487e-bd3c-558779b6fa8e', label: '>\nFALSE', color: '#f0ad4e', title: 'Name: ><br>Value: FALSE<br>Type: OPERATOR<br>Id: 7ff9bc38-96bf-487e-bd3c-558779b6fa8e<br>Formula Expression: Formula String: D1 > VALUE; Formula Values: 4.0 > 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@21d5c1a0'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '00f1a804-ee69-483b-92c6-270b0067f2ba', to: '7ff9bc38-96bf-487e-bd3c-558779b6fa8e'},
{from: '7ff9bc38-96bf-487e-bd3c-558779b6fa8e', to: 'c03f6cd4-9153-468a-912f-03247748254a'},
{from: 'c03f6cd4-9153-468a-912f-03247748254a', to: '4721c412-a939-4339-bd0d-d919ded870ab'},
{from: '90fb80be-0848-41a2-8ab7-e653596e47af', to: 'c03f6cd4-9153-468a-912f-03247748254a'},
{from: '4d7c15fb-43ba-4418-a611-5060460e5bd0', to: '7ff9bc38-96bf-487e-bd3c-558779b6fa8e'}
                            ]);