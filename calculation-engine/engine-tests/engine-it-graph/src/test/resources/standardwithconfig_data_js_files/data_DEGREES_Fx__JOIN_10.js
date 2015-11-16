var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '068b3362-127c-452b-a6fe-293ca520d97d', label: 'B5\n120.0', color: '#31b0d5', title: 'Name: B5<br>Value: 120.0<br>Type: CELL_WITH_VALUE<br>Id: 068b3362-127c-452b-a6fe-293ca520d97d<br>Formula Expression: Formula String: B5; Formula Values: 120.0; Formula Ptg: 120.0; Ptgs: B5 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@62a81453'},
{id: '33ef342c-eb0f-43e6-82f3-921d46d28a2a', label: 'DEGREES\n6875.493541569879', color: '#f0ad4e', title: 'Name: DEGREES<br>Value: 6875.493541569879<br>Type: FUNCTION<br>Id: 33ef342c-eb0f-43e6-82f3-921d46d28a2a<br>Formula Expression: Formula String: DEGREES(B5); Formula Values: DEGREES(120.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@62a81453'},
{id: 'd19db78d-5a49-46e5-a0ad-cee908394bc9', label: 'E6\n180.0', color: '#31b0d5', title: 'Name: E6<br>Value: 180.0<br>Type: CELL_WITH_FORMULA<br>Id: d19db78d-5a49-46e5-a0ad-cee908394bc9<br>Formula Expression: Formula String: DEGREES(PI()); Formula Values: DEGREES(PI()); Formula Ptg:  PI  DEGREES ; Ptgs:  PI  DEGREES  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@62a81453'},
{id: 'e4fe87bf-f2b9-45db-a78a-72de4050ac43', label: 'E7\n6875.493541569879', color: '#31b0d5', title: 'Name: E7<br>Value: 6875.493541569879<br>Type: CELL_WITH_FORMULA<br>Id: e4fe87bf-f2b9-45db-a78a-72de4050ac43<br>Formula Expression: Formula String: DEGREES(B5); Formula Values: DEGREES(120.0); Formula Ptg: 120.0 DEGREES ; Ptgs: B5 DEGREES  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@62a81453'},
{id: '64edae97-59db-41e5-9f91-caab23250ff1', label: 'PI\n3.141592653589793', color: '#f0ad4e', title: 'Name: PI<br>Value: 3.141592653589793<br>Type: FUNCTION<br>Id: 64edae97-59db-41e5-9f91-caab23250ff1<br>Formula Expression: Formula String: PI(); Formula Values: PI(); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@62a81453'},
{id: '2e6b0c57-f57c-434a-911e-60f97da0dbc8', label: 'DEGREES\n180.0', color: '#f0ad4e', title: 'Name: DEGREES<br>Value: 180.0<br>Type: FUNCTION<br>Id: 2e6b0c57-f57c-434a-911e-60f97da0dbc8<br>Formula Expression: Formula String: DEGREES(PI()); Formula Values: DEGREES(PI()); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@62a81453'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '33ef342c-eb0f-43e6-82f3-921d46d28a2a', to: 'e4fe87bf-f2b9-45db-a78a-72de4050ac43'},
{from: '64edae97-59db-41e5-9f91-caab23250ff1', to: '2e6b0c57-f57c-434a-911e-60f97da0dbc8'},
{from: '068b3362-127c-452b-a6fe-293ca520d97d', to: '33ef342c-eb0f-43e6-82f3-921d46d28a2a'},
{from: '2e6b0c57-f57c-434a-911e-60f97da0dbc8', to: 'd19db78d-5a49-46e5-a0ad-cee908394bc9'}
                            ]);