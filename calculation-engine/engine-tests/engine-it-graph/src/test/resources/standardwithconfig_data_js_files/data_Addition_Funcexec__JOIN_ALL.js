var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '6aa51684-0cc5-4dd2-b935-39950e0e0cf2', label: 'B2\n240.0', color: '#31b0d5', title: 'Name: B2<br>Value: 240.0<br>Type: CELL_WITH_VALUE<br>Id: 6aa51684-0cc5-4dd2-b935-39950e0e0cf2<br>Formula Expression: Formula String: B2; Formula Values: 240.0; Formula Ptg: 240.0; Ptgs: B2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7748410a'},
{id: 'c439cba8-a689-44b3-9271-43127b626650', label: 'D2\n790.0', color: '#31b0d5', title: 'Name: D2<br>Value: 790.0<br>Type: CELL_WITH_FORMULA<br>Id: c439cba8-a689-44b3-9271-43127b626650<br>Formula Expression: Formula String: A2 + B2 + C2; Formula Values: 250.0 + 240.0 + 300.0; Formula Ptg: 250.0 240.0 + 300.0 +; Ptgs: A2 B2 + C2 + Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7748410a'},
{id: 'ccb8d71e-08f4-4789-82e3-1c81e44fa88d', label: 'DEFINE\nDEFINE', color: '#f0ad4e', title: 'Name: DEFINE<br>Value: DEFINE<br>Type: FUNCTION<br>Id: ccb8d71e-08f4-4789-82e3-1c81e44fa88d<br>Formula Expression: Formula String: DEFINE(A2 + B2 + C2, VALUE, C2, B2, A2, VALUE); Formula Values: DEFINE(250.0 + 240.0 + 300.0, #, 300.0, 240.0, 250.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7748410a'},
{id: '0866b22a-4729-441e-be37-f32157361832', label: '+\n490.0', color: '#f0ad4e', title: 'Name: +<br>Value: 490.0<br>Type: OPERATOR<br>Id: 0866b22a-4729-441e-be37-f32157361832<br>Formula Expression: Formula String: A2 + B2; Formula Values: 250.0 + 240.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7748410a'},
{id: '0619badc-c798-47a1-90ec-712ff308ac9e', label: 'A2\n250.0', color: '#31b0d5', title: 'Name: A2<br>Value: 250.0<br>Type: CELL_WITH_VALUE<br>Id: 0619badc-c798-47a1-90ec-712ff308ac9e<br>Formula Expression: Formula String: A2; Formula Values: 250.0; Formula Ptg: 250.0; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7748410a'},
{id: 'e1e6fbb5-7fc4-487d-9a8c-f03ea8ec5edf', label: 'C2\n300.0', color: '#31b0d5', title: 'Name: C2<br>Value: 300.0<br>Type: CELL_WITH_VALUE<br>Id: e1e6fbb5-7fc4-487d-9a8c-f03ea8ec5edf<br>Formula Expression: Formula String: C2; Formula Values: 300.0; Formula Ptg: 300.0; Ptgs: C2 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7748410a'},
{id: '1bc07667-e9b2-4072-970d-9bb1088a7fee', label: '+\n790.0', color: '#f0ad4e', title: 'Name: +<br>Value: 790.0<br>Type: OPERATOR<br>Id: 1bc07667-e9b2-4072-970d-9bb1088a7fee<br>Formula Expression: Formula String: A2 + B2 + C2; Formula Values: 250.0 + 240.0 + 300.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7748410a'},
{id: 'f30081ba-45fd-41c6-ad9b-8414164bee22', label: 'D3\nDEFINE', color: '#31b0d5', title: 'Name: D3<br>Value: DEFINE<br>Type: CELL_WITH_FORMULA<br>Id: f30081ba-45fd-41c6-ad9b-8414164bee22<br>Formula Expression: Formula String: DEFINE(A2 + B2 + C2, VALUE, C2, B2, A2, VALUE); Formula Values: DEFINE(250.0 + 240.0 + 300.0, #, 300.0, 240.0, 250.0, DEVDEF); Formula Ptg: 250.0 240.0 + 300.0 +, #, 300.0, 240.0, 250.0, DEVDEF DEFINE ; Ptgs: A2 B2 + C2 +, VALUE, C2, B2, A2, VALUE DEFINE  Index in Ptgs: 7 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7748410a'},
{id: 'c40512bc-bb21-4aa0-9072-e2d059b6d638', label: 'E3\n790.0', color: '#31b0d5', title: 'Name: E3<br>Value: 790.0<br>Type: CELL_WITH_FORMULA<br>Id: c40512bc-bb21-4aa0-9072-e2d059b6d638<br>Formula Expression: Formula String: FUNCEXEC(C2, B2, A2, VALUE); Formula Values: FUNCEXEC(300.0, 240.0, 250.0, DEVDEF); Formula Ptg: 300.0, 240.0, 250.0, DEVDEF FUNCEXEC ; Ptgs: C2, B2, A2, VALUE FUNCEXEC  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7748410a'},
{id: 'b3decdb2-0e1b-4f3b-8af6-1919c9251653', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: b3decdb2-0e1b-4f3b-8af6-1919c9251653<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7748410a'},
{id: 'f7f37d78-e2cf-47fd-904c-e879dc37b698', label: 'FUNCEXEC\n790.0', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Value: 790.0<br>Type: FUNCTION<br>Id: f7f37d78-e2cf-47fd-904c-e879dc37b698<br>Formula Expression: Formula String: FUNCEXEC(C2, B2, A2, VALUE); Formula Values: FUNCEXEC(300.0, 240.0, 250.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7748410a'},
{id: '01589575-0a61-4e5e-931b-ade8cc84c411', label: 'VALUE\n#', color: '#31b0d5', title: 'Name: VALUE<br>Value: #<br>Type: CONSTANT_VALUE<br>Id: 01589575-0a61-4e5e-931b-ade8cc84c411<br>Formula Expression: Formula String: VALUE; Formula Values: #; Formula Ptg: #; Ptgs: VALUE Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7748410a'},
{id: '00056271-ae74-4218-ae4a-773c8a18bcc1', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 00056271-ae74-4218-ae4a-773c8a18bcc1<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7748410a'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '01589575-0a61-4e5e-931b-ade8cc84c411', to: 'ccb8d71e-08f4-4789-82e3-1c81e44fa88d'},
{from: '1bc07667-e9b2-4072-970d-9bb1088a7fee', to: 'c439cba8-a689-44b3-9271-43127b626650'},
{from: '6aa51684-0cc5-4dd2-b935-39950e0e0cf2', to: '0866b22a-4729-441e-be37-f32157361832'},
{from: 'f7f37d78-e2cf-47fd-904c-e879dc37b698', to: 'c40512bc-bb21-4aa0-9072-e2d059b6d638'},
{from: '6aa51684-0cc5-4dd2-b935-39950e0e0cf2', to: 'f7f37d78-e2cf-47fd-904c-e879dc37b698'},
{from: '00056271-ae74-4218-ae4a-773c8a18bcc1', to: 'ccb8d71e-08f4-4789-82e3-1c81e44fa88d'},
{from: 'ccb8d71e-08f4-4789-82e3-1c81e44fa88d', to: 'f30081ba-45fd-41c6-ad9b-8414164bee22'},
{from: 'e1e6fbb5-7fc4-487d-9a8c-f03ea8ec5edf', to: 'f7f37d78-e2cf-47fd-904c-e879dc37b698'},
{from: '0619badc-c798-47a1-90ec-712ff308ac9e', to: 'f7f37d78-e2cf-47fd-904c-e879dc37b698'},
{from: 'e1e6fbb5-7fc4-487d-9a8c-f03ea8ec5edf', to: '1bc07667-e9b2-4072-970d-9bb1088a7fee'},
{from: 'b3decdb2-0e1b-4f3b-8af6-1919c9251653', to: 'f7f37d78-e2cf-47fd-904c-e879dc37b698'},
{from: 'e1e6fbb5-7fc4-487d-9a8c-f03ea8ec5edf', to: 'ccb8d71e-08f4-4789-82e3-1c81e44fa88d'},
{from: '6aa51684-0cc5-4dd2-b935-39950e0e0cf2', to: 'ccb8d71e-08f4-4789-82e3-1c81e44fa88d'},
{from: '0619badc-c798-47a1-90ec-712ff308ac9e', to: '0866b22a-4729-441e-be37-f32157361832'},
{from: '0619badc-c798-47a1-90ec-712ff308ac9e', to: 'ccb8d71e-08f4-4789-82e3-1c81e44fa88d'},
{from: 'c439cba8-a689-44b3-9271-43127b626650', to: 'ccb8d71e-08f4-4789-82e3-1c81e44fa88d'},
{from: '0866b22a-4729-441e-be37-f32157361832', to: '1bc07667-e9b2-4072-970d-9bb1088a7fee'}
                            ]);