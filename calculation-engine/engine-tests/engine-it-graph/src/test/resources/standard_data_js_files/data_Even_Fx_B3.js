var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'e55a47dc-2928-4e4a-b578-17bd3e51605a', label: 'EVEN\n4.0', color: '#f0ad4e', title: 'Name: EVEN<br>Value: 4.0<br>Type: FUNCTION<br>Id: e55a47dc-2928-4e4a-b578-17bd3e51605a<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(2.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3c2772d1'},
{id: '6e2bc9b3-a910-4cea-848e-bc1e3a7a6d2f', label: 'B3\n4.0', color: '#31b0d5', title: 'Name: B3<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: 6e2bc9b3-a910-4cea-848e-bc1e3a7a6d2f<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(2.5); Formula Ptg: 2.5 EVEN ; Ptgs: VALUE EVEN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3c2772d1'},
{id: 'ab31b977-c9e7-4519-b411-5cb816c731f3', label: 'VALUE\n2.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.5<br>Type: CONSTANT_VALUE<br>Id: ab31b977-c9e7-4519-b411-5cb816c731f3<br>Formula Expression: Formula String: VALUE; Formula Values: 2.5; Formula Ptg: 2.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3c2772d1'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'ab31b977-c9e7-4519-b411-5cb816c731f3', to: 'e55a47dc-2928-4e4a-b578-17bd3e51605a'},
{from: 'e55a47dc-2928-4e4a-b578-17bd3e51605a', to: '6e2bc9b3-a910-4cea-848e-bc1e3a7a6d2f'}
                            ]);