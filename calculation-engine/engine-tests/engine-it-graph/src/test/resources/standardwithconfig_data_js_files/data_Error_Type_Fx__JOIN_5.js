var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'fcb12e7c-2b30-4a5f-9df5-459f21f8c3d6', label: 'ERROR.TYPE\n7.0', color: '#f0ad4e', title: 'Name: ERROR.TYPE<br>Value: 7.0<br>Type: FUNCTION<br>Id: fcb12e7c-2b30-4a5f-9df5-459f21f8c3d6<br>Formula Expression: Formula String: ERROR.TYPE(VALUE); Formula Values: ERROR.TYPE(#N/A); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1ef48e49'},
{id: '289f1593-5871-4ffa-848e-fada69155c37', label: 'VALUE\n#N/A', color: '#31b0d5', title: 'Name: VALUE<br>Value: #N/A<br>Type: CONSTANT_VALUE<br>Id: 289f1593-5871-4ffa-848e-fada69155c37<br>Formula Expression: Formula String: VALUE; Formula Values: #N/A; Formula Ptg: #N/A; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1ef48e49'},
{id: '7a6e0ecd-88a3-4f92-ae89-51e707309bf3', label: 'C4\n2.0', color: '#31b0d5', title: 'Name: C4<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: 7a6e0ecd-88a3-4f92-ae89-51e707309bf3<br>Formula Expression: Formula String: ERROR.TYPE(A2); Formula Values: ERROR.TYPE(#DIV/0!); Formula Ptg: #DIV/0! ERROR.TYPE ; Ptgs: A2 ERROR.TYPE  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1ef48e49'},
{id: '8b05e1e8-37d6-41ae-aaac-455a70fc05a7', label: 'B3\n7.0', color: '#31b0d5', title: 'Name: B3<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: 8b05e1e8-37d6-41ae-aaac-455a70fc05a7<br>Formula Expression: Formula String: ERROR.TYPE(VALUE); Formula Values: ERROR.TYPE(#N/A); Formula Ptg: #N/A ERROR.TYPE ; Ptgs: VALUE ERROR.TYPE  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1ef48e49'},
{id: 'f5703f8d-341e-445f-ab39-5ca75370fde2', label: 'A2\n#DIV/0!', color: '#31b0d5', title: 'Name: A2<br>Value: #DIV/0!<br>Type: CELL_WITH_VALUE<br>Id: f5703f8d-341e-445f-ab39-5ca75370fde2<br>Formula Expression: Formula String: A2; Formula Values: #DIV/0!; Formula Ptg: #DIV/0!; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1ef48e49'},
{id: '581f5291-5e37-4edb-9054-221e58205c37', label: 'ERROR.TYPE\n2.0', color: '#f0ad4e', title: 'Name: ERROR.TYPE<br>Value: 2.0<br>Type: FUNCTION<br>Id: 581f5291-5e37-4edb-9054-221e58205c37<br>Formula Expression: Formula String: ERROR.TYPE(A2); Formula Values: ERROR.TYPE(#DIV/0!); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1ef48e49'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '581f5291-5e37-4edb-9054-221e58205c37', to: '7a6e0ecd-88a3-4f92-ae89-51e707309bf3'},
{from: '289f1593-5871-4ffa-848e-fada69155c37', to: 'fcb12e7c-2b30-4a5f-9df5-459f21f8c3d6'},
{from: 'fcb12e7c-2b30-4a5f-9df5-459f21f8c3d6', to: '8b05e1e8-37d6-41ae-aaac-455a70fc05a7'},
{from: 'f5703f8d-341e-445f-ab39-5ca75370fde2', to: '581f5291-5e37-4edb-9054-221e58205c37'}
                            ]);