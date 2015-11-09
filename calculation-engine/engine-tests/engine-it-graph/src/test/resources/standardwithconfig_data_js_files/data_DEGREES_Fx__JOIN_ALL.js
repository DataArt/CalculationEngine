var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '9c6bc778-e5e2-4e2b-94aa-d7a6494d4bd6', label: 'PI\n3.141592653589793', color: '#f0ad4e', title: 'Name: PI<br>Value: 3.141592653589793<br>Type: FUNCTION<br>Id: 9c6bc778-e5e2-4e2b-94aa-d7a6494d4bd6<br>Formula Expression: Formula String: PI(); Formula Values: PI(); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4a3329b9'},
{id: '63525312-fb54-468d-b02e-6ec76acf6e0c', label: 'E7\n6875.493541569879', color: '#31b0d5', title: 'Name: E7<br>Value: 6875.493541569879<br>Type: CELL_WITH_FORMULA<br>Id: 63525312-fb54-468d-b02e-6ec76acf6e0c<br>Formula Expression: Formula String: DEGREES(B5); Formula Values: DEGREES(120.0); Formula Ptg: 120.0 DEGREES ; Ptgs: B5 DEGREES  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4a3329b9'},
{id: '16813942-5653-4582-9130-0187188da636', label: 'DEGREES\n180.0', color: '#f0ad4e', title: 'Name: DEGREES<br>Value: 180.0<br>Type: FUNCTION<br>Id: 16813942-5653-4582-9130-0187188da636<br>Formula Expression: Formula String: DEGREES(PI()); Formula Values: DEGREES(PI()); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4a3329b9'},
{id: '6da6e168-4cef-42ca-a3a7-708d2bfa6d30', label: 'B5\n120.0', color: '#31b0d5', title: 'Name: B5<br>Value: 120.0<br>Type: CELL_WITH_VALUE<br>Id: 6da6e168-4cef-42ca-a3a7-708d2bfa6d30<br>Formula Expression: Formula String: B5; Formula Values: 120.0; Formula Ptg: 120.0; Ptgs: B5 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4a3329b9'},
{id: '55f00dc1-92c0-44a6-8fa9-98008f2ec4dd', label: 'DEGREES\n6875.493541569879', color: '#f0ad4e', title: 'Name: DEGREES<br>Value: 6875.493541569879<br>Type: FUNCTION<br>Id: 55f00dc1-92c0-44a6-8fa9-98008f2ec4dd<br>Formula Expression: Formula String: DEGREES(B5); Formula Values: DEGREES(120.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4a3329b9'},
{id: '452b6944-18c8-4e59-9f9c-42ee996b9cf6', label: 'E6\n180.0', color: '#31b0d5', title: 'Name: E6<br>Value: 180.0<br>Type: CELL_WITH_FORMULA<br>Id: 452b6944-18c8-4e59-9f9c-42ee996b9cf6<br>Formula Expression: Formula String: DEGREES(PI()); Formula Values: DEGREES(PI()); Formula Ptg:  PI  DEGREES ; Ptgs:  PI  DEGREES  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4a3329b9'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '6da6e168-4cef-42ca-a3a7-708d2bfa6d30', to: '55f00dc1-92c0-44a6-8fa9-98008f2ec4dd'},
{from: '9c6bc778-e5e2-4e2b-94aa-d7a6494d4bd6', to: '16813942-5653-4582-9130-0187188da636'},
{from: '16813942-5653-4582-9130-0187188da636', to: '452b6944-18c8-4e59-9f9c-42ee996b9cf6'},
{from: '55f00dc1-92c0-44a6-8fa9-98008f2ec4dd', to: '63525312-fb54-468d-b02e-6ec76acf6e0c'}
                            ]);