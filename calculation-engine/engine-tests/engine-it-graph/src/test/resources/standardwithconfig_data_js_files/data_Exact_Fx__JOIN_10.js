var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0d092ccd-4ae2-4665-bcef-5820562aa54a', label: 'B2\n56.0', color: '#31b0d5', title: 'Name: B2<br>Value: 56.0<br>Type: CELL_WITH_VALUE<br>Id: 0d092ccd-4ae2-4665-bcef-5820562aa54a<br>Formula Expression: Formula String: B2; Formula Values: 56.0; Formula Ptg: 56.0; Ptgs: B2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@77622c82'},
{id: '8cc0b3fb-4332-4580-985e-2405e1a47908', label: 'C2\n76.0', color: '#31b0d5', title: 'Name: C2<br>Value: 76.0<br>Type: CELL_WITH_VALUE<br>Id: 8cc0b3fb-4332-4580-985e-2405e1a47908<br>Formula Expression: Formula String: C2; Formula Values: 76.0; Formula Ptg: 76.0; Ptgs: C2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@77622c82'},
{id: '6786e795-22a2-41eb-86ed-3fdb3697610e', label: 'E5\nFALSE', color: '#31b0d5', title: 'Name: E5<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 6786e795-22a2-41eb-86ed-3fdb3697610e<br>Formula Expression: Formula String: EXACT(B2, A2); Formula Values: EXACT(56.0, 23.0); Formula Ptg: 56.0, 23.0 EXACT ; Ptgs: B2, A2 EXACT  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@77622c82'},
{id: '6c910467-8a79-480b-a610-206e74919521', label: 'A2\n23.0', color: '#31b0d5', title: 'Name: A2<br>Value: 23.0<br>Type: CELL_WITH_VALUE<br>Id: 6c910467-8a79-480b-a610-206e74919521<br>Formula Expression: Formula String: A2; Formula Values: 23.0; Formula Ptg: 23.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@77622c82'},
{id: 'fa93cfbf-7e0f-41c3-8a57-5069d16c5052', label: 'E6\nTRUE', color: '#31b0d5', title: 'Name: E6<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: fa93cfbf-7e0f-41c3-8a57-5069d16c5052<br>Formula Expression: Formula String: EXACT(C3, C2); Formula Values: EXACT(76.0, 76.0); Formula Ptg: 76.0, 76.0 EXACT ; Ptgs: C3, C2 EXACT  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@77622c82'},
{id: '84ea9d3f-1f02-4191-bdd8-1d2b43335bd1', label: 'EXACT\nTRUE', color: '#f0ad4e', title: 'Name: EXACT<br>Value: TRUE<br>Type: FUNCTION<br>Id: 84ea9d3f-1f02-4191-bdd8-1d2b43335bd1<br>Formula Expression: Formula String: EXACT(C3, C2); Formula Values: EXACT(76.0, 76.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@77622c82'},
{id: '4858c004-d27a-4725-9cd9-676afba5d28b', label: 'EXACT\nFALSE', color: '#f0ad4e', title: 'Name: EXACT<br>Value: FALSE<br>Type: FUNCTION<br>Id: 4858c004-d27a-4725-9cd9-676afba5d28b<br>Formula Expression: Formula String: EXACT(B2, A2); Formula Values: EXACT(56.0, 23.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@77622c82'},
{id: '65e9b1d0-1e4a-4d52-9376-deb7333d04d5', label: 'C3\n76.0', color: '#31b0d5', title: 'Name: C3<br>Value: 76.0<br>Type: CELL_WITH_VALUE<br>Id: 65e9b1d0-1e4a-4d52-9376-deb7333d04d5<br>Formula Expression: Formula String: C3; Formula Values: 76.0; Formula Ptg: 76.0; Ptgs: C3 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@77622c82'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '84ea9d3f-1f02-4191-bdd8-1d2b43335bd1', to: 'fa93cfbf-7e0f-41c3-8a57-5069d16c5052'},
{from: '6c910467-8a79-480b-a610-206e74919521', to: '4858c004-d27a-4725-9cd9-676afba5d28b'},
{from: '4858c004-d27a-4725-9cd9-676afba5d28b', to: '6786e795-22a2-41eb-86ed-3fdb3697610e'},
{from: '0d092ccd-4ae2-4665-bcef-5820562aa54a', to: '4858c004-d27a-4725-9cd9-676afba5d28b'},
{from: '65e9b1d0-1e4a-4d52-9376-deb7333d04d5', to: '84ea9d3f-1f02-4191-bdd8-1d2b43335bd1'},
{from: '8cc0b3fb-4332-4580-985e-2405e1a47908', to: '84ea9d3f-1f02-4191-bdd8-1d2b43335bd1'}
                            ]);