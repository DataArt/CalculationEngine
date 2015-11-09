var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'f4e37570-7542-4b69-81e0-fb20eb82a8bc', label: 'D6\n116.41', color: '#31b0d5', title: 'Name: D6<br>Value: 116.41<br>Type: CELL_WITH_VALUE<br>Id: f4e37570-7542-4b69-81e0-fb20eb82a8bc<br>Formula Expression: Formula String: D6; Formula Values: 116.41; Formula Ptg: 116.41; Ptgs: D6 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@39da0d43'},
{id: 'b32e693d-9290-4c1e-9016-ebc906fdd25e', label: 'COLUMN\n4.0', color: '#f0ad4e', title: 'Name: COLUMN<br>Value: 4.0<br>Type: FUNCTION<br>Id: b32e693d-9290-4c1e-9016-ebc906fdd25e<br>Formula Expression: Formula String: COLUMN(D6); Formula Values: COLUMN(116.41); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@39da0d43'},
{id: '1c94e879-9b0d-47b1-aea3-2f84d955b78e', label: 'COLUMN\n3.0', color: '#f0ad4e', title: 'Name: COLUMN<br>Value: 3.0<br>Type: FUNCTION<br>Id: 1c94e879-9b0d-47b1-aea3-2f84d955b78e<br>Formula Expression: Formula String: COLUMN(C5); Formula Values: COLUMN(7702.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@39da0d43'},
{id: '002c665d-2406-474a-b4eb-91edcf6ec43a', label: 'F9\n4.0', color: '#31b0d5', title: 'Name: F9<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: 002c665d-2406-474a-b4eb-91edcf6ec43a<br>Formula Expression: Formula String: COLUMN(D6); Formula Values: COLUMN(116.41); Formula Ptg: 116.41 COLUMN ; Ptgs: D6 COLUMN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@39da0d43'},
{id: 'bde99084-b0ba-4894-a5b5-4fdd0e98e0f9', label: 'C5\n7702.0', color: '#31b0d5', title: 'Name: C5<br>Value: 7702.0<br>Type: CELL_WITH_VALUE<br>Id: bde99084-b0ba-4894-a5b5-4fdd0e98e0f9<br>Formula Expression: Formula String: C5; Formula Values: 7702.0; Formula Ptg: 7702.0; Ptgs: C5 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@39da0d43'},
{id: 'bc04c217-8665-482e-ada8-45a71c684d5f', label: 'F11\n3.0', color: '#31b0d5', title: 'Name: F11<br>Value: 3.0<br>Type: CELL_WITH_FORMULA<br>Id: bc04c217-8665-482e-ada8-45a71c684d5f<br>Formula Expression: Formula String: COLUMN(C5); Formula Values: COLUMN(7702.0); Formula Ptg: 7702.0 COLUMN ; Ptgs: C5 COLUMN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@39da0d43'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'bde99084-b0ba-4894-a5b5-4fdd0e98e0f9', to: '1c94e879-9b0d-47b1-aea3-2f84d955b78e'},
{from: 'b32e693d-9290-4c1e-9016-ebc906fdd25e', to: '002c665d-2406-474a-b4eb-91edcf6ec43a'},
{from: 'f4e37570-7542-4b69-81e0-fb20eb82a8bc', to: 'b32e693d-9290-4c1e-9016-ebc906fdd25e'},
{from: '1c94e879-9b0d-47b1-aea3-2f84d955b78e', to: 'bc04c217-8665-482e-ada8-45a71c684d5f'}
                            ]);