var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '43f8123e-6370-473a-89b2-9c0865a5963b', label: 'A2\nFALSE', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_VALUE<br>Id: 43f8123e-6370-473a-89b2-9c0865a5963b<br>Formula Expression: Formula String: A2; Formula Values: FALSE; Formula Ptg: FALSE; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@20a05b32'},
{id: '28f11e4e-3c0a-4cd2-97ed-fbab4d4ff3a0', label: 'C6\nTRUE', color: '#31b0d5', title: 'Name: C6<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 28f11e4e-3c0a-4cd2-97ed-fbab4d4ff3a0<br>Formula Expression: Formula String: ISLOGICAL(A2); Formula Values: ISLOGICAL(FALSE); Formula Ptg: FALSE ISLOGICAL ; Ptgs: A2 ISLOGICAL  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@20a05b32'},
{id: 'd77f55b9-956d-4011-8c65-12729d044c88', label: 'ISLOGICAL\nTRUE', color: '#f0ad4e', title: 'Name: ISLOGICAL<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: d77f55b9-956d-4011-8c65-12729d044c88<br>Formula Expression: Formula String: ISLOGICAL(A2); Formula Values: ISLOGICAL(FALSE); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@20a05b32'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '43f8123e-6370-473a-89b2-9c0865a5963b', to: 'd77f55b9-956d-4011-8c65-12729d044c88'},
{from: 'd77f55b9-956d-4011-8c65-12729d044c88', to: '28f11e4e-3c0a-4cd2-97ed-fbab4d4ff3a0'}
                            ]);