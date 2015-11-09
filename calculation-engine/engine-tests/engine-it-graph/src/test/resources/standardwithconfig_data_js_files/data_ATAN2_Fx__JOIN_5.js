var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'd49927a8-6f22-48eb-bebf-145c083bbef2', label: 'ATAN2\n-2.356194490192345', color: '#f0ad4e', title: 'Name: ATAN2<br>Value: -2.356194490192345<br>Type: FUNCTION<br>Id: d49927a8-6f22-48eb-bebf-145c083bbef2<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(-1.0, -1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47a9bcf1'},
{id: 'f390ec76-8a86-419b-8983-bc5adb286274', label: 'ATAN2\n0.7853981633974483', color: '#f0ad4e', title: 'Name: ATAN2<br>Value: 0.7853981633974483<br>Type: FUNCTION<br>Id: f390ec76-8a86-419b-8983-bc5adb286274<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(1.0, 1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47a9bcf1'},
{id: '095b5511-f227-4f24-9849-dc3cdc45436c', label: 'B2\n0.7853981633974483', color: '#31b0d5', title: 'Name: B2<br>Value: 0.7853981633974483<br>Type: CELL_WITH_FORMULA<br>Id: 095b5511-f227-4f24-9849-dc3cdc45436c<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(1.0, 1.0); Formula Ptg: 1.0, 1.0 ATAN2 ; Ptgs: VALUE, VALUE ATAN2  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47a9bcf1'},
{id: '246e683a-d99b-41e9-a181-6baf159b8798', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 246e683a-d99b-41e9-a181-6baf159b8798<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47a9bcf1'},
{id: '46314570-5e66-4f25-b8e1-7998e051741d', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 46314570-5e66-4f25-b8e1-7998e051741d<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47a9bcf1'},
{id: '569dccb1-8cd5-4221-8a4d-5266ebb3bb4d', label: 'B3\n-2.356194490192345', color: '#31b0d5', title: 'Name: B3<br>Value: -2.356194490192345<br>Type: CELL_WITH_FORMULA<br>Id: 569dccb1-8cd5-4221-8a4d-5266ebb3bb4d<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(-1.0, -1.0); Formula Ptg: -1.0, -1.0 ATAN2 ; Ptgs: VALUE, VALUE ATAN2  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47a9bcf1'},
{id: '5f858c7c-defc-4bb3-91b8-9206d2844f66', label: 'VALUE\n-1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: -1.0<br>Type: CONSTANT_VALUE<br>Id: 5f858c7c-defc-4bb3-91b8-9206d2844f66<br>Formula Expression: Formula String: VALUE; Formula Values: -1.0; Formula Ptg: -1.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47a9bcf1'},
{id: 'e858f5ca-5fea-417c-99fe-ecfb734cf32c', label: 'VALUE\n-1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: -1.0<br>Type: CONSTANT_VALUE<br>Id: e858f5ca-5fea-417c-99fe-ecfb734cf32c<br>Formula Expression: Formula String: VALUE; Formula Values: -1.0; Formula Ptg: -1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47a9bcf1'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '5f858c7c-defc-4bb3-91b8-9206d2844f66', to: 'd49927a8-6f22-48eb-bebf-145c083bbef2'},
{from: '46314570-5e66-4f25-b8e1-7998e051741d', to: 'f390ec76-8a86-419b-8983-bc5adb286274'},
{from: 'd49927a8-6f22-48eb-bebf-145c083bbef2', to: '569dccb1-8cd5-4221-8a4d-5266ebb3bb4d'},
{from: 'f390ec76-8a86-419b-8983-bc5adb286274', to: '095b5511-f227-4f24-9849-dc3cdc45436c'},
{from: '246e683a-d99b-41e9-a181-6baf159b8798', to: 'f390ec76-8a86-419b-8983-bc5adb286274'},
{from: 'e858f5ca-5fea-417c-99fe-ecfb734cf32c', to: 'd49927a8-6f22-48eb-bebf-145c083bbef2'}
                            ]);