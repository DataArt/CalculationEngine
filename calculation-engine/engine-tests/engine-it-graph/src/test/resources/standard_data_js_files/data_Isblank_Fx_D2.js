var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '8f954552-21a1-4498-995f-9b21c38a9784', label: 'ISBLANK\nFALSE', color: '#f0ad4e', title: 'Name: ISBLANK<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 8f954552-21a1-4498-995f-9b21c38a9784<br>Formula Expression: Formula String: ISBLANK(A6); Formula Values: ISBLANK(4.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1cb19dba'},
{id: 'df2fefd6-b6d7-4ca3-861d-8fe744c00205', label: 'A6\n4.0', color: '#31b0d5', title: 'Name: A6<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: df2fefd6-b6d7-4ca3-861d-8fe744c00205<br>Formula Expression: Formula String: A6; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: A6 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1cb19dba'},
{id: '4e04c3df-eea3-4c35-8fe1-73630a6ce725', label: 'D2\nFALSE', color: '#31b0d5', title: 'Name: D2<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 4e04c3df-eea3-4c35-8fe1-73630a6ce725<br>Formula Expression: Formula String: ISBLANK(A6); Formula Values: ISBLANK(4.0); Formula Ptg: 4.0 ISBLANK ; Ptgs: A6 ISBLANK  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1cb19dba'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '8f954552-21a1-4498-995f-9b21c38a9784', to: '4e04c3df-eea3-4c35-8fe1-73630a6ce725'},
{from: 'df2fefd6-b6d7-4ca3-861d-8fe744c00205', to: '8f954552-21a1-4498-995f-9b21c38a9784'}
                            ]);