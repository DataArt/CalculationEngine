var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '07718296-20dd-43df-aab5-68d97549ca95', label: 'E6\n180.0', color: '#31b0d5', title: 'Name: E6<br>Value: 180.0<br>Type: CELL_WITH_FORMULA<br>Id: 07718296-20dd-43df-aab5-68d97549ca95<br>Formula Expression: Formula String: DEGREES(PI()); Formula Values: DEGREES(PI()); Formula Ptg:  PI  DEGREES ; Ptgs:  PI  DEGREES  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2fc49538'},
{id: '6594b6b4-533b-40cf-879a-4880fedf4f21', label: 'PI\n3.141592653589793', color: '#f0ad4e', title: 'Name: PI<br>Value: 3.141592653589793<br>Type: FUNCTION<br>Id: 6594b6b4-533b-40cf-879a-4880fedf4f21<br>Formula Expression: Formula String: PI(); Formula Values: PI(); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2fc49538'},
{id: 'b0c1da83-74f7-4ddd-b4a0-ca59fae81629', label: 'DEGREES\n180.0', color: '#f0ad4e', title: 'Name: DEGREES<br>Value: 180.0<br>Type: FUNCTION<br>Id: b0c1da83-74f7-4ddd-b4a0-ca59fae81629<br>Formula Expression: Formula String: DEGREES(PI()); Formula Values: DEGREES(PI()); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2fc49538'},
{id: 'd6e7d714-8e82-4e21-9364-adfebb5035b9', label: 'E7\n6875.493541569879', color: '#31b0d5', title: 'Name: E7<br>Value: 6875.493541569879<br>Type: CELL_WITH_FORMULA<br>Id: d6e7d714-8e82-4e21-9364-adfebb5035b9<br>Formula Expression: Formula String: DEGREES(B5); Formula Values: DEGREES(120.0); Formula Ptg: 120.0 DEGREES ; Ptgs: B5 DEGREES  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2fc49538'},
{id: '5fe39cde-86e5-4a48-8ac8-e664f81891c0', label: 'DEGREES\n6875.493541569879', color: '#f0ad4e', title: 'Name: DEGREES<br>Value: 6875.493541569879<br>Type: FUNCTION<br>Id: 5fe39cde-86e5-4a48-8ac8-e664f81891c0<br>Formula Expression: Formula String: DEGREES(B5); Formula Values: DEGREES(120.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2fc49538'},
{id: 'f47cc1ee-1fe2-4c72-b8c1-9fff517b828b', label: 'B5\n120.0', color: '#31b0d5', title: 'Name: B5<br>Value: 120.0<br>Type: CELL_WITH_VALUE<br>Id: f47cc1ee-1fe2-4c72-b8c1-9fff517b828b<br>Formula Expression: Formula String: B5; Formula Values: 120.0; Formula Ptg: 120.0; Ptgs: B5 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2fc49538'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'f47cc1ee-1fe2-4c72-b8c1-9fff517b828b', to: '5fe39cde-86e5-4a48-8ac8-e664f81891c0'},
{from: '5fe39cde-86e5-4a48-8ac8-e664f81891c0', to: 'd6e7d714-8e82-4e21-9364-adfebb5035b9'},
{from: 'b0c1da83-74f7-4ddd-b4a0-ca59fae81629', to: '07718296-20dd-43df-aab5-68d97549ca95'},
{from: '6594b6b4-533b-40cf-879a-4880fedf4f21', to: 'b0c1da83-74f7-4ddd-b4a0-ca59fae81629'}
                            ]);