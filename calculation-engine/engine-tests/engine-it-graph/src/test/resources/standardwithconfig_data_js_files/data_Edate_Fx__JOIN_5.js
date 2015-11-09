var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3c4af91a-ff8f-47ec-a1c8-c4f27b8af747', label: 'EDATE\n40558.0', color: '#f0ad4e', title: 'Name: EDATE<br>Value: 40558.0<br>Type: FUNCTION<br>Id: 3c4af91a-ff8f-47ec-a1c8-c4f27b8af747<br>Formula Expression: Formula String: EDATE(VALUE, EDATE(VALUE, A1)); Formula Values: EDATE(-1.0, EDATE(1.0, 40558.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7070ae1'},
{id: 'a68f4aa2-111b-4e94-90f2-f8efa69c6c13', label: 'C5\n40558.0', color: '#31b0d5', title: 'Name: C5<br>Value: 40558.0<br>Type: CELL_WITH_FORMULA<br>Id: a68f4aa2-111b-4e94-90f2-f8efa69c6c13<br>Formula Expression: Formula String: EDATE(VALUE, EDATE(VALUE, A1)); Formula Values: EDATE(-1.0, EDATE(1.0, 40558.0)); Formula Ptg: -1.0, 1.0, 40558.0 EDATE  EDATE ; Ptgs: VALUE, VALUE, A1 EDATE  EDATE  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7070ae1'},
{id: '6dea5a3a-12fe-4fad-94f4-12e61b9242b6', label: 'B3\n40589.0', color: '#31b0d5', title: 'Name: B3<br>Value: 40589.0<br>Type: CELL_WITH_FORMULA<br>Id: 6dea5a3a-12fe-4fad-94f4-12e61b9242b6<br>Formula Expression: Formula String: EDATE(VALUE, A1); Formula Values: EDATE(1.0, 40558.0); Formula Ptg: 1.0, 40558.0 EDATE ; Ptgs: VALUE, A1 EDATE  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7070ae1'},
{id: '2bed3cbf-a836-469e-83d7-564942274324', label: 'VALUE\n-1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: -1.0<br>Type: CONSTANT_VALUE<br>Id: 2bed3cbf-a836-469e-83d7-564942274324<br>Formula Expression: Formula String: VALUE; Formula Values: -1.0; Formula Ptg: -1.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7070ae1'},
{id: '999d2b26-112b-4ca2-b471-237b6f8facd1', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 999d2b26-112b-4ca2-b471-237b6f8facd1<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7070ae1'},
{id: 'cc48fb41-57ca-4acd-b091-3df81939db04', label: 'B3\n40589.0', color: '#31b0d5', title: 'Name: B3<br>Value: 40589.0<br>Type: CELL_WITH_FORMULA<br>Id: cc48fb41-57ca-4acd-b091-3df81939db04<br>Formula Expression: Formula String: EDATE(VALUE, A1); Formula Values: EDATE(1.0, 40558.0); Formula Ptg: 1.0, 40558.0 EDATE ; Ptgs: VALUE, A1 EDATE  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7070ae1'},
{id: '91af6d1a-7652-470e-8081-51a65303ab33', label: 'EDATE\n40589.0', color: '#f0ad4e', title: 'Name: EDATE<br>Value: 40589.0<br>Type: FUNCTION<br>Id: 91af6d1a-7652-470e-8081-51a65303ab33<br>Formula Expression: Formula String: EDATE(VALUE, A1); Formula Values: EDATE(1.0, 40558.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7070ae1'},
{id: '0eaeda77-5a84-412a-858d-d84ba47bcd6e', label: 'A1\n40558.0', color: '#31b0d5', title: 'Name: A1<br>Value: 40558.0<br>Type: CELL_WITH_VALUE<br>Id: 0eaeda77-5a84-412a-858d-d84ba47bcd6e<br>Formula Expression: Formula String: A1; Formula Values: 40558.0; Formula Ptg: 40558.0; Ptgs: A1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7070ae1'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '91af6d1a-7652-470e-8081-51a65303ab33', to: 'cc48fb41-57ca-4acd-b091-3df81939db04'},
{from: '0eaeda77-5a84-412a-858d-d84ba47bcd6e', to: '91af6d1a-7652-470e-8081-51a65303ab33'},
{from: '3c4af91a-ff8f-47ec-a1c8-c4f27b8af747', to: 'a68f4aa2-111b-4e94-90f2-f8efa69c6c13'},
{from: '6dea5a3a-12fe-4fad-94f4-12e61b9242b6', to: '3c4af91a-ff8f-47ec-a1c8-c4f27b8af747'},
{from: '999d2b26-112b-4ca2-b471-237b6f8facd1', to: '91af6d1a-7652-470e-8081-51a65303ab33'},
{from: '2bed3cbf-a836-469e-83d7-564942274324', to: '3c4af91a-ff8f-47ec-a1c8-c4f27b8af747'},
{from: '91af6d1a-7652-470e-8081-51a65303ab33', to: '6dea5a3a-12fe-4fad-94f4-12e61b9242b6'}
                            ]);