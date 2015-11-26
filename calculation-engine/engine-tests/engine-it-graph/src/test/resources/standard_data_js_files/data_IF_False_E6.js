var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '595fa143-98dc-493e-8d61-fb7a8c521473', label: 'C3\n8.0', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 595fa143-98dc-493e-8d61-fb7a8c521473<br>Formula Expression: Formula String: C3; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: C3 Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5f2f577'},
{id: '85f05ae7-b074-412d-8628-3451268d6b6f', label: '>\nFALSE', color: '#f0ad4e', title: 'Name: ><br>Alias: null<br>Value: FALSE<br>Type: OPERATOR<br>Id: 85f05ae7-b074-412d-8628-3451268d6b6f<br>Formula Expression: Formula String: D1 > VALUE; Formula Values: 4.0 > 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5f2f577'},
{id: '08508719-fa64-4c0d-9eba-301c13e99ace', label: 'E6\n8.0', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_FORMULA<br>Id: 08508719-fa64-4c0d-9eba-301c13e99ace<br>Formula Expression: Formula String: IF(D1>5,D2,C3); Formula Values: IF(4.0 > 5.0, 8.0); Formula Ptg: 8.0, 4.0 5.0 > IF ; Ptgs: C3, D1 VALUE > IF  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5f2f577'},
{id: '4c079b35-91b3-479e-bad3-04c6d8b0fb18', label: 'D1\n4.0', color: '#31b0d5', title: 'Name: D1<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 4c079b35-91b3-479e-bad3-04c6d8b0fb18<br>Formula Expression: Formula String: D1; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5f2f577'},
{id: '4a48158b-d010-4ca0-938e-886b607598e5', label: 'VALUE\n5.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 5.0<br>Type: CONSTANT_VALUE<br>Id: 4a48158b-d010-4ca0-938e-886b607598e5<br>Formula Expression: Formula String: VALUE; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5f2f577'},
{id: '4d159836-1578-4828-91ae-3e10f8555268', label: 'IF\n8.0', color: '#f0ad4e', title: 'Name: IF<br>Alias: null<br>Value: 8.0<br>Type: IF<br>Id: 4d159836-1578-4828-91ae-3e10f8555268<br>Formula Expression: Formula String: IF(D1>5,D2,C3); Formula Values: IF(4.0 > 5.0, 8.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5f2f577'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '595fa143-98dc-493e-8d61-fb7a8c521473', to: '4d159836-1578-4828-91ae-3e10f8555268'},
{from: '4d159836-1578-4828-91ae-3e10f8555268', to: '08508719-fa64-4c0d-9eba-301c13e99ace'},
{from: '4a48158b-d010-4ca0-938e-886b607598e5', to: '85f05ae7-b074-412d-8628-3451268d6b6f'},
{from: '85f05ae7-b074-412d-8628-3451268d6b6f', to: '4d159836-1578-4828-91ae-3e10f8555268'},
{from: '4c079b35-91b3-479e-bad3-04c6d8b0fb18', to: '85f05ae7-b074-412d-8628-3451268d6b6f'}
                            ]);