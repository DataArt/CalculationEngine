var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'd60f2ae8-8b73-4e78-93af-7ebe3cb66183', label: 'VALUE\n12.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 12.0<br>Type: CONSTANT_VALUE<br>Id: d60f2ae8-8b73-4e78-93af-7ebe3cb66183<br>Formula Expression: Formula String: VALUE; Formula Values: 12.0; Formula Ptg: 12.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@59fc6d05'},
{id: '20625992-6d68-45c6-9079-8edc65a163fc', label: 'A1\n12.0', color: '#31b0d5', title: 'Name: A1<br>Value: 12.0<br>Type: CELL_WITH_FORMULA<br>Id: 20625992-6d68-45c6-9079-8edc65a163fc<br>Formula Expression: Formula String: VALUE; Formula Values: 12.0; Formula Ptg: 12.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@59fc6d05'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'd60f2ae8-8b73-4e78-93af-7ebe3cb66183', to: '20625992-6d68-45c6-9079-8edc65a163fc'}
                            ]);