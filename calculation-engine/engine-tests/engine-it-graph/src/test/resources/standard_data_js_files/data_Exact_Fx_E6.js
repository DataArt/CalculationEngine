var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '44538b6d-5d78-436a-9396-7c391a53f0fc', label: 'C2\n76.0', color: '#31b0d5', title: 'Name: C2<br>Value: 76.0<br>Type: CELL_WITH_VALUE<br>Id: 44538b6d-5d78-436a-9396-7c391a53f0fc<br>Formula Expression: Formula String: C2; Formula Values: 76.0; Formula Ptg: 76.0; Ptgs: C2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@796d3c9f'},
{id: '48227354-58c1-4cdc-a8ad-3c00c10c5544', label: 'E6\nTRUE', color: '#31b0d5', title: 'Name: E6<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 48227354-58c1-4cdc-a8ad-3c00c10c5544<br>Formula Expression: Formula String: EXACT(C3, C2); Formula Values: EXACT(76.0, 76.0); Formula Ptg: 76.0, 76.0 EXACT ; Ptgs: C3, C2 EXACT  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@796d3c9f'},
{id: '6f95abc2-82a4-4138-8702-6f405f2f8cec', label: 'EXACT\nTRUE', color: '#f0ad4e', title: 'Name: EXACT<br>Value: TRUE<br>Type: FUNCTION<br>Id: 6f95abc2-82a4-4138-8702-6f405f2f8cec<br>Formula Expression: Formula String: EXACT(C3, C2); Formula Values: EXACT(76.0, 76.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@796d3c9f'},
{id: '50aca143-325a-481a-a883-2cf68a94f5ee', label: 'C3\n76.0', color: '#31b0d5', title: 'Name: C3<br>Value: 76.0<br>Type: CELL_WITH_VALUE<br>Id: 50aca143-325a-481a-a883-2cf68a94f5ee<br>Formula Expression: Formula String: C3; Formula Values: 76.0; Formula Ptg: 76.0; Ptgs: C3 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@796d3c9f'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '44538b6d-5d78-436a-9396-7c391a53f0fc', to: '6f95abc2-82a4-4138-8702-6f405f2f8cec'},
{from: '50aca143-325a-481a-a883-2cf68a94f5ee', to: '6f95abc2-82a4-4138-8702-6f405f2f8cec'},
{from: '6f95abc2-82a4-4138-8702-6f405f2f8cec', to: '48227354-58c1-4cdc-a8ad-3c00c10c5544'}
                            ]);