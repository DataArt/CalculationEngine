var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'efd54565-0226-46b0-b6da-7f04dd08c70c', label: 'F9\n4.0', color: '#31b0d5', title: 'Name: F9<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: efd54565-0226-46b0-b6da-7f04dd08c70c<br>Formula Expression: Formula String: COLUMN(D6); Formula Values: COLUMN(116.41); Formula Ptg: 116.41 COLUMN ; Ptgs: D6 COLUMN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2d5c160e'},
{id: '02d9ad36-1540-43fb-a7f8-7c6d9760b8cf', label: 'COLUMN\n4.0', color: '#f0ad4e', title: 'Name: COLUMN<br>Value: 4.0<br>Type: FUNCTION<br>Id: 02d9ad36-1540-43fb-a7f8-7c6d9760b8cf<br>Formula Expression: Formula String: COLUMN(D6); Formula Values: COLUMN(116.41); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2d5c160e'},
{id: '70a6210c-cf88-46ff-af50-49f2b64032e0', label: 'C5\n7702.0', color: '#31b0d5', title: 'Name: C5<br>Value: 7702.0<br>Type: CELL_WITH_VALUE<br>Id: 70a6210c-cf88-46ff-af50-49f2b64032e0<br>Formula Expression: Formula String: C5; Formula Values: 7702.0; Formula Ptg: 7702.0; Ptgs: C5 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2d5c160e'},
{id: '758a400b-a311-404d-a41f-10f10d85666c', label: 'F11\n3.0', color: '#31b0d5', title: 'Name: F11<br>Value: 3.0<br>Type: CELL_WITH_FORMULA<br>Id: 758a400b-a311-404d-a41f-10f10d85666c<br>Formula Expression: Formula String: COLUMN(C5); Formula Values: COLUMN(7702.0); Formula Ptg: 7702.0 COLUMN ; Ptgs: C5 COLUMN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2d5c160e'},
{id: '0e64ed36-71a2-4d42-8902-6929ecc7067b', label: 'COLUMN\n3.0', color: '#f0ad4e', title: 'Name: COLUMN<br>Value: 3.0<br>Type: FUNCTION<br>Id: 0e64ed36-71a2-4d42-8902-6929ecc7067b<br>Formula Expression: Formula String: COLUMN(C5); Formula Values: COLUMN(7702.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2d5c160e'},
{id: '7e8533f4-009a-40b2-9aef-97b76bede43e', label: 'D6\n116.41', color: '#31b0d5', title: 'Name: D6<br>Value: 116.41<br>Type: CELL_WITH_VALUE<br>Id: 7e8533f4-009a-40b2-9aef-97b76bede43e<br>Formula Expression: Formula String: D6; Formula Values: 116.41; Formula Ptg: 116.41; Ptgs: D6 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2d5c160e'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '7e8533f4-009a-40b2-9aef-97b76bede43e', to: '02d9ad36-1540-43fb-a7f8-7c6d9760b8cf'},
{from: '0e64ed36-71a2-4d42-8902-6929ecc7067b', to: '758a400b-a311-404d-a41f-10f10d85666c'},
{from: '02d9ad36-1540-43fb-a7f8-7c6d9760b8cf', to: 'efd54565-0226-46b0-b6da-7f04dd08c70c'},
{from: '70a6210c-cf88-46ff-af50-49f2b64032e0', to: '0e64ed36-71a2-4d42-8902-6929ecc7067b'}
                            ]);