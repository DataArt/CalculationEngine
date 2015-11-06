var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'acb6186e-f421-42fc-9012-9ff3d97b004f', label: 'A1\nWhy ', color: '#31b0d5', title: 'Name: A1<br>Value: Why <br>Type: CELL_WITH_VALUE<br>Id: acb6186e-f421-42fc-9012-9ff3d97b004f<br>Formula Expression: Formula String: A1; Formula Values: Why ; Formula Ptg: Why ; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6155d082'},
{id: 'b6e5bf67-ea49-4623-b2f1-289c321c7753', label: 'CONCATENATE\nWhy do you think so?', color: '#f0ad4e', title: 'Name: CONCATENATE<br>Value: Why do you think so?<br>Type: FUNCTION<br>Id: b6e5bf67-ea49-4623-b2f1-289c321c7753<br>Formula Expression: Formula String: CONCATENATE(C3, C2, B2, C1, B1, A1); Formula Values: CONCATENATE(?, so, think , you , do , Why ); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6155d082'},
{id: '3603b3f2-132e-499a-a179-3547d135d5db', label: 'C1\nyou ', color: '#31b0d5', title: 'Name: C1<br>Value: you <br>Type: CELL_WITH_VALUE<br>Id: 3603b3f2-132e-499a-a179-3547d135d5db<br>Formula Expression: Formula String: C1; Formula Values: you ; Formula Ptg: you ; Ptgs: C1 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6155d082'},
{id: 'ae6e2323-3810-4ac9-abcb-c4c914219a75', label: 'C3\n?', color: '#31b0d5', title: 'Name: C3<br>Value: ?<br>Type: CELL_WITH_VALUE<br>Id: ae6e2323-3810-4ac9-abcb-c4c914219a75<br>Formula Expression: Formula String: C3; Formula Values: ?; Formula Ptg: ?; Ptgs: C3 Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6155d082'},
{id: '13894ac5-a29c-4545-bd82-ad32193b7944', label: 'D5\nWhy do you think so?', color: '#31b0d5', title: 'Name: D5<br>Value: Why do you think so?<br>Type: CELL_WITH_FORMULA<br>Id: 13894ac5-a29c-4545-bd82-ad32193b7944<br>Formula Expression: Formula String: CONCATENATE(C3, C2, B2, C1, B1, A1); Formula Values: CONCATENATE(?, so, think , you , do , Why ); Formula Ptg: ?, so, think , you , do , Why  CONCATENATE ; Ptgs: C3, C2, B2, C1, B1, A1 CONCATENATE  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6155d082'},
{id: 'a416cca5-2d47-436f-8869-d196b288dc6d', label: 'B2\nthink ', color: '#31b0d5', title: 'Name: B2<br>Value: think <br>Type: CELL_WITH_VALUE<br>Id: a416cca5-2d47-436f-8869-d196b288dc6d<br>Formula Expression: Formula String: B2; Formula Values: think ; Formula Ptg: think ; Ptgs: B2 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6155d082'},
{id: 'ace93ac0-db2e-4ddb-a25b-d65976415c40', label: 'C2\nso', color: '#31b0d5', title: 'Name: C2<br>Value: so<br>Type: CELL_WITH_VALUE<br>Id: ace93ac0-db2e-4ddb-a25b-d65976415c40<br>Formula Expression: Formula String: C2; Formula Values: so; Formula Ptg: so; Ptgs: C2 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6155d082'},
{id: '61bed0cf-71e9-4590-be7e-1d6e527d5e8b', label: 'B1\ndo ', color: '#31b0d5', title: 'Name: B1<br>Value: do <br>Type: CELL_WITH_VALUE<br>Id: 61bed0cf-71e9-4590-be7e-1d6e527d5e8b<br>Formula Expression: Formula String: B1; Formula Values: do ; Formula Ptg: do ; Ptgs: B1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6155d082'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'ae6e2323-3810-4ac9-abcb-c4c914219a75', to: 'b6e5bf67-ea49-4623-b2f1-289c321c7753'},
{from: '61bed0cf-71e9-4590-be7e-1d6e527d5e8b', to: 'b6e5bf67-ea49-4623-b2f1-289c321c7753'},
{from: 'ace93ac0-db2e-4ddb-a25b-d65976415c40', to: 'b6e5bf67-ea49-4623-b2f1-289c321c7753'},
{from: 'acb6186e-f421-42fc-9012-9ff3d97b004f', to: 'b6e5bf67-ea49-4623-b2f1-289c321c7753'},
{from: '3603b3f2-132e-499a-a179-3547d135d5db', to: 'b6e5bf67-ea49-4623-b2f1-289c321c7753'},
{from: 'b6e5bf67-ea49-4623-b2f1-289c321c7753', to: '13894ac5-a29c-4545-bd82-ad32193b7944'},
{from: 'a416cca5-2d47-436f-8869-d196b288dc6d', to: 'b6e5bf67-ea49-4623-b2f1-289c321c7753'}
                            ]);