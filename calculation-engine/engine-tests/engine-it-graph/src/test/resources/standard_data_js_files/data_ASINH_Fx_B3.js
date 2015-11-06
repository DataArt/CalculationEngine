var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'fbace2fe-6696-42a4-9921-dff89b7ef3f3', label: 'B3\n3.4023066454805946', color: '#31b0d5', title: 'Name: B3<br>Value: 3.4023066454805946<br>Type: CELL_WITH_FORMULA<br>Id: fbace2fe-6696-42a4-9921-dff89b7ef3f3<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(15.0); Formula Ptg: 15.0 ASINH ; Ptgs: VALUE ASINH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2e222612'},
{id: '6434c60e-e987-4263-98c4-f86bcba6eb7a', label: 'ASINH\n3.4023066454805946', color: '#f0ad4e', title: 'Name: ASINH<br>Value: 3.4023066454805946<br>Type: FUNCTION<br>Id: 6434c60e-e987-4263-98c4-f86bcba6eb7a<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(15.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2e222612'},
{id: '11508993-1585-4737-b434-e5c5ffa1e192', label: 'VALUE\n15.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 15.0<br>Type: CONSTANT_VALUE<br>Id: 11508993-1585-4737-b434-e5c5ffa1e192<br>Formula Expression: Formula String: VALUE; Formula Values: 15.0; Formula Ptg: 15.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2e222612'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '6434c60e-e987-4263-98c4-f86bcba6eb7a', to: 'fbace2fe-6696-42a4-9921-dff89b7ef3f3'},
{from: '11508993-1585-4737-b434-e5c5ffa1e192', to: '6434c60e-e987-4263-98c4-f86bcba6eb7a'}
                            ]);