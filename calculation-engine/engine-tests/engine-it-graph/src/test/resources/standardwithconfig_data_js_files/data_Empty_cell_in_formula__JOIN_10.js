var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'd0afa54a-0791-4765-943b-c7bd6be0fcbd', label: 'C1\n3.0', color: '#31b0d5', title: 'Name: C1<br>Value: 3.0<br>Type: CELL_WITH_VALUE<br>Id: d0afa54a-0791-4765-943b-c7bd6be0fcbd<br>Formula Expression: Formula String: C1; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: C1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@65259737'},
{id: 'd6eac819-818f-479e-9bad-52553fdbbbfe', label: 'E5\n12.0', color: '#31b0d5', title: 'Name: E5<br>Value: 12.0<br>Type: CELL_WITH_FORMULA<br>Id: d6eac819-818f-479e-9bad-52553fdbbbfe<br>Formula Expression: Formula String: C1 + D1 + E1 + F1; Formula Values: 3.0 + 4.0 + 5.0 + ; Formula Ptg: 3.0 4.0 + 5.0 +  +; Ptgs: C1 D1 + E1 + F1 + Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@65259737'},
{id: '43d1eed0-2448-4f73-b084-d715ce37be45', label: 'F1\n', color: '#31b0d5', title: 'Name: F1<br>Value: <br>Type: EMPTY_CELL<br>Id: 43d1eed0-2448-4f73-b084-d715ce37be45<br>Formula Expression: Formula String: F1; Formula Values: ; Formula Ptg: ; Ptgs: F1 Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@65259737'},
{id: '247da25f-2901-4a59-abc5-b1aedd3cb663', label: '+\n12.0', color: '#f0ad4e', title: 'Name: +<br>Value: 12.0<br>Type: OPERATOR<br>Id: 247da25f-2901-4a59-abc5-b1aedd3cb663<br>Formula Expression: Formula String: C1 + D1 + E1 + F1; Formula Values: 3.0 + 4.0 + 5.0 + ; Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@65259737'},
{id: '5da6ddca-edfa-4029-8122-bd9f15425f5e', label: '+\n12.0', color: '#f0ad4e', title: 'Name: +<br>Value: 12.0<br>Type: OPERATOR<br>Id: 5da6ddca-edfa-4029-8122-bd9f15425f5e<br>Formula Expression: Formula String: C1 + D1 + E1; Formula Values: 3.0 + 4.0 + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@65259737'},
{id: '47672200-e608-49c9-9b1b-1b5c0d5451ee', label: '+\n7.0', color: '#f0ad4e', title: 'Name: +<br>Value: 7.0<br>Type: OPERATOR<br>Id: 47672200-e608-49c9-9b1b-1b5c0d5451ee<br>Formula Expression: Formula String: C1 + D1; Formula Values: 3.0 + 4.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@65259737'},
{id: '0fed3e54-ad6b-444f-82f9-a2887918058f', label: 'D1\n4.0', color: '#31b0d5', title: 'Name: D1<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 0fed3e54-ad6b-444f-82f9-a2887918058f<br>Formula Expression: Formula String: D1; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@65259737'},
{id: '73af492a-3e66-4a49-9e4a-efcd8e947c3b', label: 'E1\n5.0', color: '#31b0d5', title: 'Name: E1<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 73af492a-3e66-4a49-9e4a-efcd8e947c3b<br>Formula Expression: Formula String: E1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: E1 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@65259737'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '0fed3e54-ad6b-444f-82f9-a2887918058f', to: '47672200-e608-49c9-9b1b-1b5c0d5451ee'},
{from: '47672200-e608-49c9-9b1b-1b5c0d5451ee', to: '5da6ddca-edfa-4029-8122-bd9f15425f5e'},
{from: '43d1eed0-2448-4f73-b084-d715ce37be45', to: '247da25f-2901-4a59-abc5-b1aedd3cb663'},
{from: '5da6ddca-edfa-4029-8122-bd9f15425f5e', to: '247da25f-2901-4a59-abc5-b1aedd3cb663'},
{from: '247da25f-2901-4a59-abc5-b1aedd3cb663', to: 'd6eac819-818f-479e-9bad-52553fdbbbfe'},
{from: '73af492a-3e66-4a49-9e4a-efcd8e947c3b', to: '5da6ddca-edfa-4029-8122-bd9f15425f5e'},
{from: 'd0afa54a-0791-4765-943b-c7bd6be0fcbd', to: '47672200-e608-49c9-9b1b-1b5c0d5451ee'}
                            ]);