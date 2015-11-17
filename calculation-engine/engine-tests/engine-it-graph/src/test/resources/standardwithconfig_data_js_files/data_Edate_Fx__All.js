var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'e097d770-22a9-482c-9e74-cd6446b14625', label: 'B3\n40589.0', color: '#31b0d5', title: 'Name: B3<br>Value: 40589.0<br>Type: CELL_WITH_FORMULA<br>Id: e097d770-22a9-482c-9e74-cd6446b14625<br>Formula Expression: Formula String: EDATE(VALUE, A1); Formula Values: EDATE(1.0, 40558.0); Formula Ptg: 1.0, 40558.0 EDATE ; Ptgs: VALUE, A1 EDATE  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2e587292'},
{id: '84d62dd1-4f46-46e1-8d11-fd194e8593fc', label: 'C5\n40558.0', color: '#31b0d5', title: 'Name: C5<br>Value: 40558.0<br>Type: CELL_WITH_FORMULA<br>Id: 84d62dd1-4f46-46e1-8d11-fd194e8593fc<br>Formula Expression: Formula String: EDATE(VALUE, EDATE(VALUE, A1)); Formula Values: EDATE(-1.0, EDATE(1.0, 40558.0)); Formula Ptg: -1.0, 1.0, 40558.0 EDATE  EDATE ; Ptgs: VALUE, VALUE, A1 EDATE  EDATE  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2e587292'},
{id: '7314f6b4-3fd1-4bad-856f-3bb8cd97ff27', label: 'A1\n40558.0', color: '#31b0d5', title: 'Name: A1<br>Value: 40558.0<br>Type: CELL_WITH_VALUE<br>Id: 7314f6b4-3fd1-4bad-856f-3bb8cd97ff27<br>Formula Expression: Formula String: A1; Formula Values: 40558.0; Formula Ptg: 40558.0; Ptgs: A1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2e587292'},
{id: '6262c28a-2cf3-49b3-bd7e-165d9e8cda0a', label: 'B3\n40589.0', color: '#31b0d5', title: 'Name: B3<br>Value: 40589.0<br>Type: CELL_WITH_FORMULA<br>Id: 6262c28a-2cf3-49b3-bd7e-165d9e8cda0a<br>Formula Expression: Formula String: EDATE(VALUE, A1); Formula Values: EDATE(1.0, 40558.0); Formula Ptg: 1.0, 40558.0 EDATE ; Ptgs: VALUE, A1 EDATE  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2e587292'},
{id: 'b04f1bad-b363-4697-8017-929678148db6', label: 'EDATE\n40558.0', color: '#f0ad4e', title: 'Name: EDATE<br>Value: 40558.0<br>Type: FUNCTION<br>Id: b04f1bad-b363-4697-8017-929678148db6<br>Formula Expression: Formula String: EDATE(VALUE, EDATE(VALUE, A1)); Formula Values: EDATE(-1.0, EDATE(1.0, 40558.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2e587292'},
{id: 'dfd41fa6-98dc-4486-bbba-fc53ad9762d1', label: 'VALUE\n-1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: -1.0<br>Type: CONSTANT_VALUE<br>Id: dfd41fa6-98dc-4486-bbba-fc53ad9762d1<br>Formula Expression: Formula String: VALUE; Formula Values: -1.0; Formula Ptg: -1.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2e587292'},
{id: '91a87e56-ce24-410f-ae3c-a33ca918951f', label: 'EDATE\n40589.0', color: '#f0ad4e', title: 'Name: EDATE<br>Value: 40589.0<br>Type: FUNCTION<br>Id: 91a87e56-ce24-410f-ae3c-a33ca918951f<br>Formula Expression: Formula String: EDATE(VALUE, A1); Formula Values: EDATE(1.0, 40558.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2e587292'},
{id: '38a23c7e-e827-469e-b240-1349ffbbe2d2', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 38a23c7e-e827-469e-b240-1349ffbbe2d2<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2e587292'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '91a87e56-ce24-410f-ae3c-a33ca918951f', to: 'e097d770-22a9-482c-9e74-cd6446b14625'},
{from: '91a87e56-ce24-410f-ae3c-a33ca918951f', to: '6262c28a-2cf3-49b3-bd7e-165d9e8cda0a'},
{from: 'b04f1bad-b363-4697-8017-929678148db6', to: '84d62dd1-4f46-46e1-8d11-fd194e8593fc'},
{from: '38a23c7e-e827-469e-b240-1349ffbbe2d2', to: '91a87e56-ce24-410f-ae3c-a33ca918951f'},
{from: '6262c28a-2cf3-49b3-bd7e-165d9e8cda0a', to: 'b04f1bad-b363-4697-8017-929678148db6'},
{from: 'dfd41fa6-98dc-4486-bbba-fc53ad9762d1', to: 'b04f1bad-b363-4697-8017-929678148db6'},
{from: '7314f6b4-3fd1-4bad-856f-3bb8cd97ff27', to: '91a87e56-ce24-410f-ae3c-a33ca918951f'}
                            ]);