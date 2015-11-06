var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'e5dcf266-7977-4fab-8e98-2bda9581f388', label: 'C2\n90.0', color: '#31b0d5', title: 'Name: C2<br>Value: 90.0<br>Type: CELL_WITH_VALUE<br>Id: e5dcf266-7977-4fab-8e98-2bda9581f388<br>Formula Expression: Formula String: C2; Formula Values: 90.0; Formula Ptg: 90.0; Ptgs: C2 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@515aebb0'},
{id: '0a3fb4e1-74a9-47c6-a415-cdd2c6c615c6', label: 'F7\n5.192925985263684', color: '#31b0d5', title: 'Name: F7<br>Value: 5.192925985263684<br>Type: CELL_WITH_FORMULA<br>Id: 0a3fb4e1-74a9-47c6-a415-cdd2c6c615c6<br>Formula Expression: Formula String: FUNCEXEC(C2, VALUE); Formula Values: FUNCEXEC(90.0, DEVDEF); Formula Ptg: 90.0, DEVDEF FUNCEXEC ; Ptgs: C2, VALUE FUNCEXEC  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@515aebb0'},
{id: '516619d9-7cfd-44a8-9572-cbfd358b3f3c', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 516619d9-7cfd-44a8-9572-cbfd358b3f3c<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@515aebb0'},
{id: '371233c3-fafd-48ad-b6fd-d26a46eec21a', label: 'FUNCEXEC\n5.192925985263684', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Value: 5.192925985263684<br>Type: FUNCTION<br>Id: 371233c3-fafd-48ad-b6fd-d26a46eec21a<br>Formula Expression: Formula String: FUNCEXEC(C2, VALUE); Formula Values: FUNCEXEC(90.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@515aebb0'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '516619d9-7cfd-44a8-9572-cbfd358b3f3c', to: '371233c3-fafd-48ad-b6fd-d26a46eec21a'},
{from: 'e5dcf266-7977-4fab-8e98-2bda9581f388', to: '371233c3-fafd-48ad-b6fd-d26a46eec21a'},
{from: '371233c3-fafd-48ad-b6fd-d26a46eec21a', to: '0a3fb4e1-74a9-47c6-a415-cdd2c6c615c6'}
                            ]);