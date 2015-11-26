var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '845ff663-edbc-4b58-a565-aca75c066437', label: 'D6\nFALSE', color: '#31b0d5', title: 'Name: D6<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 845ff663-edbc-4b58-a565-aca75c066437<br>Formula Expression: Formula String: ISERROR(C3); Formula Values: ISERROR(989.0); Formula Ptg: 989.0 ISERROR ; Ptgs: C3 ISERROR  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@25c53f74'},
{id: 'f1eccf67-0b9d-44d0-9ecd-cb5dc70c25a2', label: 'C3\n989.0', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 989.0<br>Type: CELL_WITH_VALUE<br>Id: f1eccf67-0b9d-44d0-9ecd-cb5dc70c25a2<br>Formula Expression: Formula String: C3; Formula Values: 989.0; Formula Ptg: 989.0; Ptgs: C3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@25c53f74'},
{id: 'ba39af47-569b-4242-845e-7af42523a8ff', label: 'ISERROR\nFALSE', color: '#f0ad4e', title: 'Name: ISERROR<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: ba39af47-569b-4242-845e-7af42523a8ff<br>Formula Expression: Formula String: ISERROR(C3); Formula Values: ISERROR(989.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@25c53f74'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'f1eccf67-0b9d-44d0-9ecd-cb5dc70c25a2', to: 'ba39af47-569b-4242-845e-7af42523a8ff'},
{from: 'ba39af47-569b-4242-845e-7af42523a8ff', to: '845ff663-edbc-4b58-a565-aca75c066437'}
                            ]);