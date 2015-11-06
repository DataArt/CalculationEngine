var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'ddfe64db-ab31-4f58-8389-686b289ac419', label: 'VALUE\nDEVDEF_2', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF_2<br>Type: CONSTANT_VALUE<br>Id: ddfe64db-ab31-4f58-8389-686b289ac419<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_2; Formula Ptg: DEVDEF_2; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f6a7463'},
{id: 'ce421aec-9b2f-4187-ac50-823fc02cbc26', label: 'C3\n8.0', color: '#31b0d5', title: 'Name: C3<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: ce421aec-9b2f-4187-ac50-823fc02cbc26<br>Formula Expression: Formula String: C3; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: C3 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f6a7463'},
{id: 'adfd2fe1-e21f-43c6-a5fe-55dd8213de19', label: 'B3\n4.0', color: '#31b0d5', title: 'Name: B3<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: adfd2fe1-e21f-43c6-a5fe-55dd8213de19<br>Formula Expression: Formula String: B3; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: B3 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f6a7463'},
{id: '8bd74473-1026-43cb-ba26-4a6fbbfcb84c', label: 'A3\n8.0', color: '#31b0d5', title: 'Name: A3<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 8bd74473-1026-43cb-ba26-4a6fbbfcb84c<br>Formula Expression: Formula String: A3; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: A3 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f6a7463'},
{id: '7228a4ab-b1d8-4e39-89bc-52b30a90f12c', label: 'F7\n20.0', color: '#31b0d5', title: 'Name: F7<br>Value: 20.0<br>Type: CELL_WITH_FORMULA<br>Id: 7228a4ab-b1d8-4e39-89bc-52b30a90f12c<br>Formula Expression: Formula String: FUNCEXEC(C3, B3, A3, VALUE); Formula Values: FUNCEXEC(8.0, 4.0, 8.0, DEVDEF_2); Formula Ptg: 8.0, 4.0, 8.0, DEVDEF_2 FUNCEXEC ; Ptgs: C3, B3, A3, VALUE FUNCEXEC  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f6a7463'},
{id: 'e8a84196-c55a-4d79-be81-d869eb456fff', label: 'FUNCEXEC\n20.0', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Value: 20.0<br>Type: FUNCTION<br>Id: e8a84196-c55a-4d79-be81-d869eb456fff<br>Formula Expression: Formula String: FUNCEXEC(C3, B3, A3, VALUE); Formula Values: FUNCEXEC(8.0, 4.0, 8.0, DEVDEF_2); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f6a7463'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'ddfe64db-ab31-4f58-8389-686b289ac419', to: 'e8a84196-c55a-4d79-be81-d869eb456fff'},
{from: 'e8a84196-c55a-4d79-be81-d869eb456fff', to: '7228a4ab-b1d8-4e39-89bc-52b30a90f12c'},
{from: '8bd74473-1026-43cb-ba26-4a6fbbfcb84c', to: 'e8a84196-c55a-4d79-be81-d869eb456fff'},
{from: 'ce421aec-9b2f-4187-ac50-823fc02cbc26', to: 'e8a84196-c55a-4d79-be81-d869eb456fff'},
{from: 'adfd2fe1-e21f-43c6-a5fe-55dd8213de19', to: 'e8a84196-c55a-4d79-be81-d869eb456fff'}
                            ]);