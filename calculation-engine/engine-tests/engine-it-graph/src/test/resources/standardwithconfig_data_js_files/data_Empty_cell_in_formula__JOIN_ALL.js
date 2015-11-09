var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'e9be393a-452f-48ca-9664-708f2019e101', label: 'D1\n4.0', color: '#31b0d5', title: 'Name: D1<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: e9be393a-452f-48ca-9664-708f2019e101<br>Formula Expression: Formula String: D1; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1c80e49b'},
{id: '6eb683dd-6e07-4c74-83a6-183be3389ec9', label: '+\n12.0', color: '#f0ad4e', title: 'Name: +<br>Value: 12.0<br>Type: OPERATOR<br>Id: 6eb683dd-6e07-4c74-83a6-183be3389ec9<br>Formula Expression: Formula String: C1 + D1 + E1; Formula Values: 3.0 + 4.0 + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1c80e49b'},
{id: '01b4fa11-6ed7-42f4-b738-c6a261384e45', label: 'E1\n5.0', color: '#31b0d5', title: 'Name: E1<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 01b4fa11-6ed7-42f4-b738-c6a261384e45<br>Formula Expression: Formula String: E1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: E1 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1c80e49b'},
{id: '25f3d26a-3f38-4cfc-a334-e33df9441d9c', label: 'C1\n3.0', color: '#31b0d5', title: 'Name: C1<br>Value: 3.0<br>Type: CELL_WITH_VALUE<br>Id: 25f3d26a-3f38-4cfc-a334-e33df9441d9c<br>Formula Expression: Formula String: C1; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: C1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1c80e49b'},
{id: '57a2b905-817c-4b9a-bfeb-116556377b2c', label: '+\n12.0', color: '#f0ad4e', title: 'Name: +<br>Value: 12.0<br>Type: OPERATOR<br>Id: 57a2b905-817c-4b9a-bfeb-116556377b2c<br>Formula Expression: Formula String: C1 + D1 + E1 + F1; Formula Values: 3.0 + 4.0 + 5.0 + ; Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1c80e49b'},
{id: 'da8d3b97-1edd-4914-bf84-2afc89c21b91', label: 'E5\n12.0', color: '#31b0d5', title: 'Name: E5<br>Value: 12.0<br>Type: CELL_WITH_FORMULA<br>Id: da8d3b97-1edd-4914-bf84-2afc89c21b91<br>Formula Expression: Formula String: C1 + D1 + E1 + F1; Formula Values: 3.0 + 4.0 + 5.0 + ; Formula Ptg: 3.0 4.0 + 5.0 +  +; Ptgs: C1 D1 + E1 + F1 + Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1c80e49b'},
{id: '09bc7f9d-fabf-4b8e-98b6-584012579322', label: 'F1\n', color: '#31b0d5', title: 'Name: F1<br>Value: <br>Type: EMPTY_CELL<br>Id: 09bc7f9d-fabf-4b8e-98b6-584012579322<br>Formula Expression: Formula String: F1; Formula Values: ; Formula Ptg: ; Ptgs: F1 Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1c80e49b'},
{id: '2d91d554-ac47-4e16-8130-65659555afb1', label: '+\n7.0', color: '#f0ad4e', title: 'Name: +<br>Value: 7.0<br>Type: OPERATOR<br>Id: 2d91d554-ac47-4e16-8130-65659555afb1<br>Formula Expression: Formula String: C1 + D1; Formula Values: 3.0 + 4.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1c80e49b'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2d91d554-ac47-4e16-8130-65659555afb1', to: '6eb683dd-6e07-4c74-83a6-183be3389ec9'},
{from: '01b4fa11-6ed7-42f4-b738-c6a261384e45', to: '6eb683dd-6e07-4c74-83a6-183be3389ec9'},
{from: '09bc7f9d-fabf-4b8e-98b6-584012579322', to: '57a2b905-817c-4b9a-bfeb-116556377b2c'},
{from: '6eb683dd-6e07-4c74-83a6-183be3389ec9', to: '57a2b905-817c-4b9a-bfeb-116556377b2c'},
{from: 'e9be393a-452f-48ca-9664-708f2019e101', to: '2d91d554-ac47-4e16-8130-65659555afb1'},
{from: '57a2b905-817c-4b9a-bfeb-116556377b2c', to: 'da8d3b97-1edd-4914-bf84-2afc89c21b91'},
{from: '25f3d26a-3f38-4cfc-a334-e33df9441d9c', to: '2d91d554-ac47-4e16-8130-65659555afb1'}
                            ]);