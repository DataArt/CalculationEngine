var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '37adce3b-20a6-41ac-a0ff-1699020dbfd6', label: 'DEGREES\n180.0', color: '#f0ad4e', title: 'Name: DEGREES<br>Value: 180.0<br>Type: FUNCTION<br>Id: 37adce3b-20a6-41ac-a0ff-1699020dbfd6<br>Formula Expression: Formula String: DEGREES(PI()); Formula Values: DEGREES(PI()); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3be94b12'},
{id: '44fddcef-d428-40fa-9d95-b77797cb52e2', label: 'B5\n120.0', color: '#31b0d5', title: 'Name: B5<br>Value: 120.0<br>Type: CELL_WITH_VALUE<br>Id: 44fddcef-d428-40fa-9d95-b77797cb52e2<br>Formula Expression: Formula String: B5; Formula Values: 120.0; Formula Ptg: 120.0; Ptgs: B5 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3be94b12'},
{id: '8988510c-afdd-41c5-9999-bde5e380985d', label: 'E6\n180.0', color: '#31b0d5', title: 'Name: E6<br>Value: 180.0<br>Type: CELL_WITH_FORMULA<br>Id: 8988510c-afdd-41c5-9999-bde5e380985d<br>Formula Expression: Formula String: DEGREES(PI()); Formula Values: DEGREES(PI()); Formula Ptg:  PI  DEGREES ; Ptgs:  PI  DEGREES  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3be94b12'},
{id: '804a07fa-3bdb-480c-b3ea-807335bfa24b', label: 'DEGREES\n6875.493541569879', color: '#f0ad4e', title: 'Name: DEGREES<br>Value: 6875.493541569879<br>Type: FUNCTION<br>Id: 804a07fa-3bdb-480c-b3ea-807335bfa24b<br>Formula Expression: Formula String: DEGREES(B5); Formula Values: DEGREES(120.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3be94b12'},
{id: 'c0a8be9d-082a-47fa-9d14-068118ca2f5a', label: 'E7\n6875.493541569879', color: '#31b0d5', title: 'Name: E7<br>Value: 6875.493541569879<br>Type: CELL_WITH_FORMULA<br>Id: c0a8be9d-082a-47fa-9d14-068118ca2f5a<br>Formula Expression: Formula String: DEGREES(B5); Formula Values: DEGREES(120.0); Formula Ptg: 120.0 DEGREES ; Ptgs: B5 DEGREES  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3be94b12'},
{id: '466f7e20-c5bb-49e6-b4a7-fb343d70ae44', label: 'PI\n3.141592653589793', color: '#f0ad4e', title: 'Name: PI<br>Value: 3.141592653589793<br>Type: FUNCTION<br>Id: 466f7e20-c5bb-49e6-b4a7-fb343d70ae44<br>Formula Expression: Formula String: PI(); Formula Values: PI(); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3be94b12'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '37adce3b-20a6-41ac-a0ff-1699020dbfd6', to: '8988510c-afdd-41c5-9999-bde5e380985d'},
{from: '466f7e20-c5bb-49e6-b4a7-fb343d70ae44', to: '37adce3b-20a6-41ac-a0ff-1699020dbfd6'},
{from: '804a07fa-3bdb-480c-b3ea-807335bfa24b', to: 'c0a8be9d-082a-47fa-9d14-068118ca2f5a'},
{from: '44fddcef-d428-40fa-9d95-b77797cb52e2', to: '804a07fa-3bdb-480c-b3ea-807335bfa24b'}
                            ]);