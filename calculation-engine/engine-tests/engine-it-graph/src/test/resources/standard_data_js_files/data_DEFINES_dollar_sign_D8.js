var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '1766d99d-c393-40b2-9eed-5bcae7234ccb', label: 'B3\n$1501', color: '#31b0d5', title: 'Name: B3<br>Value: $1501<br>Type: CELL_WITH_VALUE<br>Id: 1766d99d-c393-40b2-9eed-5bcae7234ccb<br>Formula Expression: Formula String: B3; Formula Values: $1501; Formula Ptg: $1501; Ptgs: B3 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@a43ce46'},
{id: 'e5eaf0bd-095e-4692-99f9-6f36f52b8be3', label: 'A3\n$1001', color: '#31b0d5', title: 'Name: A3<br>Value: $1001<br>Type: CELL_WITH_VALUE<br>Id: e5eaf0bd-095e-4692-99f9-6f36f52b8be3<br>Formula Expression: Formula String: A3; Formula Values: $1001; Formula Ptg: $1001; Ptgs: A3 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@a43ce46'},
{id: 'a7419c10-4ae1-4dc6-825c-7d667f73a774', label: 'VALUE\nDEVDEF_2', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF_2<br>Type: CONSTANT_VALUE<br>Id: a7419c10-4ae1-4dc6-825c-7d667f73a774<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_2; Formula Ptg: DEVDEF_2; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@a43ce46'},
{id: '114e7964-a0b0-486b-8737-3d9850b5e9e3', label: 'FUNCEXEC\n$1801', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Value: $1801<br>Type: FUNCTION<br>Id: 114e7964-a0b0-486b-8737-3d9850b5e9e3<br>Formula Expression: Formula String: FUNCEXEC(B3, A3, VALUE); Formula Values: FUNCEXEC($1501, $1001, DEVDEF_2); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@a43ce46'},
{id: '5502b83d-ced3-4088-9378-cdbc0c437d7a', label: 'D8\n$1801', color: '#31b0d5', title: 'Name: D8<br>Value: $1801<br>Type: CELL_WITH_FORMULA<br>Id: 5502b83d-ced3-4088-9378-cdbc0c437d7a<br>Formula Expression: Formula String: FUNCEXEC(B3, A3, VALUE); Formula Values: FUNCEXEC($1501, $1001, DEVDEF_2); Formula Ptg: $1501, $1001, DEVDEF_2 FUNCEXEC ; Ptgs: B3, A3, VALUE FUNCEXEC  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@a43ce46'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1766d99d-c393-40b2-9eed-5bcae7234ccb', to: '114e7964-a0b0-486b-8737-3d9850b5e9e3'},
{from: 'e5eaf0bd-095e-4692-99f9-6f36f52b8be3', to: '114e7964-a0b0-486b-8737-3d9850b5e9e3'},
{from: 'a7419c10-4ae1-4dc6-825c-7d667f73a774', to: '114e7964-a0b0-486b-8737-3d9850b5e9e3'},
{from: '114e7964-a0b0-486b-8737-3d9850b5e9e3', to: '5502b83d-ced3-4088-9378-cdbc0c437d7a'}
                            ]);