var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'e7053495-9af3-4f76-85cf-4f385412813c', label: 'E6\n180.0', color: '#31b0d5', title: 'Name: E6<br>Value: 180.0<br>Type: CELL_WITH_FORMULA<br>Id: e7053495-9af3-4f76-85cf-4f385412813c<br>Formula Expression: Formula String: DEGREES(PI()); Formula Values: DEGREES(PI()); Formula Ptg:  PI  DEGREES ; Ptgs:  PI  DEGREES  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@455591ad'},
{id: '0a38e395-7591-4a4d-b479-3ab904a2e582', label: 'E7\n6875.493541569879', color: '#31b0d5', title: 'Name: E7<br>Value: 6875.493541569879<br>Type: CELL_WITH_FORMULA<br>Id: 0a38e395-7591-4a4d-b479-3ab904a2e582<br>Formula Expression: Formula String: DEGREES(B5); Formula Values: DEGREES(120.0); Formula Ptg: 120.0 DEGREES ; Ptgs: B5 DEGREES  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@455591ad'},
{id: 'c413d898-58ff-4f8d-a9c5-9cfa259e1cf0', label: 'B5\n120.0', color: '#31b0d5', title: 'Name: B5<br>Value: 120.0<br>Type: CELL_WITH_VALUE<br>Id: c413d898-58ff-4f8d-a9c5-9cfa259e1cf0<br>Formula Expression: Formula String: B5; Formula Values: 120.0; Formula Ptg: 120.0; Ptgs: B5 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@455591ad'},
{id: 'cfab7766-4ac6-4712-b6bc-36fb702dd75e', label: 'DEGREES\n6875.493541569879', color: '#f0ad4e', title: 'Name: DEGREES<br>Value: 6875.493541569879<br>Type: FUNCTION<br>Id: cfab7766-4ac6-4712-b6bc-36fb702dd75e<br>Formula Expression: Formula String: DEGREES(B5); Formula Values: DEGREES(120.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@455591ad'},
{id: '5998e1a4-d19d-4abd-8a03-01fdd7462610', label: 'DEGREES\n180.0', color: '#f0ad4e', title: 'Name: DEGREES<br>Value: 180.0<br>Type: FUNCTION<br>Id: 5998e1a4-d19d-4abd-8a03-01fdd7462610<br>Formula Expression: Formula String: DEGREES(PI()); Formula Values: DEGREES(PI()); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@455591ad'},
{id: 'd45b414e-7de9-491d-8cb2-5374521f22fe', label: 'PI\n3.141592653589793', color: '#f0ad4e', title: 'Name: PI<br>Value: 3.141592653589793<br>Type: FUNCTION<br>Id: d45b414e-7de9-491d-8cb2-5374521f22fe<br>Formula Expression: Formula String: PI(); Formula Values: PI(); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@455591ad'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '5998e1a4-d19d-4abd-8a03-01fdd7462610', to: 'e7053495-9af3-4f76-85cf-4f385412813c'},
{from: 'd45b414e-7de9-491d-8cb2-5374521f22fe', to: '5998e1a4-d19d-4abd-8a03-01fdd7462610'},
{from: 'c413d898-58ff-4f8d-a9c5-9cfa259e1cf0', to: 'cfab7766-4ac6-4712-b6bc-36fb702dd75e'},
{from: 'cfab7766-4ac6-4712-b6bc-36fb702dd75e', to: '0a38e395-7591-4a4d-b479-3ab904a2e582'}
                            ]);