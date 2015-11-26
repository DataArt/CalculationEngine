var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3947521d-a5a6-4e76-80a3-45b1ba0f4c85', label: 'A4\n1.0', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 3947521d-a5a6-4e76-80a3-45b1ba0f4c85<br>Formula Expression: Formula String: A4; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A4 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@23f5b5dc'},
{id: 'fbe00754-b81e-4194-ab18-d7cf77d3c90c', label: 'B4\n8.0', color: '#31b0d5', title: 'Name: B4<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: fbe00754-b81e-4194-ab18-d7cf77d3c90c<br>Formula Expression: Formula String: B4; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: B4 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@23f5b5dc'},
{id: 'e3402c7b-ab44-43e6-810a-c1c3eecda43f', label: 'C4\n0.0', color: '#31b0d5', title: 'Name: C4<br>Alias: null<br>Value: 0.0<br>Type: CELL_WITH_VALUE<br>Id: e3402c7b-ab44-43e6-810a-c1c3eecda43f<br>Formula Expression: Formula String: C4; Formula Values: 0.0; Formula Ptg: 0.0; Ptgs: C4 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@23f5b5dc'},
{id: 'ed48b661-5f16-47d3-b8a3-2dee5cbe5a4e', label: 'VALUE\nDEVDEF_3', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF_3<br>Type: CONSTANT_VALUE<br>Id: ed48b661-5f16-47d3-b8a3-2dee5cbe5a4e<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_3; Formula Ptg: DEVDEF_3; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@23f5b5dc'},
{id: '579e5dab-096d-4d40-a7e9-9805bdf3141c', label: 'FUNCEXEC\n3.5', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: 3.5<br>Type: FUNCTION<br>Id: 579e5dab-096d-4d40-a7e9-9805bdf3141c<br>Formula Expression: Formula String: FUNCEXEC(D4, C4, B4, A4, VALUE); Formula Values: FUNCEXEC(5.0, 0.0, 8.0, 1.0, DEVDEF_3); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@23f5b5dc'},
{id: 'b9ba7718-af8f-48bb-b899-0b461ccb082b', label: 'F8\n3.5', color: '#31b0d5', title: 'Name: F8<br>Alias: null<br>Value: 3.5<br>Type: CELL_WITH_FORMULA<br>Id: b9ba7718-af8f-48bb-b899-0b461ccb082b<br>Formula Expression: Formula String: FUNCEXEC(D4, C4, B4, A4, VALUE); Formula Values: FUNCEXEC(5.0, 0.0, 8.0, 1.0, DEVDEF_3); Formula Ptg: 5.0, 0.0, 8.0, 1.0, DEVDEF_3 FUNCEXEC ; Ptgs: D4, C4, B4, A4, VALUE FUNCEXEC  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@23f5b5dc'},
{id: '297fa0b2-c86f-42d9-9ec3-dd37b89a75c1', label: 'D4\n5.0', color: '#31b0d5', title: 'Name: D4<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 297fa0b2-c86f-42d9-9ec3-dd37b89a75c1<br>Formula Expression: Formula String: D4; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: D4 Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@23f5b5dc'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '297fa0b2-c86f-42d9-9ec3-dd37b89a75c1', to: '579e5dab-096d-4d40-a7e9-9805bdf3141c'},
{from: 'e3402c7b-ab44-43e6-810a-c1c3eecda43f', to: '579e5dab-096d-4d40-a7e9-9805bdf3141c'},
{from: 'ed48b661-5f16-47d3-b8a3-2dee5cbe5a4e', to: '579e5dab-096d-4d40-a7e9-9805bdf3141c'},
{from: '3947521d-a5a6-4e76-80a3-45b1ba0f4c85', to: '579e5dab-096d-4d40-a7e9-9805bdf3141c'},
{from: 'fbe00754-b81e-4194-ab18-d7cf77d3c90c', to: '579e5dab-096d-4d40-a7e9-9805bdf3141c'},
{from: '579e5dab-096d-4d40-a7e9-9805bdf3141c', to: 'b9ba7718-af8f-48bb-b899-0b461ccb082b'}
                            ]);