var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'afe93d8b-3035-475e-a841-30922e457069', label: 'CLEAN\n9', color: '#f0ad4e', title: 'Name: CLEAN<br>Value: 9<br>Type: FUNCTION<br>Id: afe93d8b-3035-475e-a841-30922e457069<br>Formula Expression: Formula String: CLEAN(B1); Formula Values: CLEAN(9.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@f2b90fc'},
{id: 'e08c9d6f-206f-417a-90a4-1668b248073e', label: 'B6\n9', color: '#31b0d5', title: 'Name: B6<br>Value: 9<br>Type: CELL_WITH_FORMULA<br>Id: e08c9d6f-206f-417a-90a4-1668b248073e<br>Formula Expression: Formula String: CLEAN(B1); Formula Values: CLEAN(9.0); Formula Ptg: 9.0 CLEAN ; Ptgs: B1 CLEAN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@f2b90fc'},
{id: '796c61e1-4c48-4c9c-8cc3-d951efd4e018', label: 'B1\n9.0', color: '#31b0d5', title: 'Name: B1<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: 796c61e1-4c48-4c9c-8cc3-d951efd4e018<br>Formula Expression: Formula String: B1; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: B1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@f2b90fc'},
{id: 'b1906fe5-9e25-4188-89f8-68a416b2157f', label: 'VALUE\n10.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 10.0<br>Type: CONSTANT_VALUE<br>Id: b1906fe5-9e25-4188-89f8-68a416b2157f<br>Formula Expression: Formula String: VALUE; Formula Values: 10.0; Formula Ptg: 10.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@f2b90fc'},
{id: 'ecc66eaa-3f57-4199-b754-aeb0912f2472', label: 'ACOSH\n2.993222846126381', color: '#f0ad4e', title: 'Name: ACOSH<br>Value: 2.993222846126381<br>Type: FUNCTION<br>Id: ecc66eaa-3f57-4199-b754-aeb0912f2472<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@f2b90fc'},
{id: '02ed6c33-ffa2-46b0-aa65-c2dcf38fc881', label: 'A1\n2.993222846126381', color: '#31b0d5', title: 'Name: A1<br>Value: 2.993222846126381<br>Type: CELL_WITH_FORMULA<br>Id: 02ed6c33-ffa2-46b0-aa65-c2dcf38fc881<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: 10.0 ACOSH ; Ptgs: VALUE ACOSH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@f2b90fc'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'afe93d8b-3035-475e-a841-30922e457069', to: 'e08c9d6f-206f-417a-90a4-1668b248073e'},
{from: 'ecc66eaa-3f57-4199-b754-aeb0912f2472', to: '02ed6c33-ffa2-46b0-aa65-c2dcf38fc881'},
{from: '796c61e1-4c48-4c9c-8cc3-d951efd4e018', to: 'afe93d8b-3035-475e-a841-30922e457069'},
{from: 'b1906fe5-9e25-4188-89f8-68a416b2157f', to: 'ecc66eaa-3f57-4199-b754-aeb0912f2472'}
                            ]);