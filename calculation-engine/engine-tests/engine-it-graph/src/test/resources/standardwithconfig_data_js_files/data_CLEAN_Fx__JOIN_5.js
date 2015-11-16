var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '5ac877bb-a4a9-47c4-8a59-831283addb9c', label: 'CLEAN\n9', color: '#f0ad4e', title: 'Name: CLEAN<br>Value: 9<br>Type: FUNCTION<br>Id: 5ac877bb-a4a9-47c4-8a59-831283addb9c<br>Formula Expression: Formula String: CLEAN(B1); Formula Values: CLEAN(9.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e490ed'},
{id: '63501ede-4aab-476d-a3cb-46238f1b2409', label: 'B6\n9', color: '#31b0d5', title: 'Name: B6<br>Value: 9<br>Type: CELL_WITH_FORMULA<br>Id: 63501ede-4aab-476d-a3cb-46238f1b2409<br>Formula Expression: Formula String: CLEAN(B1); Formula Values: CLEAN(9.0); Formula Ptg: 9.0 CLEAN ; Ptgs: B1 CLEAN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e490ed'},
{id: '62878254-0ec7-4735-be9c-d892364f2c15', label: 'VALUE\n10.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 10.0<br>Type: CONSTANT_VALUE<br>Id: 62878254-0ec7-4735-be9c-d892364f2c15<br>Formula Expression: Formula String: VALUE; Formula Values: 10.0; Formula Ptg: 10.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e490ed'},
{id: '6ad39dea-c27b-4632-8d8c-1829a1dd047e', label: 'ACOSH\n2.993222846126381', color: '#f0ad4e', title: 'Name: ACOSH<br>Value: 2.993222846126381<br>Type: FUNCTION<br>Id: 6ad39dea-c27b-4632-8d8c-1829a1dd047e<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e490ed'},
{id: 'dcd4b00d-abd0-4ea9-9911-925625ac55e1', label: 'A1\n2.993222846126381', color: '#31b0d5', title: 'Name: A1<br>Value: 2.993222846126381<br>Type: CELL_WITH_FORMULA<br>Id: dcd4b00d-abd0-4ea9-9911-925625ac55e1<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: 10.0 ACOSH ; Ptgs: VALUE ACOSH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e490ed'},
{id: '6744d4c1-82e0-4a81-b3ca-cf9bb9e5fb6c', label: 'B1\n9.0', color: '#31b0d5', title: 'Name: B1<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: 6744d4c1-82e0-4a81-b3ca-cf9bb9e5fb6c<br>Formula Expression: Formula String: B1; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: B1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e490ed'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '62878254-0ec7-4735-be9c-d892364f2c15', to: '6ad39dea-c27b-4632-8d8c-1829a1dd047e'},
{from: '6744d4c1-82e0-4a81-b3ca-cf9bb9e5fb6c', to: '5ac877bb-a4a9-47c4-8a59-831283addb9c'},
{from: '5ac877bb-a4a9-47c4-8a59-831283addb9c', to: '63501ede-4aab-476d-a3cb-46238f1b2409'},
{from: '6ad39dea-c27b-4632-8d8c-1829a1dd047e', to: 'dcd4b00d-abd0-4ea9-9911-925625ac55e1'}
                            ]);