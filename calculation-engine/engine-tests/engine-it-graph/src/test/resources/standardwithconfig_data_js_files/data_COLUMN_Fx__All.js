var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'f7ef2b60-7eaa-438a-9213-3ad2b9fb4776', label: 'F11\n3.0', color: '#31b0d5', title: 'Name: F11<br>Value: 3.0<br>Type: CELL_WITH_FORMULA<br>Id: f7ef2b60-7eaa-438a-9213-3ad2b9fb4776<br>Formula Expression: Formula String: COLUMN(C5); Formula Values: COLUMN(7702.0); Formula Ptg: 7702.0 COLUMN ; Ptgs: C5 COLUMN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1611ce1c'},
{id: '9e140d6a-c68e-40dc-ac91-17e33cdd70c2', label: 'F9\n4.0', color: '#31b0d5', title: 'Name: F9<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: 9e140d6a-c68e-40dc-ac91-17e33cdd70c2<br>Formula Expression: Formula String: COLUMN(D6); Formula Values: COLUMN(116.41); Formula Ptg: 116.41 COLUMN ; Ptgs: D6 COLUMN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1611ce1c'},
{id: 'f1d8ca26-30fa-45e5-b7ab-9b147fbc5ced', label: 'COLUMN\n3.0', color: '#f0ad4e', title: 'Name: COLUMN<br>Value: 3.0<br>Type: FUNCTION<br>Id: f1d8ca26-30fa-45e5-b7ab-9b147fbc5ced<br>Formula Expression: Formula String: COLUMN(C5); Formula Values: COLUMN(7702.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1611ce1c'},
{id: '1c3d2f9b-c3e3-4799-b956-488e232ed1b8', label: 'COLUMN\n4.0', color: '#f0ad4e', title: 'Name: COLUMN<br>Value: 4.0<br>Type: FUNCTION<br>Id: 1c3d2f9b-c3e3-4799-b956-488e232ed1b8<br>Formula Expression: Formula String: COLUMN(D6); Formula Values: COLUMN(116.41); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1611ce1c'},
{id: '4fb0e700-8936-4847-8e6c-80efe6e26c3f', label: 'D6\n116.41', color: '#31b0d5', title: 'Name: D6<br>Value: 116.41<br>Type: CELL_WITH_VALUE<br>Id: 4fb0e700-8936-4847-8e6c-80efe6e26c3f<br>Formula Expression: Formula String: D6; Formula Values: 116.41; Formula Ptg: 116.41; Ptgs: D6 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1611ce1c'},
{id: '22b11747-2b2a-4921-a575-04dd007eeef1', label: 'C5\n7702.0', color: '#31b0d5', title: 'Name: C5<br>Value: 7702.0<br>Type: CELL_WITH_VALUE<br>Id: 22b11747-2b2a-4921-a575-04dd007eeef1<br>Formula Expression: Formula String: C5; Formula Values: 7702.0; Formula Ptg: 7702.0; Ptgs: C5 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1611ce1c'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '22b11747-2b2a-4921-a575-04dd007eeef1', to: 'f1d8ca26-30fa-45e5-b7ab-9b147fbc5ced'},
{from: 'f1d8ca26-30fa-45e5-b7ab-9b147fbc5ced', to: 'f7ef2b60-7eaa-438a-9213-3ad2b9fb4776'},
{from: '4fb0e700-8936-4847-8e6c-80efe6e26c3f', to: '1c3d2f9b-c3e3-4799-b956-488e232ed1b8'},
{from: '1c3d2f9b-c3e3-4799-b956-488e232ed1b8', to: '9e140d6a-c68e-40dc-ac91-17e33cdd70c2'}
                            ]);