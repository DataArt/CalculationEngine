var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'acff5ad4-1010-4fd4-8c2d-094c0725f896', label: 'ISNA\nFALSE', color: '#f0ad4e', title: 'Name: ISNA<br>Value: FALSE<br>Type: FUNCTION<br>Id: acff5ad4-1010-4fd4-8c2d-094c0725f896<br>Formula Expression: Formula String: ISNA(C5); Formula Values: ISNA(5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@290d210d'},
{id: '2bc8ee32-c6d0-4412-ac4c-a54e90d1daeb', label: 'A5\n5.0', color: '#31b0d5', title: 'Name: A5<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 2bc8ee32-c6d0-4412-ac4c-a54e90d1daeb<br>Formula Expression: Formula String: A5; Formula Values: null; Formula Ptg: null; Ptgs: null Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@290d210d'},
{id: '706dc654-a26c-4637-9f32-9594699f054c', label: 'D7\nFALSE', color: '#31b0d5', title: 'Name: D7<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 706dc654-a26c-4637-9f32-9594699f054c<br>Formula Expression: Formula String: ISNA(C5); Formula Values: ISNA(5.0); Formula Ptg: 5.0 ISNA ; Ptgs: C5 ISNA  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@290d210d'},
{id: 'fbc0aad9-800d-4595-86d6-934bff859cd5', label: 'C5\n5.0', color: '#31b0d5', title: 'Name: C5<br>Value: 5.0<br>Type: CELL_WITH_REFERENCE<br>Id: fbc0aad9-800d-4595-86d6-934bff859cd5<br>Formula Expression: Formula String: C5; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: C5 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@290d210d'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2bc8ee32-c6d0-4412-ac4c-a54e90d1daeb', to: 'fbc0aad9-800d-4595-86d6-934bff859cd5'},
{from: 'fbc0aad9-800d-4595-86d6-934bff859cd5', to: 'acff5ad4-1010-4fd4-8c2d-094c0725f896'},
{from: 'acff5ad4-1010-4fd4-8c2d-094c0725f896', to: '706dc654-a26c-4637-9f32-9594699f054c'}
                            ]);