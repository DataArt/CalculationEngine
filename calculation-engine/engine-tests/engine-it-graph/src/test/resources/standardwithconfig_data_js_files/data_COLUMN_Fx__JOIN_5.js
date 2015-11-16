var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '4ecdb290-3978-430e-8f07-7aaa42fc378d', label: 'D6\n116.41', color: '#31b0d5', title: 'Name: D6<br>Value: 116.41<br>Type: CELL_WITH_VALUE<br>Id: 4ecdb290-3978-430e-8f07-7aaa42fc378d<br>Formula Expression: Formula String: D6; Formula Values: 116.41; Formula Ptg: 116.41; Ptgs: D6 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@39da0d43'},
{id: '579b9548-b045-4de0-91f2-1e6e8f0919d3', label: 'COLUMN\n4.0', color: '#f0ad4e', title: 'Name: COLUMN<br>Value: 4.0<br>Type: FUNCTION<br>Id: 579b9548-b045-4de0-91f2-1e6e8f0919d3<br>Formula Expression: Formula String: COLUMN(D6); Formula Values: COLUMN(116.41); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@39da0d43'},
{id: '5f79c747-ca88-47de-b76b-36b879292719', label: 'COLUMN\n3.0', color: '#f0ad4e', title: 'Name: COLUMN<br>Value: 3.0<br>Type: FUNCTION<br>Id: 5f79c747-ca88-47de-b76b-36b879292719<br>Formula Expression: Formula String: COLUMN(C5); Formula Values: COLUMN(7702.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@39da0d43'},
{id: 'a2dda334-881e-4fe7-bad0-a6244e5e3a0b', label: 'F9\n4.0', color: '#31b0d5', title: 'Name: F9<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: a2dda334-881e-4fe7-bad0-a6244e5e3a0b<br>Formula Expression: Formula String: COLUMN(D6); Formula Values: COLUMN(116.41); Formula Ptg: 116.41 COLUMN ; Ptgs: D6 COLUMN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@39da0d43'},
{id: '0804cf94-aefe-4e28-98f8-7278a4d19f61', label: 'C5\n7702.0', color: '#31b0d5', title: 'Name: C5<br>Value: 7702.0<br>Type: CELL_WITH_VALUE<br>Id: 0804cf94-aefe-4e28-98f8-7278a4d19f61<br>Formula Expression: Formula String: C5; Formula Values: 7702.0; Formula Ptg: 7702.0; Ptgs: C5 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@39da0d43'},
{id: '03b99767-12fe-4a99-8a90-4824315a548c', label: 'F11\n3.0', color: '#31b0d5', title: 'Name: F11<br>Value: 3.0<br>Type: CELL_WITH_FORMULA<br>Id: 03b99767-12fe-4a99-8a90-4824315a548c<br>Formula Expression: Formula String: COLUMN(C5); Formula Values: COLUMN(7702.0); Formula Ptg: 7702.0 COLUMN ; Ptgs: C5 COLUMN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@39da0d43'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '0804cf94-aefe-4e28-98f8-7278a4d19f61', to: '5f79c747-ca88-47de-b76b-36b879292719'},
{from: '579b9548-b045-4de0-91f2-1e6e8f0919d3', to: 'a2dda334-881e-4fe7-bad0-a6244e5e3a0b'},
{from: '4ecdb290-3978-430e-8f07-7aaa42fc378d', to: '579b9548-b045-4de0-91f2-1e6e8f0919d3'},
{from: '5f79c747-ca88-47de-b76b-36b879292719', to: '03b99767-12fe-4a99-8a90-4824315a548c'}
                            ]);