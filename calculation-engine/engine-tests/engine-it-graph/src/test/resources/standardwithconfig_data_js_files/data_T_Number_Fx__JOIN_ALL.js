var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'a4d33385-0a39-4e30-b904-2336f0ae4307', label: 'B1\nexpected', color: '#31b0d5', title: 'Name: B1<br>Value: expected<br>Type: CELL_WITH_VALUE<br>Id: a4d33385-0a39-4e30-b904-2336f0ae4307<br>Formula Expression: Formula String: B1; Formula Values: expected; Formula Ptg: expected; Ptgs: B1 Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4d8539de'},
{id: '1186ff6e-1804-434a-81f8-24c9b4ba8b2d', label: 'D2\nexpected', color: '#31b0d5', title: 'Name: D2<br>Value: expected<br>Type: CELL_WITH_FORMULA<br>Id: 1186ff6e-1804-434a-81f8-24c9b4ba8b2d<br>Formula Expression: Formula String: IF(A2=C1,B4,B1); Formula Values: IF(Sun = is, expected); Formula Ptg: expected, Sun is = IF ; Ptgs: B1, A2 C1 = IF  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4d8539de'},
{id: '997b6488-8318-40d8-bd20-dce6e626f555', label: '=\nFALSE', color: '#f0ad4e', title: 'Name: =<br>Value: FALSE<br>Type: OPERATOR<br>Id: 997b6488-8318-40d8-bd20-dce6e626f555<br>Formula Expression: Formula String: A2 = C1; Formula Values: Sun = is; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4d8539de'},
{id: 'f388c816-7dda-4725-b4c4-7102f039c274', label: 'C1\nis', color: '#31b0d5', title: 'Name: C1<br>Value: is<br>Type: CELL_WITH_VALUE<br>Id: f388c816-7dda-4725-b4c4-7102f039c274<br>Formula Expression: Formula String: C1; Formula Values: is; Formula Ptg: is; Ptgs: C1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4d8539de'},
{id: '6da1a689-be4a-4acd-9b64-f56797db7b74', label: 'D3\n52.0', color: '#31b0d5', title: 'Name: D3<br>Value: 52.0<br>Type: CELL_WITH_VALUE<br>Id: 6da1a689-be4a-4acd-9b64-f56797db7b74<br>Formula Expression: Formula String: D3; Formula Values: 52.0; Formula Ptg: 52.0; Ptgs: D3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4d8539de'},
{id: 'b51ff8cb-c09e-4f05-b21b-720a25ac8e23', label: 'IF\nexpected', color: '#f0ad4e', title: 'Name: IF<br>Value: expected<br>Type: IF<br>Id: b51ff8cb-c09e-4f05-b21b-720a25ac8e23<br>Formula Expression: Formula String: IF(A2=C1,B4,B1); Formula Values: IF(Sun = is, expected); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4d8539de'},
{id: '271de22b-26b4-466d-9b6b-d04fa9284420', label: 'D5\n', color: '#31b0d5', title: 'Name: D5<br>Value: <br>Type: CELL_WITH_FORMULA<br>Id: 271de22b-26b4-466d-9b6b-d04fa9284420<br>Formula Expression: Formula String: T(D3); Formula Values: T(52.0); Formula Ptg: 52.0 T ; Ptgs: D3 T  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4d8539de'},
{id: '3a9328eb-e817-45bf-a57b-b3772b910cb0', label: 'A2\nSun', color: '#31b0d5', title: 'Name: A2<br>Value: Sun<br>Type: CELL_WITH_VALUE<br>Id: 3a9328eb-e817-45bf-a57b-b3772b910cb0<br>Formula Expression: Formula String: A2; Formula Values: Sun; Formula Ptg: Sun; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4d8539de'},
{id: '768116b6-eeef-4c29-91e4-06e4564a39c9', label: 'T\n', color: '#f0ad4e', title: 'Name: T<br>Value: <br>Type: FUNCTION<br>Id: 768116b6-eeef-4c29-91e4-06e4564a39c9<br>Formula Expression: Formula String: T(D3); Formula Values: T(52.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4d8539de'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '6da1a689-be4a-4acd-9b64-f56797db7b74', to: '768116b6-eeef-4c29-91e4-06e4564a39c9'},
{from: 'f388c816-7dda-4725-b4c4-7102f039c274', to: '997b6488-8318-40d8-bd20-dce6e626f555'},
{from: '3a9328eb-e817-45bf-a57b-b3772b910cb0', to: '997b6488-8318-40d8-bd20-dce6e626f555'},
{from: 'b51ff8cb-c09e-4f05-b21b-720a25ac8e23', to: '1186ff6e-1804-434a-81f8-24c9b4ba8b2d'},
{from: '768116b6-eeef-4c29-91e4-06e4564a39c9', to: '271de22b-26b4-466d-9b6b-d04fa9284420'},
{from: 'a4d33385-0a39-4e30-b904-2336f0ae4307', to: 'b51ff8cb-c09e-4f05-b21b-720a25ac8e23'},
{from: '997b6488-8318-40d8-bd20-dce6e626f555', to: 'b51ff8cb-c09e-4f05-b21b-720a25ac8e23'}
                            ]);