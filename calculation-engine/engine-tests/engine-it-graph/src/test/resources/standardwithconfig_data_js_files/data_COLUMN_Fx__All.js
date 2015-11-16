var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '9c772bd1-680c-4d5c-a8aa-d625f25bf0be', label: 'F11\n3.0', color: '#31b0d5', title: 'Name: F11<br>Value: 3.0<br>Type: CELL_WITH_FORMULA<br>Id: 9c772bd1-680c-4d5c-a8aa-d625f25bf0be<br>Formula Expression: Formula String: COLUMN(C5); Formula Values: COLUMN(7702.0); Formula Ptg: 7702.0 COLUMN ; Ptgs: C5 COLUMN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1611ce1c'},
{id: '8cdbf2b0-ead5-4926-a5cc-a9b5aef23896', label: 'F9\n4.0', color: '#31b0d5', title: 'Name: F9<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: 8cdbf2b0-ead5-4926-a5cc-a9b5aef23896<br>Formula Expression: Formula String: COLUMN(D6); Formula Values: COLUMN(116.41); Formula Ptg: 116.41 COLUMN ; Ptgs: D6 COLUMN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1611ce1c'},
{id: 'a96b8e12-8f9d-4d09-8f8e-2d7f34c073b9', label: 'COLUMN\n3.0', color: '#f0ad4e', title: 'Name: COLUMN<br>Value: 3.0<br>Type: FUNCTION<br>Id: a96b8e12-8f9d-4d09-8f8e-2d7f34c073b9<br>Formula Expression: Formula String: COLUMN(C5); Formula Values: COLUMN(7702.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1611ce1c'},
{id: '3c929f23-786e-491e-bf6f-e19f7b08f44f', label: 'COLUMN\n4.0', color: '#f0ad4e', title: 'Name: COLUMN<br>Value: 4.0<br>Type: FUNCTION<br>Id: 3c929f23-786e-491e-bf6f-e19f7b08f44f<br>Formula Expression: Formula String: COLUMN(D6); Formula Values: COLUMN(116.41); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1611ce1c'},
{id: '2038905e-6592-436e-b000-fccb3a188f8a', label: 'D6\n116.41', color: '#31b0d5', title: 'Name: D6<br>Value: 116.41<br>Type: CELL_WITH_VALUE<br>Id: 2038905e-6592-436e-b000-fccb3a188f8a<br>Formula Expression: Formula String: D6; Formula Values: 116.41; Formula Ptg: 116.41; Ptgs: D6 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1611ce1c'},
{id: 'ae687464-53d5-4ce7-80c2-584b051ac5b0', label: 'C5\n7702.0', color: '#31b0d5', title: 'Name: C5<br>Value: 7702.0<br>Type: CELL_WITH_VALUE<br>Id: ae687464-53d5-4ce7-80c2-584b051ac5b0<br>Formula Expression: Formula String: C5; Formula Values: 7702.0; Formula Ptg: 7702.0; Ptgs: C5 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1611ce1c'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'ae687464-53d5-4ce7-80c2-584b051ac5b0', to: 'a96b8e12-8f9d-4d09-8f8e-2d7f34c073b9'},
{from: 'a96b8e12-8f9d-4d09-8f8e-2d7f34c073b9', to: '9c772bd1-680c-4d5c-a8aa-d625f25bf0be'},
{from: '2038905e-6592-436e-b000-fccb3a188f8a', to: '3c929f23-786e-491e-bf6f-e19f7b08f44f'},
{from: '3c929f23-786e-491e-bf6f-e19f7b08f44f', to: '8cdbf2b0-ead5-4926-a5cc-a9b5aef23896'}
                            ]);