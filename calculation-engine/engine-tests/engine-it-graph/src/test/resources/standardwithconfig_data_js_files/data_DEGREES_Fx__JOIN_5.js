var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '43d765e8-421f-4676-be63-4819a928a336', label: 'DEGREES\n180.0', color: '#f0ad4e', title: 'Name: DEGREES<br>Value: 180.0<br>Type: FUNCTION<br>Id: 43d765e8-421f-4676-be63-4819a928a336<br>Formula Expression: Formula String: DEGREES(PI()); Formula Values: DEGREES(PI()); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3be94b12'},
{id: '8d61bdad-a898-4c17-911a-fc2aa6aaad9f', label: 'B5\n120.0', color: '#31b0d5', title: 'Name: B5<br>Value: 120.0<br>Type: CELL_WITH_VALUE<br>Id: 8d61bdad-a898-4c17-911a-fc2aa6aaad9f<br>Formula Expression: Formula String: B5; Formula Values: 120.0; Formula Ptg: 120.0; Ptgs: B5 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3be94b12'},
{id: '1a0c596f-9afc-4c78-a62f-63e8f96c42f0', label: 'E6\n180.0', color: '#31b0d5', title: 'Name: E6<br>Value: 180.0<br>Type: CELL_WITH_FORMULA<br>Id: 1a0c596f-9afc-4c78-a62f-63e8f96c42f0<br>Formula Expression: Formula String: DEGREES(PI()); Formula Values: DEGREES(PI()); Formula Ptg:  PI  DEGREES ; Ptgs:  PI  DEGREES  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3be94b12'},
{id: 'c0dd42f4-ba47-4460-9ab2-627a2c2295c7', label: 'DEGREES\n6875.493541569879', color: '#f0ad4e', title: 'Name: DEGREES<br>Value: 6875.493541569879<br>Type: FUNCTION<br>Id: c0dd42f4-ba47-4460-9ab2-627a2c2295c7<br>Formula Expression: Formula String: DEGREES(B5); Formula Values: DEGREES(120.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3be94b12'},
{id: '1647c91e-2099-4cd6-9b3e-cafeeee497fe', label: 'E7\n6875.493541569879', color: '#31b0d5', title: 'Name: E7<br>Value: 6875.493541569879<br>Type: CELL_WITH_FORMULA<br>Id: 1647c91e-2099-4cd6-9b3e-cafeeee497fe<br>Formula Expression: Formula String: DEGREES(B5); Formula Values: DEGREES(120.0); Formula Ptg: 120.0 DEGREES ; Ptgs: B5 DEGREES  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3be94b12'},
{id: 'e0044d5c-11c8-42cc-b3f6-7034ba11f08b', label: 'PI\n3.141592653589793', color: '#f0ad4e', title: 'Name: PI<br>Value: 3.141592653589793<br>Type: FUNCTION<br>Id: e0044d5c-11c8-42cc-b3f6-7034ba11f08b<br>Formula Expression: Formula String: PI(); Formula Values: PI(); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3be94b12'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '43d765e8-421f-4676-be63-4819a928a336', to: '1a0c596f-9afc-4c78-a62f-63e8f96c42f0'},
{from: 'e0044d5c-11c8-42cc-b3f6-7034ba11f08b', to: '43d765e8-421f-4676-be63-4819a928a336'},
{from: 'c0dd42f4-ba47-4460-9ab2-627a2c2295c7', to: '1647c91e-2099-4cd6-9b3e-cafeeee497fe'},
{from: '8d61bdad-a898-4c17-911a-fc2aa6aaad9f', to: 'c0dd42f4-ba47-4460-9ab2-627a2c2295c7'}
                            ]);