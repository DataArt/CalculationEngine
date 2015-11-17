var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '1f288633-d9ba-4337-99b5-55bd6a1e9539', label: 'E2\n5.0', color: '#31b0d5', title: 'Name: E2<br>Value: 5.0<br>Type: CELL_WITH_FORMULA<br>Id: 1f288633-d9ba-4337-99b5-55bd6a1e9539<br>Formula Expression: Formula String: ABS(A2); Formula Values: ABS(5.0); Formula Ptg: 5.0 ABS ; Ptgs: A2 ABS  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1129775'},
{id: '35b11ec8-805e-4b83-a3b0-4ea3e31e22a9', label: 'ABS\n7.0', color: '#f0ad4e', title: 'Name: ABS<br>Value: 7.0<br>Type: FUNCTION<br>Id: 35b11ec8-805e-4b83-a3b0-4ea3e31e22a9<br>Formula Expression: Formula String: ABS(A5); Formula Values: ABS(7.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1129775'},
{id: 'ace97465-05ce-4457-80fb-0489f4d5e336', label: 'A2\n5.0', color: '#31b0d5', title: 'Name: A2<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: ace97465-05ce-4457-80fb-0489f4d5e336<br>Formula Expression: Formula String: A2; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1129775'},
{id: '7cc83d2f-8d63-4c70-83b4-a547121fc23b', label: 'ABS\n8.0', color: '#f0ad4e', title: 'Name: ABS<br>Value: 8.0<br>Type: FUNCTION<br>Id: 7cc83d2f-8d63-4c70-83b4-a547121fc23b<br>Formula Expression: Formula String: ABS(A3); Formula Values: ABS(8.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1129775'},
{id: 'cebe28ff-4750-4744-b9ac-48bf26a38db2', label: 'FUNCEXEC\n5.0', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Value: 5.0<br>Type: FUNCTION<br>Id: cebe28ff-4750-4744-b9ac-48bf26a38db2<br>Formula Expression: Formula String: FUNCEXEC(A2, VALUE); Formula Values: FUNCEXEC(5.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1129775'},
{id: '9073aa5b-b12c-4bb1-b875-68ee7c4a9e06', label: 'A4\n1.0', color: '#31b0d5', title: 'Name: A4<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 9073aa5b-b12c-4bb1-b875-68ee7c4a9e06<br>Formula Expression: Formula String: A4; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1129775'},
{id: '455c7de6-ffcb-4b03-beb8-1c37057194f8', label: 'A3\n8.0', color: '#31b0d5', title: 'Name: A3<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 455c7de6-ffcb-4b03-beb8-1c37057194f8<br>Formula Expression: Formula String: A3; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: A3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1129775'},
{id: 'e58d0c09-336f-4ddf-bf96-81715f2fa994', label: 'E2\n5.0', color: '#31b0d5', title: 'Name: E2<br>Value: 5.0<br>Type: CELL_WITH_FORMULA<br>Id: e58d0c09-336f-4ddf-bf96-81715f2fa994<br>Formula Expression: Formula String: ABS(A2); Formula Values: ABS(5.0); Formula Ptg: 5.0 ABS ; Ptgs: A2 ABS  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1129775'},
{id: '6b654c57-4ba5-4fa0-b44d-e0a7cef7aab4', label: 'VALUE\n#', color: '#31b0d5', title: 'Name: VALUE<br>Value: #<br>Type: CONSTANT_VALUE<br>Id: 6b654c57-4ba5-4fa0-b44d-e0a7cef7aab4<br>Formula Expression: Formula String: VALUE; Formula Values: #; Formula Ptg: #; Ptgs: VALUE Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1129775'},
{id: '007aeaab-c337-4dd8-a8fc-adb3b3947df2', label: 'ABS\n1.0', color: '#f0ad4e', title: 'Name: ABS<br>Value: 1.0<br>Type: FUNCTION<br>Id: 007aeaab-c337-4dd8-a8fc-adb3b3947df2<br>Formula Expression: Formula String: ABS(A4); Formula Values: ABS(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1129775'},
{id: 'e0af7dca-ff60-40bc-9a8b-69d7c0098de9', label: 'DEFINE\nDEFINE', color: '#f0ad4e', title: 'Name: DEFINE<br>Value: DEFINE<br>Type: FUNCTION<br>Id: e0af7dca-ff60-40bc-9a8b-69d7c0098de9<br>Formula Expression: Formula String: DEFINE(ABS(A2), VALUE, A2, VALUE); Formula Values: DEFINE(ABS(5.0), #, 5.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1129775'},
{id: '88e7860c-a213-4fd9-bd1b-310a99a24acb', label: 'E5\n7.0', color: '#31b0d5', title: 'Name: E5<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: 88e7860c-a213-4fd9-bd1b-310a99a24acb<br>Formula Expression: Formula String: ABS(A5); Formula Values: ABS(7.0); Formula Ptg: 7.0 ABS ; Ptgs: A5 ABS  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1129775'},
{id: 'dbdf2800-68bd-40b9-bb51-2f674efabb5c', label: 'A2\n5.0', color: '#31b0d5', title: 'Name: A2<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: dbdf2800-68bd-40b9-bb51-2f674efabb5c<br>Formula Expression: Formula String: A2; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1129775'},
{id: '758d8289-057f-4691-b2c6-c6512e120363', label: 'A5\n7.0', color: '#31b0d5', title: 'Name: A5<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: 758d8289-057f-4691-b2c6-c6512e120363<br>Formula Expression: Formula String: A5; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: A5 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1129775'},
{id: '1bfe78e0-8784-4c76-8fe4-4c94e9389718', label: 'E6\n5.0', color: '#31b0d5', title: 'Name: E6<br>Value: 5.0<br>Type: CELL_WITH_FORMULA<br>Id: 1bfe78e0-8784-4c76-8fe4-4c94e9389718<br>Formula Expression: Formula String: FUNCEXEC(A2, VALUE); Formula Values: FUNCEXEC(5.0, DEVDEF); Formula Ptg: 5.0, DEVDEF FUNCEXEC ; Ptgs: A2, VALUE FUNCEXEC  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1129775'},
{id: 'd7251f41-b81a-4a60-a32d-5c2e52ea1f48', label: 'ABS\n5.0', color: '#f0ad4e', title: 'Name: ABS<br>Value: 5.0<br>Type: FUNCTION<br>Id: d7251f41-b81a-4a60-a32d-5c2e52ea1f48<br>Formula Expression: Formula String: ABS(A2); Formula Values: ABS(5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1129775'},
{id: 'eb245782-fe9c-4a8f-8f25-fea12b7f1f88', label: 'E3\n8.0', color: '#31b0d5', title: 'Name: E3<br>Value: 8.0<br>Type: CELL_WITH_FORMULA<br>Id: eb245782-fe9c-4a8f-8f25-fea12b7f1f88<br>Formula Expression: Formula String: ABS(A3); Formula Values: ABS(8.0); Formula Ptg: 8.0 ABS ; Ptgs: A3 ABS  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1129775'},
{id: '46d7843c-e7c3-4295-94a4-6d4076cc2f9d', label: 'A2\n5.0', color: '#31b0d5', title: 'Name: A2<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 46d7843c-e7c3-4295-94a4-6d4076cc2f9d<br>Formula Expression: Formula String: A2; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1129775'},
{id: '31edd3a6-243a-404d-b172-50a5bddab82e', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 31edd3a6-243a-404d-b172-50a5bddab82e<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1129775'},
{id: 'd915aee0-606a-4b7b-a6be-075304886e97', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: d915aee0-606a-4b7b-a6be-075304886e97<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1129775'},
{id: '2c40c4f2-7f05-4f56-8df1-4b8a79174b96', label: 'A7\nDEFINE', color: '#31b0d5', title: 'Name: A7<br>Value: DEFINE<br>Type: CELL_WITH_FORMULA<br>Id: 2c40c4f2-7f05-4f56-8df1-4b8a79174b96<br>Formula Expression: Formula String: DEFINE(ABS(A2), VALUE, A2, VALUE); Formula Values: DEFINE(ABS(5.0), #, 5.0, DEVDEF); Formula Ptg: 5.0 ABS , #, 5.0, DEVDEF DEFINE ; Ptgs: A2 ABS , VALUE, A2, VALUE DEFINE  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1129775'},
{id: '836c9a65-9f7b-4f51-b765-7e73b043a7c3', label: 'E4\n1.0', color: '#31b0d5', title: 'Name: E4<br>Value: 1.0<br>Type: CELL_WITH_FORMULA<br>Id: 836c9a65-9f7b-4f51-b765-7e73b043a7c3<br>Formula Expression: Formula String: ABS(A4); Formula Values: ABS(1.0); Formula Ptg: 1.0 ABS ; Ptgs: A4 ABS  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1129775'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'e0af7dca-ff60-40bc-9a8b-69d7c0098de9', to: '2c40c4f2-7f05-4f56-8df1-4b8a79174b96'},
{from: '7cc83d2f-8d63-4c70-83b4-a547121fc23b', to: 'eb245782-fe9c-4a8f-8f25-fea12b7f1f88'},
{from: '758d8289-057f-4691-b2c6-c6512e120363', to: '35b11ec8-805e-4b83-a3b0-4ea3e31e22a9'},
{from: 'ace97465-05ce-4457-80fb-0489f4d5e336', to: 'cebe28ff-4750-4744-b9ac-48bf26a38db2'},
{from: '35b11ec8-805e-4b83-a3b0-4ea3e31e22a9', to: '88e7860c-a213-4fd9-bd1b-310a99a24acb'},
{from: '46d7843c-e7c3-4295-94a4-6d4076cc2f9d', to: 'd7251f41-b81a-4a60-a32d-5c2e52ea1f48'},
{from: 'e58d0c09-336f-4ddf-bf96-81715f2fa994', to: 'e0af7dca-ff60-40bc-9a8b-69d7c0098de9'},
{from: '31edd3a6-243a-404d-b172-50a5bddab82e', to: 'cebe28ff-4750-4744-b9ac-48bf26a38db2'},
{from: 'd915aee0-606a-4b7b-a6be-075304886e97', to: 'e0af7dca-ff60-40bc-9a8b-69d7c0098de9'},
{from: 'd7251f41-b81a-4a60-a32d-5c2e52ea1f48', to: 'e58d0c09-336f-4ddf-bf96-81715f2fa994'},
{from: 'd7251f41-b81a-4a60-a32d-5c2e52ea1f48', to: '1f288633-d9ba-4337-99b5-55bd6a1e9539'},
{from: '6b654c57-4ba5-4fa0-b44d-e0a7cef7aab4', to: 'e0af7dca-ff60-40bc-9a8b-69d7c0098de9'},
{from: '9073aa5b-b12c-4bb1-b875-68ee7c4a9e06', to: '007aeaab-c337-4dd8-a8fc-adb3b3947df2'},
{from: 'dbdf2800-68bd-40b9-bb51-2f674efabb5c', to: 'e0af7dca-ff60-40bc-9a8b-69d7c0098de9'},
{from: '455c7de6-ffcb-4b03-beb8-1c37057194f8', to: '7cc83d2f-8d63-4c70-83b4-a547121fc23b'},
{from: 'cebe28ff-4750-4744-b9ac-48bf26a38db2', to: '1bfe78e0-8784-4c76-8fe4-4c94e9389718'},
{from: '007aeaab-c337-4dd8-a8fc-adb3b3947df2', to: '836c9a65-9f7b-4f51-b765-7e73b043a7c3'}
                            ]);