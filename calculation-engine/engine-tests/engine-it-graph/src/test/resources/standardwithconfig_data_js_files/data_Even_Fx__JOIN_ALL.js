var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '877768f8-e435-49d1-a79b-43af387b83ee', label: 'VALUE\n2.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.5<br>Type: CONSTANT_VALUE<br>Id: 877768f8-e435-49d1-a79b-43af387b83ee<br>Formula Expression: Formula String: VALUE; Formula Values: 2.5; Formula Ptg: 2.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@73877e19'},
{id: '189f1814-e2a3-4722-89f6-9fbb405d6c74', label: 'B2\n2.0', color: '#31b0d5', title: 'Name: B2<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: 189f1814-e2a3-4722-89f6-9fbb405d6c74<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(1.5); Formula Ptg: 1.5 EVEN ; Ptgs: VALUE EVEN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@73877e19'},
{id: '3c84eb18-b191-4c40-b816-21134f78dd9f', label: 'EVEN\n2.0', color: '#f0ad4e', title: 'Name: EVEN<br>Value: 2.0<br>Type: FUNCTION<br>Id: 3c84eb18-b191-4c40-b816-21134f78dd9f<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(1.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@73877e19'},
{id: '5d7086cc-1a7b-4a5d-8f86-7d0b72cbaafd', label: 'EVEN\n4.0', color: '#f0ad4e', title: 'Name: EVEN<br>Value: 4.0<br>Type: FUNCTION<br>Id: 5d7086cc-1a7b-4a5d-8f86-7d0b72cbaafd<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(2.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@73877e19'},
{id: 'd5f45ddd-b41f-426b-87dc-c6752b98d6c0', label: 'B3\n4.0', color: '#31b0d5', title: 'Name: B3<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: d5f45ddd-b41f-426b-87dc-c6752b98d6c0<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(2.5); Formula Ptg: 2.5 EVEN ; Ptgs: VALUE EVEN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@73877e19'},
{id: 'b558d710-521e-48d7-9468-47bef90539cd', label: 'VALUE\n1.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.5<br>Type: CONSTANT_VALUE<br>Id: b558d710-521e-48d7-9468-47bef90539cd<br>Formula Expression: Formula String: VALUE; Formula Values: 1.5; Formula Ptg: 1.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@73877e19'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '5d7086cc-1a7b-4a5d-8f86-7d0b72cbaafd', to: 'd5f45ddd-b41f-426b-87dc-c6752b98d6c0'},
{from: '3c84eb18-b191-4c40-b816-21134f78dd9f', to: '189f1814-e2a3-4722-89f6-9fbb405d6c74'},
{from: 'b558d710-521e-48d7-9468-47bef90539cd', to: '3c84eb18-b191-4c40-b816-21134f78dd9f'},
{from: '877768f8-e435-49d1-a79b-43af387b83ee', to: '5d7086cc-1a7b-4a5d-8f86-7d0b72cbaafd'}
                            ]);