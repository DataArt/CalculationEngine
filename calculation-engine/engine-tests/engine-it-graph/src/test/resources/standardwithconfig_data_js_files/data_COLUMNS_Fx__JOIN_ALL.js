var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'f84bcc87-7aa1-4557-8c8e-9fa57f84ca4c', label: 'E5\n7.0', color: '#31b0d5', title: 'Name: E5<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: f84bcc87-7aa1-4557-8c8e-9fa57f84ca4c<br>Formula Expression: Formula String: COLUMNS(C2:I3); Formula Values: COLUMNS(7.0, 65.0, 7.0, 6.0, 4.0, 7.0, 65.0, 8.0, 367.0, 57.0, 4.0, 6.0, 8.0, 367.0); Formula Ptg: 7.0, 65.0, 7.0, 6.0, 4.0, 7.0, 65.0, 8.0, 367.0, 57.0, 4.0, 6.0, 8.0, 367.0 COLUMNS ; Ptgs: C2:I3 COLUMNS  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@10b9db7b'},
{id: '31fe0a93-0c3d-4e70-b30a-8348eddccb1a', label: 'COLUMNS\n7.0', color: '#f0ad4e', title: 'Name: COLUMNS<br>Value: 7.0<br>Type: FUNCTION<br>Id: 31fe0a93-0c3d-4e70-b30a-8348eddccb1a<br>Formula Expression: Formula String: COLUMNS(C2:I3); Formula Values: COLUMNS(7.0, 65.0, 7.0, 6.0, 4.0, 7.0, 65.0, 8.0, 367.0, 57.0, 4.0, 6.0, 8.0, 367.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@10b9db7b'},
{id: 'baa24b9c-c578-4dc6-8a00-647f298ebff5', label: 'C2:I3\n...', color: '#31b0d5', title: 'Name: C2:I3<br>Value: [[7.0, 65.0, 7.0, 6.0, 4.0, 7.0, 65.0], [8.0, 367.0, 57.0, 4.0, 6.0, 8.0, 367.0]]<br>Type: RANGE<br>Id: baa24b9c-c578-4dc6-8a00-647f298ebff5<br>Formula Expression: Formula String: C2:I3; Formula Values: [[7.0, 65.0, 7.0, 6.0, 4.0, 7.0, 65.0], [8.0, 367.0, 57.0, 4.0, 6.0, 8.0, 367.0]]; Formula Ptg: [[7.0, 65.0, 7.0, 6.0, 4.0, 7.0, 65.0], [8.0, 367.0, 57.0, 4.0, 6.0, 8.0, 367.0]]; Ptgs: C2:I3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@10b9db7b'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '31fe0a93-0c3d-4e70-b30a-8348eddccb1a', to: 'f84bcc87-7aa1-4557-8c8e-9fa57f84ca4c'},
{from: 'baa24b9c-c578-4dc6-8a00-647f298ebff5', to: '31fe0a93-0c3d-4e70-b30a-8348eddccb1a'}
                            ]);