var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0b7d6d5a-0672-4146-a81a-f8c8abce00ab', label: 'F6\n21.0', color: '#31b0d5', title: 'Name: F6<br>Value: 21.0<br>Type: CELL_WITH_FORMULA<br>Id: 0b7d6d5a-0672-4146-a81a-f8c8abce00ab<br>Formula Expression: Formula String: FUNCEXEC(C2, B2, A2, VALUE); Formula Values: FUNCEXEC(9.0, 7.0, 5.0, DEVDEF_1); Formula Ptg: 9.0, 7.0, 5.0, DEVDEF_1 FUNCEXEC ; Ptgs: C2, B2, A2, VALUE FUNCEXEC  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2a2bb0eb'},
{id: '32c40caf-c6ca-4b90-acc5-c671fee1df59', label: 'VALUE\nDEVDEF_1', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF_1<br>Type: CONSTANT_VALUE<br>Id: 32c40caf-c6ca-4b90-acc5-c671fee1df59<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_1; Formula Ptg: DEVDEF_1; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2a2bb0eb'},
{id: '3eb8d568-5e91-4eed-a1d3-1b7203782e71', label: 'B2\n7.0', color: '#31b0d5', title: 'Name: B2<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: 3eb8d568-5e91-4eed-a1d3-1b7203782e71<br>Formula Expression: Formula String: B2; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: B2 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2a2bb0eb'},
{id: '1a28cc6a-c78f-452e-abc5-038becd8894a', label: 'A2\n5.0', color: '#31b0d5', title: 'Name: A2<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 1a28cc6a-c78f-452e-abc5-038becd8894a<br>Formula Expression: Formula String: A2; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2a2bb0eb'},
{id: '8bec9d1a-fecb-4ea8-8ba5-1c0afad09b61', label: 'C2\n9.0', color: '#31b0d5', title: 'Name: C2<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: 8bec9d1a-fecb-4ea8-8ba5-1c0afad09b61<br>Formula Expression: Formula String: C2; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: C2 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2a2bb0eb'},
{id: 'd15cd10c-a9c0-424d-a234-c0a2a5704c37', label: 'FUNCEXEC\n21.0', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Value: 21.0<br>Type: FUNCTION<br>Id: d15cd10c-a9c0-424d-a234-c0a2a5704c37<br>Formula Expression: Formula String: FUNCEXEC(C2, B2, A2, VALUE); Formula Values: FUNCEXEC(9.0, 7.0, 5.0, DEVDEF_1); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2a2bb0eb'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '8bec9d1a-fecb-4ea8-8ba5-1c0afad09b61', to: 'd15cd10c-a9c0-424d-a234-c0a2a5704c37'},
{from: '1a28cc6a-c78f-452e-abc5-038becd8894a', to: 'd15cd10c-a9c0-424d-a234-c0a2a5704c37'},
{from: '3eb8d568-5e91-4eed-a1d3-1b7203782e71', to: 'd15cd10c-a9c0-424d-a234-c0a2a5704c37'},
{from: '32c40caf-c6ca-4b90-acc5-c671fee1df59', to: 'd15cd10c-a9c0-424d-a234-c0a2a5704c37'},
{from: 'd15cd10c-a9c0-424d-a234-c0a2a5704c37', to: '0b7d6d5a-0672-4146-a81a-f8c8abce00ab'}
                            ]);