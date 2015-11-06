var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'c0820dd3-0b15-4125-8d92-51639ff57bad', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: c0820dd3-0b15-4125-8d92-51639ff57bad<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4e9658b5'},
{id: '29437114-11de-4d44-9f85-b75f83855a76', label: 'A2\n250.0', color: '#31b0d5', title: 'Name: A2<br>Value: 250.0<br>Type: CELL_WITH_VALUE<br>Id: 29437114-11de-4d44-9f85-b75f83855a76<br>Formula Expression: Formula String: A2; Formula Values: 250.0; Formula Ptg: 250.0; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4e9658b5'},
{id: 'e9c6495d-64c1-4d8a-94b2-62f8df64d8af', label: 'FUNCEXEC\n-290.0', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Value: -290.0<br>Type: FUNCTION<br>Id: e9c6495d-64c1-4d8a-94b2-62f8df64d8af<br>Formula Expression: Formula String: FUNCEXEC(C2, B2, A2, VALUE); Formula Values: FUNCEXEC(300.0, 240.0, 250.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4e9658b5'},
{id: '69737dd3-d932-4b44-abb9-6a539c794f3c', label: 'C2\n300.0', color: '#31b0d5', title: 'Name: C2<br>Value: 300.0<br>Type: CELL_WITH_VALUE<br>Id: 69737dd3-d932-4b44-abb9-6a539c794f3c<br>Formula Expression: Formula String: C2; Formula Values: 300.0; Formula Ptg: 300.0; Ptgs: C2 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4e9658b5'},
{id: 'a2a20678-e602-4ede-84e7-9c32a7b396fb', label: 'E3\n-290.0', color: '#31b0d5', title: 'Name: E3<br>Value: -290.0<br>Type: CELL_WITH_FORMULA<br>Id: a2a20678-e602-4ede-84e7-9c32a7b396fb<br>Formula Expression: Formula String: FUNCEXEC(C2, B2, A2, VALUE); Formula Values: FUNCEXEC(300.0, 240.0, 250.0, DEVDEF); Formula Ptg: 300.0, 240.0, 250.0, DEVDEF FUNCEXEC ; Ptgs: C2, B2, A2, VALUE FUNCEXEC  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4e9658b5'},
{id: '09b384da-5aa0-4111-9ecd-6e0cccecd65d', label: 'B2\n240.0', color: '#31b0d5', title: 'Name: B2<br>Value: 240.0<br>Type: CELL_WITH_VALUE<br>Id: 09b384da-5aa0-4111-9ecd-6e0cccecd65d<br>Formula Expression: Formula String: B2; Formula Values: 240.0; Formula Ptg: 240.0; Ptgs: B2 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4e9658b5'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'c0820dd3-0b15-4125-8d92-51639ff57bad', to: 'e9c6495d-64c1-4d8a-94b2-62f8df64d8af'},
{from: '29437114-11de-4d44-9f85-b75f83855a76', to: 'e9c6495d-64c1-4d8a-94b2-62f8df64d8af'},
{from: '09b384da-5aa0-4111-9ecd-6e0cccecd65d', to: 'e9c6495d-64c1-4d8a-94b2-62f8df64d8af'},
{from: 'e9c6495d-64c1-4d8a-94b2-62f8df64d8af', to: 'a2a20678-e602-4ede-84e7-9c32a7b396fb'},
{from: '69737dd3-d932-4b44-abb9-6a539c794f3c', to: 'e9c6495d-64c1-4d8a-94b2-62f8df64d8af'}
                            ]);