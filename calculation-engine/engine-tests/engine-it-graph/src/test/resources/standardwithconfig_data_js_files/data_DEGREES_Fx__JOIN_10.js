var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '7f87a440-c40a-40bf-88fa-f7d28a9caf8d', label: 'B5\n120.0', color: '#31b0d5', title: 'Name: B5<br>Value: 120.0<br>Type: CELL_WITH_VALUE<br>Id: 7f87a440-c40a-40bf-88fa-f7d28a9caf8d<br>Formula Expression: Formula String: B5; Formula Values: 120.0; Formula Ptg: 120.0; Ptgs: B5 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@62a81453'},
{id: '7dda0541-308a-44af-bfc2-c4b21026d3f3', label: 'DEGREES\n6875.493541569879', color: '#f0ad4e', title: 'Name: DEGREES<br>Value: 6875.493541569879<br>Type: FUNCTION<br>Id: 7dda0541-308a-44af-bfc2-c4b21026d3f3<br>Formula Expression: Formula String: DEGREES(B5); Formula Values: DEGREES(120.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@62a81453'},
{id: '34a444a0-24ab-4f7c-b97f-c3c6d276d1e6', label: 'E6\n180.0', color: '#31b0d5', title: 'Name: E6<br>Value: 180.0<br>Type: CELL_WITH_FORMULA<br>Id: 34a444a0-24ab-4f7c-b97f-c3c6d276d1e6<br>Formula Expression: Formula String: DEGREES(PI()); Formula Values: DEGREES(PI()); Formula Ptg:  PI  DEGREES ; Ptgs:  PI  DEGREES  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@62a81453'},
{id: '3f46f51d-e29b-4f37-98db-bb81a15c4e8e', label: 'E7\n6875.493541569879', color: '#31b0d5', title: 'Name: E7<br>Value: 6875.493541569879<br>Type: CELL_WITH_FORMULA<br>Id: 3f46f51d-e29b-4f37-98db-bb81a15c4e8e<br>Formula Expression: Formula String: DEGREES(B5); Formula Values: DEGREES(120.0); Formula Ptg: 120.0 DEGREES ; Ptgs: B5 DEGREES  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@62a81453'},
{id: '3a3bd83e-55f0-4161-8c1a-bfd7991d575b', label: 'PI\n3.141592653589793', color: '#f0ad4e', title: 'Name: PI<br>Value: 3.141592653589793<br>Type: FUNCTION<br>Id: 3a3bd83e-55f0-4161-8c1a-bfd7991d575b<br>Formula Expression: Formula String: PI(); Formula Values: PI(); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@62a81453'},
{id: 'f05d93eb-31b0-43c3-8340-7800ab328906', label: 'DEGREES\n180.0', color: '#f0ad4e', title: 'Name: DEGREES<br>Value: 180.0<br>Type: FUNCTION<br>Id: f05d93eb-31b0-43c3-8340-7800ab328906<br>Formula Expression: Formula String: DEGREES(PI()); Formula Values: DEGREES(PI()); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@62a81453'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '7dda0541-308a-44af-bfc2-c4b21026d3f3', to: '3f46f51d-e29b-4f37-98db-bb81a15c4e8e'},
{from: '3a3bd83e-55f0-4161-8c1a-bfd7991d575b', to: 'f05d93eb-31b0-43c3-8340-7800ab328906'},
{from: '7f87a440-c40a-40bf-88fa-f7d28a9caf8d', to: '7dda0541-308a-44af-bfc2-c4b21026d3f3'},
{from: 'f05d93eb-31b0-43c3-8340-7800ab328906', to: '34a444a0-24ab-4f7c-b97f-c3c6d276d1e6'}
                            ]);