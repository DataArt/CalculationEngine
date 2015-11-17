var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '7202b9ac-f6e4-4526-a83c-62b10d1d0bfd', label: 'A1\n6.0', color: '#31b0d5', title: 'Name: A1<br>Value: 6.0<br>Type: CELL_WITH_FORMULA<br>Id: 7202b9ac-f6e4-4526-a83c-62b10d1d0bfd<br>Formula Expression: Formula String:  + IF(A3>A4,B3,B4); Formula Values:  + IF(3.0 > 5.0, 6.0); Formula Ptg:  6.0, 3.0 5.0 > IF  +; Ptgs:  B4, A3 A4 > IF  + Index in Ptgs: 9 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@53da2aec'},
{id: '59ff1d25-ccb1-4a55-b19b-e911f8d07351', label: 'B4\n6.0', color: '#31b0d5', title: 'Name: B4<br>Value: 6.0<br>Type: CELL_WITH_VALUE<br>Id: 59ff1d25-ccb1-4a55-b19b-e911f8d07351<br>Formula Expression: Formula String: B4; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: B4 Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@53da2aec'},
{id: 'ff2839de-75d0-43fc-9606-b04b2e7a6cdd', label: 'A4\n5.0', color: '#31b0d5', title: 'Name: A4<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: ff2839de-75d0-43fc-9606-b04b2e7a6cdd<br>Formula Expression: Formula String: A4; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A4 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@53da2aec'},
{id: '3bebc080-0d28-4424-aaf8-f1d1a1f56356', label: 'IF\n6.0', color: '#f0ad4e', title: 'Name: IF<br>Value: 6.0<br>Type: IF<br>Id: 3bebc080-0d28-4424-aaf8-f1d1a1f56356<br>Formula Expression: Formula String: IF(A3>A4,B3,B4); Formula Values: IF(3.0 > 5.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@53da2aec'},
{id: 'e5ff7195-de78-4f47-964d-2468ab53a320', label: 'A3\n3.0', color: '#31b0d5', title: 'Name: A3<br>Value: 3.0<br>Type: CELL_WITH_VALUE<br>Id: e5ff7195-de78-4f47-964d-2468ab53a320<br>Formula Expression: Formula String: A3; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: A3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@53da2aec'},
{id: 'bcdd688e-32b7-49f1-a528-778deb225442', label: '+\n6.0', color: '#f0ad4e', title: 'Name: +<br>Value: 6.0<br>Type: OPERATOR<br>Id: bcdd688e-32b7-49f1-a528-778deb225442<br>Formula Expression: Formula String:  + IF(A3>A4,B3,B4); Formula Values:  + IF(3.0 > 5.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 9 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@53da2aec'},
{id: '678c7eda-2ea0-4ed6-b75f-6aaa9f64b49e', label: '>\nFALSE', color: '#f0ad4e', title: 'Name: ><br>Value: FALSE<br>Type: OPERATOR<br>Id: 678c7eda-2ea0-4ed6-b75f-6aaa9f64b49e<br>Formula Expression: Formula String: A3 > A4; Formula Values: 3.0 > 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@53da2aec'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '59ff1d25-ccb1-4a55-b19b-e911f8d07351', to: '3bebc080-0d28-4424-aaf8-f1d1a1f56356'},
{from: 'bcdd688e-32b7-49f1-a528-778deb225442', to: '7202b9ac-f6e4-4526-a83c-62b10d1d0bfd'},
{from: 'e5ff7195-de78-4f47-964d-2468ab53a320', to: '678c7eda-2ea0-4ed6-b75f-6aaa9f64b49e'},
{from: '678c7eda-2ea0-4ed6-b75f-6aaa9f64b49e', to: '3bebc080-0d28-4424-aaf8-f1d1a1f56356'},
{from: 'ff2839de-75d0-43fc-9606-b04b2e7a6cdd', to: '678c7eda-2ea0-4ed6-b75f-6aaa9f64b49e'},
{from: '3bebc080-0d28-4424-aaf8-f1d1a1f56356', to: 'bcdd688e-32b7-49f1-a528-778deb225442'}
                            ]);