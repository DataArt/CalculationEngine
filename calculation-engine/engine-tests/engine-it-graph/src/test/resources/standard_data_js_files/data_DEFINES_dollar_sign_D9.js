var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '84400608-befd-4524-9f45-ed22989d1f0f', label: 'A4\n$1002', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: $1002<br>Type: CELL_WITH_VALUE<br>Id: 84400608-befd-4524-9f45-ed22989d1f0f<br>Formula Expression: Formula String: A4; Formula Values: $1002; Formula Ptg: $1002; Ptgs: A4 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5066d65f'},
{id: '9d32641f-bd5b-411d-be18-2a3bd2004a60', label: 'D9\n$1802', color: '#31b0d5', title: 'Name: D9<br>Alias: null<br>Value: $1802<br>Type: CELL_WITH_FORMULA<br>Id: 9d32641f-bd5b-411d-be18-2a3bd2004a60<br>Formula Expression: Formula String: FUNCEXEC(B4, A4, VALUE); Formula Values: FUNCEXEC($1502, $1002, DEVDEF_3); Formula Ptg: $1502, $1002, DEVDEF_3 FUNCEXEC ; Ptgs: B4, A4, VALUE FUNCEXEC  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5066d65f'},
{id: '58e24dc2-82f8-45f0-9264-2339d0443550', label: 'VALUE\nDEVDEF_3', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF_3<br>Type: CONSTANT_VALUE<br>Id: 58e24dc2-82f8-45f0-9264-2339d0443550<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_3; Formula Ptg: DEVDEF_3; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5066d65f'},
{id: '14b66777-2dfe-4be6-bb30-5d33aae5bebc', label: 'B4\n$1502', color: '#31b0d5', title: 'Name: B4<br>Alias: null<br>Value: $1502<br>Type: CELL_WITH_VALUE<br>Id: 14b66777-2dfe-4be6-bb30-5d33aae5bebc<br>Formula Expression: Formula String: B4; Formula Values: $1502; Formula Ptg: $1502; Ptgs: B4 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5066d65f'},
{id: 'e1b73abf-002b-46cd-845f-6765afc04589', label: 'FUNCEXEC\n$1802', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: $1802<br>Type: FUNCTION<br>Id: e1b73abf-002b-46cd-845f-6765afc04589<br>Formula Expression: Formula String: FUNCEXEC(B4, A4, VALUE); Formula Values: FUNCEXEC($1502, $1002, DEVDEF_3); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5066d65f'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '84400608-befd-4524-9f45-ed22989d1f0f', to: 'e1b73abf-002b-46cd-845f-6765afc04589'},
{from: 'e1b73abf-002b-46cd-845f-6765afc04589', to: '9d32641f-bd5b-411d-be18-2a3bd2004a60'},
{from: '14b66777-2dfe-4be6-bb30-5d33aae5bebc', to: 'e1b73abf-002b-46cd-845f-6765afc04589'},
{from: '58e24dc2-82f8-45f0-9264-2339d0443550', to: 'e1b73abf-002b-46cd-845f-6765afc04589'}
                            ]);