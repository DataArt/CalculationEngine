var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3a79ecf7-2f1d-4061-8383-7cbe092222a4', label: 'E5\n5.192925985263684', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: 5.192925985263684<br>Type: CELL_WITH_FORMULA<br>Id: 3a79ecf7-2f1d-4061-8383-7cbe092222a4<br>Formula Expression: Formula String: ACOSH(C2); Formula Values: ACOSH(90.0); Formula Ptg: 90.0 ACOSH ; Ptgs: C2 ACOSH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@441772e'},
{id: '6f324d8f-8f2f-41e5-b3e1-8488a0968912', label: 'C2\n90.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 90.0<br>Type: CELL_WITH_VALUE<br>Id: 6f324d8f-8f2f-41e5-b3e1-8488a0968912<br>Formula Expression: Formula String: C2; Formula Values: 90.0; Formula Ptg: 90.0; Ptgs: C2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@441772e'},
{id: 'a086ed69-84c7-485c-a515-9c6302c944f0', label: 'ACOSH\n5.192925985263684', color: '#f0ad4e', title: 'Name: ACOSH<br>Alias: null<br>Value: 5.192925985263684<br>Type: FUNCTION<br>Id: a086ed69-84c7-485c-a515-9c6302c944f0<br>Formula Expression: Formula String: ACOSH(C2); Formula Values: ACOSH(90.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@441772e'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'a086ed69-84c7-485c-a515-9c6302c944f0', to: '3a79ecf7-2f1d-4061-8383-7cbe092222a4'},
{from: '6f324d8f-8f2f-41e5-b3e1-8488a0968912', to: 'a086ed69-84c7-485c-a515-9c6302c944f0'}
                            ]);