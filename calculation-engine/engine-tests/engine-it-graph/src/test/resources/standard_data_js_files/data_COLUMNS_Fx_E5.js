var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '34793887-fd44-4e9e-9353-59af6e9801dc', label: 'COLUMNS\n7.0', color: '#f0ad4e', title: 'Name: COLUMNS<br>Alias: null<br>Value: 7.0<br>Type: FUNCTION<br>Id: 34793887-fd44-4e9e-9353-59af6e9801dc<br>Formula Expression: Formula String: COLUMNS(C2:I3); Formula Values: COLUMNS(7.0, 65.0, 7.0, 6.0, 4.0, 7.0, 65.0, 8.0, 367.0, 57.0, 4.0, 6.0, 8.0, 367.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2ef14fe'},
{id: 'd7b570c1-884f-4720-93b7-96781bacafaf', label: 'E5\n7.0', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: d7b570c1-884f-4720-93b7-96781bacafaf<br>Formula Expression: Formula String: COLUMNS(C2:I3); Formula Values: COLUMNS(7.0, 65.0, 7.0, 6.0, 4.0, 7.0, 65.0, 8.0, 367.0, 57.0, 4.0, 6.0, 8.0, 367.0); Formula Ptg: 7.0, 65.0, 7.0, 6.0, 4.0, 7.0, 65.0, 8.0, 367.0, 57.0, 4.0, 6.0, 8.0, 367.0 COLUMNS ; Ptgs: C2:I3 COLUMNS  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2ef14fe'},
{id: '4bc658a3-0054-4f13-b4c6-d160b2b4cc36', label: 'C2:I3\n...', color: '#31b0d5', title: 'Name: C2:I3<br>Alias: null<br>Value: [[7.0, 65.0, 7.0, 6.0, 4.0, 7.0, 65.0], [8.0, 367.0, 57.0, 4.0, 6.0, 8.0, 367.0]]<br>Type: RANGE<br>Id: 4bc658a3-0054-4f13-b4c6-d160b2b4cc36<br>Formula Expression: Formula String: C2:I3; Formula Values: [[7.0, 65.0, 7.0, 6.0, 4.0, 7.0, 65.0], [8.0, 367.0, 57.0, 4.0, 6.0, 8.0, 367.0]]; Formula Ptg: [[7.0, 65.0, 7.0, 6.0, 4.0, 7.0, 65.0], [8.0, 367.0, 57.0, 4.0, 6.0, 8.0, 367.0]]; Ptgs: C2:I3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2ef14fe'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4bc658a3-0054-4f13-b4c6-d160b2b4cc36', to: '34793887-fd44-4e9e-9353-59af6e9801dc'},
{from: '34793887-fd44-4e9e-9353-59af6e9801dc', to: 'd7b570c1-884f-4720-93b7-96781bacafaf'}
                            ]);