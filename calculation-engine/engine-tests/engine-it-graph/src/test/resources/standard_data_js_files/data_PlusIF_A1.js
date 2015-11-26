var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'af94cc8d-05f2-41e9-a6af-1c58c952dd6c', label: 'A1\n6.0', color: '#31b0d5', title: 'Name: A1<br>Alias: New_name<br>Value: 6.0<br>Type: CELL_WITH_FORMULA<br>Id: af94cc8d-05f2-41e9-a6af-1c58c952dd6c<br>Formula Expression: Formula String:  + IF(A3>A4,B3,B4); Formula Values:  + IF(3.0 > 5.0, 6.0); Formula Ptg:  6.0, 3.0 5.0 > IF  +; Ptgs:  B4, A3 A4 > IF  + Index in Ptgs: 9 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3d3f761a'},
{id: '62fc9f95-46f2-4eb7-b4fe-8bf385199e92', label: 'A3\n3.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 3.0<br>Type: CELL_WITH_VALUE<br>Id: 62fc9f95-46f2-4eb7-b4fe-8bf385199e92<br>Formula Expression: Formula String: A3; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: A3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3d3f761a'},
{id: '2d1c836a-892e-47ad-ba03-cd53f237a6f6', label: 'A4\n5.0', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 2d1c836a-892e-47ad-ba03-cd53f237a6f6<br>Formula Expression: Formula String: A4; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A4 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3d3f761a'},
{id: '63856e60-589e-4439-818a-7e006c345c39', label: '>\nFALSE', color: '#f0ad4e', title: 'Name: ><br>Alias: null<br>Value: FALSE<br>Type: OPERATOR<br>Id: 63856e60-589e-4439-818a-7e006c345c39<br>Formula Expression: Formula String: A3 > A4; Formula Values: 3.0 > 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3d3f761a'},
{id: 'd68ad8ff-5e66-446a-8d09-1c3bbeea5469', label: '+\n6.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 6.0<br>Type: OPERATOR<br>Id: d68ad8ff-5e66-446a-8d09-1c3bbeea5469<br>Formula Expression: Formula String:  + IF(A3>A4,B3,B4); Formula Values:  + IF(3.0 > 5.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 9 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3d3f761a'},
{id: '1f0e2fe6-d862-4206-8c3e-0a8dbc0d1822', label: 'B4\n6.0', color: '#31b0d5', title: 'Name: B4<br>Alias: null<br>Value: 6.0<br>Type: CELL_WITH_VALUE<br>Id: 1f0e2fe6-d862-4206-8c3e-0a8dbc0d1822<br>Formula Expression: Formula String: B4; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: B4 Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3d3f761a'},
{id: '7556f987-5aab-4864-8166-138bb9502ef1', label: 'IF\n6.0', color: '#f0ad4e', title: 'Name: IF<br>Alias: null<br>Value: 6.0<br>Type: IF<br>Id: 7556f987-5aab-4864-8166-138bb9502ef1<br>Formula Expression: Formula String: IF(A3>A4,B3,B4); Formula Values: IF(3.0 > 5.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3d3f761a'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '63856e60-589e-4439-818a-7e006c345c39', to: '7556f987-5aab-4864-8166-138bb9502ef1'},
{from: '62fc9f95-46f2-4eb7-b4fe-8bf385199e92', to: '63856e60-589e-4439-818a-7e006c345c39'},
{from: '7556f987-5aab-4864-8166-138bb9502ef1', to: 'd68ad8ff-5e66-446a-8d09-1c3bbeea5469'},
{from: '1f0e2fe6-d862-4206-8c3e-0a8dbc0d1822', to: '7556f987-5aab-4864-8166-138bb9502ef1'},
{from: 'd68ad8ff-5e66-446a-8d09-1c3bbeea5469', to: 'af94cc8d-05f2-41e9-a6af-1c58c952dd6c'},
{from: '2d1c836a-892e-47ad-ba03-cd53f237a6f6', to: '63856e60-589e-4439-818a-7e006c345c39'}
                            ]);