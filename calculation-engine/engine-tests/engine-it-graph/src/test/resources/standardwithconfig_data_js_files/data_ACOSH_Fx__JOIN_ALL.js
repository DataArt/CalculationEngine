var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '2624b180-35c8-4ca7-92d2-7040c96abde4', label: 'ACOSH\n5.192925985263684', color: '#f0ad4e', title: 'Name: ACOSH<br>Value: 5.192925985263684<br>Type: FUNCTION<br>Id: 2624b180-35c8-4ca7-92d2-7040c96abde4<br>Formula Expression: Formula String: ACOSH(C2); Formula Values: ACOSH(90.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3590fc5b'},
{id: '939f605f-4d9f-444a-b9fe-79bcf4a88e92', label: 'VALUE\n10.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 10.0<br>Type: CONSTANT_VALUE<br>Id: 939f605f-4d9f-444a-b9fe-79bcf4a88e92<br>Formula Expression: Formula String: VALUE; Formula Values: 10.0; Formula Ptg: 10.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3590fc5b'},
{id: '5594b193-1549-4134-91fd-b828d928556e', label: 'ACOSH\n2.993222846126381', color: '#f0ad4e', title: 'Name: ACOSH<br>Value: 2.993222846126381<br>Type: FUNCTION<br>Id: 5594b193-1549-4134-91fd-b828d928556e<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3590fc5b'},
{id: 'c61872bd-d47d-4efc-8689-3f79456cda03', label: 'A1\n2.993222846126381', color: '#31b0d5', title: 'Name: A1<br>Value: 2.993222846126381<br>Type: CELL_WITH_FORMULA<br>Id: c61872bd-d47d-4efc-8689-3f79456cda03<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: 10.0 ACOSH ; Ptgs: VALUE ACOSH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3590fc5b'},
{id: '2fbfecb9-863e-4ebe-aca9-72b6f97956a7', label: 'E5\n5.192925985263684', color: '#31b0d5', title: 'Name: E5<br>Value: 5.192925985263684<br>Type: CELL_WITH_FORMULA<br>Id: 2fbfecb9-863e-4ebe-aca9-72b6f97956a7<br>Formula Expression: Formula String: ACOSH(C2); Formula Values: ACOSH(90.0); Formula Ptg: 90.0 ACOSH ; Ptgs: C2 ACOSH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3590fc5b'},
{id: '9abdb5bc-a16b-4787-89e4-93ceb183e3b3', label: 'C2\n90.0', color: '#31b0d5', title: 'Name: C2<br>Value: 90.0<br>Type: CELL_WITH_VALUE<br>Id: 9abdb5bc-a16b-4787-89e4-93ceb183e3b3<br>Formula Expression: Formula String: C2; Formula Values: 90.0; Formula Ptg: 90.0; Ptgs: C2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3590fc5b'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '5594b193-1549-4134-91fd-b828d928556e', to: 'c61872bd-d47d-4efc-8689-3f79456cda03'},
{from: '939f605f-4d9f-444a-b9fe-79bcf4a88e92', to: '5594b193-1549-4134-91fd-b828d928556e'},
{from: '9abdb5bc-a16b-4787-89e4-93ceb183e3b3', to: '2624b180-35c8-4ca7-92d2-7040c96abde4'},
{from: '2624b180-35c8-4ca7-92d2-7040c96abde4', to: '2fbfecb9-863e-4ebe-aca9-72b6f97956a7'}
                            ]);