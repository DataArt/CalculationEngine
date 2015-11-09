var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '9ec9d072-5483-4799-ba50-509c4fbca490', label: 'B2\n0.7853981633974483', color: '#31b0d5', title: 'Name: B2<br>Value: 0.7853981633974483<br>Type: CELL_WITH_FORMULA<br>Id: 9ec9d072-5483-4799-ba50-509c4fbca490<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(1.0, 1.0); Formula Ptg: 1.0, 1.0 ATAN2 ; Ptgs: VALUE, VALUE ATAN2  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@78cfa264'},
{id: '22b05331-aca7-4850-942d-961f8ccb2421', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 22b05331-aca7-4850-942d-961f8ccb2421<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@78cfa264'},
{id: '6cc73236-b77c-4e61-bc68-9aabbe098842', label: 'ATAN2\n-2.356194490192345', color: '#f0ad4e', title: 'Name: ATAN2<br>Value: -2.356194490192345<br>Type: FUNCTION<br>Id: 6cc73236-b77c-4e61-bc68-9aabbe098842<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(-1.0, -1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@78cfa264'},
{id: '6bbd8582-f864-4e44-98b5-95cfe843fd30', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 6bbd8582-f864-4e44-98b5-95cfe843fd30<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@78cfa264'},
{id: 'afaaf227-d804-443a-9d92-8ee082f3b163', label: 'ATAN2\n0.7853981633974483', color: '#f0ad4e', title: 'Name: ATAN2<br>Value: 0.7853981633974483<br>Type: FUNCTION<br>Id: afaaf227-d804-443a-9d92-8ee082f3b163<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(1.0, 1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@78cfa264'},
{id: '7290cbd7-894d-4635-9b01-26bd2b8b4717', label: 'VALUE\n-1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: -1.0<br>Type: CONSTANT_VALUE<br>Id: 7290cbd7-894d-4635-9b01-26bd2b8b4717<br>Formula Expression: Formula String: VALUE; Formula Values: -1.0; Formula Ptg: -1.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@78cfa264'},
{id: 'cb5508a1-c773-43ca-8dfb-24e4ce30ac65', label: 'VALUE\n-1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: -1.0<br>Type: CONSTANT_VALUE<br>Id: cb5508a1-c773-43ca-8dfb-24e4ce30ac65<br>Formula Expression: Formula String: VALUE; Formula Values: -1.0; Formula Ptg: -1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@78cfa264'},
{id: '44ed07a9-bfa6-45bf-9350-669a90b03a41', label: 'B3\n-2.356194490192345', color: '#31b0d5', title: 'Name: B3<br>Value: -2.356194490192345<br>Type: CELL_WITH_FORMULA<br>Id: 44ed07a9-bfa6-45bf-9350-669a90b03a41<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(-1.0, -1.0); Formula Ptg: -1.0, -1.0 ATAN2 ; Ptgs: VALUE, VALUE ATAN2  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@78cfa264'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '6cc73236-b77c-4e61-bc68-9aabbe098842', to: '44ed07a9-bfa6-45bf-9350-669a90b03a41'},
{from: '22b05331-aca7-4850-942d-961f8ccb2421', to: 'afaaf227-d804-443a-9d92-8ee082f3b163'},
{from: '6bbd8582-f864-4e44-98b5-95cfe843fd30', to: 'afaaf227-d804-443a-9d92-8ee082f3b163'},
{from: '7290cbd7-894d-4635-9b01-26bd2b8b4717', to: '6cc73236-b77c-4e61-bc68-9aabbe098842'},
{from: 'cb5508a1-c773-43ca-8dfb-24e4ce30ac65', to: '6cc73236-b77c-4e61-bc68-9aabbe098842'},
{from: 'afaaf227-d804-443a-9d92-8ee082f3b163', to: '9ec9d072-5483-4799-ba50-509c4fbca490'}
                            ]);