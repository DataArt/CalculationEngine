var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3b9ca973-a1fe-4e0a-8834-e4b6568223ae', label: 'C5\n7702.0', color: '#31b0d5', title: 'Name: C5<br>Value: 7702.0<br>Type: CELL_WITH_VALUE<br>Id: 3b9ca973-a1fe-4e0a-8834-e4b6568223ae<br>Formula Expression: Formula String: C5; Formula Values: 7702.0; Formula Ptg: 7702.0; Ptgs: C5 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7dee835'},
{id: '9c3e8417-6a50-427f-874b-dd1b2a59d8c0', label: 'F9\n4.0', color: '#31b0d5', title: 'Name: F9<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: 9c3e8417-6a50-427f-874b-dd1b2a59d8c0<br>Formula Expression: Formula String: COLUMN(D6); Formula Values: COLUMN(116.41); Formula Ptg: 116.41 COLUMN ; Ptgs: D6 COLUMN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7dee835'},
{id: '21416f04-dd4c-4cf5-bbd7-2fb4b1090214', label: 'D6\n116.41', color: '#31b0d5', title: 'Name: D6<br>Value: 116.41<br>Type: CELL_WITH_VALUE<br>Id: 21416f04-dd4c-4cf5-bbd7-2fb4b1090214<br>Formula Expression: Formula String: D6; Formula Values: 116.41; Formula Ptg: 116.41; Ptgs: D6 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7dee835'},
{id: 'f3f9d0f7-f9dd-4b45-b388-d80b86befc3f', label: 'COLUMN\n4.0', color: '#f0ad4e', title: 'Name: COLUMN<br>Value: 4.0<br>Type: FUNCTION<br>Id: f3f9d0f7-f9dd-4b45-b388-d80b86befc3f<br>Formula Expression: Formula String: COLUMN(D6); Formula Values: COLUMN(116.41); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7dee835'},
{id: '016adaa7-5299-4922-9752-d7355a83784e', label: 'F11\n3.0', color: '#31b0d5', title: 'Name: F11<br>Value: 3.0<br>Type: CELL_WITH_FORMULA<br>Id: 016adaa7-5299-4922-9752-d7355a83784e<br>Formula Expression: Formula String: COLUMN(C5); Formula Values: COLUMN(7702.0); Formula Ptg: 7702.0 COLUMN ; Ptgs: C5 COLUMN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7dee835'},
{id: 'acb1d8e2-41ab-4e5a-baea-29f75ea2276c', label: 'COLUMN\n3.0', color: '#f0ad4e', title: 'Name: COLUMN<br>Value: 3.0<br>Type: FUNCTION<br>Id: acb1d8e2-41ab-4e5a-baea-29f75ea2276c<br>Formula Expression: Formula String: COLUMN(C5); Formula Values: COLUMN(7702.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7dee835'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'f3f9d0f7-f9dd-4b45-b388-d80b86befc3f', to: '9c3e8417-6a50-427f-874b-dd1b2a59d8c0'},
{from: '21416f04-dd4c-4cf5-bbd7-2fb4b1090214', to: 'f3f9d0f7-f9dd-4b45-b388-d80b86befc3f'},
{from: 'acb1d8e2-41ab-4e5a-baea-29f75ea2276c', to: '016adaa7-5299-4922-9752-d7355a83784e'},
{from: '3b9ca973-a1fe-4e0a-8834-e4b6568223ae', to: 'acb1d8e2-41ab-4e5a-baea-29f75ea2276c'}
                            ]);