var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '2c5854f9-147e-448b-9266-60d62dbf21e3', label: 'E5\nFALSE', color: '#31b0d5', title: 'Name: E5<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 2c5854f9-147e-448b-9266-60d62dbf21e3<br>Formula Expression: Formula String: EXACT(B2, A2); Formula Values: EXACT(56.0, 23.0); Formula Ptg: 56.0, 23.0 EXACT ; Ptgs: B2, A2 EXACT  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@30ec211a'},
{id: '41de4d64-5b29-4513-9b3f-fa7c2726273d', label: 'EXACT\nTRUE', color: '#f0ad4e', title: 'Name: EXACT<br>Value: TRUE<br>Type: FUNCTION<br>Id: 41de4d64-5b29-4513-9b3f-fa7c2726273d<br>Formula Expression: Formula String: EXACT(C3, C2); Formula Values: EXACT(76.0, 76.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@30ec211a'},
{id: 'af2d6e7d-cf63-41cc-b8b8-8b7865b672fb', label: 'A2\n23.0', color: '#31b0d5', title: 'Name: A2<br>Value: 23.0<br>Type: CELL_WITH_VALUE<br>Id: af2d6e7d-cf63-41cc-b8b8-8b7865b672fb<br>Formula Expression: Formula String: A2; Formula Values: 23.0; Formula Ptg: 23.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@30ec211a'},
{id: 'a26978d5-4be2-4563-99d7-8b78f6a8c257', label: 'EXACT\nFALSE', color: '#f0ad4e', title: 'Name: EXACT<br>Value: FALSE<br>Type: FUNCTION<br>Id: a26978d5-4be2-4563-99d7-8b78f6a8c257<br>Formula Expression: Formula String: EXACT(B2, A2); Formula Values: EXACT(56.0, 23.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@30ec211a'},
{id: '89fe15ff-2682-4537-9484-6aa11d1cf971', label: 'B2\n56.0', color: '#31b0d5', title: 'Name: B2<br>Value: 56.0<br>Type: CELL_WITH_VALUE<br>Id: 89fe15ff-2682-4537-9484-6aa11d1cf971<br>Formula Expression: Formula String: B2; Formula Values: 56.0; Formula Ptg: 56.0; Ptgs: B2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@30ec211a'},
{id: '8266c17b-674c-45f2-953a-623eb7a8cde4', label: 'C2\n76.0', color: '#31b0d5', title: 'Name: C2<br>Value: 76.0<br>Type: CELL_WITH_VALUE<br>Id: 8266c17b-674c-45f2-953a-623eb7a8cde4<br>Formula Expression: Formula String: C2; Formula Values: 76.0; Formula Ptg: 76.0; Ptgs: C2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@30ec211a'},
{id: '8f56e4fc-9d2b-416e-8732-5204b2cf1a21', label: 'C3\n76.0', color: '#31b0d5', title: 'Name: C3<br>Value: 76.0<br>Type: CELL_WITH_VALUE<br>Id: 8f56e4fc-9d2b-416e-8732-5204b2cf1a21<br>Formula Expression: Formula String: C3; Formula Values: 76.0; Formula Ptg: 76.0; Ptgs: C3 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@30ec211a'},
{id: '4a4ea35c-ae25-4762-a498-6d2a4a2c1702', label: 'E6\nTRUE', color: '#31b0d5', title: 'Name: E6<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 4a4ea35c-ae25-4762-a498-6d2a4a2c1702<br>Formula Expression: Formula String: EXACT(C3, C2); Formula Values: EXACT(76.0, 76.0); Formula Ptg: 76.0, 76.0 EXACT ; Ptgs: C3, C2 EXACT  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@30ec211a'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '8f56e4fc-9d2b-416e-8732-5204b2cf1a21', to: '41de4d64-5b29-4513-9b3f-fa7c2726273d'},
{from: '89fe15ff-2682-4537-9484-6aa11d1cf971', to: 'a26978d5-4be2-4563-99d7-8b78f6a8c257'},
{from: 'af2d6e7d-cf63-41cc-b8b8-8b7865b672fb', to: 'a26978d5-4be2-4563-99d7-8b78f6a8c257'},
{from: 'a26978d5-4be2-4563-99d7-8b78f6a8c257', to: '2c5854f9-147e-448b-9266-60d62dbf21e3'},
{from: '41de4d64-5b29-4513-9b3f-fa7c2726273d', to: '4a4ea35c-ae25-4762-a498-6d2a4a2c1702'},
{from: '8266c17b-674c-45f2-953a-623eb7a8cde4', to: '41de4d64-5b29-4513-9b3f-fa7c2726273d'}
                            ]);