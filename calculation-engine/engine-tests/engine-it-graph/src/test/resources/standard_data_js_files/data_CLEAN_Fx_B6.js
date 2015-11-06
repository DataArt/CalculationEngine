var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '30089d2c-8fc6-4691-98f1-cbcd651ac5b6', label: 'B6\n9', color: '#31b0d5', title: 'Name: B6<br>Value: 9<br>Type: CELL_WITH_FORMULA<br>Id: 30089d2c-8fc6-4691-98f1-cbcd651ac5b6<br>Formula Expression: Formula String: CLEAN(B1); Formula Values: CLEAN(9.0); Formula Ptg: 9.0 CLEAN ; Ptgs: B1 CLEAN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6cc558c6'},
{id: '78dcb501-6402-485f-9295-e8edcc1af832', label: 'CLEAN\n9', color: '#f0ad4e', title: 'Name: CLEAN<br>Value: 9<br>Type: FUNCTION<br>Id: 78dcb501-6402-485f-9295-e8edcc1af832<br>Formula Expression: Formula String: CLEAN(B1); Formula Values: CLEAN(9.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6cc558c6'},
{id: '314b21ce-ca3e-4d2e-ab93-f0277abcd419', label: 'B1\n9.0', color: '#31b0d5', title: 'Name: B1<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: 314b21ce-ca3e-4d2e-ab93-f0277abcd419<br>Formula Expression: Formula String: B1; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: B1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6cc558c6'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '78dcb501-6402-485f-9295-e8edcc1af832', to: '30089d2c-8fc6-4691-98f1-cbcd651ac5b6'},
{from: '314b21ce-ca3e-4d2e-ab93-f0277abcd419', to: '78dcb501-6402-485f-9295-e8edcc1af832'}
                            ]);