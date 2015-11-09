var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'c3341b7b-62a7-47ac-9a99-65e015cc65c5', label: 'F9\n4.0', color: '#31b0d5', title: 'Name: F9<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: c3341b7b-62a7-47ac-9a99-65e015cc65c5<br>Formula Expression: Formula String: COLUMN(D6); Formula Values: COLUMN(116.41); Formula Ptg: 116.41 COLUMN ; Ptgs: D6 COLUMN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2d5c160e'},
{id: 'd30a8642-4980-4dcd-af02-14454f26baf1', label: 'COLUMN\n4.0', color: '#f0ad4e', title: 'Name: COLUMN<br>Value: 4.0<br>Type: FUNCTION<br>Id: d30a8642-4980-4dcd-af02-14454f26baf1<br>Formula Expression: Formula String: COLUMN(D6); Formula Values: COLUMN(116.41); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2d5c160e'},
{id: '9e7e42f7-408a-4d7b-9a4a-d995e3325570', label: 'C5\n7702.0', color: '#31b0d5', title: 'Name: C5<br>Value: 7702.0<br>Type: CELL_WITH_VALUE<br>Id: 9e7e42f7-408a-4d7b-9a4a-d995e3325570<br>Formula Expression: Formula String: C5; Formula Values: 7702.0; Formula Ptg: 7702.0; Ptgs: C5 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2d5c160e'},
{id: '0ab31185-1756-478d-8e38-ac8ebcb4d642', label: 'F11\n3.0', color: '#31b0d5', title: 'Name: F11<br>Value: 3.0<br>Type: CELL_WITH_FORMULA<br>Id: 0ab31185-1756-478d-8e38-ac8ebcb4d642<br>Formula Expression: Formula String: COLUMN(C5); Formula Values: COLUMN(7702.0); Formula Ptg: 7702.0 COLUMN ; Ptgs: C5 COLUMN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2d5c160e'},
{id: '2a9deb06-603f-4c4d-a8bd-47b65e600588', label: 'COLUMN\n3.0', color: '#f0ad4e', title: 'Name: COLUMN<br>Value: 3.0<br>Type: FUNCTION<br>Id: 2a9deb06-603f-4c4d-a8bd-47b65e600588<br>Formula Expression: Formula String: COLUMN(C5); Formula Values: COLUMN(7702.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2d5c160e'},
{id: 'b14de842-d554-4bca-94e4-3a884df9f296', label: 'D6\n116.41', color: '#31b0d5', title: 'Name: D6<br>Value: 116.41<br>Type: CELL_WITH_VALUE<br>Id: b14de842-d554-4bca-94e4-3a884df9f296<br>Formula Expression: Formula String: D6; Formula Values: 116.41; Formula Ptg: 116.41; Ptgs: D6 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2d5c160e'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'b14de842-d554-4bca-94e4-3a884df9f296', to: 'd30a8642-4980-4dcd-af02-14454f26baf1'},
{from: '2a9deb06-603f-4c4d-a8bd-47b65e600588', to: '0ab31185-1756-478d-8e38-ac8ebcb4d642'},
{from: 'd30a8642-4980-4dcd-af02-14454f26baf1', to: 'c3341b7b-62a7-47ac-9a99-65e015cc65c5'},
{from: '9e7e42f7-408a-4d7b-9a4a-d995e3325570', to: '2a9deb06-603f-4c4d-a8bd-47b65e600588'}
                            ]);