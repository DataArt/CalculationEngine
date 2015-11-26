var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '49202e09-1a21-4d0c-b56e-035ef007c69f', label: 'A5\n7.0', color: '#31b0d5', title: 'Name: A5<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: 49202e09-1a21-4d0c-b56e-035ef007c69f<br>Formula Expression: Formula String: A5; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: A5 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@36b6964d'},
{id: 'bbd12faf-9769-406a-becf-43b83cf3d757', label: 'FUNCEXEC\n15.0', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: 15.0<br>Type: FUNCTION<br>Id: bbd12faf-9769-406a-becf-43b83cf3d757<br>Formula Expression: Formula String: FUNCEXEC(C5, B5, A5, VALUE); Formula Values: FUNCEXEC(, 8.0, 7.0, DEVDEF_4); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@36b6964d'},
{id: 'e50b2b91-5336-4139-805b-be813e8868d9', label: 'F9\n15.0', color: '#31b0d5', title: 'Name: F9<br>Alias: null<br>Value: 15.0<br>Type: CELL_WITH_FORMULA<br>Id: e50b2b91-5336-4139-805b-be813e8868d9<br>Formula Expression: Formula String: FUNCEXEC(C5, B5, A5, VALUE); Formula Values: FUNCEXEC(, 8.0, 7.0, DEVDEF_4); Formula Ptg: , 8.0, 7.0, DEVDEF_4 FUNCEXEC ; Ptgs: C5, B5, A5, VALUE FUNCEXEC  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@36b6964d'},
{id: '88f1d6f3-19c6-4c95-962b-96b986aa293a', label: 'B5\n8.0', color: '#31b0d5', title: 'Name: B5<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 88f1d6f3-19c6-4c95-962b-96b986aa293a<br>Formula Expression: Formula String: B5; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: B5 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@36b6964d'},
{id: '2dfc792f-eea6-458a-ac8b-f145308a58b7', label: 'C5\n', color: '#31b0d5', title: 'Name: C5<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 2dfc792f-eea6-458a-ac8b-f145308a58b7<br>Formula Expression: Formula String: C5; Formula Values: ; Formula Ptg: ; Ptgs: C5 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@36b6964d'},
{id: 'bb1e1640-d984-45d5-be5d-a198e320674e', label: 'VALUE\nDEVDEF_4', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF_4<br>Type: CONSTANT_VALUE<br>Id: bb1e1640-d984-45d5-be5d-a198e320674e<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_4; Formula Ptg: DEVDEF_4; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@36b6964d'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2dfc792f-eea6-458a-ac8b-f145308a58b7', to: 'bbd12faf-9769-406a-becf-43b83cf3d757'},
{from: '88f1d6f3-19c6-4c95-962b-96b986aa293a', to: 'bbd12faf-9769-406a-becf-43b83cf3d757'},
{from: 'bb1e1640-d984-45d5-be5d-a198e320674e', to: 'bbd12faf-9769-406a-becf-43b83cf3d757'},
{from: '49202e09-1a21-4d0c-b56e-035ef007c69f', to: 'bbd12faf-9769-406a-becf-43b83cf3d757'},
{from: 'bbd12faf-9769-406a-becf-43b83cf3d757', to: 'e50b2b91-5336-4139-805b-be813e8868d9'}
                            ]);