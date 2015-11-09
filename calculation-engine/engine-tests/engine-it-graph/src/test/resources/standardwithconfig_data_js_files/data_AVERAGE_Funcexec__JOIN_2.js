var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '8fd7a27a-009d-40f3-9c27-c7ac7beec769', label: 'A5\n7.0', color: '#31b0d5', title: 'Name: A5<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: 8fd7a27a-009d-40f3-9c27-c7ac7beec769<br>Formula Expression: Formula String: A5; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: A5 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: 'da5b44a4-6303-417f-812b-f4f9f6de5944', label: 'B5\n8.0', color: '#31b0d5', title: 'Name: B5<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: da5b44a4-6303-417f-812b-f4f9f6de5944<br>Formula Expression: Formula String: B5; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: B5 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: 'd1846c16-7636-4b19-9733-bcbbcde4f858', label: 'VALUE\n#', color: '#31b0d5', title: 'Name: VALUE<br>Value: #<br>Type: CONSTANT_VALUE<br>Id: d1846c16-7636-4b19-9733-bcbbcde4f858<br>Formula Expression: Formula String: VALUE; Formula Values: #; Formula Ptg: #; Ptgs: VALUE Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: '88d4f279-8e20-4ecd-b8c7-f6071505db0e', label: 'A7\nDEFINE', color: '#31b0d5', title: 'Name: A7<br>Value: DEFINE<br>Type: CELL_WITH_FORMULA<br>Id: 88d4f279-8e20-4ecd-b8c7-f6071505db0e<br>Formula Expression: Formula String: DEFINE(AVERAGE(A2:D2), VALUE, D2, C2, B2, A2, VALUE); Formula Values: DEFINE(AVERAGE(5.0, 3.0, 9.0, 4.0), #, 4.0, 9.0, 3.0, 5.0, DEVDEF_1); Formula Ptg: 5.0, 3.0, 9.0, 4.0 AVERAGE , #, 4.0, 9.0, 3.0, 5.0, DEVDEF_1 DEFINE ; Ptgs: A2:D2 AVERAGE , VALUE, D2, C2, B2, A2, VALUE DEFINE  Index in Ptgs: 8 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: 'c2293969-615e-4854-b336-e4f68465002c', label: 'C4\n0.0', color: '#31b0d5', title: 'Name: C4<br>Value: 0.0<br>Type: CELL_WITH_VALUE<br>Id: c2293969-615e-4854-b336-e4f68465002c<br>Formula Expression: Formula String: C4; Formula Values: 0.0; Formula Ptg: 0.0; Ptgs: C4 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: '34e22ce7-dfca-4aad-986b-aa902edb43e3', label: 'A9\nDEFINE', color: '#31b0d5', title: 'Name: A9<br>Value: DEFINE<br>Type: CELL_WITH_FORMULA<br>Id: 34e22ce7-dfca-4aad-986b-aa902edb43e3<br>Formula Expression: Formula String: DEFINE(AVERAGE(A4:D4), VALUE, D4, C4, B4, A4, VALUE); Formula Values: DEFINE(AVERAGE(1.0, 8.0, 0.0, 5.0), #, 5.0, 0.0, 8.0, 1.0, DEVDEF_3); Formula Ptg: 1.0, 8.0, 0.0, 5.0 AVERAGE , #, 5.0, 0.0, 8.0, 1.0, DEVDEF_3 DEFINE ; Ptgs: A4:D4 AVERAGE , VALUE, D4, C4, B4, A4, VALUE DEFINE  Index in Ptgs: 8 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: '4adbe24d-e032-4992-891b-c541dbc82628', label: 'VALUE\nDEVDEF_1', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF_1<br>Type: CONSTANT_VALUE<br>Id: 4adbe24d-e032-4992-891b-c541dbc82628<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_1; Formula Ptg: DEVDEF_1; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: 'a15c40a8-f7f8-4b58-a57f-bcdf77aec84b', label: 'A10\nDEFINE', color: '#31b0d5', title: 'Name: A10<br>Value: DEFINE<br>Type: CELL_WITH_FORMULA<br>Id: a15c40a8-f7f8-4b58-a57f-bcdf77aec84b<br>Formula Expression: Formula String: DEFINE(AVERAGE(A5:D5), VALUE, D5, C5, B5, A5, VALUE); Formula Values: DEFINE(AVERAGE(7.0, 8.0, 0.9, 9.0), #, 9.0, 0.9, 8.0, 7.0, DEVDEF_4); Formula Ptg: 7.0, 8.0, 0.9, 9.0 AVERAGE , #, 9.0, 0.9, 8.0, 7.0, DEVDEF_4 DEFINE ; Ptgs: A5:D5 AVERAGE , VALUE, D5, C5, B5, A5, VALUE DEFINE  Index in Ptgs: 8 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: 'baea74ea-4228-4f9f-99bc-8e3bc7381d5e', label: 'VALUE\nDEVDEF_3', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF_3<br>Type: CONSTANT_VALUE<br>Id: baea74ea-4228-4f9f-99bc-8e3bc7381d5e<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_3; Formula Ptg: DEVDEF_3; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: 'de76716a-e415-4e58-88be-0340e70b975c', label: 'A4:D4\n[[1.0, 8.0, 0.0, 5.0]]', color: '#31b0d5', title: 'Name: A4:D4<br>Value: [[1.0, 8.0, 0.0, 5.0]]<br>Type: RANGE<br>Id: de76716a-e415-4e58-88be-0340e70b975c<br>Formula Expression: Formula String: A4:D4; Formula Values: [[1.0, 8.0, 0.0, 5.0]]; Formula Ptg: [[1.0, 8.0, 0.0, 5.0]]; Ptgs: A4:D4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: '6838b88f-4bf5-4e31-944f-58b54f4f027a', label: 'E2\n5.25', color: '#31b0d5', title: 'Name: E2<br>Value: 5.25<br>Type: CELL_WITH_FORMULA<br>Id: 6838b88f-4bf5-4e31-944f-58b54f4f027a<br>Formula Expression: Formula String: AVERAGE(A2:D2); Formula Values: AVERAGE(5.0, 3.0, 9.0, 4.0); Formula Ptg: 5.0, 3.0, 9.0, 4.0 AVERAGE ; Ptgs: A2:D2 AVERAGE  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: '6252132a-fd34-4a2c-a194-5c125d5ab2ba', label: 'B2\n3.0', color: '#31b0d5', title: 'Name: B2<br>Value: 3.0<br>Type: CELL_WITH_VALUE<br>Id: 6252132a-fd34-4a2c-a194-5c125d5ab2ba<br>Formula Expression: Formula String: B2; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: B2 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: '337b4c26-6b07-4478-a217-63564bbd4d16', label: 'VALUE\n#', color: '#31b0d5', title: 'Name: VALUE<br>Value: #<br>Type: CONSTANT_VALUE<br>Id: 337b4c26-6b07-4478-a217-63564bbd4d16<br>Formula Expression: Formula String: VALUE; Formula Values: #; Formula Ptg: #; Ptgs: VALUE Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: 'eb8fc520-4925-46f2-8243-1f36f8082c0f', label: 'E4\n3.5', color: '#31b0d5', title: 'Name: E4<br>Value: 3.5<br>Type: CELL_WITH_FORMULA<br>Id: eb8fc520-4925-46f2-8243-1f36f8082c0f<br>Formula Expression: Formula String: AVERAGE(A4:D4); Formula Values: AVERAGE(1.0, 8.0, 0.0, 5.0); Formula Ptg: 1.0, 8.0, 0.0, 5.0 AVERAGE ; Ptgs: A4:D4 AVERAGE  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: 'cbc32df3-9e0e-4d62-8bbc-2a044d4757e6', label: 'A3:D3\n[[8.0, 4.0, 8.0, 2.0]]', color: '#31b0d5', title: 'Name: A3:D3<br>Value: [[8.0, 4.0, 8.0, 2.0]]<br>Type: RANGE<br>Id: cbc32df3-9e0e-4d62-8bbc-2a044d4757e6<br>Formula Expression: Formula String: A3:D3; Formula Values: [[8.0, 4.0, 8.0, 2.0]]; Formula Ptg: [[8.0, 4.0, 8.0, 2.0]]; Ptgs: A3:D3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: 'ba42952c-6736-4906-b768-28a1c21cc20c', label: 'VALUE\n#', color: '#31b0d5', title: 'Name: VALUE<br>Value: #<br>Type: CONSTANT_VALUE<br>Id: ba42952c-6736-4906-b768-28a1c21cc20c<br>Formula Expression: Formula String: VALUE; Formula Values: #; Formula Ptg: #; Ptgs: VALUE Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: 'c4bde3a8-4e7e-46ab-91b1-05c661935278', label: 'B4\n8.0', color: '#31b0d5', title: 'Name: B4<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: c4bde3a8-4e7e-46ab-91b1-05c661935278<br>Formula Expression: Formula String: B4; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: B4 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: 'c79b7a65-f1fb-4eca-9ed5-26307b634a53', label: 'F6\n5.25', color: '#31b0d5', title: 'Name: F6<br>Value: 5.25<br>Type: CELL_WITH_FORMULA<br>Id: c79b7a65-f1fb-4eca-9ed5-26307b634a53<br>Formula Expression: Formula String: FUNCEXEC(D2, C2, B2, A2, VALUE); Formula Values: FUNCEXEC(4.0, 9.0, 3.0, 5.0, DEVDEF_1); Formula Ptg: 4.0, 9.0, 3.0, 5.0, DEVDEF_1 FUNCEXEC ; Ptgs: D2, C2, B2, A2, VALUE FUNCEXEC  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: '24c9e436-1847-41e1-a7ac-ae585e7e2fda', label: 'D5\n9.0', color: '#31b0d5', title: 'Name: D5<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: 24c9e436-1847-41e1-a7ac-ae585e7e2fda<br>Formula Expression: Formula String: D5; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: D5 Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: 'a7b71cf0-e7b6-4536-bf5e-9ae05a85f912', label: 'VALUE\nDEVDEF_3', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF_3<br>Type: CONSTANT_VALUE<br>Id: a7b71cf0-e7b6-4536-bf5e-9ae05a85f912<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_3; Formula Ptg: DEVDEF_3; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: 'eef05cb1-ea21-42d8-b5c9-ea029697d1c6', label: 'A2:D2\n[[5.0, 3.0, 9.0, 4.0]]', color: '#31b0d5', title: 'Name: A2:D2<br>Value: [[5.0, 3.0, 9.0, 4.0]]<br>Type: RANGE<br>Id: eef05cb1-ea21-42d8-b5c9-ea029697d1c6<br>Formula Expression: Formula String: A2:D2; Formula Values: [[5.0, 3.0, 9.0, 4.0]]; Formula Ptg: [[5.0, 3.0, 9.0, 4.0]]; Ptgs: A2:D2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: 'f36033ac-a80b-4c74-8b30-3fb915684688', label: 'FUNCEXEC\n6.225', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Value: 6.225<br>Type: FUNCTION<br>Id: f36033ac-a80b-4c74-8b30-3fb915684688<br>Formula Expression: Formula String: FUNCEXEC(D5, C5, B5, A5, VALUE); Formula Values: FUNCEXEC(9.0, 0.9, 8.0, 7.0, DEVDEF_4); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: '52dbda70-c725-42cd-8caa-b6ec634641b4', label: 'A4\n1.0', color: '#31b0d5', title: 'Name: A4<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 52dbda70-c725-42cd-8caa-b6ec634641b4<br>Formula Expression: Formula String: A4; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A4 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: 'b4b77056-1e7e-4291-8651-ca1786916cb0', label: 'AVERAGE\n6.225', color: '#f0ad4e', title: 'Name: AVERAGE<br>Value: 6.225<br>Type: FUNCTION<br>Id: b4b77056-1e7e-4291-8651-ca1786916cb0<br>Formula Expression: Formula String: AVERAGE(A5:D5); Formula Values: AVERAGE(7.0, 8.0, 0.9, 9.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: '45cd2a2c-8199-4f65-ac6a-c3108047a227', label: 'B3\n4.0', color: '#31b0d5', title: 'Name: B3<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 45cd2a2c-8199-4f65-ac6a-c3108047a227<br>Formula Expression: Formula String: B3; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: B3 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: 'b7437d83-85c7-48be-8cfb-c9ceebacb744', label: 'D4\n5.0', color: '#31b0d5', title: 'Name: D4<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: b7437d83-85c7-48be-8cfb-c9ceebacb744<br>Formula Expression: Formula String: D4; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: D4 Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: 'c1f0bbf5-30cd-4ed1-b51f-83ce8ef830c2', label: 'FUNCEXEC\n3.5', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Value: 3.5<br>Type: FUNCTION<br>Id: c1f0bbf5-30cd-4ed1-b51f-83ce8ef830c2<br>Formula Expression: Formula String: FUNCEXEC(D4, C4, B4, A4, VALUE); Formula Values: FUNCEXEC(5.0, 0.0, 8.0, 1.0, DEVDEF_3); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: 'fdb94c7f-8193-406a-b8ad-1a8cf269fd99', label: 'AVERAGE\n5.5', color: '#f0ad4e', title: 'Name: AVERAGE<br>Value: 5.5<br>Type: FUNCTION<br>Id: fdb94c7f-8193-406a-b8ad-1a8cf269fd99<br>Formula Expression: Formula String: AVERAGE(A3:D3); Formula Values: AVERAGE(8.0, 4.0, 8.0, 2.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: '53a56485-3254-4062-bef1-5b2959b24394', label: 'E5\n6.225', color: '#31b0d5', title: 'Name: E5<br>Value: 6.225<br>Type: CELL_WITH_FORMULA<br>Id: 53a56485-3254-4062-bef1-5b2959b24394<br>Formula Expression: Formula String: AVERAGE(A5:D5); Formula Values: AVERAGE(7.0, 8.0, 0.9, 9.0); Formula Ptg: 7.0, 8.0, 0.9, 9.0 AVERAGE ; Ptgs: A5:D5 AVERAGE  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: '1bae5892-f59f-4be9-ba48-211657678d35', label: 'DEFINE\nDEFINE', color: '#f0ad4e', title: 'Name: DEFINE<br>Value: DEFINE<br>Type: FUNCTION<br>Id: 1bae5892-f59f-4be9-ba48-211657678d35<br>Formula Expression: Formula String: DEFINE(AVERAGE(A2:D2), VALUE, D2, C2, B2, A2, VALUE); Formula Values: DEFINE(AVERAGE(5.0, 3.0, 9.0, 4.0), #, 4.0, 9.0, 3.0, 5.0, DEVDEF_1); Formula Ptg: ; Ptgs:  Index in Ptgs: 8 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: 'bc906a1e-06c4-4f9e-9a5f-44240a9ae463', label: 'DEFINE\nDEFINE', color: '#f0ad4e', title: 'Name: DEFINE<br>Value: DEFINE<br>Type: FUNCTION<br>Id: bc906a1e-06c4-4f9e-9a5f-44240a9ae463<br>Formula Expression: Formula String: DEFINE(AVERAGE(A3:D3), VALUE, D3, C3, B3, A3, VALUE); Formula Values: DEFINE(AVERAGE(8.0, 4.0, 8.0, 2.0), #, 2.0, 8.0, 4.0, 8.0, DEVDEF_2); Formula Ptg: ; Ptgs:  Index in Ptgs: 8 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: '1ccfbad3-284e-44cb-8bff-7f43b1240200', label: 'VALUE\nDEVDEF_4', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF_4<br>Type: CONSTANT_VALUE<br>Id: 1ccfbad3-284e-44cb-8bff-7f43b1240200<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_4; Formula Ptg: DEVDEF_4; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: '2dcbcd38-2303-4d24-9c10-b32f4f1f40a1', label: 'C5\n0.9', color: '#31b0d5', title: 'Name: C5<br>Value: 0.9<br>Type: CELL_WITH_VALUE<br>Id: 2dcbcd38-2303-4d24-9c10-b32f4f1f40a1<br>Formula Expression: Formula String: C5; Formula Values: 0.9; Formula Ptg: 0.9; Ptgs: C5 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: 'd3eb842b-c8ed-4877-8ffe-88ee7fb5154a', label: 'DEFINE\nDEFINE', color: '#f0ad4e', title: 'Name: DEFINE<br>Value: DEFINE<br>Type: FUNCTION<br>Id: d3eb842b-c8ed-4877-8ffe-88ee7fb5154a<br>Formula Expression: Formula String: DEFINE(AVERAGE(A4:D4), VALUE, D4, C4, B4, A4, VALUE); Formula Values: DEFINE(AVERAGE(1.0, 8.0, 0.0, 5.0), #, 5.0, 0.0, 8.0, 1.0, DEVDEF_3); Formula Ptg: ; Ptgs:  Index in Ptgs: 8 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: 'af2e4942-7ef1-4204-a0d3-639cacf61cbc', label: 'A3\n8.0', color: '#31b0d5', title: 'Name: A3<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: af2e4942-7ef1-4204-a0d3-639cacf61cbc<br>Formula Expression: Formula String: A3; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: A3 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: '1ff7f928-9b75-4834-815e-91e5247f090d', label: 'VALUE\nDEVDEF_2', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF_2<br>Type: CONSTANT_VALUE<br>Id: 1ff7f928-9b75-4834-815e-91e5247f090d<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_2; Formula Ptg: DEVDEF_2; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: 'ff48e67b-ebb0-4e3b-a2ff-189c9728a9c4', label: 'A5:D5\n[[7.0, 8.0, 0.9, 9.0]]', color: '#31b0d5', title: 'Name: A5:D5<br>Value: [[7.0, 8.0, 0.9, 9.0]]<br>Type: RANGE<br>Id: ff48e67b-ebb0-4e3b-a2ff-189c9728a9c4<br>Formula Expression: Formula String: A5:D5; Formula Values: [[7.0, 8.0, 0.9, 9.0]]; Formula Ptg: [[7.0, 8.0, 0.9, 9.0]]; Ptgs: A5:D5 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: 'eb569f77-0cba-4ab7-a70c-86d3b5e0a32f', label: 'E3\n5.5', color: '#31b0d5', title: 'Name: E3<br>Value: 5.5<br>Type: CELL_WITH_FORMULA<br>Id: eb569f77-0cba-4ab7-a70c-86d3b5e0a32f<br>Formula Expression: Formula String: AVERAGE(A3:D3); Formula Values: AVERAGE(8.0, 4.0, 8.0, 2.0); Formula Ptg: 8.0, 4.0, 8.0, 2.0 AVERAGE ; Ptgs: A3:D3 AVERAGE  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: '8cfa3b09-d70e-4702-a67c-a5a4974676ed', label: 'A8\nDEFINE', color: '#31b0d5', title: 'Name: A8<br>Value: DEFINE<br>Type: CELL_WITH_FORMULA<br>Id: 8cfa3b09-d70e-4702-a67c-a5a4974676ed<br>Formula Expression: Formula String: DEFINE(AVERAGE(A3:D3), VALUE, D3, C3, B3, A3, VALUE); Formula Values: DEFINE(AVERAGE(8.0, 4.0, 8.0, 2.0), #, 2.0, 8.0, 4.0, 8.0, DEVDEF_2); Formula Ptg: 8.0, 4.0, 8.0, 2.0 AVERAGE , #, 2.0, 8.0, 4.0, 8.0, DEVDEF_2 DEFINE ; Ptgs: A3:D3 AVERAGE , VALUE, D3, C3, B3, A3, VALUE DEFINE  Index in Ptgs: 8 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: '47798763-490b-434d-82c3-680088d22377', label: 'AVERAGE\n5.25', color: '#f0ad4e', title: 'Name: AVERAGE<br>Value: 5.25<br>Type: FUNCTION<br>Id: 47798763-490b-434d-82c3-680088d22377<br>Formula Expression: Formula String: AVERAGE(A2:D2); Formula Values: AVERAGE(5.0, 3.0, 9.0, 4.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: '25c76fb1-fe18-405d-bb26-d1f70f3f3bb9', label: 'C2\n9.0', color: '#31b0d5', title: 'Name: C2<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: 25c76fb1-fe18-405d-bb26-d1f70f3f3bb9<br>Formula Expression: Formula String: C2; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: C2 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: '5e2e2eed-170e-46de-b8f1-9ba6396bf76c', label: 'F7\n5.5', color: '#31b0d5', title: 'Name: F7<br>Value: 5.5<br>Type: CELL_WITH_FORMULA<br>Id: 5e2e2eed-170e-46de-b8f1-9ba6396bf76c<br>Formula Expression: Formula String: FUNCEXEC(D3, C3, B3, A3, VALUE); Formula Values: FUNCEXEC(2.0, 8.0, 4.0, 8.0, DEVDEF_2); Formula Ptg: 2.0, 8.0, 4.0, 8.0, DEVDEF_2 FUNCEXEC ; Ptgs: D3, C3, B3, A3, VALUE FUNCEXEC  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: '47a63c60-a4bb-4cee-92f1-e61abd70d60f', label: 'VALUE\nDEVDEF_4', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF_4<br>Type: CONSTANT_VALUE<br>Id: 47a63c60-a4bb-4cee-92f1-e61abd70d60f<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_4; Formula Ptg: DEVDEF_4; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: '69745d5b-d72d-4e0a-9b85-6e0ead1d1755', label: 'C3\n8.0', color: '#31b0d5', title: 'Name: C3<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 69745d5b-d72d-4e0a-9b85-6e0ead1d1755<br>Formula Expression: Formula String: C3; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: C3 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: '2796c7df-a9cf-4aa8-a0d5-5c09d8286e42', label: 'FUNCEXEC\n5.5', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Value: 5.5<br>Type: FUNCTION<br>Id: 2796c7df-a9cf-4aa8-a0d5-5c09d8286e42<br>Formula Expression: Formula String: FUNCEXEC(D3, C3, B3, A3, VALUE); Formula Values: FUNCEXEC(2.0, 8.0, 4.0, 8.0, DEVDEF_2); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: 'd3614277-49a9-4468-b8f7-a71c0bf9f1e1', label: 'DEFINE\nDEFINE', color: '#f0ad4e', title: 'Name: DEFINE<br>Value: DEFINE<br>Type: FUNCTION<br>Id: d3614277-49a9-4468-b8f7-a71c0bf9f1e1<br>Formula Expression: Formula String: DEFINE(AVERAGE(A5:D5), VALUE, D5, C5, B5, A5, VALUE); Formula Values: DEFINE(AVERAGE(7.0, 8.0, 0.9, 9.0), #, 9.0, 0.9, 8.0, 7.0, DEVDEF_4); Formula Ptg: ; Ptgs:  Index in Ptgs: 8 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: '182c4f44-bc4d-4e81-895f-950bcaa05e57', label: 'D2\n4.0', color: '#31b0d5', title: 'Name: D2<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 182c4f44-bc4d-4e81-895f-950bcaa05e57<br>Formula Expression: Formula String: D2; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D2 Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: 'bf582a2b-a043-4ba3-99a4-f9ef99fdb52a', label: 'F8\n3.5', color: '#31b0d5', title: 'Name: F8<br>Value: 3.5<br>Type: CELL_WITH_FORMULA<br>Id: bf582a2b-a043-4ba3-99a4-f9ef99fdb52a<br>Formula Expression: Formula String: FUNCEXEC(D4, C4, B4, A4, VALUE); Formula Values: FUNCEXEC(5.0, 0.0, 8.0, 1.0, DEVDEF_3); Formula Ptg: 5.0, 0.0, 8.0, 1.0, DEVDEF_3 FUNCEXEC ; Ptgs: D4, C4, B4, A4, VALUE FUNCEXEC  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: '380bd318-9019-4bc7-b8d6-ffec3112afa3', label: 'FUNCEXEC\n5.25', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Value: 5.25<br>Type: FUNCTION<br>Id: 380bd318-9019-4bc7-b8d6-ffec3112afa3<br>Formula Expression: Formula String: FUNCEXEC(D2, C2, B2, A2, VALUE); Formula Values: FUNCEXEC(4.0, 9.0, 3.0, 5.0, DEVDEF_1); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: '20f8037c-809a-4326-9e59-0c8797148b0f', label: 'AVERAGE\n3.5', color: '#f0ad4e', title: 'Name: AVERAGE<br>Value: 3.5<br>Type: FUNCTION<br>Id: 20f8037c-809a-4326-9e59-0c8797148b0f<br>Formula Expression: Formula String: AVERAGE(A4:D4); Formula Values: AVERAGE(1.0, 8.0, 0.0, 5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: 'a15c8995-8934-458f-bff1-5df07bbda9f7', label: 'VALUE\nDEVDEF_1', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF_1<br>Type: CONSTANT_VALUE<br>Id: a15c8995-8934-458f-bff1-5df07bbda9f7<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_1; Formula Ptg: DEVDEF_1; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: '125f7e73-148c-4f02-8c3c-b0afd880e356', label: 'VALUE\nDEVDEF_2', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF_2<br>Type: CONSTANT_VALUE<br>Id: 125f7e73-148c-4f02-8c3c-b0afd880e356<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_2; Formula Ptg: DEVDEF_2; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: '108d1fbf-b5cf-4ffa-b28f-429cf68fb326', label: 'A2\n5.0', color: '#31b0d5', title: 'Name: A2<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 108d1fbf-b5cf-4ffa-b28f-429cf68fb326<br>Formula Expression: Formula String: A2; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: '86ddfa82-5003-42b8-9728-53cc1c259375', label: 'D3\n2.0', color: '#31b0d5', title: 'Name: D3<br>Value: 2.0<br>Type: CELL_WITH_VALUE<br>Id: 86ddfa82-5003-42b8-9728-53cc1c259375<br>Formula Expression: Formula String: D3; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: D3 Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: '4e6a5fb6-a2e9-4a58-9040-a59b2444bbd9', label: 'VALUE\n#', color: '#31b0d5', title: 'Name: VALUE<br>Value: #<br>Type: CONSTANT_VALUE<br>Id: 4e6a5fb6-a2e9-4a58-9040-a59b2444bbd9<br>Formula Expression: Formula String: VALUE; Formula Values: #; Formula Ptg: #; Ptgs: VALUE Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'},
{id: '2db99811-79d4-4859-8bcf-2d5cf5227ef7', label: 'F9\n6.225', color: '#31b0d5', title: 'Name: F9<br>Value: 6.225<br>Type: CELL_WITH_FORMULA<br>Id: 2db99811-79d4-4859-8bcf-2d5cf5227ef7<br>Formula Expression: Formula String: FUNCEXEC(D5, C5, B5, A5, VALUE); Formula Values: FUNCEXEC(9.0, 0.9, 8.0, 7.0, DEVDEF_4); Formula Ptg: 9.0, 0.9, 8.0, 7.0, DEVDEF_4 FUNCEXEC ; Ptgs: D5, C5, B5, A5, VALUE FUNCEXEC  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@47248a48'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'd3614277-49a9-4468-b8f7-a71c0bf9f1e1', to: 'a15c40a8-f7f8-4b58-a57f-bcdf77aec84b'},
{from: 'a15c8995-8934-458f-bff1-5df07bbda9f7', to: '1bae5892-f59f-4be9-ba48-211657678d35'},
{from: '86ddfa82-5003-42b8-9728-53cc1c259375', to: '2796c7df-a9cf-4aa8-a0d5-5c09d8286e42'},
{from: 'b7437d83-85c7-48be-8cfb-c9ceebacb744', to: 'c1f0bbf5-30cd-4ed1-b51f-83ce8ef830c2'},
{from: 'da5b44a4-6303-417f-812b-f4f9f6de5944', to: 'f36033ac-a80b-4c74-8b30-3fb915684688'},
{from: '24c9e436-1847-41e1-a7ac-ae585e7e2fda', to: 'd3614277-49a9-4468-b8f7-a71c0bf9f1e1'},
{from: '182c4f44-bc4d-4e81-895f-950bcaa05e57', to: '380bd318-9019-4bc7-b8d6-ffec3112afa3'},
{from: '380bd318-9019-4bc7-b8d6-ffec3112afa3', to: 'c79b7a65-f1fb-4eca-9ed5-26307b634a53'},
{from: '20f8037c-809a-4326-9e59-0c8797148b0f', to: 'eb8fc520-4925-46f2-8243-1f36f8082c0f'},
{from: 'af2e4942-7ef1-4204-a0d3-639cacf61cbc', to: '2796c7df-a9cf-4aa8-a0d5-5c09d8286e42'},
{from: '108d1fbf-b5cf-4ffa-b28f-429cf68fb326', to: '1bae5892-f59f-4be9-ba48-211657678d35'},
{from: 'a7b71cf0-e7b6-4536-bf5e-9ae05a85f912', to: 'c1f0bbf5-30cd-4ed1-b51f-83ce8ef830c2'},
{from: 'b4b77056-1e7e-4291-8651-ca1786916cb0', to: '53a56485-3254-4062-bef1-5b2959b24394'},
{from: '52dbda70-c725-42cd-8caa-b6ec634641b4', to: 'd3eb842b-c8ed-4877-8ffe-88ee7fb5154a'},
{from: '6838b88f-4bf5-4e31-944f-58b54f4f027a', to: '1bae5892-f59f-4be9-ba48-211657678d35'},
{from: 'af2e4942-7ef1-4204-a0d3-639cacf61cbc', to: 'bc906a1e-06c4-4f9e-9a5f-44240a9ae463'},
{from: '86ddfa82-5003-42b8-9728-53cc1c259375', to: 'bc906a1e-06c4-4f9e-9a5f-44240a9ae463'},
{from: '2dcbcd38-2303-4d24-9c10-b32f4f1f40a1', to: 'f36033ac-a80b-4c74-8b30-3fb915684688'},
{from: '69745d5b-d72d-4e0a-9b85-6e0ead1d1755', to: 'bc906a1e-06c4-4f9e-9a5f-44240a9ae463'},
{from: '24c9e436-1847-41e1-a7ac-ae585e7e2fda', to: 'f36033ac-a80b-4c74-8b30-3fb915684688'},
{from: 'bc906a1e-06c4-4f9e-9a5f-44240a9ae463', to: '8cfa3b09-d70e-4702-a67c-a5a4974676ed'},
{from: '6252132a-fd34-4a2c-a194-5c125d5ab2ba', to: '380bd318-9019-4bc7-b8d6-ffec3112afa3'},
{from: 'ba42952c-6736-4906-b768-28a1c21cc20c', to: '1bae5892-f59f-4be9-ba48-211657678d35'},
{from: 'c2293969-615e-4854-b336-e4f68465002c', to: 'c1f0bbf5-30cd-4ed1-b51f-83ce8ef830c2'},
{from: '53a56485-3254-4062-bef1-5b2959b24394', to: 'd3614277-49a9-4468-b8f7-a71c0bf9f1e1'},
{from: '2dcbcd38-2303-4d24-9c10-b32f4f1f40a1', to: 'd3614277-49a9-4468-b8f7-a71c0bf9f1e1'},
{from: '182c4f44-bc4d-4e81-895f-950bcaa05e57', to: '1bae5892-f59f-4be9-ba48-211657678d35'},
{from: 'eb8fc520-4925-46f2-8243-1f36f8082c0f', to: 'd3eb842b-c8ed-4877-8ffe-88ee7fb5154a'},
{from: 'fdb94c7f-8193-406a-b8ad-1a8cf269fd99', to: 'eb569f77-0cba-4ab7-a70c-86d3b5e0a32f'},
{from: 'da5b44a4-6303-417f-812b-f4f9f6de5944', to: 'd3614277-49a9-4468-b8f7-a71c0bf9f1e1'},
{from: '1bae5892-f59f-4be9-ba48-211657678d35', to: '88d4f279-8e20-4ecd-b8c7-f6071505db0e'},
{from: '4e6a5fb6-a2e9-4a58-9040-a59b2444bbd9', to: 'd3614277-49a9-4468-b8f7-a71c0bf9f1e1'},
{from: '1ff7f928-9b75-4834-815e-91e5247f090d', to: 'bc906a1e-06c4-4f9e-9a5f-44240a9ae463'},
{from: 'd1846c16-7636-4b19-9733-bcbbcde4f858', to: 'd3eb842b-c8ed-4877-8ffe-88ee7fb5154a'},
{from: '6252132a-fd34-4a2c-a194-5c125d5ab2ba', to: '1bae5892-f59f-4be9-ba48-211657678d35'},
{from: 'c2293969-615e-4854-b336-e4f68465002c', to: 'd3eb842b-c8ed-4877-8ffe-88ee7fb5154a'},
{from: '47798763-490b-434d-82c3-680088d22377', to: '6838b88f-4bf5-4e31-944f-58b54f4f027a'},
{from: '108d1fbf-b5cf-4ffa-b28f-429cf68fb326', to: '380bd318-9019-4bc7-b8d6-ffec3112afa3'},
{from: 'c4bde3a8-4e7e-46ab-91b1-05c661935278', to: 'd3eb842b-c8ed-4877-8ffe-88ee7fb5154a'},
{from: '8fd7a27a-009d-40f3-9c27-c7ac7beec769', to: 'f36033ac-a80b-4c74-8b30-3fb915684688'},
{from: 'eef05cb1-ea21-42d8-b5c9-ea029697d1c6', to: '47798763-490b-434d-82c3-680088d22377'},
{from: 'b7437d83-85c7-48be-8cfb-c9ceebacb744', to: 'd3eb842b-c8ed-4877-8ffe-88ee7fb5154a'},
{from: '45cd2a2c-8199-4f65-ac6a-c3108047a227', to: '2796c7df-a9cf-4aa8-a0d5-5c09d8286e42'},
{from: 'ff48e67b-ebb0-4e3b-a2ff-189c9728a9c4', to: 'b4b77056-1e7e-4291-8651-ca1786916cb0'},
{from: '4adbe24d-e032-4992-891b-c541dbc82628', to: '380bd318-9019-4bc7-b8d6-ffec3112afa3'},
{from: 'd3eb842b-c8ed-4877-8ffe-88ee7fb5154a', to: '34e22ce7-dfca-4aad-986b-aa902edb43e3'},
{from: '2796c7df-a9cf-4aa8-a0d5-5c09d8286e42', to: '5e2e2eed-170e-46de-b8f1-9ba6396bf76c'},
{from: 'baea74ea-4228-4f9f-99bc-8e3bc7381d5e', to: 'd3eb842b-c8ed-4877-8ffe-88ee7fb5154a'},
{from: '1ccfbad3-284e-44cb-8bff-7f43b1240200', to: 'f36033ac-a80b-4c74-8b30-3fb915684688'},
{from: '8fd7a27a-009d-40f3-9c27-c7ac7beec769', to: 'd3614277-49a9-4468-b8f7-a71c0bf9f1e1'},
{from: '69745d5b-d72d-4e0a-9b85-6e0ead1d1755', to: '2796c7df-a9cf-4aa8-a0d5-5c09d8286e42'},
{from: '337b4c26-6b07-4478-a217-63564bbd4d16', to: 'bc906a1e-06c4-4f9e-9a5f-44240a9ae463'},
{from: '125f7e73-148c-4f02-8c3c-b0afd880e356', to: '2796c7df-a9cf-4aa8-a0d5-5c09d8286e42'},
{from: 'cbc32df3-9e0e-4d62-8bbc-2a044d4757e6', to: 'fdb94c7f-8193-406a-b8ad-1a8cf269fd99'},
{from: 'c4bde3a8-4e7e-46ab-91b1-05c661935278', to: 'c1f0bbf5-30cd-4ed1-b51f-83ce8ef830c2'},
{from: 'c1f0bbf5-30cd-4ed1-b51f-83ce8ef830c2', to: 'bf582a2b-a043-4ba3-99a4-f9ef99fdb52a'},
{from: '47a63c60-a4bb-4cee-92f1-e61abd70d60f', to: 'd3614277-49a9-4468-b8f7-a71c0bf9f1e1'},
{from: 'eb569f77-0cba-4ab7-a70c-86d3b5e0a32f', to: 'bc906a1e-06c4-4f9e-9a5f-44240a9ae463'},
{from: '25c76fb1-fe18-405d-bb26-d1f70f3f3bb9', to: '1bae5892-f59f-4be9-ba48-211657678d35'},
{from: '45cd2a2c-8199-4f65-ac6a-c3108047a227', to: 'bc906a1e-06c4-4f9e-9a5f-44240a9ae463'},
{from: '25c76fb1-fe18-405d-bb26-d1f70f3f3bb9', to: '380bd318-9019-4bc7-b8d6-ffec3112afa3'},
{from: 'de76716a-e415-4e58-88be-0340e70b975c', to: '20f8037c-809a-4326-9e59-0c8797148b0f'},
{from: '52dbda70-c725-42cd-8caa-b6ec634641b4', to: 'c1f0bbf5-30cd-4ed1-b51f-83ce8ef830c2'},
{from: 'f36033ac-a80b-4c74-8b30-3fb915684688', to: '2db99811-79d4-4859-8bcf-2d5cf5227ef7'}
                            ]);