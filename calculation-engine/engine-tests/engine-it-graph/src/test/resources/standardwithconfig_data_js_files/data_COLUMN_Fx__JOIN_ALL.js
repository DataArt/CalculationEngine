var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'c4387eee-7cab-489c-9fe2-e9df42ee21bf', label: 'C5\n7702.0', color: '#31b0d5', title: 'Name: C5<br>Value: 7702.0<br>Type: CELL_WITH_VALUE<br>Id: c4387eee-7cab-489c-9fe2-e9df42ee21bf<br>Formula Expression: Formula String: C5; Formula Values: 7702.0; Formula Ptg: 7702.0; Ptgs: C5 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5d5f10b2'},
{id: '878e58bf-8504-4194-9d01-fed37991e226', label: 'COLUMN\n3.0', color: '#f0ad4e', title: 'Name: COLUMN<br>Value: 3.0<br>Type: FUNCTION<br>Id: 878e58bf-8504-4194-9d01-fed37991e226<br>Formula Expression: Formula String: COLUMN(C5); Formula Values: COLUMN(7702.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5d5f10b2'},
{id: '68152e33-39ce-4cb4-92dd-ffb9da579465', label: 'F11\n3.0', color: '#31b0d5', title: 'Name: F11<br>Value: 3.0<br>Type: CELL_WITH_FORMULA<br>Id: 68152e33-39ce-4cb4-92dd-ffb9da579465<br>Formula Expression: Formula String: COLUMN(C5); Formula Values: COLUMN(7702.0); Formula Ptg: 7702.0 COLUMN ; Ptgs: C5 COLUMN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5d5f10b2'},
{id: '7bb346a7-3822-4ef0-b837-fe43a77b7929', label: 'D6\n116.41', color: '#31b0d5', title: 'Name: D6<br>Value: 116.41<br>Type: CELL_WITH_VALUE<br>Id: 7bb346a7-3822-4ef0-b837-fe43a77b7929<br>Formula Expression: Formula String: D6; Formula Values: 116.41; Formula Ptg: 116.41; Ptgs: D6 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5d5f10b2'},
{id: '74151311-25dd-479d-a15a-376cb0e221ef', label: 'F9\n4.0', color: '#31b0d5', title: 'Name: F9<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: 74151311-25dd-479d-a15a-376cb0e221ef<br>Formula Expression: Formula String: COLUMN(D6); Formula Values: COLUMN(116.41); Formula Ptg: 116.41 COLUMN ; Ptgs: D6 COLUMN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5d5f10b2'},
{id: 'd2f569c4-ca49-4447-b380-c49f1d8e0b04', label: 'COLUMN\n4.0', color: '#f0ad4e', title: 'Name: COLUMN<br>Value: 4.0<br>Type: FUNCTION<br>Id: d2f569c4-ca49-4447-b380-c49f1d8e0b04<br>Formula Expression: Formula String: COLUMN(D6); Formula Values: COLUMN(116.41); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5d5f10b2'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '7bb346a7-3822-4ef0-b837-fe43a77b7929', to: 'd2f569c4-ca49-4447-b380-c49f1d8e0b04'},
{from: '878e58bf-8504-4194-9d01-fed37991e226', to: '68152e33-39ce-4cb4-92dd-ffb9da579465'},
{from: 'd2f569c4-ca49-4447-b380-c49f1d8e0b04', to: '74151311-25dd-479d-a15a-376cb0e221ef'},
{from: 'c4387eee-7cab-489c-9fe2-e9df42ee21bf', to: '878e58bf-8504-4194-9d01-fed37991e226'}
                            ]);