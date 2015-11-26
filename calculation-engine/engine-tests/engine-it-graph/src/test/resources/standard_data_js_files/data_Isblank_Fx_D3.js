var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3ba352f7-3dfc-4ac0-8e0e-938f526a5fa3', label: 'D3\nFALSE', color: '#31b0d5', title: 'Name: D3<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 3ba352f7-3dfc-4ac0-8e0e-938f526a5fa3<br>Formula Expression: Formula String: ISBLANK(VALUE); Formula Values: ISBLANK(6.0); Formula Ptg: 6.0 ISBLANK ; Ptgs: VALUE ISBLANK  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1dc2de84'},
{id: 'dfea094d-a93c-4f65-a3c8-a9b4b6d40f43', label: 'VALUE\n6.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 6.0<br>Type: CONSTANT_VALUE<br>Id: dfea094d-a93c-4f65-a3c8-a9b4b6d40f43<br>Formula Expression: Formula String: VALUE; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1dc2de84'},
{id: '60a0ab22-d0dc-4c47-badf-d76d25cd9191', label: 'ISBLANK\nFALSE', color: '#f0ad4e', title: 'Name: ISBLANK<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 60a0ab22-d0dc-4c47-badf-d76d25cd9191<br>Formula Expression: Formula String: ISBLANK(VALUE); Formula Values: ISBLANK(6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1dc2de84'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'dfea094d-a93c-4f65-a3c8-a9b4b6d40f43', to: '60a0ab22-d0dc-4c47-badf-d76d25cd9191'},
{from: '60a0ab22-d0dc-4c47-badf-d76d25cd9191', to: '3ba352f7-3dfc-4ac0-8e0e-938f526a5fa3'}
                            ]);