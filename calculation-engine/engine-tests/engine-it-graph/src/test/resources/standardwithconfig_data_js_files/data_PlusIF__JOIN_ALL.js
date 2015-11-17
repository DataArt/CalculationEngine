var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '9340ffe6-597b-4eff-a935-917f2a9fa53f', label: 'A3\n3.0', color: '#31b0d5', title: 'Name: A3<br>Value: 3.0<br>Type: CELL_WITH_VALUE<br>Id: 9340ffe6-597b-4eff-a935-917f2a9fa53f<br>Formula Expression: Formula String: A3; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: A3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4d4d8fcf'},
{id: 'e8c84eb3-89c0-4d37-bfcf-994641d0254d', label: 'IF\n6.0', color: '#f0ad4e', title: 'Name: IF<br>Value: 6.0<br>Type: IF<br>Id: e8c84eb3-89c0-4d37-bfcf-994641d0254d<br>Formula Expression: Formula String: IF(A3>A4,B3,B4); Formula Values: IF(3.0 > 5.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4d4d8fcf'},
{id: '4061b805-0cc3-43c0-9510-6e6590811072', label: 'B4\n6.0', color: '#31b0d5', title: 'Name: B4<br>Value: 6.0<br>Type: CELL_WITH_VALUE<br>Id: 4061b805-0cc3-43c0-9510-6e6590811072<br>Formula Expression: Formula String: B4; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: B4 Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4d4d8fcf'},
{id: 'f5de699d-9b0e-43af-9b89-531c78ba6cce', label: 'A1\n6.0', color: '#31b0d5', title: 'Name: A1<br>Value: 6.0<br>Type: CELL_WITH_FORMULA<br>Id: f5de699d-9b0e-43af-9b89-531c78ba6cce<br>Formula Expression: Formula String:  + IF(A3>A4,B3,B4); Formula Values:  + IF(3.0 > 5.0, 6.0); Formula Ptg:  6.0, 3.0 5.0 > IF  +; Ptgs:  B4, A3 A4 > IF  + Index in Ptgs: 9 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4d4d8fcf'},
{id: '3143e828-cf75-4834-968d-b7d649c3ad2b', label: 'A4\n5.0', color: '#31b0d5', title: 'Name: A4<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 3143e828-cf75-4834-968d-b7d649c3ad2b<br>Formula Expression: Formula String: A4; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A4 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4d4d8fcf'},
{id: '54732271-86e3-4bb1-9e55-b931fa0ee911', label: '>\nFALSE', color: '#f0ad4e', title: 'Name: ><br>Value: FALSE<br>Type: OPERATOR<br>Id: 54732271-86e3-4bb1-9e55-b931fa0ee911<br>Formula Expression: Formula String: A3 > A4; Formula Values: 3.0 > 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4d4d8fcf'},
{id: '66e7fe97-7ef8-4c57-9630-0885fdb82147', label: '+\n6.0', color: '#f0ad4e', title: 'Name: +<br>Value: 6.0<br>Type: OPERATOR<br>Id: 66e7fe97-7ef8-4c57-9630-0885fdb82147<br>Formula Expression: Formula String:  + IF(A3>A4,B3,B4); Formula Values:  + IF(3.0 > 5.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 9 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4d4d8fcf'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4061b805-0cc3-43c0-9510-6e6590811072', to: 'e8c84eb3-89c0-4d37-bfcf-994641d0254d'},
{from: '9340ffe6-597b-4eff-a935-917f2a9fa53f', to: '54732271-86e3-4bb1-9e55-b931fa0ee911'},
{from: '66e7fe97-7ef8-4c57-9630-0885fdb82147', to: 'f5de699d-9b0e-43af-9b89-531c78ba6cce'},
{from: '54732271-86e3-4bb1-9e55-b931fa0ee911', to: 'e8c84eb3-89c0-4d37-bfcf-994641d0254d'},
{from: 'e8c84eb3-89c0-4d37-bfcf-994641d0254d', to: '66e7fe97-7ef8-4c57-9630-0885fdb82147'},
{from: '3143e828-cf75-4834-968d-b7d649c3ad2b', to: '54732271-86e3-4bb1-9e55-b931fa0ee911'}
                            ]);