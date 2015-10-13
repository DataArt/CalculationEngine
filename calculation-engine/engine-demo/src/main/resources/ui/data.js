var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'a351c730-bf3a-4899-b3ae-9ed2821e2a98', label: 'INDEX\n...', color: '#f0ad4e', title: 'Name: INDEX<br>Value: org.apache.poi.ss.formula.ArrayEval$1@32c726ee<br>Type: FUNCTION<br>Id: a351c730-bf3a-4899-b3ae-9ed2821e2a98<br>Formula Expression: Formula String: INDEX(VALUE, FUNCEXEC(B2, A2, VALUE)); Formula Values: INDEX(2.0, FUNCEXEC(2.0, 1.0, DEVDEF_1)); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2ef14fe'},
{id: 'c0404ca6-c55c-46c1-b983-f23e33cb4d20', label: 'VALUE\nDEVDEF_1', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF_1<br>Type: CONSTANT_VALUE<br>Id: c0404ca6-c55c-46c1-b983-f23e33cb4d20<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_1; Formula Ptg: DEVDEF_1; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2ef14fe'},
{id: 'd308f4e1-6489-4f8d-8db7-70eac530355a', label: 'F16\n...', color: '#31b0d5', title: 'Name: F16<br>Value: org.apache.poi.ss.formula.ArrayEval$1@32c726ee<br>Type: CELL_WITH_FORMULA<br>Id: d308f4e1-6489-4f8d-8db7-70eac530355a<br>Formula Expression: Formula String: INDEX(VALUE, FUNCEXEC(B2, A2, VALUE)); Formula Values: INDEX(2.0, FUNCEXEC(2.0, 1.0, DEVDEF_1)); Formula Ptg: 2.0, 2.0, 1.0, DEVDEF_1 FUNCEXEC  INDEX ; Ptgs: VALUE, B2, A2, VALUE FUNCEXEC  INDEX  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2ef14fe'},
{id: '23e3a8d2-4663-4b86-ab19-52c618843b71', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 23e3a8d2-4663-4b86-ab19-52c618843b71<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2ef14fe'},
{id: '55ae593d-2b8c-42b8-aeed-9efafd556c2a', label: 'B2\n2.0', color: '#31b0d5', title: 'Name: B2<br>Value: 2.0<br>Type: CELL_WITH_VALUE<br>Id: 55ae593d-2b8c-42b8-aeed-9efafd556c2a<br>Formula Expression: Formula String: B2; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: B2 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2ef14fe'},
{id: '84a38104-9f4e-404c-9e0b-b94c67ab48b2', label: 'A2\n1.0', color: '#31b0d5', title: 'Name: A2<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 84a38104-9f4e-404c-9e0b-b94c67ab48b2<br>Formula Expression: Formula String: A2; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2ef14fe'},
{id: '762c3458-2bbe-40f3-b60a-6bfe8bb00a7a', label: 'FUNCEXEC\n[8.0, 10.0, 12.0]', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Value: [8.0, 10.0, 12.0]<br>Type: FUNCTION<br>Id: 762c3458-2bbe-40f3-b60a-6bfe8bb00a7a<br>Formula Expression: Formula String: FUNCEXEC(B2, A2, VALUE); Formula Values: FUNCEXEC(2.0, 1.0, DEVDEF_1); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2ef14fe'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'c0404ca6-c55c-46c1-b983-f23e33cb4d20', to: '762c3458-2bbe-40f3-b60a-6bfe8bb00a7a'},
{from: '762c3458-2bbe-40f3-b60a-6bfe8bb00a7a', to: 'a351c730-bf3a-4899-b3ae-9ed2821e2a98'},
{from: '55ae593d-2b8c-42b8-aeed-9efafd556c2a', to: '762c3458-2bbe-40f3-b60a-6bfe8bb00a7a'},
{from: '84a38104-9f4e-404c-9e0b-b94c67ab48b2', to: '762c3458-2bbe-40f3-b60a-6bfe8bb00a7a'},
{from: '23e3a8d2-4663-4b86-ab19-52c618843b71', to: 'a351c730-bf3a-4899-b3ae-9ed2821e2a98'},
{from: 'a351c730-bf3a-4899-b3ae-9ed2821e2a98', to: 'd308f4e1-6489-4f8d-8db7-70eac530355a'}
                            ]);