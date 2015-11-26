var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '56576417-064c-43d0-948c-9242ce15644a', label: 'PI\n3.141592653589793', color: '#f0ad4e', title: 'Name: PI<br>Alias: null<br>Value: 3.141592653589793<br>Type: FUNCTION<br>Id: 56576417-064c-43d0-948c-9242ce15644a<br>Formula Expression: Formula String: PI(); Formula Values: PI(); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5c10f1c3'},
{id: '2468b211-0fd8-4732-af53-f81caee8ec97', label: 'DEGREES\n180.0', color: '#f0ad4e', title: 'Name: DEGREES<br>Alias: null<br>Value: 180.0<br>Type: FUNCTION<br>Id: 2468b211-0fd8-4732-af53-f81caee8ec97<br>Formula Expression: Formula String: DEGREES(PI()); Formula Values: DEGREES(PI()); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5c10f1c3'},
{id: '7c0bf8b0-9303-4258-97f9-dd6c529e3d5a', label: 'E6\n180.0', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: 180.0<br>Type: CELL_WITH_FORMULA<br>Id: 7c0bf8b0-9303-4258-97f9-dd6c529e3d5a<br>Formula Expression: Formula String: DEGREES(PI()); Formula Values: DEGREES(PI()); Formula Ptg:  PI  DEGREES ; Ptgs:  PI  DEGREES  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5c10f1c3'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '56576417-064c-43d0-948c-9242ce15644a', to: '2468b211-0fd8-4732-af53-f81caee8ec97'},
{from: '2468b211-0fd8-4732-af53-f81caee8ec97', to: '7c0bf8b0-9303-4258-97f9-dd6c529e3d5a'}
                            ]);