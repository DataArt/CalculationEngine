var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'c9aa67c6-2b4d-4353-ac22-a6054e641569', label: 'F6\n21.0', color: '#31b0d5', title: 'Name: F6<br>Alias: null<br>Value: 21.0<br>Type: CELL_WITH_FORMULA<br>Id: c9aa67c6-2b4d-4353-ac22-a6054e641569<br>Formula Expression: Formula String: FUNCEXEC(C2, B2, A2, VALUE); Formula Values: FUNCEXEC(9.0, 7.0, 5.0, DEVDEF_1); Formula Ptg: 9.0, 7.0, 5.0, DEVDEF_1 FUNCEXEC ; Ptgs: C2, B2, A2, VALUE FUNCEXEC  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@733037'},
{id: '1bfd22bc-b21f-44ba-937f-709b6f9c0206', label: 'A2\n5.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 1bfd22bc-b21f-44ba-937f-709b6f9c0206<br>Formula Expression: Formula String: A2; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@733037'},
{id: '9f4822d9-51e5-4f60-af9c-8cacee8c6dfd', label: 'FUNCEXEC\n21.0', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: 21.0<br>Type: FUNCTION<br>Id: 9f4822d9-51e5-4f60-af9c-8cacee8c6dfd<br>Formula Expression: Formula String: FUNCEXEC(C2, B2, A2, VALUE); Formula Values: FUNCEXEC(9.0, 7.0, 5.0, DEVDEF_1); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@733037'},
{id: '73550d9a-8350-478c-ac36-f547b6a6911b', label: 'B2\n7.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: 73550d9a-8350-478c-ac36-f547b6a6911b<br>Formula Expression: Formula String: B2; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: B2 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@733037'},
{id: 'f2d9ea37-d906-432d-bba6-7ddb41546e86', label: 'C2\n9.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: f2d9ea37-d906-432d-bba6-7ddb41546e86<br>Formula Expression: Formula String: C2; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: C2 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@733037'},
{id: 'd332ce5f-fab6-4696-b9ab-7f87202a42f3', label: 'VALUE\nDEVDEF_1', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF_1<br>Type: CONSTANT_VALUE<br>Id: d332ce5f-fab6-4696-b9ab-7f87202a42f3<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_1; Formula Ptg: DEVDEF_1; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@733037'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1bfd22bc-b21f-44ba-937f-709b6f9c0206', to: '9f4822d9-51e5-4f60-af9c-8cacee8c6dfd'},
{from: 'd332ce5f-fab6-4696-b9ab-7f87202a42f3', to: '9f4822d9-51e5-4f60-af9c-8cacee8c6dfd'},
{from: '73550d9a-8350-478c-ac36-f547b6a6911b', to: '9f4822d9-51e5-4f60-af9c-8cacee8c6dfd'},
{from: 'f2d9ea37-d906-432d-bba6-7ddb41546e86', to: '9f4822d9-51e5-4f60-af9c-8cacee8c6dfd'},
{from: '9f4822d9-51e5-4f60-af9c-8cacee8c6dfd', to: 'c9aa67c6-2b4d-4353-ac22-a6054e641569'}
                            ]);