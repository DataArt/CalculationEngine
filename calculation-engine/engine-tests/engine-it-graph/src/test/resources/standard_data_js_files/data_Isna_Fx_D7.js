var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '6313c450-b3e8-4627-b03c-680593790118', label: 'ISNA\nFALSE', color: '#f0ad4e', title: 'Name: ISNA<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 6313c450-b3e8-4627-b03c-680593790118<br>Formula Expression: Formula String: ISNA(A5); Formula Values: ISNA(5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@71ad3d8a'},
{id: 'd885dcec-0b50-4fc3-b4c9-39f9a488a398', label: 'D7\nFALSE', color: '#31b0d5', title: 'Name: D7<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: d885dcec-0b50-4fc3-b4c9-39f9a488a398<br>Formula Expression: Formula String: ISNA(A5); Formula Values: ISNA(5.0); Formula Ptg: 5.0 ISNA ; Ptgs: A5 ISNA  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@71ad3d8a'},
{id: '57ba3c36-81db-44a9-9ebd-3731b062e381', label: 'C5\n5.0', color: '#31b0d5', title: 'Name: C5<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_REFERENCE<br>Id: 57ba3c36-81db-44a9-9ebd-3731b062e381<br>Formula Expression: Formula String: A5; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A5 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@71ad3d8a'},
{id: '38cdabe4-de99-4b88-aebb-bb31336451c7', label: 'A5\n5.0', color: '#31b0d5', title: 'Name: A5<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 38cdabe4-de99-4b88-aebb-bb31336451c7<br>Formula Expression: Formula String: A5; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A5 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@71ad3d8a'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '38cdabe4-de99-4b88-aebb-bb31336451c7', to: '57ba3c36-81db-44a9-9ebd-3731b062e381'},
{from: '57ba3c36-81db-44a9-9ebd-3731b062e381', to: '6313c450-b3e8-4627-b03c-680593790118'},
{from: '6313c450-b3e8-4627-b03c-680593790118', to: 'd885dcec-0b50-4fc3-b4c9-39f9a488a398'}
                            ]);