var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '77c3415b-fa37-413e-803c-c7354b80ae3f', label: 'B4\n$1502', color: '#31b0d5', title: 'Name: B4<br>Value: $1502<br>Type: CELL_WITH_VALUE<br>Id: 77c3415b-fa37-413e-803c-c7354b80ae3f<br>Formula Expression: Formula String: B4; Formula Values: $1502; Formula Ptg: $1502; Ptgs: B4 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@655ef322'},
{id: '74c41e3e-201c-454d-988e-1d631fbdda88', label: 'VALUE\nDEVDEF_3', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF_3<br>Type: CONSTANT_VALUE<br>Id: 74c41e3e-201c-454d-988e-1d631fbdda88<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_3; Formula Ptg: DEVDEF_3; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@655ef322'},
{id: '192492e4-c7b1-4733-ba25-84b1c7e0abe7', label: 'A4\n$1002', color: '#31b0d5', title: 'Name: A4<br>Value: $1002<br>Type: CELL_WITH_VALUE<br>Id: 192492e4-c7b1-4733-ba25-84b1c7e0abe7<br>Formula Expression: Formula String: A4; Formula Values: $1002; Formula Ptg: $1002; Ptgs: A4 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@655ef322'},
{id: '1fee04ab-ab87-4ec0-b648-d9ff61befde5', label: 'FUNCEXEC\n$1802', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Value: $1802<br>Type: FUNCTION<br>Id: 1fee04ab-ab87-4ec0-b648-d9ff61befde5<br>Formula Expression: Formula String: FUNCEXEC(B4, A4, VALUE); Formula Values: FUNCEXEC($1502, $1002, DEVDEF_3); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@655ef322'},
{id: 'decf9972-ec76-4b57-9cbc-ea85fa2410f1', label: 'D9\n$1802', color: '#31b0d5', title: 'Name: D9<br>Value: $1802<br>Type: CELL_WITH_FORMULA<br>Id: decf9972-ec76-4b57-9cbc-ea85fa2410f1<br>Formula Expression: Formula String: FUNCEXEC(B4, A4, VALUE); Formula Values: FUNCEXEC($1502, $1002, DEVDEF_3); Formula Ptg: $1502, $1002, DEVDEF_3 FUNCEXEC ; Ptgs: B4, A4, VALUE FUNCEXEC  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@655ef322'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '77c3415b-fa37-413e-803c-c7354b80ae3f', to: '1fee04ab-ab87-4ec0-b648-d9ff61befde5'},
{from: '74c41e3e-201c-454d-988e-1d631fbdda88', to: '1fee04ab-ab87-4ec0-b648-d9ff61befde5'},
{from: '192492e4-c7b1-4733-ba25-84b1c7e0abe7', to: '1fee04ab-ab87-4ec0-b648-d9ff61befde5'},
{from: '1fee04ab-ab87-4ec0-b648-d9ff61befde5', to: 'decf9972-ec76-4b57-9cbc-ea85fa2410f1'}
                            ]);