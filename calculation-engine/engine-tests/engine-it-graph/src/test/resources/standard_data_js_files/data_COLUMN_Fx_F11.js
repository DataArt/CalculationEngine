var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '708d08a8-18c4-4902-b947-682f9ab699c5', label: 'C5\n7702.0', color: '#31b0d5', title: 'Name: C5<br>Alias: null<br>Value: 7702.0<br>Type: CELL_WITH_VALUE<br>Id: 708d08a8-18c4-4902-b947-682f9ab699c5<br>Formula Expression: Formula String: C5; Formula Values: 7702.0; Formula Ptg: 7702.0; Ptgs: C5 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5f9be66c'},
{id: '4661fe13-3dea-4c53-8bf4-a4277050c15a', label: 'F11\n3.0', color: '#31b0d5', title: 'Name: F11<br>Alias: null<br>Value: 3.0<br>Type: CELL_WITH_FORMULA<br>Id: 4661fe13-3dea-4c53-8bf4-a4277050c15a<br>Formula Expression: Formula String: COLUMN(C5); Formula Values: COLUMN(7702.0); Formula Ptg: 7702.0 COLUMN ; Ptgs: C5 COLUMN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5f9be66c'},
{id: 'c293982a-6879-4805-a4b4-59604bdb4acd', label: 'COLUMN\n3.0', color: '#f0ad4e', title: 'Name: COLUMN<br>Alias: null<br>Value: 3.0<br>Type: FUNCTION<br>Id: c293982a-6879-4805-a4b4-59604bdb4acd<br>Formula Expression: Formula String: COLUMN(C5); Formula Values: COLUMN(7702.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5f9be66c'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'c293982a-6879-4805-a4b4-59604bdb4acd', to: '4661fe13-3dea-4c53-8bf4-a4277050c15a'},
{from: '708d08a8-18c4-4902-b947-682f9ab699c5', to: 'c293982a-6879-4805-a4b4-59604bdb4acd'}
                            ]);