var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'daa60ed8-97e8-4678-b654-d48240468e9e', label: 'COLUMN\n3.0', color: '#f0ad4e', title: 'Name: COLUMN<br>Value: 3.0<br>Type: FUNCTION<br>Id: daa60ed8-97e8-4678-b654-d48240468e9e<br>Formula Expression: Formula String: COLUMN(C5); Formula Values: COLUMN(7702.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@902fdbe'},
{id: '11454815-39f8-4ecd-a0a4-26575fab9cc5', label: 'COLUMN\n4.0', color: '#f0ad4e', title: 'Name: COLUMN<br>Value: 4.0<br>Type: FUNCTION<br>Id: 11454815-39f8-4ecd-a0a4-26575fab9cc5<br>Formula Expression: Formula String: COLUMN(D6); Formula Values: COLUMN(116.41); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@902fdbe'},
{id: '529af867-65c5-41ce-9697-2ecf9402ffd1', label: 'F9\n4.0', color: '#31b0d5', title: 'Name: F9<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: 529af867-65c5-41ce-9697-2ecf9402ffd1<br>Formula Expression: Formula String: COLUMN(D6); Formula Values: COLUMN(116.41); Formula Ptg: 116.41 COLUMN ; Ptgs: D6 COLUMN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@902fdbe'},
{id: 'cc32d90a-b97c-4dc5-94a8-412fba5bbe73', label: 'F11\n3.0', color: '#31b0d5', title: 'Name: F11<br>Value: 3.0<br>Type: CELL_WITH_FORMULA<br>Id: cc32d90a-b97c-4dc5-94a8-412fba5bbe73<br>Formula Expression: Formula String: COLUMN(C5); Formula Values: COLUMN(7702.0); Formula Ptg: 7702.0 COLUMN ; Ptgs: C5 COLUMN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@902fdbe'},
{id: 'e6c612bc-8e75-4d69-bb64-af034c3aa493', label: 'D6\n116.41', color: '#31b0d5', title: 'Name: D6<br>Value: 116.41<br>Type: CELL_WITH_VALUE<br>Id: e6c612bc-8e75-4d69-bb64-af034c3aa493<br>Formula Expression: Formula String: D6; Formula Values: 116.41; Formula Ptg: 116.41; Ptgs: D6 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@902fdbe'},
{id: 'b563943d-b316-4624-a4f5-5e6d02a399e5', label: 'C5\n7702.0', color: '#31b0d5', title: 'Name: C5<br>Value: 7702.0<br>Type: CELL_WITH_VALUE<br>Id: b563943d-b316-4624-a4f5-5e6d02a399e5<br>Formula Expression: Formula String: C5; Formula Values: 7702.0; Formula Ptg: 7702.0; Ptgs: C5 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@902fdbe'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'e6c612bc-8e75-4d69-bb64-af034c3aa493', to: '11454815-39f8-4ecd-a0a4-26575fab9cc5'},
{from: '11454815-39f8-4ecd-a0a4-26575fab9cc5', to: '529af867-65c5-41ce-9697-2ecf9402ffd1'},
{from: 'b563943d-b316-4624-a4f5-5e6d02a399e5', to: 'daa60ed8-97e8-4678-b654-d48240468e9e'},
{from: 'daa60ed8-97e8-4678-b654-d48240468e9e', to: 'cc32d90a-b97c-4dc5-94a8-412fba5bbe73'}
                            ]);