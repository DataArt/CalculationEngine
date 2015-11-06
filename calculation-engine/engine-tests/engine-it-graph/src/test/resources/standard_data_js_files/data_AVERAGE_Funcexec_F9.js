var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '610a42f6-00d7-4f2f-ae56-ec1a86ec3bda', label: 'VALUE\nDEVDEF_4', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF_4<br>Type: CONSTANT_VALUE<br>Id: 610a42f6-00d7-4f2f-ae56-ec1a86ec3bda<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_4; Formula Ptg: DEVDEF_4; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@69ee81fc'},
{id: 'eaac4ed1-e2f4-4969-8ef2-307d2d122ec9', label: 'C5\n0.9', color: '#31b0d5', title: 'Name: C5<br>Value: 0.9<br>Type: CELL_WITH_VALUE<br>Id: eaac4ed1-e2f4-4969-8ef2-307d2d122ec9<br>Formula Expression: Formula String: C5; Formula Values: 0.9; Formula Ptg: 0.9; Ptgs: C5 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@69ee81fc'},
{id: '41e20418-e668-494d-806f-1f3441d28732', label: 'FUNCEXEC\n6.225', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Value: 6.225<br>Type: FUNCTION<br>Id: 41e20418-e668-494d-806f-1f3441d28732<br>Formula Expression: Formula String: FUNCEXEC(D5, C5, B5, A5, VALUE); Formula Values: FUNCEXEC(9.0, 0.9, 8.0, 7.0, DEVDEF_4); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@69ee81fc'},
{id: '499380a5-2bca-456a-be9a-4a4205e90dd6', label: 'B5\n8.0', color: '#31b0d5', title: 'Name: B5<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 499380a5-2bca-456a-be9a-4a4205e90dd6<br>Formula Expression: Formula String: B5; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: B5 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@69ee81fc'},
{id: 'ffd5d90a-42d2-4c38-ba50-fcd69719c28f', label: 'F9\n6.225', color: '#31b0d5', title: 'Name: F9<br>Value: 6.225<br>Type: CELL_WITH_FORMULA<br>Id: ffd5d90a-42d2-4c38-ba50-fcd69719c28f<br>Formula Expression: Formula String: FUNCEXEC(D5, C5, B5, A5, VALUE); Formula Values: FUNCEXEC(9.0, 0.9, 8.0, 7.0, DEVDEF_4); Formula Ptg: 9.0, 0.9, 8.0, 7.0, DEVDEF_4 FUNCEXEC ; Ptgs: D5, C5, B5, A5, VALUE FUNCEXEC  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@69ee81fc'},
{id: '1e8ee4ea-3b21-4ffa-b023-b47fc4b2a986', label: 'D5\n9.0', color: '#31b0d5', title: 'Name: D5<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: 1e8ee4ea-3b21-4ffa-b023-b47fc4b2a986<br>Formula Expression: Formula String: D5; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: D5 Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@69ee81fc'},
{id: 'a8c1f5c0-287b-47fb-a4f6-b85b8073b31c', label: 'A5\n7.0', color: '#31b0d5', title: 'Name: A5<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: a8c1f5c0-287b-47fb-a4f6-b85b8073b31c<br>Formula Expression: Formula String: A5; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: A5 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@69ee81fc'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1e8ee4ea-3b21-4ffa-b023-b47fc4b2a986', to: '41e20418-e668-494d-806f-1f3441d28732'},
{from: '499380a5-2bca-456a-be9a-4a4205e90dd6', to: '41e20418-e668-494d-806f-1f3441d28732'},
{from: 'a8c1f5c0-287b-47fb-a4f6-b85b8073b31c', to: '41e20418-e668-494d-806f-1f3441d28732'},
{from: 'eaac4ed1-e2f4-4969-8ef2-307d2d122ec9', to: '41e20418-e668-494d-806f-1f3441d28732'},
{from: '41e20418-e668-494d-806f-1f3441d28732', to: 'ffd5d90a-42d2-4c38-ba50-fcd69719c28f'},
{from: '610a42f6-00d7-4f2f-ae56-ec1a86ec3bda', to: '41e20418-e668-494d-806f-1f3441d28732'}
                            ]);